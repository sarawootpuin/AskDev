import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {creditApplicationService} from "../credit-application.service";
import {Subscription} from "rxjs/Subscription";
import {caHead} from "../model/ca-head";

@Component({
  selector: 'app-ca-customer-tab',
  templateUrl: './ca-customer-tab.component.html'
})
export class CaCustomerTabComponent implements OnInit, OnDestroy {
  @Input() isReadonly : boolean;
  @Input() important : boolean;
  @Input() task: string;
  @Input() taskShorten : string;
  @Input('business_detail') business_detail: string;
  @Output('business_detail_out') business_detail_out:EventEmitter<string> = new EventEmitter<string>();
  tabReadonly : boolean;
  subscripData: Subscription;
  sbu_type : string ;
  constructor(private creditApplicationService: creditApplicationService ) {

  }

  ngOnInit() {
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (caHead : caHead) => {
        this.sbu_type = caHead.sbu_typ ;
        this.isReadonly = ((this.sbu_type == 'HP' || this.sbu_type == 'LS') && caHead.current_task == 'PrintDoc') ? false : this.isReadonly;
      }
    );
  }

  onEmit(val) {
    this.business_detail_out.emit(val);
  }
  ngOnChanges(){
    this.taskShorten == 'RV' ? this.tabReadonly = true :
    this.tabReadonly = ((this.isReadonly == false) || (this.important == false)) ? false : true;
  }

  ngOnDestroy(){
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }
  }
}
