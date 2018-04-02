import { Component, OnInit } from '@angular/core';
import {GetDataCustomer} from "../../model/getDataCustomer";
import {AppFormService} from "../../appform.service";

@Component({
  selector: 'app-address-th',
  templateUrl: './address-th.component.html'
})
export class AddressThComponent implements OnInit {
  data : GetDataCustomer;
  constructor(private appFormService : AppFormService) { }

  ngOnInit() {

    this.data = this.appFormService.dataCustomer;

    this.appFormService.eventTabCustomer.subscribe(
      (data) => {
        this.data = data;
      }
    )
  }

}
