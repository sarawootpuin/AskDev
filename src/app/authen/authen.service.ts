import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {ServiceEndpoint} from "../shared/config/service-endpoint";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthenService {

  constructor(private http: HttpClient,
              private service: ServiceEndpoint) {
  }

  signinUser(device: string, username: string, password: string) {
     const url = this.service.url + this.service.common_tps + `/ask/common/login`;
    //const url = 'http://localhost:4200' + this.service.common_tps + `/ask/common/login`;

    let data = {
      "device": device,
      "userName": username,
      "password": password
    }

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //console.log(url,data)
    return this.http.post(url, JSON.stringify(data), options);
  }

  updatePassword(device: string, username: string, newPassword: string) {
    const url = this.service.url + this.service.common_tps + `/ask/common/update_password`;

    let data = {
      "device": device,
      "userName": username,
      "password": newPassword
    }

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    return this.http.post(url, JSON.stringify(data), options);
  }

  logout() {
  }
}
