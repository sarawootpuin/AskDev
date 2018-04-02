/**
 * Created by piradee.bu on 27/12/2560.
 */
import {Injectable} from "@angular/core";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {HttpClient} from "@angular/common/http";
import {ScrSaveChangeMktNameModel} from "../model/save-change-mkt-name.model";
import {ScrSubmitChangeDepartmentModel} from "../model/submit-change-department.model";
/**
 * Created by piradee.bu on 27/12/2560.
 */
@Injectable()
export class ChangeDepartmentService {

  userName: string = '';
  code: string = '';
  comCode: string = '';


  constructor(private http: HttpClient, private service: ServiceEndpoint
    , private userStorage: UserStorage) {
    this.userName = this.userStorage.getUserName();
    this.code = this.userStorage.getCode();
    this.comCode = this.userStorage.getComCode();
  }


  getListChangeDepartment() {
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/ChangeDepartmentPost`;
    let data = {
      "userName": this.userName,
      "device": "web"
    }

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

  submitChangeDepartment(data:ScrSubmitChangeDepartmentModel) {
    console.log("saveChangeMktName");
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/SubmitChangeDepartmentPost`;
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
