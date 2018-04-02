import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthenService} from "../authen.service";
import {Subscription} from "rxjs/Subscription";
import {UserCookies} from "../../shared/user/user.cookies.service";
import {UserStorage} from "../../shared/user/user.storage.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  signinForm: FormGroup;
  isError: boolean;
  txtMsg: string;

  constructor(private authenService: AuthenService,
              private route:ActivatedRoute,
              private router: Router,
              private userCookies: UserCookies,
              private userStorage: UserStorage) {
  }

  ngOnInit() {
    this.authenService.logout();
    this.isError = false;
    this.generateSigninForm();
  }

  generateSigninForm() {
    this.signinForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'remember': new FormControl('', [])
    });
  }

  onSubmit() {
    let username = this.signinForm.value.username;
    let password = this.signinForm.value.password;
    let remember = this.signinForm.value.remember;

    this.subscription = this.authenService.signinUser("web", username, password).subscribe(
      (data: any) => {
        if (data.MSG_NAME == 'Complete') {
          this.isError = false;
          this.txtMsg = '' + data.MSG;

          this.userStorage.storageCode(data.EMP_CODE);
          this.userStorage.storageComCode(data.COM_CODE);
          this.userStorage.storageComCodePort(data.COM_CODE_PORT);
          this.userStorage.storageUserName(data.USER_NAME);
          this.userStorage.storageRatePen(data.RATE_PEN);
          this.userStorage.storageVatRate(data.VAT_RATE);
          this.userStorage.storageGrace(data.GRACE);
          this.userStorage.storageAccessCompany(JSON.stringify
          (data.ACCESS_COMPANY));


          if (data.IS_PWD_EXPIRE == 'Y') {
            this.userCookies.storeRemember(remember);
            this.router.navigate(['authen/pwd-expired']);
          } else {
            this.userCookies.storeLogin(remember);
            this.router.navigate(['home']);
          }
        } else {
          this.isError = true;
          this.txtMsg = '' + data.MSG_NAME;
        }
      },
      (error: any) => {
        this.isError = true;
        this.txtMsg = '' + error.message;
      }
    );

  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }
}
