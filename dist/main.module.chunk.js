webpackJsonp(["main.module"],{

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-menu></app-nav-menu>\n<div style=\"padding-top: 70px;\">\n  <router-outlet></router-outlet>\n  <!-- Confirm dialog -->\n  <div class=\"modal fade\" #dialog_confirm>\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Confirm...</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\n                  #btn_close_dialog>\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Do you want to logout & exit Program? </p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" #btn_submit_dialog data-dismiss=\"modal\">Exit</button>\n          <button type=\"button\" class=\"btn btn-secondary\" #btn_cancel_dialog data-dismiss=\"modal\">No</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End Confirm dialog -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
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

var MainComponent = /** @class */ (function () {
    function MainComponent(renderer) {
        this.renderer = renderer;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.canDeactivate = function () {
        var _this = this;
        $(this.dialog_confirm.nativeElement).modal({ backdrop: "static", show: true });
        return new Promise(function (resolve) {
            if (_this.eventSubmit != null)
                _this.eventSubmit();
            if (_this.eventCancel != null)
                _this.eventCancel();
            if (_this.eventClose != null)
                _this.eventClose();
            _this.eventSubmit = _this.renderer.listen(_this.btn_submit_dialog.nativeElement, 'click', function () {
                resolve(true);
            });
            _this.eventCancel = _this.renderer.listen(_this.btn_cancel_dialog.nativeElement, 'click', function () {
                resolve(false);
            });
            _this.eventClose = _this.renderer.listen(_this.btn_close_dialog.nativeElement, 'click', function () {
                resolve(false);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialog_confirm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MainComponent.prototype, "dialog_confirm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btn_submit_dialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MainComponent.prototype, "btn_submit_dialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btn_cancel_dialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MainComponent.prototype, "btn_cancel_dialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btn_close_dialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MainComponent.prototype, "btn_close_dialog", void 0);
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], MainComponent);
    return MainComponent;
}());

/*

 canDeactivate(): Promise<boolean> {

 let $modal = jQuery('#deactModal').modal();
 return new Promise<boolean>((resolve, reject) => {
 document.getElementById("btnAccept").onclick = ((e: any) => {
 jQuery('#deactModal').modal('hide');
 resolve(true);
 });

 document.getElementById("btnCancel").onclick = ((e: any) => {
 jQuery('#deactModal').modal('hide');
 resolve(false);
 });

 $modal.modal("show");

 });
 }

 */


/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_routing_module__ = __webpack_require__("../../../../../src/app/main/main.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_guard__ = __webpack_require__("../../../../../src/app/main/main.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_user_module__ = __webpack_require__("../../../../../src/app/shared/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_menu_nav_menu_component__ = __webpack_require__("../../../../../src/app/main/nav-menu/nav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_service__ = __webpack_require__("../../../../../src/app/main/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_module__ = __webpack_require__("../../../../../src/app/main/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_center_center_module__ = __webpack_require__("../../../../../src/app/shared/center/center.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import {SubordinateModule} from "./subordinate/subordinate.module";



//import {BlacklistModule} from "./blacklist/blacklist.module";
//import {IncompleteDocModule} from "./incomplete-doc/incomplete-doc.module";
//import {RegDirectCrModule} from "./regis-direct-credit/reg-direct-cr.module";
//import {AppformModule} from "./MST/appform/appform.module";
//import {ScoringModule} from "./scoring/scoring.module";
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__main_routing_module__["a" /* MainRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_module__["HomeModule"],
                __WEBPACK_IMPORTED_MODULE_10__shared_center_center_module__["a" /* CenterModule */]
                // SubordinateModule,
                // BlacklistModule,
                // IncompleteDocModule,
                // RegDirectCrModule,
                // AppformModule,
                // ScoringModule
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_menu_nav_menu_component__["a" /* NavMenuComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__main_guard__["a" /* MainGuard */], __WEBPACK_IMPORTED_MODULE_7__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CurrencyPipe"], __WEBPACK_IMPORTED_MODULE_1__angular_common__["DecimalPipe"], __WEBPACK_IMPORTED_MODULE_8__shared_config_service_endpoint__["a" /* ServiceEndpoint */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_guard__ = __webpack_require__("../../../../../src/app/main/main.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import {SubordinateComponent} from "./subordinate/subordinate.component";
//import {BlacklistComponent} from "./blacklist/blacklist.component";
var routes = [
    {
        path: '', canActivate: [__WEBPACK_IMPORTED_MODULE_3__main_guard__["a" /* MainGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_3__main_guard__["a" /* MainGuard */]],
        //canDeactivate: [MainGuard],
        component: __WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'SaleCall', loadChildren: './mst/sale-call-visit/sale-call-visit.module#SaleCallVisitModule' },
            { path: 'appform', loadChildren: './mst/appform/appform.module#AppformModule' },
            { path: 'ca', loadChildren: './mst/credit-application/credit-application.module#CreditApplicationModule' },
            { path: 'blacklist', loadChildren: './blacklist/blacklist.module#BlacklistModule' },
            { path: 'scoring', loadChildren: './scoring/scoring.module#ScoringModule' },
            { path: 'entity', loadChildren: './mst/entity/entity.module#EntityModule' },
            { path: 'reassign', loadChildren: './mst/reassign/reassign.module#ReassignModule' }
            /*{path: 'subordinate', component: SubordinateComponent},
            {path: 'IncompleteDoc',loadChildren:'./incomplete-doc/incomplete-doc.module#IncompleteDocModule'},
            {path: 'RegisDriectCredit',loadChildren:'./regis-direct-credit/reg-direct-cr.module#RegDirectCrModule'},
            */
        ]
    },
    { path: 'newEntity', loadChildren: './mst/entity/entity.module#EntityModule' }
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/nav-menu/nav-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n  background: #1A237E;\r\n  -webkit-transition-property: height;\r\n  -webkit-transition-property: top, visibility;\r\n  transition-property: top, visibility;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n  -webkit-transition: all 0.1s ease;\r\n  transition: all 0.1s ease;\r\n}\r\n\r\n.navbar-hide {\r\n  background: #1A237E;\r\n  top : -100px;\r\n  -webkit-transition-property: height;\r\n  -webkit-transition-property: top, visibility;\r\n  transition-property: top, visibility;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n  -webkit-transition: all 0.5s ease;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.dropdown-submenu {\r\n  /*position: relative;*/\r\n\r\n}\r\n\r\n.navbar-nav > .dropdown > .dropdown-menu {\r\n  background-color: #ffffff;\r\n }\r\n\r\n.dropdown-menu {\r\n  border-radius: 0px;\r\n  background-clip: padding-box;\r\n  background-color: #ffffff;\r\n  border: none;\r\n  border-bottom-left-radius: 2px;\r\n  border-top: 1px solid #e8e9eb;\r\n  -webkit-box-shadow: 0 4px 16px rgba(20,23,28,.25);\r\n          box-shadow: 0 4px 16px rgba(20,23,28,.25);\r\n}\r\n\r\n.dropdown-menu > li > a {\r\n  color: #29303b;\r\n}\r\n\r\n.dropdown-menu > li > a:hover {\r\n  color: #007791;\r\n  background-color: rgba(161, 167, 179, 0.43);\r\n}\r\n\r\n.dropdown-submenu:hover > a:after {\r\n  border-left-color: #007791;\r\n}\r\n\r\n.dropdown-submenu > .dropdown-menu {\r\n  top: 0;\r\n  left: 100%;\r\n  min-height: 100%;\r\n }\r\n\r\n.dropdown-submenu:hover > .dropdown-menu {\r\n  display: block;\r\n}\r\n\r\n.dropdown-submenu > a:after {\r\n  display: block;\r\n  content: \" \";\r\n  float: right;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n  border-width: 5px 0 5px 5px;\r\n  border-left-color: #ccc;\r\n  margin-top: 5px;\r\n  margin-right: -10px;\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/nav-menu/nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm fixed-top navbar-dark\">\n  <button class=\"navbar-toggler navbar-toggler-right collapsed\" style=\"margin-top:7px;margin-bottom: 7px\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n      <img src=\"assets/img/logo_ask_small.png\" /> ASK & BGPL\n    </a>\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item mx-2\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link text-uppercase\" [routerLink]=\"['/home']\">\n          <i class=\"fa fa-fw fa-home mr-1\" aria-hidden=\"true\"></i>Home</a>\n      </li>\n\n      <li class=\"nav-item dropdown mx-2\">\n        <a href=\"#\" class=\"nav-link dropdown-toggle text-uppercase\" data-toggle=\"dropdown\">\n          <i class=\"fa fa-bars mr-1\" aria-hidden=\"true\"></i>Menus</a>\n        <ul class=\"dropdown-menu\">\n          <li class=\"dropdown-submenu\" *ngFor=\"let groupMenu of listGroupMenu;\">\n            <a class=\"dropdown-item dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\n              {{ groupMenu.groupName }}</a>\n            <ul class=\"dropdown-menu\" style=\"overflow: auto;max-height: 500px;\">\n              <li *ngFor=\"let menu of groupMenu.listMenu;\">\n                <a style=\"cursor: pointer;\" class=\"dropdown-item\" (click)=\"navigate(menu.menuCode)\">{{ menu.menuName }}</a>              </li>\n            </ul>\n          </li>\n\n        </ul>\n      </li>\n\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item dropdown mx-2\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n           aria-expanded=\"false\">\n          <span class=\"prfil-img\"><i class=\"fa fa-user fa-lg\" aria-hidden=\"true\"></i> {{userName}} </span>\n          <span class=\"caret\"></span>\n        </a>\n        <ul class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"Preview\">\n          <li>\n            <a class=\"dropdown-item\" (click)=\"logout()\" >Log out</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/main/nav-menu/nav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_service__ = __webpack_require__("../../../../../src/app/main/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_user_mainmenu__ = __webpack_require__("../../../../../src/app/shared/user/user-mainmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_todo_todo_service__ = __webpack_require__("../../../../../src/app/main/home/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//declare var $: any;

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(router, route, mainService, todoService, userStorage) {
        this.router = router;
        this.route = route;
        this.mainService = mainService;
        this.todoService = todoService;
        this.userStorage = userStorage;
        this.listGroupMenu = [];
        this.userName = '';
        this.code = '';
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = this.userStorage.getUserName();
        this.code = this.userStorage.getCode();
        this.subscription = this.mainService.getMenu("web", this.code).subscribe(function (data) {
            for (var i = 0; i < data.LIST_MENU.length; i++) {
                _this.listGroupMenu.push(__WEBPACK_IMPORTED_MODULE_5__shared_user_user_mainmenu__["a" /* UserGroupMenu */].parse(JSON.stringify(data.LIST_MENU[i])));
            }
        }, function (error) {
        });
        this.onHideNav();
    };
    NavMenuComponent.prototype.ngAfterViewInit = function () {
        this.onHideNav();
    };
    NavMenuComponent.prototype.ngOnChanges = function () {
        this.onHideNav();
    };
    NavMenuComponent.prototype.onHideNav = function () {
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = __WEBPACK_IMPORTED_MODULE_7_jquery__('nav').outerHeight();
        __WEBPACK_IMPORTED_MODULE_7_jquery__(window).scroll(function (event) {
            didScroll = true;
        });
        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
            else {
                if (__WEBPACK_IMPORTED_MODULE_7_jquery__(document).height() <= __WEBPACK_IMPORTED_MODULE_7_jquery__(window).height()) {
                    var st = __WEBPACK_IMPORTED_MODULE_7_jquery__(window).scrollTop();
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('div#actionbutton').removeClass('div-top root d-flex w-100 p-2 ').addClass('div-down root d-flex w-100 p-2 ');
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('div#actionbutton').css({ "top": "", "position": "" });
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('nav').removeClass('navbar-hide navbar-expand-sm fixed-top navbar-dark').addClass('navbar navbar-expand-sm fixed-top navbar-dark');
                }
            }
        }, 5);
        function hasScrolled() {
            var st = __WEBPACK_IMPORTED_MODULE_7_jquery__(window).scrollTop();
            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta)
                return;
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                if (st >= 70) {
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('div#actionbutton').removeClass('div-down root d-flex w-100 p-2 ').addClass('div-top root d-flex w-100 p-2');
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('div#actionbutton').css({ "top": "0px" });
                }
                __WEBPACK_IMPORTED_MODULE_7_jquery__('nav').removeClass('navbar navbar-expand-sm fixed-top navbar-dark').addClass('navbar-hide navbar-expand-sm fixed-top navbar-dark');
            }
            else {
                // Scroll Up
                if (st + __WEBPACK_IMPORTED_MODULE_7_jquery__(window).height() < __WEBPACK_IMPORTED_MODULE_7_jquery__(document).height()) {
                    if (st >= 70) {
                        __WEBPACK_IMPORTED_MODULE_7_jquery__('div#actionbutton').removeClass('div-top root d-flex w-100 p-2 ').addClass('div-down root d-flex w-100 p-2 ');
                        __WEBPACK_IMPORTED_MODULE_7_jquery__('div#actionbutton').css({ "top": "70px", "position": "fixed", "z-index": "1029" });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_7_jquery__('div#actionbutton').removeClass('div-top root d-flex w-100 p-2 ').addClass('div-down root d-flex w-100 p-2 ');
                        __WEBPACK_IMPORTED_MODULE_7_jquery__('div#actionbutton').css({ "top": "", "position": "" });
                    }
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('nav').removeClass('navbar-hide navbar-expand-sm fixed-top navbar-dark').addClass('navbar navbar-expand-sm fixed-top navbar-dark');
                }
            }
            lastScrollTop = st;
        }
    };
    NavMenuComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    NavMenuComponent.prototype.navigate = function (menuCodeSelect) {
        if (menuCodeSelect == "MSM-01") {
            this.router.navigate(['/SaleCall'], {
                relativeTo: this.route,
                queryParams: {
                    task: "Apply"
                }
            });
        }
        else if (menuCodeSelect == "MSM-07") {
            this.router.navigate(['/reassign']);
        }
        else if (menuCodeSelect == "AP-01") {
            this.router.navigate(['/appform'], {
                relativeTo: this.route,
                queryParams: {
                    type: "New"
                }
            });
        }
        else if (menuCodeSelect == "AP-01-2") {
            this.router.navigate(['/appform'], {
                relativeTo: this.route,
                queryParams: {
                    type: "Renew"
                }
            });
        }
        else if (menuCodeSelect == "ICD1") {
            this.router.navigate(['/IncompleteDoc/ICDApply']);
        }
        else if (menuCodeSelect == "ICD2") {
            this.router.navigate(['/IncompleteDoc/ICDQuery']);
        }
        else if (menuCodeSelect == "ICD3") {
            this.router.navigate(['/IncompleteDoc/ICDReport']);
        }
        else if (menuCodeSelect == "ICD4") {
            this.router.navigate(['/IncompleteDoc/ICDMonthlyReport']);
        }
        else if (menuCodeSelect == "A1") {
            this.router.navigate(['/blacklist/apply']);
        }
        else if (menuCodeSelect == "A2") {
            this.router.navigate(['/blacklist/search']);
        }
        else if (menuCodeSelect == "A4") {
            this.router.navigate(['/blacklist/amlo']);
        }
        else if (menuCodeSelect == "E1") {
            this.router.navigate(['/blacklist/blacklist-exposureinquiry']);
        }
        else if (menuCodeSelect == "E2") {
            this.router.navigate(['/blacklist/blacklist-exposurereport']);
        }
        else if (menuCodeSelect == "SCRMKT") {
            this.router.navigate(['/scoring/change-mkt-name']);
        }
        else if (menuCodeSelect == "SCRDEP") {
            this.router.navigate(['/scoring/change-department']);
        }
        else if (menuCodeSelect == "SCREN1") {
            this.router.navigate(['/scoring/enquiry']);
        }
        else if (menuCodeSelect == "SCRRTN1") {
            this.router.navigate(['/scoring/reverify']);
        }
        else if (menuCodeSelect == "P1") {
            this.router.navigate(['/entity']);
        }
    };
    NavMenuComponent.prototype.logout = function () {
        this.router.navigate(['/authen/signin']).then(function () {
            //window.location.reload()
        });
    };
    NavMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__("../../../../../src/app/main/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/nav-menu/nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_6__home_todo_todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user/user-mainmenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGroupMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_submenu__ = __webpack_require__("../../../../../src/app/shared/user/user-submenu.ts");

var UserGroupMenu = /** @class */ (function () {
    function UserGroupMenu(groupName, listMenu) {
        this.groupName = groupName;
        this.listMenu = listMenu;
    }
    UserGroupMenu.parse = function (data) {
        var json = JSON.parse(data);
        var groupName = json.GROUP_NAME;
        var listMenu = [];
        for (var i = 0; i < json.LIST_MENU.length; i++) {
            listMenu.push(__WEBPACK_IMPORTED_MODULE_0__user_submenu__["a" /* UserMenu */].parse(JSON.stringify(json.LIST_MENU[i])));
        }
        return new UserGroupMenu(groupName, listMenu);
    };
    return UserGroupMenu;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user/user-submenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenu; });
var UserMenu = /** @class */ (function () {
    function UserMenu(menuCode, menuName) {
        this.menuCode = menuCode;
        this.menuName = menuName;
    }
    UserMenu.parse = function (data) {
        var json = JSON.parse(data);
        return new UserMenu(json.PROGRAM_CODE, json.PROGRAM_NAME);
    };
    return UserMenu;
}());



/***/ })

});
//# sourceMappingURL=main.module.chunk.js.map