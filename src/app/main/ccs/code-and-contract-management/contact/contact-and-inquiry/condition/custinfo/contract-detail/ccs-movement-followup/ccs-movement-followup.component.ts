import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {cbo_custinfo} from "../../model/cbo_custinfo";
import {Subscription} from "rxjs/Subscription";
import {cdsFollow_UpModel} from "../../model/clientDataSet/cdsFollow_Up";
import {qryGuarantorModel} from "../../model/Query/qryGuarantor";
import {ActionDialogComponent} from "../../../../../../../../../shared/center/action-dialog/action-dialog.component";
import {cdsFol_To_ReferFolPrsnModel} from "../../model/clientDataSet/cdsFol_To_ReferFolPrsn";
import {propertyType} from "@angular/language-service/src/html_info";
import {DateUtils} from "../../../../../../../../../shared/center/utils/date-utils";
import {cdsGroupAgrFollowModel} from "./model/cdsGroupAgrFollow";
import {AlertDialogComponent} from "../../../../../../../../../shared/center/alert-dialog/alert-dialog.component";
import {saveFollowUpModel} from "./model/saveFollowUp";
import {cdsFol_To_PayerInsteadModel} from "../../model/clientDataSet/cdsFol_To_PayerInstead";
import {CcsMovementFollowupService} from "./ccs-movement-followup.service";

@Component({
  selector: 'app-ccs-movement-followup',
  templateUrl: './ccs-movement-followup.component.html'
})
export class CcsMovementFollowupComponent implements OnInit, OnDestroy {
  @Input() list_follow_up: cdsFollow_UpModel[] = [];
  @Output() list_follow_up_changed: EventEmitter<cdsFollow_UpModel[]> = new EventEmitter<cdsFollow_UpModel[]>();
  @Input() qryGuarantor: qryGuarantorModel[] = [];
  @Input() list_follow_refer_prsn: cdsFol_To_ReferFolPrsnModel[] = [];
  @Input() list_follow_payerinstead: cdsFol_To_PayerInsteadModel[] = [];

  @ViewChild('search_fol_to') search_fol_to: ActionDialogComponent;
  @ViewChild('cust_grp') cust_grp: ActionDialogComponent;
  @ViewChild('confirm_cust_grp') confirm_cust_grp: ActionDialogComponent;
  @ViewChild('validate_dlg') validate_dlg: AlertDialogComponent;
  @ViewChild('info_dlg') info_dlg: AlertDialogComponent;
  @ViewChild('search_fol_to_instead') search_fol_to_instead: AlertDialogComponent;

  list_cdsGroupAgrFollow: cdsGroupAgrFollowModel[] = [];
  vSelected_CustGrp: cdsGroupAgrFollowModel[] = [];

  private subscription1: Subscription;
  private subscription2: Subscription;
  cboCntct_Typ: cbo_custinfo[] = [];
  cboFol_Place: cbo_custinfo[] = [];
  cboFol_By: cbo_custinfo[] = [];
  cboTopic_Cntct: cbo_custinfo[] = [];
  cboFol_To: cbo_custinfo[] = [];
  readonly_mode: boolean = true;
  readonly_oth_mode: boolean = true;
  hidden_btnEdit: boolean = true;
  hidden_btnSave: boolean = true;

  vSelected_Row: cdsFollow_UpModel;
  vSelected_idx: number;
  vSelected_refer_prsn: cdsFol_To_ReferFolPrsnModel;
  vSelected_instd_prsn: cdsFol_To_PayerInsteadModel;

  vShow_fol_to_oth: boolean = false;
  vShow_topic_cntct_oth: boolean = false;
  vShow_fol_by_oth: boolean = false;
  vShow_fol_place_oth: boolean = false;

  chkConf_Flg_Y: boolean = false;
  chkConf_Flg_N: boolean = false;
  chkConf_Clicked: boolean = false;

  vGuar_idx: number;
  vButton_Type: string;
  vOpenCustGrp: boolean;

  vMSG_Wrn: string;

  listSaveFollowUp: saveFollowUpModel[] = [];

  private checkLoading:boolean;
  // listSaveFollowUp: cdsFollow_UpModel[] = [];

  constructor(private custService: CustinfoService,
              private followUpService: CcsMovementFollowupService,
              private date: DateUtils) {
    this.vButton_Type = '';
    this.vSelected_Row = new cdsFollow_UpModel();
    this.checkLoading = false;
  }

