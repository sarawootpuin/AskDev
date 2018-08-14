import {Subscription} from "rxjs/Subscription";
import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {RegSummary} from "./model/reg-summary";
import {RegAdv} from "./model/reg-adv";
import {ServiceEndpoint} from "../../../../../../../../../shared/config/service-endpoint";

@Injectable()
export class RegHistService {
  subscription: Subscription;

  constructor(private http: HttpClient,
              private service: ServiceEndpoint) {
  }

  getRegHistData(comCode: string, agrCode: string, refCode: string) {
    const url = decodeURI(this.service.url + this.service.custinfo_api + `/ask/CCS/GetRegHistData?com=${comCode}&agr=${agrCode}&ref=${refCode}`);
    // const url = decodeURI(`http://localhost:8080/WebServices_Custinfo/ask/CCS/GetRegHistData?com=${comCode}&agr=${agrCode}&ref=${refCode}`);

    // console.log('url',url);
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.get(url, options);
  }


  //Reg-Summary
  listRegSummary: RegSummary[];
  eventlistRegSummary = new EventEmitter<RegSummary[]>();
  setlistRegSummary(pRegSummary: RegSummary[]) {
    this.listRegSummary = pRegSummary;
    this.eventlistRegSummary.emit(pRegSummary);
  }



  //OnSelect_Adv
  regAdv: RegAdv;
  eventSelectRegAdv = new EventEmitter<RegAdv>();

  setOnSelect_Adv(pRegAdv: RegAdv) {
    this.regAdv = pRegAdv;
    this.eventSelectRegAdv.emit(pRegAdv);
  }


}
