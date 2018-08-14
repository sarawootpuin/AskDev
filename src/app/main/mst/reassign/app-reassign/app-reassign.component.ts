import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ReassignService} from "../reassign.service";
import {ActivatedRoute} from "@angular/router";
import {ReassignListWork} from "../reassign-model/ReassignListWork";
import {isNullOrUndefined} from "util";
import {Message} from 'primeng/components/common/api';
import {LazyLoadEvent} from "primeng/primeng";
import {ServiceEndpoint} from "../../../../shared/config/service-endpoint";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-app-reassign',
  templateUrl: './app-reassign.component.html'
})
export class AppReassignComponent implements OnInit,OnChanges,OnDestroy {

  vcom_code :string;
  vcode :string;
  OutURL :string;


  mkt_toname :string;
  mkt_tocode :string;

  msgs: Message[] = [];
  subscription : Subscription;
  subscriptionReassign : Subscription;
  ListWork :ReassignListWork[];
  selectListWork :ReassignListWork[];
  constructor(private pService:ReassignService,
              private service: ServiceEndpoint,
              private userStorage: UserStorage,
              private route:ActivatedRoute) {
      this.OutURL =   this.service.url + this.service.sale_call_api+`/ask/reassign/GetListMKT?device=web&user=${this.userStorage.getUserName()}` ;
      this.mkt_toname = "";
      this.mkt_tocode = "";
  }

  ngOnInit() {

    this.vcom_code = this.route.snapshot.queryParams['comcode'];
    this.vcode = this.route.snapshot.queryParams['code'];
    this.ngOnChanges()

  }

  ngOnChanges(){
    this.subscription = this.pService.getListWork("web",this.userStorage.getUserName(),this.vcom_code,this.vcode).subscribe(
      (data : any) => {
        this.ListWork = ReassignListWork.parse(data.LIST_DATA);
      }
    );
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
    if(this.subscriptionReassign){
      this.subscriptionReassign.unsubscribe()
    }
  }

  getName(data :string)
  {
    this.mkt_toname = data;
  }
  getCode(data :string)
  {
    //console.log(data);
    this.mkt_tocode = data;
  }

  clickProcess(){
    if (this.mkt_tocode != "" ){
      if ( !isNullOrUndefined(this.selectListWork) ) {
             //console.log("Send to reassign");
             //console.log(this.selectListWork);
              this.subscriptionReassign = this.pService.postsendReassign("web", this.userStorage.getUserName() ,this.userStorage.getCode(),this.mkt_tocode,this.selectListWork).subscribe(
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
