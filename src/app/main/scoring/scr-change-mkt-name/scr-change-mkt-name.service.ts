import {Injectable} from "@angular/core";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {HttpClient} from "@angular/common/http";
import {ScrSaveChangeMktNameModel} from "../model/save-change-mkt-name.model";
/**
 * Created by piradee.bu on 27/12/2560.
 */
@Injectable()
export class ChangeMktNameService {

  userName: string = '';
  code: string = '';
  comCode: string = '';

  constructor(private http: HttpClient, private service: ServiceEndpoint
    , private userStorage: UserStorage) {
    this.userName = this.userStorage.getUserName();
    this.code = this.userStorage.getCode();
    this.comCode = this.userStorage.getComCode();
  }


  getListChangeMktName(refNO: string) {
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/SearchChangeMktNamePost`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, refNO, options);
  }

  saveChangeMktName(data: ScrSaveChangeMktNameModel) {
    console.log("saveChangeMktName");
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/SaveChangeMktNamePost`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(JSON.stringify(data));
    console.log(url);
    return this.http.post(url, JSON.stringify(data), options);
  }

}
