/**
 * Created by tanapon.sa on 09/11/2560.
 */
import {EventEmitter, Injectable, Output} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common"
import {ServiceEndpoint} from "../../../../../../../shared/config/service-endpoint";
import {CustinfoModel} from "./model/custinfo";
import {UserStorage} from "../../../../../../../shared/user/user.storage.service";
import {saveFollowUpModel} from "./contract-detail/ccs-movement-followup/model/saveFollowUp";
import {DateUtils} from "../../../../../../../shared/center/utils/date-utils";

@Injectable()
export class CustinfoService {

  userName: string;
  userCode: string;
  com_code: string;

  vSelectedMenu: String = 'Update';

  srviceCustModel: CustinfoModel;
  @Output() emitMainJSON: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient,
              private userStorage: UserStorage,
              private service: ServiceEndpoint,
              private date: DateUtils) {
    this.srviceCustModel = new CustinfoModel();
    this.userName = this.userStorage.getUserName();
    this.userCode = this.userStorage.getCode();
    this.com_code = this.userStorage.getComCode();
  }

  Server_Date() : Date {
    let parts = this.date.currentDate().split('/');
    return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
  }

  getShowAll(device: string, userCode: string, agr_code: string, com_code: string) {
    // const url = `http://localhost:8080/WebServices_Custinfo/ask/CCS/Custinfo_ShowAll?device=${device}&user=${userCode}&AgrCode=${agr_code}&AccessCompany=${com_code}`;
    const url = this.service.url + this.service.custinfo_api + `/ask/CCS/Custinfo_ShowAll?device=${device}&user=${userCode}&AgrCode=${agr_code}&AccessCompany=${com_code}`;
    // const url = '';
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    return this.http.get(url, options);
  }

  setCustModel(model: CustinfoModel) {
    this.srviceCustModel = model;
  }

  BackPage(location: Location) {
    location.back();
  }


}
