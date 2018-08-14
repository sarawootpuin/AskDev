import {EventEmitter, Injectable, Output} from "@angular/core";
import {ServiceEndpoint} from "../../../../../../../../../shared/config/service-endpoint";
import {HttpClient} from "@angular/common/http";
import {CustinfoModel} from "../../model/custinfo";
/**
 * Created by tanapon.sa on 15/03/2561.
 */
@Injectable()
export class UpdateService {

  @Output() testEmit: EventEmitter<CustinfoModel>;

  constructor(private http: HttpClient,
              private service: ServiceEndpoint) {
    this.testEmit = new EventEmitter<CustinfoModel>();
  }

  InterfaceUpdate(data : CustinfoModel) {
    const url = this.service.url + this.service.custinfo_api + `/ask/CCS/Custinfo_InterfaceUpdate`;
    // const url = `http://localhost:8080/WebServices_Custinfo/ask/CCS/Custinfo_InterfaceUpdate`;

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    // console.log('Insert'+JSON.stringify(data));
    this.testEmit.emit(data);
    return this.http.post(url,JSON.stringify(data) ,options);
  }

}
