import {Injectable} from "@angular/core";
import {UserStorage} from "../../shared/user/user.storage.service";
import {ServiceEndpoint} from "../../shared/config/service-endpoint";
import {HttpClient} from "@angular/common/http";
import 'rxjs';
import {ModelNcbImage} from "./blacklist-ncb/blacklist-ncb-images/model/modelNcbImage";
import {ModelNcbEnquiry} from "./blacklist-ncb-enquiry/model/model_ncbenquiry";
import {ModelNcbEnquiryCheckingFor} from "./blacklist-ncb-enquiry/model/model_ncbenquirycheckingfor";
import {ModelNcbScreen} from "./blacklist-ncb/blacklist-ncb-screen/model/model_ncbscreen";
import {ModelNcbScreenStatus} from "./blacklist-ncb/blacklist-ncb-screen/model/model_ncbscreen_status";
import {ModelNcbBlResult} from "./blacklist-ncb/blacklist-ncb-screen/model/model_ncbblresult";
import {ModelNcbEntCat} from "./blacklist-ncb/blacklist-ncb-screen/model/model_ncbentcat";
import {ModelNcbTracing} from "./blacklist-ncb/blacklist-ncb-screen/model/model_ncbtracing";
import {ModelNcbBody} from "./blacklist-ncb/blacklist-ncb-screen/model/model_ncbbody";
import {ModelNcbNewUsed} from "./blacklist-ncb/blacklist-ncb-screen/model/model_ncbnewused";
import {ModelNcbPdf} from "./blacklist-ncb/blacklist-ncb-pdf/model/modelNcbPdf";
import {ModelNcbSubjectResult} from "./blacklist-ncb-subject-result/model/modelNcbSubjectResult";

@Injectable()
export class BlacklistNcbService
{
  _url:string="";
  _bl_tps:string="";
  _img_api:string="";
  showTodo:boolean=true;
  _tracking_id:string="";
  modelNcbImage:ModelNcbImage[]=[];
  modelNcbEnquiry:ModelNcbEnquiry[]=[];
  modelNcbEnquiryCheckingFor:ModelNcbEnquiryCheckingFor[]=[];
  modelNcbScreen:ModelNcbScreen[]=[];
  modelNcbScreenStatus:ModelNcbScreenStatus[]=[];
  modelNcbBlResult:ModelNcbBlResult[]=[];
  modelNcbEntCat:ModelNcbEntCat[]=[];
  modelNcbTracing:ModelNcbTracing[]=[];
  modelNcbBody:ModelNcbBody[]=[];
  modelNcbNewUsed:ModelNcbNewUsed[]=[];
  modelNcbPdf:ModelNcbPdf[]=[];
  modelNcbSubjectResult:ModelNcbSubjectResult[]=[];

  constructor(private http: HttpClient,private tmphttp: HttpClient,
              private ServiceEndpoint : ServiceEndpoint,
              private userStorage:UserStorage) {
    this._url = ServiceEndpoint.url;
    this._bl_tps = ServiceEndpoint.bl_tps;
    this._img_api = ServiceEndpoint.img_api;
  }

  setTracking_id(value:string){
    this._tracking_id = value;
  }
  getTracking_id(){
    return  this._tracking_id;
  }

  getModelNcbScreenStatus()
  {
    this.modelNcbScreenStatus = [];
    this.modelNcbScreenStatus[0]={
      "CAPTION":"Customer",
      "VALUES":"C"
    };
    this.modelNcbScreenStatus[1]={
      "CAPTION":"Guarantor",
      "VALUES":"G"
    };
    return this.modelNcbScreenStatus;
  }

