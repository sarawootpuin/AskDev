import { Component, OnInit } from '@angular/core';
import {UserCookies} from "../shared/user/user.cookies.service";

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})
export class AuthenComponent implements OnInit {

  constructor(private userCookies:UserCookies) { }

  ngOnInit() {
    this.userCookies.logout();
  }

}
