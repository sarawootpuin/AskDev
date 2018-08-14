import { CdsOver_InstallModel } from './../../model/clientDataSet/cdsOver_Install';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { CustinfoService } from "../../custinfo.service";
import { CustinfoModel } from "../../model/custinfo";

@Component({
  selector: 'app-ccs-finance',
  templateUrl: './finance.component.html'
})
export class CcsFinanceComponent implements OnInit {

  @Input() list_Custmodel: CustinfoModel;
  list_array: any[] = [];
  category = "เงินรับฝาก";

  constructor(private custService: CustinfoService) {

  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.list_Custmodel) {
      if (this.list_Custmodel.sub_fin == '2' || this.list_Custmodel.sub_fin == '3')
        this.category = "เงินดาวน์";
      this.list_array = [
        {
          "category": "ราคาซื้อ",
          "amt_wth_vat": this.list_Custmodel.lblcost_i_vat,
          "vat": this.list_Custmodel.lblcost_vat,
          "amt": this.list_Custmodel.lblcost_e_vat,
        },
        {
          "category": this.category,
          "amt_wth_vat": this.list_Custmodel.lbldown_i_vat,
          "vat": this.list_Custmodel.lbldown_vat,
          "amt": this.list_Custmodel.lbldown_e_vat,
        }
        ,
        {
          "category": "ยอดสินเชื่อ",
          "amt_wth_vat": this.list_Custmodel.lblfin_amt_i_vat,
          "vat": this.list_Custmodel.lblfin_vat,
          "amt": this.list_Custmodel.lblfin_amt_e_vat,
        }
        ,
        {
          "category": "ค่างวด",
          "amt_wth_vat": this.list_Custmodel.installment_i_vat,
          "vat": this.list_Custmodel.vat,
          "amt": this.list_Custmodel.installment_e_vat,
        }
        ,
        {
          "category": "งวดแรก",
          "amt_wth_vat": "0",
          "vat": "0",
          "amt": this.list_Custmodel.lblfirst_installment_e_vat,
        }
        ,
        {
          "category": "งวดสุดท้าย",
          "amt_wth_vat": "0",
          "vat": "0",
          "amt": this.list_Custmodel.lbllast_installment_e_vat,
        } 

      ];
    }
  }


  // private fin_amt_i_vat() {
  //   return parseFloat(this.custService.srviceCustModel.principal) + this.fin_amt_vat();
  // }
  //
  // private fin_amt_vat(): number {
  //   return parseFloat(this.custService.srviceCustModel.principal) * parseFloat(this.custService.srviceCustModel.vat_rate)/100;
  // }
  //
  // private installment_i_vat() {
  //   return parseFloat(this.custService.srviceCustModel.installment_e_vat) + this.installment_vat();
  // }
  //
  // private installment_vat(): number {
  //   return parseFloat(this.custService.srviceCustModel.installment_e_vat) * parseFloat(this.custService.srviceCustModel.vat)/100;
  // }
}
