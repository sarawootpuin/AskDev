import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ca-pricing',
  templateUrl: './pricing.component.html',
})
export class CaPricingComponent implements OnInit {
  @Input() task : string;
  constructor() { }

  ngOnInit() {
  }

}
