import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {VerificationDetailService} from "../verification-detail.service";
import {Subscription} from "rxjs/Subscription";
import {MainTabModel} from "../../model/mainTab.model";
import {DropdownModel} from "../../model/dropdown.model";
import {DatePipe} from "@angular/common";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";
import {Router} from "@angular/router";
import {BlacklistShareCenterComponent} from "../../../blacklist/blacklist-share-center/blacklist-share-center.component";
import {BlShareCenterService} from "../../../blacklist/blacklist-share-center/blacklist-share-center-service";


@Component({
  selector: 'app-mainTab-verification-detail',
  templateUrl: './mainTab-verification-detail.component.html',
  styleUrls: ['./mainTab-verification-detail.component.css']
})
export class mainTabVerificationDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  mainTab: MainTabModel = new MainTabModel();
  checkReadOnly :Boolean;
  checkEnquiry  :Boolean;
  nameSearchBL  :String;
  @ViewChild('dialogMainVerify') dialogMainVerify: AlertDialogComponent;
  @ViewChild('ncbDialog') ncbDialog: ActionDialogComponent;
  @ViewChild('blDialog')   blDialog: ActionDialogComponent;


  constructor(private verficationDetailService: VerificationDetailService, private datePipe: DatePipe,private router:Router,private blShareCenterService:BlShareCenterService) {
  }

  ngOnInit() {
    console.log('onInitMain');
    this.mainTab = new MainTabModel();
    this.checkEnquiry = this.verficationDetailService.checkEnquiry;
    this.checkReadOnly  = this.verficationDetailService.checkReadOnly;
    this.verficationDetailService.eventTabMain.subscribe(
      (obj: MainTabModel) => {
        this.mainTab = obj;
        console.log(this.mainTab.stg_id);
        if (this.mainTab.stg_id == '4') {
          this.verficationDetailService.checkReadOnly = true;
        }
        this.checkEnquiry = this.verficationDetailService.checkEnquiry;
        this.checkReadOnly  = this.verficationDetailService.checkReadOnly;
        this.setNameSearchBL();
      }
    );
    this.verficationDetailService.refreshData();
  }

  onChangedate(indate: any) {
    let strDate = this.datePipe.transform(indate, 'dd/MM/yyyy');
    return strDate;

  }

  setNameSearchBL(){
    if (this.mainTab.ent_cat === 'Individual'){
      //get surname
      this.nameSearchBL =this.mainTab.ent_nme.substring(String(this.mainTab.ent_nme).indexOf( " " ));
    }
    else{
      this.nameSearchBL =  this.mainTab.ent_nme;
    }
  }

  onChangeDropDown(model: DropdownModel[], position: number) {

    for (var i = 0; i < model.length; i++) {
      if (i == position) {
        model[i].selected = 'Y';
      }
      else {
        model[i].selected = 'N';
      }
    }

  }

  clickNcbDialog(){
    window.scrollTo(0,0);
    setTimeout(()=>{
      this.ncbDialog.open();
    },200);

  }

  clickBlDialog(){
    window.scrollTo(0,0);
    setTimeout(()=>{
        this.blDialog.open();
    },200);
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }


}
