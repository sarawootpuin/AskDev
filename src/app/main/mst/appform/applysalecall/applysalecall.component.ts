import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ApplyNewService} from "./applysalecall.service";
import {AppFormNew} from "../model/appFormNew";
import {AppFormRenew} from "../model/appFormRenew";
import {DataTable} from "primeng/primeng";
import apply = Reflect.apply;

@Component({
  selector: 'app-applysalecall',
  templateUrl: './applysalecall.component.html'
})
export class ApplySaleCallComponent implements OnInit {

  cols: any[];
  colsNew: any[] = [
    {field: 'sale_call_no', header: 'Call No.',  hidden: false, width: "100px"},
    {field: 'comp_eng_nme', header: 'Cust Name',  hidden: false, width: "300px"},
    {field: 'credit_type', header: 'Credit type',  hidden: true, width: "300px"},
    {field: 'owner_name', header: 'Owner Name',  hidden: false, width: "300px"},
    {field: 'comp_ent_code', header: 'Cust Code',  hidden: false, width: "100px"},
    {field: 'ownr', header: 'Owner Code',  hidden: false, width: "150px"},
    {field: 'intro_mthd_cd', header: 'Intro Mthd Cd',  hidden: false, width: "150px"},
    {field: 'intro_by_cd', header: 'Intro By Cd',  hidden: false, width: "150px"},
    {field: 'intro_mthd_desc', header: 'Intro Mthd Desc',  hidden: false, width: "300px"},
    {field: 'intro_by_name', header: 'Intro By Name',  hidden: false, width: "300px"},
    {field: 'connect_since', header: 'Connect Since',  hidden: false, width: "150px"},
    {field: 'cus_status', header: 'Cus Status',  hidden: false, width: "150px"},
    {field: 'com_code', header: 'Company Code',  hidden: true, width: "150px"},
    {field: 'cus_code', header: 'Cus Code', hidden: true, width: "150px"},
    {field: 'new_card_no', header: 'New Card No.', hidden: true, width: "150px"}
  ];
  colsRenew: any[] = [
    {field: 'ca_no', header: 'CA No.',  hidden: false, width: "150px"},
    {field: 'cust_name', header: 'Cust Name',  hidden: false, width: "300px"},
    {field: 'prd_type', header: 'Credit type',  hidden: false, width: "200px"},
    {field: 'expire_dt', header: 'Expire Date',  hidden: false, width: "150px"},
    {field: 'mkt_name', header: 'Owner Name',  hidden: false, width: "300px"},
    {field: 'sbu_typ', header: 'Type',  hidden: false, width: "100px"},
    {field: 'ori_ca', header: 'Original CA',  hidden: false, width: "150px"},
    {field: 'mkt_code', header: 'Marketing Code',  hidden: false, width: "150px"},
    {field: 'contract_no', header: 'Contract No',  hidden: false, width: "150px"},
    {field: 'contract_date', header: 'Contract Date',  hidden: false, width: "150px"},
    {field: 'contract_expire_date', header: 'Contract Expire Date',  hidden: false, width: "150px"},
    {field: 'cus_code', header: 'Cus Code', hidden: true, width: "150px"},
    {field: 'new_card_no', header: 'New Card No.', hidden: true, width: "150px"}
  ];
  colsRenewOld: any[] = [
    {field: 'ca_no', header: 'CA No.',  hidden: false, width: "150px"},
    {field: 'cust_name', header: 'Cust Name',  hidden: false, width: "300px"},
    {field: 'prd_type', header: 'Credit type',  hidden: false, width: "200px"},
    {field: 'expire_dt', header: 'Expire Date',  hidden: false, width: "150px"},
    {field: 'mkt_name', header: 'Owner Name',  hidden: false, width: "300px"},
    {field: 'sbu_typ', header: 'Type',  hidden: false, width: "100px"},
    {field: 'ori_ca', header: 'Original CA',  hidden: false, width: "150px"},
    {field: 'mkt_code', header: 'Marketing Code',  hidden: false, width: "150px"},
    {field: 'cus_code', header: 'Cus Code', hidden: true, width: "150px"},
    {field: 'new_card_no', header: 'New Card No.', hidden: true, width: "150px"}
  ];

  @ViewChild('table') table: DataTable;
  dataTable: any[];
  selected: any;
  sbuType: string;
  type: string;
  width: string;
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private appFormService: AppFormService,
              private applyNewService: ApplyNewService) {
  }

  ngOnInit() {
    this.dataTable = null;
    this.selected = null;

    this.appFormService.applyEmit.subscribe(
      (applyEmit: any) => {
        this.getApplyEmit(applyEmit);
      }
    );
  }

  getApplyEmit(applyEmit) {
    if (this.dataTable) {
      this.selected = null;
      this.sbuType = applyEmit.sbuType;
      if (applyEmit.type == "New") {
        this.table.onFilterKeyup(this.sbuType, 'credit_type', 'contains');
      }
    }
    else {
      this.getDataTable(applyEmit);
    }
  }

  getDataTable(applyEmit) {
    this.applyNewService.getNewRenew(applyEmit.type).subscribe(
      (data: any) => {
        if (data.MSG == "Complete") {
          this.dataTable = null;
          this.cols = null;
          this.selected = null;
          this.sbuType = applyEmit.sbuType;
          this.type = applyEmit.type;

          if (applyEmit.type == "New") {
            this.cols = this.colsNew;
            this.dataTable = AppFormNew.parse(data.LIST_DATA);
            this.width = "960px";
          }
          else if (applyEmit.type == "Renew") {
            this.cols = this.colsRenew;
            this.dataTable = AppFormRenew.parse(data.LIST_DATA);
            this.width = "1130px";
          }
          else if (applyEmit.type == "Renew Old") {
            this.cols = this.colsRenewOld;
            this.dataTable = AppFormRenew.parse(data.LIST_DATA);
            this.width = "1130px";
          }
        }
        else {
          if (applyEmit.type == "New") {
            this.cols = this.colsNew;
          }
          else if (applyEmit.type == "Renew") {
            this.cols = this.colsRenew;
          }
          else if (applyEmit.type == "Renew Old") {
            this.cols = this.colsRenewOld;
          }
        }
        if (applyEmit.type == "New") {
          this.table.onFilterKeyup(this.sbuType, 'credit_type', 'contains');
        }
      }
    );
  }

  onRowSelect(event: any) {
    if (this.type == "New") {
      event.data.credit_type = this.sbuType;
      this.appFormService.setSelectNew(event.data);
    }
    else {
      this.appFormService.setSelectRenew(event.data);
    }
  }
}
