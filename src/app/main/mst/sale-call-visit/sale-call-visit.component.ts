import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {SaleCallVisitService} from "./sale-call-visit.service";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {SaleCallHead} from "./model/Sale-Call-Head";
import {Message} from "primeng/primeng";
import {AlertDialogComponent} from "../../../shared/center/alert-dialog/alert-dialog.component";
import {CallVisitExposureservice} from "./call-visit-detail/call-visit-exposure/call-visit-exposure.service";
import {ActionDialogComponent} from "../../../shared/center/action-dialog/action-dialog.component";
declare var $: any;

@Component({
  selector: 'app-sale-call-visit',
  templateUrl: './sale-call-visit.component.html',
  styleUrls: ['./sale-call-visit.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers : [SaleCallVisitService,CallVisitExposureservice]
})
export class SaleCallVisitComponent implements OnInit, OnDestroy {
  @ViewChild('dialogalert') dialogalert: AlertDialogComponent;
  @ViewChild('Questiondialog') Questiondialog: AlertDialogComponent;
  @ViewChild('submitdialog') submitdialog: AlertDialogComponent;
  submitOrsave : string = '';

  subParams: Subscription;
  subscription: Subscription;
  vsale_no: string = '';
  vcard_no: string = '';
  saleH: SaleCallHead;
  msgs: Message[] = [];

  code: string = "";
  username: string = "";
  comCode: string = "";
  task : string = "" ;

  checkLoader : boolean = true ;

  btnFormSave : boolean = false ;
  btnFormSubmit : boolean = false ;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private saleCallVisitService: SaleCallVisitService,
              private saleCallExposureser :CallVisitExposureservice,
              private userStorage: UserStorage) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.code = this.userStorage.getCode();
    this.username = this.userStorage.getUserName();
    this.comCode = this.userStorage.getComCodePort();

    this.subParams = this.route.queryParams.subscribe(
      (params: Params) => {
        this.vsale_no = params['sale_call_no'];
        this.vcard_no = params['card_no'];
        this.task     = params['task'];


        this.controlActionForm(this.task);
        if (this.vcard_no) {
             this.saleCallExposureser.setNewCardNO(this.vcard_no); }
        this.getSaleCall();
      }
    )
  }

  ngOnDestroy() {
    if (this.subParams != null) {
      this.subParams.unsubscribe();
    }
     if (this.subscription != null){
       this.subscription.unsubscribe();
     }
  }

  getSaleCall() {
    let code = this.userStorage.getCode();
    let comCode = this.userStorage.getComCodePort();
    this.subscription = this.saleCallVisitService.getSaleCallHead_Detail(
      "web", code, comCode, this.vsale_no
    ).subscribe(
      (json: any) => {
        console.log(json);
        this.checkLoader = false ;
        this.saleCallVisitService.setListAns(json.LIST_DATA);
        this.saleH = SaleCallHead.parse(json.DATA);

        if (!this.saleH.ownr) { this.saleH.ownr = code };

        if (!this.saleH.com_code) {
          this.saleH.com_code = comCode
        }
        this.saleCallVisitService.setSaleCallHead(this.saleH);
        this.saleCallVisitService.setSaleCallDetail(this.saleH.listDetail);

        if (!this.vcard_no) {
          this.saleCallExposureser.setNewCardNO(this.saleH.new_card_no );
        }

      }
    );
  }

  Savesalecall() {
      this.saleCallVisitService.sendSaleCall("web", this.username, this.comCode
        , this.vsale_no, "save").subscribe(
        (data: any) => {
          console.log(data);
          if ( data.CODE != '500'){
              this.router.navigate(['/SaleCall'], {
                queryParams: {
                  sale_call_no: data.CODE,
                  task : this.task
               }
              });
            this.dialogalert.setMessage("Save Complete");
            this.dialogalert.open();
          } else {
            this.dialogalert.setMessage("Save Error");
            this.dialogalert.open();
          }
        }
      );
  }

  Submitsalecall() {
      this.saleCallVisitService.sendSaleCall("web", this.username, this.comCode,
        this.vsale_no, "submit").subscribe(
        (test: any) => {
          console.log(test);
          if (test.MSG.search('Success  submit') > -1) {
            this.submitdialog.setAction('INFORMATION');
            this.submitdialog.setMessage('Submit Complete');
            this.submitdialog.open();
          } else {
            this.dialogalert.setMessage("Submit Error");
            this.dialogalert.open();
          } ;
        }
      );
  }

  questionAction(action : string ){
    if (action == 'SAVE') {
      this.dialogalert.reset() ;
      this.dialogalert.setModeSingle(1);
      this.msgs = [];
      this.msgs = this.saleCallVisitService.validationOnSave();
      if (this.msgs.length > 1){
        this.dialogalert.setModeSingle(0);
        for (let i = 0; i < this.msgs.length; i++){
          this.dialogalert.addMessage(this.msgs[i].detail);
        }
        this.dialogalert.open();
      }else {
        this.submitOrsave = action ;
        this.Questiondialog.setAction(action);
        this.Questiondialog.open();
      }
    }
    else if (action == 'SUBMIT'){
      this.dialogalert.reset() ;
      this.dialogalert.setModeSingle(1);
      this.msgs = [];
      this.msgs = this.saleCallVisitService.ValidationSaleCallHead();
      if (this.msgs.length > 1){
        this.dialogalert.setModeSingle(0);
        for (let i = 0; i < this.msgs.length; i++){
          this.dialogalert.addMessage(this.msgs[i].detail);
        }
        this.dialogalert.open();
      }else{
          this.submitOrsave = action ;
          this.Questiondialog.setAction(action);
          this.Questiondialog.open();
      }
    }
  }

  actionOk(){
    if(this.submitOrsave == 'SAVE' ){
      this.Savesalecall() ;
    }
    else if (this.submitOrsave == 'SUBMIT'){
      this.Submitsalecall();
    }
  }

  backToHome(){
    this.router.navigate(['/home']);
  }

  controlActionForm(task :string){
    this.btnFormSave = true ;
    this.btnFormSubmit = true;

    if (!task){
      this.btnFormSubmit = false ;
      this.btnFormSave   = false ;
    }
    else
    if (task == 'Wait For Apply CA'){
      this.btnFormSubmit = false ;
      this.btnFormSave   = false ;
    }
  }



  showReport(){
    if (this.vsale_no) {
      let sale_no: string = this.vsale_no.replace("/", "_");
      let strURL = '' ;
      //strURL = `http://192.168.112.125:8097/result?report=MKT\\CA_HPLS_01.fr3&p_ca_no=${ca_no}&p_id_card=${this.creditApplicationService.newCardNo}&ca_no=${ca_no}&com_code=${this.comCode}&format=pdf`;

      strURL = `http://192.168.112.125:8097/result?report=MKT\\CallVisit_01.fr3&SaleCallNo=${sale_no}&SeqNo=1&format=pdf`;

      // http://192.168.112.125:8097/result?report=MKT\CallVisit_01.fr3&SaleCallNo=61_00064&SeqNo=1&format=pdf
      window.open(strURL, '_blank');
      console.log(strURL);
    }
  }
}
