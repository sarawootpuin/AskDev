/**
 * Created by tanapon.sa on 18/04/2561.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Configuration} from './configuration';

@Injectable()
export class ConfigService {
  private config: Configuration;

  constructor(private http: HttpClient) {
  }

  load(url: string) {
    return this.http.get(url).subscribe((config: any) => {
      this.config = config;
    });
  }

  getConfiguration(): Configuration {
    return this.config;
  }

}
