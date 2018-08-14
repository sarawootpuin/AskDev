import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {SaleCallDetail} from "../../sale-call-visit/model/Sale-Call-Detail";
import {SaleCallVisitOutSide} from "../../sale-call-visit/model/Sale-Call-VisitOutSide";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";
import {SaleCallVisitService} from "../../sale-call-visit/sale-call-visit.service";
import {ObjTemp} from "../../sale-call-visit/model/ObjTemp";
import {Subscription} from "rxjs/Subscription";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {VisitDetailComponent} from "../visit-detail/visit-detail.component";
import {SaleCallVisitAfterCaService} from "../sale-call-visit-after-ca.service";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit , OnChanges{
  miletotal : number = undefined;

  mySaleCallVisitOutside: SaleCallVisitOutSide = new SaleCallVisitOutSide();
  subscription: Subscription;
  joinerList :ObjTemp[] = [];
  selectjoinerList : ObjTemp;

  componentReadOnly:boolean = true ;

  closeKeyExpense : boolean = true ;

  @Input ('ListSelectData') ListSelectData : SaleCallDetail;
  @Input ('ListMKT') ListMKT : ObjTemp[];
  @Input ('ListEMP') ListEMP : ObjTemp[];
  @ViewChild('listAttendee') listAttendee: ActionDialogComponent;

  constructor(private userStorage : UserStorage) { }

  ngOnChanges(simpleChanges : SimpleChanges){
    //console.log(this.ListMKT);
    //console.log(simpleChanges);
  }

  ngOnInit() {
    //console.log('OnInit Expense')
    this.clearInput()

    if (this.ListSelectData.visitOutSide){
      this.mySaleCallVisitOutside = this.ListSelectData.visitOutSide ;
      this.onCreaterjoinerList(this.mySaleCallVisitOutside.joiner );
      this.calExpenseAmount();

      if ( this.ListSelectData.visitOutSide.submit_flag  == 'Y' ){
        this.componentReadOnly = true
      } else {
        this.componentReadOnly = false
      }

      if ( this.mySaleCallVisitOutside.travel_name == this.userStorage.getCode() ) {
        this.closeKeyExpense = false ;
      }
    }
    if ( this.ListSelectData.submit_flg == 'Y' ){
      this.componentReadOnly = true
    } else {
      this.componentReadOnly = false
    }

    // console.log(this.mySaleCallVisitOutside.travel_name);
    if ( this.mySaleCallVisitOutside.travel_name == this.userStorage.getCode() ) {
      this.closeKeyExpense = false ;
    }
    this.calExpenseAmount();
  }

  openDialogAttendees(){
    this.listAttendee.open();
  }

  okAddAttendees(){
    // console.log(this.saleCallVisitService.selectsaleD.listAttendeesB);
    let attendeesB = this.ListSelectData.listAttendeesB ;

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

  clearInput(){
    console.log('dddd',this.ListSelectData.visitOutSide.travel_by)
    this.ListSelectData.visitOutSide.mile_start = undefined
    this.ListSelectData.visitOutSide.mile_end = undefined
    this.ListSelectData.visitOutSide.joiner = undefined
    this.ListSelectData.visitOutSide.visit_detail = undefined
    this.ListSelectData.visitOutSide.travel_name = undefined
    this.ListSelectData.visitOutSide.withdraw_amt = undefined
    this.ListSelectData.visitOutSide.from_time = undefined
    this.ListSelectData.visitOutSide.to_time = undefined
    this.miletotal = undefined


  }

}
