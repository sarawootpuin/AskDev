import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {SaleCallVisitAfterCaService} from "../sale-call-visit-after-ca.service";
import {SaleCallAttendees} from "../../sale-call-visit/model/Sale-Call-Attendees";
import {SaleCallDetail} from "../../sale-call-visit/model/Sale-Call-Detail";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";
import {constructDependencies} from "@angular/core/src/di/reflective_provider";

@Component({
  selector: 'app-ettendees',
  templateUrl: './ettendees.component.html',
  styleUrls: ['./ettendees.component.css']
})
export class EttendeesComponent implements OnInit {
  selectB: SaleCallAttendees;
  selectC: SaleCallAttendees;

  subscription: Subscription;

  OutURLB: string = "";
  OutURLC: string = "";

  add_Name: string;
  add_Pos: string;

  thisseq_no: string;

  mySaleCallAttendeesB: SaleCallAttendees[] = [];
  mySaleCallAttendeesC: SaleCallAttendees[] = [];

  @Input ('ListSelectData') ListSelectData : SaleCallDetail;
  @Input ('thissale_call_no') thissale_call_no ;
  constructor(private saleCallVisitService: SaleCallVisitAfterCaService) {
    this.OutURLB = this.saleCallVisitService.getAttendees("B");
  }



  ngOnInit() {

    if ( (this.saleCallVisitService.selectsaleD)  )
    {
      this.thissale_call_no = this.ListSelectData.sale_call_no;
      this.thisseq_no = this.ListSelectData.seq_no;

      if (this.saleCallVisitService.selectsaleD.listAttendeesB)
      { this.mySaleCallAttendeesB = this.ListSelectData.listAttendeesB; }

      if (this.saleCallVisitService.selectsaleD.listAttendeesC)
      {this.mySaleCallAttendeesC = this.ListSelectData.listAttendeesC;}

    }

    this.subscription =  this.saleCallVisitService.eventselectsaleD.subscribe(
      (obj: SaleCallDetail) => {
        this.OutURLC = this.saleCallVisitService.getAttendees("C");
        // console.log(this.OutURLC);
        this.thissale_call_no = obj.sale_call_no;
        this.thisseq_no = obj.seq_no;

        this.mySaleCallAttendeesB = obj.listAttendeesB;
        this.mySaleCallAttendeesC = obj.listAttendeesC;
      }
    );

  }
  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  getNameB(data: string) {
    this.add_Name = data;
  }

  getPosB(data: string) {
    this.add_Pos = data;
  }

  getCodeB(data: string) {
    console.log(data)
    console.log(this.ListSelectData)
    let newRec = new SaleCallAttendees();
    newRec.sale_call_no = this.thissale_call_no;
    newRec.seq_no = this.thisseq_no;
    newRec.order_no = this.mySaleCallAttendeesB.length + 1;
    newRec.attnd_name = data;
    newRec.attnd_position = this.add_Pos;
    newRec.attnd_type = "B";
    newRec.name_full = this.add_Name;
    this.mySaleCallAttendeesB = [...this.mySaleCallAttendeesB, newRec];
    this.ListSelectData.listAttendeesB =  this.mySaleCallAttendeesB;

  }

  deleteB() {
    let delRow = this.mySaleCallAttendeesB.indexOf(this.selectB);
    this.mySaleCallAttendeesB.splice(delRow, 1);
    ////  Change  order
    for (let i = 1; i <= this.mySaleCallAttendeesB.length; i++) {
      this.mySaleCallAttendeesB[i - 1].order_no = i;
    }
    ;
    this.mySaleCallAttendeesB = [...this.mySaleCallAttendeesB];
    this.ListSelectData.listAttendeesB =  this.mySaleCallAttendeesB;
  }

  addC() {
    let addTrue : boolean = true ;

    if ((this.mySaleCallAttendeesC) && (this.mySaleCallAttendeesC.length > 0) )   ///  Don' Empty
    {
      let lastRec = this.mySaleCallAttendeesC.length - 1 ;
      if (!this.mySaleCallAttendeesC[lastRec].attnd_name){   //  Last Record Don'have Customer Name
        addTrue = false ;
      }
    }


    if (addTrue) {
      let newRec = new SaleCallAttendees();
      newRec.sale_call_no = this.thissale_call_no;
      newRec.seq_no = this.thisseq_no;
      newRec.order_no = this.mySaleCallAttendeesC.length + 1;
      newRec.attnd_name = '';
      newRec.attnd_position = '';
      newRec.attnd_type = "C";
      newRec.name_full = '';
      this.selectC = newRec ;
      this.mySaleCallAttendeesC = [...this.mySaleCallAttendeesC, newRec];
      this.ListSelectData.listAttendeesC =  this.mySaleCallAttendeesC;
    }
  }

  deleteC() {
    let delRow = this.mySaleCallAttendeesC.indexOf(this.selectC);
    this.mySaleCallAttendeesC.splice(delRow, 1);
    ////  Change  order
    for (let i = 1; i <= this.mySaleCallAttendeesC.length; i++) {
      this.mySaleCallAttendeesC[i - 1].order_no = i;
    }
    this.mySaleCallAttendeesC = [...this.mySaleCallAttendeesC];
    this.ListSelectData.listAttendeesC =  this.mySaleCallAttendeesC;
  }

}
