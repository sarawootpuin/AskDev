import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PwdExpiredComponent} from "./pwd-expired/pwd-expired.component";
import {SigninComponent} from "./signin/signin.component";
import {SlideImageAuthenComponent} from "./slide-image-authen/slide-image-authen.component";
import {AuthenComponent} from "./authen.component";
import {AuthenRoutingModule} from "./authen.routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthenService} from "./authen.service";
import {UserModule} from "../shared/user/user.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenRoutingModule,
    UserModule
  ],
  declarations: [
    AuthenComponent,
    SlideImageAuthenComponent,
    SigninComponent,
    PwdExpiredComponent],
  providers: [AuthenService]
})
export class AuthenModule {
}
