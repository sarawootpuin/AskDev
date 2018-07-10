import {Component, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ListContext} from "../model/getDataContext";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html'
})
export class ContextComponent implements OnInit,OnChanges,OnDestroy {
  data: ListContext[] = [];
  subscription: Subscription;
  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.subscription = this.appFormService.eventTabContext.subscribe(
      (data: any) => {
        this.data = data;
      }
    );
  }
  ngOnDestroy(){
    if(this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

  ngOnChanges(){
  }
}
