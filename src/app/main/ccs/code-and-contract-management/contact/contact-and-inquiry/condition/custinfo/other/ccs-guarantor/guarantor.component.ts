import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AddressModel} from "../address/address.model";
import {qryGuarantorModel} from "../../model/Query/qryGuarantor";
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {ActionDialogComponent} from "../../../../../../../../../shared/center/action-dialog/action-dialog.component";

@Component({
  selector: 'app-ccs-guarantor',
  templateUrl: './guarantor.component.html'
})
export class CcsGuarantorComponent implements OnInit {
  list_Guar: AddressModel[] = [];
  list_qryGuarantor: qryGuarantorModel[] = [];
  vSelected_Guar: AddressModel;
  subscription: Subscription;
  ent_code: string;
  tel_hist_typ: string;
  i: number;
  @ViewChild('tel_hist') tel_hist: ActionDialogComponent;

  constructor(private custService: CustinfoService) {
    this.vSelected_Guar = new AddressModel();
    this.i = 0;

    if (this.list_qryGuarantor.length > 0 ) {
      this.ent_code = this.list_qryGuarantor[0].guar_code;
    } else {
      this.ent_code = '';
    }
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data:any) => {
        // console.log(data);
        this.list_qryGuarantor = data.list_qryGuarantor;
        this.list_Guar = data.list_AddrGuar;

        if (this.list_Guar.length > 0) {
          this.vSelected_Guar = this.list_Guar[this.i];
        }
        // console.log(this.list_qryGuarantor);
      }
    );
  }

  onSelectGuar(idx: number) {
    this.vSelected_Guar = this.list_Guar[idx];
    this.ent_code = this.list_qryGuarantor[idx].guar_code;
  }

  onTelHist(type) {
    this.tel_hist_typ = type;
    this.tel_hist.open();
  }

}
