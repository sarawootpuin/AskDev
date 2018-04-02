webpackJsonp(["authen.module"],{

/***/ "../../../../../src/app/authen/authen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authen/authen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"hidden-md-down col-md-6 px-0\">\n      <slide-image-authen></slide-image-authen>\n    </div>\n    <div class=\"col-12 col-md-6 px-4\n    d-flex flex-column\">\n      <div class=\"d-flex justify-content-center align-items-end\"\n           style=\"flex:1;\">\n        <div>\n          <h2 class=\"mb-4\">ASK Sermkij Leasing Plc. </h2>\n          <h2 class=\"mb-4\">BGPL Bangkok Grand Pacific Lease Plc. </h2>\n          <p class=\"lead mb-4 font-italic\"> Modesty leads to Harmony and Honesty builds Credibility</p>\n        </div>\n      </div>\n      <div class=\"my-4\" style=\"flex:2;\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/authen/authen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_user_cookies_service__ = __webpack_require__("../../../../../src/app/shared/user/user.cookies.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenComponent = /** @class */ (function () {
    function AuthenComponent(userCookies) {
        this.userCookies = userCookies;
    }
    AuthenComponent.prototype.ngOnInit = function () {
        this.userCookies.logout();
    };
    AuthenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-authen',
            template: __webpack_require__("../../../../../src/app/authen/authen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authen/authen.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_user_user_cookies_service__["a" /* UserCookies */]])
    ], AuthenComponent);
    return AuthenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authen/authen.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenModule", function() { return AuthenModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pwd_expired_pwd_expired_component__ = __webpack_require__("../../../../../src/app/authen/pwd-expired/pwd-expired.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("../../../../../src/app/authen/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slide_image_authen_slide_image_authen_component__ = __webpack_require__("../../../../../src/app/authen/slide-image-authen/slide-image-authen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authen_component__ = __webpack_require__("../../../../../src/app/authen/authen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authen_routing_module__ = __webpack_require__("../../../../../src/app/authen/authen.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authen_service__ = __webpack_require__("../../../../../src/app/authen/authen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_user_user_module__ = __webpack_require__("../../../../../src/app/shared/user/user.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AuthenModule = /** @class */ (function () {
    function AuthenModule() {
    }
    AuthenModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__authen_routing_module__["a" /* AuthenRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_user_user_module__["a" /* UserModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__authen_component__["a" /* AuthenComponent */],
                __WEBPACK_IMPORTED_MODULE_4__slide_image_authen_slide_image_authen_component__["a" /* SlideImageAuthenComponent */],
                __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_2__pwd_expired_pwd_expired_component__["a" /* PwdExpiredComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__authen_service__["a" /* AuthenService */]]
        })
    ], AuthenModule);
    return AuthenModule;
}());



/***/ }),

/***/ "../../../../../src/app/authen/authen.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authen_component__ = __webpack_require__("../../../../../src/app/authen/authen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("../../../../../src/app/authen/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pwd_expired_pwd_expired_component__ = __webpack_require__("../../../../../src/app/authen/pwd-expired/pwd-expired.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__authen_component__["a" /* AuthenComponent */], children: [
            { path: '', redirectTo: 'signin', pathMatch: 'full' },
            { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */] },
            { path: 'pwd-expired', component: __WEBPACK_IMPORTED_MODULE_4__pwd_expired_pwd_expired_component__["a" /* PwdExpiredComponent */] }
        ] }
];
var AuthenRoutingModule = /** @class */ (function () {
    function AuthenRoutingModule() {
    }
    AuthenRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AuthenRoutingModule);
    return AuthenRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/authen/authen.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenService = /** @class */ (function () {
    function AuthenService(http, service) {
        this.http = http;
        this.service = service;
    }
    AuthenService.prototype.signinUser = function (device, username, password) {
        var url = this.service.url + this.service.common_tps + "/ask/common/login";
        var data = {
            "device": device,
            "userName": username,
            "password": password
        };
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.post(url, JSON.stringify(data), options);
    };
    AuthenService.prototype.updatePassword = function (device, username, newPassword) {
        var url = this.service.url + this.service.common_tps + "/ask/common/update_password";
        var data = {
            "device": device,
            "userName": username,
            "password": newPassword
        };
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.post(url, JSON.stringify(data), options);
    };
    AuthenService.prototype.logout = function () {
    };
    AuthenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__["a" /* ServiceEndpoint */]])
    ], AuthenService);
    return AuthenService;
}());



