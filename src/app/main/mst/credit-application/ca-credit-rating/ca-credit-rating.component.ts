import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {caRating} from "../model/ca-rating";
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../credit-application.service";
import {caHead} from "../model/ca-head";

@Component({
  selector: 'app-ca-credit-rating',
  templateUrl: './ca-credit-rating.component.html'
})
export class CaCreditRatingComponent implements OnInit , OnChanges , OnDestroy{
  subscripData: Subscription;
  listcarating : caRating[] = []
  constructor(private creditApplicationService: creditApplicationService) { }

  ngOnInit() {
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (obj: caHead) => {
        this.listcarating = obj.listrating;
        //console.log(obj.listrating);
      }
    );

  }

  ngOnChanges(){
    //this.listcarating = this.data.listrating;
  }

   ngOnDestroy(){
     if (this.subscripData != null) {
       this.subscripData.unsubscribe();
     }
   }

}
