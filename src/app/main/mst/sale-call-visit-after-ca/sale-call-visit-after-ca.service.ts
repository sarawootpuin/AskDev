import {EventEmitter, Injectable, Output} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {ObjTemp} from "../sale-call-visit/model/ObjTemp";
import {SaleCallHead} from "../sale-call-visit/model/Sale-Call-Head";
import {isUndefined} from "util";
import {SaleCallDetail} from "../sale-call-visit/model/Sale-Call-Detail";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class SaleCallVisitAfterCaService {
  urlAddress : string = '';

  saleH: SaleCallHead;
  eventselectsaleD = new EventEmitter<SaleCallDetail>();
  selectsaleD: SaleCallDetail = new SaleCallDetail();


  constructor(private  http: HttpClient, private service: ServiceEndpoint,
              private  userStorage : UserStorage) {
  }


  sendSaleCallDetail(device: string, userCode: string,comcode: string,visitlist :any){
    //const url = decodeURI(`http://javadev02:8095/WebServices_Salecall/ask/salecall/PostSaleCallVisitAfterCa`);
    const url = decodeURI(this.service.url + this.service.sale_call_api+`/ask/salecall/PostSaleCallVisitAfterCa`);
    // const url = decodeURI(`http://localhost:8080/WebServices_Salecall/ask/salecall/PostSaleCallVisitAfterCa`);
    // console.log(url);ng
    let data = {
      "device" : device,
      "userName" : userCode,
      "comCode" : comcode,
      "saleCallDetail" : visitlist
    }
    // console.log('Before send data');
    // console.log(JSON.stringify(data));
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);

  }

  getListSellCallvisitAfter(device: string, userName: string,comcode: string,codeCode :string){
    //const url = decodeURI(`http://javadev02:8095/WebServices_Salecall/ask/salecall/GetSaleCallVisitAfter?&userCode=${codeCode}&device=${device}&user=${userName}`);
    const url = decodeURI(this.service.url + this.service.sale_call_api+`/ask/salecall/GetSaleCallVisitAfter?&userCode=${codeCode}&device=${device}&user=${userName}`);
    // const url = decodeURI(`http://localhost:8080/WebServices_Salecall/ask/salecall/GetSaleCallVisitAfter?&userCode=${codeCode}&device=${device}&user=${userName}`);
    // console.log(url);
    this.urlAddress = url;
    // console.log(this.urlAddress)
    let options = {
      headers : {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options)
  }

  getListAns(device: string, userCode: string,comcode: string,code :string,tab:string){
    //const url = decodeURI(`http://javadev02:8095/WebServices_Salecall/ask/salecall/GetListAns?&device=${device}&user=${userCode}&comcode=${comcode}&code=${code}&tab=${tab}`);
    const url = decodeURI(this.service.url + this.service.sale_call_api+`/ask/salecall/GetListAns?&device=${device}&user=${userCode}&comCode=${comcode}&code=${code}&tab=${tab}`);
    // const url = decodeURI(`http://localhost:8080/WebServices_Salecall/ask/salecall/GetListAns?&device=${device}&user=${userCode}&comcode=${comcode}&code=${code}&tab=${tab}`);
    // console.log(url)
    let options = {
      headers : {
        'Content-Type' : 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options)
  }

  getSaleCallHead_Detail(device: string, userName: string, comCode: string, saleCallNo: string) {
    const url = this.service.url + this.service.sale_call_api + `/ask/salecall/PostSaleCallStore`;
    let data = {
      "device": device,
      "userName": userName,
      "comCode": comCode,
      "saleCallNo": saleCallNo
    }
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    return this.http.post(url, data, options);
  }
  getAttendees(attenType: string) {
    let url
    if (attenType == "B") {
      url = this.service.url + this.service.sale_call_api + `/ask/salecall/GetATTND?device=web&user=sira.ch&attndtype=B&code=BGPL`;
    }
    else if (attenType == "C") {
      if (this.saleH.comp_ent_code != "" && !isUndefined(this.saleH.comp_ent_code)) {
        url = this.service.url + this.service.sale_call_api + `/ask/salecall/GetATTND?device=web&user=sira.ch&attndtype=C&code=${this.saleH.comp_ent_code}`;
      }
    }
    return url;
  }

}
