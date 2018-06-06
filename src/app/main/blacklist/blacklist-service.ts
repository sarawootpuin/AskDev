/**
 * Created by patcharapon.ch on 25/08/2560.
 */
import {EventEmitter, Injectable} from '@angular/core';
import {Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs';
import {BlacklistChk} from "./blacklist-checking/model-blacklistchk";
import {BlacklistResult} from "./blacklist-resultseach/model/model-blacklistresult";
import {BlacklistHistory} from "./blacklist-resultseach/model/model-blacklisthistory";
import {BlacklistComponent} from "./blacklist.component";
import {BlInquiryComponent} from "./blacklist-checking/blacklist-inquiry/blacklist-inquiry.component";
import {modelblinquiry} from "./blacklist-resultseach/model/model-blinquiry";
import {ServiceEndpoint} from "../../shared/config/service-endpoint";
import {HttpClient} from "@angular/common/http";
import {UserStorage} from "../../shared/user/user.storage.service";
import {ModelExposureHistory} from "./blacklist-exposurehistorycompany/model/model-exposurehistory";
import {ModelExposureHistoryCompany} from "./blacklist-resultseach/model/model-exposurehistorycomp";


@Injectable()
export class BlacklistResultService {
   BlacklistEmit = new EventEmitter<BlacklistResult[]>();
   listBlacklistResult: BlacklistResult[];
   listBlacklistHistory:BlacklistHistory[];
   BLHISORY:BlacklistHistory[];
   listblinquiry:BlInquiryComponent;
   paramblchk:BlacklistChk;
   modelExposureHistory:ModelExposureHistory[];
   modelExposureHistoryCompany : ModelExposureHistoryCompany[];
   eventComponentNameOnShow = new EventEmitter<string>();
   componentNameOnShow :string = '';
   blShared :boolean = false;

   _url : string;
   _bl_tps : string;
   controlTabBlacklistChecking : number;
  constructor(private http: HttpClient,
              private tmphttp: HttpClient,
              private ServiceEndpoint : ServiceEndpoint,
              private  userStorage:UserStorage
              ) {
    this._url = ServiceEndpoint.url;
    this._bl_tps = ServiceEndpoint.bl_tps;
  }

  DestroyService()
  {
    this.http = null;
    this.http = this.tmphttp;
    this.BlacklistEmit = null;
    this.listBlacklistResult= null;
    this.listBlacklistHistory= null;
    this.BLHISORY= null;
    this.listblinquiry= null;
    this.paramblchk= null;
    this.modelExposureHistory= null;
    this.modelExposureHistoryCompany = null;
  }

  setExposureHistoryCompany(obj : ModelExposureHistoryCompany[])
  {
    this.modelExposureHistoryCompany =  obj;
  }

  getExposureHistoryCompany()
  {
    return this.modelExposureHistoryCompany;
  }

  setBlacklistHistoryInquiry(BLHIS : BlacklistHistory[])
  {
    this.BLHISORY =  BLHIS;
  }

  getBlacklistHistoryInquiry()
  {
       return this.BLHISORY;
  }

  setExposureHistory(object:any[])
  {
    this.modelExposureHistory = object;
    // this.BlacklistEmit.emit(ListBLResult);
  }
  getExposureHistory()
  {
    return this.modelExposureHistory;
  }

  setBlacklistResult(ListBLResult  :BlacklistResult[] )
  {
    this.listBlacklistResult = []
    this.listBlacklistResult = ListBLResult;
   // this.BlacklistEmit.emit(ListBLResult);
  }
  getListBlacklistResult ()
  {
    return this.listBlacklistResult;
  }
  setBlacklistHistory(object:any[])
  {
    this.listBlacklistHistory = object;
  }
  getBlacklistHistory ()
  {
     return this.listBlacklistHistory;

  }

  setModelBLchk(obj : BlacklistChk)
  {
    this.paramblchk =  obj;
  }
  getModelBLchk()
  {
    return this.paramblchk;
  }

  geExposureJSON(ifirst_name?:string,ilast_name?:string,iregisnumber?:string,iagr_code?:string,itype?:string,iid_card?:string)
  {
    let ExposureJson;
      if(parseInt(itype)>=2 && parseInt(itype) <=4)
      {
        itype = itype;
        ExposureJson = {"ifirst_name":ifirst_name,
                        "ilast_name":ilast_name,
                        "iregisnumber":iregisnumber,
                        "iagr_code":iagr_code,
                        "itype":itype,
                        "iid_card":iid_card,
                        "TYPE_PROCEDURE":itype,
                        "userlogin":this.userStorage.getUserName()
                       };
      }
      else
      {
        ExposureJson = {"ifirst_name":ifirst_name,"ilast_name":ilast_name,"iid_card":iid_card,"userlogin":this.userStorage.getUserName()};
      }

     // ExposureJson = {"ifirst_name":ifirst_name,"ilast_name":ilast_name,"iregisnumber":iregisnumber,"iagr_code":iagr_code,"itype":itype};
    //  console.log(JSON.stringify(ExposureJson));
      //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/BlacklistExposure`;

        const url = this._url+this._bl_tps+`/ask/blacklist/BlacklistExposure`;
      //const url = `http://localhost:8080/MKS_WebServices/ask/blacklist/BlacklistExposure`;
      let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
      };
    
    //return this.http.get(url, options).map((res: Response) => res.json());
      return this.http.post(url,JSON.stringify(ExposureJson) ,options);
  }

  geExposureCompanyJSON(ifirst_name:string,ilast_name:string,if_namet:string,il_namet:string,iid_card:string)
  {

    let ExposureJson = {"ifirst_name":ifirst_name,"ilast_name":ilast_name,"if_namet":if_namet,"il_namet":il_namet,"iid_card":iid_card,"userlogin":this.userStorage.getUserName()};
  //  console.log(JSON.stringify(ExposureJson));
   // const url = `http://javadev01:8095/blacklist_test/ask/blacklist/BlacklistExposureInCompany`;
    const url = this._url+this._bl_tps+`/ask/blacklist/BlacklistExposureInCompany`;
    //const url = `http://localhost:8080/MKS_WebServices/ask/blacklist/BlacklistExposure`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.post(url,JSON.stringify(ExposureJson) ,options);
  }

  geExposureTransferJSON(iid_card:string)
  {

    let ExposureJson = {"iid_card":iid_card,"userlogin":this.userStorage.getUserName()};
    //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/BlacklistExposureTransfer`;
    const url = this._url+this._bl_tps+`/ask/blacklist/BlacklistExposureTransfer`;
    //const url = `http://localhost:8080/MKS_WebServices/ask/blacklist/BlacklistExposure`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.post(url,JSON.stringify(ExposureJson) ,options);
  }

  getBLInquiryJSON(object:any)
  {
      this.listblinquiry =object;
      let json = object;
     // console.log(object);
      json.TYPE_PROCEDURE = '1';
      json.USER = this.userStorage.getCode();
      json.userlogin = this.userStorage.getUserName()
      //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/Blacklistchecking`;
      const url = this._url+this._bl_tps+`/ask/blacklist/Blacklistchecking`;
      let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
        }
      };

      //return this.http.get(url, options).map((res: Response) => res.json());
      return this.http.post(url,JSON.stringify(json) ,options);
  }

  getExposureHistoryCOmpanyJSON(object:any)
  {
    let jsonparam = {
      "pfirst_name":object.FIRST_NAME,
      "plast_name":object.LAST_NAME,
      "pid_card":object.ID_CARD,
      "userlogin":this.userStorage.getUserName()
    };

    //console.log(JSON.stringify(jsonparam));
    const url = this._url+this._bl_tps+`/ask/blacklist/ExposureHistoryCompany`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.post(url,JSON.stringify(jsonparam) ,options);
  }


  getAMLOJSON()
  {
    //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/BlacklistSearchAMLO`;
    const url = this._url+this._bl_tps+`/ask/blacklist/BlacklistSearchAMLO`;
    let object = {"userlogin":this.userStorage.getUserName()};
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.post(url,JSON.stringify(object) ,options);
  }

  getSearchExposureDialogJSON()
  {
    //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/SearchExposureDialog`;
    const url = this._url+this._bl_tps+`/ask/blacklist/SearchExposureDialog`;
    let object = {"userlogin":this.userStorage.getUserName()};
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.post(url,JSON.stringify(object) ,options);
  }

  setBLInquiry(object:any)
  {
    this.listblinquiry = object;
  }

  getBLInquiry()
  {
    return this.listblinquiry;
  }

  getBlacklistResult(device: string, dataObject: any) {
    //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/Blacklistchecking`;
    const url = this._url+this._bl_tps+`/ask/blacklist/Blacklistchecking`;
   // const url = 'http://localhost:8080/MKS_WebServices/ask/blacklist/Blacklistchecking';
    let json = dataObject;
    if(!json.itype)
      json.TYPE_PROCEDURE = '1';
    else
      json.TYPE_PROCEDURE = dataObject.itype;
    json.userlogin = this.userStorage.getUserName();
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.post(url,JSON.stringify(json) ,options);
  }

  setComponentNameOnShow(newComponwntName: string) {
    this.componentNameOnShow = newComponwntName;
    this.eventComponentNameOnShow.emit(newComponwntName);
  }

  setBLShare(newValue:boolean){
    this.blShared = newValue;
  }
}
