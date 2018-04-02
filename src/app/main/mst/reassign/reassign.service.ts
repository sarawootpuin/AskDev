import {EventEmitter, Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {ReassignListWork} from "./reassign-model/ReassignListWork";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {HttpClient} from "@angular/common/http";
/**
 * Created by pongsatorn.an on 05/10/2560.
 */

@Injectable()
export class ReassignService {
  constructor(private  http: HttpClient,private service:ServiceEndpoint) {

  }

  //////  Service  For List MKT Reassign From Database
  getListReassign(device: string, userCode: string, code: string)
  {
   // const url = decodeURI(`http://javadev01:8095/Sale_calltodo/ask/salecall/GetSaleCallTodoList?Task=${taskCode}&CODE=${code}&device=${device}&user=${userCode}`);

    const url = decodeURI(this.service.url + this.service.mks_tps+`/ask/reassign/GetReassignList?CODE=${code}&device=${device}&user=${userCode}`);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    return this.http.get(url, options);
  }


  getListWork(device: string, userCode: string,com_code: string, code: string)
  {
    const url = decodeURI(this.service.url + this.service.mks_tps+`/ask/reassign/GetListWork?CODE=${code}&COMCODE=${com_code}&device=${device}&user=${userCode}`);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }


  /// Reassign
  postsendReassign(device: string, userCode: string ,code: string ,reassignTo :string , selectListWork :ReassignListWork[]   ){

    const url = this.service.url + this.service.mks_tps+`/ask/reassign/sendReassign`;
    let data = {
      "device": device,
      "userName": userCode,
      "code": code,
      "reassignTo":reassignTo,
      "listReassign" : selectListWork
    };
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(data);
    return  this.http.post(url, data, options);
  }

}
