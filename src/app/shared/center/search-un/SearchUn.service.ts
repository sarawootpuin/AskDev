/**
 * Created by pongsatorn.an on 27/09/2560.
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class SearchUnservice {
  constructor(private  http: HttpClient) {
    //console.log("Open SearchUn Service");
  }

  getListSelect(purl: string  ,  pServiceType : string , pData : any) {
    if (pServiceType == 'GET') {
      const url = purl;
      let options = {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      };
      console.log(url);
      return this.http.get(url, options);
    }else if ((pServiceType == 'POST') ){
      const url = purl;
      let data =  pData;
      let options = {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      };
      console.log(url);
      console.log(data);
      return this.http.post(url,data , options);
    }
  }


}


