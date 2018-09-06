import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {HttpClient} from "@angular/common/http";
/**
 * Created by pongsatorn.an on 16/10/2560.
 */
@Injectable()
export class MonitorService {

  constructor(private  http: HttpClient, private service: ServiceEndpoint
             , private userStorage : UserStorage) {
  }


  getListMonitor(device: string, userCode: string,comcode: string, code: string, sDate:string, tDate:string, filter:string)
  {
    // const url = decodeURI(`http://javadev01:8095/Sale_calltodo/ask/monitor/GetMonitorList?Task=${taskCode}&CODE=${code}&device=${device}&user=${userCode}`);
    const url = decodeURI(this.service.url + this.service.sale_call_api+`/ask/monitor/GetMonitorList?Comcode=${comcode}&code=${code}&device=${device}&user=${userCode}`);
    console.log(url);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }




}
