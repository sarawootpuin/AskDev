import { Component, OnInit } from '@angular/core';
import {caEntity} from "../../model/ca-entity";
import {creditApplicationService} from "../../credit-application.service";
import {UserStorage} from "../../../../../shared/user/user.storage.service";

@Component({
  selector: 'app-ca-address-en',
  templateUrl: './ca-address-en.component.html'
})
export class CaAddressEnComponent implements OnInit {

  caEntityDetail:caEntity;
  constructor(private creditApplicationService: creditApplicationService ) {
  }

  ngOnInit() {
    this.caEntityDetail = new caEntity();
    this.creditApplicationService.eventCaHead.subscribe(
      (obj) => {
        this.caEntityDetail = obj.caentity;
      }

    );
  }

}
