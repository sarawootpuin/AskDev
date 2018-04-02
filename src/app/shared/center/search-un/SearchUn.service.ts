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

  getListSelect(purl: string) {
    const url = purl;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(url);
    return this.http.get(url, options);
  }


}


