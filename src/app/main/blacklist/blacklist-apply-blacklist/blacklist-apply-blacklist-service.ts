import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {ModelApplyblacklist} from "./model/model-applyblacklist";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApplyBlacklistService {

  _url : string;
  _bl_tps : string;
  constructor(private http: HttpClient,
              private ServiceEndpoint : ServiceEndpoint) {
    this._url = ServiceEndpoint.url;
    this._bl_tps = ServiceEndpoint.bl_tps;
  }

  ApplyInsertBlacklist(dataObject : ModelApplyblacklist) {
    const url = this._url+this._bl_tps+`/ask/blacklist/ApplyBlacklist`;
   // const url = `http://localhost:8080/MKS_WebServices/ask/blacklist/BlacklistExposure`;

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url,JSON.stringify(dataObject) ,options);
  }


}