  ngOnInit() {
    this.subscription1 = this.custService.emitMainJSON.subscribe(
      (data) => {
        this.cboCntct_Typ = this.onFilterDropDown("cboCntct_Typ");
        this.cboFol_Place = this.onFilterDropDown("cboFol_Place");
        this.cboFol_By = this.onFilterDropDown("cboFol_By");
        this.cboTopic_Cntct = this.onFilterDropDown("cboTopic_Cntct");
        this.cboFol_To = this.onFilterDropDown("cboFol_To");

        // console.log(data.list_cdsfollow_up[0]);
        this.Show_RowSelect(data.list_cdsfollow_up[0]);

        if ( (data.agr_com_code === 'BGPL') &&
             (this.custService.srviceCustModel.usercode == this.custService.srviceCustModel.usercode_collector) ) {
          this.hidden_btnEdit = false;
        }

      }
    );
  }

  private onDefault() {
    this.hidden_btnSave = true;
    this.vOpenCustGrp = false;
    this.onRowSelected(this.vSelected_Row, 0);
  }

  private onFilterDropDown(pType: String) {
    return this.custService.srviceCustModel.list_cbo_custinfo.filter(
      (data: any) => data.id === pType
    );
  }

  private Show_RowSelect(data) {
    this.vSelected_Row = JSON.parse(JSON.stringify(data));

    // this.vSelected_Row.fol_to_oth = data.fol_to_oth;

    if (this.vSelected_Row.fol_to_desc.indexOf('ผู้มีชื่อให้ทวงถามหนี้ได้') > -1) {
      this.vSelected_Row.fol_to_desc = 'ผู้มีชื่อให้ทวงถามหนี้ได้';
      this.vShow_fol_to_oth = true;
    } else if (this.vSelected_Row.fol_to_desc.indexOf('ผู้ชำระเงินแทน') > -1) {
      this.vSelected_Row.fol_to_desc = 'ผู้ชำระเงินแทน';
      this.vShow_fol_to_oth = true;
    } else if (this.vSelected_Row.fol_to_desc == 'อื่น ๆ' ) {
      this.vShow_fol_to_oth = true;
    }

    if (this.vSelected_Row.fol_s_flag_desc == 'อื่น ๆ' ) {
      this.vShow_topic_cntct_oth = true;
    }

    if (this.vSelected_Row.fol_by_desc == 'อื่น ๆ' ) {
      this.vShow_fol_by_oth = true;
    }

    if (this.vSelected_Row.fol_place_desc == 'อื่น ๆ' ) {
      this.vShow_fol_place_oth = true;
    }
  }

  private onRowSelected(data: cdsFollow_UpModel, idx: number) {
    this.readonly_mode = true;
    this.readonly_oth_mode = true;
    this.hidden_btnSave = true;
    this.vButton_Type = '';

    this.Show_RowSelect(data);

    this.cboFol_ToChange(this.vSelected_Row);
    this.oncboTopic_CntctChange(this.vSelected_Row);
    this.oncboFol_ByChange(this.vSelected_Row);
    this.oncboFol_PlaceChange(this.vSelected_Row);
    this.onconf_FlgCheck(this.vSelected_Row);

    this.vSelected_idx = idx;
  }

  private onRowReferPrsnSelected(event) {
    this.vSelected_refer_prsn = JSON.parse(JSON.stringify(event.data));
  }

  private onSubmitReferPrsn() {
    this.vSelected_Row.fol_to_oth = JSON.parse(JSON.stringify(this.vSelected_refer_prsn.guar_level + '-' + this.vSelected_refer_prsn.responsibility + ' ' + this.vSelected_refer_prsn.payee_name));
  }

  private onRowInstdPrsnSelected(event) {
    this.vSelected_instd_prsn = JSON.parse(JSON.stringify(event.data));
  }

  private onSubmitInstdPrsn() {
    this.vSelected_Row.fol_to_oth = JSON.parse(JSON.stringify(this.vSelected_instd_prsn.guar_level + '-' + this.vSelected_instd_prsn.responsibility + ' ' + this.vSelected_instd_prsn.payee_name));
  }

  private onEditClicked() {
    this.vButton_Type = 'EDIT';
    this.readonly_mode = false;
    this.hidden_btnSave = false;
    this.cboFol_ToChange(this.vSelected_Row);
  }

