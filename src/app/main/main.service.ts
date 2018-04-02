import {Injectable} from '@angular/core';
import 'rxjs';
import {CurrencyPipe} from "@angular/common";
import {ServiceEndpoint} from "../shared/config/service-endpoint";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MainService {

  constructor(private http: HttpClient,
              private currpipe: CurrencyPipe,
              private service: ServiceEndpoint) {

  }

  getMenu(device: string, userCode: string) {
    const url = this.service.url + this.service.common_tps + `/ask/common/getMenu?device=${device}&userCode=${userCode}`;
    console.log(url)
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    return this.http.get(url, options);
  }
}
