import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {BlacklistChk} from "../blacklist-checking/model-blacklistchk";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {BlacklistResultService} from "../blacklist-service";
import {Router} from "@angular/router";
import {BlacklistResult} from "../blacklist-resultseach/model/model-blacklistresult";
import {BlacklistHistory} from "../blacklist-resultseach/model/model-blacklisthistory";
import {ModelExposureHistory} from "../blacklist-exposurehistorycompany/model/model-exposurehistory";
import { Location } from '@angular/common';
import {AlertDialogComponent} from "../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-exposureinquiry',
  templateUrl: './exposureinquiry.component.html'
})
export class ExposureinquiryComponent implements OnInit {

  @ViewChild('alertDialogComponent') alertDialogComponent: AlertDialogComponent;
  selectopt:string;
  formexposure : FormGroup;
  subscription : Subscription;
  modelBLchk : BlacklistChk;
  ListBlacklistResult:BlacklistResult[]=[];
  modelExposureHistory:ModelExposureHistory[]=[];
  ListBlacklistHistory:BlacklistHistory[]=[];
  constructor(private formexp: FormBuilder,private userStorage: UserStorage,
              private  BLService : BlacklistResultService,
              private router: Router,
              private _location:Location
  ) {

    this.createForm();
  }
  ngOnInit() {
    'ExposureinquiryComponent'
    this.selectopt = 'fullname';
  }

  backPage()
  {
    this._location.back();
  }

  createForm() {
    this.formexposure = this.formexp.group({
      firstname:new FormControl(),
      lastname:new FormControl(),
      regisnumber:new FormControl(),
      agrcode:new FormControl(),
      idcard:new FormControl()
    });

  }

  onSubmit()
  {

    let firstname,lastname,regisnumber,agrcode,itype,idcard :string;
    itype = '0';
    let checkValue = 0;

    if(this.selectopt==='fullname')
    {
      firstname = this.formexposure.value.firstname ?  this.formexposure.value.firstname:'';
      lastname = this.formexposure.value.lastname ? this.formexposure.value.lastname:'';
      regisnumber = '';
      agrcode = '';
      idcard = '';
      itype = '2';
      if(firstname==''&&lastname=='')
        checkValue = 1;
      this.BLService.controlTabBlacklistChecking = 2;
    }
    else if(this.selectopt==='regis')
    {
      firstname = '';
      lastname = '';
      regisnumber = this.formexposure.value.regisnumber ? this.formexposure.value.regisnumber : '';
      agrcode = '';
      idcard = '';
      itype = '3';
      if(regisnumber=='')
        checkValue = 1;
      this.BLService.controlTabBlacklistChecking = 3;
    }
    else if(this.selectopt==='agrcode')
    {
      firstname = '';
      lastname = '';
      regisnumber = '';
      agrcode = this.formexposure.value.agrcode ? this.formexposure.value.agrcode : '';
      itype = '4'
      if(agrcode=='')
        checkValue = 1;
      this.BLService.controlTabBlacklistChecking = 4;
    }
    else if(this.selectopt==='idcard')
    {
      firstname = '';
      lastname = '';
      regisnumber = '';
      idcard = this.formexposure.value.idcard ? this.formexposure.value.idcard : '';
      itype = '5'
      if(idcard=='')
        checkValue = 1;
      this.BLService.controlTabBlacklistChecking = 5;
    }
    if (lastname == null)
    {
      lastname = '';
    }

    if(checkValue == 1)
    {
      this.alertDialogComponent.open();
    }
    else {
      this.modelBLchk = new BlacklistChk();
      this.modelBLchk.FIRST_NAME = firstname;
      this.modelBLchk.LAST_NAME = lastname;
      /*  this.modelBLchk.ID_CARD = '';
       this.modelBLchk.ENG_NUM = '';
       this.modelBLchk.CHASSIS = '';
       this.modelBLchk.BRAND = '';
       this.modelBLchk.LICENCE = '';*/
      // let userData:User = User.parse(this.userStorage.getStorage());
      // this.modelBLchk.USER = userData.fullNameE;
      this.modelBLchk.USER =this.userStorage.userName;
      this.modelBLchk.iregisnumber = regisnumber;
      this.modelBLchk.iagr_code = agrcode;
      this.modelBLchk.itype = itype;
      this.modelBLchk.ID_CARD = idcard;
      // console.log(this.modelBLchk);
      this.BLService.setModelBLchk(this.modelBLchk);

      this.subscription = this.BLService.getBlacklistResult("web",this.modelBLchk).subscribe(
        (data: any) => {

           console.log(data);

          //     this.ListBlacklistHistory = BlacklistHistory.parse(data.DATA.HISTORY_LIST);
          //console.log(this.ListBlacklistResult);

          if(this.BLService.controlTabBlacklistChecking > 2)
          {
            console.log(data.DATA.RESULT_LIST);
            this.modelExposureHistory = ModelExposureHistory.parse(data.DATA.RESULT_LIST);
            this.BLService.setExposureHistory(this.modelExposureHistory);
          }
          else
          {
            this.ListBlacklistResult = BlacklistResult.parse(data.DATA.RESULT_LIST);
            this.BLService.setBlacklistResult(this.ListBlacklistResult);
          }

          //    this.BLService.setBlacklistHistory(this.ListBlacklistHistory);
          //
          this.BLService.tabName='Exposure Inquiry';
          if (data.MSG == 'Complete'){

            this.router.navigate(['blacklist/checking']);}
            else
            this.router.navigate(['blacklist/blacklist-exposureinquiry']);
        }
      );
    }




    //this.router.navigate(['blacklist/checking']);

  }

}
