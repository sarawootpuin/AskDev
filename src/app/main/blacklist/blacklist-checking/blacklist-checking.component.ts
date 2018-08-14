import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BlacklistChk} from "./model-blacklistchk";
import {Subscription} from "rxjs/Subscription";
import {BlacklistResult} from "../blacklist-resultseach/model/model-blacklistresult";
import {BlacklistResultService} from "../blacklist-service";
import {Router} from "@angular/router";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {BlacklistHistory} from "../blacklist-resultseach/model/model-blacklisthistory";
import {AlertDialogComponent} from "../../../shared/center/alert-dialog/alert-dialog.component";
import {Location} from '@angular/common';
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";

@Component({
  selector: 'app-blacklistchecking',
  templateUrl: './blacklist-checking.component.html'
})
export class BlacklistcheckingComponent implements OnInit {
  blacklistchecking: FormGroup;
  modelBLchk: BlacklistChk;
  subscription: Subscription;
  ListBlacklistResult: BlacklistResult[] = [];
  ListBlacklistHistory: BlacklistHistory[] = [];

  @ViewChild('alertDialogComponent') alertDialogComponent: AlertDialogComponent;

  constructor(private BLChecking: FormBuilder,
              private  BLService: BlacklistResultService,
              private router: Router,
              private userStorage: UserStorage,
              private _location: Location,
              private serviceEndpoint: ServiceEndpoint,
              //   private applyBlacklistService : ApplyBlacklistService,
              //   private dataPipe : DatePipe
  ) {
    this.createForm();

  }

  FIRST_NAME: string;
  LAST_NAME: string;
  ID_CARD: string;
  ENG_NUM: string;
  CHASSIS: string;
  BRAND: string;
  LICENCE: string;
  CHECK_GROUP:string='n/a';

  createForm() {
    this.blacklistchecking = this.BLChecking.group({
      FIRST_NAME: new FormControl(),
      LAST_NAME: new FormControl(),
      ID_CARD: new FormControl(),
      ENG_NUM: new FormControl(),
      CHASSIS: new FormControl(),
      BRAND: new FormControl(),
      LICENCE: new FormControl()

    })
  }

  backPage() {
    this._location.back();
  }

  ngOnInit() {

  }

  handelPrint(){
    var gropForReport = 0;
    switch(this.CHECK_GROUP) {
      case "individual": {
        gropForReport = 1;
        break;
      }
      case "juristic": {
        gropForReport =2;
        break;
      }
      default: {
        gropForReport =0;
        break;
      }
    }

    let strAttach = this.serviceEndpoint.url_report + `/result?report=BL\\BlackList_01.fr3&pGroup=${gropForReport}&pFName=${this.blacklistchecking.value.FIRST_NAME ? this.blacklistchecking.value.FIRST_NAME : '*'}&pLName=${this.blacklistchecking.value.LAST_NAME ? this.blacklistchecking.value.LAST_NAME : '*'}&pIDCard=${this.blacklistchecking.value.ID_CARD ? this.blacklistchecking.value.ID_CARD : '*'}&pEngNum=${this.blacklistchecking.value.ENG_NUM ? this.blacklistchecking.value.ENG_NUM : '*'}&pChassis=${this.blacklistchecking.value.CHASSIS ? this.blacklistchecking.value.CHASSIS : '*'}&pBrand=${this.blacklistchecking.value.BRAND ? this.blacklistchecking.value.BRAND : '*'}&pLicence=${this.blacklistchecking.value.LICENCE ? this.blacklistchecking.value.LICENCE : '*'}&format=pdf`;
    console.log(strAttach);
    window.open(strAttach, '_blank');

  }

  onSubmit() {
    this.BLService.controlTabBlacklistChecking = 1;
    this.modelBLchk = new BlacklistChk();
    this.modelBLchk.FIRST_NAME = this.blacklistchecking.value.FIRST_NAME ? this.blacklistchecking.value.FIRST_NAME : '';
    this.modelBLchk.LAST_NAME = this.blacklistchecking.value.LAST_NAME ? this.blacklistchecking.value.LAST_NAME : '';
    this.modelBLchk.ID_CODE = this.blacklistchecking.value.ID_CARD ? this.blacklistchecking.value.ID_CARD : '';
    this.modelBLchk.ENG_NUM = this.blacklistchecking.value.ENG_NUM ? this.blacklistchecking.value.ENG_NUM : '';
    this.modelBLchk.CHASSIS = this.blacklistchecking.value.CHASSIS ? this.blacklistchecking.value.CHASSIS : '';
    this.modelBLchk.BRAND = this.blacklistchecking.value.BRAND ? this.blacklistchecking.value.BRAND : '';
    this.modelBLchk.LICENCE = this.blacklistchecking.value.LICENCE ? this.blacklistchecking.value.LICENCE : '';


    if (this.modelBLchk.FIRST_NAME == '' &&
      this.modelBLchk.LAST_NAME == '' &&
      this.modelBLchk.ID_CODE == ''&&
      this.modelBLchk.ENG_NUM == '' &&
      this.modelBLchk.CHASSIS == '' &&
      this.modelBLchk.BRAND == '' &&
      this.modelBLchk.LICENCE == ''
    ) {
      this.alertDialogComponent.open();
    }
    else {

      this.modelBLchk.itype = '1'
      // let userData = userStorage.userName;
      this.modelBLchk.USER = this.userStorage.getCode();
      this.BLService.setModelBLchk(this.modelBLchk);
      this.subscription = this.BLService.getBlacklistResult("web", this.modelBLchk).subscribe(
        (data: any) => {
          this.ListBlacklistResult = BlacklistResult.parse(data.DATA.RESULT_LIST);
          this.ListBlacklistHistory = BlacklistHistory.parse(data.DATA.HISTORY_LIST);
          this.ListBlacklistResult = this.fillterByGroup(this.ListBlacklistResult);
          this.BLService.setBlacklistResult(this.ListBlacklistResult);
          this.BLService.setBlacklistHistory(this.ListBlacklistHistory);
          //
          if (data.MSG == 'Complete') {
            //
            // this.alertDialogComponent.setTitle('Message Information');
            // this.alertDialogComponent.setTitle('พบสินเชื่อกับบริษัท!!');
            // if(!this.alertDialogComponent.open())
            this.BLService.tabName='Blacklist Checking';
            if (this.BLService.blShared) {
              this.BLService.setComponentNameOnShow('checking');
            }
            else{
              this.router.navigate(['blacklist/checking']);
            }
          }
          else {
            // this.alertDialogComponent.setTitle('Message Information');
            // this.alertDialogComponent.setTitle('ไม่พบสินเชื่อกับบริษัท!!');
            // this.alertDialogComponent.open();

            if (this.BLService.blShared) {
              this.BLService.setComponentNameOnShow('search');
            }
            else{
              this.router.navigate(['blacklist/search']);
            }

          }
        }
      );
    }


  }

  printbtn(btn: string) {
    // console.log(btn);
  }

  sentresult() {

  }

  fillterByGroup(data:BlacklistResult[]){
    if(this.CHECK_GROUP == 'individual'){
     return data.filter(obj => obj.LAST_NAME !== '-')
    }
    else if(this.CHECK_GROUP == 'juristic'){
     return data.filter(obj => obj.LAST_NAME === '-')
    }
    else{
      return data;
    }
  }
  cancelButton() {
    this.FIRST_NAME = '';
    this.LAST_NAME = '';
    this.ID_CARD = '';
    this.ENG_NUM = '';
    this.CHASSIS = '';
    this.BRAND = '';
    this.LICENCE = '';
  }

}