  getModelNcbEntCat()
  {
    this.modelNcbEntCat = [];
    this.modelNcbEntCat[0]={
      "CAPTION":"N/A",
      "VALUES":"-1"
    };
    this.modelNcbEntCat[1]={
      "CAPTION":"Foreigner",
      "VALUES":"FOR"
    };
    this.modelNcbEntCat[2]={
      "CAPTION":"Individual",
      "VALUES":"IND"
    };
    this.modelNcbEntCat[3]={
      "CAPTION":"Corporate",
      "VALUES":"JUR"
    };
    return this.modelNcbEntCat;
  }

  getModelNcbNewUsed()
  {
    this.modelNcbNewUsed = [];
    this.modelNcbNewUsed[0]={
      "CAPTION":"N/A",
      "VALUES":"-1"
    };
    this.modelNcbNewUsed[1]={
      "CAPTION":"New",
      "VALUES":"N"
    };
    this.modelNcbNewUsed[2]={
      "CAPTION":"Used",
      "VALUES":"U"
    };
    this.modelNcbNewUsed[3]={
      "CAPTION":"PL",
      "VALUES":"P"
    };
    this.modelNcbNewUsed[4]={
      "CAPTION":"Floor Plan",
      "VALUES":"F"
    };
    return this.modelNcbNewUsed;
  }

  getModelNcbTracing()
  {
    this.modelNcbTracing = [];
    this.modelNcbTracing[0]={
      "CAPTION":"N/A",
      "VALUES":"-1"
    };
    this.modelNcbTracing[1]={
      "CAPTION":"T2",
      "VALUES":"2"
    };
    this.modelNcbTracing[2]={
      "CAPTION":"T3",
      "VALUES":"3"
    };
    this.modelNcbTracing[3]={
      "CAPTION":">T3",
      "VALUES":"4"
    };
    return this.modelNcbTracing;
  }

  getModelNcbBody()
  {
    this.modelNcbBody = [];
    this.modelNcbBody[0]={
      "CAPTION":"N/A",
      "VALUES":"-1"
    };
    this.modelNcbBody[1]={
      "CAPTION":"Pick Up",
      "VALUES":"PI"
    };
    this.modelNcbBody[2]={
      "CAPTION":"Taxi",
      "VALUES":"TX"
    };
    this.modelNcbBody[3]={
      "CAPTION":"Truck",
      "VALUES":"TR"
    };
    this.modelNcbBody[4]={
      "CAPTION":"Bus",
      "VALUES":"B"
    };
    this.modelNcbBody[5]={
      "CAPTION":"Passenger",
      "VALUES":"PA"
    };
    this.modelNcbBody[6]={
      "CAPTION":"Premium Car",
      "VALUES":"PR"
    };
    this.modelNcbBody[7]={
      "CAPTION":"Van (NGV Blue license plate)",
      "VALUES":"V1"
    };
    this.modelNcbBody[8]={
      "CAPTION":"Van (NGV Yellow license plate)",
      "VALUES":"V2"
    };
    this.modelNcbBody[9]={
      "CAPTION":"Van (Diesel Blue license plate)",
      "VALUES":"V3"
    };
    this.modelNcbBody[10]={
      "CAPTION":"Van (Diesel Yellow license plate)",
      "VALUES":"V4"
    };
    this.modelNcbBody[11]={
      "CAPTION":"Van Private (รถตู้ส่วนบุคคล)",
      "VALUES":"V5"
    };
    this.modelNcbBody[12]={
      "CAPTION":"Van Public (รถตู้สาธารณะ)",
      "VALUES":"V6"
    };
    this.modelNcbBody[13]={
      "CAPTION":"Motorcycle",
      "VALUES":"M"
    };
    return this.modelNcbBody;
  }

  applyNCB(obj:any)
  {
    //console.log(JSON.stringify(obj));
    //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/BlacklistExposureTransfer`;
    const url = this._url+this._bl_tps+`/ask/blacklist/ApplyNCB`;
    //const url = `http://localhost:8080/MKS_WebServices/ask/blacklist/BlacklistExposure`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.post(url,JSON.stringify(obj) ,options);
  }

