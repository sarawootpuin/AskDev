import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {TelHistModel} from "./tel-hist.model";
import {ActionDialogComponent} from "../../../../../../../../../shared/center/action-dialog/action-dialog.component";

@Component({
  selector: 'app-ccs-tel-hist',
  templateUrl: './ccs-tel-hist.component.html'
})
export class CcsTelHistComponent implements OnInit,OnChanges {
  @Input() type: string;
  @Input() ent_code: string;
  list_TelHist: TelHistModel[] = [];
  list_TelHistTmp: TelHistModel[] = [];
  subscription: Subscription;

  constructor(private custService: CustinfoService) {
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.list_TelHist = data.list_TelHist;
        this.list_TelHistTmp = JSON.parse(JSON.stringify(this.list_TelHist));


      }
    );
  }

  ngOnChanges() {
    this.onFilter();
  }

  onFilter() {
    this.list_TelHist = JSON.parse(JSON.stringify(this.list_TelHistTmp));

    // console.log(this.list_TelHist,this.type,this.ent_code);
    this.list_TelHist = this.list_TelHist.filter(
      data => data.type == this.type && data.ent_code == this.ent_code
    );
  }

}
