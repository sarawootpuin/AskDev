import {Injectable} from "@angular/core";
import * as dataTNS from '../../../assets/tns.json';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ConfigService} from "./ConfigService";

@Injectable()
export class ServiceEndpoint{
  get app_name(): string {
    return this._app_name;
  }

  // private _url:string = 'http://javadev01:8095';
  private _url:string = '';
  // private _url :string;
  private _app_name:string = '/abmis';
  private _url_report: string = 'http://192.168.112.125:8097';
  private _url_upload: string = 'http://172.16.1.112:80';
  private _ccs_tps:string = '/WebServices_CCS';
  private _fas_tps:string = '/WebServices_FAS';
  private _cos_tps:string = '/WebServices_COS';
  private _common_tps:string = '/WebServices_Common';

  private _sale_call_api :string = '/WebServices_Salecall';
  private _appform_api:string = '/WebServices_AppForm';
  private _mks_scoring:string = '/WebServices_Scoring';
  private _bl_tps:string = '/WebServices_BL';
  private _ca_api:string = '/WebServices_CA';
  private _entity_api :string = '/WebServices_Entity';
  private _img_api :string = '/WebServices_IMG';

  constructor(private http: HttpClient,private configService: ConfigService) {
    //this._url = (<any>dataTNS).tns;
    this._url_report = this.configService.getConfiguration().tnsReport;
    this._url = this.configService.getConfiguration().tns;
  }


  get img_api(): string {
    return this._img_api;
  }

  get ca_api(): string {
    return this._ca_api;
  }

  get mks_scoring(): string {
    return this._mks_scoring;
  }

  set mks_scoring(value: string) {
    this._mks_scoring = value;
  }

  get appform_api(): string {
    return this._appform_api;
  }

  set appform_api(value: string) {
    this._appform_api = value;
  }

  get bl_tps(): string {
    return this._bl_tps;
  }

  set bl_tps(value: string) {
    this._bl_tps = value;
  }

/*  get url_img(): string {
    return this._url_img;
  }*/

  get url_report(): string {
    return this._url_report;
  }

  get url(): string {
    return this._url;
  }

  // get mks_tps(): string {
  //   return this._mks_tps;
  // }

  get ccs_tps(): string {
    return this._ccs_tps;
  }

  get fas_tps(): string {
    return this._fas_tps;
  }

  get cos_tps(): string {
    return this._cos_tps;
  }

  get common_tps(): String {
    return this._common_tps;
  }


  get sale_call_api(): string {
    return this._sale_call_api;
  }

  set sale_call_api(value: string) {
    this._sale_call_api = value;
  }


  get entity_api(): string {
    return this._entity_api;
  }

  set entity_api(value: string) {
    this._entity_api = value;
  }


  get url_upload(): string {
    return this._url_upload;
  }
}
