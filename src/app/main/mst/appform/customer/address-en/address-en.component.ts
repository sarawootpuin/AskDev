import {Component, OnDestroy, OnInit} from "@angular/core";
import {GetDataCustomer} from "../../model/getDataCustomer";
import {AppFormService} from "../../appform.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-address-en',
  templateUrl: './address-en.component.html'
})
export class AddressEnComponent implements OnInit, OnDestroy {
  data: GetDataCustomer;
  subscription: Subscription;

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.data = this.appFormService.dataCustomer;
    this.subscription = this.appFormService.eventTabCustomer.subscribe(
      (data) => {
        this.data = data;
      }
    )
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

}
