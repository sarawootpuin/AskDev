import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";

@Injectable()
export class UserProfileService {

  constructor(private http: HttpClient,private service: ServiceEndpoint) {
  }

  getUserProfile(device: string, userCode: string) {
    const url = this.service.url + this.service.common_tps +`/ask/common/getProfile?device=${device}&userCode=${userCode}`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }
}