  getCardType()
  {

    //console.log(JSON.stringify(obj));
    //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/BlacklistExposureTransfer`;
    const url = this._url+this._bl_tps+`/ask/blacklist/getcardtype`;
    let obj = {
      "userlogin":this.userStorage.getUserName()
    }
    //const url = `http://localhost:8080/MKS_WebServices/ask/blacklist/BlacklistExposure`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.post(url,JSON.stringify(obj) ,options);
  }

  getPurpose()
  {

    //console.log(JSON.stringify(obj));
    //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/BlacklistExposureTransfer`;
    const url = this._url+this._bl_tps+`/ask/blacklist/getpurpose`;
    let obj = {
      "userlogin":this.userStorage.getUserName()
    }
    //const url = `http://localhost:8080/MKS_WebServices/ask/blacklist/BlacklistExposure`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.post(url,JSON.stringify(obj) ,options);
  }

  getNcbSubjectResult(tracking_id:string)
  {

    //console.log(JSON.stringify(obj));
    //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/BlacklistExposureTransfer`;
    const url = this._url+this._bl_tps+`/ask/blacklist/getNcbSubjectShowAll`;
    let obj = {
      "tracking_id":tracking_id,
      "userlogin":this.userStorage.getUserName()
    }
    //const url = `http://localhost:8080/MKS_WebServices/ask/blacklist/BlacklistExposure`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.post(url,JSON.stringify(obj) ,options);
  }

