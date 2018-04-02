/**
 * Created by piradee.bu on 29/01/2561.
 */

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BlacklistResultService} from "../blacklist-service";

@Injectable()
export class BlShareCenterService {

  componentName: string = 'search';

  constructor(private http: HttpClient, private  BLService: BlacklistResultService) {
  }

  setInit(){
    this.BLService.setBLShare(true);
    this.BLService.setComponentNameOnShow(this.componentName);
  }

}
