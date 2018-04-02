import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserCookies} from "./user.cookies.service";
import {UserStorage} from "./user.storage.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[UserCookies,UserStorage]
})
export class UserModule { }
