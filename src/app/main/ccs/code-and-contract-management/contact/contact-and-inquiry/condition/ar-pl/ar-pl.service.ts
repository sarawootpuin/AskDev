
import {EventEmitter, Injectable, Output} from "@angular/core";
import {DateUtils} from "../../../../../../../shared/center/utils/date-utils";
import {ServiceEndpoint} from "../../../../../../../shared/config/service-endpoint";
import {UserStorage} from "../../../../../../../shared/user/user.storage.service";
import {HttpClient} from "@angular/common/http";
import {ArPlModel} from "./model/ar-pl";

@Injectable()
export class ArPlService {

  userName: string;
  userCode: string;
  com_code: string;

  @Output() emitMainJSON: EventEmitter<any> = new EventEmitter<any>();

  srviceLoanModel: ArPlModel;
  constructor(private http: HttpClient,
              private userStorage: UserStorage,
              private service: ServiceEndpoint,
              private date: DateUtils) {
    this.srviceLoanModel = new ArPlModel();
    this.userName = this.userStorage.getUserName();
    this.userCode = this.userStorage.getCode();
    this.com_code = this.userStorage.getComCode();
  }

  getShowAll_Loan(device: string, userCode: string, agr_code: string, com_code: string) {
    // const url = `http://localhost:8080/WebServices_Custinfo/ask/CCS/Custinfo_ShowAll_Loan?device=${device}&user=${userCode}&AgrCode=${agr_code}&AccessCompany=${com_code}`;
    const url = this.service.url + this.service.custinfo_api + `/ask/CCS/Custinfo_ShowAll_Loan?device=${device}&user=${userCode}&AgrCode=${agr_code}&AccessCompany=${com_code}`;
    // const url = '';
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    return this.http.get(url, options);
  }

  setLoanModel(model: ArPlModel) {
    this.srviceLoanModel = model;
  }

}
