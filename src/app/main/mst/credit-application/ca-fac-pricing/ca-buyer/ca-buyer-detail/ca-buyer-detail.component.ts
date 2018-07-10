import {Component, OnDestroy, OnInit, Input} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../../../credit-application.service";
import {caBuyer} from "../../../model/ca-buyer";
import {caListMaster} from "../../../model/ca_listmaster";
import {ServiceEndpoint} from "../../../../../../shared/config/service-endpoint";
import {UserStorage} from "../../../../../../shared/user/user.storage.service";

@Component({
  selector: 'app-ca-buyer-detail',
  templateUrl: './ca-buyer-detail.component.html',
})
export class CaBuyerDetailComponent implements OnInit, OnDestroy {
  @Input() isReadOnly : boolean;
  @Input() tabReadOnly : boolean;
  subscripData: Subscription;
  subscripMaster: Subscription;

  selectBuyer: caBuyer;

  listAPT: caListMaster[];
  urlBuyer: string;
  dataBuyer: any;
  constructor(private creditApplicationService: creditApplicationService,
              private userStorage: UserStorage,
              private service: ServiceEndpoint) {
    this.urlBuyer = this.service.url + this.service.ca_api + '/ask/ca/GetListSearchUn';
    this.dataBuyer = {
      "device": "web",
      "username": this.userStorage.getUserName(),
      "action": "BUYER" }
  }

  ngOnInit() {
    this.selectBuyer = new caBuyer();
    if (this.creditApplicationService.getCaHead()) {
      if (this.creditApplicationService.getCaHead().listcabuyer.length > 0) {
        this.selectBuyer = this.creditApplicationService.getCaHead().listcabuyer[0];
      }
    }

    this.subscripData = this.creditApplicationService.eventcabuyer.subscribe(
      (value: caBuyer) => {
        this.selectBuyer = value;
      }
    );

    this.listAPT = this.creditApplicationService.listAPT;
    this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(
      (obj) => {
        this.listAPT = this.creditApplicationService.listAPT;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }

    if (this.subscripMaster != null) {
      this.subscripMaster.unsubscribe();
    }
  }

  setGroup(data: string) {
    this.selectBuyer.joint_buyer_group= data;
  }

  setGroupName(data: string) {
    this.selectBuyer.join_group_name = data;
  }

  setLimit(data: string) {
    this.selectBuyer.cr_limit  = data;
    this.selectBuyer.sub_line_amt_group  = data;
  }

}
