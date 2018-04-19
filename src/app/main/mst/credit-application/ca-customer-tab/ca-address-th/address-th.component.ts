import { Component, OnInit } from '@angular/core';
import {caEntity} from "../../model/ca-entity";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {creditApplicationService} from "../../credit-application.service";
import {ServiceEndpoint} from "../../../../../shared/config/service-endpoint";

@Component({
  selector: 'app-ca-address-th',
  templateUrl: './address-th.component.html'
})
export class CaAddressThComponent implements OnInit {
  caEntityDetail:caEntity;
  urlAddress : string ;
  dataAddress : any;
  constructor(private creditApplicationService: creditApplicationService,
              private userStorage: UserStorage,
              private service: ServiceEndpoint)  {
    this.urlAddress = this.service.url + this.service.ca_api + '/ask/ca/GetListSearchUn' ;
    this.dataAddress = {
      "device": "web",
      "username": this.userStorage.getUserName() ,
      "action": "ZIP"
    }
  }

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

  setZip(data: string,s_zip_type:string){
    if (s_zip_type == 'CC'){this.caEntityDetail.zip = data;}
    if (s_zip_type == 'C'){this.caEntityDetail.zip_c = data;}
    if (s_zip_type == 'O'){this.caEntityDetail.zip_o = data;}
    if (s_zip_type == 'M'){this.caEntityDetail.zip_m = data;}
  }

  setZip_desc(data: string,s_zip_desc_type:string){
    if (s_zip_desc_type == 'CC'){this.caEntityDetail.zip_desc = data;}
    if (s_zip_desc_type == 'C'){this.caEntityDetail.zip_c_desc = data;}
    if (s_zip_desc_type == 'O'){this.caEntityDetail.zip_o_desc = data;}
    if (s_zip_desc_type == 'M'){this.caEntityDetail.zip_m_desc = data;}
  }

  setPost(data: string,s_postcd_type:string){
    if (s_postcd_type == 'CC'){this.caEntityDetail.post_cd = data;}
    if (s_postcd_type == 'C'){this.caEntityDetail.post_cd_c = data;}
    if (s_postcd_type == 'O'){this.caEntityDetail.post_cd_o = data;}
    if (s_postcd_type == 'M'){this.caEntityDetail.post_cd_m = data;}
  }

}
