import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {ScoringVerifyHistoryModel} from "../model/scoringVerifyHistory.model";

@Injectable()
export class ScrVerifyHistoryService {

  userName: string = '';
  code: string = '';
  comCode: string = '';
  dataTable : ScoringVerifyHistoryModel[] = [];

  constructor(private http: HttpClient, private service: ServiceEndpoint
    , private userStorage: UserStorage) {
    this.userName = this.userStorage.getUserName();
    this.code = this.userStorage.getCode();
    this.comCode = this.userStorage.getComCode();
  }

  getScoringVerifyHistory(refNo, comCode) {
    console.log()
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/ScoringVerifyHistoryPost`;
    let data = {
      "device": "web",
      "userName": this.userName,
      "comCode": comCode,
      "refNo": refNo,
    };

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

}
