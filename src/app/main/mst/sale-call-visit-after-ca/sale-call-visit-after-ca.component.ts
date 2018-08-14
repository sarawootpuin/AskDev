import {Component, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {SaleCallVisitAfterCaService} from "./sale-call-visit-after-ca.service";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {ListVisitAfter} from "./model/visitAfterList";
import {SaleCallDetail} from "../sale-call-visit/model/Sale-Call-Detail";
import {DateUtils} from "../../../shared/center/utils/date-utils";
import {ObjTemp} from "../sale-call-visit/model/ObjTemp";
import {AlertDialogComponent} from "../../../shared/center/alert-dialog/alert-dialog.component";
import {Router} from "@angular/router";
import {isUndefined} from "util";
import {ActionDialogComponent} from "../../../shared/center/action-dialog/action-dialog.component";

@Component({
  selector: 'app-sale-call',
  templateUrl: './sale-call-visit-after-ca.component.html',
  styleUrls: ['./sale-call-visit-after-ca.component.css']
})
export class SaleCallVisitAfterCaComponent implements OnInit,OnChanges, OnDestroy {

  private subscription1: Subscription;
  private subscription2: Subscription;
  private subscription3: Subscription;
  private subscription4: Subscription;
  subscriptionSubmit: Subscription;

  urlAddress : string = ''
  saleCallNo : string
  tabViewShow : boolean = false;
  ListVisitAfter : ListVisitAfter []=[]
  ListVisit : ObjTemp[];
  ListFNMT: ObjTemp[];
  ListFNME: ObjTemp[];
  ListMKT: ObjTemp[];
  ListEMP: ObjTemp[];
  TravelAmount : ObjTemp;

  blankField : any [] = [];

  // ListAns :
  selectedData : SaleCallDetail = new SaleCallDetail()
  isLoading : boolean = false ;

  @ViewChild('dialogWarningInput') dialogWarningInput: ActionDialogComponent;
  @ViewChild('dialogalert') dialogalert: AlertDialogComponent;
  @ViewChild('Questiondialog') Questiondialog: AlertDialogComponent;
  @ViewChild('submitdialog') submitdialog: AlertDialogComponent;

  constructor( private SaleCallVisitAfterCaService : SaleCallVisitAfterCaService,
               private userStorage : UserStorage , public date : DateUtils ,private router: Router) { }
  ngOnChanges(){
  }
  ngOnInit() {
    this.subscription1 = this.SaleCallVisitAfterCaService.getListSellCallvisitAfter(
      "web",this.userStorage.getUserName(),this.userStorage.getComCode(),this.userStorage.getCode()).subscribe(
      (data : any) =>{
        // debugger
        //console.log("Get service Link")

        if(data){
          //console.log(data)
          this.ListVisitAfter = ListVisitAfter.parse(data.LIST_DATA);
          this.urlAddress = this.SaleCallVisitAfterCaService.urlAddress;
          //console.log(this.urlAddress)
          //console.log('Assign data',this.ListVisitAfter)
        }
        // else{
        //   console.log('not found')
        // }
      });

    this.subscription2 = this.SaleCallVisitAfterCaService.getListAns("web",this.userStorage.getUserName(),
      this.userStorage.getComCode(),this.userStorage.getCode(),'DETAIL').subscribe(
      (data : any) =>{
        // debugger
        //console.log("Get List Ans")
        //console.log(data.LIST_DATA)
        if(data){
          this.ListVisit = []
          this.ListEMP = []
          for(let i = 0 ; i<data.LIST_DATA.length ; i++){
            if(data.LIST_DATA[i].TYPE == 'VISIT'){
              this.ListVisit.push(data.LIST_DATA[i])
            }else if(data.LIST_DATA[i].TYPE == 'EMP'){
              this.ListEMP.push(new ObjTemp(data.LIST_DATA[i].DISPLAY, data.LIST_DATA[i].ID, data.LIST_DATA[i].KEY1, data.LIST_DATA[i].KEY2, data.LIST_DATA[i].TYPE));
            }else if(data.LIST_DATA[i].TYPE == 'AMTTRAVEL'){
              this.TravelAmount  = new ObjTemp(data.LIST_DATA[i].DISPLAY, data.LIST_DATA[i].ID, data.LIST_DATA[i].KEY1, data.LIST_DATA[i].KEY2, data.LIST_DATA[i].TYPE);
              this.selectedData.visitOutSide.prce_per_km = this.TravelAmount.id
            }
          }
          // console.log('TYPE : VISIT',this.ListVisit)
          // console.log('TYPE : EMP',this.ListEMP)
          // console.log('TYPE : AMTTRAVEL',this.TravelAmount)
          // console.log(this.selectedData.visitOutSide.prce_per_km)
        }
        // else{
        //   console.log('not found TYPE VISIT')
        // }
      });

    this.subscription3 = this.SaleCallVisitAfterCaService.getListAns("web",this.userStorage.getUserName(),
      this.userStorage.getComCode(),this.userStorage.getCode(),'HEAD').subscribe(
      (data : any) =>{
        // debugger
        //console.log("Get List Ans")
        if(data){
          //console.log(data)
          this.ListFNMT = []
          this.ListFNME = []
          //this.ListMKT = []

          for(let i = 0 ; i<data.LIST_DATA.length ; i++){
            if(data.LIST_DATA[i].TYPE == 'FNMT'){
              this.ListFNMT.push(new ObjTemp(data.LIST_DATA[i].DISPLAY, data.LIST_DATA[i].ID, data.LIST_DATA[i].KEY1, data.LIST_DATA[i].KEY2, data.LIST_DATA[i].TYPE));
              // this.ListFNMT.push(data.LIST_DATA[i])
            }else if(data.LIST_DATA[i].TYPE == 'FNME'){
              this.ListFNME.push(new ObjTemp(data.LIST_DATA[i].DISPLAY, data.LIST_DATA[i].ID, data.LIST_DATA[i].KEY1, data.LIST_DATA[i].KEY2, data.LIST_DATA[i].TYPE));
              // this.ListFNME.push(data.LIST_DATA[i])
            }
          }
        }
      });

    this.subscription4 = this.SaleCallVisitAfterCaService.getSaleCallHead_Detail("web",this.userStorage.getUserName(),this.userStorage.getComCode(),
      this.saleCallNo).subscribe(
      (data : any) =>{
        // debugger
        // console.log("Get List Ans")
        if(data){
          //console.log(data)
          this.ListMKT = []
          for(let i = 0 ; i<data.LIST_DATA.length ; i++){
            if(data.LIST_DATA[i].TYPE == 'OFFICER'){
              this.ListMKT.push(new ObjTemp(data.LIST_DATA[i].DISPLAY, data.LIST_DATA[i].ID, data.LIST_DATA[i].KEY1, data.LIST_DATA[i].KEY2, data.LIST_DATA[i].TYPE));
            }
          }
        }
        // console.log(this.ListMKT)
      });
  }



  genarateData(saleCallNo : string) {

    this.selectedData = new SaleCallDetail();
    this.saleCallNo = saleCallNo
    if(this.saleCallNo){
      this.tabViewShow = true
    }
    //console.log(this.selectedData.name_th)

    this.selectedData.sale_call_no = this.saleCallNo;
    this.selectedData.usr_upd= this.userStorage.getCode();
    this.selectedData.call_visit_date = this.date.currentDate();
    this.selectedData.call_visit_by = this.userStorage.getCode();
    this.selectedData.input_by= this.userStorage.getCode();
    this.selectedData.visitOutSide.visit_by = this.userStorage.getCode();
    this.selectedData.visitOutSide.reqst_by = this.userStorage.getCode();
    this.selectedData.input_date = this.date.currentDate();
    this.selectedData.visitOutSide.reqst_dt = this.date.currentDate();
    this.selectedData.submit_flg = 'y';
    this.selectedData.mobile_sorce = 'N';
    this.selectedData.sale_call_type = 'V';
    this.selectedData.visitOutSide.sale_call_no = this.saleCallNo;
    this.selectedData.visitOutSide.prce_per_km = this.TravelAmount.id;

    //console.log(this.selectedData)

  }

  ngOnDestroy(){
    if (this.subscription1 != null) {
      this.subscription1.unsubscribe();
    }else if(this.subscription2 != null){
      this.subscription2.unsubscribe();
    }else if(this.subscription3 != null){
      this.subscription3.unsubscribe();
    }
  }

  saveAll(){
    this.isLoading = true;
    this.blankField = []
    this.checkValueSubmit()
  }

  submit(){
    this.subscriptionSubmit = this.SaleCallVisitAfterCaService.sendSaleCallDetail("web",this.userStorage.getUserName(),this.userStorage.getCode(),
      this.selectedData).subscribe(
      (test: any) => {
        this.isLoading = false;
        // console.log(test);
        if (test == null) {
          this.submitdialog.setAction('INFORMATION');
          this.submitdialog.setMessage('Submit Complete');
          this.submitdialog.open();
        } else {
          this.dialogalert.setMessage("Submit Error");
          this.dialogalert.open();
        } ;
      }
    );
  }

  checkValueSubmit(){
    this.isLoading = false;
    let data = this.selectedData
    let count = 0

    if(!data.sale_call_no){
      this.blankField.push('Sale Call No')
      count += 1
    }

    if(!this.selectedData.visitOutSide.visit_dt){
      this.blankField.push('Visit Date')
      count += 1
    }else{
      this.selectedData.seq_no = 1
      this.selectedData.sale_call_dt = this.selectedData.visitOutSide.visit_dt
      this.selectedData.call_visit_date = this.selectedData.visitOutSide.visit_dt
    }

    if(data.sale_call_type == 'V'){
      if(!data.traffic){
        this.blankField.push('Traffic')
        count += 1
      }
      if(!data.interview){
        this.blankField.push('Interview')
        count += 1
      }
      if(!data.purpose){
        this.blankField.push('Visit Purpose')
        count += 1
      }
      if(!data.sale_call_note){
        this.blankField.push('Visit Detail')
        count += 1
      }
    }

    if(data.visitOutSide.travel_by == undefined || data.visitOutSide.travel_by == '') {
      this.blankField.push('Travel By');
      count += 1;
    }else if(data.visitOutSide.travel_by == 'O'){
      this.selectedData.visitOutSide.submit_flag = 'Y'
      this.setFTime()
      this.setTTime()
      if(!data.visitOutSide.from_time){
        this.blankField.push('From Time')
        count += 1
      }
      if(!data.visitOutSide.to_time){
        this.blankField.push('to Time')
        count += 1
      }
      if(!data.visitOutSide.mile_start){
        this.blankField.push('Mile Start')
        count += 1
      }
      if(!data.visitOutSide.mile_end){
        this.blankField.push('Mile End')
        count += 1
      }
      if(!data.visitOutSide.visit_detail){
        this.blankField.push('Address Description')
        count += 1
      }
    }else if(data.visitOutSide.travel_by == 'OTH'){
      this.selectedData.visitOutSide.submit_flag = 'N'
      if(!data.visitOutSide.travel_name){
        this.blankField.push('Other MKT Name')
        count += 1
      }
    }else{
      this.selectedData.visitOutSide.submit_flag = 'Y'
    }

    if(count == 0){
      this.submit()
    }else{
      this.warning()
    }
  }

  setFTime(){
    let data =this.selectedData.visitOutSide.from_time
    if(data){
      const Time = this.selectedData.visitOutSide.from_time.toString().split(" ")
      if(Time.length < 7 ){
        this.selectedData.visitOutSide.from_time = Time[0]
        // console.log('< 7',this.selectedData.visitOutSide.from_time)
      }else{
        let newTime = Time[4].slice(0,5)
        this.selectedData.visitOutSide.from_time = newTime
        // console.log('= 7',this.selectedData.visitOutSide.from_time)
      }
    }
  }

  setTTime(){
    let data =this.selectedData.visitOutSide.to_time
    if(data){
      const Time = this.selectedData.visitOutSide.to_time.toString().split(" ")
      if(Time.length < 7){
        this.selectedData.visitOutSide.to_time = Time[0]
        // console.log('< 7',this.selectedData.visitOutSide.from_time)
      }else{
        let newTime = Time[4].slice(0,5)
        this.selectedData.visitOutSide.to_time = newTime
        // console.log('= 7',this.selectedData.visitOutSide.from_time)
      }
    }
  }

  backToHome(){
    this.router.navigate(['/home']);
  }

  warning(){
    this.dialogWarningInput.onCloseDialog.emit(false)
    this.isLoading = false ;
    this.dialogWarningInput.open();
  }
}
