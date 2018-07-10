import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {OverdueModel} from "../../model/overdue";
import {CdsOver_InstallModel} from "../../model/clientDataSet/cdsOver_Install";

@Component({
  selector: 'app-ccs-overdue-ins',
  templateUrl: './ccs-overdue-ins.component.html'
})
export class CcsOverdueInsComponent implements OnInit {
  showCharge: boolean;
  showRate: boolean;
  showDetail: boolean;
  private subscription: Subscription;
  ds_overdue: OverdueModel;
  list_cdsOver_Install: CdsOver_InstallModel[] = [];

  constructor(private custService: CustinfoService) {
    this.showCharge = false;
    this.showRate = false;
    this.showDetail = false;
    this.ds_overdue = new OverdueModel();
  }

  ngOnInit() {

    this.subscription = this.custService.emitMainJSON.subscribe(
      (data : any) => {
        this.ds_overdue = data.ds_overdue;

        if(this.ds_overdue.list_cdsOver_Install.length > 0 ) {
          this.list_cdsOver_Install = this.ds_overdue.list_cdsOver_Install;
        }
      }
    );
  }

  showChargeClicked(){
    this.showCharge = !this.showCharge;
  }

  showRateClicked(){
    this.showRate = !this.showRate;
  }

  showDetailClicked(){
    this.showDetail = !this.showDetail;
  }

}