  //---- บุคคลที่ติดต่อ
  private cboFol_ToChange(selectedList: cdsFollow_UpModel) {
    this.readonly_oth_mode = true;
    if (selectedList.fol_to_desc == 'อื่น ๆ') {
      if ((!selectedList.fol_to_oth) || ( this.vButton_Type == 'NEW')) {
        selectedList.fol_to_oth = '';
      }
      this.vShow_fol_to_oth = true;
      if (this.vButton_Type != '') {
        this.readonly_oth_mode = false;
      }
    } else if (selectedList.fol_to_desc == 'ผู้ชำระเงินแทน') {
      if (this.vButton_Type == 'NEW') {
        this.search_fol_to_instead.setTitle('ผู้ชำระเงินแทน');
        this.search_fol_to_instead.open();
      }
      this.vShow_fol_to_oth = true;
    } else if (selectedList.fol_to_desc == 'ผู้มีชื่อให้ทวงถามหนี้ได้') {
      if (this.vButton_Type == 'NEW') {
        this.search_fol_to.setTitle('ผู้มีชื่อให้ทวงถามหนี้ได้');
        this.search_fol_to.open();
      }
      // selectedList.fol_to_oth = '';
      this.vShow_fol_to_oth = true;
    } else if (selectedList.fol_to_desc == 'ลูกค้า') {
      selectedList.fol_to_oth = this.custService.srviceCustModel.lblcust_name;
      this.vShow_fol_to_oth = true;
    } else if (selectedList.fol_to_desc.substr(0, selectedList.fol_to_desc.length - 1) == 'ผู้ค้ำประกัน') {
      selectedList.fol_to_oth = 'ผู้ค้ำประกัน';
      this.vGuar_idx = parseFloat(selectedList.fol_to_desc.substr(selectedList.fol_to_desc.length - 1, 1)) - 1;
      selectedList.fol_to_oth = this.qryGuarantor[this.vGuar_idx].guar_name;
      this.vShow_fol_to_oth = true;
    } else {
      selectedList.fol_to_oth = '';
      this.vShow_fol_to_oth = false;
    }
  }

  private oncboTopic_CntctChange(selectedList: cdsFollow_UpModel) {
    //---- เรื่องที่ติดต่อ
    if (selectedList.fol_s_flag_desc == 'อื่น ๆ') {
      this.vShow_topic_cntct_oth = true;
    } else {
      this.vShow_topic_cntct_oth = false;
    }
  }

  private oncboFol_ByChange(selectedList: cdsFollow_UpModel) {
    //---- วิธีการติดต่อ
    if (selectedList.fol_by_desc == 'อื่น ๆ') {
      this.vShow_fol_by_oth = true;
    } else {
      this.vShow_fol_by_oth = false;
    }
  }

  private oncboFol_PlaceChange(selectedList: cdsFollow_UpModel) {
    //---- สถานที่ติดต่อ
    if (selectedList.fol_place_desc == 'อื่น ๆ') {
      this.vShow_fol_place_oth = true;
    } else {
      this.vShow_fol_place_oth = false;
    }
  }

  private onconf_FlgCheck(selectedList: cdsFollow_UpModel) {
    //---- สมบูรณ์ ไม่สมบูรณ์
    if (selectedList.conf_flg == 'Y') {
      this.chkConf_Flg_Y = true;
    } else if (selectedList.conf_flg !== 'X') {
      this.chkConf_Flg_N = true;
    }
  }

  onChkConfClicked() {
    this.chkConf_Clicked = true;
  }

