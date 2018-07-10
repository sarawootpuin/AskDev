import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transf-cust-card',
  templateUrl: './transf-cust-card.component.html',
  styleUrls: ['./transf-cust-card.component.css']
})
export class TransfCustCardComponent implements OnInit {
  issueDate : Date;
  expireDate : Date;

  constructor() { }

  ngOnInit() {
  }

}
