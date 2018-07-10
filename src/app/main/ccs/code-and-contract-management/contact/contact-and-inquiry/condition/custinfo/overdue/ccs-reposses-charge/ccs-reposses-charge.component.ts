import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";

@Component({
  selector: 'app-ccs-reposses-charge',
  templateUrl: './ccs-reposses-charge.component.html'
})
export class CcsRepossesChargeComponent implements OnInit {

  constructor(private custService: CustinfoService) { }

  ngOnInit() {
  }

}
