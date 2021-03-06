import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {caGuarantor} from "../../model/ca-guarantor";
import {creditApplicationService} from "../../credit-application.service";
import {ServiceEndpoint} from "../../../../../shared/config/service-endpoint";
import {UserStorage} from "../../../../../shared/user/user.storage.service";

@Component({
  selector: 'app-ca-guar-address-th',
  templateUrl: './ca-guar-address-th.component.html',
  styleUrls: ['./ca-guar-address-th.component.css']
})
export class CaGuarAddressThComponent implements OnInit,OnDestroy {

  subscription: Subscription;
  caGua : caGuarantor ;

  urlAddress : string ;
  dataAddress : any;
  constructor(private creditApplicationService: creditApplicationService ,
              private userStorage: UserStorage,
              private service: ServiceEndpoint) {
    this.urlAddress = this.service.url + this.service.ca_api + '/ask/ca/GetListSearchUn' ;
    this.dataAddress = {
      "device": "web",
      "username": this.userStorage.getUserName() ,
      "action": "ZIP"
    }

  }

  ngOnInit() {
    this.caGua = new caGuarantor() ;
    this.subscription = this.creditApplicationService.eventSelectGuarantor.subscribe(
      (selectGua : caGuarantor) =>
      {
        this.caGua = selectGua ;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  setZip(data: string,s_zip_type:string){
    if (s_zip_type == 'CC'){this.caGua.zip = data;}
    if (s_zip_type == 'C'){this.caGua.zip_c = data;}
    if (s_zip_type == 'O'){this.caGua.zip_o = data;}
    if (s_zip_type == 'M'){this.caGua.zip_m = data;}
  }

  setZip_desc(data: string,s_zip_desc_type:string){
    if (s_zip_desc_type == 'CC'){this.caGua.zip_desc = data;}
    if (s_zip_desc_type == 'C'){this.caGua.zip_c_desc = data;}
    if (s_zip_desc_type == 'O'){this.caGua.zip_o_desc = data;}
    if (s_zip_desc_type == 'M'){this.caGua.zip_m_desc = data;}
  }

  setPost(data: string,s_postcd_type:string){
    if (s_postcd_type == 'CC'){this.caGua.post_cd = data;}
    if (s_postcd_type == 'C'){this.caGua.post_cd_c = data;}
    if (s_postcd_type == 'O'){this.caGua.post_cd_o = data;}
    if (s_postcd_type == 'M'){this.caGua.post_cd_m = data;}
  }

  copyOwner(panel: string) {
    if (panel == 'VAT') {
      this.caGua.add_c = this.caGua.address;
      this.caGua.zip_c = this.caGua.zip;
      this.caGua.zip_c_desc = this.caGua.zip_desc;
      this.caGua.post_cd_c = this.caGua.post_cd;
     /* this.caGua.post_cd_c = this.caGua.post_cd;
      this.caGua.tel_card = this.caขGua.tel;*/
    } else if (panel == 'OFFICE') {
      this.caGua.add_o = this.caGua.address;
      this.caGua.zip_o = this.caGua.zip;
      this.caGua.zip_o_desc = this.caGua.zip_desc;
      this.caGua.post_cd_o = this.caGua.post_cd;
      this.caGua.near_o = this.caGua.near;
      this.caGua.tel_o = this.caGua.tel;
      this.caGua.fax_office = this.caGua.fax_current;
    } else if (panel == 'MAIL') {
      this.caGua.add_m = this.caGua.address;
      this.caGua.zip_m = this.caGua.zip;
      this.caGua.zip_m_desc = this.caGua.zip_desc;
      this.caGua.post_cd_m = this.caGua.post_cd;
    }
  }
}
