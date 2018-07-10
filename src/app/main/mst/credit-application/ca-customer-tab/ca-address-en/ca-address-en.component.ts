import {Component, OnInit, Input} from "@angular/core";
import {caEntity} from "../../model/ca-entity";
import {creditApplicationService} from "../../credit-application.service";

@Component({
  selector: 'app-ca-address-en',
  templateUrl: './ca-address-en.component.html'
})
export class CaAddressEnComponent implements OnInit {
  @Input() isReadOnly : boolean;
  caEntityDetail: caEntity;

  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {
    this.caEntityDetail = new caEntity();
    this.creditApplicationService.eventCaHead.subscribe(
      (obj) => {
        this.caEntityDetail = obj.caentity;
      }
    );
  }

  copyOwner(panel: string) {
    if (panel == 'VAT') {
      this.caEntityDetail.add_c_eng = this.caEntityDetail.address_eng;
      this.caEntityDetail.add_c_eng2 = this.caEntityDetail.address_eng2;
      this.caEntityDetail.tel_card = this.caEntityDetail.tel;
    } else if (panel == 'OFFICE') {
      this.caEntityDetail.add_o_eng = this.caEntityDetail.address_eng;
      this.caEntityDetail.add_o_eng2 = this.caEntityDetail.address_eng2;
      this.caEntityDetail.tel_o = this.caEntityDetail.tel;
      this.caEntityDetail.near_o_eng = this.caEntityDetail.near_eng;
      this.caEntityDetail.fax_office = this.caEntityDetail.fax_current;

    } else if (panel == 'MAIL') {
      this.caEntityDetail.add_m_eng = this.caEntityDetail.address_eng;
      this.caEntityDetail.add_m_eng2 = this.caEntityDetail.address_eng2;
    }
  }

}
