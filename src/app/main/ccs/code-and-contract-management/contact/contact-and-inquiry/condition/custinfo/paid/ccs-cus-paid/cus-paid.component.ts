import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";

@Component({
  selector: 'app-ccs-cus-paid',
  templateUrl: './cus-paid.component.html'
})
export class CcsCusPaidComponent implements OnInit {

  constructor(private custService: CustinfoService) { }

  ngOnInit() {
  }

}
