import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {cdsPaid_LegalModel} from "../../model/clientDataSet/cdsPaid_Legal";

@Component({
  selector: 'app-ccs-paid-legal',
  templateUrl: './paid-legal.component.html'
})
export class CcsPaidLegalComponent implements OnInit {
  list_cdspaid_legal:cdsPaid_LegalModel[] = [];
  private subscription: Subscription;
  constructor(private custService: CustinfoService) { }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data : any) => {
        this.list_cdspaid_legal = data.list_cdspaid_legal;
      }
    );
  }

}
