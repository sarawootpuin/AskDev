/**
 * Created by tanapon.sa on 19/09/2560.
 */
import {Injectable} from "@angular/core";
import {insertupdateFlow} from "./set-flow/model/insertupdateFlow.model";
import {deleteFlow} from "./set-flow/model/deleteFlow.model";
import {insertupdateStage} from "./set-stage-of-flow/model/insertupdateStage.model";
import {deleteStage} from "./set-stage-of-flow/model/deleteStage.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MasterFormService {

  loadedFeature: String;

  constructor(private http: HttpClient){

  }

  getFlowLookUp(device: string, userCode: string)
  {
    const url = decodeURI(`http://javadev03:8095/Boss_WebServices/ask/customerservice/GetFlowLookUp?device=${device}&user=${userCode}`);

    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.get(url, options);
  }

  InsertFlowLookUp(data : insertupdateFlow) {
    const url = `http://javadev03:8095/Boss_WebServices/ask/customerservice/InsertFlowLK`;

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json ;charset=utf-8');
    // let options = new RequestOptions({
    //   headers: headers
    // });
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
     // console.log('Insert'+JSON.stringify(data));
    // return this.http.post(url,JSON.stringify(data) ,options).map((response: Response) => response.json());
    return this.http.post(url,JSON.stringify(data) ,options);
  }

  UpdateFlowLookUp(data : insertupdateFlow) {
    const url = `http://javadev03:8095/Boss_WebServices/ask/customerservice/UpdateFlowLK`;

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json ;charset=utf-8');
    // let options = new RequestOptions({
    //   headers: headers
    // });
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // console.log('Update'+JSON.stringify(data));
    // return this.http.post(url,JSON.stringify(data) ,options).map((response: Response) => response.json());
    return this.http.post(url,JSON.stringify(data) ,options);
  }

  DeleteFlowLookUp(data : deleteFlow) {
    const url = `http://javadev03:8095/Boss_WebServices/ask/customerservice/DeleteFlowLK`;

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json ;charset=utf-8');
    // let options = new RequestOptions({
    //   headers: headers
    // });
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // console.log('Delete'+JSON.stringify(data));
    // return this.http.post(url,JSON.stringify(data) ,options).map((response: Response) => response.json());
    return this.http.post(url,JSON.stringify(data) ,options);
  }

  getFlowStageLookUp(device: string, userCode: string)
  {
    const url = decodeURI(`http://javadev03:8095/Boss_WebServices/ask/customerservice/GetFlowStageLookUp?device=${device}&user=${userCode}`);

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({headers: headers});
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // return this.http.get(url, options).map((res: Response) => res.json());
    return this.http.get(url, options);
  }

  InsertFlowStageLookUp(data : insertupdateStage) {
    const url = `http://javadev03:8095/Boss_WebServices/ask/customerservice/InsertFlowStageLK`;

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json ;charset=utf-8');
    // let options = new RequestOptions({
    //   headers: headers
    // });
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // console.log('Insert'+JSON.stringify(data));
    // return this.http.post(url,JSON.stringify(data) ,options).map((response: Response) => response.json());
    return this.http.post(url,JSON.stringify(data) ,options);
  }

  UpdateFlowStageLookUp(data : insertupdateStage) {
    const url = `http://javadev03:8095/Boss_WebServices/ask/customerservice/UpdateFlowStageLK`;

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json ;charset=utf-8');
    // let options = new RequestOptions({
    //   headers: headers
    // });
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // console.log('Update'+JSON.stringify(data));
    // return this.http.post(url,JSON.stringify(data) ,options).map((response: Response) => response.json());
    return this.http.post(url,JSON.stringify(data) ,options);
  }

  DeleteFlowStageLookUp(data : deleteStage) {
    const url = `http://javadev03:8095/Boss_WebServices/ask/customerservice/DeleteFlowStageLK`;

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json ;charset=utf-8');
    // let options = new RequestOptions({
    //   headers: headers
    // });
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // console.log('Delete'+JSON.stringify(data));
    // return this.http.post(url,JSON.stringify(data) ,options).map((response: Response) => response.json());
    return this.http.post(url,JSON.stringify(data) ,options);
  }
}
