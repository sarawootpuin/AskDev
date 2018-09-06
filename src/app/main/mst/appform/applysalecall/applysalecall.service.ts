import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {ServiceEndpoint} from "../../../../shared/config/service-endpoint";
@Injectable()
export class ApplyNewService {

  constructor(private http: HttpClient,
              private service: ServiceEndpoint,
              private user: UserStorage) {
  }

  getNewRenew(type: any) {
    const url = this.service.url + this.service.appform_api + `/ask/appForm/getNewRenew`;
    //const url = `http://localhost:8080/MKS_WebServices/ask/appForm/getNewRenew`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    let data = {
      "device": "web",
      "userName": this.user.getSuborUserName(),
      "userCode": this.user.getSuborCode(),
      "type": type
    };
    return this.http.post(url, JSON.stringify(data), options);
  }
}
