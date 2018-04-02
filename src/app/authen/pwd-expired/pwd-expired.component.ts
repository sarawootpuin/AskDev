import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
import {UserCookies} from "../../shared/user/user.cookies.service";
import {UserStorage} from "../../shared/user/user.storage.service";
import {AuthenService} from "../authen.service";

@Component({
  selector: 'app-pwd-expired',
  templateUrl: './pwd-expired.component.html',
  styleUrls: ['./pwd-expired.component.css']
})
export class PwdExpiredComponent implements OnInit {
  subscription: Subscription;
  pwdExpiredForm: FormGroup;
  isError: boolean;
  txtMsg: string;

  constructor(private router: Router,
              private authenService: AuthenService,
              private userCookies: UserCookies,
              private userStorage: UserStorage) {
  }

  ngOnInit() {
    this.generatePwdExpiredForm();
  }

  generatePwdExpiredForm() {
    this.pwdExpiredForm = new FormGroup({
      'newpassword': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirmpassword': new FormControl('', [Validators.required, Validators.minLength(6)])
    }, this.matchPasswordValidator);
  }

  backToSignin(){
    this.router.navigate(['authen/signin']);
  }

  onSubmit() {
    let username =  this.userStorage.getUserName();
    let newpassword = this.pwdExpiredForm.value.newpassword;

    this.subscription = this.authenService.updatePassword("web",username, newpassword).subscribe(
      (data: any) => {
        if (data.MSG_NAME == 'Complete') {
          this.isError = false;
          this.txtMsg = '' + data.MSG;

          this.userCookies.storeLogin(this.userCookies.isRemember());
          this.router.navigate(['home']);

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

  matchPasswordValidator(formGroup: FormGroup): { [s: string]: boolean } {
    if (formGroup.get("newpassword").value !== formGroup.get("confirmpassword").value) {
      let error = {validMatchPassword: false};
      formGroup.get("confirmpassword").setErrors(error);
      return error;
    }else{
      if(formGroup.get("confirmpassword").touched
        && formGroup.get("confirmpassword").invalid){
        formGroup.get("confirmpassword").setErrors(null);
      }
    }
    return null;
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }
}
