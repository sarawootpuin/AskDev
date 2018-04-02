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
  providers: [ServiceEndpoint,StringUtils,TextMaskType],
  bootstrap: [AppComponent]
})
export class AppModule { }
