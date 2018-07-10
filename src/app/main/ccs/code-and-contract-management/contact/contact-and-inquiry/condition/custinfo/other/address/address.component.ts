import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AddressModel} from "./address.model";
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {ActionDialogComponent} from "../../../../../../../../../shared/center/action-dialog/action-dialog.component";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  ds_address: AddressModel;
  vSelect_Addr: AddressModel;
  tel_hist_typ: string;
  ent_code: string;

  private subscription: Subscription;
  @ViewChild('tel_hist') tel_hist: ActionDialogComponent;

  constructor(private custService: CustinfoService) {
    this.vSelect_Addr = new AddressModel();
    this.tel_hist_typ = '';
    this.ent_code = '';
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data) => {
        this.vSelect_Addr = data.ds_address;
        this.ent_code = data.cus_code;
      }
    )
  }

  onTelHist(type) {
    this.tel_hist_typ = type;
    this.tel_hist.open();
  }

}
