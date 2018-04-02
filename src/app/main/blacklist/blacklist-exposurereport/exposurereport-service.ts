import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import 'rxjs';
import {Injectable} from "@angular/core";
import {ModelEPS_ASK} from "./exposurereport-model/modeleps_ask";
import {ModelEPS_ASKGUAR} from "./exposurereport-model/modeleps_askguar";
import {ModelEPS_BGPL} from "./exposurereport-model/modeleps_bgpl";
import {ModelEPS_BGPLGUAR} from "./exposurereport-model/modeleps_bgplguar";
import {ModelEPS_BGPLSUM} from "./exposurereport-model/modeleps_bgplsum";
import {ModelEPS_BGPLGUARSUM} from "./exposurereport-model/modeleps_bgplguarsum";
import {ModelEPS_ASKSUM} from "./exposurereport-model/modeleps_asksum";
import {ModelEPS_ASKGUARSUM} from "./exposurereport-model/modeleps_askguarsum";
import {ModelEPS_FAC} from "./exposurereport-model/modeleps_fac";
import {ModelEPS_FACSELLER} from "./exposurereport-model/modeleps_facseller";
import {HttpClient} from "@angular/common/http";
import {ModelSearchExposureDialog} from "./model-searchexposuredialog";
import {ModelEPS_HIGHEST} from "./exposurereport-model/modeleps_highest";
import {ModelEPS_SUMCUS} from "./exposurereport-model/modeleps_sumcus";
import {ModelEPS_SUMGUAR} from "./exposurereport-model/modeleps_sumguar";
import {RequestMethod, ResponseContentType} from "@angular/http";
import {UserStorage} from "../../../shared/user/user.storage.service";
/**
 * Created by patcharapon.ch on 09/11/2560.
 */
@Injectable()
export class ExposureReportService
{
  _url : string;
  _bl_tps : string;
  dataselect : any;

  objModelEPS_BGPL : ModelEPS_BGPL;
  dataModelEPS_BGPL : ModelEPS_BGPL[];
  objModelEPS_BGPLGUAR : ModelEPS_BGPLGUAR;
  dataModelEPS_BGPLGUAR : ModelEPS_BGPLGUAR[];
  objModelEPS_ASK : ModelEPS_ASK;
  dataModelEPS_ASK : ModelEPS_ASK[];
  objModelEPS_ASKGUAR : ModelEPS_ASKGUAR;
  dataModelEPS_ASKGUAR : ModelEPS_ASKGUAR[];
  /*******************************************/
  objModelEPS_BGPLSUM : ModelEPS_BGPLSUM;
  dataModelEPS_BGPLSUM : ModelEPS_BGPLSUM[];
  objModelEPS_BGPLGUARSUM : ModelEPS_BGPLGUARSUM;
  dataModelEPS_BGPLGUARSUM : ModelEPS_BGPLGUARSUM[];
  objModelEPS_ASKSUM : ModelEPS_ASKSUM;
  dataModelEPS_ASKSUM : ModelEPS_ASKSUM[];
  objModelEPS_ASKGUARSUM : ModelEPS_ASKGUARSUM;
  dataModelEPS_ASKGUARSUM : ModelEPS_ASKGUARSUM[];
  /*******************************************/
  objModelModelEPS_FAC : ModelEPS_FAC;
  dataModelEPS_FAC : ModelEPS_FAC[];
  objModelEPS_FACSELLER : ModelEPS_FACSELLER;
  dataModelEPS_FACSELLER : ModelEPS_FACSELLER[];
  objModelEPS_HIGHEST : ModelEPS_HIGHEST;
  dataModelEPS_HIGHEST : ModelEPS_HIGHEST[];
  dataModelEPS_SUMCUS : ModelEPS_SUMCUS[];
  dataModelEPS_SUMGUAR : ModelEPS_SUMGUAR[];

  constructor(private http: HttpClient,private tmphttp: HttpClient,
              private ServiceEndpoint : ServiceEndpoint,
              private  userStorage:UserStorage) {
    this._url = ServiceEndpoint.url;
    this._bl_tps = ServiceEndpoint.bl_tps;
  }

  DestroyService()
  {
    this.http = null;
    this.http = this.tmphttp;
    this.objModelEPS_BGPL = null;
    this.dataModelEPS_BGPL = null;
    this.objModelEPS_BGPLGUAR = null;
    this.dataModelEPS_BGPLGUAR = null;
    this.objModelEPS_ASK = null;
    this.dataModelEPS_ASK = null;
    this.objModelEPS_ASKGUAR = null;
    this.dataModelEPS_ASKGUAR = null;
    /*******************************************/
    this.objModelEPS_BGPLSUM = null;
    this.dataModelEPS_BGPLSUM = null;
    this.objModelEPS_BGPLGUARSUM = null;
    this.dataModelEPS_BGPLGUARSUM = null;
    this.objModelEPS_ASKSUM = null;
    this.dataModelEPS_ASKSUM = null;
    this.objModelEPS_ASKGUARSUM = null;
    this.dataModelEPS_ASKGUARSUM = null;
    /*******************************************/
    this.objModelModelEPS_FAC = null;
    this.dataModelEPS_FAC = null;
    this.objModelEPS_FACSELLER = null;
    this.dataModelEPS_FACSELLER = null;
    this.objModelEPS_HIGHEST = null;
    this.dataModelEPS_HIGHEST = null;
    this.dataModelEPS_SUMCUS = null;
    this.dataModelEPS_SUMGUAR = null;
  }

