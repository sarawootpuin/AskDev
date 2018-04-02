import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {UserStorage} from "../../../shared/user/user.storage.service";

/**
 * Created by piradee.bu on 25/12/2560.
 */
@Injectable()
export class RetryToReVerifyService {

  userName: string = '';
  code: string = '';
  comCode: string = '';



  constructor(private http: HttpClient, private service: ServiceEndpoint
    , private userStorage: UserStorage) {
    this.userName = this.userStorage.getUserName();
    this.code = this.userStorage.getCode();
    this.comCode = this.userStorage.getComCode();
  }


  getListRetryToReVerify(refNO: string) {
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/SearchRetryToReVerifyPost`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url,refNO,options);
  }

  submitRetryToReVerify(runNo:string,comCode:string,refNo:string,entType:string,entCd:string) {
    console.log("submitRetryToReVerify");
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/SubmitRetryToReVerifyPost`;
    let data = {
      "runNo":runNo,
      "comCode":comCode,
      "refNo":refNo,
      "entType":entType,
      "entCd":entCd,
      "device":"web",
      "userName":this.userName
    }

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

}
