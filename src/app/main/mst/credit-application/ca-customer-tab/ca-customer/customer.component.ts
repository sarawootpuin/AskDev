import {Component, OnDestroy, OnInit} from '@angular/core';
import {creditApplicationService} from "../../credit-application.service";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {DatePipe} from "@angular/common";
import {caEntity} from "../../model/ca-entity";
import {isUndefined, log} from "util";
import {caListMaster} from "../../model/ca_listmaster";
import {Subscription} from "rxjs/Subscription";
import {ServiceEndpoint} from "../../../../../shared/config/service-endpoint";

@Component({
  selector: 'app-ca-customer',
  templateUrl: './customer.component.html'
  // styleUrls: ['./ca-customer.component.css']
})
export class CaCustomerComponent implements OnInit , OnDestroy {
  caEntityDetail:caEntity = new caEntity();

  subscripData: Subscription;
  subscripMaster: Subscription;

  listFNMT : caListMaster[];
  listFNME : caListMaster[];
  listCRD  : caListMaster[];
  listNTY  : caListMaster[];
  OutURL: string;

  constructor(private creditApplicationService: creditApplicationService,
              private serviceEndPoint: ServiceEndpoint,
              private userStorage: UserStorage) {

    this.OutURL = this.serviceEndPoint.url
      + this.serviceEndPoint.sale_call_api
      + "/ask/salecall/GetDBD?device=Web&user="
      + this.userStorage.getUserName() + "&Comcode=" + this.userStorage.getComCode()
      + "&dbdcode=" + "No";
  }

  ngOnInit() {

    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (obj) => {
        this.caEntityDetail = obj.caentity;
      }
    );

    this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(
      (obj)=> {
        //console.log('subscribe');
        this.listFNMT = this.creditApplicationService.listFNM ;
        this.listFNME = this.creditApplicationService.listFNME;
        this.listCRD  = this.creditApplicationService.listCRD ;
        this.listNTY  = this.creditApplicationService.listNTY ;
      }
    );
  }

  ngOnDestroy(){
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }

    if (this.subscripMaster != null) {
      this.subscripMaster.unsubscribe();
    }
  }


  setBusName(data: string) {
    this.caEntityDetail.bus_detail_desc  = data;
  }

  setBuscode(data: string) {
    this.caEntityDetail.bus_detail  = data;
  }

  setBusType(data: string) {
    this.caEntityDetail.business_type   = data;
  }

  setCluster(data: string) {
    this.caEntityDetail.cluster_ind   = data;
  }


}
