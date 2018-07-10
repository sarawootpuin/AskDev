import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";

@Component({
  selector: 'app-ccs-direct-debit-charge',
  templateUrl: './ccs-direct-debit-charge.component.html'
})
export class CcsDirectDebitChargeComponent implements OnInit {

  constructor(private custService: CustinfoService) { }

  ngOnInit() {
  }

}
