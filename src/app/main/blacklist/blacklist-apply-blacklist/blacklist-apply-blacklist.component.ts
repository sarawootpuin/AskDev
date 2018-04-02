import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ModelApplyblacklist} from "./model/model-applyblacklist";
import {Subscription} from "rxjs/Subscription";
import {ApplyBlacklistService} from "./blacklist-apply-blacklist-service";
import {DatePipe} from "@angular/common";
import {AlertDialogComponent} from "../../../shared/center/alert-dialog/alert-dialog.component";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {CalendarModule} from 'primeng/primeng';
import {ActionDialogComponent} from "../../../shared/center/action-dialog/action-dialog.component";
import {ActionReadExcelComponent} from "../../../shared/center/action-read-excel/action-read-excel.component";
import {async} from "rxjs/scheduler/async";
import {MyCurrencyPipe} from "../../../shared/center/my-currency.pipe";
import {BlacklistLanguage} from "../blacklist.language";

@Component({
  selector: 'app-apply-blacklist',
  templateUrl: './blacklist-apply-blacklist.component.html'
})
export class ApplyBlacklistComponent implements OnInit {
  blacklistFG : FormGroup;
  modelBL : ModelApplyblacklist;
  @ViewChild('alertDialogComponent') alertDialogComponent : AlertDialogComponent;
  @ViewChild('alertDialogComponent2') alertDialogComponent2 : AlertDialogComponent;
  @ViewChild('alertDialogComponent3') alertDialogComponent3: AlertDialogComponent;
  @ViewChild('actionReadExcelComponent') actionReadExcelComponent:ActionReadExcelComponent;
  subscription: Subscription;
  PREFIX_NAME :string= '';
  AMLO :boolean;
  FIRST_NAME:string='';
  LAST_NAME:string='';
  LAW_DATE:string='';
  LAW_AMOUNT:string='';
  ID_CARD:string='';
  LAW_SUIT:string='';
  ACCUSER:string='';
  MEDIA:string='';
  ENG_NUM:string='';
  CHASSIS:string='';
  BRAND:string='';
  LICENCE:string='';
  REMARK:string='';
  saveSuccess : Boolean;
  ///////////////////////
  testComponent:string='';



  display: boolean = false;

  UseComponent(value:any)
  {
     console.log(value);
    this.testComponent = value;
  }

  showDialog() {
    this.alertDialogComponent3.setAction('SAVE');
    if(this.FIRST_NAME && this.LAST_NAME)
    {
      this.alertDialogComponent3.open();
    }
    else {
      this.alertDialogComponent2.open();
    }

  }

  constructor(private BLFG: FormBuilder,
  private applyBlacklistService : ApplyBlacklistService,
              private dataPipe : DatePipe,
              private  userStorage:UserStorage,
              private myCurrencyPipe : MyCurrencyPipe,
              private blacklistLanguage:BlacklistLanguage
   ) {
    this.createForm();
  }

  async testReadFile()
  {
    let num:any[]=[];
    num.push(1);
    num.push(2);
    num.push(3);
    num.push(4);
    let readExcel;
    setInterval(() =>  {
      readExcel =  this.actionReadExcelComponent.getmodelReadExcel();

    let score_j;
    for(let i=0;i<readExcel.length;i++)
    {
      for(let j=0;j<readExcel[i].length;j++)
      {
        if(readExcel[i][j] == 'Score')
        {
          score_j = j;
        }
      }
    }
    console.log(score_j);
    },6000);
  }

  changeLanguage()
  {
    if(this.blacklistLanguage.applyBlacklistComponent.default.language == 'TH')
    {
      this.blacklistLanguage.applyBlacklistComponent.default = this.blacklistLanguage.applyBlacklistComponent.en;
    }
    else
    {
      this.blacklistLanguage.applyBlacklistComponent.default = this.blacklistLanguage.applyBlacklistComponent.th;
    }

  }

