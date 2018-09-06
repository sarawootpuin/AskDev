/**
 * Created by pongsatorn.an on 16/10/2560.
 */
import {Component, OnChanges, OnInit} from '@angular/core';
import {MonitorList} from "./monitor-model/MonitorList";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {MonitorService} from "./monitor.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html'
})
export class MonitorComponent implements OnInit ,OnChanges{
  date2 : any;
  date3 : any;
  type : any;

  tableShow : any;



  // listMonitor : any;
  search : boolean;
  isLoading : boolean = false;
  ListMonitor : MonitorList[]=[];
  totalRecords :number ;
  subscription : Subscription;

  constructor( private Monitorservice :MonitorService,
               private userStorage : UserStorage,
               ) {
  }

  ngOnInit() {
    this.tableShow = this.userStorage.getCode()
    console.log(this.tableShow)
  }

  ngOnChanges() { }

  getFromDate(event){
    this.date2 = this.convertDate(event)
  }

  getToDate(event){
    this.date3 = this.convertDate(event)
  }

  getShowType(event){
    this.type = event;
  }

  convertDate(date){
    var dd = date.slice(0, 2);
    var mm = date.slice(3, 5);
    var yy = date.slice(6, 10);
    var newDate = yy+mm+dd;

    return newDate
  }
  searchOpen(){
    this.search = true;
    console.log('22222222 scroll')
  }

  conditions(){
    this.isLoading = true;
    this.subscription = this.Monitorservice.getListMonitor("web",this.userStorage.getUserName(),this.userStorage.getComCode()
      ,this.userStorage.getCode(),this.date2,this.date3,this.type).subscribe(
      (data : any) =>{
        debugger
        //console.log("testtt");

        if (data) {
          console.log(data);
          this.ListMonitor = MonitorList.parse(data.LIST_DATA);
          this.totalRecords = this.ListMonitor.length;
          // console.log(this.ListMonitor);
          this.isLoading = false;
          this.search = true;

        }else{
          console.log('not found')
          this.isLoading = false;

        }
      });

  }


}
