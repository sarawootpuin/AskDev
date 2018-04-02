import {Component, OnChanges, OnInit} from '@angular/core';
import {ReassignService} from "../reassign.service";
import {ActivatedRoute} from "@angular/router";
import {ReassignListWork} from "../reassign-model/ReassignListWork";
import {isNullOrUndefined} from "util";
import {Message} from 'primeng/components/common/api';
import {LazyLoadEvent} from "primeng/primeng";


@Component({
  selector: 'app-app-reassign',
  templateUrl: './app-reassign.component.html'
})
export class AppReassignComponent implements OnInit,OnChanges {

  vcom_code :string;
  vcode :string;
  OutURL :string;


  mkt_toname :string;
  mkt_tocode :string;

  msgs: Message[] = [];

  ListWork :ReassignListWork[];
  selectListWork :ReassignListWork[];
  constructor(private pService:ReassignService
            , private route:ActivatedRoute) {
      this.OutURL =  "http://javadev03:8095/Sale_calltodo/ask/reassign/GetListMKT?DEPTCODE=2210&device=web&user=CHANTANA.CH" ;

      this.mkt_toname = "";
      this.mkt_tocode = "";
  }

  ngOnInit() {

    this.vcom_code = this.route.snapshot.queryParams['comcode'];
    this.vcode = this.route.snapshot.queryParams['code'];
    this.ngOnChanges()

  }

  ngOnChanges(){
    this.pService.getListWork("web","sira.ch",this.vcom_code,this.vcode).subscribe(
      (data : any) => {
        this.ListWork = ReassignListWork.parse(data.LIST_DATA);
      }
    );
  }

  getName(data :string)
  {
    this.mkt_toname = data;
  }
  getCode(data :string)
  {
    console.log(data);
    this.mkt_tocode = data;
  }

  clickProcess(){
    if (this.mkt_tocode != "" ){
      if ( !isNullOrUndefined(this.selectListWork) ) {
             console.log("Send to reassign");
             console.log(this.selectListWork);
              this.pService.postsendReassign("web","sira.ch","1000000821",this.mkt_tocode,this.selectListWork).subscribe(
                (data : any) => {

                  let msgreturn = data.MSG ;
                  this.msgs = [];
                  if ( msgreturn == "Success" )
                      { this.showSuccess();
                        this.ngOnChanges();}
                  else
                      { this.showError() }

                }
              );
      }
      else { this.showWarn("Please Choose Sale Call For Assign"); }
    }
    else { this.showWarn("Please Select Marketing For Assign"); }
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Success Message', detail:'Submitted Success'});
  }
  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
  }

  showWarn( msg :string) {
    this.msgs = [];
    this.msgs.push({severity:'warn', summary:'Warn Message', detail:msg});
  }

  loadCarsLazy(event: LazyLoadEvent){
    setTimeout(() => {}, 10);
  }

}
