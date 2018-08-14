/**
 * Created by tanapon.sa on 30/05/2561.
 */
import {Injectable} from "@angular/core";
import {saveFollowUpModel} from "./model/saveFollowUp";
import {HttpClient} from "@angular/common/http";
import {UserStorage} from "../../../../../../../../../shared/user/user.storage.service";
import {ServiceEndpoint} from "../../../../../../../../../shared/config/service-endpoint";
import {DateUtils} from "../../../../../../../../../shared/center/utils/date-utils";

@Injectable()
export class CcsMovementFollowupService {

  constructor(private http: HttpClient,
              private userStorage: UserStorage,
              private service: ServiceEndpoint,
              private date: DateUtils) {
  }

  Get_Group_Customer(device: string, userCode: string, com_code: string, agr_code: string) {
    // const url = `http://localhost:8080/WebServices_Custinfo/ask/CCS/Custinfo_GetGroupCustomer?device=${device}&user=${userCode}&ComCode=${com_code}&AgrCode=${agr_code}`;
    const url = this.service.url + this.service.custinfo_api + `/ask/CCS/Custinfo_GetGroupCustomer?device=${device}&user=${userCode}&ComCode=${com_code}&AgrCode=${agr_code}`;
    // console.log(url);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    return this.http.get(url, options);
  }

  SaveFollowUp(data : saveFollowUpModel[], device: string, userCode: string) {
    // const url = `http://localhost:8080/WebServices_Custinfo/ask/CCS/Custinfo_SaveFollowUp?device=${device}&user=${userCode}`;
    const url = this.service.url + this.service.custinfo_api + `/ask/CCS/Custinfo_SaveFollowUp?device=${device}&user=${userCode}`;

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, JSON.stringify(data), options);
  }

  UpdateFollowUp(data : saveFollowUpModel[], device: string, userCode: string) {
    // const url = `http://localhost:8080/WebServices_Custinfo/ask/CCS/Custinfo_UpdateFollowUp?device=${device}&user=${userCode}`;
    const url = this.service.url + this.service.custinfo_api + `/ask/CCS/Custinfo_SaveFollowUp?device=${device}&user=${userCode}`;

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, JSON.stringify(data), options);
  }
}
