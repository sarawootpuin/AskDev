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
              private _location: Location
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
      // console.log(this.modelBLchk);
      this.subscription = this.BLService.getBlacklistResult("web", this.modelBLchk).subscribe(
        (data: any) => {
          // console.log(data.DATA);
          this.ListBlacklistResult = BlacklistResult.parse(data.DATA.RESULT_LIST);
          this.ListBlacklistHistory = BlacklistHistory.parse(data.DATA.HISTORY_LIST);
          this.BLService.setBlacklistResult(this.ListBlacklistResult);
          this.BLService.setBlacklistHistory(this.ListBlacklistHistory);
          //
          if (data.MSG == 'Complete') {
            //
            // this.alertDialogComponent.setTitle('Message Information');
            // this.alertDialogComponent.setTitle('พบสินเชื่อกับบริษัท!!');
            // if(!this.alertDialogComponent.open())
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
