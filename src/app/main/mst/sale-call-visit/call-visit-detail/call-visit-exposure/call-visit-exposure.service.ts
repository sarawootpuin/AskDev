import {Injectable,EventEmitter} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ServiceEndpoint} from "../../../../../shared/config/service-endpoint";
import {SaleCallExposure} from "../../model/Sale-Call-Exposure";
/**
 * Created by pongsatorn.an on 24/08/2560.
 */


@Injectable()
export class CallVisitExposureservice {
  exposure: SaleCallExposure[] = [];
  newCardNo : string ;
  eventCardNo = new EventEmitter<string>();

  constructor(private  http: HttpClient,
              private service: ServiceEndpoint) {
    console.log('----- Create Exposure Service');
  }

  getExposureService(device: string, username: string, newCardNo: string) {

    const url = this.service.url + this.service.sale_call_api + `/ask/salecall/GetExposure?device=web&user=${username}&caNo=&thisApprove=0&newCardNo=${newCardNo}`;

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  setExposure(inExposure: SaleCallExposure[]) {
    this.exposure = inExposure;
  }

  getExposure() {
    return this.exposure;
  }

  setNewCardNO(value: string) {
    this.newCardNo = value;
    this.eventCardNo.emit(value);
  }


  getNewCardNO() {
    return this.newCardNo;
  }

}
