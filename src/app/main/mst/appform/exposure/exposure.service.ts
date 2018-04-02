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

  getExposure(device: any, caNo: any, newCardNo: any, thisApprove: any) {
    const url = this.service.url + this.service.sale_call_api + '/ask/salecall/GetExposure?device=' + device +
      '&user=' + this.user.getUserName() + '&caNo=' + caNo + '&thisApprove=' + thisApprove + '&newCardNo=' + newCardNo;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);

  }
}
