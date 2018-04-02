webpackJsonp(["reassign.module"],{

/***/ "../../../../../src/app/main/mst/reassign/app-reassign/app-reassign.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\n\n<div class=\"detail-container\">\n   <div class=\"page-header\">\n     <div class=\"d-flex align-self-center\">\n       <button type=\"button\" class=\"btn-nav-saveisa\" style=\"width: 200px;\" (click)=\"clickProcess()\" >\n         <i class=\"fa fa-plus\">Process Reassign</i>\n       </button>\n     </div>\n     <form>\n       <label>Information</label>\n       <div class=\"row form-group \"   style=\"margin-left: 0px;width: 100%;  border-style: solid; border-width: 1px; border-radius: 10px; padding-top: 0px;padding-bottom : 10px;\">\n          <div class=\"col-md-6\" >\n             <label>Reassign To Mkt. Officer :</label><br>\n             <input type=\"text\"  class=\"form-control\"  [value] = \"mkt_toname\" disabled style=\"width: 300px\" >\n             <app-search-un app-search-un inuURL={{this.OutURL}}\n                            title=\"MKT NAME;CODE;\"\n                            (col1)=\"getName($event)\"\n                            (col2)=\"getCode($event)\"\n             >\n             </app-search-un>\n           </div>\n       </div>\n     </form>\n   </div>\n\n\n<div>\n  <p-dataTable [value]=\"ListWork\"\n               scrollable=\"true\" scrollHeight=\"380px\"\n               [(selection)]=\"selectListWork\"\n               resizableColumns=\"true\"\n               selectionMode=\"multiple\"\n               [globalFilter]=\"appsearch\" #appRe\n  >\n    <p-header>\n      <input #appsearch type=\"text\"  pInputText placeholder=\"Search\" class=\"form-control\" >\n    </p-header>\n    <p-column [style]=\"{'width':'38px'}\" selectionMode=\"multiple\" header=\"Select\"></p-column>\n    <p-column field=\"sale_call_no\" header=\"Sale Call No\" ></p-column>\n    <p-column field=\"cust_name_th\" header=\"Customer Name TH\"></p-column>\n    <p-column field=\"cust_name_en\" header=\"Customer Name EN\"></p-column>\n    <p-column field=\"mkt_name\"     header=\"Officer Name\"></p-column>\n    <p-column field=\"task_date\"    header=\"Assign/Call/Visit Date\"></p-column>\n    <p-column field=\"current_task\" header=\"Current Task\"></p-column>\n\n    <p-footer>  </p-footer>\n  </p-dataTable>\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/reassign/app-reassign/app-reassign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppReassignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reassign_service__ = __webpack_require__("../../../../../src/app/main/mst/reassign/reassign.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reassign_model_ReassignListWork__ = __webpack_require__("../../../../../src/app/main/mst/reassign/reassign-model/ReassignListWork.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppReassignComponent = /** @class */ (function () {
    function AppReassignComponent(pService, route) {
        this.pService = pService;
        this.route = route;
        this.msgs = [];
        this.OutURL = "http://javadev03:8095/Sale_calltodo/ask/reassign/GetListMKT?DEPTCODE=2210&device=web&user=CHANTANA.CH";
        this.mkt_toname = "";
        this.mkt_tocode = "";
    }
    AppReassignComponent.prototype.ngOnInit = function () {
        this.vcom_code = this.route.snapshot.queryParams['comcode'];
        this.vcode = this.route.snapshot.queryParams['code'];
        this.ngOnChanges();
    };
    AppReassignComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.pService.getListWork("web", "sira.ch", this.vcom_code, this.vcode).subscribe(function (data) {
            _this.ListWork = __WEBPACK_IMPORTED_MODULE_3__reassign_model_ReassignListWork__["a" /* ReassignListWork */].parse(data.LIST_DATA);
        });
    };
    AppReassignComponent.prototype.getName = function (data) {
        this.mkt_toname = data;
    };
    AppReassignComponent.prototype.getCode = function (data) {
        console.log(data);
        this.mkt_tocode = data;
    };
    AppReassignComponent.prototype.clickProcess = function () {
        var _this = this;
        if (this.mkt_tocode != "") {
            if (!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.selectListWork)) {
                console.log("Send to reassign");
                console.log(this.selectListWork);
                this.pService.postsendReassign("web", "sira.ch", "1000000821", this.mkt_tocode, this.selectListWork).subscribe(function (data) {
                    var msgreturn = data.MSG;
                    _this.msgs = [];
                    if (msgreturn == "Success") {
                        _this.showSuccess();
                        _this.ngOnChanges();
                    }
                    else {
                        _this.showError();
                    }
                });
            }
            else {
                this.showWarn("Please Choose Sale Call For Assign");
            }
        }
        else {
            this.showWarn("Please Select Marketing For Assign");
        }
    };
    AppReassignComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Submitted Success' });
    };
    AppReassignComponent.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    AppReassignComponent.prototype.showWarn = function (msg) {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: msg });
    };
    AppReassignComponent.prototype.loadCarsLazy = function (event) {
        setTimeout(function () { }, 10);
    };
    AppReassignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-app-reassign',
            template: __webpack_require__("../../../../../src/app/main/mst/reassign/app-reassign/app-reassign.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__reassign_service__["a" /* ReassignService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], AppReassignComponent);
    return AppReassignComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/reassign/app-search-reassign/search-reassign.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"main-container\">-->\n  <div class=\"detail-container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form>\n            <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\n              <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n              <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search\">\n            </div>\n        </form>\n      </div>\n    </div>\n    <div>\n          <p-dataTable [value]=\"ListReassign\"\n                       scrollable=\"true\" scrollHeight=\"380px\"\n                       selectionMode=\"single\"\n                       (onRowSelect)=\"onRowSelect($event)\"\n                       [(selection)]=\"selectList\"\n                       [globalFilter]=\"gb\" #dt\n          >\n          <p-header>Marketing list</p-header>\n          <p-column field=\"fullname\" header=\"Officer Name\"  ></p-column>\n          <p-column field=\"group_code\" header=\"Team Code\"   ></p-column>\n          <p-column field=\"dept_name\" header=\"Department\"   ></p-column>\n          <p-column field=\"todo_numer\" header=\"Todo Number\" ></p-column>\n        </p-dataTable>\n    </div>\n  </div>\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/reassign/app-search-reassign/search-reassign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchReassignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reassign_service__ = __webpack_require__("../../../../../src/app/main/mst/reassign/reassign.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reassign_model_ReassignList__ = __webpack_require__("../../../../../src/app/main/mst/reassign/reassign-model/ReassignList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchReassignComponent = /** @class */ (function () {
    function SearchReassignComponent(route, router, Reassignservice) {
        this.route = route;
        this.router = router;
        this.Reassignservice = Reassignservice;
    }
    SearchReassignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Reassignservice.getListReassign("web", "sira.ch", "0000000357").subscribe(function (data) {
            _this.ListReassign = __WEBPACK_IMPORTED_MODULE_2__reassign_model_ReassignList__["a" /* ReassignList */].parse(data.LIST_DATA);
            _this.totalRecords = _this.ListReassign.length;
        });
    };
    // loadMktLazy(event: LazyLoadEvent) {
    //   //in a real application, make a remote request to load data using state metadata from event
    //   //event.first = First row offset
    //   //event.rows = Number of rows per page
    //   //event.sortField = Field name to sort with
    //   //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //   //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
    //
    //   //imitate db connection over a network
    //
    //   setTimeout(() => {
    //     if(this.ListReassign) {
    //       this.this10Row = this.ListReassign.slice(event.first, (event.first + event.rows));
    //     }
    //   }, 250);
    // }
    SearchReassignComponent.prototype.onRowSelect = function (event) {
        // console.log(event.data.fullname );
        // console.log(this.selectList );
        this.router.navigate(['./ListWork'], {
            relativeTo: this.route,
            queryParams: { comcode: this.selectList.com_code, code: this.selectList.code }
        });
    };
    SearchReassignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-reassign',
            template: __webpack_require__("../../../../../src/app/main/mst/reassign/app-search-reassign/search-reassign.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__reassign_service__["a" /* ReassignService */]])
    ], SearchReassignComponent);
    return SearchReassignComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/reassign/reassign-model/ReassignList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReassignList; });