  createForm() {
    this.blacklistFG = this.BLFG.group({
      PREFIX_NAME:new FormControl(this.PREFIX_NAME,Validators.required),
      // new FormControl(this.hero.name, [
      //   Validators.required,
      //   Validators.minLength(4),
      //   forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      // ])
      FIRST_NAME:new FormControl(),// <--- the FormControl called "name"
      LAST_NAME:new FormControl(),
      LAW_DATE:new FormControl(),
      LAW_AMOUNT:new FormControl(),
      ID_CARD:new FormControl(),
      LAW_SUIT:new FormControl(),
      ACCUSER:new FormControl(),
      MEDIA:new FormControl(),
      ENG_NUM:new FormControl(),
      CHASSIS:new FormControl(),
      BRAND:new FormControl(),
      LICENCE:new FormControl(),
      REMARK:new FormControl(),
      AMLO:new FormControl()
    });

  }

  onSubmit() {

    let PREFIX_NAME = this.blacklistFG.value.PREFIX_NAME;
    let FIRST_NAME = this.blacklistFG.value.FIRST_NAME;
    let LAST_NAME = this.blacklistFG.value.LAST_NAME;
    let LAW_DATE = this.blacklistFG.value.LAW_DATE;
    let LAW_AMOUNT = this.blacklistFG.value.LAW_AMOUNT;
    let ID_CARD = this.blacklistFG.value.ID_CARD;
    let LAW_SUIT=this.blacklistFG.value.LAW_SUIT;
    let ACCUSER = this.blacklistFG.value.ACCUSER;
    let MEDIA= this.blacklistFG.value.MEDIA;
    let ENG_NUM= this.blacklistFG.value.ENG_NUM;
    let CHASSIS= this.blacklistFG.value.CHASSIS;
    let BRAND= this.blacklistFG.value.BRAND;
    let LICENCE= this.blacklistFG.value.LICENCE;
    let REMARK= this.blacklistFG.value.REMARK;
    let AMLO = '';
    if(this.blacklistFG.value.AMLO == true)
    {
      AMLO = 'Y';
    }
    else
    {
      AMLO = '';
    }

    this.modelBL = new ModelApplyblacklist();
    this.modelBL.PREFIX_NAME = PREFIX_NAME;
    this.modelBL.FIRST_NAME = FIRST_NAME;
    this.modelBL.LAST_NAME = LAST_NAME;
    this.modelBL.LAW_DATE = this.dataPipe.transform(LAW_DATE,'dd/MM/yyyy');
    this.modelBL.LAW_AMOUNT = this.myCurrencyPipe.convertToNumber(LAW_AMOUNT,'%');
    this.modelBL.ID_CARD = ID_CARD;
    this.modelBL.LAW_SUIT = LAW_SUIT;
    this.modelBL.ACCUSER = ACCUSER;
    this.modelBL.MEDIA = MEDIA;
    this.modelBL.ENG_NUM= ENG_NUM;
    this.modelBL.CHASSIS= CHASSIS
    this.modelBL.BRAND= BRAND;
    this.modelBL.LICENCE= LICENCE;
    this.modelBL.REMARK= REMARK;
    this.modelBL.AMLO=AMLO;
    this.modelBL.INPUT_BY=this.userStorage.getCode();
    this.modelBL.LAST_UPDATE_BY=this.userStorage.getCode();
   // console.log(this.modelBL);
   // applyBlacklistService.ApplyInsertBlacklist(this.modelBL);
    //console.log(this.modelBL);
    this.saveSuccess = false;
    this.subscription = this.applyBlacklistService.ApplyInsertBlacklist(this.modelBL).subscribe(
      (data: any) => {
      //  console.log(data);
        this.alertDialogComponent.setAction('INFORMATION');
        this.alertDialogComponent.open();
        this.saveSuccess = true;
      }
    )
    this.clearinputform();


  }

  showDate()
  {
    this.LAW_DATE = this.dataPipe.transform(this.LAW_DATE,'dd/MM/yyyy');
  }

  ngOnInit() {
       this.saveSuccess = false;
    this.blacklistLanguage.applyBlacklistComponent.default = this.blacklistLanguage.applyBlacklistComponent.en;

  }

  clearinputform()
  {
      this.PREFIX_NAME = '';
      this.AMLO = false;
      this.FIRST_NAME = '';
      this.LAST_NAME = '';
      this.LAW_DATE = '';
      this.LAW_AMOUNT ='';
      this.ID_CARD='';
      this.LAW_SUIT='';
      this.ACCUSER='';
      this.MEDIA='';
      this.ENG_NUM='';
      this.CHASSIS='';
      this.BRAND='';
      this.LICENCE='';
      this.REMARK='';
  }

}
