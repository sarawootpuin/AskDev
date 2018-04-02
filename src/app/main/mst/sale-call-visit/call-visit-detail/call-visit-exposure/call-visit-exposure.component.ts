import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SaleCallTodo} from "../../model/Sale-Call-Todo";
import {SaleCallExposure} from "../../model/Sale-Call-Exposure";
import {CallVisitExposureservice} from "./call-visit-exposure.service";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-call-visit-exposure',
  templateUrl: './call-visit-exposure.component.html',
  styleUrls: ['./call-visit-exposure.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CallVisitExposureComponent implements OnInit,OnDestroy {
  listExposure: SaleCallExposure[] = [];
  subscription: Subscription;

  subscriptionNewcard: Subscription;

  New_card_no: string;
  username: string = "";

  constructor(private exposureService: CallVisitExposureservice,
              private userStorage: UserStorage) {
  }

  ngOnInit() {
    this.username = this.userStorage.getUserName();
    this.New_card_no = this.exposureService.getNewCardNO();
    this.listExposure = this.exposureService.getExposure();
    if (this.New_card_no){
      this.onCallExposure(this.New_card_no);
    }

    this.subscriptionNewcard = this.exposureService.eventCardNo.subscribe(
      (vcard : string) => {
            this.onCallExposure(vcard);
     }
    );

  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }


  onCallExposure(vcard  : string){
    this.subscription =  this.exposureService.getExposureService("web", this.username, vcard).subscribe(
      (data: any) => {
        //console.log(data);
        this.listExposure = SaleCallExposure.parse(data.LIST_DATA);
        this.exposureService.setExposure(this.listExposure);
      }
    );
  }

}
