import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {caHead} from "./model/ca-head";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {creditApplicationService} from "./credit-application.service";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";
import {ActionDialogComponent} from "../../../shared/center/action-dialog/action-dialog.component";
import {AlertDialogComponent} from "../../../shared/center/alert-dialog/alert-dialog.component";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";


@Component({
  selector: 'app-credit-application',
  templateUrl: './credit-application.component.html'

})
export class CreditApplicationComponent implements OnInit, OnDestroy {

  subscripData: Subscription;
  subscripMaster: Subscription;
  myCaHead: caHead;
  comCode: string;
  caNo: string;
  subParams: Subscription;
  @ViewChild('dialogalert') dialogalert: AlertDialogComponent;
  @ViewChild('Questiondialog') Questiondialog: AlertDialogComponent;
  @ViewChild('reaSonDialog') reaSonDialog: ActionDialogComponent;
  @ViewChild('blackListDialog') blackListDialog: ActionDialogComponent;

  task: string = '';
  taskShorten: string = '';
  btnFormSave: boolean = true;
  btnFormSubmit: boolean = true;
  btnFormCancel: boolean = true;
  btnFormReject: boolean = true;
  isReadonly : boolean = true;

  checkLoader: boolean = false;

  approvePerson: string = '';
  comment: string = '';

  constructor(private userStorage: UserStorage,
              private route: ActivatedRoute,
              private router: Router,
              private service: ServiceEndpoint,
              private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {
    this.approvePerson = this.userStorage.getUserName();
    window.scrollTo(0, 0);
    this.myCaHead = new caHead();
    this.comCode = this.userStorage.getComCode();
    this.checkLoader = true;
    this.subParams = this.route.queryParams.subscribe(
      (params: Params) => {
        this.caNo = params['ca_no'];
        this.task = params['task'];
        this.taskShorten = this.task.slice(0, 2).toUpperCase();
        this.controlActionForm(this.task);
        ///////  List ans
        this.subscripMaster = this.creditApplicationService.getListMasterPost('web'
          , this.userStorage.userName
          , this.userStorage.getComCode()
          , this.caNo)
          .subscribe(
            (json: any) => {
              /////  Call  After give Ans List Master
              console.log(json);
              this.callOpendata();

              this.creditApplicationService.setListMaster(json.LIST_DATA);
            });
      }
    );
  }

  ngOnDestroy() {
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }

    if (this.subscripMaster != null) {
      this.subscripMaster.unsubscribe();
    }
  }

  callOpendata() {

    this.subscripData = this.creditApplicationService.sendCreditApplication('web'
      , this.userStorage.userName
      , this.userStorage.getComCode()
      , this.caNo)
      .subscribe(
        (json: any) => {
          console.log(json);
          this.checkLoader = false;
          this.myCaHead = caHead.parse(json.DATA);
          this.creditApplicationService.setCaHead(this.myCaHead);

          if (this.myCaHead.caentity.new_card_no) {
            this.creditApplicationService.setNewCardNo(this.myCaHead.caentity.new_card_no);
          }
        });

  };

  submitOrsave: string = '';

  questionAction(action: string) {
    this.Questiondialog.reset();
    if (action == 'SAVE') {
      this.submitOrsave = action;
    }
    else if (action == 'SUBMIT') {
      this.submitOrsave = action;
    }
    else if (action == 'REJECT') {
      this.submitOrsave = action;
    }
    else if (action == 'CANCEL') {
      this.submitOrsave = action;
    }
    this.Questiondialog.setAction(action);
    this.Questiondialog.open();
  }

  submitComplete: boolean = false;
  saveComplete: boolean = false;
  tmpaction: string = '';

  onConfirmQuest(value: string) {
    this.tmpaction = value;
    if (value == 'SUBMIT') {
      if (this.myCaHead.current_task == 'Approve') {
        this.reaSonDialog.open();
      } else {
        this.processCA(value);
      }
    } else if (value == 'SAVE') {
      this.processCA(value);
    } else if (value == 'REJECT') {
      this.reaSonDialog.open();
    } else if (value == 'CANCEL') {
      this.reaSonDialog.open();
    }
  }

  clickafReason() {
    if (this.tmpaction == 'SUBMIT') {
      this.processCA(this.tmpaction);
    } else if (this.tmpaction == 'REJECT') {
      console.log('Reject');
      this.onRejectCA();
    } else if (this.tmpaction == 'CANCEL') {
      this.onCancalCA();
    }
  }

