/**
 * Created by tanapon.sa on 04/10/2560.
 */
import {Injectable} from "@angular/core";
import {RequestOptions, Headers, Http, Response} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";

@Injectable()
export class CCMService {

  vSrv_Agr_Code: String = '';

  constructor(private http: HttpClient,
              private service: ServiceEndpoint){

  }

  getAGR_CODE() {
    return this.vSrv_Agr_Code;
  }

  setAGR_CODE(str) {
    return this.vSrv_Agr_Code = str;
  }

  getComCode(device: string, userCode: string)
  {
    const url = this.service.url + this.service.custinfo_api + `/ask/CCS/CCM_ContactAndInquiry_ComCode?device=${device}&user=${userCode}`;

    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.get(url, options);
  }

  getCondition(device: string, userCode: string, searchtext: string, comcode: string)
  {
    let url = this.service.url + this.service.custinfo_api + `/ask/CCS/CCM_ContactAndInquiry_Search?device=${device}&user=${userCode}&searchtext=${searchtext}&comcode=${comcode}`;
    // let url = `http://localhost:8080/WebServices_Custinfo/ask/CCS/CCM_ContactAndInquiry_Search?device=${device}&user=${userCode}&searchtext=${searchtext}&comcode=${comcode}`;
    url = url.replace("#","%23");
    // console.log(url);
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // console.log(url);
    return this.http.get(url, options);
  }

  Found_LG_Sue(device: string, userCode: string, com_code: string, agr_code: string)
  {
    const url = this.service.url + this.service.custinfo_api + `/ask/CCS/dmCCS_Found_LG_Sue?device=${device}&user=${userCode}&ComCode=${com_code}&AgrCode=${agr_code}`;

    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.get(url, options);
  }
}
