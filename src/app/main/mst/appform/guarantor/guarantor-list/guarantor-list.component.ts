import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from "@angular/core";
import {AppFormService} from "../../appform.service";
import {ListGuarantor} from "../../model/getDataGuarantor";
import {EntityDialogComponent} from "../../../entity/entity-dialog/entity-dialog.component";
import {EntityModel} from "../../../entity/model/entity-model";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {AlertDialogComponent} from "../../../../../shared/center/alert-dialog/alert-dialog.component";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-guarantor-list',
  templateUrl: './guarantor-list.component.html'
})
export class GuarantorListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionFac: Subscription;
  subscriptionBL : Subscription;
  @ViewChild("entity_dialog") entity_dialog: EntityDialogComponent;
  @ViewChild('deleteDialog') deleteDialog: AlertDialogComponent;

  data: ListGuarantor[] = [];
  selectedData: ListGuarantor;

  @Output("clickList") clickList = new EventEmitter<ListGuarantor>();

  constructor(private appFormService: AppFormService,
              private user: UserStorage) {
  }

  ngOnInit() {
    this.data = this.appFormService.listTabGuarantor;
    this.subscription = this.appFormService.eventTabGuarantor.subscribe(
      (data) => {
        this.data = data;
        this.selectList(this.data[0]);
      }
    )
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionBL != null) {
      this.subscriptionBL.unsubscribe();
    }
    if (this.subscriptionFac != null) {
      this.subscriptionFac.unsubscribe();
    }
  }

  selectList(selectedData: any) {
    this.selectedData = selectedData;
    this.clickList.emit(selectedData);
  }

  openEntity() {
    this.entity_dialog.title = 'Guarantor';
    this.entity_dialog.btnnew = true;
    this.entity_dialog.showDialog();
  }

  getEntity(entityModel: EntityModel) {
    let guarantor: ListGuarantor = new ListGuarantor();
    guarantor.com_code = entityModel.comCode;
    guarantor.ap_no = this.appFormService.getAppFormData().ap_no;
    guarantor.ref_code = this.appFormService.getAppFormData().ca_no;
    this.subscriptionFac = this.appFormService.checkFactoring(entityModel.entCode, entityModel.newCardNo).subscribe(
      (data: any) => {
        if (data.CODE === "200" && data.LIST_DATA.length > 0) {
          guarantor.guar_code = data.LIST_DATA[0].entCode;
        }
        else {
          guarantor.guar_code = entityModel.entCode;
        }
      }
    );
    guarantor.seq_no = this.data.length + 1;
    guarantor.f_namet = entityModel.fNameT;
    guarantor.l_namet = entityModel.lNameT;
    guarantor.f_namee = entityModel.fNameE;
    guarantor.l_namee = entityModel.lNameE;
    guarantor.new_card_no = entityModel.newCardNo;

    if (entityModel.birthD) {
      guarantor.birth_d = entityModel.birthD;
    }

    if (entityModel.establishDate) {
      guarantor.establish_date = entityModel.establishDate;
    }

    guarantor.card_type_desc = entityModel.cardTypeDesc;
    guarantor.title_thi = entityModel.fNameDesc;
    guarantor.title_eng = entityModel.fNameEDesc;
    guarantor.branch_no = entityModel.branchNo;
    if (entityModel.cardIssueDate) {
      guarantor.card_issue_date = entityModel.cardIssueDate;
    }

    guarantor.sex_desc = entityModel.sexDesc;
    //newGuar.status_m_desc = entityModel.
    //newGuar.grp_name = entityModel.
    guarantor.authorize_by_t = entityModel.authorizeT;
    guarantor.card_by = entityModel.cardBy;
    if (entityModel.regisCapital) {
      guarantor.regis_capital = entityModel.regisCapital;
    }
    if (entityModel.salaryPerYear) {
      guarantor.salary_per_year = entityModel.salaryPerYear;
    }
    if (entityModel.cardExpireDate) {
      guarantor.card_expire_date = entityModel.cardExpireDate;
    }

    //newGuar.nationality_code_desc = entityModel.
    guarantor.authorize_by_e = entityModel.authorizeE;
    guarantor.tel = entityModel.tel;
    guarantor.input_by = this.user.getCode();

    this.subscriptionBL = this.appFormService.checkBlackList(entityModel.newCardNo).subscribe(
      (data: any) => {
        if (data.CODE === "200" && data.LIST_DATA.length > 0) {
          guarantor.bl_flag = 'Y';
        }
        else {
          guarantor.bl_flag = 'N';
        }
        guarantor.blackList = (guarantor.bl_flag == 'Y') ? 'Found BlackList Record' : 'Not Found BlackList Record';
      }
    )

    this.data.push(guarantor);

    this.selectedData = guarantor;
    this.clickList.emit(guarantor);
  }

  deleteGuarantor() {
    let index = this.selectedData.seq_no - 1;
    this.data.splice(index, 1);
    let seqNo = 1;
    for (let data of this.data) {
      data.seq_no = seqNo;
      seqNo++;
    }
    if (this.data.length > 0) {
      this.selectList(this.data[0]);
    }
    else {
      this.selectedData = new ListGuarantor();
      this.clickList.emit(new ListGuarantor());
    }
  }

  deleteWarning() {
    this.deleteDialog.setAction("DELETE");
    this.deleteDialog.open();
  }

}