  processCA(value: string) {
    this.submitComplete = false;
    this.saveComplete = false;
    this.checkLoader = true;
    this.creditApplicationService.processCa("web"
      , this.userStorage.getUserName()
      , value, this.comment).subscribe(
      (json: any) => {
        this.checkLoader = false;
        //console.log(json);
        let stringMsg: string = '';
        if (value == 'SAVE') {
          stringMsg = 'Save'
        }
        else {
          stringMsg = 'Submit'
        }
        if (json.CODE == '200') {

          if (value == 'SAVE') {
            this.saveComplete = true;
          }
          ;
          if (value == 'SUBMIT') {
            this.submitComplete = true;
          }
          ;
          this.dialogalert.setAction("INFORMATION");
          this.dialogalert.setMessage(json.MSG);
          this.dialogalert.open();
        } else {
          this.dialogalert.setMessage(stringMsg + " Error");
          this.dialogalert.open();
        }
      }
    );
  }

  onOksubmit() {
    if (this.submitComplete) {
      this.submitComplete = false;
      this.router.navigate(['/home']);
    } else if (this.saveComplete) {
      this.saveComplete = false;
      console.log('Save Reload');
      this.callOpendata();
    }
    this.saveComplete = false;
    this.submitComplete = false;

  }

  onCancalCA() {
    this.submitComplete = false;
    this.saveComplete = false;
    this.checkLoader = true;
    this.creditApplicationService.callRejectCa("web"
      , this.userStorage.getUserName()
      , 'CANCEL'
      , this.comment
      , this.taskShorten).subscribe(
      (json: any) => {
        this.checkLoader = false;
        console.log(json);
        let stringMsg: string = '';
        if (json.CODE == '200') {
          console.log(json);
          this.submitComplete = true;
          this.dialogalert.setAction("INFORMATION");
          this.dialogalert.setMessage(json.MSG);
          this.dialogalert.open();
        } else {
          this.dialogalert.setMessage(stringMsg + " Error");
          this.dialogalert.open();
        }
      }
    );
  }

  onRejectCA() {
    this.submitComplete = false;
    this.saveComplete = false;
    this.checkLoader = true;
    this.creditApplicationService.callRejectCa("web"
      , this.userStorage.getUserName()
      , 'REJECT'
      , this.comment
      , this.taskShorten).subscribe(
      (json: any) => {
        this.checkLoader = false;
        console.log(json);
        let stringMsg: string = '';
        if (json.CODE == '200') {
          this.submitComplete = true;
          this.dialogalert.setAction("INFORMATION");
          this.dialogalert.setMessage(json.MSG);
          this.dialogalert.open();
        } else {
          this.dialogalert.setMessage(stringMsg + " Error");
          this.dialogalert.open();
        }
      }
    );
  }

  showReport() {
    if (this.caNo) {
      let ca_no: string = this.caNo.replace("/", "_");
      let strURL = '';
      if (this.taskShorten == 'AM') {
        if (this.myCaHead.sbu_typ == 'FDO'){
          strURL = this.service.url_report + `/result?report=MKT\\CA_AMEND_FAC_01.fr3&ca_no=${ca_no}&com_code=${this.comCode}&format=pdf`;
        } else  {
          strURL = this.service.url_report + `/result?report=MKT\\CA_AMEND_HPLS_01.fr3&ca_no=${ca_no}&com_code=${this.comCode}&format=pdf`;
        }
      } else {
        if (this.myCaHead.sbu_typ == 'FDO') {
          strURL = this.service.url_report + `/result?report=MKT\\CA_DO_01.fr3&p_ca_no=${ca_no}&p_id_card=${this.creditApplicationService.newCardNo}&ca_no=${ca_no}&com_code=${this.comCode}&format=pdf`;
        } else if (this.myCaHead.sbu_typ == 'P') {
          strURL = this.service.url_report + `/result?report=MKT\\CA_DL_01.fr3&p_ca_no=${ca_no}&p_id_card=${this.creditApplicationService.newCardNo}&ca_no=${ca_no}&com_code=${this.comCode}&format=pdf`;
        } else if ((this.myCaHead.sbu_typ == 'HP') || (this.myCaHead.sbu_typ == 'LS') || (this.myCaHead.sbu_typ == 'HPLS')) {
          strURL = this.service.url_report + `/result?report=MKT\\CA_HPLS_01.fr3&p_ca_no=${ca_no}&p_id_card=${this.creditApplicationService.newCardNo}&ca_no=${ca_no}&com_code=${this.comCode}&format=pdf`;
        }
      }
      window.open(strURL, '_blank');
    }
  }


  controlActionForm(task: string) {
    if (!task) {
      this.btnFormSubmit = false;
      this.btnFormSave = false;
      this.btnFormReject = false;
      this.btnFormCancel = false;
      this.isReadonly = true;
    }
    else if ((task == 'CA-01') || (task == 'CA-01-1') || (task == 'AM-01')) {
      this.btnFormSubmit = true;
      this.btnFormSave = true;
      this.btnFormReject = false;
      this.btnFormCancel = true;
      this.isReadonly = false;
    } else {
      this.btnFormSubmit = true;
      this.btnFormSave = false;
      this.btnFormReject = true;
      this.btnFormCancel = false;
      this.isReadonly = true;
    }
  }

  openBlackList() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.blackListDialog.open();
    }, 200);

  }
}