/***/ }),

/***/ "../../../../../src/app/authen/pwd-expired/pwd-expired.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authen/pwd-expired/pwd-expired.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n    {{txtMsg}}\n  </div>\n  <form method=\"post\" [formGroup]=\"pwdExpiredForm\" (ngSubmit)=\"pwdExpiredForm.valid&&onSubmit()\">\n    <div class=\"form-group\"\n         [ngClass]=\"{'has-success':pwdExpiredForm.get('newpassword').valid,\n    'has-danger':pwdExpiredForm.get('newpassword').touched&&pwdExpiredForm.get('newpassword').invalid}\">\n      <label for=\"newpassword\" class=\"form-control-label \">New Password*</label>\n      <input class=\"form-control \" type=\"password\"\n             placeholder=\"\" id=\"newpassword\" name=\"newpassword\"\n             formControlName=\"newpassword\">\n      <p class=\"form-text text-muted\">\n        Your password must be at least 6 characters.\n      </p>\n    </div>\n    <div class=\"form-group\"\n         [ngClass]=\"{'has-success':pwdExpiredForm.get('confirmpassword').valid,\n    'has-danger':pwdExpiredForm.get('confirmpassword').touched&&pwdExpiredForm.get('confirmpassword').invalid}\">\n      <label for=\"confirmpassword\" class=\"form-control-label \">Confirm Password*</label>\n      <input class=\"form-control \" type=\"password\"\n             placeholder=\"\" id=\"confirmpassword\" name=\"confirmpassword\"\n             formControlName=\"confirmpassword\">\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-6 text-left\">\n        <button type=\"button\" (click)=\"backToSignin()\" class=\"btn btn-warning text-uppercase\">Back\n        </button>\n      </div>\n      <div class=\"col-6 text-right\">\n        <button type=\"submit\" class=\"btn btn-primary text-uppercase\"\n                [ngClass]=\"{disabled:!pwdExpiredForm.valid}\">Change Password\n        </button>\n      </div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/authen/pwd-expired/pwd-expired.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PwdExpiredComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_user_cookies_service__ = __webpack_require__("../../../../../src/app/shared/user/user.cookies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authen_service__ = __webpack_require__("../../../../../src/app/authen/authen.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PwdExpiredComponent = /** @class */ (function () {
    function PwdExpiredComponent(router, authenService, userCookies, userStorage) {
        this.router = router;
        this.authenService = authenService;
        this.userCookies = userCookies;
        this.userStorage = userStorage;
    }
    PwdExpiredComponent.prototype.ngOnInit = function () {
        this.generatePwdExpiredForm();
    };
    PwdExpiredComponent.prototype.generatePwdExpiredForm = function () {
        this.pwdExpiredForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'newpassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)]),
            'confirmpassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)])
        }, this.matchPasswordValidator);
    };
    PwdExpiredComponent.prototype.backToSignin = function () {
        this.router.navigate(['authen/signin']);
    };
    PwdExpiredComponent.prototype.onSubmit = function () {
        var _this = this;
        var username = this.userStorage.getUserName();
        var newpassword = this.pwdExpiredForm.value.newpassword;
        this.subscription = this.authenService.updatePassword("web", username, newpassword).subscribe(function (data) {
            if (data.MSG_NAME == 'Complete') {
                _this.isError = false;
                _this.txtMsg = '' + data.MSG;
                _this.userCookies.storeLogin(_this.userCookies.isRemember());
                _this.router.navigate(['home']);
            }
            else {
                _this.isError = true;
                _this.txtMsg = '' + data.MSG_NAME;
            }
        }, function (error) {
            _this.isError = true;
            _this.txtMsg = '' + error.message;
        });
    };
    PwdExpiredComponent.prototype.matchPasswordValidator = function (formGroup) {
        if (formGroup.get("newpassword").value !== formGroup.get("confirmpassword").value) {
            var error = { validMatchPassword: false };
            formGroup.get("confirmpassword").setErrors(error);
            return error;
        }
        else {
            if (formGroup.get("confirmpassword").touched
                && formGroup.get("confirmpassword").invalid) {
                formGroup.get("confirmpassword").setErrors(null);
            }
        }
        return null;
    };
    PwdExpiredComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    PwdExpiredComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pwd-expired',
            template: __webpack_require__("../../../../../src/app/authen/pwd-expired/pwd-expired.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authen/pwd-expired/pwd-expired.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5__authen_service__["a" /* AuthenService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_user_cookies_service__["a" /* UserCookies */],
            __WEBPACK_IMPORTED_MODULE_4__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], PwdExpiredComponent);
    return PwdExpiredComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authen/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authen/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n    {{txtMsg}}\n  </div>\n  <form method=\"post\" [formGroup]=\"signinForm\" (ngSubmit)=\"signinForm.valid&&onSubmit()\">\n    <div class=\"form-group\"\n         [ngClass]=\"{'has-success':signinForm.get('username').valid,\n    'has-danger':signinForm.get('username').touched&&signinForm.get('username').invalid}\">\n      <label for=\"username\" class=\"form-control-label \">Username *</label>\n      <input class=\"form-control \" type=\"text\"\n             placeholder=\"\" id=\"username\" name=\"username\"\n             formControlName=\"username\">\n    </div>\n    <div class=\"form-group\"\n         [ngClass]=\"{'has-success':signinForm.get('password').valid,\n    'has-danger':signinForm.get('password').touched&&signinForm.get('password').invalid}\">\n      <label for=\"password\" class=\"form-control-label \">Password *</label>\n      <input class=\"form-control\" type=\"password\"\n             placeholder=\"\" id=\"password\" name=\"password\"\n             formControlName=\"password\">\n    </div>\n    <div class=\"form-check\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" value=\"1\"\n               formControlName=\"remember\">\n        <span class=\"custom-control-indicator\"></span>\n        <span class=\"custom-control-description\">Remember</span>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary text-uppercase\"\n              [ngClass]=\"{disabled:!signinForm.valid}\">sign in\n      </button>\n    </div>\n  </form>\n  <a routerLink=\"../pwd-expired\" name=\"forget-password\" class=\"forget-password\">Forgot Password?</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/authen/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authen_service__ = __webpack_require__("../../../../../src/app/authen/authen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_user_user_cookies_service__ = __webpack_require__("../../../../../src/app/shared/user/user.cookies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninComponent = /** @class */ (function () {
    function SigninComponent(authenService, route, router, userCookies, userStorage) {
        this.authenService = authenService;
        this.route = route;
        this.router = router;
        this.userCookies = userCookies;
        this.userStorage = userStorage;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.authenService.logout();
        this.isError = false;
        this.generateSigninForm();
    };
    SigninComponent.prototype.generateSigninForm = function () {
        this.signinForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            'remember': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [])
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var username = this.signinForm.value.username;
        var password = this.signinForm.value.password;
        var remember = this.signinForm.value.remember;
        this.subscription = this.authenService.signinUser("web", username, password).subscribe(function (data) {
            if (data.MSG_NAME == 'Complete') {
                _this.isError = false;
                _this.txtMsg = '' + data.MSG;
                _this.userStorage.storageCode(data.EMP_CODE);
                _this.userStorage.storageComCode(data.COM_CODE);
                _this.userStorage.storageComCodePort(data.COM_CODE_PORT);
                _this.userStorage.storageUserName(data.USER_NAME);
                _this.userStorage.storageRatePen(data.RATE_PEN);
                _this.userStorage.storageVatRate(data.VAT_RATE);
                _this.userStorage.storageGrace(data.GRACE);
                _this.userStorage.storageAccessCompany(JSON.stringify(data.ACCESS_COMPANY));
                if (data.IS_PWD_EXPIRE == 'Y') {
                    _this.userCookies.storeRemember(remember);
                    _this.router.navigate(['authen/pwd-expired']);
                }
                else {
                    _this.userCookies.storeLogin(remember);
                    _this.router.navigate(['home']);
                }
            }
            else {
                _this.isError = true;
                _this.txtMsg = '' + data.MSG_NAME;
            }
        }, function (error) {
            _this.isError = true;
            _this.txtMsg = '' + error.message;
        });
    };
    SigninComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/authen/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authen/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__authen_service__["a" /* AuthenService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__shared_user_user_cookies_service__["a" /* UserCookies */],
            __WEBPACK_IMPORTED_MODULE_5__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authen/slide-image-authen/slide-image-authen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel, .item, .active {\r\n  height: 100%;\r\n}\r\n\r\n.carousel-inner {\r\n  height: 100%;\r\n}\r\n\r\n.carousel-inner > .item > img {\r\n  height: 100%;\r\n}\r\n\r\n.fill {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.head-caption-1 {\r\n  font-size: 30px;\r\n  width: 100%;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 5%;\r\n  opacity: 1;\r\n  -webkit-animation-name: topFadeOutHead;\r\n          animation-name: topFadeOutHead;\r\n  -webkit-animation-duration: 3s;\r\n          animation-duration: 3s;\r\n  color: white;\r\n  text-shadow:5px 5px 5px black;\r\n  /*text-shadow:5px 5px 5px white;*/\r\n}\r\n\r\n.caption-1 {\r\n  font-size: 24px;\r\n  width: 100%;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 15%;\r\n  opacity: 1;\r\n  -webkit-animation-name: topFadeOutCaption;\r\n          animation-name: topFadeOutCaption;\r\n  -webkit-animation-duration: 3s;\r\n          animation-duration: 3s;\r\n  color: white;\r\n  text-shadow:5px 5px 5px black;\r\n  /*text-shadow:5px 5px 5px white;*/\r\n}\r\n\r\n.head-caption-2 {\r\n  font-size: 30px;\r\n  width: 100%;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 5%;\r\n  opacity: 1;\r\n  -webkit-animation-name: topFadeOutHead;\r\n          animation-name: topFadeOutHead;\r\n  -webkit-animation-duration: 3s;\r\n          animation-duration: 3s;\r\n  color: white;\r\n  text-shadow:5px 5px 5px white;\r\n}\r\n\r\n.caption-2 {\r\n  font-size: 24px;\r\n  width: 100%;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 15%;\r\n  opacity: 1;\r\n  -webkit-animation-name: topFadeOutCaption;\r\n          animation-name: topFadeOutCaption;\r\n  -webkit-animation-duration: 3s;\r\n          animation-duration: 3s;\r\n  color: white;\r\n  text-shadow:5px 5px 5px white;\r\n}\r\n\r\n@-webkit-keyframes topFadeOutHead {\r\n  0% {\r\n    position: absolute;\r\n    top: 0%;\r\n    opacity: 0;\r\n  }\r\n\r\n  25% {\r\n    opacity: 0.3;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0.5;\r\n  }\r\n\r\n  100% {\r\n    top: 5%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes topFadeOutHead {\r\n  0% {\r\n    position: absolute;\r\n    top: 0%;\r\n    opacity: 0;\r\n  }\r\n\r\n  25% {\r\n    opacity: 0.3;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0.5;\r\n  }\r\n\r\n  100% {\r\n    top: 5%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes topFadeOutCaption {\r\n  0% {\r\n    position: absolute;\r\n    top: 10%;\r\n    opacity: 0;\r\n  }\r\n\r\n  25% {\r\n    opacity: 0.3;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0.5;\r\n  }\r\n\r\n  100% {\r\n    top: 15%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes topFadeOutCaption {\r\n  0% {\r\n    position: absolute;\r\n    top: 10%;\r\n    opacity: 0;\r\n  }\r\n\r\n  25% {\r\n    opacity: 0.3;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0.5;\r\n  }\r\n\r\n  100% {\r\n    top: 15%;\r\n    opacity: 1;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authen/slide-image-authen/slide-image-authen.component.html":
/***/ (function(module, exports) {

module.exports = "<div #slider class=\"carousel slide\"\n     data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item\" [ngClass]=\"{active:i==0}\"\n         style=\"height: 100vh;\"\n         *ngFor=\"let image of images;let i = index;\">\n      <img class=\"d-block img-fluid fill\" [src]=\"image\">\n\n      <!--<div class=\"head-caption\">Hirepurchase & Leasing</div>-->\n      <!--<div class=\"caption\">{{captions[i]}}</div>-->\n\n      <div *ngIf=\"i==5 || i==6; then cap2 else cap1\"></div>\n      <ng-template #cap1>\n        <div class=\"head-caption-1\">Hirepurchase & Leasing</div>\n        <div class=\"caption-1\">{{captions[i]}}</div>\n      </ng-template>\n\n      <ng-template #cap2>\n        <div class=\"head-caption-2\">Hirepurchase & Leasing</div>\n        <div class=\"caption-2\">{{captions[i]}}</div>\n      </ng-template>\n    </div>\n  </div>\n\n  <a class=\"carousel-control-prev\" (click)=\"prevImage()\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" (click)=\"nextImage()\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/authen/slide-image-authen/slide-image-authen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideImageAuthenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlideImageAuthenComponent = /** @class */ (function () {
    function SlideImageAuthenComponent() {
        this.images = [];
        this.captions = [];
    }
    SlideImageAuthenComponent.prototype.ngOnInit = function () {
        this.setImages();
        this.setCaptions();
        $(this.slider.nativeElement).carousel({
            interval: 3000
        });
    };
    SlideImageAuthenComponent.prototype.setImages = function () {
        this.images = ["./assets/img/caterpillar.jpg", "./assets/img/ford_trucks.jpg",
            "./assets/img/mercedes_benz.jpg", "./assets/img/omfQ6K.jpg",
            "./assets/img/taxi_meter.jpg", "./assets/img/robo-taxi.jpg", "./assets/img/toyota_hiace.jpg", "./assets/img/toyota_hilux.jpg",
            "./assets/img/M1.jpg", "./assets/img/M2.jpg", "./assets/img/M3.jpg", "./assets/img/M4.jpg",
        ];
    };
    SlideImageAuthenComponent.prototype.setCaptions = function () {
        this.captions = ["Construction Machine/Vehicle", "Pickup", "Passenger", "Truck", "Taxi", "Taxi", "Van", "Pickup",
            "Machine", "Construction Vehicle", "Construction Vehicle", "Machine"
        ];
    };
    SlideImageAuthenComponent.prototype.prevImage = function () {
        $(this.slider.nativeElement).carousel('prev');
    };
    SlideImageAuthenComponent.prototype.nextImage = function () {
        $(this.slider.nativeElement).carousel('next');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SlideImageAuthenComponent.prototype, "slider", void 0);
    SlideImageAuthenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slide-image-authen',
            template: __webpack_require__("../../../../../src/app/authen/slide-image-authen/slide-image-authen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authen/slide-image-authen/slide-image-authen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlideImageAuthenComponent);
    return SlideImageAuthenComponent;
}());



/***/ })

});
//# sourceMappingURL=authen.module.chunk.js.map