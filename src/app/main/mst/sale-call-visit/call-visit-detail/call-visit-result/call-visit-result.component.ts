import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ObjTemp} from "../../model/ObjTemp";
import {SaleCallDetail} from "../../model/Sale-Call-Detail";
import {DatePipe} from "@angular/common";
import {SaleCallVisitService} from "../../sale-call-visit.service";
import {Subscription} from "rxjs/Subscription";
import {ContactpersonComponent} from "../../../contactperson/contactperson.component";
import {ContactPersonModel} from "../../../contactperson/model/ContactPerson-model";

@Component({
  selector: 'app-call-visit-result',
  templateUrl: './call-visit-result.component.html',
  styleUrls: ['./call-visit-result.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CallVisitResultComponent implements OnInit, OnDestroy {

  componentReadOnly : boolean = true ;

  subscription: Subscription;
  mySaleCallD: SaleCallDetail[];
  thisSaleCallD: SaleCallDetail;
  ListReason: ObjTemp[];
  ListVisitPur: ObjTemp[];
  SelectReason: ObjTemp;
  ReasonShow: boolean = false;
  FollowShow: boolean = false;

  ListFNMT: ObjTemp[];
  ListFNME: ObjTemp[];

  @ViewChild('dialogcontactperson') dialogcontactperson: ContactpersonComponent;

  constructor(private saleCallVisitService: SaleCallVisitService,
              private dataPipe: DatePipe) {

  }

  ngOnInit() {
    this.thisSaleCallD = new SaleCallDetail();
    this.subscription = this.saleCallVisitService.eventselectsaleD.subscribe(
      (obj) => {
        this.thisSaleCallD = obj;
        this.changeResult();
        this.ListVisitPur = this.saleCallVisitService.ListVisit ;
        this.ListFNMT  = this.saleCallVisitService.ListFNMT ;
        this.ListFNME  = this.saleCallVisitService.ListFNME ;

        if (this.thisSaleCallD.submit_flg == 'Y' ){  this.componentReadOnly = true }
        else { this.componentReadOnly = false }


      }
    );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  changeResult() {
    this.ListReason = [];
    if (this.thisSaleCallD.call_result_flg == "P") {
      this.ListReason = this.saleCallVisitService.ListREASONP;
      this.FollowShow = false;
    }
    else if (this.thisSaleCallD.call_result_flg == "F") {
      this.ListReason = this.saleCallVisitService.ListREASONF;
      this.FollowShow = true;
    }
    else if (this.thisSaleCallD.call_result_flg == "R") {
      this.FollowShow = true;
      if (this.thisSaleCallD.sale_call_type == "CF") {
        this.ListReason = this.saleCallVisitService.ListREASONRCF
      }
      else if (this.thisSaleCallD.sale_call_type == "CNF") {
        this.ListReason = this.saleCallVisitService.ListREASONRCNF
      }
      else if (this.thisSaleCallD.sale_call_type == "V") {
        this.ListReason = this.saleCallVisitService.ListREASONR
      }
    }

    if (this.ListReason.length == 0)
      this.ReasonShow = false
    else  this.ReasonShow = true;
  }

  Changedate(indate: any) {
    //console.log("input" + indate.constructor.name);
    let strDate = this.dataPipe.transform(indate, 'dd/MM/yyyy');
    //console.log("result" + strDate.constructor.name);
    return strDate;
  }

  selectResult(select: any) {
    this.SelectReason = this.ListReason.find(ObjTemp => ObjTemp.id == select);
    this.thisSaleCallD.call_result_detail = this.SelectReason.id;
    this.thisSaleCallD.call_result_detail_desc = this.SelectReason.display;
  }


  addDay(value: number) {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + value);
    this.thisSaleCallD.follow_date = this.Changedate(currentDate);
  }

  visitClick(){
    console.log('visit refresh');
    this.saleCallVisitService.reFreshSelectsaleD();
  }

  openContract(){
  //  this.dialogContract.setTitle('Contact Of Customer');
    this.dialogcontactperson.setFNMT(this.ListFNMT);
    this.dialogcontactperson.setFNME(this.ListFNME);
    this.dialogcontactperson.showDialog();
  }

  getContact( contact : ContactPersonModel)
  {
    console.log(contact);
    if (contact) {
      this.thisSaleCallD.cont_person_code = contact.cont_person_code ;
      this.thisSaleCallD.name_en = contact.name_en ;
      this.thisSaleCallD.name_th = contact.name_th ;
      this.thisSaleCallD.position = contact.position ;
      this.thisSaleCallD.phone = contact.phone ;
      this.thisSaleCallD.phone_ext = contact.phone_ext ;
      this.thisSaleCallD.mobile = contact.mobile ;
      this.thisSaleCallD.email = contact.email ;
    }
  }

  clearContact(){
    this.thisSaleCallD.cont_person_code = '';
    this.thisSaleCallD.name_en = '' ;
    this.thisSaleCallD.name_th = '' ;
    this.thisSaleCallD.position ='' ;
    this.thisSaleCallD.phone = '' ;
    this.thisSaleCallD.phone_ext = '' ;
    this.thisSaleCallD.mobile = '' ;
    this.thisSaleCallD.email = '' ;
  }
}
