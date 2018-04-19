import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app.routing.module";
import {CookieModule} from "ngx-cookie";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ServiceEndpoint} from "./shared/config/service-endpoint";
import {StringUtils} from "./shared/config/string-utils";	
import {TextMaskType} from "./shared/config/text-mask-type";
import { APP_INITIALIZER } from "@angular/core";
import {ConfigService} from "./shared/config/ConfigService";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CookieModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ServiceEndpoint,StringUtils,TextMaskType,ConfigService,
    {
      provide   : APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps      : [ConfigService],
      multi     : true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function ConfigLoader(configService: ConfigService) {
  let configUrl = './assets/tns.json';
  return () => configService.load(configUrl);
}
