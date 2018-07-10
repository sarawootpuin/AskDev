import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../credit-application.service";
import {caAmendKeyIn} from "../model/ca-amendkeyin";

@Component({
  selector: 'app-ca-amend-keyin',
  templateUrl: './ca-amend-keyin.component.html'
})
export class CaAmendKeyinComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isReadonly : boolean;
  subscription: Subscription;
  listAmendKeyIn: caAmendKeyIn[] = [];
  selectValue: caAmendKeyIn = new caAmendKeyIn();

  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {
    this.subscription = this.creditApplicationService.eventCaHead.subscribe(
      (caHead) => {
        this.listAmendKeyIn = caHead.listamendhist;
        if (this.listAmendKeyIn && this.listAmendKeyIn.length > 0) {
          this.onSelectValue(this.listAmendKeyIn[0]) ;
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  onSelectValue(value: caAmendKeyIn) {
    this.selectValue = value;
  }

  onAddValue() {
    let newValue = new caAmendKeyIn();
    [newValue.com_code, newValue.ca_no] = [this.creditApplicationService.caHead.com_code, this.creditApplicationService.caHead.ca_no];
    this.listAmendKeyIn = [...this.listAmendKeyIn, newValue];
    this.onSelectValue(newValue);
    this.creditApplicationService.caHead.listamendhist = this.listAmendKeyIn;
  }

  onDeleteValue(value: caAmendKeyIn) {
    /* Subject Immutability
     -- splice
     -- concat
     **Not related to the Array old.
     */
    this.listAmendKeyIn.splice(this.listAmendKeyIn.indexOf(value), 1);
    this.listAmendKeyIn = [...this.listAmendKeyIn];
    this.creditApplicationService.caHead.listamendhist =  this.listAmendKeyIn;
    if (this.listAmendKeyIn[0]) {
      this.selectValue = this.listAmendKeyIn[0];
    } else {
      this.selectValue = new caAmendKeyIn();
    }
  }

  ngOnChanges(changes : SimpleChanges){

  }
}
