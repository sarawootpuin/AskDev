import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {CustinfoModel} from "../../model/custinfo";

@Component({
  selector: 'app-ccs-finance',
  templateUrl: './finance.component.html'
})
export class CcsFinanceComponent implements OnInit {

  @Input() list_Custmodel: CustinfoModel;

  constructor(private custService: CustinfoService) { }

  ngOnInit() {
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
