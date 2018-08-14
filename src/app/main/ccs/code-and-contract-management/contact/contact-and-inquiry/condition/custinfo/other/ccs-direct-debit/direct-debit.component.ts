import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ccs-direct-debit',
  templateUrl: './direct-debit.component.html'
})
export class CcsDirectDebitComponent implements OnInit {

  payment_slip_type:string = "ins";
  constructor() { }

  ngOnInit() {
  }

}
