import {Component, OnInit, ViewChild} from '@angular/core';
import {SaleCallVisitService} from "../sale-call-visit.service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {SaleCallHead} from "../model/Sale-Call-Head";
import {DatePipe} from "@angular/common";
import {SaleCallDetail} from "../model/Sale-Call-Detail";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-call-visit-cross-expense',
  templateUrl: './call-visit-cross-expense.component.html',
  providers : [SaleCallVisitService]
})
export class CallVisitCrossExpenseComponent implements OnInit {

  @ViewChild('dialogalert') dialogalert: AlertDialogComponent;
  @ViewChild('Questiondialog') Questiondialog: AlertDialogComponent;
  @ViewChild('submitdialog') submitdialog: AlertDialogComponent;
  submitOrsave : string = '';

  subParams: Subscription;
  subscription: Subscription;

  saleH: SaleCallHead;
  selectsaleD: SaleCallDetail;
  code: string = "";
  username: string = "";
  comCode: string = "";
  task : string = "" ;
  vsale_no: string = '';
  vseq_no: string = '';

  checkLoader : boolean = true ;


  constructor(private userStorage: UserStorage,
              private saleCallVisitService: SaleCallVisitService,
              private route: ActivatedRoute,
              private dataPipe:DatePipe,
              private router: Router){

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.code = this.userStorage.getCode();
    this.username = this.userStorage.getUserName();
    this.comCode = this.userStorage.getComCodePort();

    this.subParams = this.route.queryParams.subscribe(
      (params: Params) => {
        this.vsale_no = params['sale_call_no'];
        this.vseq_no = params['seq'];
        this.task     = params['task'];

        //this.controlActionForm(this.task);

        this.getSaleCall();
      }
    );

  }

  getSaleCall() {
    let code = this.userStorage.getCode();
    let comCode = this.userStorage.getComCodePort();

    this.saleCallVisitService.eventselectsaleD.subscribe(
      (obj) => {
        console.log(obj.visitOutSide);
        this.selectsaleD = obj;}
    );


    this.subscription = this.saleCallVisitService.getSaleCallHead_Detail(
      "web", code, comCode, this.vsale_no
    ).subscribe(
      (json: any) => {
        //console.log(json);
        this.checkLoader = false ;
        this.saleCallVisitService.setListAns(json.LIST_DATA);
        this.saleH = SaleCallHead.parse(json.DATA);

        if (!this.saleH.ownr) { this.saleH.ownr = code };

        if (!this.saleH.com_code) {  this.saleH.com_code = comCode ;}

        if (!this.saleH.connect_since) {  this.saleH.connect_since = this.dataPipe.transform(new Date(),'MM/yyyy') ;}

        this.saleCallVisitService.setSaleCallHead(this.saleH);
        this.saleCallVisitService.setSaleCallDetail(this.saleH.listDetail);
        if (this.saleH.listDetail) {
          let tempObj = this.saleH.listDetail.find(ObjTemp => ObjTemp.seq_no == this.vseq_no) ;
          this.saleCallVisitService.setselectsaleD(tempObj);
        }
      }
    );





  }


  questionAction(action : string ) {
    // this.dialogalert.reset();
    // this.dialogalert.setModeSingle(1);
    this.submitOrsave = action;
    this.Questiondialog.setAction(action);
    this.Questiondialog.open();
  }

  actionOk(){
    this.saleCallVisitService.processCrossExpense(this.submitOrsave).subscribe(
      (data: any) => {
        console.log(data);


        if (this.submitOrsave == 'submit'){
          if (data.MSG.search('Success  submit') > -1) {
            this.submitdialog.setAction('INFORMATION');
            this.submitdialog.setMessage('Submit Complete');
            this.submitdialog.open();
          } else {
            this.dialogalert.setMessage("Submit Error");
            this.dialogalert.open();
          } ;

        }else{
           if(data.CODE == '200'){ this.dialogalert.setMessage("Save Complete");}
           else{                   this.dialogalert.setMessage("Save Error"); }
           this.dialogalert.open();
        }

      }
    );
  }

  backToHome(){
    this.router.navigate(['/home']);
  }

}