  setModelEPS_ASK(json:any[])
  {
    this.dataModelEPS_ASK = ModelEPS_ASK.parse(json);
  }
  getModelEPS_ASK()
  {
    return this.dataModelEPS_ASK;
  }
  setModelEPS_ASKGUAR(json:any[])
  {
    this.dataModelEPS_ASKGUAR = ModelEPS_ASKGUAR.parse(json);
  }
  getModelEPS_ASKGUAR()
  {
    return this.dataModelEPS_ASKGUAR;
  }
  setModelEPS_BGPL(json:any[])
  {
    this.dataModelEPS_BGPL= ModelEPS_BGPL.parse(json);
  }
  getModelEPS_BGPL()
  {
    return this.dataModelEPS_BGPL;
  }
  setModelEPS_BGPLGUAR(json:any[])
  {
    this.dataModelEPS_BGPLGUAR = ModelEPS_BGPLGUAR.parse(json);
  }
  getModelEPS_BGPLGUAR()
  {
    return this.dataModelEPS_BGPLGUAR;
  }

  /************************************SUM******************************/


  setModelEPS_ASKSUM(json:any[])
  {
    this.dataModelEPS_ASKSUM = ModelEPS_ASKSUM.parse(json);
  }
  getModelEPS_ASKSUM()
  {
    return this.dataModelEPS_ASKSUM;
  }
  setModelEPS_ASKGUARSUM(json:any[])
  {
    this.dataModelEPS_ASKGUARSUM = ModelEPS_ASKGUARSUM.parse(json);
  }
  getModelEPS_ASKGUARSUM()
  {
    return this.dataModelEPS_ASKGUARSUM;
  }
  setModelEPS_BGPLSUM(json:any[])
  {
    this.dataModelEPS_BGPLSUM= ModelEPS_BGPLSUM.parse(json);
  }
  getModelEPS_BGPLSUM()
  {
    return this.dataModelEPS_BGPLSUM;
  }
  setModelEPS_BGPLGUARSUM(json:any[])
  {
    this.dataModelEPS_BGPLGUARSUM = ModelEPS_BGPLGUARSUM.parse(json);
  }
  getModelEPS_BGPLGUARSUM()
  {
    return this.dataModelEPS_BGPLGUARSUM;
  }


  /**********************************END SUM *************************/

  setModelEPS_FAC(json:any[])
  {
    this.dataModelEPS_FAC = ModelEPS_FAC.parse(json);
  }
  getModelEPS_FAC()
  {
    return this.dataModelEPS_FAC;
  }
  setModelEPS_FACSELLER(json:any[])
  {
    this.dataModelEPS_FACSELLER = ModelEPS_FACSELLER.parse(json);
  }
  getModelEPS_FACSELLER()
  {
    return this.dataModelEPS_FACSELLER;
  }
  setModelEPS_HIGHEST(json:any[])
  {
    this.dataModelEPS_HIGHEST = ModelEPS_HIGHEST.parse(json);
  }
  getModelEPS_HIGHEST()
  {
    return this.dataModelEPS_HIGHEST;
  }
  setModelEPS_SUMCUS(json:any[])
  {
    this.dataModelEPS_SUMCUS = ModelEPS_SUMCUS.parse(json);
  }
  getModelEPS_SUMCUS()
  {
    return this.dataModelEPS_SUMCUS;
  }
  setModelEPS_SUMGUAR(json:any[])
  {
    this.dataModelEPS_SUMGUAR = ModelEPS_SUMGUAR.parse(json);
  }
  getModelEPS_SUMGUAR()
  {
    return this.dataModelEPS_SUMGUAR;
  }


  setDataselect(ojectevent?:any)
  {
    this.dataselect = ojectevent;
  }

  getDataselect()
  {
    return this.dataselect;
  }

  getDataExposureReport(device: string, pcode?: string) {
    //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/GetExposureReport`;
    const url = this._url+this._bl_tps+`/ask/blacklist/GetExposureReport`;
    let ExposureJson = {"pcode":pcode,"userlogin":this.userStorage.getUserName()};
    //console.log(dataObject);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(url);
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.post(url,JSON.stringify(ExposureJson) ,options);
  }


    exportExcelExposure(pcode?: string,pnameEng?:string,pnameTha?:string) {
    //const url = `http://javadev01:8095/blacklist_test/ask/blacklist/GetExposureReport`;
    //const url = this._url+this._bl_tps+`/blacklist-exposurereport-ask/blacklist/GetExposureReport`;
    const url = 'http://localhost:8080/MKS_WebServices/ask/blacklist/ExcelExposureReport?pcode='+pcode+'&name_eng='+pnameEng+'&name_tha='+pnameTha;
    //console.log(dataObject);

    console.log(url);
    //return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.get(url,{responseType: 'blob'});
  }

}
