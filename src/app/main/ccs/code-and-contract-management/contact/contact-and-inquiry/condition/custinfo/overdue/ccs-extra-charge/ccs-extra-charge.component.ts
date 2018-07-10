import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";

@Component({
  selector: 'app-ccs-extra-charge',
  templateUrl: './ccs-extra-charge.component.html'
})
export class CcsExtraChargeComponent implements OnInit {

  constructor(private custService: CustinfoService) { }

  ngOnInit() {
  }

}
