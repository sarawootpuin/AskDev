import {Injectable} from "@angular/core";
import {ServiceEndpoint} from "../../../../shared/config/service-endpoint";
import {HttpClient} from "@angular/common/http";
import {UserStorage} from "../../../../shared/user/user.storage.service";
@Injectable()
export class ExposureService {
  constructor(private http: HttpClient,
              private service: ServiceEndpoint,
              private user: UserStorage) {

  }

  getExposure(device: any, comCode : any,caNo: any, newCardNo: any) {
    const url = this.service.url + this.service.ca_api + '/ask/ca/GetExposure';
    let data = {
      "device": device,
      "username": this.user.getUserName(),
      "comcode": comCode,
      "cano": caNo,
      "idcard": newCardNo
    };
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);
  }
}