/**
 * Created by pongsatorn.an on 05/10/2560.
 */
var ReassignList = /** @class */ (function () {
    function ReassignList(seq, code, fullname, group_code, com_code, dept_code, dept_name, todo_numer) {
        this.seq = seq;
        this.code = code;
        this.fullname = fullname;
        this.group_code = group_code;
        this.com_code = com_code;
        this.dept_code = dept_code;
        this.dept_name = dept_name;
        this.todo_numer = todo_numer;
    }
    ReassignList.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new ReassignList(json[i].seq, json[i].code, json[i].fullname, json[i].group_code, json[i].com_code, json[i].dept_code, json[i].dept_name, json[i].todo_numer));
        }
        return data;
    };
    return ReassignList;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/reassign/reassign-model/ReassignListWork.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReassignListWork; });
/**
 * Created by pongsatorn.an on 05/10/2560.
 */
var ReassignListWork = /** @class */ (function () {
    function ReassignListWork(sale_call_no, cust_name_th, cust_name_en, mkt_name, task_date, current_task, card_id, comp_ent_code, old_ownr, com_code) {
        this.sale_call_no = sale_call_no;
        this.cust_name_th = cust_name_th;
        this.cust_name_en = cust_name_en;
        this.mkt_name = mkt_name;
        this.task_date = task_date;
        this.current_task = current_task;
        this.card_id = card_id;
        this.comp_ent_code = comp_ent_code;
        this.old_ownr = old_ownr;
        this.com_code = com_code;
    }
    ReassignListWork.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new ReassignListWork(json[i].sale_call_no, json[i].cust_name_th, json[i].cust_name_en, json[i].mkt_name, json[i].task_date, json[i].current_task, json[i].card_id, json[i].comp_ent_code, json[i].old_ownr, json[i].com_code));
        }
        return data;
    };
    return ReassignListWork;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/reassign/reassign.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"form-group main-container \" >\n    <div class=\"d-flex justify-content-start\">\n      <h3 class=\"p-2\"  style=\"margin-top: 1px\" >Reassign </h3><br>\n    </div>\n    <div class=\"d-flex justify-content-start\">\n      <button class=\"p-2 btn-nav-editisa\"   style=\"width: 90px\" routerLinkActive=\"active\" [routerLink]=\"['/reassign']\" >\n        <i class=\"fa fa-edit\"></i> List MKT</button>\n    </div>\n  </div>\n</header>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/reassign/reassign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReassignComponent; });
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

