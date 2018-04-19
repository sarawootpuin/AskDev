import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {ServiceEndpoint} from "../../../../shared/config/service-endpoint";

@Component({
  selector: 'app-ca-fac-pricing',
  templateUrl: './ca-fac-pricing.component.html'
})
export class CaFacPricingComponent implements OnInit {

  caNo : string;
  subParams: Subscription;
  constructor(private route: ActivatedRoute,
              private service: ServiceEndpoint,
              private userStorage: UserStorage) { }

  ngOnInit() {

    this.subParams = this.route.queryParams.subscribe(
      (params: Params) => {
        this.caNo = params['ca_no'];
      }
    );

  }

  ngOnDestroy(){
    if (this.subParams != null) {
      this.subParams.unsubscribe();
    }
  }



  callAttach(){
    if (this.caNo){
      let ca_no: string = this.caNo.replace("/", "_");
      let strAttach = this.service.url_report +`/result?report=MKT\\Attach_Sheet_01.fr3&ca_no=${ca_no}&com_code=${this.userStorage.getComCode()}&format=pdf`;
      window.open(strAttach, '_blank');
    }
  }

}
