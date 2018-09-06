import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ServiceEndpoint} from "../../shared/config/service-endpoint";
import {UserStorage} from "../../shared/user/user.storage.service";
import {ListDaTa} from "./model/listDt";
/**
 * Created by vijittra.ta on 10/08/2561.
 */

@Injectable()
export class SubordinateService {

  // LISTLY1 : ListDaTa[];
  // // LISTLY2 : ListDaTa[];
  // // LISTLY3 : ListDaTa[];

  constructor(private  http: HttpClient, private service: ServiceEndpoint,
              private  userStorage : UserStorage) {
  }


  getListSubordinate(device: string, userName: string,Code :string){
    //const url = decodeURI(`http://javadev02:8095/WebServices_Salecall/ask/salecall/GetSaleCallVisitAfter?&userCode=${codeCode}&device=${device}&user=${userName}`);
    // const url = decodeURI(this.service.url + this.service.sale_call_api+`/ask/salecall/GetSaleCallVisitAfter?&userCode=${codeCode}&device=${device}&user=${userName}`);
    const url = decodeURI(this.service.url +this.service.common_tps +  `/ask/Subordinate/GetSubordinateList?&CODE=${Code}&device=${device}&user=${userName}`);
    let options = {
      headers : {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options)
  }
 
  getAccessCompany(device: string, userCode : string , userName : string) {
    const url = this.service.url + this.service.common_tps + `/ask/common/getAccessCompany?userCode=${userCode}&device=${device}&userName=${userName}`
    let options = {
      headers : {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }
    return this.http.get(url,options)
  }
}