var ReassignComponent = /** @class */ (function () {
    function ReassignComponent() {
    }
    ReassignComponent.prototype.ngOnInit = function () {
    };
    ReassignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reassign',
            template: __webpack_require__("../../../../../src/app/main/mst/reassign/reassign.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ReassignComponent);
    return ReassignComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/reassign/reassign.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReassignModule", function() { return ReassignModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_reassign_app_reassign_component__ = __webpack_require__("../../../../../src/app/main/mst/reassign/app-reassign/app-reassign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_search_reassign_search_reassign_component__ = __webpack_require__("../../../../../src/app/main/mst/reassign/app-search-reassign/search-reassign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reassign_routing_module__ = __webpack_require__("../../../../../src/app/main/mst/reassign/reassign.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reassign_component__ = __webpack_require__("../../../../../src/app/main/mst/reassign/reassign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reassign_service__ = __webpack_require__("../../../../../src/app/main/mst/reassign/reassign.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_center_center_module__ = __webpack_require__("../../../../../src/app/shared/center/center.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ReassignModule = /** @class */ (function () {
    function ReassignModule() {
    }
    ReassignModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__reassign_routing_module__["a" /* ReassignRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CodeHighlighterModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_8__shared_center_center_module__["a" /* CenterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__reassign_component__["a" /* ReassignComponent */],
                __WEBPACK_IMPORTED_MODULE_2__app_reassign_app_reassign_component__["a" /* AppReassignComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_search_reassign_search_reassign_component__["a" /* SearchReassignComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__reassign_service__["a" /* ReassignService */]]
        })
    ], ReassignModule);
    return ReassignModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/reassign/reassign.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReassignRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reassign_component__ = __webpack_require__("../../../../../src/app/main/mst/reassign/reassign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_reassign_app_reassign_component__ = __webpack_require__("../../../../../src/app/main/mst/reassign/app-reassign/app-reassign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_search_reassign_search_reassign_component__ = __webpack_require__("../../../../../src/app/main/mst/reassign/app-search-reassign/search-reassign.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * Created by pongsatorn.an on 29/09/2560.
 */
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__reassign_component__["a" /* ReassignComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__app_search_reassign_search_reassign_component__["a" /* SearchReassignComponent */] },
            { path: 'ListWork', component: __WEBPACK_IMPORTED_MODULE_3__app_reassign_app_reassign_component__["a" /* AppReassignComponent */] }
        ] },
];
var ReassignRoutingModule = /** @class */ (function () {
    function ReassignRoutingModule() {
    }
    ReassignRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
        })
    ], ReassignRoutingModule);
    return ReassignRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/reassign/reassign.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReassignService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Created by pongsatorn.an on 05/10/2560.
 */
var ReassignService = /** @class */ (function () {
    function ReassignService(http, service) {
        this.http = http;
        this.service = service;
    }
    //////  Service  For List MKT Reassign From Database
    ReassignService.prototype.getListReassign = function (device, userCode, code) {
        // const url = decodeURI(`http://javadev01:8095/Sale_calltodo/ask/salecall/GetSaleCallTodoList?Task=${taskCode}&CODE=${code}&device=${device}&user=${userCode}`);
        var url = decodeURI(this.service.url + this.service.mks_tps + ("/ask/reassign/GetReassignList?CODE=" + code + "&device=" + device + "&user=" + userCode));
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.get(url, options);
    };
    ReassignService.prototype.getListWork = function (device, userCode, com_code, code) {
        var url = decodeURI(this.service.url + this.service.mks_tps + ("/ask/reassign/GetListWork?CODE=" + code + "&COMCODE=" + com_code + "&device=" + device + "&user=" + userCode));
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.get(url, options);
    };
    /// Reassign
    ReassignService.prototype.postsendReassign = function (device, userCode, code, reassignTo, selectListWork) {
        var url = this.service.url + this.service.mks_tps + "/ask/reassign/sendReassign";
        var data = {
            "device": device,
            "userName": userCode,
            "code": code,
            "reassignTo": reassignTo,
            "listReassign": selectListWork
        };
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        console.log(data);
        return this.http.post(url, data, options);
    };
    ReassignService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__shared_config_service_endpoint__["a" /* ServiceEndpoint */]])
    ], ReassignService);
    return ReassignService;
}());



/***/ })

});
//# sourceMappingURL=reassign.module.chunk.js.map