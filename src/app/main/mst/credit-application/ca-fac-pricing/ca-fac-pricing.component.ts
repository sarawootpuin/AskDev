import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {ServiceEndpoint} from "../../../../shared/config/service-endpoint";

@Component({
  selector: 'app-ca-fac-pricing',
  templateUrl: './ca-fac-pricing.component.html'
})
export class CaFacPricingComponent implements OnInit {
  @Input() isReadonly : boolean;
  @Input() task : string;
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
    //console.log(this.isReadonly);
  }

  ngOnDestroy(){
    if (this.subParams != null) {
      this.subParams.unsubscribe();
    }
  }



  // callAttach(){
  //   if (this.caNo){
  //     let ca_no: string = this.caNo.replace("/", "_");
  //     let strAttach = this.service.url_report +`/result?report=MKT\\Attach_Sheet_01.fr3&ca_no=${ca_no}&com_code=${this.userStorage.getComCode()}&format=pdf=${'Att_RV' + ca_no}`;
  //     //let strAttach = this.service.url_report + `/result?report=MKT\\Attach_Sheet_01.fr3&ca_no=${ca_no}&com_code=${this.comCode}&format=pdf&cmd_folder=${ca_no}&cmd_path=1&cmd_pdf=${'ATT_' + ca_no + '_RV'+this.myCaHead.revise_time }&draft=${draft}`;
  //     console.log(strAttach);
  //     window.open(strAttach, '_blank');
  //   }
  // }

}
