import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {MonitorService} from "../monitor.service";
import {MonitorList} from "../monitor-model/MonitorList";
import {isNumber} from "util";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {count} from "rxjs/operator/count";

@Component({
  selector: 'app-search-monitor',
  templateUrl: './search-monitor.component.html'
})
export class SearchMonitorComponent implements OnInit , OnChanges {
  isLoading : boolean ;
  totalRecords :number ;


  fromDate: Date ;
  toDate: Date;
  showType :string = 'total_task';

  task :any = 0;
  reJect_task : any = 0;
  reJect : any = 0;
  reCall : any = 0;
  follow_u : any = 0;
  prePare : any = 0;
  call_found : any = 0;
  call_not_found : any = 0;
  visit : any = 0;
  undo : any = 0;
  undo_all : any = 0;
  join_visit : any = 0;
  visit_warning : any = 0;

  @Input ('userCodeShow') userCodeShow : string  ;
  @Input ('listMonitor') listMonitor : MonitorList[] = [];
  @Input ('statusLoad') statusLoad : boolean;
  @Input ('openSearch') openSearch : boolean = false;
  @Output ('sendToDate') sendToDate : EventEmitter<any> = new EventEmitter();
  @Output ('sendFromDate') sendFromDate : EventEmitter<any> = new EventEmitter();
  @Output ('sendShowType') sendShowType : EventEmitter<any> = new EventEmitter();

  SelectMonitor : MonitorList;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private Monitorservice :MonitorService,
              private userStorage : UserStorage) {
  }
  ngOnInit() {

  }
  ngOnChanges() {
    this.isLoading = this.statusLoad;
    console.log(this.listMonitor);


    if(this.listMonitor && this.listMonitor.length > 0){
      console.log(this.userCodeShow);
      this.calculateTotal();

    }
  }

  onRowSelect(saleCallSelected: MonitorList) {
  }

  sendConditions(id){
    if(id == 'from'){
      this.sendFromDate.emit(this.fromDate);
    }else if(id == 'to'){
      this.sendToDate.emit(this.toDate);
    }
    this.setType();
  }

  setType(){
    this.sendShowType.emit(this.showType);

  }

  calculateSubTotal(code : string,field : string){
    let total = 0;
    if(this.listMonitor) {
      for(let monitor of this.listMonitor) {
        if(monitor.team_code === code) {
          if( field == 'field1' ){
            total += monitor.total_task;
          }else if( field == 'field2' ){
            total += monitor.reject_task;
          }else if( field == 'field3' ){
            total += monitor.result_reject;
          }else if( field == 'field4' ){
            total += monitor.result_recall;
          }else if( field == 'field5' ){
            total += monitor.result_follow;
          }else if( field == 'field6' ){
            total += monitor.result_prepare;
          }else if( field == 'field7' ){
            total += monitor.activity_cf;
          }else if( field == 'field8' ){
            total += monitor.activity_cnf;
          }else if( field == 'field9' ){
            total += monitor.activity_visit;
          }else if( field == 'field10' ){
            total += monitor.activity_undo;
          }else if( field == 'field11' ){
            total += monitor.undo;
          }else if( field == 'field12' ){
            total += monitor.join_visit;
          }else if( field == 'field13' ){
            total += monitor.visitwarning;
          }
        }
      }
    }
    return total;
  }

  calculateTotal(){
    if(this.listMonitor){
      for(let i = 0 ; i< this.listMonitor.length  ; i++){
        this.task += this.listMonitor[i].total_task;
        this.reJect_task += this.listMonitor[i].reject_task;
        this.reJect += this.listMonitor[i].result_reject;
        this.reCall += this.listMonitor[i].result_recall;
        this.follow_u += this.listMonitor[i].result_follow;
        this.prePare += this.listMonitor[i].result_prepare;
        this.call_found += this.listMonitor[i].activity_cf;
        this.call_not_found += this.listMonitor[i].activity_cnf;
        this.visit += this.listMonitor[i].activity_visit;
        this.undo += this.listMonitor[i].activity_undo;
        this.undo_all += this.listMonitor[i].undo;
        this.join_visit += this.listMonitor[i].join_visit;
        this.visit_warning += this.listMonitor[i].visitwarning;
      }
    }
  }
}
