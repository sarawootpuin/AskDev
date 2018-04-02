import {Component, OnInit} from "@angular/core";
import {AppFormService} from "../appform.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {

  }

}
