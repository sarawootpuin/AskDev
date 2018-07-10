import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";

@Component({
  selector: 'app-ccs-os-balance',
  templateUrl: './ccs-os-balance.component.html'
})
export class CcsOsBalanceComponent implements OnInit {

  constructor(private custService: CustinfoService) { }

  ngOnInit() {
  }

}