  getNCBLoansSummaryHead(json:any)
  {
    const url = this._url+this._bl_tps+`/ask/blacklist/getNCBLoansSummary`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url,JSON.stringify(json) ,options);
  }

  getNCBLoansSummaryDetail(json:any)
  {
    const url = this._url+this._bl_tps+`/ask/blacklist/getNCBLoansSummaryDetail`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url,JSON.stringify(json) ,options);
  }

  getNCBAccDetail(json:any)
  {
    const url = this._url+this._bl_tps+`/ask/blacklist/getNCBAccDetail`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url,JSON.stringify(json) ,options);
  }

  getNcbSearch(obj:any)
  {

    //console.log(JSON.stringify(obj));
    //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/BlacklistExposureTransfer`;
    const url = this._url+this._bl_tps+`/ask/blacklist/SearchNCB`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.post(url,JSON.stringify(obj) ,options);
  }

  getModelNcbBlResult()
  {
    this.modelNcbBlResult = [];
    this.modelNcbBlResult[0]={
      "CAPTION":"N/A",
      "VALUES":"-1"
    };
    this.modelNcbBlResult[1]={
      "CAPTION":"None",
      "VALUES":"0"
    };
    this.modelNcbBlResult[2]={
      "CAPTION":"B/L Lastname",
      "VALUES":"1"
    };
    this.modelNcbBlResult[3]={
      "CAPTION":"Straight",
      "VALUES":"2"
    };
    return this.modelNcbBlResult;
  }

  getModelNcbSubjectResult(){
    return this.modelNcbSubjectResult;
  }

  setModelNcbSubjectResult(value:ModelNcbSubjectResult[]){
    this.modelNcbSubjectResult = value;
  }

  getModelNcbPdf()
  {
    return this.modelNcbPdf;
  }

  setModelNcbPdf(value:ModelNcbPdf[])
  {
    this.modelNcbPdf = value;
  }

  getShowTodo()
  {
    return this.showTodo;
  }

  setShowTodo(value:boolean)
  {
    this.showTodo = value;
  }

  setModelNcbEnquiryCheckingFor(obj:ModelNcbEnquiryCheckingFor[])
  {
    this.modelNcbEnquiryCheckingFor = obj;
  }

  getModelNcbEnquiryCheckingFor(){
    return this.modelNcbEnquiryCheckingFor;
  }

  setModelNcbEnquiry(obj:ModelNcbEnquiry[])
  {
    this.modelNcbEnquiry = obj;
  }

  getModelNcbEnquiry(){
    return this.modelNcbEnquiry;
  }

  setModelNcbImage(obj:ModelNcbImage[])
  {
    this.modelNcbImage = obj;
  }

  getModelNcbImage(){
    return this.modelNcbImage;
  }

  setModelNcbScreen(obj:ModelNcbScreen[])
  {
    this.modelNcbScreen = obj;
  }

  getModelNcbScreen(){
    return this.modelNcbScreen;
  }

  getNCBResult() {
    //const url = `javadev01:8095/blacklist_test/ask/blacklist/GetNCBImage?device=com&userlogin=sunan.vi`;
    const url = this._url+this._bl_tps+`/ask/blacklist/GetNCBResult`;
    //let ExposureJson = {"pcode":pcode,"userlogin":this.userStorage.getUserName()};
    //console.log(url);

    let param = {
      "userlogin":this.userStorage.getUserName()
    }
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    // console.log(url);
    //  return this.http.get(url, options);
    return this.http.post(url,JSON.stringify(param) ,options);
  }

  getNCBRejectReason() {
    //const url = `javadev01:8095/blacklist_test/ask/blacklist/GetNCBImage?device=com&userlogin=sunan.vi`;
    const url = this._url+this._bl_tps+`/ask/blacklist/GetNCBRejectReason`;
    //let ExposureJson = {"pcode":pcode,"userlogin":this.userStorage.getUserName()};
    //console.log(url);

    let param = {
      "userlogin":this.userStorage.getUserName()
    }
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    // console.log(url);
    //  return this.http.get(url, options);
    return this.http.post(url,JSON.stringify(param) ,options);
  }

  getNCBDisplay(runNo?:string) {
    //const url = `javadev01:8095/blacklist_test/ask/blacklist/GetNCBImage?device=com&userlogin=sunan.vi`;
    const url = this._url+this._bl_tps+`/ask/blacklist/GetNCBDisplay`;
    //let ExposureJson = {"pcode":pcode,"userlogin":this.userStorage.getUserName()};
    //console.log(url);

    let param = {
      "RUN_NO":runNo,
      "userlogin":this.userStorage.getUserName()
    }
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    // console.log(url);
    //  return this.http.get(url, options);
    return this.http.post(url,JSON.stringify(param) ,options);
  }


  getNCBMkt(typesql?:string) {
    //const url = `javadev01:8095/blacklist_test/ask/blacklist/GetNCBImage?device=com&userlogin=sunan.vi`;
    const url = this._url+this._bl_tps+`/ask/blacklist/GetNCBMkt`;
    //let ExposureJson = {"pcode":pcode,"userlogin":this.userStorage.getUserName()};
    //console.log(url);
    let param = {
      "typesql":typesql,
      "userlogin":this.userStorage.getUserName()
    }
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    // console.log(url);
    //  return this.http.get(url, options);
    return this.http.post(url,JSON.stringify(param) ,options);
  }

  getNCBPersonalInfo(obj?:any) {
    //const url = `javadev01:8095/blacklist_test/ask/blacklist/GetNCBImage?device=com&userlogin=sunan.vi`;
    const url = this._url+this._bl_tps+`/ask/blacklist/getNcbPersonalInfo`;
    //let ExposureJson = {"pcode":pcode,"userlogin":this.userStorage.getUserName()};
    //console.log(url);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    // console.log(url);
    //  return this.http.get(url, options);
    return this.http.post(url,JSON.stringify(obj) ,options);
  }

  getNCBEnquiry(param?:any) {
    //const url = `javadev01:8095/blacklist_test/ask/blacklist/GetNCBImage?device=com&userlogin=sunan.vi`;
    const url = this._url+this._bl_tps+`/ask/blacklist/GetNCBEnquiry`;
    //let ExposureJson = {"pcode":pcode,"userlogin":this.userStorage.getUserName()};
    //console.log(url);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    // console.log(url);
  //  return this.http.get(url, options);
    return this.http.post(url,JSON.stringify(param) ,options);
  }

  getNCBEnquiryCheckingFor() {
    //const url = `javadev01:8095/blacklist_test/ask/blacklist/GetNCBImage?device=com&userlogin=sunan.vi`;
    let param={
      "userlogin":this.userStorage.getUserName()
    }
    const url = this._url+this._bl_tps+`/ask/blacklist/GetNCBEnquiryCheckingFor`;
    //let ExposureJson = {"pcode":pcode,"userlogin":this.userStorage.getUserName()};
    //console.log(url);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    // console.log(url);
    //  return this.http.get(url, options);
    return this.http.post(url,JSON.stringify(param) ,options);
  }

  getNCBImage(param?:any) {
    //const url = `javadev01:8095/blacklist_test/ask/blacklist/GetNCBImage?device=com&userlogin=sunan.vi`;
    const url = this._url+this._img_api+`/ask/image/GetNCBImage?device=web&userlogin=`+this.userStorage.getUserName()+param;
    //let ExposureJson = {"pcode":pcode,"userlogin":this.userStorage.getUserName()};
    //console.log(url);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
   // console.log(url);
    return this.http.get(url, options);
   // return this.http.post(url,JSON.stringify(ExposureJson) ,options);
  }

  getNCBPDF(param?:any) {
    //const url = `javadev01:8095/blacklist_test/ask/blacklist/GetNCBImage?device=com&userlogin=sunan.vi`;
    const url = this._url+this._bl_tps+`/ask/blacklist/GetNCBPDF`;
    //let ExposureJson = {"pcode":pcode,"userlogin":this.userStorage.getUserName()};
    //console.log(url);
    let json = {
      "RUNNO_PDF":param,
      "userlogin":this.userStorage.getUserName()
    }
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    // console.log(url);
    return this.http.post(url,JSON.stringify(json), options);
    // return this.http.post(url,JSON.stringify(ExposureJson) ,options);
  }


  getNcbAddress(obj?:any)
  {
    const url = this._url+this._bl_tps+`/ask/blacklist/getNCBAddress`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url,JSON.stringify(obj),options);
  }

  getNcbHistory(obj?:any)
  {
    const url = this._url+this._bl_tps+`/ask/blacklist/getNCBHistory`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url,JSON.stringify(obj),options);
  }

  getApplyNewNCBRefreshTodo(selectMode?:any,vrbn_Infmkt?:any,vrbn_Revcons?:any,vrun_no?:any) {
    //const url = `javadev01:8095/blacklist_test/ask/blacklist/GetNCBImage?device=com&userlogin=sunan.vi`;
    const url = this._url+this._bl_tps+`/ask/blacklist/GetApplyNewNCBRefreshTodo`;
    //let ExposureJson = {"pcode":pcode,"userlogin":this.userStorage.getUserName()};
    //console.log(dataObject);
    let Json;
    if(selectMode=='rbN_InfMKT')
    {
      Json = {
        "rbn_infmkt":vrbn_Infmkt?vrbn_Infmkt:"true",
        "rbn_revcons":vrbn_Revcons?vrbn_Revcons:"",
        "vcom_code":"ASKH",
        "vrun_no":vrun_no?vrun_no:"",
        "userlogin":this.userStorage.getUserName()
      }
    }
    else if(selectMode=='rbN_RevCons') {
      Json = {
        "rbn_infmkt":vrbn_Infmkt?vrbn_Infmkt:"",
        "rbn_revcons":vrbn_Revcons?vrbn_Revcons:"true",
        "vcom_code":"ASKH",
        "vrun_no":vrun_no?vrun_no:"",
        "userlogin":this.userStorage.getUserName()
      }
    }

    //console.log(Json);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    // console.log(url);
    //return this.http.get(url, options);
     return this.http.post(url,JSON.stringify(Json) ,options);
  }
}
