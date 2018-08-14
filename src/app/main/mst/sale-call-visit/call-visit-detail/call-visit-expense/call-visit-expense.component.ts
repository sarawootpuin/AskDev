import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ObjTemp} from "../../model/ObjTemp";
import {SaleCallVisitOutSide} from "../../model/Sale-Call-VisitOutSide";
import {SaleCallVisitService} from "../../sale-call-visit.service";
import {SaleCallDetail} from "../../model/Sale-Call-Detail";
import {Subscription} from "rxjs/Subscription";
import {ActionDialogComponent} from "../../../../../shared/center/action-dialog/action-dialog.component";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import { Input } from '@angular/core';
import { SaleCallAttendees } from '../../model/Sale-Call-Attendees';

declare var $: any;

@Component({
  selector: 'app-call-visit-expense',
  templateUrl: './call-visit-expense.component.html',
  styleUrls: ['./call-visit-expense.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CallVisitExpenseComponent implements OnInit, OnDestroy {
  @Input() amend : string;
  mySaleCallVisitOutside: SaleCallVisitOutSide = new SaleCallVisitOutSide();

  subscription: Subscription;
  ListEMP: ObjTemp[];
  ListMKT: ObjTemp[];
  TravelAmount: ObjTemp;
  miletotal :number ;

  joinerList :ObjTemp[] = [];
  selectjoinerList : ObjTemp;


  lat: number = 13.725911;
  lng: number = 100.528653;

  componentReadOnly:boolean = true ;

  closeKeyExpense : boolean = true ;

  @ViewChild('listAttendee') listAttendee: ActionDialogComponent;

  constructor(private saleCallVisitService: SaleCallVisitService,
              private userStorage: UserStorage) {
  }

  ngOnInit() {

    if (this.saleCallVisitService.selectsaleD.visitOutSide)
    {
      this.mySaleCallVisitOutside = this.saleCallVisitService.selectsaleD.visitOutSide ;
      this.ListEMP = this.saleCallVisitService.ListEMP;
      this.ListMKT = this.saleCallVisitService.ListOFFICER;
      this.TravelAmount = this.saleCallVisitService.TravelAmount;
      this.mySaleCallVisitOutside.prce_per_km = this.TravelAmount.id ;

      this.onCreaterjoinerList(this.mySaleCallVisitOutside.joiner );
      this.calExpenseAmount();


      if ( this.saleCallVisitService.selectsaleD.visitOutSide.submit_flag  == 'Y' ){ 
        this.componentReadOnly = true
        if(this.amend) {
          this.componentReadOnly = false
        }
      }
      else { this.componentReadOnly = false }

      if ( this.mySaleCallVisitOutside.travel_name == this.userStorage.getCode() ) {
        this.closeKeyExpense = false ;
      }
    }


    this.subscription = this.saleCallVisitService.eventselectsaleD.subscribe(
        (obj: SaleCallDetail) => {
          this.mySaleCallVisitOutside = obj.visitOutSide;

          this.ListEMP = this.saleCallVisitService.ListEMP;
          this.ListMKT = this.saleCallVisitService.ListOFFICER;
          this.TravelAmount = this.saleCallVisitService.TravelAmount;
          this.mySaleCallVisitOutside.prce_per_km = this.TravelAmount.id ;
          this.onCreaterjoinerList(this.mySaleCallVisitOutside.joiner );
          // console.log('visit Out side');
          // console.log(obj);
          if ( obj.submit_flg == 'Y' ){ this.componentReadOnly = true }
          else { this.componentReadOnly = false }

          console.log(this.mySaleCallVisitOutside.travel_name);
          if ( this.mySaleCallVisitOutside.travel_name == this.userStorage.getCode() ) {
              this.closeKeyExpense = false ;
          }

          this.calExpenseAmount();
        }
      );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  openDialogAttendees(){
    this.listAttendee.open();
  }

  okAddAttendees(){
    //console.log(this.saleCallVisitService.selectsaleD.listAttendeesB);
    let attendeesB : SaleCallAttendees[] = [];
    //let attendeesB = this.saleCallVisitService.selectsaleD.listAttendeesB ;
    this.saleCallVisitService.selectsaleD.listAttendeesB.forEach(
      value => {
        if(value.attnd_name == this.saleCallVisitService.saleH.ownr) {

        } else {
          attendeesB.push(value);
        }
      }
    )
    if ((attendeesB) && (attendeesB.length > 0) ){
      let stringAttendees = '' ;
      for(let i = 0 ; i < attendeesB.length ; i++){

        if (i == 0) {
          stringAttendees = attendeesB[i].attnd_name ;
        }
        else {
            stringAttendees = stringAttendees + ','+ attendeesB[i].attnd_name.trim() ;
        }
      }
      this.onCreaterjoinerList(stringAttendees);
    }

  }

  onCreaterjoinerList(stringAttendees : string){
    this.mySaleCallVisitOutside.joiner = stringAttendees ;
    this.joinerList = [] ;

    //console.log(stringAttendees);
    if (stringAttendees) {
      let afSplitJoiner = stringAttendees.split(',');
      //console.log(afSplitJoiner);

      for(let i = 0 ; i < afSplitJoiner.length ; i++ ){
         let tempobj  = this.ListEMP.find( ObjTemp => ObjTemp.id == afSplitJoiner[i]  );
         this.joinerList = [...this.joinerList,tempobj];
      }
    }
  }


  deleteJoiner(){
    if(  (this.joinerList) && (this.selectjoinerList) ) {
        let delRow = this.joinerList.indexOf(this.selectjoinerList);
        this.joinerList.splice(delRow, 1);
        let strjoiner = '';
        for (let i = 0; i < this.joinerList.length; i++) {
          if (i == 0) {
            strjoiner =  this.joinerList[i].id ;
          }
          else {
            strjoiner = strjoiner  + ','+ this.joinerList[i].id ;
          }
        }
        this.joinerList = [...this.joinerList];
        this.mySaleCallVisitOutside.joiner = strjoiner ;
    }

  }

  calExpenseAmount(){
    if (this.mySaleCallVisitOutside.mile_end == 0 )
    {this.mySaleCallVisitOutside.mile_end = this.mySaleCallVisitOutside.mile_start }
   //console.log('');
   this.miletotal = this.mySaleCallVisitOutside.mile_end - this.mySaleCallVisitOutside.mile_start ;
   if (this.miletotal) {
       this.mySaleCallVisitOutside.withdraw_amt = this.miletotal * this.mySaleCallVisitOutside.prce_per_km ;
   } else
     { this.mySaleCallVisitOutside.withdraw_amt = 0 }
  }

  clearValue(){
    this.mySaleCallVisitOutside.from_time = ''
    this.mySaleCallVisitOutside.to_time = ''
    this.mySaleCallVisitOutside.mile_start = ''
    this.mySaleCallVisitOutside.mile_end = ''
    this.mySaleCallVisitOutside.joiner = ''
    this.mySaleCallVisitOutside.withdraw_amt = 0
    this.mySaleCallVisitOutside.travel_name = ''
    if(this.mySaleCallVisitOutside.travel_by=='OTH'){
      this.mySaleCallVisitOutside.travel_name = ''
    }
  }
}
