import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ListDetail} from "../model/getDataDetail";
import {ListAnswer} from "../model/getListAnswer";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-leasing',
  templateUrl: './leasing.component.html'
})
export class LeasingComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  data: ListDetail[] = [];
  dataSelect: ListDetail = new ListDetail();
  dataListFin: ListAnswer[] = [];
  dataListSubFin: ListAnswer[] = [];
  dataListSubFinLs: ListAnswer[] = [];
  dataListLease: ListAnswer[] = [];
  dataListPaid: ListAnswer[] = [];
  dataListCurType: ListAnswer[] = [];
  dataListBank: ListAnswer[] = [];
  dataListInsRate: ListAnswer[] = [];
  dataListBankIntRate: ListAnswer[] = [];
  disabled: string = 'N';
  @Input() inquiry: boolean;

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.data = this.appFormService.listTabLeasing;
    this.dataListFin = this.appFormService.listFin;
    this.dataListSubFin = this.appFormService.listSubFin;
    this.dataListSubFinLs = this.appFormService.listSubFinLs;
    this.dataListLease = this.appFormService.listLease;
    this.dataListPaid = this.appFormService.listPaid;
    this.dataListCurType = this.appFormService.listCurType;
    this.dataListBank = this.appFormService.listBank;
    this.dataListInsRate = this.appFormService.listInsRate;
    this.dataListBankIntRate = this.appFormService.listBankIntRate;

    this.disabled = this.appFormService.getAppFormData().disabled;
    this.subscription = this.appFormService.eventListTabLeasing.subscribe(
      (data) => {
        this.data = data;
        this.dataListFin = this.appFormService.listFin;
        this.dataListSubFin = this.appFormService.listSubFin;
        this.dataListSubFinLs = this.appFormService.listSubFinLs;
        this.dataListLease = this.appFormService.listLease;
        this.dataListPaid = this.appFormService.listPaid;
        this.dataListCurType = this.appFormService.listCurType;
        this.dataListBank = this.appFormService.listBank;
        this.dataListInsRate = this.appFormService.listInsRate;
        this.dataListBankIntRate = this.appFormService.listBankIntRate;

        this.disabled = this.appFormService.getAppFormData().disabled;
      }
    )
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  setDataSelect(data: ListDetail) {
    if (data) {
      this.dataSelect = data;
    }
  }

}
