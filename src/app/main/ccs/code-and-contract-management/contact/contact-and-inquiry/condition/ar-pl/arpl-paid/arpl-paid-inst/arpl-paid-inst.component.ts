import { Component, OnInit } from '@angular/core';
import {ArPlService} from "../../ar-pl.service";
import {Subscription} from "rxjs/Subscription";
import {ArPlPaidInst} from "./arpl-paid.model";

@Component({
  selector: 'app-arpl-paid-inst',
  templateUrl: './arpl-paid-inst.component.html',
  styleUrls: ['../../../ar-pl/ar-pl.component.css']
  // ./arpl-paid/arpl-paid-inst/arpl-paid-inst.component

})
export class ArplPaidInstComponent implements OnInit {
  list_cdsPaid_Inst_PL: ArPlPaidInst[] = [];
  private subscription: Subscription;

  constructor(private loanService: ArPlService) { }

  ngOnInit() {
    this.subscription = this.loanService.emitMainJSON.subscribe(
      (data : any) => {
        this.list_cdsPaid_Inst_PL = data.list_cdsPaid_Inst_PL;
      }
    );
  }

}