  private onSaveClicked() {
    this.vMSG_Wrn = '';

    let parts = this.vSelected_Row.appmnt_dt.split('/');
    let appmnt_dt = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));


    if (this.vSelected_Row.conf_flg == '') {
      this.vMSG_Wrn = 'กรุณาระบุสถานะของ Follow Up';
    } else if (this.vSelected_Row.fol_flag_desc == '') {
      this.vMSG_Wrn = 'กรุณาระบุประเภทของการติดต่อ';
    } else if (this.vSelected_Row.fol_s_flag_desc == '') {
      this.vMSG_Wrn = 'กรุณาระบุเรื่องที่ติดต่อ';
    } else if (this.vSelected_Row.fol_to_desc == '') {
      this.vMSG_Wrn = 'กรุณาระบุบุคคลที่ติดต่อ';
    } else if (this.vSelected_Row.fol_by_desc == '') {
      this.vMSG_Wrn = 'กรุณาระบุวิธีการติดต่อ';
    } else if (this.vSelected_Row.fol_place_desc == '') {
      this.vMSG_Wrn = 'กรุณาระบุสถานที่ติดต่อ';
    } else if (this.vSelected_Row.appmnt_dt !== '' &&
      !(appmnt_dt.getMonth() == this.custService.Server_Date().getMonth() && appmnt_dt.getFullYear() == this.custService.Server_Date().getFullYear() )) {
      this.vMSG_Wrn = 'ไม่สามารถระบุวันที่นัดหมายข้ามเดือนได้';
    } else if (this.vSelected_Row.appmnt_dtel.length > 2000) {
      this.vMSG_Wrn = 'รายละเอียดการ FOLLOWUP เกิน 2000 ตัวอักษร';
    }
    // else if (this.custService.srviceCustModel.usercode != this.custService.srviceCustModel.usercode_collector) {
    //   this.vMSG_Wrn =  'User Loggin ไม่ตรงกับ Collector ' + '\n' +
    //                    'User Loggin: ' + this.custService.srviceCustModel.usercode +
    //                    'Collector: ' + this.custService.srviceCustModel.usercode_collector;
    // }

    if (this.vMSG_Wrn == '') {
      this.SaveData();
    } else {
      this.validate_dlg.setTitle('Information');
      this.validate_dlg.setMessage(this.vMSG_Wrn);
      this.validate_dlg.open();
    }

  }

  private SaveData() {

    if (this.vButton_Type == 'NEW') {

      this.subscription2 = this.followUpService.Get_Group_Customer('web', this.custService.userCode, this.custService.com_code, this.custService.srviceCustModel.agr_code).subscribe(
        (data: any) => {
          console.log(data);
          if ((data.MSG == 'Complete')) {

            this.list_cdsGroupAgrFollow = cdsGroupAgrFollowModel.parse(data.LIST_DATA);
            this.confirm_cust_grp.open();

          } else if (data.MSG == 'No Content') {
            this.InsertThisAgrToListSave();
            this.SaveFollowUpData();
          }

        }
      );

    } else {
      this.list_follow_up[this.vSelected_idx] = JSON.parse(JSON.stringify(this.vSelected_Row));
      this.readonly_mode = true;
      this.InsertThisAgrToListSave();

      console.log(JSON.stringify(this.listSaveFollowUp));
      this.followUpService.UpdateFollowUp(this.listSaveFollowUp, 'web', this.custService.userCode).subscribe(
        (data: any) => {
          this.info_dlg.setTitle('Information');

          if (data.CODE == '200') {
            this.list_follow_up_changed.emit(this.list_follow_up);

            this.info_dlg.setMessage('ทำรายการเสร็จเรียบร้อย');
          } else {
            this.info_dlg.setMessage('การทำรายการมีปัญหา:' + data.MSG);
          }
          this.onDefault();
          this.info_dlg.open();

        }
      );
    }

  }

  private onConfirmCustGrp(str) {
    if (str === 'Y') {
      this.cust_grp.open();
    } else {
      this.InsertThisAgrToListSave();
      this.SaveFollowUpData();
    }
  }

  private onNewClicked() {
    this.vButton_Type = 'NEW';
    this.hidden_btnSave = false;
    this.readonly_mode = false;
    this.readonly_oth_mode = false;
    this.vShow_fol_to_oth = false;
    this.vShow_topic_cntct_oth = false;
    this.vShow_fol_by_oth = false;
    this.vShow_fol_place_oth = false;

    this.onClearField();

    this.vSelected_Row.action_dt = this.date.currentDate();

  }

  private onClearField() {

    for (let i in this.vSelected_Row) {
      if (this.vSelected_Row.hasOwnProperty(i)) {
        this.vSelected_Row[i] = '';
      }
    }

    this.chkConf_Flg_Y = false;
    this.chkConf_Flg_N = false;
  }

  ngOnDestroy() {
    if (this.subscription1 != null) {
      this.subscription1.unsubscribe();
    }

    if (this.subscription2 != null) {
      this.subscription2.unsubscribe();
    }
  }

  private onChooseCustGrp() {

    this.InsertThisAgrToListSave();

    for (let i = 0; i < this.vSelected_CustGrp.length; i++) {
      this.listSaveFollowUp.push(new saveFollowUpModel(
        this.vSelected_CustGrp[i].agr_code,
        this.vSelected_CustGrp[i].com_code,
        this.custService.srviceCustModel.usercode,
        this.vSelected_Row
      ))
    }

    this.SaveFollowUpData();
    this.vSelected_CustGrp = [];
  }

  private InsertThisAgrToListSave() {
    this.listSaveFollowUp = [];
    this.vSelected_Row.input_user = JSON.parse(JSON.stringify(this.custService.srviceCustModel.usercode));
    this.vSelected_Row.upd_user = JSON.parse(JSON.stringify(this.vSelected_Row.input_user));

    this.listSaveFollowUp.push(new saveFollowUpModel(
      this.custService.srviceCustModel.agr_code,
      this.custService.srviceCustModel.agr_com_code,
      this.custService.srviceCustModel.usercode,
      this.vSelected_Row));

    console.log(this.listSaveFollowUp);
  }

  private SaveFollowUpData() {

    console.log(JSON.stringify(this.listSaveFollowUp));
    this.checkLoading = true;
    this.followUpService.SaveFollowUp(this.listSaveFollowUp, 'web', this.custService.userCode).subscribe(
      (data: any) => {
        this.checkLoading = false;
        this.info_dlg.setTitle('Information');

        if (data.CODE == '200') {
          this.info_dlg.setMessage('ทำรายการเสร็จเรียบร้อย');
          this.list_follow_up.unshift(this.vSelected_Row);
          this.vSelected_Row = JSON.parse(JSON.stringify(this.list_follow_up[0]));

          this.onDefault();
        } else {
          this.info_dlg.setMessage('การทำรายการมีปัญหา:' + data.MSG);
        }
        this.info_dlg.open();


      }
    );
  }

}
