import { Component, OnInit } from '@angular/core';
import {caEntity} from "../../model/ca-entity";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {creditApplicationService} from "../../credit-application.service";

@Component({
  selector: 'app-ca-address-th',
  templateUrl: './address-th.component.html'
})
export class CaAddressThComponent implements OnInit {
  caEntityDetail:caEntity;
  constructor(private creditApplicationService: creditApplicationService,
              private userStorage: UserStorage)  { }

  ngOnInit() {
    this.caEntityDetail = new caEntity();
    this.creditApplicationService.eventCaHead.subscribe(
      (obj) => {
        this.caEntityDetail = obj.caentity;
      }
    );
  }

  copyOwnr(panel : string){
     if (panel == 'VAT'){
       this.caEntityDetail.add_c   =  this.caEntityDetail.address;
       this.caEntityDetail.zip_c   =  this.caEntityDetail.zip;
       this.caEntityDetail.zip_c_desc =  this.caEntityDetail.zip_desc;
       this.caEntityDetail.post_cd_c  =  this.caEntityDetail.post_cd;

     }else if (panel == 'OFFICE'){

       this.caEntityDetail.add_o   =  this.caEntityDetail.address;
       this.caEntityDetail.zip_o   =  this.caEntityDetail.zip;
       this.caEntityDetail.zip_o_desc =  this.caEntityDetail.zip_desc;
       this.caEntityDetail.post_cd_o  =  this.caEntityDetail.post_cd;
       this.caEntityDetail.near_o     =  this.caEntityDetail.near;
       this.caEntityDetail.tel_o      =  this.caEntityDetail.tel;
       this.caEntityDetail.fax_office      =  this.caEntityDetail.fax_current;

     }else if (panel == 'MAIL'){
       this.caEntityDetail.add_m   =  this.caEntityDetail.address;
       this.caEntityDetail.zip_m   =  this.caEntityDetail.zip;
       this.caEntityDetail.zip_m_desc =  this.caEntityDetail.zip_desc;
       this.caEntityDetail.post_cd_m  =  this.caEntityDetail.post_cd;
     }
  }

}
