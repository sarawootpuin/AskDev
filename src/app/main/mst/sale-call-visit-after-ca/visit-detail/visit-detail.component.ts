import {Component, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {SaleCallDetail} from "../../sale-call-visit/model/Sale-Call-Detail";

import {Subscription} from "rxjs/Subscription";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {SaleCallVisitAfterCaService} from "../sale-call-visit-after-ca.service";
import {ContactpersonComponent} from "../../contactperson/contactperson.component";
import {ObjTemp} from "../../sale-call-visit/model/ObjTemp";
import {ContactPersonModel} from "../../contactperson/model/ContactPerson-model";
import {isNumber} from "util";

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.component.html',
  styleUrls: ['./visit-detail.component.css']
})
export class VisitDetailComponent implements OnInit,OnChanges {
  saleCallD:  SaleCallDetail = new SaleCallDetail();

  @Input ('ListSelectData') ListSelectData : SaleCallDetail;
  @Input ('ListVisit') ListVisit : ObjTemp[];
  @Input ('ListFNMT') ListFNMT : ObjTemp[];
  @Input ('ListFNME') ListFNME : ObjTemp[];
  @ViewChild('dialogcontactperson') dialogcontactperson: ContactpersonComponent;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
  }
  openContract(){
    //  this.dialogContract.setTitle('Contact Of Customer');
    this.dialogcontactperson.setFNMT(this.ListFNMT);
    this.dialogcontactperson.setFNME(this.ListFNME);
    this.dialogcontactperson.showDialog();

  }

  getContact( contact : ContactPersonModel)
  {
    //console.log(contact);
    if (contact) {
      this.ListSelectData.cont_person_code= contact.cont_person_code ;
      this.saleCallD.cont_person_code= contact.cont_person_code ;
      this.saleCallD.name_en = contact.name_en ;
      this.saleCallD.name_th = contact.name_th ;
      this.saleCallD.position = contact.position ;
      this.saleCallD.phone = contact.phone ;
      this.saleCallD.phone_ext = contact.phone_ext ;
      this.saleCallD.mobile = contact.mobile ;
      this.saleCallD.email = contact.email ;
      // console.log(this.saleCallD.cont_person_code)
    }
  }
  clearContact(){
    this.saleCallD.cont_person_code = '';
    this.saleCallD.name_en = '' ;
    this.saleCallD.name_th = '' ;
    this.saleCallD.position ='' ;
    this.saleCallD.phone = '' ;
    this.saleCallD.phone_ext = '' ;
    this.saleCallD.mobile = '' ;
    this.saleCallD.email = '' ;
  }
}
