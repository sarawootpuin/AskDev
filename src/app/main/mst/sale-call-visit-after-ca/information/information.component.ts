import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ListVisitAfter} from "../model/visitAfterList";
import {SaleCallDetail} from "../../sale-call-visit/model/Sale-Call-Detail";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {DateUtils} from "../../../../shared/center/utils/date-utils";
import {constructDependencies} from "@angular/core/src/di/reflective_provider";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit,OnChanges {

  visitName : string ='';

  @Input ('ListVisitAfter') ListVisitAfter : ListVisitAfter;
  @Input ('ListSelectData') ListSelectData : SaleCallDetail;
  @Input ('urlAddress') urlAddress : string;
  @Output ('saleCallNo') saleCallNo : EventEmitter<string> = new EventEmitter();

  constructor( private userStorage : UserStorage,public date : DateUtils) { }

  ngOnInit() {

  }

  ngOnChanges(){
    // console.log('test');
  }

  setCaNo(data : string){
    this.ListVisitAfter.ca_no = data;
  }

  setTHnme(data : string){
    this.ListVisitAfter.th_nme = data;
    this.ListSelectData.name_en = this.ListVisitAfter.th_nme
  }

  setENnme(data : string){
    this.ListVisitAfter.en_nme = data
    this.ListSelectData.name_en = this.ListVisitAfter.en_nme
  }

  setSaleCallNo(data : string){
    this.ListSelectData.sale_call_no = data
    this.saleCallNo.emit(data)
  }

  setName(data : string){
    this.visitName = data
    console.log(this.visitName)
  }

}
