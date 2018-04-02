webpackJsonp(["sale-call-visit.module"],{

/***/ "../../../../../src/app/main/mst/contactperson/contact-add/contact-add.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>Contact Code</label>\n        <input class=\"form-control\" [(ngModel)]=\"conTact.cont_person_code\"  disabled >\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <div class=\"form-control invisible\" >\n        <button  >Customer Detail</button>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <label> &nbsp; </label>\n      <app-custom-button [option]=\"'save'\"   (onBtnClick)=\"onSave()\"   ></app-custom-button>\n    </div>\n    <div class=\"col-md-2\">\n      <label> &nbsp; </label>\n      <app-custom-button [option]=\"'cancel'\"  (onBtnClick)=\"onCancel()\"  ></app-custom-button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 form-group\">\n      <label>Intial(Thai)</label>\n      <select class=\"form-control\"\n              [ngModel]=\"conTact?.title_th\"\n              (ngModelChange)=\"conTact.title_th=$event;mapIntial('T') \">\n        <option></option>\n        <option *ngFor=\"let ansFNMT of ListFNMT\"\n                [selected]=\"ansFNMT?.id == conTact?.title_th \"\n                [value]=\"ansFNMT?.id\">{{ansFNMT?.display}}\n      </select>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <label>Name(Thai)</label>\n      <input class=\"form-control\"  [(ngModel)]=\"conTact.name_th\" >\n    </div>\n    <div class=\"col-md-3 form-group\">\n      <label>Position</label>\n      <input class=\"form-control\"  [(ngModel)]=\"conTact.position\" >\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 form-group\">\n      <label>Intial(Eng)</label>\n      <select class=\"form-control\"\n              [ngModel]=\"conTact?.title_en\"\n              (ngModelChange)=\"conTact.title_en=$event;mapIntial('E') \">\n        <option></option>\n        <option *ngFor=\"let ansFNME of ListFNME\"\n                [selected]=\"ansFNME?.id == conTact?.title_en \"\n                [value]=\"ansFNME?.id\">{{ansFNME?.display}}\n      </select>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <label>Name(Eng)</label>\n      <input class=\"form-control\"  [(ngModel)]=\"conTact.name_en\" >\n    </div>\n    <div class=\"col-md-3 form-group\">\n      <label>Department</label>\n      <input class=\"form-control\"  [(ngModel)]=\"conTact.department\" >\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 form-group\">\n      <label>Address</label>\n      <input class=\"form-control\"  [(ngModel)]=\"conTact.address\"  >\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-5 form-group\">\n      <label>Phone</label>\n      <input class=\"form-control\"  [(ngModel)]=\"conTact.phone\"  >\n    </div>\n    <div class=\"col-md-2 form-group\">\n      <label>Ext</label>\n      <input class=\"form-control\"  [(ngModel)]=\"conTact.phone_ext\"  >\n    </div>\n    <div class=\"col-md-5 form-group\">\n      <label>Fax</label>\n      <input class=\"form-control\"  [(ngModel)]=\"conTact.fax\"  >\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6 form-group\">\n      <label>Mobile</label>\n      <input class=\"form-control\"  [(ngModel)]=\"conTact.mobile\"  >\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <label>Email</label>\n      <input class=\"form-control\"  [(ngModel)]=\"conTact.email\"  >\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12 form-group\">\n      <label>Academic And Working History</label>\n      <input class=\"form-control\"  [(ngModel)]=\"conTact.working_his1\"  >\n      <input class=\"form-control\"  [(ngModel)]=\"conTact.working_his2\"  >\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/contactperson/contact-add/contact-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactperson_service__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/contactperson.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_ContactPerson_model__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/model/ContactPerson-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactAddComponent = /** @class */ (function () {
    function ContactAddComponent(conTactService, userStorage) {
        this.conTactService = conTactService;
        this.userStorage = userStorage;
        //console.log('Create Contact Add');
    }
    ContactAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conTact = new __WEBPACK_IMPORTED_MODULE_3__model_ContactPerson_model__["a" /* ContactPersonModel */]();
        this.conTactService.signalShowDialog.subscribe(function (data) {
            _this.ListFNMT = _this.conTactService.ListFNMT;
            _this.ListFNME = _this.conTactService.ListFNME;
        });
        this.conTactService.editContact.subscribe(function (data) {
            _this.conTact = data;
        });
    };
    ContactAddComponent.prototype.mapIntial = function (inputT) {
        var _this = this;
        if (inputT == 'T') {
            var tempObj = this.ListFNMT.find(function (ObjTemp) { return ObjTemp.id == _this.conTact.title_th; });
            if (tempObj) {
                this.conTact.title_en = tempObj.key1;
            }
        }
        else if (inputT == 'E') {
            var tempObj = this.ListFNME.find(function (ObjTemp) { return ObjTemp.id == _this.conTact.title_en; });
            if (tempObj) {
                this.conTact.title_th = tempObj.key1;
            }
        }
    };
    ContactAddComponent.prototype.onCancel = function () {
        this.conTactService.sendClickTab(0);
    };
    ContactAddComponent.prototype.onSave = function () {
        var _this = this;
        if (this.conTact.name_th) {
            //console.log(this.conTact);
            this.conTactService.saveContactPerson(this.conTact).subscribe(function (value) {
                // console.log('----  Result ------');
                // console.log(value);
                if (value.DATA) {
                    _this.conTact = __WEBPACK_IMPORTED_MODULE_3__model_ContactPerson_model__["a" /* ContactPersonModel */].parse(value.DATA);
                    _this.conTactService.sendeditContact(_this.conTact);
                    _this.conTactService.btnChoose.emit(true);
                }
            });
        }
    };
    ContactAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-add',
            template: __webpack_require__("../../../../../src/app/main/mst/contactperson/contact-add/contact-add.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__contactperson_service__["a" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], ContactAddComponent);
    return ContactAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/contactperson/contact-search/contact-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container border-isa \">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form>\n        <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\n          <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n          <div class=\"form-inline \" >\n            <input #gb type=\"text\" class=\"form-control w-50 mr-2 \"  (input)=\"search_input = gb.value\" >\n            <app-custom-botton-icon [option]=\"'search'\"  (onBtnClick)=\"searchContact()\"  ></app-custom-botton-icon>\n            <label> &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;    </label>\n            <app-custom-button [option]=\"'new'\"  (onBtnClick)=\"openTab2('add')\"  ></app-custom-button>\n            <app-custom-button [option]=\"'edit'\" (onBtnClick)=\"openTab2('edit')\"   *ngIf=\"selectContact\"     ></app-custom-button>\n          </div>\n        </div>\n      </form>\n    </div>\n\n\n  </div>\n  <div>\n    <p-dataTable [value]=\"contacrList\"a\n                 scrollable=\"true\" scrollHeight=\"380px\"\n                 selectionMode=\"single\"\n                 (onRowSelect)=\"onRowSelect(selectContact)\"\n                 [(selection)]=\"selectContact\"\n                 [globalFilter]=\"gb\" #dt\n    >\n      <!--<p-header>-->\n         <!--<app-custom-botton-icon [option]=\"'new'\" ></app-custom-botton-icon>-->\n         <!--<app-custom-botton-icon [option]=\"'edit'\"></app-custom-botton-icon>-->\n      <!--</p-header>-->\n\n      <p-column field=\"cont_person_code\" header=\"Code\" [style]=\"{'width':'100px' }\"  ></p-column>\n      <p-column field=\"name_th\" header=\"Thai Name\"   ></p-column>\n      <p-column field=\"name_en\" header=\"English Name\" ></p-column>\n    </p-dataTable>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/contactperson/contact-search/contact-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contactperson_service__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/contactperson.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ContactPerson_search__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/model/ContactPerson-search.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_ContactPerson_model__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/model/ContactPerson-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactSearchComponent = /** @class */ (function () {
    function ContactSearchComponent(conTactService, userStorage) {
        this.conTactService = conTactService;
        this.userStorage = userStorage;
        this.search_input = '';
    }
    ContactSearchComponent.prototype.ngOnInit = function () {
    };
    ContactSearchComponent.prototype.searchContact = function () {
        var _this = this;
        this.subscriptionList = this.conTactService.searchContact('web', this.userStorage.getUserName(), this.userStorage.getComCodePort(), this.search_input)
            .subscribe(function (json) {
            //console.log(json);
            _this.contacrList = __WEBPACK_IMPORTED_MODULE_2__model_ContactPerson_search__["a" /* ContactSearchModel */].parse(json.LIST_DATA);
        });
    };
    ContactSearchComponent.prototype.onRowSelect = function (select) {
        this.conTactService.setContactSelect(select);
    };
    ContactSearchComponent.prototype.openTab2 = function (action) {
        var _this = this;
        this.conTactService.sendClickTab(1);
        this.conTactService.getContactPerson('web', this.userStorage.getUserName(), action).subscribe(function (json) {
            if (json.DATA) {
                _this.modelContact = __WEBPACK_IMPORTED_MODULE_4__model_ContactPerson_model__["a" /* ContactPersonModel */].parse(json.DATA);
            }
            else {
                _this.modelContact = new __WEBPACK_IMPORTED_MODULE_4__model_ContactPerson_model__["a" /* ContactPersonModel */]();
            }
            _this.conTactService.sendeditContact(_this.modelContact);
        });
    };
    ContactSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-search',
            template: __webpack_require__("../../../../../src/app/main/mst/contactperson/contact-search/contact-search.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contactperson_service__["a" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], ContactSearchComponent);
    return ContactSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/contactperson/contactperson.component.html":
/***/ (function(module, exports) {

module.exports = "<app-action-dialog #dialogcontactperson\n                   [showChoose]=\"btnchoose\"  [showCancel]=\"true\"\n                   (onChoose)=\"chooseContact()\" [width]=\"800\" >\n  <p-tabView  [activeIndex]=\"openTabNo\"  (onChange)=\"changeTab($event.index)\"  >\n    <p-tabPanel header=\"Contact Search\" >\n      <app-contact-search></app-contact-search>\n    </p-tabPanel>\n    <p-tabPanel header=\"Contract Add/Edit\"  [disabled]=\"closeTab2\" >\n      <app-contact-add></app-contact-add>\n    </p-tabPanel>\n  </p-tabView>\n</app-action-dialog>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/contactperson/contactperson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactpersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contactperson_service__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/contactperson.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_ContactPerson_model__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/model/ContactPerson-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_center_action_dialog_action_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/action-dialog/action-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactpersonComponent = /** @class */ (function () {
    function ContactpersonComponent(conTactService, userStorage) {
        this.conTactService = conTactService;
        this.userStorage = userStorage;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closeTab2 = true;
        this.openTabNo = 0;
        this.btnchoose = false;
    }
    ContactpersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conTactService.clickTab.subscribe(function (tabNo) {
            console.log(tabNo);
            _this.openTabNo = tabNo;
            if (tabNo == 0) {
                _this.closeTab2 = true;
            }
            else if (tabNo == 1) {
                _this.closeTab2 = false;
            }
        });
        this.conTactService.btnChoose.subscribe(function (value) {
            _this.btnchoose = value;
        });
    };
    ContactpersonComponent.prototype.chooseContact = function () {
        var _this = this;
        console.log(this.openTabNo);
        if (this.openTabNo == 0) {
            this.conTactService.getContactPerson('web', this.userStorage.getUserName(), 'edit').forEach(function (json) {
                console.log(json);
                if (json.CODE == '200') {
                    _this.okContact = __WEBPACK_IMPORTED_MODULE_3__model_ContactPerson_model__["a" /* ContactPersonModel */].parse(json.DATA);
                    _this.onSelect.emit(_this.okContact);
                }
                _this.closeDialog();
                ///// Reset
                _this.openTabNo = 0;
                _this.closeTab2 = true;
            });
        }
        else if (this.openTabNo == 1) {
            this.onSelect.emit(this.conTactService.thisContact);
            this.closeDialog();
        }
        // console.log('after data');
    };
    ContactpersonComponent.prototype.showDialog = function () {
        this.dialogcontactperson.open();
        this.conTactService.sendsignalShowDialog();
        //this.okContact = null;
    };
    ContactpersonComponent.prototype.closeDialog = function () {
        this.dialogcontactperson.close();
    };
    ContactpersonComponent.prototype.setFNMT = function (list) {
        this.conTactService.setListFNMT(list);
    };
    ContactpersonComponent.prototype.setFNME = function (list) {
        this.conTactService.setListFNME(list);
    };
    ContactpersonComponent.prototype.changeTab = function (value) {
        this.conTactService.sendClickTab(value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogcontactperson'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], ContactpersonComponent.prototype, "dialogcontactperson", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onContactSelect"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ContactpersonComponent.prototype, "onSelect", void 0);
    ContactpersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contactperson',
            template: __webpack_require__("../../../../../src/app/main/mst/contactperson/contactperson.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__contactperson_service__["a" /* ContactService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contactperson_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_2__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], ContactpersonComponent);
    return ContactpersonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/contactperson/contactperson.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactpersonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_center_center_module__ = __webpack_require__("../../../../../src/app/shared/center/center.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contactperson_component__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/contactperson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_add_contact_add_component__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/contact-add/contact-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_search_contact_search_component__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/contact-search/contact-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ContactpersonModule = /** @class */ (function () {
    function ContactpersonModule() {
    }
    ContactpersonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_center_center_module__["a" /* CenterModule */], __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"], __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PanelModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__contactperson_component__["a" /* ContactpersonComponent */], __WEBPACK_IMPORTED_MODULE_7__contact_search_contact_search_component__["a" /* ContactSearchComponent */], __WEBPACK_IMPORTED_MODULE_6__contact_add_contact_add_component__["a" /* ContactAddComponent */]],
            providers: [],
            exports: [__WEBPACK_IMPORTED_MODULE_5__contactperson_component__["a" /* ContactpersonComponent */]]
        })
    ], ContactpersonModule);
    return ContactpersonModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/contactperson/contactperson.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_ContactPerson_model__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/model/ContactPerson-model.ts");
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
 * Created by pongsatorn.an on 27/12/2560.
 */
var ContactService = /** @class */ (function () {
    function ContactService(http, service, userStorage) {
        this.http = http;
        this.service = service;
        this.userStorage = userStorage;
        ////-----------------------  Event (Emit & subscribtion) ------------------
        this.signalShowDialog = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.clickTab = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.thisContact = new __WEBPACK_IMPORTED_MODULE_4__model_ContactPerson_model__["a" /* ContactPersonModel */]();
        this.editContact = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.btnChoose = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        //console.log('Create Contact Service');
    }
    ContactService.prototype.searchContact = function (device, userCode, comCode, vCondition) {
        //  http://localhost:8080/
        var url = this.service.url + this.service.sale_call_api + ("/ask/contactPerson/SearchContact?device=" + device + "&user=" + userCode + "\n    &comcode=" + comCode + "&condition=" + vCondition);
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        //console.log(url);
        return this.http.get(url, options);
    };
    // getContactPerson(device: string, userCode: string, comCode: string, conPer: string, conEnt: string) {
    ContactService.prototype.getContactPerson = function (device, userCode, action) {
        var url = '';
        if (action == 'edit') {
            url = this.service.url + this.service.sale_call_api + '/ask/contactPerson/GetContactPerson?device=' + device
                + '&user=' + userCode
                + '&comcode=' + this.contactSelect.com_code
                + '&conpercode=' + this.contactSelect.cont_person_code
                + '&conentcode=' + this.contactSelect.cont_ent_code + '';
        }
        else {
            url = this.service.url + this.service.sale_call_api + '/ask/contactPerson/GetContactPerson?device=' + device
                + '&user=' + userCode
                + '&comcode=' + this.userStorage.getComCodePort();
        }
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        //console.log(url);
        return this.http.get(url, options);
    };
    ContactService.prototype.saveContactPerson = function (value) {
        var contactForSave = value;
        contactForSave.com_code = this.userStorage.getComCode();
        contactForSave.usr_upd = this.userStorage.getCode();
        contactForSave.username = this.userStorage.getUserName();
        //console.log(contactForSave);
        var url = this.service.url + this.service.sale_call_api + "/ask/contactPerson/postsavecontact";
        // const url = `http://localhost:8080/WebServices_Salecall/ask/contactPerson/postsavecontact`;
        var data = contactForSave;
        //console.log('Before send data');
        //console.log(data);
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.post(url, data, options);
    };
    //eventSelect = new EventEmitter<ContactSearchModel>();
    ContactService.prototype.setContactSelect = function (select) {
        this.contactSelect = select;
        this.setbtnShoose(true);
    };
    ContactService.prototype.setListFNMT = function (list) {
        this.ListFNMT = list;
    };
    ContactService.prototype.setListFNME = function (list) {
        this.ListFNME = list;
    };
    ContactService.prototype.sendsignalShowDialog = function () {
        this.signalShowDialog.emit(1);
    };
    ContactService.prototype.sendClickTab = function (tabNo) {
        this.clickTab.emit(tabNo);
    };
    ContactService.prototype.sendeditContact = function (value) {
        this.thisContact = value;
        this.editContact.emit(value);
    };
    ContactService.prototype.setbtnShoose = function (value) {
        this.btnChoose.emit(value);
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__shared_config_service_endpoint__["a" /* ServiceEndpoint */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/contactperson/model/ContactPerson-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPersonModel; });
/**
 * Created by pongsatorn.an on 27/12/2560.
 */
var ContactPersonModel = /** @class */ (function () {
    function ContactPersonModel(cont_person_code, cont_ent_code, title_en, title_th, name_th, name_en, position, department, address, phone, phone_ext, fax, mobile, email, working_his1, working_his2, input_by, input_date, usr_upd, last_upd, character_p, character_n, com_code, dealer_type) {
        this.cont_person_code = cont_person_code;
        this.cont_ent_code = cont_ent_code;
        this.title_en = title_en;
        this.title_th = title_th;
        this.name_th = name_th;
        this.name_en = name_en;
        this.position = position;
        this.department = department;
        this.address = address;
        this.phone = phone;
        this.phone_ext = phone_ext;
        this.fax = fax;
        this.mobile = mobile;
        this.email = email;
        this.working_his1 = working_his1;
        this.working_his2 = working_his2;
        this.input_by = input_by;
        this.input_date = input_date;
        this.usr_upd = usr_upd;
        this.last_upd = last_upd;
        this.character_p = character_p;
        this.character_n = character_n;
        this.com_code = com_code;
        this.dealer_type = dealer_type;
    }
    ContactPersonModel.parse = function (json) {
        var contactModel = new ContactPersonModel(json.cont_person_code, json.cont_ent_code, json.title_en, json.title_th, json.name_th, json.name_en, json.position, json.department, json.address, json.phone, json.phone_ext, json.fax, json.mobile, json.email, json.working_his1, json.working_his2, json.input_by, json.input_date, json.usr_upd, json.last_upd, json.character_p, json.character_n, json.com_code, json.dealer_type);
        return contactModel;
    };
    return ContactPersonModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/contactperson/model/ContactPerson-search.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSearchModel; });
/**
 * Created by pongsatorn.an on 27/12/2560.
 */
var ContactSearchModel = /** @class */ (function () {
    function ContactSearchModel(com_code, cont_person_code, cont_ent_code, name_th, name_en, position) {
        this.com_code = com_code;
        this.cont_person_code = cont_person_code;
        this.cont_ent_code = cont_ent_code;
        this.name_th = name_th;
        this.name_en = name_en;
        this.position = position;
    }
    ContactSearchModel.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new ContactSearchModel(json[i].com_code, json[i].cont_person_code, json[i].cont_ent_code, json[i].name_th, json[i].name_en, json[i].position));
        }
        return data;
    };
    return ContactSearchModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-attendees/call-visit-attendees.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"border-style: solid; border-width: 1px; border-radius: 10px\">\n  <div class=\"row\">\n    <!---------------left-->\n    <div class=\"col-md-6  form-group border-isa\">\n      <h5 style=\"text-align: center\" > BGPL </h5>\n      <p-dataTable [value]=\"this.mySaleCallAttendeesB\"\n                   scrollable=\"true\" scrollHeight=\"400px\"\n                   [(selection)]=\"selectB\"\n                   selectionMode=\"single\">\n        <p-header>\n          <div class=\"form-inline\">\n            <app-search-un app-search-un inuURL={{this.OutURLB}}\n                           title=\"Employ Name;POSITON;CODE;\" [option]=\"'new'\"\n                           (col1)=\"getNameB($event)\"\n                           (col2)=\"getPosB($event)\"\n                           (col3)=\"getCodeB($event)\">\n            </app-search-un>\n            <div class=\"mt-1\" >\n            <app-custom-botton-icon [option]=\"'delete'\" (onBtnClick)=\"deleteB()\"    [disabled]=\"selectB == undefined\"   ></app-custom-botton-icon>\n            </div>\n          </div>\n        </p-header>\n        <p-column field=\"order_no\" header=\"Order\"></p-column>\n        <p-column field=\"name_full\" header=\"Name\"></p-column>\n        <p-column field=\"attnd_position\" header=\"Position\"></p-column>\n        <p-footer></p-footer>\n      </p-dataTable>\n\n    </div>\n\n    <div class=\"col-md-6 form-group  border-isa\">\n      <h5 style=\"text-align: center\" > Customer </h5>\n      <p-dataTable [value]=\"mySaleCallAttendeesC\"\n                   [editable]=\"true\"\n                   scrollable=\"true\" scrollHeight=\"400px\"\n                   [(selection)]=\"selectC\">\n        <p-header>\n          <div class=\"form-inline\" >\n           <div class=\"mt-1\" >\n             <app-custom-botton-icon [option]=\"'new'\" (onBtnClick)=\"addC()\" ></app-custom-botton-icon>\n             <app-custom-botton-icon [option]=\"'delete'\" (onBtnClick)=\"deleteC()\"    [disabled]=\"selectC == undefined\"   ></app-custom-botton-icon>\n           </div>\n          </div>\n        </p-header>\n        <p-column field=\"attnd_name\"      header=\"Name\" [editable]=\"true\" ></p-column>\n        <p-column field=\"attnd_position\" header=\"Position\" [editable]=\"true\"></p-column>\n        <p-footer></p-footer>\n      </p-dataTable>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-attendees/call-visit-attendees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallVisitAttendeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_Attendees__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Attendees.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sale_call_visit_service__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallVisitAttendeesComponent = /** @class */ (function () {
    function CallVisitAttendeesComponent(saleCallVisitService) {
        this.saleCallVisitService = saleCallVisitService;
        this.OutURLB = "";
        this.OutURLC = "";
        this.mySaleCallAttendeesB = [];
        this.mySaleCallAttendeesC = [];
        this.OutURLB = this.saleCallVisitService.getAttendees("B");
    }
    CallVisitAttendeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ((this.saleCallVisitService.selectsaleD)) {
            this.thissale_call_no = this.saleCallVisitService.selectsaleD.sale_call_no;
            this.thisseq_no = this.saleCallVisitService.selectsaleD.seq_no;
            if (this.saleCallVisitService.selectsaleD.listAttendeesB) {
                this.mySaleCallAttendeesB = this.saleCallVisitService.selectsaleD.listAttendeesB;
            }
            if (this.saleCallVisitService.selectsaleD.listAttendeesC) {
                this.mySaleCallAttendeesC = this.saleCallVisitService.selectsaleD.listAttendeesC;
            }
        }
        this.subscription = this.saleCallVisitService.eventselectsaleD.subscribe(function (obj) {
            _this.OutURLC = _this.saleCallVisitService.getAttendees("C");
            // console.log(this.OutURLC);
            _this.thissale_call_no = obj.sale_call_no;
            _this.thisseq_no = obj.seq_no;
            _this.mySaleCallAttendeesB = obj.listAttendeesB;
            _this.mySaleCallAttendeesC = obj.listAttendeesC;
        });
    };
    CallVisitAttendeesComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CallVisitAttendeesComponent.prototype.getNameB = function (data) {
        this.add_Name = data;
    };
    CallVisitAttendeesComponent.prototype.getPosB = function (data) {
        this.add_Pos = data;
    };
    CallVisitAttendeesComponent.prototype.getCodeB = function (data) {
        var newRec = new __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_Attendees__["a" /* SaleCallAttendees */]();
        newRec.sale_call_no = this.thissale_call_no;
        newRec.seq_no = this.thisseq_no;
        newRec.order_no = this.mySaleCallAttendeesB.length + 1;
        newRec.attnd_name = data;
        newRec.attnd_position = this.add_Pos;
        newRec.attnd_type = "B";
        newRec.name_full = this.add_Name;
        this.mySaleCallAttendeesB = this.mySaleCallAttendeesB.concat([newRec]);
        this.saleCallVisitService.selectsaleD.listAttendeesB = this.mySaleCallAttendeesB;
    };
    CallVisitAttendeesComponent.prototype.deleteB = function () {
        var delRow = this.mySaleCallAttendeesB.indexOf(this.selectB);
        this.mySaleCallAttendeesB.splice(delRow, 1);
        ////  Change  order
        for (var i = 1; i <= this.mySaleCallAttendeesB.length; i++) {
            this.mySaleCallAttendeesB[i - 1].order_no = i;
        }
        ;
        this.mySaleCallAttendeesB = this.mySaleCallAttendeesB.slice();
        this.saleCallVisitService.selectsaleD.listAttendeesB = this.mySaleCallAttendeesB;
    };
    CallVisitAttendeesComponent.prototype.addC = function () {
        var addTrue = true;
        if ((this.mySaleCallAttendeesC) && (this.mySaleCallAttendeesC.length > 0)) {
            var lastRec = this.mySaleCallAttendeesC.length - 1;
            if (!this.mySaleCallAttendeesC[lastRec].attnd_name) {
                addTrue = false;
            }
        }
        if (addTrue) {
            var newRec = new __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_Attendees__["a" /* SaleCallAttendees */]();
            newRec.sale_call_no = this.thissale_call_no;
            newRec.seq_no = this.thisseq_no;
            newRec.order_no = this.mySaleCallAttendeesC.length + 1;
            newRec.attnd_name = '';
            newRec.attnd_position = '';
            newRec.attnd_type = "C";
            newRec.name_full = '';
            this.selectC = newRec;
            this.mySaleCallAttendeesC = this.mySaleCallAttendeesC.concat([newRec]);
            this.saleCallVisitService.selectsaleD.listAttendeesC = this.mySaleCallAttendeesC;
        }
    };
    CallVisitAttendeesComponent.prototype.deleteC = function () {
        var delRow = this.mySaleCallAttendeesC.indexOf(this.selectC);
        this.mySaleCallAttendeesC.splice(delRow, 1);
        ////  Change  order
        for (var i = 1; i <= this.mySaleCallAttendeesC.length; i++) {
            this.mySaleCallAttendeesC[i - 1].order_no = i;
        }
        this.mySaleCallAttendeesC = this.mySaleCallAttendeesC.slice();
        this.saleCallVisitService.selectsaleD.listAttendeesC = this.mySaleCallAttendeesC;
    };
    CallVisitAttendeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-visit-attendees',
            template: __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-attendees/call-visit-attendees.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sale_call_visit_service__["a" /* SaleCallVisitService */]])
    ], CallVisitAttendeesComponent);
    return CallVisitAttendeesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-calling-history/call-visit-calling-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-calling-history/call-visit-calling-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"border-style: solid; border-width: 1px; border-radius: 10px; padding: 3px \" >\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-12 form-group p-1\"  >\n        <div class=\"container\" style=\"margin: 0; width: 100%;padding-right: 5px;padding-left: 5px\">\n          <div class=\"portlet grey-cascade box\">\n            <div class=\"container\" style=\"padding: 0px;width: 100%\">\n              <p-dataTable [responsive]=\"true\" [value]=\"this.mySaleCallHistory\"\n                           scrollable=\"true\" scrollHeight=\"400px\">\n                <p-column field=\"sale_call_no\" header=\"Sale Call No.\"></p-column>\n                <p-column field=\"sale_call_dt\" header=\"Call/Visit Date\"></p-column>\n                <p-column field=\"sale_call_note\" header=\"Call/Visit Note\"></p-column>\n                <p-column field=\"follow_up_point\" header=\"Follow Up Note\"></p-column>\n                <p-column field=\"comp_ent_code\" header=\"Contact Person Name\"></p-column>\n                <p-column field=\"call_visit_by\" header=\"Call/Visit By\"></p-column>\n              </p-dataTable>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-calling-history/call-visit-calling-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallVisitCallingHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sale_call_visit_service__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallVisitCallingHistoryComponent = /** @class */ (function () {
    function CallVisitCallingHistoryComponent(saleCallVisitService) {
        this.saleCallVisitService = saleCallVisitService;
        this.mySaleCallHistory = [];
    }
    CallVisitCallingHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.saleCallVisitService.eventsaleH.subscribe(function (obj) {
            _this.mySaleCallHistory = obj.listHistory;
        });
    };
    CallVisitCallingHistoryComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CallVisitCallingHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-visit-calling-history',
            template: __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-calling-history/call-visit-calling-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-calling-history/call-visit-calling-history.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sale_call_visit_service__["a" /* SaleCallVisitService */]])
    ], CallVisitCallingHistoryComponent);
    return CallVisitCallingHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-credit-type-asset/call-visit-credit-type-asset.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-credit-type-asset/call-visit-credit-type-asset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-7 form-group\" style=\"padding-left: 0px\">\n      <label>Credit Type</label>\n      <div class=\"form-control  mt-checkbox-inline\"\n           style=\"border-style: solid; border-width: 1px;border-radius: 10px;padding-top: 5px;padding-left: 10px\">\n        <label class=\"mt-checkbox\">\n          <input type=\"checkbox\"\n                 [ngModel]=\"Credit_P\"\n                 (ngModelChange)=\"Credit_P=!Credit_P\"\n                 (change)=\"setCredit()\"\n                 [disabled]=\"componentReadOnly\"\n          >DirectLoan\n          <span></span>\n        </label>\n        <label class=\"mt-checkbox\">\n          <input type=\"checkbox\"\n                 [ngModel]=\"Credit_HP\"\n                 (ngModelChange)=\"Credit_HP=!Credit_HP\"\n                 (change)=\"setCredit()\"\n                 [disabled]=\"componentReadOnly\"\n          >Hire Purchase\n          <span></span>\n        </label>\n        <label class=\"mt-checkbox mt-checkbox-disabled\">\n          <input type=\"checkbox\"\n                 [ngModel]=\"Credit_LS\"\n                 (ngModelChange)=\"Credit_LS=!Credit_LS\"\n                 (change)=\"setCredit()\"\n                 [disabled]=\"componentReadOnly\"\n          >Leasing\n          <span></span>\n        </label>\n        <label class=\"mt-checkbox mt-checkbox-disabled\">\n          <input type=\"checkbox\"\n                 [ngModel]=\"Credit_FIM\"\n                 (ngModelChange)=\"Credit_FIM=!Credit_FIM\"\n                 (change)=\"setCredit()\"\n                 [disabled]=\"componentReadOnly\"\n          >Import Factoring\n          <span></span>\n        </label>\n        <label class=\"mt-checkbox mt-checkbox-disabled\">\n          <input type=\"checkbox\"\n                 [ngModel]=\"Credit_FEX\"\n                 (ngModelChange)=\"Credit_FEX=!Credit_FEX\"\n                 (change)=\"setCredit()\"\n                 [disabled]=\"componentReadOnly\"\n          >Export Factoring\n          <span></span>\n        </label>\n        <label class=\"mt-checkbox mt-checkbox-disabled\">\n          <input type=\"checkbox\"\n                 [ngModel]=\"Credit_FDO\"\n                 (ngModelChange)=\"Credit_FDO=!Credit_FDO\"\n                 (change)=\"setCredit()\"\n                 [disabled]=\"componentReadOnly\"\n          >Domestic Factoring\n          <span></span>\n        </label>\n      </div>\n    </div>\n    <div class=\"col-md-1 form-group\" style=\"padding: 0px\">\n      <label>Asset</label>\n      <div class=\"form-control mt-checkbox-inline\"\n           style=\"border-style: solid; border-width: 1px;border-radius: 10px;padding-top: 5px;padding-left: 10px\">\n        <label class=\"mt-checkbox\">\n          <input type=\"checkbox\"\n                 [ngModel]=\"this.FinnanAsset_M\"\n                 (ngModelChange)=\"this.FinnanAsset_M=!this.FinnanAsset_M\"\n                 (change)=\"setFinanAsset()\"\n                 [disabled]=\"componentReadOnly\"\n          >Machine\n          <span></span>\n        </label><br>\n        <label class=\"mt-checkbox\">\n          <input type=\"checkbox\"\n                 [ngModel]=\"this.FinnanAsset_V\"\n                 (ngModelChange)=\"this.FinnanAsset_V=!this.FinnanAsset_V\"\n                 (change)=\"setFinanAsset()\"\n                 [disabled]=\"componentReadOnly\"\n          >Vehicle\n          <span></span>\n        </label>\n      </div>\n    </div>\n    <div class=\"col-md-1 form-group\" style=\"padding-left: 0px\">\n      <label>Open L/C</label>\n      <div class=\"form-control mt-radio-inline\"\n           style=\"border-style: solid; border-width: 1px;border-radius: 10px;padding-top: 5px;padding-left: 10px\">\n        <label class=\"mt-radio\">\n          <input type=\"radio\" name=\"openLc\"\n                 value=\"Y\"\n                 [ngModel]=\"mySaleCallVisitAsset?.open_lc\"\n                 (ngModelChange)=\"mySaleCallVisitAsset.open_lc=$event\"\n                 [disabled]=\"componentReadOnly\">Yes\n          <span></span>\n        </label><br>\n        <label class=\"mt-radio\">\n          <input type=\"radio\" name=\"openLc\"\n                 value=\"N\"\n                 [ngModel]=\"mySaleCallVisitAsset?.open_lc\"\n                 (ngModelChange)=\"mySaleCallVisitAsset.open_lc=$event\"\n                 [disabled]=\"componentReadOnly\">No\n          <span></span>\n        </label>\n      </div>\n    </div>\n    <div class=\"col-md-3 form-group\" style=\"padding-left: 0px\">\n      <button class=\"btn btn-primary btn-sm  invisible\">Previous Data</button>\n      <br>\n      <label>Cost/Credit Line</label><br>\n      <input class=\"form-control\" type=\"text\"\n             style=\"display: inline;width: 50%;text-align: right;\"\n             appMyCurrency\n             [value]=\"mySaleCallVisitAsset?.fin_amt\"\n             (change)=\"mySaleCallVisitAsset.fin_amt = $event.target.value\"\n             [disabled]=\"componentReadOnly\">\n      <label>MB.</label>\n    </div>\n    <div class=\"col-md-6 form-group\" style=\"padding-left: 0px\">\n      <label>Brand</label><br>\n      <input class=\"form-control\" type=\"text\" class=\"form-control\"  [maxlength]=\"40\"\n             [ngModel]=\"mySaleCallVisitAsset?.brand\"\n             (ngModelChange)=\"mySaleCallVisitAsset.brand=$event\"\n             [disabled]=\"componentReadOnly\">\n    </div>\n    <div class=\"col-md-6 form-group\" style=\"padding-left: 0px\">\n      <label>Specifies</label><br>\n      <input class=\"form-control\" type=\"text\"  [maxlength]=\"200\"\n             [ngModel]=\"mySaleCallVisitAsset?.asset_detail\"\n             (ngModelChange)=\"mySaleCallVisitAsset.asset_detail=$event\"\n             [disabled]=\"componentReadOnly\">\n    </div>\n    <div class=\"col-md-12 \" style=\"padding-left: 0px\">\n      <label>Credit Note</label>\n      <div class=\"container\" style=\"border-style: solid; border-width: 1px; border-radius: 10px\">\n        <label>Issue discussed</label>\n        <div class=\"row\">\n          <div class=\"col-md-12 form-group\">\n            <label>-The Purpose of new credit line</label>\n          </div>\n          <div class=\"col-md-6  form-group\">\n            <div class=\"mt-checkbox-inline\">\n              <label class=\"mt-checkbox\">\n                <input   type=\"checkbox\"\n                       [ngModel]=\"Purpose_R\"\n                       (ngModelChange)=\"Purpose_R=!Purpose_R\"\n                       (change)=\"setPurpose()\"\n                       [disabled]=\"componentReadOnly\"\n                >Replace the old one\n                <span></span>\n              </label>\n              <label class=\"mt-checkbox\">\n                <input type=\"checkbox\"\n                       [ngModel]=\"Purpose_S\"\n                       (ngModelChange)=\"Purpose_S=!Purpose_S\"\n                       (change)=\"setPurpose()\"\n                       [disabled]=\"componentReadOnly\"\n                > Support new order\n                <span></span>\n              </label>\n              <label class=\"mt-checkbox mt-checkbox-disabled\">\n                <input  type=\"checkbox\"\n                       [ngModel]=\"Purpose_H\"\n                       (ngModelChange)=\"Purpose_H=!Purpose_H\"\n                       (change)=\"setPurpose()\"\n                       [disabled]=\"componentReadOnly\"\n                > Hiring replacement\n                <span></span>\n              </label>\n              <label class=\"mt-checkbox mt-checkbox-disabled\">\n                <input type=\"checkbox\"\n                       [ngModel]=\"Purpose_O\"\n                       (ngModelChange)=\"Purpose_O=!Purpose_O\"\n                       (change)=\"setPurpose()\"\n                       [disabled]=\"componentReadOnly\"\n                > Other\n                <span></span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col-md-6  form-group\">\n            <input class=\"form-control\" type=\"text\"\n                   [disabled]=\"!this.Purpose_O\"\n                   [(ngModel)]=\"Purpose_O_note\"\n                   (focusout)=\"setPurpose()\"\n                   [disabled]=\"componentReadOnly\">\n          </div>\n          <div class=\"col-md-12 form-group\">\n            <label>-Our competitor</label>\n          </div>\n          <div class=\"col-md-4  form-group\">\n            <label>Leasing Name</label>\n            <input type=\"text\" class=\"form-control\"\n                   [ngModel]=\"mySaleCallVisitAsset?.competitor_lease\"\n                   (ngModelChange)=\"mySaleCallVisitAsset.competitor_lease=$event\"\n                   [disabled]=\"componentReadOnly\">\n          </div>\n          <div class=\"col-md-4  form-group\">\n            <label>Bank Name</label>\n            <select class=\"form-control\"  [disabled]=\"componentReadOnly\"\n                    [ngModel]=\"mySaleCallVisitAsset?.competitor_bank\"\n                    (ngModelChange)=\"mySaleCallVisitAsset.competitor_bank =$event\">\n              <option> </option>\n              <option *ngFor=\"let ansBANK of ListBank\"\n                      [selected]=\"ansBANK?.id == saleCallH?.competitor_bank  \"\n                      [value]=\"ansBANK?.id\">{{ansBANK?.display}}\n            </select>\n          </div>\n          <div class=\"col-md-4  form-group\">\n            <label>Other</label>\n            <input type=\"text\" class=\"form-control\"\n                   [ngModel]=\"mySaleCallVisitAsset?.competitor_other\"\n                   (ngModelChange)=\"mySaleCallVisitAsset.competitor_other=$event\"\n                   [disabled]=\"componentReadOnly\">\n          </div>\n          <div class=\"col-md-12 form-group\">\n            <label>-Competitor condition</label>\n          </div>\n          <div class=\"col-md-4  form-group\">\n            <label>IRR</label>\n            <input type=\"text\" class=\"form-control\" style=\"display: inline;width: 50%\"  pKeyFilter=\"pnum\"\n                   [ngModel]=\"mySaleCallVisitAsset?.competitor_irr\"\n                   (ngModelChange)=\"mySaleCallVisitAsset.competitor_irr=$event\"\n                   [disabled]=\"componentReadOnly\">\n            <label>%</label>\n          </div>\n          <div class=\"col-md-3  form-group\">\n            <label>Term</label>\n            <input type=\"text\" class=\"form-control\" style=\"display: inline;width: 50%\"  pKeyFilter=\"int\"\n                   [ngModel]=\"mySaleCallVisitAsset?.competitor_term\"\n                   (ngModelChange)=\"mySaleCallVisitAsset.competitor_term=$event\"\n                   [disabled]=\"componentReadOnly\">\n          </div>\n          <div class=\"col-md-5  form-group\">\n            <label>Financing Amount</label>\n            <input type=\"text\" class=\"form-control\" style=\"display: inline;width: 50%\"  pKeyFilter=\"pnum\"\n                   [ngModel]=\"mySaleCallVisitAsset?.competitor_fin_pcnt\"\n                   (ngModelChange)=\"mySaleCallVisitAsset.competitor_fin_pcnt=$event\"\n                   [disabled]=\"componentReadOnly\">\n            <label>%</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-credit-type-asset/call-visit-credit-type-asset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallVisitCreditTypeAssetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sale_call_visit_service__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("../../node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallVisitCreditTypeAssetComponent = /** @class */ (function () {
    function CallVisitCreditTypeAssetComponent(saleCallVisitService) {
        this.saleCallVisitService = saleCallVisitService;
        this.Credit_P = false;
        this.Credit_HP = false;
        this.Credit_LS = false;
        this.Credit_FIM = false;
        this.Credit_FEX = false;
        this.Credit_FDO = false;
        this.FinnanAsset_M = false;
        this.FinnanAsset_V = false;
        this.Purpose_R = false;
        this.Purpose_S = false;
        this.Purpose_H = false;
        this.Purpose_O = false;
        this.Purpose_O_note = '';
        this.componentReadOnly = true;
    }
    CallVisitCreditTypeAssetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.saleCallVisitService.eventselectsaleD.subscribe(function (obj) {
            _this.mySaleCallVisitAsset = obj.asset;
            _this.Credit_P = false;
            _this.Credit_HP = false;
            _this.Credit_LS = false;
            _this.Credit_FIM = false;
            _this.Credit_FEX = false;
            _this.Credit_FDO = false;
            _this.FinnanAsset_M = false;
            _this.FinnanAsset_V = false;
            _this.Purpose_R = false;
            _this.Purpose_S = false;
            _this.Purpose_H = false;
            _this.Purpose_O = false;
            _this.Purpose_O_note = '';
            if (!Object(__WEBPACK_IMPORTED_MODULE_2_util__["isUndefined"])(_this.mySaleCallVisitAsset)) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_2_util__["isUndefined"])(_this.mySaleCallVisitAsset.credit_type)) {
                    _this.getCredit(_this.mySaleCallVisitAsset.credit_type);
                }
                if (!Object(__WEBPACK_IMPORTED_MODULE_2_util__["isUndefined"])(_this.mySaleCallVisitAsset.asset_type)) {
                    _this.getFinanAsset(_this.mySaleCallVisitAsset.asset_type);
                }
                if (!Object(__WEBPACK_IMPORTED_MODULE_2_util__["isUndefined"])(_this.mySaleCallVisitAsset.purpose)) {
                    _this.getPurpose(_this.mySaleCallVisitAsset.purpose);
                }
            }
            _this.ListBank = _this.saleCallVisitService.ListBANK;
            if (obj.submit_flg == 'Y') {
                _this.componentReadOnly = true;
            }
            else {
                _this.componentReadOnly = false;
            }
        });
    };
    CallVisitCreditTypeAssetComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CallVisitCreditTypeAssetComponent.prototype.getCredit = function (asset) {
        if (asset.search("P") > -1) {
            if (asset[0] == 'P') {
                this.Credit_P = true;
            }
        }
        if (asset.search("HP") > -1) {
            this.Credit_HP = true;
        }
        if (asset.search("LS") > -1) {
            this.Credit_LS = true;
        }
        if (asset.search("FIM") > -1) {
            this.Credit_FIM = true;
        }
        if (asset.search("FEX") > -1) {
            this.Credit_FEX = true;
        }
        if (asset.search("FDO") > -1) {
            this.Credit_FDO = true;
        }
    };
    CallVisitCreditTypeAssetComponent.prototype.getFinanAsset = function (asset_type) {
        if (asset_type.search("Machine") > -1) {
            this.FinnanAsset_M = true;
        }
        if (asset_type.search("Vehicle") > -1) {
            this.FinnanAsset_V = true;
        }
    };
    CallVisitCreditTypeAssetComponent.prototype.getPurpose = function (purpose) {
        if (purpose.search("Replace the old one") > -1) {
            this.Purpose_R = true;
        }
        if (purpose.search("Support new order") > -1) {
            this.Purpose_S = true;
        }
        if (purpose.search("Hiring replacement") > -1) {
            this.Purpose_H = true;
        }
        if (purpose.search("Other") > -1) {
            this.Purpose_O = true;
            if (purpose.search(":") > -1) {
                this.Purpose_O_note = purpose.substr(purpose.search(":") + 1, purpose.length);
            }
        }
    };
    CallVisitCreditTypeAssetComponent.prototype.setCredit = function () {
        this.mySaleCallVisitAsset.credit_type = '';
        if (this.Credit_P == true) {
            this.mySaleCallVisitAsset.credit_type = 'P';
        }
        ;
        if (this.Credit_HP == true) {
            if (this.mySaleCallVisitAsset.credit_type != '') {
                this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + ',';
            }
            this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + 'HP';
        }
        if (this.Credit_LS == true) {
            if (this.mySaleCallVisitAsset.credit_type != '') {
                this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + ',';
            }
            this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + 'LS';
        }
        if (this.Credit_FIM == true) {
            if (this.mySaleCallVisitAsset.credit_type != '') {
                this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + ',';
            }
            this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + 'FIM';
        }
        if (this.Credit_FEX == true) {
            if (this.mySaleCallVisitAsset.credit_type != '') {
                this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + ',';
            }
            this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + 'FEX';
        }
        if (this.Credit_FDO == true) {
            if (this.mySaleCallVisitAsset.credit_type != '') {
                this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + ',';
            }
            this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + 'FDO';
        }
    };
    CallVisitCreditTypeAssetComponent.prototype.setFinanAsset = function () {
        this.mySaleCallVisitAsset.asset_type = '';
        if (this.FinnanAsset_M == true) {
            this.mySaleCallVisitAsset.asset_type = 'Machine';
            if (this.FinnanAsset_V == true) {
                this.mySaleCallVisitAsset.asset_type = this.mySaleCallVisitAsset.asset_type + ',Vehicle';
            }
        }
        else if (this.FinnanAsset_V == true) {
            this.mySaleCallVisitAsset.asset_type = 'Vehicle';
        }
    };
    CallVisitCreditTypeAssetComponent.prototype.setPurpose = function () {
        this.mySaleCallVisitAsset.purpose = '';
        if (this.Purpose_R == true) {
            this.mySaleCallVisitAsset.purpose = 'Replace the old one';
        }
        if (this.Purpose_S == true) {
            if (this.mySaleCallVisitAsset.purpose != '') {
                this.mySaleCallVisitAsset.purpose = this.mySaleCallVisitAsset.purpose + ',';
            }
            this.mySaleCallVisitAsset.purpose = this.mySaleCallVisitAsset.purpose + 'Support new order';
        }
        if (this.Purpose_H == true) {
            if (this.mySaleCallVisitAsset.purpose != '') {
                this.mySaleCallVisitAsset.purpose = this.mySaleCallVisitAsset.purpose + ',';
            }
            this.mySaleCallVisitAsset.purpose = this.mySaleCallVisitAsset.purpose + 'Hiring replacement';
        }
        if (this.Purpose_O == true) {
            if (this.mySaleCallVisitAsset.purpose != '') {
                this.mySaleCallVisitAsset.purpose = this.mySaleCallVisitAsset.purpose + ',';
            }
            this.mySaleCallVisitAsset.purpose = this.mySaleCallVisitAsset.purpose + 'Other : ' + this.Purpose_O_note;
        }
        else {
            this.Purpose_O_note = '';
        }
    };
    CallVisitCreditTypeAssetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-visit-credit-type-asset',
            template: __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-credit-type-asset/call-visit-credit-type-asset.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-credit-type-asset/call-visit-credit-type-asset.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sale_call_visit_service__["a" /* SaleCallVisitService */]])
    ], CallVisitCreditTypeAssetComponent);
    return CallVisitCreditTypeAssetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid border-isa\">\n  <!--<app-custom-botton-icon [option]=\"'new'\"   (onBtnClick)=\"newDetail()\"  >   </app-custom-botton-icon>-->\n\n  <app-custom-button [option]=\"'new'\"   (onBtnClick)=\"newDetail()\"   ></app-custom-button>\n\n  <div class=\"row\"  style=\"min-height: 450px\"  >\n    <div class=\"col-md-12\">\n      <p-tabView>\n        <p-tabPanel header=\"Call Visit\"   >\n          <app-call-visit-result></app-call-visit-result>\n        </p-tabPanel>\n        <p-tabPanel header=\"Credit Type/Asset\">\n          <app-call-visit-credit-type-asset></app-call-visit-credit-type-asset>\n        </p-tabPanel>\n        <p-tabPanel header=\"Personal Loan\"  *ngIf=\"comCode != 'BGPL'\" >\n          <app-call-visti-telesale></app-call-visti-telesale>\n        </p-tabPanel>\n        <p-tabPanel header=\"Attendees\"  *ngIf=\"SelectList?.sale_call_type == 'V'\"  >\n          <app-call-visit-attendees></app-call-visit-attendees>\n        </p-tabPanel>\n        <p-tabPanel header=\"Expense\"    *ngIf=\"SelectList?.sale_call_type == 'V'\"  >\n          <app-call-visit-expense></app-call-visit-expense>\n        </p-tabPanel>\n        <p-tabPanel header=\"Exposure\">\n          <app-call-visit-exposure></app-call-visit-exposure>\n        </p-tabPanel>\n        <p-tabPanel header=\"Calling\" >\n          <app-call-visit-calling-history></app-call-visit-calling-history>\n        </p-tabPanel>\n      </p-tabView>\n    </div>\n  </div>\n  <div class=\"row\">\n    <p-dataTable [value]=\"mySaleCallD\"\n                 scrollable=\"true\"\n                 scrollHeight=\"200px\"\n                 [responsive]=\"true\"\n                 selectionMode=\"single\"\n                 (onRowSelect)=\"selectSaleCallDetail(SelectList)\"\n                 [(selection)]=\"SelectList\">\n      <p-column field=\"seq_no\" header=\"Seq No.\" [style]=\"{'width':'70px','text-align': 'center'}\" ></p-column>\n      <p-column field=\"sale_call_dt\" header=\"Call/Visit Date\" [style]=\"{'width':'100px','text-align': 'center'}\"></p-column>\n      <p-column field=\"sale_call_type\" header=\"Call/Visit Type\" [style]=\"{'width':'110px','text-align': 'center'}\"></p-column>\n      <p-column field=\"prepare_flag\" header=\"Prepare CA\" [style]=\"{'width':'90px','text-align': 'center'}\"></p-column>\n      <p-column field=\"reject\" header=\"Reject\" [style]=\"{'width':'110px','text-align': 'center'}\" ></p-column>\n      <p-column field=\"follow_date\" header=\"Follow Up/Date\" [style]=\"{'width':'110px','text-align': 'center'}\"></p-column>\n      <p-column field=\"sale_call_note\" header=\"Call/Visit Note\"></p-column>\n      <p-column field=\"follow_up_point\" header=\"Follow Up Note\"></p-column>\n      <p-column field=\"call_by_name\" header=\"Call/Visit By\"></p-column>\n    </p-dataTable>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallVisitDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sale_call_visit_service__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Sale_Call_Detail__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Detail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
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






var CallVisitDetailComponent = /** @class */ (function () {
    function CallVisitDetailComponent(saleCallVisitService, dataPipe, userStorage) {
        this.saleCallVisitService = saleCallVisitService;
        this.dataPipe = dataPipe;
        this.userStorage = userStorage;
        this.mySaleCallD = [];
        this.code = "";
        this.username = "";
        this.comCode = "";
    }
    CallVisitDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.code = this.userStorage.getCode();
        this.username = this.userStorage.getUserName();
        this.comCode = this.userStorage.getComCodePort();
        this.subscription = this.saleCallVisitService.eventsaleD.subscribe(function (obj) {
            _this.mySaleCallD = obj;
            if (!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isUndefined"])(_this.mySaleCallD[0]))
                _this.selectSaleCallDetail(_this.mySaleCallD[0]);
        });
        this.saleCallVisitService.eventselectsaleD.subscribe(function (obj) { _this.SelectList = obj; });
    };
    CallVisitDetailComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CallVisitDetailComponent.prototype.selectSaleCallDetail = function (select) {
        this.SelectList = select;
        this.saleCallVisitService.setselectsaleD(select);
    };
    CallVisitDetailComponent.prototype.newDetail = function () {
        var chekNew = false;
        if (!this.mySaleCallD[0]) {
            chekNew = true;
        }
        else if (this.mySaleCallD[0].submit_flg == 'Y') {
            chekNew = true;
        }
        else {
            chekNew = false;
        }
        if (chekNew) {
            this.newRec = new __WEBPACK_IMPORTED_MODULE_3__model_Sale_Call_Detail__["a" /* SaleCallDetail */](this.saleCallVisitService.saleH.sale_call_no, String(this.mySaleCallD.length + 1));
            this.newRec.input_by = this.code;
            this.newRec.call_visit_by = this.code;
            this.newRec.call_visit_by = this.code;
            /// auto copy previous
            if ((this.mySaleCallD) && (this.mySaleCallD.length > 0)) {
                this.newRec.asset.asset_type = this.mySaleCallD[0].asset.asset_type;
                this.newRec.asset.purpose = this.mySaleCallD[0].asset.purpose;
                this.newRec.asset.brand = this.mySaleCallD[0].asset.brand;
                this.newRec.asset.open_lc = this.mySaleCallD[0].asset.open_lc;
                this.newRec.asset.fin_amt = this.mySaleCallD[0].asset.fin_amt;
                this.newRec.asset.asset_detail = this.mySaleCallD[0].asset.asset_detail;
                this.newRec.asset.competitor_bank = this.mySaleCallD[0].asset.competitor_bank;
                this.newRec.asset.competitor_fin_pcnt = this.mySaleCallD[0].asset.competitor_fin_pcnt;
                this.newRec.asset.competitor_irr = this.mySaleCallD[0].asset.competitor_irr;
                this.newRec.asset.competitor_lease = this.mySaleCallD[0].asset.competitor_lease;
                this.newRec.asset.competitor_other = this.mySaleCallD[0].asset.competitor_other;
                this.newRec.asset.competitor_term = this.mySaleCallD[0].asset.competitor_term;
                this.newRec.asset.credit_type = this.mySaleCallD[0].asset.credit_type;
                this.newRec.asset.credit_type_other = this.mySaleCallD[0].asset.credit_type_other;
                this.newRec.asset.relate_ent_code = this.mySaleCallD[0].asset.relate_ent_code;
                this.newRec.asset.unit = this.mySaleCallD[0].asset.unit;
            }
            this.mySaleCallD = [this.newRec].concat(this.mySaleCallD);
            this.selectSaleCallDetail(this.mySaleCallD[0]);
        }
        else {
            console.log("Can'not Create");
        }
    };
    CallVisitDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-visit-detail',
            template: __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sale_call_visit_service__["a" /* SaleCallVisitService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_5__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], CallVisitDetailComponent);
    return CallVisitDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-expense/call-visit-expense.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n  height: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-expense/call-visit-expense.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"border-style: solid; border-width: 1px; border-radius: 10px\">\n  <fieldset [disabled]=\"componentReadOnly\" >\n    <div class=\"row\">\n\n      <div class=\"col-md-6\">\n        <label>Travel By</label>\n        <div class=\"row\">\n          <div class=\"col-md-8 form-group\">\n            <div class=\"container\" style=\"border-style: solid; border-width: 1px; border-radius: 10px; padding-top: 5px;\n                                          width: 100%\">\n              <label class=\"mt-radio\">\n                <input type=\"radio\" name=\"optionsRadios\"\n                       value=\"O\"\n                       [ngModel]=\"mySaleCallVisitOutside?.travel_by\"\n                       (ngModelChange)=\"mySaleCallVisitOutside.travel_by=$event\"\n                >Own Car\n                <span></span>\n              </label>\n              <label class=\"mt-radio\">\n                <input type=\"radio\" name=\"optionsRadios\"\n                       value=\"C\"\n                       [ngModel]=\"mySaleCallVisitOutside?.travel_by\"\n                       (ngModelChange)=\"mySaleCallVisitOutside.travel_by=$event\"\n                > Company Car\n                <span></span>\n              </label>\n              <label class=\"mt-radio\">\n                <input type=\"radio\" name=\"optionsRadios\"\n                       value=\"NE\"\n                       [ngModel]=\"mySaleCallVisitOutside?.travel_by\"\n                       (ngModelChange)=\"mySaleCallVisitOutside.travel_by=$event\"\n                > No\n                Expense\n                <span></span>\n              </label>\n              <label class=\"mt-radio\">\n                <input type=\"radio\" name=\"optionsRadios\"\n                       value=\"OTH\"\n                       [ngModel]=\"mySaleCallVisitOutside?.travel_by\"\n                       (ngModelChange)=\"mySaleCallVisitOutside.travel_by=$event\"\n                >Other MKT\n                <span></span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col-md-8 form-group\" *ngIf=\"mySaleCallVisitOutside?.travel_by=='OTH'\">\n            <label>MKT Name</label>\n            <select class=\"form-control\"\n                    [ngModel]=\"mySaleCallVisitOutside?.travel_name\"\n                    (ngModelChange)=\"mySaleCallVisitOutside.travel_name =$event;\" >\n              <option [value]=\"\"></option>\n              <option *ngFor=\"let ansOFFICER of ListMKT\"\n                      [selected]=\"ansOFFICER?.id == mySaleCallVisitOutside?.travel_name\"\n                      [value]=\"ansOFFICER?.id\">{{ansOFFICER?.display}}\n              </option>\n            </select>\n\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <label>From Time</label>\n            <input type=\"time\" class=\"form-control\"\n                   [ngModel]=\"mySaleCallVisitOutside?.from_time\"\n                   (ngModelChange)=\"mySaleCallVisitOutside.from_time=$event\"\n                   placeholder=\"00:00\">\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <label>To Time</label>\n            <input type=\"time\" class=\"form-control\"\n                   [ngModel]=\"mySaleCallVisitOutside?.to_time\"\n                   (ngModelChange)=\"mySaleCallVisitOutside.to_time=$event\"\n                   placeholder=\"00:00\">\n          </div>\n          <div class=\"col-md-4 form-group\">\n            <label>Mile Start</label>\n            <input type=\"text\" class=\"form-control\"\n                   appMyCurrency [fraction]=\"0\"\n                   [value]=\"mySaleCallVisitOutside?.mile_start\"\n                   (change)=\"mySaleCallVisitOutside.mile_start=$event.target.value\"\n                   (blur)=\"calExpenseAmount()\"\n                   >\n          </div>\n          <div class=\"col-md-4 form-group\">\n            <label>Mile End</label>\n            <input type=\"text\" class=\"form-control\"\n                   appMyCurrency  [fraction]=\"0\"\n                   [value]=\"mySaleCallVisitOutside?.mile_end\"\n                   (change)=\"mySaleCallVisitOutside.mile_end=$event.target.value\"\n                   (blur)=\"calExpenseAmount()\"\n                   >\n          </div>\n          <div class=\"col-md-4 form-group\">\n            <label>Mile Total</label>\n            <input type=\"number\" class=\"form-control\"\n                   appMyCurrency\n                   [value]=\"miletotal\"\n                   disabled>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <label>Amount/Km</label><br>\n            <input type=\"text\" class=\"form-control\" style=\"display: inline; width: 70%\"\n                   appMyCurrency\n                   [value]=\"mySaleCallVisitOutside?.prce_per_km\"\n                   disabled\n                   >\n            <label>Baht/Km.</label>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <label>Total Amount</label>\n            <input type=\"text\" class=\"form-control\" style=\"display: inline; width: 80%\"\n                   appMyCurrency\n                   [value]=\"mySaleCallVisitOutside?.withdraw_amt\"\n                   disabled\n                   >\n            <label>Baht</label>\n          </div>\n\n          <div class=\"col-md-12 form-group\">\n            <label>Joiner List</label>\n            <div class=\"form-control\" >\n\n              <app-custom-botton-icon [option]=\"'new'\"  (onBtnClick)=\"openDialogAttendees()\" > </app-custom-botton-icon>\n              <app-custom-botton-icon [option]=\"'delete'\"  (onBtnClick)=\"deleteJoiner()\" > </app-custom-botton-icon>\n\n\n              <p-dataTable [value]=\"joinerList\"\n                           scrollHeight=\"100px\"\n                           [responsive]=\"true\"\n                           selectionMode=\"single\"\n                           [(selection)]=\"selectjoinerList\" >\n                <p-column field=\"display\" header=\"Name\"></p-column>\n\n              </p-dataTable>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!-------------------  Right   ------------------>\n      <div class=\"col-md-6 form-group\" style=\"height: 450px\">\n        <label>Address Description</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"mySaleCallVisitOutside.visit_detail\"  style=\"height: 95%\">\n          {{mySaleCallVisitOutside?.visit_detail}}\n        </textarea>\n      </div>\n      <!--<div class=\"col-md-6 form-group\" style=\"height: 450px\">-->\n        <!--<label>Address Description</label>-->\n        <!--<textarea class=\"form-control\" [(ngModel)]=\"mySaleCallVisitOutside.visit_detail\"  style=\"height: 10%\">-->\n          <!--{{mySaleCallVisitOutside?.visit_detail}}-->\n        <!--</textarea>-->\n        <!--<agm-map [latitude]=\"lat\" [longitude]=\"lng\">-->\n          <!--<agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>-->\n        <!--</agm-map>-->\n      <!--</div>-->\n\n    </div>\n  </fieldset>\n</div>\n\n\n<app-action-dialog  [title]=\"'Question ? '\"  #listAttendee\n                    [showAdd]=\"true\"  (onAdd)=\"okAddAttendees()\"\n                    [showCancel]=\"true\" >\n  <label> ยืนยันการดึงรายชื่อจาก Attendess </label>\n</app-action-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-expense/call-visit-expense.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallVisitExpenseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_VisitOutSide__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-VisitOutSide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sale_call_visit_service__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_center_action_dialog_action_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/action-dialog/action-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CallVisitExpenseComponent = /** @class */ (function () {
    function CallVisitExpenseComponent(saleCallVisitService) {
        this.saleCallVisitService = saleCallVisitService;
        this.mySaleCallVisitOutside = new __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_VisitOutSide__["a" /* SaleCallVisitOutSide */]();
        this.joinerList = [];
        this.lat = 13.725911;
        this.lng = 100.528653;
        this.componentReadOnly = true;
    }
    CallVisitExpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.saleCallVisitService.selectsaleD.visitOutSide) {
            this.mySaleCallVisitOutside = this.saleCallVisitService.selectsaleD.visitOutSide;
            this.ListEMP = this.saleCallVisitService.ListEMP;
            this.ListMKT = this.saleCallVisitService.ListOFFICER;
            this.TravelAmount = this.saleCallVisitService.TravelAmount;
            this.mySaleCallVisitOutside.prce_per_km = this.TravelAmount.id;
            this.onCreaterjoinerList(this.mySaleCallVisitOutside.joiner);
            this.calExpenseAmount();
            if (this.saleCallVisitService.selectsaleD.submit_flg == 'Y') {
                this.componentReadOnly = true;
            }
            else {
                this.componentReadOnly = false;
            }
        }
        this.subscription = this.saleCallVisitService.eventselectsaleD.subscribe(function (obj) {
            _this.mySaleCallVisitOutside = obj.visitOutSide;
            _this.ListEMP = _this.saleCallVisitService.ListEMP;
            _this.ListMKT = _this.saleCallVisitService.ListOFFICER;
            _this.TravelAmount = _this.saleCallVisitService.TravelAmount;
            _this.mySaleCallVisitOutside.prce_per_km = _this.TravelAmount.id;
            _this.onCreaterjoinerList(_this.mySaleCallVisitOutside.joiner);
            // console.log('visit Out side');
            // console.log(obj);
            if (obj.submit_flg == 'Y') {
                _this.componentReadOnly = true;
            }
            else {
                _this.componentReadOnly = false;
            }
            _this.calExpenseAmount();
        });
    };
    CallVisitExpenseComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CallVisitExpenseComponent.prototype.openDialogAttendees = function () {
        this.listAttendee.open();
    };
    CallVisitExpenseComponent.prototype.okAddAttendees = function () {
        // console.log(this.saleCallVisitService.selectsaleD.listAttendeesB);
        var attendeesB = this.saleCallVisitService.selectsaleD.listAttendeesB;
        if ((attendeesB) && (attendeesB.length > 0)) {
            var stringAttendees = '';
            for (var i = 0; i < attendeesB.length; i++) {
                if (i == 0) {
                    stringAttendees = attendeesB[i].attnd_name;
                }
                else {
                    stringAttendees = stringAttendees + ',' + attendeesB[i].attnd_name.trim();
                }
            }
            this.onCreaterjoinerList(stringAttendees);
        }
    };
    CallVisitExpenseComponent.prototype.onCreaterjoinerList = function (stringAttendees) {
        this.mySaleCallVisitOutside.joiner = stringAttendees;
        this.joinerList = [];
        //console.log(stringAttendees);
        if (stringAttendees) {
            var afSplitJoiner_1 = stringAttendees.split(',');
            var _loop_1 = function (i) {
                var tempobj = this_1.ListEMP.find(function (ObjTemp) { return ObjTemp.id == afSplitJoiner_1[i]; });
                this_1.joinerList = this_1.joinerList.concat([tempobj]);
            };
            var this_1 = this;
            //console.log(afSplitJoiner);
            for (var i = 0; i < afSplitJoiner_1.length; i++) {
                _loop_1(i);
            }
        }
    };
    CallVisitExpenseComponent.prototype.deleteJoiner = function () {
        if ((this.joinerList) && (this.selectjoinerList)) {
            var delRow = this.joinerList.indexOf(this.selectjoinerList);
            this.joinerList.splice(delRow, 1);
            var strjoiner = '';
            for (var i = 0; i < this.joinerList.length; i++) {
                if (i == 0) {
                    strjoiner = this.joinerList[i].id;
                }
                else {
                    strjoiner = strjoiner + ',' + this.joinerList[i].id;
                }
            }
            this.joinerList = this.joinerList.slice();
            this.mySaleCallVisitOutside.joiner = strjoiner;
        }
    };
    CallVisitExpenseComponent.prototype.calExpenseAmount = function () {
        if (this.mySaleCallVisitOutside.mile_end == 0) {
            this.mySaleCallVisitOutside.mile_end = this.mySaleCallVisitOutside.mile_start;
        }
        //console.log('');
        this.miletotal = this.mySaleCallVisitOutside.mile_end - this.mySaleCallVisitOutside.mile_start;
        if (this.miletotal) {
            this.mySaleCallVisitOutside.withdraw_amt = this.miletotal * this.mySaleCallVisitOutside.prce_per_km;
        }
        else {
            this.mySaleCallVisitOutside.withdraw_amt = 0;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listAttendee'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], CallVisitExpenseComponent.prototype, "listAttendee", void 0);
    CallVisitExpenseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-visit-expense',
            template: __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-expense/call-visit-expense.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-expense/call-visit-expense.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sale_call_visit_service__["a" /* SaleCallVisitService */]])
    ], CallVisitExpenseComponent);
    return CallVisitExpenseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-exposure/call-visit-exposure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-exposure/call-visit-exposure.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"border-style: solid; border-width: 1px; border-radius: 10px\" >\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-12 form-group p-1\" >\n        <div class=\"container\" style=\"margin: 0; width: 100%;padding: 0px\">\n          <div class=\"portlet grey-cascade box\">\n\n            <p-dataTable [responsive]=\"true\"\n                         [value]=\"this.listExposure\"\n                         scrollable=\"true\" scrollHeight=\"400px\">\n              <p-column field=\"product\" header=\"Products\"></p-column>\n              <p-column field=\"exposure\" header=\"Exposure\" [style]=\"{'text-align':'right'}\">\n                <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n                  <span>{{ row[col.field] |  number:'.2-2'  }}</span>\n                </ng-template>\n              </p-column>\n              <p-column field=\"os_balance\" header=\"OS Balance\" [style]=\"{'text-align':'right'}\">\n                <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n                  <span>{{ row[col.field] |  number:'.2-2'  }}</span>\n                </ng-template>\n              </p-column>\n              <p-column field=\"maturity_date\" header=\"Maturity Date\"></p-column>\n              <p-column field=\"highest_amt\" header=\"Highest Amount\" [style]=\"{'text-align':'right'}\">\n                <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n                  <span>{{ row[col.field] |  number:'.2-2'  }}</span>\n                </ng-template>\n              </p-column>\n              <p-column field=\"with_collateral\" header=\"With Collateral\" [style]=\"{'text-align':'right'}\">\n                <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n                  <span>{{ row[col.field] |  number:'.2-2'  }}</span>\n                </ng-template>\n              </p-column>\n              <p-column field=\"with_out_collateral\" header=\"Without Collateral\" [style]=\"{'text-align':'right'}\">\n                <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n                  <span>{{ row[col.field] |  number:'.2-2'  }}</span>\n                </ng-template>\n              </p-column>\n            </p-dataTable>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-exposure/call-visit-exposure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallVisitExposureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_Exposure__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Exposure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__call_visit_exposure_service__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-exposure/call-visit-exposure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CallVisitExposureComponent = /** @class */ (function () {
    function CallVisitExposureComponent(exposureService, userStorage) {
        this.exposureService = exposureService;
        this.userStorage = userStorage;
        this.listExposure = [];
        this.username = "";
    }
    CallVisitExposureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.userStorage.getUserName();
        this.New_card_no = this.exposureService.getNewCardNO();
        this.listExposure = this.exposureService.getExposure();
        if (this.New_card_no) {
            this.onCallExposure(this.New_card_no);
        }
        this.subscriptionNewcard = this.exposureService.eventCardNo.subscribe(function (vcard) {
            _this.onCallExposure(vcard);
        });
    };
    CallVisitExposureComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CallVisitExposureComponent.prototype.onCallExposure = function (vcard) {
        var _this = this;
        this.subscription = this.exposureService.getExposureService("web", this.username, vcard).subscribe(function (data) {
            //console.log(data);
            _this.listExposure = __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_Exposure__["a" /* SaleCallExposure */].parse(data.LIST_DATA);
            _this.exposureService.setExposure(_this.listExposure);
        });
    };
    CallVisitExposureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-visit-exposure',
            template: __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-exposure/call-visit-exposure.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-exposure/call-visit-exposure.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__call_visit_exposure_service__["a" /* CallVisitExposureservice */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], CallVisitExposureComponent);
    return CallVisitExposureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-exposure/call-visit-exposure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallVisitExposureservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
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
 * Created by pongsatorn.an on 24/08/2560.
 */
var CallVisitExposureservice = /** @class */ (function () {
    function CallVisitExposureservice(http, service) {
        this.http = http;
        this.service = service;
        this.exposure = [];
        this.eventCardNo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log('----- Create Exposure Service');
    }
    CallVisitExposureservice.prototype.getExposureService = function (device, username, newCardNo) {
        var url = this.service.url + this.service.sale_call_api + ("/ask/salecall/GetExposure?device=web&user=" + username + "&caNo=&thisApprove=0&newCardNo=" + newCardNo);
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.get(url, options);
    };
    CallVisitExposureservice.prototype.setExposure = function (inExposure) {
        this.exposure = inExposure;
    };
    CallVisitExposureservice.prototype.getExposure = function () {
        return this.exposure;
    };
    CallVisitExposureservice.prototype.setNewCardNO = function (value) {
        this.newCardNo = value;
        this.eventCardNo.emit(value);
    };
    CallVisitExposureservice.prototype.getNewCardNO = function () {
        return this.newCardNo;
    };
    CallVisitExposureservice = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__["a" /* ServiceEndpoint */]])
    ], CallVisitExposureservice);
    return CallVisitExposureservice;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-result/call-visit-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-result/call-visit-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  >\n  <fieldset [disabled]=\"componentReadOnly\" >\n   <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <div class=\"col-md-7 form-group\">\n          <label>Call/Visit Type</label>\n          <div class=\"container form-control\"\n               style=\"width: 100%; border-style: solid; border-width: 1px; border-radius: 10px; padding-top: 5px;\">\n            <label class=\"mt-radio\">\n              <input type=\"radio\" name=\"CallVisittype\"\n                     value=\"CF\"\n                     [ngModel]=\"thisSaleCallD?.sale_call_type\"\n                     (ngModelChange)=\"thisSaleCallD.sale_call_type=$event\"\n                     [disabled]=\"componentReadOnly\"\n              > Call Found\n              <span></span>\n            </label>\n            <label class=\"mt-radio\">\n              <input type=\"radio\" name=\"CallVisittype\"\n                     value=\"CNF\"\n                     [ngModel]=\"thisSaleCallD?.sale_call_type\"\n                     (ngModelChange)=\"thisSaleCallD.sale_call_type=$event\"\n                     [disabled]=\"componentReadOnly\"> Call not Found\n              <span></span>\n            </label>\n            <label class=\"mt-radio\">\n              <input type=\"radio\" name=\"CallVisittype\"\n                     value=\"V\"\n                     [ngModel]=\"thisSaleCallD?.sale_call_type\"\n                     (ngModelChange)=\"thisSaleCallD.sale_call_type=$event;visitClick();\"\n                     [disabled]=\"componentReadOnly\"> Visit\n              <span></span>\n            </label>\n          </div>\n        </div>\n        <div class=\"col-md-5 form-group\">\n          <label class=\"col-form-label\">Call/Visit Date</label>\n          <span class=\"text-danger\">*</span>\n          <p-calendar dateFormat=\"dd/mm/yy\"  inputStyleClass=\"form-control\"\n                      [ngModel]=\"thisSaleCallD?.sale_call_dt\"\n                      (ngModelChange)=\"thisSaleCallD.sale_call_dt=Changedate($event)\"\n                      [disabled]=\"componentReadOnly\"\n          ></p-calendar>\n        </div>\n        <div class=\"col-md-12 form-group\" *ngIf=\"thisSaleCallD?.sale_call_type == 'V' \" >\n          <label>Visit Purpose</label>\n          <select class=\"form-control w-50\"\n                  [ngModel]=\"thisSaleCallD?.purpose\"\n                  (ngModelChange)=\"thisSaleCallD.purpose =$event;\">\n            <option></option>\n            <option *ngFor=\"let ansPur of ListVisitPur\"\n                    [selected]=\"ansPur?.id == thisSaleCallD?.purpose\"\n                    [value]=\"ansPur?.id\">{{ansPur?.display}}\n            </option>\n          </select>\n        </div>\n        <div class=\"col-md-12 form-group\">\n          <label>Call/Visit Note</label>\n          <span class=\"text-danger\">*</span>\n          <textarea class=\"form-control\"   [maxlength]=\"500\"\n                    [ngModel]=\"thisSaleCallD?.sale_call_note\"\n                    (ngModelChange)=\"thisSaleCallD.sale_call_note=$event\"\n                    [disabled]=\"componentReadOnly\">\n          </textarea>\n        </div>\n        <div class=\"col-md-6 form-group\">\n          <label>Interview</label><span class=\"text-danger\">*</span><br>\n          <div class=\"form-inline\">\n            <input type=\"text\" class=\"form-control\" style=\"display: inline;width: auto;text-align: right;\"\n                   [ngModel]=\"thisSaleCallD?.interview\"  pKeyFilter=\"int\"\n                   (ngModelChange)=\"thisSaleCallD.interview=$event\"\n                   [disabled]=\"componentReadOnly\" >\n            <label>&nbsp; Minute</label>\n          </div>\n        </div>\n        <div class=\"col-md-6 form-group\"  *ngIf=\"thisSaleCallD?.sale_call_type == 'V' \" >\n          <label>Traffic Time</label><br>\n          <div class=\"form-inline\">\n          <input type=\"text\" class=\"form-control\"  style=\"text-align: right;\"\n                 [ngModel]=\"thisSaleCallD?.traffic\" pKeyFilter=\"int\"\n                 (ngModelChange)=\"thisSaleCallD.traffic=$event\"\n                 [disabled]=\"componentReadOnly\" >\n          <label>&nbsp; Minute</label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!------------   Right    ----------->\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <div class=\"col-md-12 form-group\">\n          <label>Summary Call Result</label>\n          <div class=\"container  form-control\"\n               style=\"width: 100%; border-style: solid; border-width: 1px; border-radius: 10px; padding-top: 5px;\">\n            <label class=\"mt-radio\">\n              <input type=\"radio\" name=\"Result\"\n                     value=\"P\"\n                     (change)=\"changeResult()\"\n                     [ngModel]=\"thisSaleCallD?.call_result_flg\"\n                     (ngModelChange)=\"thisSaleCallD.call_result_flg=$event\"\n                     [disabled]=\"componentReadOnly\">\n              Prepare CA\n              <span></span>\n            </label>\n            <label class=\"mt-radio\">\n              <input type=\"radio\" name=\"Result\"\n                     value=\"F\"\n                     (change)=\"changeResult()\"\n                     [ngModel]=\"thisSaleCallD?.call_result_flg\"\n                     (ngModelChange)=\"thisSaleCallD.call_result_flg=$event\"\n                     [disabled]=\"componentReadOnly\">\n              Follow Up\n              <span></span>\n            </label>\n            <label class=\"mt-radio\">\n              <input type=\"radio\" name=\"Result\"\n                     value=\"R\"\n                     (change)=\"changeResult()\"\n                     [ngModel]=\"thisSaleCallD?.call_result_flg\"\n                     (ngModelChange)=\"thisSaleCallD.call_result_flg=$event\"\n                     [disabled]=\"componentReadOnly\">\n              Reject\n              <span></span>\n            </label>\n          </div>\n        </div>\n        <div class=\"col-md-12 form-group\" *ngIf=\"ReasonShow\">\n          <label>Reason</label>\n          <select class=\"form-control\" (change)=\"selectResult($event.target.value)\"  [disabled]=\"componentReadOnly\" >\n            <option></option>\n            <option *ngFor=\"let ansREASON of ListReason\"\n                    [selected]=\"ansREASON?.id == thisSaleCallD?.call_result_detail\"\n                    [value]=\"ansREASON?.id\">{{ansREASON?.display}}\n            </option>\n\n          </select>\n        </div>\n        <div clase=\"col-md-12\" *ngIf=\"FollowShow\">\n          <div class=\"row  border-isa m-1\" >\n            <div class=\"col-md-6 form-group\">\n              <label>Follow Up/Date</label>\n              <p-calendar\n                          dateFormat=\"dd/mm/yy\"\n                          [ngModel]=\"thisSaleCallD?.follow_date\"\n                          (ngModelChange)=\"thisSaleCallD.follow_date=Changedate($event)\"\n                          [disabled]=\"componentReadOnly\"></p-calendar>\n            </div>\n            <div class=\"col-md-3 form-group\">\n              <div class=\"d-flex align-self-center\" style=\"margin-top: 20px;height: 80%;width: 100% \">\n                <button style=\"width: 100%;\" (click)=\"addDay(7)\" [disabled]=\"componentReadOnly\" >7 Days</button>\n              </div>\n            </div>\n            <div class=\"col-md-3 form-group\">\n              <div class=\"d-flex align-self-center\" style=\"margin-top: 20px;height: 80%;width: 100%\">\n                <button style=\"width: 100%;\" (click)=\"addDay(90)\" [disabled]=\"componentReadOnly\" >90 Days</button>\n              </div>\n            </div>\n            <div class=\"col-md-12 form-group\">\n              <label>Follow Up Note</label>\n              <textarea class=\"form-control\"   [maxlength]=\"500\"\n                        [ngModel]=\"thisSaleCallD?.follow_up_point\"\n                        (ngModelChange)=\"thisSaleCallD.follow_up_point=$event\"\n                        [disabled]=\"componentReadOnly\">\n              </textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!---------------Bottom  ------------>\n    <div class=\"col-md-12\" >\n      <label>Contact Person</label>\n      <div class=\"row  border-isa\">\n        <div class=\"col-md-12\">\n          <app-custom-botton-icon [option]=\"'new'\" (onBtnClick)=\"openContract()\"  ></app-custom-botton-icon>\n          <app-contactperson #dialogcontactperson     (onContactSelect)=\"getContact($event)\" ></app-contactperson>\n          <app-custom-botton-icon [option]=\"'delete'\" (onBtnClick)=\"clearContact()\"  ></app-custom-botton-icon>\n        </div>\n        <div class=\"col-md-2 form-group\">\n          <label>Contact Code</label>\n          <input  class=\"form-control\" type=\"text\" disabled [ngModel]=\"thisSaleCallD?.cont_person_code\" >\n        </div>\n        <div class=\"col-md-4 form-group\">\n          <label>Name(Eng)</label>\n          <input  class=\"form-control\" type=\"text\" disabled [ngModel]=\"thisSaleCallD?.name_en\">\n        </div>\n        <div class=\"col-md-4 form-group\">\n          <label>Name(Thai)</label>\n          <input  class=\"form-control\" type=\"text\" disabled [ngModel]=\"thisSaleCallD?.name_th\">\n        </div>\n        <div class=\"col-md-2 form-group\">\n          <label>Position</label>\n          <input type=\"text\" class=\"form-control\"  disabled  [ngModel]=\"thisSaleCallD?.position\">\n        </div>\n\n        <div class=\"col-md-3 form-group\">\n          <label>Phone</label>\n          <input type=\"text\" class=\"form-control\"  disabled  [ngModel]=\"thisSaleCallD?.phone\">\n        </div>\n        <div class=\"col-md-3 form-group\">\n          <label>Ext</label>\n          <input type=\"text\" class=\"form-control\"  disabled  [ngModel]=\"thisSaleCallD?.phone_ext\">\n        </div>\n        <div class=\"col-md-2 form-group\">\n          <label>Moblie</label>\n          <input type=\"text\" class=\"form-control\"  disabled  [ngModel]=\"thisSaleCallD?.mobile\">\n        </div>\n        <div class=\"col-md-4 form-group\">\n          <label>E-Mail</label>\n          <input type=\"text\" class=\"form-control\"  disabled  [ngModel]=\"thisSaleCallD?.email\">\n        </div>\n      </div>\n    </div>\n\n  </div>\n  </fieldset>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-result/call-visit-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallVisitResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_Detail__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Detail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sale_call_visit_service__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactperson_contactperson_component__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/contactperson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CallVisitResultComponent = /** @class */ (function () {
    function CallVisitResultComponent(saleCallVisitService, dataPipe) {
        this.saleCallVisitService = saleCallVisitService;
        this.dataPipe = dataPipe;
        this.componentReadOnly = true;
        this.ReasonShow = false;
        this.FollowShow = false;
    }
    CallVisitResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.thisSaleCallD = new __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_Detail__["a" /* SaleCallDetail */]();
        this.subscription = this.saleCallVisitService.eventselectsaleD.subscribe(function (obj) {
            _this.thisSaleCallD = obj;
            _this.changeResult();
            _this.ListVisitPur = _this.saleCallVisitService.ListVisit;
            _this.ListFNMT = _this.saleCallVisitService.ListFNMT;
            _this.ListFNME = _this.saleCallVisitService.ListFNME;
            if (_this.thisSaleCallD.submit_flg == 'Y') {
                _this.componentReadOnly = true;
            }
            else {
                _this.componentReadOnly = false;
            }
        });
    };
    CallVisitResultComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CallVisitResultComponent.prototype.changeResult = function () {
        this.ListReason = [];
        if (this.thisSaleCallD.call_result_flg == "P") {
            this.ListReason = this.saleCallVisitService.ListREASONP;
            this.FollowShow = false;
        }
        else if (this.thisSaleCallD.call_result_flg == "F") {
            this.ListReason = this.saleCallVisitService.ListREASONF;
            this.FollowShow = true;
        }
        else if (this.thisSaleCallD.call_result_flg == "R") {
            this.FollowShow = true;
            if (this.thisSaleCallD.sale_call_type == "CF") {
                this.ListReason = this.saleCallVisitService.ListREASONRCF;
            }
            else if (this.thisSaleCallD.sale_call_type == "CNF") {
                this.ListReason = this.saleCallVisitService.ListREASONRCNF;
            }
            else if (this.thisSaleCallD.sale_call_type == "V") {
                this.ListReason = this.saleCallVisitService.ListREASONR;
            }
        }
        if (this.ListReason.length == 0)
            this.ReasonShow = false;
        else
            this.ReasonShow = true;
    };
    CallVisitResultComponent.prototype.Changedate = function (indate) {
        //console.log("input" + indate.constructor.name);
        var strDate = this.dataPipe.transform(indate, 'dd/MM/yyyy');
        //console.log("result" + strDate.constructor.name);
        return strDate;
    };
    CallVisitResultComponent.prototype.selectResult = function (select) {
        this.SelectReason = this.ListReason.find(function (ObjTemp) { return ObjTemp.id == select; });
        this.thisSaleCallD.call_result_detail = this.SelectReason.id;
        this.thisSaleCallD.call_result_detail_desc = this.SelectReason.display;
    };
    CallVisitResultComponent.prototype.addDay = function (value) {
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + value);
        this.thisSaleCallD.follow_date = this.Changedate(currentDate);
    };
    CallVisitResultComponent.prototype.visitClick = function () {
        console.log('visit refresh');
        this.saleCallVisitService.reFreshSelectsaleD();
    };
    CallVisitResultComponent.prototype.openContract = function () {
        //  this.dialogContract.setTitle('Contact Of Customer');
        this.dialogcontactperson.setFNMT(this.ListFNMT);
        this.dialogcontactperson.setFNME(this.ListFNME);
        this.dialogcontactperson.showDialog();
    };
    CallVisitResultComponent.prototype.getContact = function (contact) {
        console.log(contact);
        if (contact) {
            this.thisSaleCallD.cont_person_code = contact.cont_person_code;
            this.thisSaleCallD.name_en = contact.name_en;
            this.thisSaleCallD.name_th = contact.name_th;
            this.thisSaleCallD.position = contact.position;
            this.thisSaleCallD.phone = contact.phone;
            this.thisSaleCallD.phone_ext = contact.phone_ext;
            this.thisSaleCallD.mobile = contact.mobile;
            this.thisSaleCallD.email = contact.email;
        }
    };
    CallVisitResultComponent.prototype.clearContact = function () {
        this.thisSaleCallD.cont_person_code = '';
        this.thisSaleCallD.name_en = '';
        this.thisSaleCallD.name_th = '';
        this.thisSaleCallD.position = '';
        this.thisSaleCallD.phone = '';
        this.thisSaleCallD.phone_ext = '';
        this.thisSaleCallD.mobile = '';
        this.thisSaleCallD.email = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogcontactperson'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__contactperson_contactperson_component__["a" /* ContactpersonComponent */])
    ], CallVisitResultComponent.prototype, "dialogcontactperson", void 0);
    CallVisitResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-visit-result',
            template: __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-result/call-visit-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-result/call-visit-result.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__sale_call_visit_service__["a" /* SaleCallVisitService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]])
    ], CallVisitResultComponent);
    return CallVisitResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-telesale/call-visti-telesale.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel  header=\"Personal Loan\">\n  <div class=\"main-container \">\n    <div class=\"row\">\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Refer Old Agr/Sale Call No.</label>\n          <input type=\"text\" class=\"form-control\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label> Employee </label>\n            <app-search-un app-search-un  [iconOnly]=\"false\"   title=\"NAME;CODE;\">\n            </app-search-un>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Requested Credit Line</label>\n          <span class=\"star\">*</span>\n          <input type=\"text\" class=\"form-control\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-1\">\n        <div class=\"form-group\">\n          <label>Tenor</label>\n          <span class=\"star\">*</span>\n          <input type=\"text\" class=\"form-control\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Front-end Fee</label>\n          <input type=\"text\" class=\"form-control\"  style=\"text-align: right\"  [value]=\"0.00\"  disabled  >\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Campaign</label>\n          <span class=\"star\">*</span>\n          <input type=\"text\" class=\"form-control\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-2\">\n        <div class=\"form-group\">\n          <label>Interest Rate(%)</label>\n          <input type=\"text\" class=\"form-control\" style=\"text-align: right\"  [value]=\"0.00\" disabled  >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-2\">\n        <div class=\"form-group\">\n          <label>Facility Rate(%)</label>\n          <input type=\"text\" class=\"form-control\" style=\"text-align: right\"  [value]=\"0.00\"  disabled  >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Installment</label>\n          <input type=\"text\" class=\"form-control\" style=\"text-align: right\"  [value]=\"0.00\"  disabled  >\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-telesale/call-visti-telesale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallVistiTelesaleComponent; });
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

var CallVistiTelesaleComponent = /** @class */ (function () {
    function CallVistiTelesaleComponent() {
    }
    CallVistiTelesaleComponent.prototype.ngOnInit = function () {
    };
    CallVistiTelesaleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-visti-telesale',
            template: __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-telesale/call-visti-telesale.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CallVistiTelesaleComponent);
    return CallVistiTelesaleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-head/call-visit-head.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-head/call-visit-head.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid m-2\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <div class=\"form-group\" *ngIf=\"comCode != 'BGPL'\">\n        <label>Information</label>\n        <div class=\"container\"\n             style=\"border-style: solid; border-width: 1px; border-radius: 10px; padding-top: 5px;\">\n          <label class=\"mt-radio\">\n            <input type=\"radio\" name=\"radioinfo\"\n                   [checked]=\"this.saleCallH?.dealer_type ==='N'\"\n                   (click)=\"this.saleCallH.DEALER_TYPE='N'\"\n            > Customer\n            <span></span>\n          </label><br>\n          <label class=\"mt-radio\">\n            <input type=\"radio\" name=\"radioinfo\"\n                   [checked]=\"this.saleCallH?.dealer_type === 'Y'\"\n                   (click)=\"this.saleCallH.DEALER_TYPE='Y'\"\n            > Dealer\n            <span></span>\n          </label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\"   >\n        <label>Type Of Customer</label>\n        <div class=\"container form-control\" aria-readonly=\"true\"\n            >\n          <label class=\"mt-radio\">\n            <input type=\"radio\" name=\"Custype\"  disabled\n                   [checked]=\"this.saleCallH?.cus_status  === 'N'\"\n                   (click)=\"this.saleCallH.cus_status='N'\"\n            > New\n            <span></span>\n          </label><br>\n          <label class=\"mt-radio\">\n            <input type=\"radio\" name=\"Custype\" disabled\n                   [checked]=\"this.saleCallH?.cus_status === 'E'\"\n                   (click)=\"this.saleCallH.cus_status='E'\"\n            > Existing\n            <span></span>\n          </label><br>\n          <label class=\"mt-radio\">\n            <input type=\"radio\" name=\"Custype\" disabled\n                   [checked]=\"this.saleCallH?.cus_status === 'O'\"\n                   (click)=\"this.saleCallH.cus_status='O'\"> Old\n            <span></span>\n          </label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>Customer Code </label>\n        <input type=\"text\" class=\"form-control\"\n               value=\"{{saleCallH?.comp_ent_code}}\" disabled>\n      </div>\n      <div class=\"form-group\">\n        <label>Card ID </label>\n        <input type=\"text\" class=\"form-control\"   [disabled]=\"saleCallH.comp_ent_code\"\n                pTooltip=\"Ex. 9999999999999\"\n               [ngModel]=\"saleCallH?.new_card_no\" (blur)=\"onNewCardchkEntity($event.target.value,'')\"\n               (ngModelChange)=\"saleCallH.new_card_no = $event\">\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>Sale Call No </label>\n        <input type=\"text\" class=\"form-control\" disabled\n               value=\"{{saleCallH?.sale_call_no}}\">\n      </div>\n      <div class=\"form-group\">\n        <label>Pre Branch</label>\n        <select class=\"form-control\"\n                [ngModel]=\"saleCallH?.prebranch_code\"\n                (ngModelChange)=\"saleCallH.prebranch_code =$event;\">\n          <option></option>\n          <option *ngFor=\"let ansPre of ListPrebranch\"\n                  [selected]=\"saleCallH.prebranch_code ==ansPre?.id\"\n                  [value]=\"ansPre?.id\">{{ansPre?.display}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"d-flex align-self-center invisible\" style=\"height: 110px;margin-top: 20px;\">\n        <button  >Customer Detail</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"saleCallH?.sale_call_no == '' \" >\n    <button type=\"button\" class=\"btn btn-primary my-1\"\n            (click)=\"openEntity()\"  >\n      <i class=\"fa fa-search\"></i>\n      Find Exist Customer\n    </button>\n    <app-entity-dialog #entity_dialog title=\"Customer\"\n    (onEntitySelect)=\"checkEntity($event)\"></app-entity-dialog>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 form-group\">\n      <label>Intial(Thai)</label>\n      <select class=\"form-control\"\n              [ngModel]=\"saleCallH?.f_name\"\n              (ngModelChange)=\"saleCallH.f_name=$event;mapIntial('T') \">\n        <option></option>\n        <option *ngFor=\"let ansFNMT of ListFNMT\"\n                [selected]=\"ansFNMT?.id == saleCallH?.f_name  \"\n                [value]=\"ansFNMT?.id\">{{ansFNMT?.display}}\n      </select>\n    </div>\n    <div class=\"col-md-4 form-group\">\n      <label>First Name(Thai)</label>\n      <input type=\"text\" class=\"form-control\"  [maxlength]=\"70\"\n             [ngModel]=\"saleCallH?.comp_tha_nme\"\n             (ngModelChange)=\"saleCallH.comp_tha_nme=$event\">\n    </div>\n    <div class=\"col-md-4 form-group\">\n      <label>Last Name(Thai)</label>\n      <input type=\"text\" class=\"form-control\"  [maxlength]=\"70\"\n             [ngModel]=\"saleCallH?.comp_l_tha_nme\"\n             (ngModelChange)=\"saleCallH.comp_l_tha_nme=$event\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 form-group\">\n      <label>Intial(Eng)</label>\n      <select class=\"form-control\"\n              [ngModel]=\"saleCallH?.f_name_e\"\n              (ngModelChange)=\"saleCallH.f_name_e =$event;mapIntial('E')\">\n        <option></option>\n        <option *ngFor=\"let ansFNME of ListFNME\"\n                [selected]=\"ansFNME?.id == saleCallH?.f_name_e \"\n                [value]=\"ansFNME?.id\">{{ansFNME?.display}}\n        </option>\n      </select>\n    </div>\n    <div class=\"col-md-4 form-group\">\n      <label>First Name(Eng)</label>\n      <input type=\"text\" class=\"form-control\"  [maxlength]=\"70\"\n             [ngModel]=\"saleCallH?.comp_eng_nme\"\n             (ngModelChange)=\"saleCallH.comp_eng_nme =$event;\">\n    </div>\n    <div class=\"col-md-4 form-group\">\n      <label>Last Name(Eng)</label>\n      <input type=\"text\" class=\"form-control\"  [maxlength]=\"70\"\n             [ngModel]=\"saleCallH?.comp_l_eng_nme\"\n             (ngModelChange)=\"saleCallH.comp_l_eng_nme =$event;\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-5 form-group\">\n      <label>Source</label>\n      <select class=\"form-control\"\n              [ngModel]=\"saleCallH?.source\"\n              (ngModelChange)=\"changeSource($event)\">\n        <option></option>\n        <option *ngFor=\"let ansSOURCE of ListSOURCE\"\n                [selected]=\"ansSOURCE?.id == saleCallH?.source\"\n                [value]=\"ansSOURCE?.id\">{{ansSOURCE?.display}}\n        </option>\n\n      </select>\n    </div>\n    <div class=\"col-md-5 form-group\">\n      <label>Introduce By </label><br>\n      <div class=\"row\">\n        <div class=\"col-md-10\">\n          <input type=\"text\" class=\"form-control\"\n                 [value]=\"intro_by ? intro_by : ''\" [disabled]=\"!inputIntro\">\n        </div>\n        <div class=\"col-md-2\">\n          <app-search-un inuURL={{OutURL}}\n                         title=\"NAME;CODE;\"\n                         (col1)=\"setIntroName($event)\"\n                         (col2)=\"setIntroValue($event)\"\n                         [ngClass]=\"{'invisible':inputIntro}\">\n          </app-search-un>\n        </div>\n      </div>\n\n\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-5 form-group\">\n      <label>Marketing Officer</label>\n      <select class=\"form-control\"  disabled\n              [ngModel]=\"saleCallH?.ownr\"\n              (ngModelChange)=\"saleCallH.ownr=$event\">\n        <option></option>\n        <option *ngFor=\"let ansOFFICER of ListOFFICER\"\n                [selected]=\"ansOFFICER?.id == saleCallH?.ownr\"\n                [value]=\"ansOFFICER?.id\">{{ansOFFICER?.display}}\n        </option>\n      </select>\n    </div>\n    <div class=\"col-md-4 form-group\">\n      <label>Apply By </label>\n      <input type=\"text\" class=\"form-control\"\n             value=\"{{saleCallH?saleCallH.mkt_name:code}}\"\n             disabled>\n    </div>\n    <div class=\"col-md-2 form-group\">\n      <label>Connect Since</label>\n      <input type=\"text\" class=\"form-control\"\n             pTooltip=\"01/2017\"\n             [textMask]=\"{mask: textmask.mm_yyyy }\"\n             [ngModel]=\"saleCallH?.connect_since\"\n             (ngModelChange)=\"saleCallH.connect_since =$event\">\n    </div>\n  </div>\n</div>\n\n\n<app-alert-dialog #Questiondialog (onOK)=\"getEntity(selectEntity)\"   ></app-alert-dialog>\n<app-alert-dialog #QuestionAfnewcard (onOK)=\"onCompareSaleCall()\"   ></app-alert-dialog>\n<app-alert-dialog #Aleartdialog  ></app-alert-dialog>\n\n<app-action-lock-screen *ngIf=\"checkLoader\"\n                        [spinner]=\"true\"\n                        [showCancel]=\"false\"\n                        #lockScreen></app-action-lock-screen>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-head/call-visit-head.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallVisitHeadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_Head__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Head.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sale_call_visit_service__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entity_entity_dialog_entity_dialog_component__ = __webpack_require__("../../../../../src/app/main/mst/entity/entity-dialog/entity-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_Sale_Call_Pcnt__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Pcnt.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_config_text_mask_type__ = __webpack_require__("../../../../../src/app/shared/config/text-mask-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CallVisitHeadComponent = /** @class */ (function () {
    function CallVisitHeadComponent(saleCallVisitService, serviceEndPoint, dataPipe, textmask, userStorage) {
        this.saleCallVisitService = saleCallVisitService;
        this.serviceEndPoint = serviceEndPoint;
        this.dataPipe = dataPipe;
        this.textmask = textmask;
        this.userStorage = userStorage;
        this.intro_by = "";
        this.saleCallH = new __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_Head__["a" /* SaleCallHead */]();
        this.inputIntro = false;
        this.buttonIntro = false;
        this.checkLoader = false;
        this.code = "";
        this.username = "";
        this.comCode = "";
        this.fromSelectEntity = false;
    }
    CallVisitHeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.code = this.userStorage.getCode();
        this.username = this.userStorage.getUserName();
        this.comCode = this.userStorage.getComCodePort();
        this.subscription = this.saleCallVisitService.eventsaleH.subscribe(function (obj) {
            _this.saleCallH = obj;
            _this.ListPrebranch = _this.saleCallVisitService.ListPrebranch;
            _this.ListFNMT = _this.saleCallVisitService.ListFNMT;
            _this.ListFNME = _this.saleCallVisitService.ListFNME;
            _this.ListSOURCE = _this.saleCallVisitService.ListSOURCE;
            _this.ListOFFICER = _this.saleCallVisitService.ListOFFICER;
            if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isUndefined"])(_this.saleCallH.intro_mthd_cd)) {
                _this.controlIntro(_this.saleCallH.intro_mthd_cd);
                _this.intro_by = _this.saleCallH.intro_by_cd_full;
            }
        });
    };
    CallVisitHeadComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionCheckEntity != null) {
            this.subscriptionCheckEntity.unsubscribe();
        }
    };
    CallVisitHeadComponent.prototype.openEntity = function () {
        this.entity_dialog.showDialog();
    };
    CallVisitHeadComponent.prototype.changeSource = function (source) {
        this.saleCallH.source = source;
        this.saleCallH.intro_mthd_cd = source;
        this.controlIntro(this.saleCallH.intro_mthd_cd);
        this.intro_by = "";
        this.saleCallH.intro_by_cd = "";
    };
    CallVisitHeadComponent.prototype.controlIntro = function (source) {
        if (source == "40" || source == "53" || source == "300" || source == "403" || source == "90") {
            this.inputIntro = true;
            this.buttonIntro = true;
            this.OutURL = "";
        }
        else {
            this.inputIntro = false;
            this.buttonIntro = false;
            this.OutURL = this.serviceEndPoint.url + this.serviceEndPoint.sale_call_api
                + "/ask/salecall/GetINTRO?device=web&user=" + this.username
                + "&Comcode=" + this.comCode + "&INTRO_MTHD_CD=" + source;
        }
    };
    CallVisitHeadComponent.prototype.setIntroName = function (data) {
        this.intro_by = data;
    };
    CallVisitHeadComponent.prototype.setIntroValue = function (data) {
        this.saleCallH.intro_by_cd = data;
    };
    CallVisitHeadComponent.prototype.checkEntity = function (entityModel) {
        this.selectEntity = entityModel;
        this.fromSelectEntity = true;
        this.onNewCardchkEntity(this.selectEntity.newCardNo, this.selectEntity.entCode);
        // this.subscriptionCheckEntity = this.saleCallVisitService.checkCustomer(
        //   'web', this.userStorage.getCode(), this.userStorage.getComCode(), this.selectEntity.newCardNo
        //   )
        //   .subscribe(
        //   (data:any) => {
        //     console.log(data);
        //       if (data.CODE == '200'){
        //          this.getEntity(this.selectEntity);
        //       }else if (data.CODE == '204'){
        //         this.Questiondialog.reset();
        //         this.Questiondialog.setAction('QUESTION')   ;
        //         this.Questiondialog.setMessage(data.MSG);
        //         this.Questiondialog.open();
        //       }else if (data.CODE == '400'){
        //         this.Aleartdialog.reset();
        //         this.Aleartdialog.setAction('WARNING') ;
        //         this.Aleartdialog.setMessage(data.MSG);
        //         this.Aleartdialog.open();
        //
        //       }
        //   }
        // );
    };
    CallVisitHeadComponent.prototype.getEntity = function (entityModel) {
        //get entity from search
        ////   Entity To Sale Call Head
        this.saleCallH.com_code = entityModel.comCode;
        this.saleCallH.comp_ent_code = entityModel.entCode;
        this.saleCallH.new_card_no = entityModel.newCardNo;
        this.saleCallH.f_name = entityModel.fNameCode;
        this.saleCallH.comp_tha_nme = entityModel.fNameT;
        this.saleCallH.comp_l_tha_nme = entityModel.lNameT;
        this.saleCallH.f_name_e = entityModel.fNameECode;
        this.saleCallH.comp_eng_nme = entityModel.fNameE;
        this.saleCallH.comp_l_eng_nme = entityModel.lNameE;
        this.saleCallH.bussiness_type = '';
        this.saleCallH.bussiness_detail = '';
        this.saleCallH.md_name = entityModel.authorizeE;
        this.saleCallH.nationality = entityModel.nationalityCode;
        this.saleCallH.addr = entityModel.address;
        this.saleCallH.prv_code = entityModel.prvCont;
        this.saleCallH.tel = entityModel.tel;
        this.saleCallH.e_mail = entityModel.emailAddress;
        this.saleCallH.fax = entityModel.faxCurrent;
        this.saleCallH.website = entityModel.webSite;
        //this.saleCallH.regis_capital_amt = parseFloat(entityModel.regisCapital) / 1000000  ;
        this.saleCallH.regis_capital_amt = entityModel.regisCapital;
        //this.saleCallH.paid_up_capital_amt = parseFloat(entityModel.paidUpCapital) / 1000000 ;
        this.saleCallH.paid_up_capital_amt = entityModel.paidUpCapital;
        this.saleCallH.performance_year = entityModel.salesYear;
        //this.saleCallH.sale_amt = parseFloat(entityModel.salesAmt) / 1000000 ;
        this.saleCallH.sale_amt = entityModel.salesAmt;
        //this.saleCallH.net_profit_amt = 2
        this.saleCallH.net_worth_year = entityModel.netWorthYear;
        //this.saleCallH.net_worth_amt = parseFloat(entityModel.netWorthAmt) / 1000000 ;
        this.saleCallH.net_worth_amt = entityModel.netWorthAmt;
        //  console.log(entityModel.establishDate );
        //  console.log(entityModel.establishDate.constructor.name );
        this.saleCallH.established_year = entityModel.establishDate.substr(6, 4) ? entityModel.establishDate.substr(6, 4) : "";
        ////// List industry
        if ((entityModel.listIndustry) && (entityModel.listIndustry.length > 0)) {
            this.listpcnt = [];
            for (var i = 0; i < entityModel.listIndustry.length; i++) {
                this.listpcnt.push(new __WEBPACK_IMPORTED_MODULE_7__model_Sale_Call_Pcnt__["a" /* SaleCallPcnt */](entityModel.listIndustry[i].entCode, entityModel.listIndustry[i].newIndCode, entityModel.listIndustry[i].indPcnt, '', //entityModel.listIndustry[i].rmrk,
                entityModel.listIndustry[i].oldIndCode, entityModel.listIndustry[i].comCode, entityModel.listIndustry[i].subId, '', // entityModel.listIndustry[i].input_user,
                '', //entityModel.listIndustry[i].last_update,
                this.saleCallH.sale_call_no ? this.saleCallH.sale_call_no : '', //entityModel.listIndustry[i].sale_call_no,
                entityModel.listIndustry[i].newIndDecs, entityModel.listIndustry[i].oldIndDecs));
            }
            this.saleCallH.listPCNT = this.listpcnt;
        }
    };
    CallVisitHeadComponent.prototype.mapIntial = function (inputT) {
        var _this = this;
        if (inputT == 'T') {
            var tempObj = this.ListFNMT.find(function (ObjTemp) { return ObjTemp.id == _this.saleCallH.f_name; });
            if (tempObj) {
                this.saleCallH.f_name_e = tempObj.key1;
            }
        }
        else if (inputT == 'E') {
            var tempObj = this.ListFNME.find(function (ObjTemp) { return ObjTemp.id == _this.saleCallH.f_name_e; });
            if (tempObj) {
                this.saleCallH.f_name = tempObj.key1;
            }
        }
    };
    CallVisitHeadComponent.prototype.onNewCardchkEntity = function (newcard, entCode) {
        var _this = this;
        //  console.log(newcard);
        if (newcard.length >= 6) {
            this.checkLoader = true;
            this.subscriptionCheckEntity = this.saleCallVisitService.checkCustomer('web', this.userStorage.getCode(), this.userStorage.getComCode(), newcard, entCode)
                .subscribe(function (data) {
                _this.checkLoader = false;
                console.log(data);
                if (data.CODE == '400') {
                    _this.Aleartdialog.reset();
                    _this.Aleartdialog.setAction('WARNING');
                    _this.Aleartdialog.setMessage(data.MSG);
                    _this.Aleartdialog.open();
                    _this.saleCallH.new_card_no = '';
                }
                else {
                    _this.saleCallH.new_card_no = newcard;
                    if (data.DATA) {
                        _this.comparesaleCallH = __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_Head__["a" /* SaleCallHead */].parse(data.DATA);
                        if (data.CODE == '204') {
                            _this.QuestionAfnewcard.reset();
                            _this.QuestionAfnewcard.setAction('QUESTION');
                            _this.QuestionAfnewcard.setMessage(data.MSG);
                            _this.QuestionAfnewcard.open();
                        }
                        else if (data.CODE == '200') {
                            if (_this.fromSelectEntity) {
                                _this.onCompareSaleCall();
                            }
                            else if (data.DATA.COMP_ENT_CODE) {
                                _this.QuestionAfnewcard.reset();
                                _this.QuestionAfnewcard.setAction('QUESTION');
                                _this.QuestionAfnewcard.setMessage('ลูกค้าคนนี้มีอยู่ในฐานข้อมูล บริษัท ต้องการนำข้อมูลใน ฐานข้อมูล บริษัท มาทับ หรือไม่');
                                _this.QuestionAfnewcard.open();
                            }
                        }
                    }
                }
                _this.fromSelectEntity = false;
            });
        }
    };
    CallVisitHeadComponent.prototype.onCompareSaleCall = function () {
        this.saleCallH.comp_ent_code = this.comparesaleCallH.comp_ent_code;
        this.saleCallH.f_name = this.comparesaleCallH.f_name;
        this.saleCallH.comp_tha_nme = this.comparesaleCallH.comp_tha_nme;
        this.saleCallH.comp_l_tha_nme = this.comparesaleCallH.comp_l_tha_nme;
        this.saleCallH.f_name_e = this.comparesaleCallH.f_name_e;
        this.saleCallH.comp_eng_nme = this.comparesaleCallH.comp_eng_nme;
        this.saleCallH.comp_l_eng_nme = this.comparesaleCallH.comp_l_eng_nme;
        this.saleCallH.connect_since = this.comparesaleCallH.connect_since;
        this.saleCallH.bussiness_type = this.comparesaleCallH.bussiness_type;
        this.saleCallH.bussiness_detail = this.comparesaleCallH.bussiness_detail;
        this.saleCallH.bussiness_detail_name = this.comparesaleCallH.bussiness_detail_name;
        this.saleCallH.cluster = this.comparesaleCallH.cluster;
        this.saleCallH.md_name = this.comparesaleCallH.md_name;
        this.saleCallH.nationality = this.comparesaleCallH.nationality;
        this.saleCallH.addr = this.comparesaleCallH.addr;
        this.saleCallH.prv_code = this.comparesaleCallH.prv_code;
        this.saleCallH.tel = this.comparesaleCallH.tel;
        this.saleCallH.e_mail = this.comparesaleCallH.e_mail;
        this.saleCallH.fax = this.comparesaleCallH.fax;
        this.saleCallH.website = this.comparesaleCallH.website;
        this.saleCallH.regis_capital_amt = this.comparesaleCallH.regis_capital_amt;
        this.saleCallH.paid_up_capital_amt = this.comparesaleCallH.paid_up_capital_amt;
        this.saleCallH.performance_year = this.comparesaleCallH.performance_year;
        this.saleCallH.sale_amt = this.comparesaleCallH.sale_amt;
        this.saleCallH.net_worth_year = this.comparesaleCallH.net_worth_year;
        this.saleCallH.net_worth_amt = this.comparesaleCallH.net_worth_amt;
        this.saleCallH.established_year = this.comparesaleCallH.established_year;
        this.saleCallH.listPCNT = this.comparesaleCallH.listPCNT;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("entity_dialog"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__entity_entity_dialog_entity_dialog_component__["a" /* EntityDialogComponent */])
    ], CallVisitHeadComponent.prototype, "entity_dialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Questiondialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], CallVisitHeadComponent.prototype, "Questiondialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('QuestionAfnewcard'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], CallVisitHeadComponent.prototype, "QuestionAfnewcard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Aleartdialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], CallVisitHeadComponent.prototype, "Aleartdialog", void 0);
    CallVisitHeadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-visit-head',
            template: __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-head/call-visit-head.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-head/call-visit-head.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sale_call_visit_service__["a" /* SaleCallVisitService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_config_service_endpoint__["a" /* ServiceEndpoint */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_9__shared_config_text_mask_type__["a" /* TextMaskType */],
            __WEBPACK_IMPORTED_MODULE_5__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], CallVisitHeadComponent);
    return CallVisitHeadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-information/call-visit-information.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-information/call-visit-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid border-isa\">\n  <div class=\"row\">\n    <div class=\"col-md-6 form-group\">\n      <label>Business Type</label>\n      <select class=\"form-control\"\n              [ngModel]=\"saleCallH_Info?.bussiness_type\"\n              (ngModelChange)=\"saleCallH_Info.bussiness_type=$event;saleCallH_Info.bussiness_detail =''\">\n        <option></option>\n        <option *ngFor=\"let ansBUSTYPE of ListBUSTYPE\"\n                [selected]=\"ansBUSTYPE?.id == saleCallH_Info?.bussiness_type\"\n                [value]=\"ansBUSTYPE?.id\">{{ansBUSTYPE?.display}}\n        </option>\n\n      </select>\n    </div>\n    <div class=\"col-md-3 form-group\">\n      <label>DBD Code </label>\n      <input type=\"text\" class=\"form-control\" disabled\n             [ngModel]=\"saleCallH_Info?.bussiness_detail\"\n             (ngModelChange)=\"saleCallH_Info.bussiness_detail=$event\">\n    </div>\n    <div class=\"col-md-1 form-group\">\n      <div class=\"d-flex align-self-center invisible\" style=\"height: 80%;margin: 10px\">\n        <button>Find</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 form-group\">\n      <label>Specifies</label><br>\n      <div class=\"row\">\n        <div class=\"col-md-10\">\n          <input type=\"text\" class=\"form-control\"\n                 [value]=\"saleCallH_Info.bussiness_detail_name ? saleCallH_Info.bussiness_detail_name : '' \"\n                 [disabled]=\"true\">\n        </div>\n        <div class=\"col-md-2 pl-0\">\n          <app-search-un app-search-un inuURL={{OutURL}}\n                         title=\"Business Type;Specifies;DBD CODE;\"\n                         (col1)=\"setBusName($event)\"\n                         (col3)=\"setBuscode($event)\"\n                         (col4)=\"setCluster($event)\"\n                         (col5)=\"setBusType($event)\">\n          </app-search-un>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <div class=\"form-control\">\n        <p><b>Cluster :</b>\n          {{saleCallH_Info?.cluster}} :<br/>\n          <b>Group Industry :</b>\n          {{saleCallH_Info?.bussiness_detail_name}}\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 form-group\">\n      <label>Managing Director</label>\n      <input type=\"text\" class=\"form-control\"  [maxlength]=\"70\"\n             [ngModel]=\"saleCallH_Info?.md_name\"\n             (ngModelChange)=\"saleCallH_Info.md_name=$event\">\n    </div>\n    <div class=\"col-md-4 form-group\">\n      <label>Nationality</label>\n      <select class=\"form-control\"\n              [ngModel]=\"saleCallH_Info?.nationality\"\n              (ngModelChange)=\"saleCallH_Info.nationality = $event\">\n        <option></option>\n        <option *ngFor=\"let ansNATION of ListNATION\"\n                [selected]=\"ansNATION.id == saleCallH_Info?.nationality\"\n                [value]=\"ansNATION.id\">{{ansNATION?.display}}\n        </option>\n      </select>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10 form-group\">\n      <label>Address</label>\n      <input type=\"text\" class=\"form-control\"  [maxlength]=\"100\"\n             [ngModel]=\"saleCallH_Info?.addr\"\n             (ngModelChange)=\"saleCallH_Info.addr=$event\">\n    </div>\n    <div class=\"col-md-2  form-group\">\n      <label>Province</label>\n      <select class=\"form-control\"\n              [ngModel]=\"saleCallH_Info?.prv_code\"\n              (ngModelChange)=\"saleCallH_Info.prv_code=$event\">\n        <option></option>\n        <option *ngFor=\"let ansPROVINCE of ListPROVINCE\"\n                [selected]=\"ansPROVINCE.id == saleCallH_Info?.prv_code\"\n                [value]=\"ansPROVINCE.id\">{{ansPROVINCE?.display}}\n        </option>\n      </select>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 form-group\">\n      <label>Tel</label>\n      <input type=\"text\" class=\"form-control\"  [maxlength]=\"50\"\n             [ngModel]=\"saleCallH_Info?.tel\"\n             (ngModelChange)=\"saleCallH_Info.tel=$event\">\n    </div>\n    <div class=\"col-md-3 form-group\">\n      <label>E-mail</label>\n      <input type=\"text\" class=\"form-control\"  [maxlength]=\"100\"\n             [ngModel]=\"saleCallH_Info?.e_mail\"\n             (ngModelChange)=\"saleCallH_Info.e_mail=$event\">\n    </div>\n    <div class=\"col-md-2 form-group\">\n      <label>Fax</label>\n      <input type=\"text\" class=\"form-control\"  [maxlength]=\"50\"\n             [ngModel]=\"saleCallH_Info?.fax\"\n             (ngModelChange)=\"saleCallH_Info.fax=$event\">\n    </div>\n    <div class=\"col-md-4 form-group\">\n      <label>Website</label>\n      <input type=\"text\" class=\"form-control\"    [maxlength]=\"100\"\n             [ngModel]=\"saleCallH_Info?.website\"\n             (ngModelChange)=\"saleCallH_Info.website=$event\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 form-group\">\n      <label>Register Capital</label><br>\n      <div class=\"form-inline\">\n        <input appMyCurrency   class=\"form-control\"\n                               (change)=\"saleCallH_Info.regis_capital_amt = $event.target.value\"\n                               [value]=\"saleCallH_Info.regis_capital_amt\" >\n        <label>&nbsp; MB.</label>\n      </div>\n    </div>\n    <div class=\"col-md-3 form-group\">\n\n      <label>Paid Up Capital</label><br>\n      <div class=\"form-inline\">\n        <input appMyCurrency   class=\"form-control\" (change)=\"saleCallH_Info.paid_up_capital_amt = $event.target.value\"\n                                                     [value]=\"saleCallH_Info.paid_up_capital_amt\" >\n        <label>&nbsp; MB.</label>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 form-group\">\n      <label>Sales Ended Year</label><br>\n      <div class=\"form-inline\">\n        <input type=\"text\" class=\"form-control\"\n               pTooltip=\"2017\"  style=\"text-align: right\"\n               [textMask]=\"{mask: textmask.yyyy }\"\n               [ngModel]=\"saleCallH_Info?.performance_year\"\n               (ngModelChange)=\"saleCallH_Info.performance_year =$event\">\n        <label>&nbsp; YEAR</label>\n      </div>\n    </div>\n    <div class=\"col-md-3 form-group\">\n      <label>Sales Ended Amount</label><br>\n      <div class=\"form-inline\">\n        <input appMyCurrency   class=\"form-control\"\n               (change)=\"saleCallH_Info.sale_amt = $event.target.value\"\n               [value]=\"saleCallH_Info.sale_amt\" >\n        <label>&nbsp; MB.</label>\n      </div>\n    </div>\n    <div class=\"col-md-4 form-group\">\n      <label>Net Profit</label><br>\n      <div class=\"form-inline\">\n        <input appMyCurrency   class=\"form-control\"\n               (change)=\"saleCallH_Info.net_profit_amt = $event.target.value\"\n               [value]=\"saleCallH_Info.net_profit_amt\"  >\n        <label>&nbsp; MB.</label>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 form-group\">\n      <label>Net Worth Ended Year</label><br>\n      <div class=\"form-inline\">\n        <input type=\"text\" class=\"form-control\"\n               pTooltip=\"2017\"  style=\"text-align: right\"\n               [textMask]=\"{mask: textmask.yyyy }\"\n               [ngModel]=\"saleCallH_Info?.net_worth_year\"\n               (ngModelChange)=\"saleCallH_Info.net_worth_year =$event\">\n        <label>&nbsp; YEAR</label>\n      </div>\n    </div>\n    <div class=\"col-md-3 form-group\">\n      <label>Net Worth Ended Amount</label><br>\n      <div class=\"form-inline\">\n        <input appMyCurrency   class=\"form-control\"  (change)=\"saleCallH_Info.net_worth_amt = $event.target.value\"\n               [value]=\"saleCallH_Info.net_worth_amt\" >\n        <label>&nbsp; MB.</label>\n      </div>\n    </div>\n    <div class=\"col-md-4 form-group\">\n      <label>Established Year</label><br>\n      <div class=\"form-inline\">\n        <input type=\"text\" class=\"form-control\"\n               pTooltip=\"2017\"  style=\"text-align: right\"\n               [textMask]=\"{mask: textmask.yyyy }\"\n               [ngModel]=\"saleCallH_Info?.established_year\"\n               (ngModelChange)=\"saleCallH_Info.established_year =$event\">\n        <span class=\"text-danger\">&nbsp; Example. 2017</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 form-group\">\n      <label>Main Bank & Credit Line</label><br>\n      <input type=\"text\" class=\"form-control\"  [maxlength]=\"50\"\n             [ngModel]=\"saleCallH_Info?.main_bank\"\n             (ngModelChange)=\"saleCallH_Info.main_bank=$event\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12  form-group\">\n      <label>% Of Industry </label><br>\n      <div class=\"form-control\">\n        <p-dataTable [value]=\"saleCallH_Info.listPCNT\"\n                     scrollable=\"true\" scrollHeight=\"400px\"\n                     [(selection)]=\"mySelectPCNT\"\n                     selectionMode=\"single\"\n                     [responsive]=\"true\"\n        >\n          <p-header>\n            <app-custom-botton-icon [option]=\"'new'\"    (onBtnClick)=\"pcntAddorEdit('Add')\"     ></app-custom-botton-icon>\n            <app-custom-botton-icon [option]=\"'edit'\"   (onBtnClick)=\"pcntAddorEdit('Edit')\"     ></app-custom-botton-icon>\n            <app-custom-botton-icon [option]=\"'delete'\" (onBtnClick)=\"deletePCNT()\"     ></app-custom-botton-icon>\n          </p-header>\n          <p-column field=\"new_ind_decs\" header=\"New Industry\"></p-column>\n          <p-column field=\"old_ind_decs\" header=\"Old Industry\"></p-column>\n          <p-column field=\"ind_pcnt\" header=\"Percent(%)\"></p-column>\n          <p-column field=\"rmrk\" header=\"Remark\"></p-column>\n          <p-footer></p-footer>\n        </p-dataTable>\n      </div>\n    </div>\n\n\n    <!----------------------action dialog------------------------------>\n    <app-action-dialog   #actiondialog\n                        [showCancel]=\"true\"\n                        [showOk]=\"!btnShowAdd\"\n                        [showAdd]=\"btnShowAdd\"  (onAdd)=\"OkPcnt()\"  (onOk)=\"OkPcnt()\" >\n        <label *ngIf=\"!selectPCNT\"> {{pcntAction}} Industry </label>\n        <div *ngIf=\"selectPCNT\">\n          <div class=\"form-group\">\n            <label>New Industry</label>\n            <select #NEWINDUSTRY class=\"form-control\"\n                    (change)=\"selectMultiIndustry('New',NEWINDUSTRY.value)\">\n              <option [value]=\"-1\"></option>\n              <option *ngFor=\"let ansNEW of ListNEWINDUSTRY\"\n                      [selected]=\"ansNEW?.id == tempmySelectPCNT?.new_ind_code\"\n                      [value]=\"ansNEW.id\">{{ansNEW?.display}}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Old Industry</label>\n            <select #OLDINDUSTRY class=\"form-control\"\n                    (change)=\"selectMultiIndustry('Old',OLDINDUSTRY.value)\">\n              <option></option>\n              <option *ngFor=\"let ansOLD of ListOLDINDUSTRY\"\n                      [selected]=\"ansOLD?.id == tempmySelectPCNT?.xold_ind_code\"\n                      [value]=\"ansOLD?.id\">{{ansOLD?.display}}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Percent(%)</label>\n            <input class=\"form-control\" [(ngModel)]=\"tempmySelectPCNT.ind_pcnt\"  pKeyFilter=\"int\" >\n          </div>\n          <div class=\"form-group\">\n            <label>Remark</label>\n            <input class=\"form-control\" [(ngModel)]=\"tempmySelectPCNT.rmrk\"  [maxlength]=\"100\" >\n          </div>\n        </div>\n\n    </app-action-dialog>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/call-visit-information/call-visit-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallVisitInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_Head__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Head.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sale_call_visit_service__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_ObjTemp__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/ObjTemp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_Sale_Call_Pcnt__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Pcnt.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_center_action_dialog_action_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/action-dialog/action-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_config_text_mask_type__ = __webpack_require__("../../../../../src/app/shared/config/text-mask-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CallVisitInformationComponent = /** @class */ (function () {
    function CallVisitInformationComponent(saleCallVisitService, serviceEndPoint, textmask, userStorage) {
        this.saleCallVisitService = saleCallVisitService;
        this.serviceEndPoint = serviceEndPoint;
        this.textmask = textmask;
        this.userStorage = userStorage;
        this.saleCallH_Info = new __WEBPACK_IMPORTED_MODULE_1__model_Sale_Call_Head__["a" /* SaleCallHead */]();
        this.pcntAction = '';
        this.code = "";
        this.username = "";
        this.comCode = "";
        this.labelOkPcnt = '';
        this.btnShowAdd = true;
    }
    CallVisitInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.code = this.userStorage.getCode();
        this.username = this.userStorage.getUserName();
        this.comCode = this.userStorage.getComCodePort();
        this.OutURL = this.serviceEndPoint.url
            + this.serviceEndPoint.sale_call_api
            + "/ask/salecall/GetDBD?device=Web&user="
            + this.username + "&Comcode=" + this.comCode
            + "&dbdcode=" + "No";
        this.subscription = this.saleCallVisitService.eventsaleH.subscribe(function (obj) {
            _this.saleCallH_Info = obj;
            _this.myListPCNT = _this.saleCallH_Info.listPCNT;
            _this.ListBUSTYPE = _this.saleCallVisitService.ListBUSTYPE;
            _this.ListNATION = _this.saleCallVisitService.ListNATION;
            _this.ListPROVINCE = _this.saleCallVisitService.ListPROVINCE;
            _this.ListNEWINDUSTRY = _this.saleCallVisitService.ListNEWINDUSTRY;
            _this.ListOLDINDUSTRY = _this.saleCallVisitService.ListOLDINDUSTRY;
        });
    };
    CallVisitInformationComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CallVisitInformationComponent.prototype.setBusName = function (data) {
        this.saleCallH_Info.bussiness_detail_name = data;
    };
    CallVisitInformationComponent.prototype.setBuscode = function (data) {
        this.saleCallH_Info.bussiness_detail = data;
    };
    CallVisitInformationComponent.prototype.setBusType = function (data) {
        this.saleCallH_Info.bussiness_type = data;
    };
    CallVisitInformationComponent.prototype.setCluster = function (data) {
        this.saleCallH_Info.cluster = data;
    };
    CallVisitInformationComponent.prototype.deletePCNT = function () {
        var delRow = this.saleCallH_Info.listPCNT.indexOf(this.mySelectPCNT);
        this.saleCallH_Info.listPCNT.splice(delRow, 1);
        ////  Change  order
        for (var i = 1; i <= this.saleCallH_Info.listPCNT.length; i++) {
            this.saleCallH_Info.listPCNT[i - 1].sub_id = i;
        }
        ;
        this.saleCallH_Info.listPCNT = this.saleCallH_Info.listPCNT.slice();
        console.log(this.saleCallVisitService.saleH);
    };
    CallVisitInformationComponent.prototype.pcntAddorEdit = function (action) {
        this.pcntAction = action;
        this.selectPCNT = true;
        this.tempmySelectPCNT = new __WEBPACK_IMPORTED_MODULE_6__model_Sale_Call_Pcnt__["a" /* SaleCallPcnt */]();
        if (action == 'Add') {
            this.tempmySelectPCNT.com_code = this.saleCallH_Info.com_code;
            this.tempmySelectPCNT.sale_call_no = this.saleCallH_Info.sale_call_no;
            this.tempmySelectPCNT.sub_id = this.saleCallH_Info.listPCNT.length + 1;
            this.tempmySelectPCNT.ent_code = this.saleCallH_Info.comp_ent_code;
            this.labelOkPcnt = 'Add';
            this.btnShowAdd = true;
            this.actiondialog.setTitle('Add');
            this.actiondialog.open();
        }
        else if (action == 'Edit') {
            this.btnShowAdd = false;
            if (this.mySelectPCNT) {
                this.tempmySelectPCNT.new_ind_code = this.mySelectPCNT.new_ind_code;
                this.tempmySelectPCNT.new_ind_decs = this.mySelectPCNT.new_ind_decs;
                this.tempmySelectPCNT.xold_ind_code = this.mySelectPCNT.xold_ind_code;
                this.tempmySelectPCNT.old_ind_decs = this.mySelectPCNT.old_ind_decs;
                this.tempmySelectPCNT.ind_pcnt = this.mySelectPCNT.ind_pcnt;
                this.tempmySelectPCNT.rmrk = this.mySelectPCNT.rmrk;
                this.labelOkPcnt = 'Ok';
                this.actiondialog.setTitle('Edit');
                this.actiondialog.open();
            }
            else {
                this.pcntAction = "Please Select Record";
                this.selectPCNT = false;
                this.actiondialog.setTitle('Edit');
                this.actiondialog.open();
            }
        }
    };
    CallVisitInformationComponent.prototype.OkPcnt = function () {
        if (this.pcntAction == 'Add') {
            this.saleCallH_Info.listPCNT = this.saleCallH_Info.listPCNT.concat([this.tempmySelectPCNT]);
        }
        else if (this.pcntAction == 'Edit') {
            this.mySelectPCNT.new_ind_code = this.tempmySelectPCNT.new_ind_code;
            this.mySelectPCNT.new_ind_decs = this.tempmySelectPCNT.new_ind_decs;
            this.mySelectPCNT.xold_ind_code = this.tempmySelectPCNT.xold_ind_code;
            this.mySelectPCNT.old_ind_decs = this.tempmySelectPCNT.old_ind_decs;
            this.mySelectPCNT.ind_pcnt = this.tempmySelectPCNT.ind_pcnt;
            this.mySelectPCNT.rmrk = this.tempmySelectPCNT.rmrk;
        }
    };
    CallVisitInformationComponent.prototype.selectMultiIndustry = function (type, value) {
        var Choose = new __WEBPACK_IMPORTED_MODULE_5__model_ObjTemp__["a" /* ObjTemp */]();
        if (type == 'New') {
            Choose = this.ListNEWINDUSTRY.find(function (ObjTemp) { return ObjTemp.id == value; });
            this.tempmySelectPCNT.new_ind_code = Choose.id;
            this.tempmySelectPCNT.new_ind_decs = Choose.display;
        }
        else if (type == 'Old') {
            Choose = this.ListOLDINDUSTRY.find(function (ObjTemp) { return ObjTemp.id == value; });
            this.tempmySelectPCNT.xold_ind_code = Choose.id;
            this.tempmySelectPCNT.old_ind_decs = Choose.display;
        }
    };
    CallVisitInformationComponent.prototype.test = function (event) {
        console.log(event);
        this.saleCallH_Info.performance_year = event;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('actiondialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], CallVisitInformationComponent.prototype, "actiondialog", void 0);
    CallVisitInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-visit-information',
            template: __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-information/call-visit-information.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-information/call-visit-information.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sale_call_visit_service__["a" /* SaleCallVisitService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_config_service_endpoint__["a" /* ServiceEndpoint */],
            __WEBPACK_IMPORTED_MODULE_8__shared_config_text_mask_type__["a" /* TextMaskType */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], CallVisitInformationComponent);
    return CallVisitInformationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/model/ObjTemp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjTemp; });
/**
 * Created by pongsatorn.an on 11/09/2560.
 */
var ObjTemp = /** @class */ (function () {
    function ObjTemp(display, id, key1, key2, type) {
        this.display = display;
        this.id = id;
        this.key1 = key1;
        this.key2 = key2;
        this.type = type;
    }
    return ObjTemp;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Asset.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleCallAsset; });
/**
 * Created by pongsatorn.an on 23/09/2560.
 */
var SaleCallAsset = /** @class */ (function () {
    function SaleCallAsset(sale_call_no, seq_no, credit_type, open_lc, asset_type, fin_amt, asset_detail, brand, purpose, competitor_lease, competitor_bank, competitor_other, competitor_irr, competitor_term, competitor_fin_pcnt, relate_ent_code, credit_type_other, unit) {
        if (seq_no === void 0) { seq_no = 1; }
        this.sale_call_no = sale_call_no;
        this.seq_no = seq_no;
        this.credit_type = credit_type;
        this.open_lc = open_lc;
        this.asset_type = asset_type;
        this.fin_amt = fin_amt;
        this.asset_detail = asset_detail;
        this.brand = brand;
        this.purpose = purpose;
        this.competitor_lease = competitor_lease;
        this.competitor_bank = competitor_bank;
        this.competitor_other = competitor_other;
        this.competitor_irr = competitor_irr;
        this.competitor_term = competitor_term;
        this.competitor_fin_pcnt = competitor_fin_pcnt;
        this.relate_ent_code = relate_ent_code;
        this.credit_type_other = credit_type_other;
        this.unit = unit;
    }
    SaleCallAsset.parse = function (json) {
        return new SaleCallAsset(json.sale_call_no, json.seq_no, json.credit_type, json.open_lc, json.asset_type, json.fin_amt, json.asset_detail, json.brand, json.purpose, json.competitor_lease, json.competitor_bank, json.competitor_other, json.competitor_irr, json.competitor_term, json.competitor_fin_pcnt, json.relate_ent_code, json.credit_type_other, json.unit);
    };
    return SaleCallAsset;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Attendees.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleCallAttendees; });
/**
 * Created by pongsatorn.an on 25/08/2560.
 */
var SaleCallAttendees = /** @class */ (function () {
    function SaleCallAttendees(sale_call_no, seq_no, order_no, attnd_type, attnd_name, attnd_position, name_full) {
        this.sale_call_no = sale_call_no;
        this.seq_no = seq_no;
        this.order_no = order_no;
        this.attnd_type = attnd_type;
        this.attnd_name = attnd_name;
        this.attnd_position = attnd_position;
        this.name_full = name_full;
    }
    SaleCallAttendees.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new SaleCallAttendees(json[i].sale_call_no, json[i].seq_no, json[i].order_no, json[i].attnd_type, json[i].attnd_name, json[i].attnd_position, json[i].name_full));
        }
        return data;
    };
    return SaleCallAttendees;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Detail.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleCallDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sale_Call_Attendees__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Attendees.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sale_Call_VisitOutSide__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-VisitOutSide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sale_Call_Asset__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Asset.ts");



/**
 * Created by pongsatorn.an on 15/08/2560.
 */
var SaleCallDetail = /** @class */ (function () {
    function SaleCallDetail(sale_call_no, seq_no, sale_call_dt, sale_call_type, last_upd, usr_upd, call_visit_date, call_visit_by, follow_up_point, follow_up_response, follow_date, sale_call_note, traffic, interview, cont_person_code, input_by, input_date, cancel_date, purpose, call_result_flg, call_result_detail, submit_flg, mobile_sorce, call_by_name, title_en, title_th, name_en, name_th, department, phone, phone_ext, mobile, email, position, title_en_desc, purpose_full, call_result_detail_desc, result_reason_col10, sale_call_type_desc, prepare_flag, reject_flag, follow_flag, asset, visitOutSide, listAttendeesB, listAttendeesC) {
        this.sale_call_no = sale_call_no;
        this.seq_no = seq_no;
        this.sale_call_dt = sale_call_dt;
        this.sale_call_type = sale_call_type;
        this.last_upd = last_upd;
        this.usr_upd = usr_upd;
        this.call_visit_date = call_visit_date;
        this.call_visit_by = call_visit_by;
        this.follow_up_point = follow_up_point;
        this.follow_up_response = follow_up_response;
        this.follow_date = follow_date;
        this.sale_call_note = sale_call_note;
        this.traffic = traffic;
        this.interview = interview;
        this.cont_person_code = cont_person_code;
        this.input_by = input_by;
        this.input_date = input_date;
        this.cancel_date = cancel_date;
        this.purpose = purpose;
        this.call_result_flg = call_result_flg;
        this.call_result_detail = call_result_detail;
        this.submit_flg = submit_flg ? submit_flg : 'N';
        this.mobile_sorce = mobile_sorce;
        this.call_by_name = call_by_name;
        this.title_en = title_en;
        this.title_th = title_th;
        this.name_en = name_en;
        this.name_th = name_th;
        this.department = department;
        this.phone = phone;
        this.phone_ext = phone_ext;
        this.mobile = mobile;
        this.email = email;
        this.position = position;
        this.title_en_desc = title_en_desc;
        this.purpose_full = purpose_full;
        this.call_result_detail_desc = call_result_detail_desc;
        this.result_reason_col10 = result_reason_col10;
        this.sale_call_type_desc = sale_call_type_desc;
        this.prepare_flag = prepare_flag;
        this.reject_flag = reject_flag;
        this.follow_flag = follow_flag;
        this.asset = asset ? asset : new __WEBPACK_IMPORTED_MODULE_2__Sale_Call_Asset__["a" /* SaleCallAsset */](this.sale_call_no, this.seq_no);
        this.visitOutSide = visitOutSide ? visitOutSide : new __WEBPACK_IMPORTED_MODULE_1__Sale_Call_VisitOutSide__["a" /* SaleCallVisitOutSide */](this.sale_call_no, this.seq_no, this.call_visit_by, this.sale_call_dt);
        this.listAttendeesB = listAttendeesB;
        this.listAttendeesC = listAttendeesC;
    }
    SaleCallDetail.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new SaleCallDetail(json[i].sale_call_no, json[i].seq_no, json[i].sale_call_dt, json[i].sale_call_type, json[i].last_upd, json[i].usr_upd, json[i].call_visit_date, json[i].call_visit_by, json[i].follow_up_point, json[i].follow_up_response, json[i].follow_date, json[i].sale_call_note, json[i].traffic, json[i].interview, json[i].cont_person_code, json[i].input_by, json[i].input_date, json[i].cancel_date, json[i].purpose, json[i].call_result_flg, json[i].call_result_detail, json[i].submit_flg, json[i].mobile_sorce, json[i].call_by_name, json[i].title_en, json[i].title_th, json[i].name_en, json[i].name_th, json[i].department, json[i].phone, json[i].phone_ext, json[i].mobile, json[i].email, json[i].position, json[i].title_en_desc, json[i].purpose_full, json[i].call_result_detail_desc, json[i].result_reason_col10, json[i].sale_call_type_desc, json[i].prepare_flag, json[i].reject_flag, json[i].follow_flag, __WEBPACK_IMPORTED_MODULE_2__Sale_Call_Asset__["a" /* SaleCallAsset */].parse(json[i].SALE_CALL_ASSET), __WEBPACK_IMPORTED_MODULE_1__Sale_Call_VisitOutSide__["a" /* SaleCallVisitOutSide */].parse(json[i].SALE_CALL_VISIT_OUTSIDE), __WEBPACK_IMPORTED_MODULE_0__Sale_Call_Attendees__["a" /* SaleCallAttendees */].parse(json[i].SALE_CALL_VISIT_ATTENDEES_B), __WEBPACK_IMPORTED_MODULE_0__Sale_Call_Attendees__["a" /* SaleCallAttendees */].parse(json[i].SALE_CALL_VISIT_ATTENDEES_C)));
            }
        }
        return data;
    };
    return SaleCallDetail;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Exposure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleCallExposure; });
/**
 * Created by pongsatorn.an on 24/08/2560.
 */
var SaleCallExposure = /** @class */ (function () {
    function SaleCallExposure(id, product, exposure, os_balance, maturity_date, highest_amt, with_collateral, with_out_collateral, bl_flg, discount_creditline, approve_type, min_eff_rate, cap, ca_approve_date, down_percent, fin_amt_e_vat, grade, installment, net_irr, paid) {
        this._id = id;
        this._product = product;
        this._exposure = exposure;
        this._os_balance = os_balance;
        this._maturity_date = maturity_date;
        this._highest_amt = highest_amt;
        this._with_collateral = with_collateral;
        this._with_out_collateral = with_out_collateral;
        this._bl_flg = bl_flg;
        this._discount_creditline = discount_creditline;
        this._approve_type = approve_type;
        this._min_eff_rate = min_eff_rate;
        this._cap = cap;
        this._ca_approve_date = ca_approve_date;
        this._down_percent = down_percent;
        this._fin_amt_e_vat = fin_amt_e_vat;
        this._grade = grade;
        this._installment = installment;
        this._net_irr = net_irr;
        this._paid = paid;
    }
    Object.defineProperty(SaleCallExposure.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "product", {
        get: function () {
            return this._product;
        },
        set: function (value) {
            this._product = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "exposure", {
        get: function () {
            return this._exposure;
        },
        set: function (value) {
            this._exposure = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "os_balance", {
        get: function () {
            return this._os_balance;
        },
        set: function (value) {
            this._os_balance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "maturity_date", {
        get: function () {
            return this._maturity_date;
        },
        set: function (value) {
            this._maturity_date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "highest_amt", {
        get: function () {
            return this._highest_amt;
        },
        set: function (value) {
            this._highest_amt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "with_collateral", {
        get: function () {
            return this._with_collateral;
        },
        set: function (value) {
            this._with_collateral = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "with_out_collateral", {
        get: function () {
            return this._with_out_collateral;
        },
        set: function (value) {
            this._with_out_collateral = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "bl_flg", {
        get: function () {
            return this._bl_flg;
        },
        set: function (value) {
            this._bl_flg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "discount_creditline", {
        get: function () {
            return this._discount_creditline;
        },
        set: function (value) {
            this._discount_creditline = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "approve_type", {
        get: function () {
            return this._approve_type;
        },
        set: function (value) {
            this._approve_type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "min_eff_rate", {
        get: function () {
            return this._min_eff_rate;
        },
        set: function (value) {
            this._min_eff_rate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "cap", {
        get: function () {
            return this._cap;
        },
        set: function (value) {
            this._cap = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "ca_approve_date", {
        get: function () {
            return this._ca_approve_date;
        },
        set: function (value) {
            this._ca_approve_date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "down_percent", {
        get: function () {
            return this._down_percent;
        },
        set: function (value) {
            this._down_percent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "fin_amt_e_vat", {
        get: function () {
            return this._fin_amt_e_vat;
        },
        set: function (value) {
            this._fin_amt_e_vat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "grade", {
        get: function () {
            return this._grade;
        },
        set: function (value) {
            this._grade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "installment", {
        get: function () {
            return this._installment;
        },
        set: function (value) {
            this._installment = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "net_irr", {
        get: function () {
            return this._net_irr;
        },
        set: function (value) {
            this._net_irr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallExposure.prototype, "paid", {
        get: function () {
            return this._paid;
        },
        set: function (value) {
            this._paid = value;
        },
        enumerable: true,
        configurable: true
    });
    SaleCallExposure.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new SaleCallExposure(json[i].ID, json[i].PRODUCT, json[i].EXPOSURE, json[i].OS_BALANCE, json[i].MATURITY_DATE, json[i].HIGHEST_AMT, json[i].WITH_COLLATERAL, json[i].WITH_OUT_COLLATERAL, json[i].BL_FLG, json[i].DISCOUNT_CREDITLINE, json[i].APPROVE_TYPE, json[i].MIN_EFF_RATE, json[i].CAP, json[i].CA_APPROVE_DATE, json[i].DOWN_PERCENT, json[i].FIN_AMT_E_VAT, json[i].GRADE, json[i].INSTALLMENT, json[i].NET_IRR, json[i].PAID));
        }
        return data;
    };
    return SaleCallExposure;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Head.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleCallHead; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sale_Call_Detail__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Detail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sale_Call_History__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-History.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sale_Call_Pcnt__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Pcnt.ts");
/**
 * Created by pongsatorn.an on 15/08/2560.
 */



var SaleCallHead = /** @class */ (function () {
    function SaleCallHead(SALE_CALL_NO, COMP_THA_NME, COMP_ENG_NME, COMP_ENT_CODE, F_NAME, F_NAME_E, CUS_STATUS, INTRO_MTHD_CD, INTRO_BY_CD, MD_NAME, NATIONALITY, ADDR, TEL, FAX, E_MAIL, WEBSITE, OWNR, CURRENT_TASK, RESULT_CODE, RESULT_REMARK, CROSS_SELLING, DIRECT_MK, REJECT_DATE, REJECT_REASON, CANCEL_DATE, CANCEL_REASON, INPUT_BY, INPUT_DATE, COMP_ENT_CODE2, CONNECT_SINCE, BUSSINESS_TYPE, ESTABLISHED_YEAR, REGIS_CAPITAL_AMT, PAID_UP_CAPITAL_AMT, BUSSINESS_DETAIL, INDUSTRY_CODE, RELATE_COMPANY, PERFORMANCE_YEAR, SALE_AMT, NET_PROFIT_AMT, NET_WORTH_AMT, MAIN_BANK, COMP_L_THA_NME, COMP_L_ENG_NME, SOURCE, PRV_CODE, NET_WORTH_YEAR, COM_CODE, MOBILE_SOURCE, PREBRANCH_CODE, DEALER_TYPE, OTH_LOAN_MKT_FLAG, TEAM_TYPE_MKT, CARD_TYPE, NEW_CARD_NO, ENT_SOURCE, ENT_SOURCE_SUB, cluster, bussiness_detail_name, mkt_name, intro_by_cd_full, listDetail, listHistory, listPCNT) {
        this.sale_call_no = SALE_CALL_NO ? SALE_CALL_NO : '';
        this.comp_tha_nme = COMP_THA_NME;
        this.comp_eng_nme = COMP_ENG_NME;
        this.comp_ent_code = COMP_ENT_CODE;
        this.f_name = F_NAME;
        this.f_name_e = F_NAME_E;
        this.cus_status = CUS_STATUS ? CUS_STATUS : 'N';
        this.intro_mthd_cd = INTRO_MTHD_CD;
        this.intro_by_cd = INTRO_BY_CD;
        this.md_name = MD_NAME;
        this.nationality = NATIONALITY;
        this.addr = ADDR;
        this.tel = TEL;
        this.fax = FAX;
        this.e_mail = E_MAIL;
        this.website = WEBSITE;
        this.ownr = OWNR;
        this.current_task = CURRENT_TASK;
        this.result_code = RESULT_CODE;
        this.result_remark = RESULT_REMARK;
        this.cross_selling = CROSS_SELLING;
        this.direct_mk = DIRECT_MK;
        this.reject_date = REJECT_DATE;
        this.reject_reason = REJECT_REASON;
        this.cancel_date = CANCEL_DATE;
        this.cancel_reason = CANCEL_REASON;
        this.input_by = INPUT_BY;
        this.input_date = INPUT_DATE;
        this.comp_ent_code2 = COMP_ENT_CODE2;
        this.connect_since = CONNECT_SINCE;
        this.bussiness_type = BUSSINESS_TYPE;
        this.established_year = ESTABLISHED_YEAR;
        this.regis_capital_amt = REGIS_CAPITAL_AMT ? REGIS_CAPITAL_AMT : 0;
        this.paid_up_capital_amt = PAID_UP_CAPITAL_AMT ? PAID_UP_CAPITAL_AMT : 0;
        this.bussiness_detail = BUSSINESS_DETAIL;
        this.industry_code = INDUSTRY_CODE;
        this.relate_company = RELATE_COMPANY;
        this.performance_year = PERFORMANCE_YEAR ? PERFORMANCE_YEAR : 0;
        this.sale_amt = SALE_AMT ? SALE_AMT : 0;
        this.net_profit_amt = NET_PROFIT_AMT ? NET_PROFIT_AMT : 0;
        this.net_worth_amt = NET_WORTH_AMT ? NET_WORTH_AMT : 0;
        this.main_bank = MAIN_BANK;
        this.comp_l_tha_nme = COMP_L_THA_NME;
        this.comp_l_eng_nme = COMP_L_ENG_NME;
        this.source = SOURCE;
        this.prv_code = PRV_CODE;
        this.net_worth_year = NET_WORTH_YEAR;
        this.com_code = COM_CODE;
        this.mobile_source = MOBILE_SOURCE;
        this.prebranch_code = PREBRANCH_CODE;
        this.dealer_type = DEALER_TYPE;
        this.oth_loan_mkt_flag = OTH_LOAN_MKT_FLAG;
        this.team_type_mkt = TEAM_TYPE_MKT;
        this.card_type = CARD_TYPE;
        this.new_card_no = NEW_CARD_NO;
        this.ent_source = ENT_SOURCE;
        this.ent_source_sub = ENT_SOURCE_SUB;
        this.cluster = cluster;
        this.bussiness_detail_name = bussiness_detail_name;
        this.mkt_name = mkt_name;
        this.intro_by_cd_full = intro_by_cd_full;
        this.listDetail = listDetail;
        this.listHistory = listHistory;
        this.listPCNT = listPCNT;
    }
    SaleCallHead.parse = function (json) {
        return new SaleCallHead(json.SALE_CALL_NO, json.COMP_THA_NME, json.COMP_ENG_NME, json.COMP_ENT_CODE, json.F_NAME, json.F_NAME_E, json.CUS_STATUS, json.INTRO_MTHD_CD, json.INTRO_BY_CD, json.MD_NAME, json.NATIONALITY, json.ADDR, json.TEL, json.FAX, json.E_MAIL, json.WEBSITE, json.OWNR, json.CURRENT_TASK, json.RESULT_CODE, json.RESULT_REMARK, json.CROSS_SELLING, json.DIRECT_MK, json.REJECT_DATE, json.REJECT_REASON, json.CANCEL_DATE, json.CANCEL_REASON, json.INPUT_BY, json.INPUT_DATE, json.COMP_ENT_CODE2, json.CONNECT_SINCE, json.BUSSINESS_TYPE, json.ESTABLISHED_YEAR, json.REGIS_CAPITAL_AMT, json.PAID_UP_CAPITAL_AMT, json.BUSSINESS_DETAIL, json.INDUSTRY_CODE, json.RELATE_COMPANY, json.PERFORMANCE_YEAR, json.SALE_AMT, json.NET_PROFIT_AMT, json.NET_WORTH_AMT, json.MAIN_BANK, json.COMP_L_THA_NME, json.COMP_L_ENG_NME, json.SOURCE, json.PRV_CODE, json.NET_WORTH_YEAR, json.COM_CODE, json.MOBILE_SOURCE, json.PREBRANCH_CODE, json.DEALER_TYPE, json.OTH_LOAN_MKT_FLAG, json.TEAM_TYPE_MKT, json.CARD_TYPE, json.NEW_CARD_NO, json.ENT_SOURCE, json.ENT_SOURCE_SUB, json.CLUSTER, json.BUSSINESS_DETAIL_NAME, json.MKT_NAME, json.INTRO_BY_CD_FULL, __WEBPACK_IMPORTED_MODULE_0__Sale_Call_Detail__["a" /* SaleCallDetail */].parse(json.LIST_SALE_CALL_DETAIL), __WEBPACK_IMPORTED_MODULE_1__Sale_Call_History__["a" /* SaleCallHistory */].parse(json.LIST_SALE_CALL_History), __WEBPACK_IMPORTED_MODULE_2__Sale_Call_Pcnt__["a" /* SaleCallPcnt */].parse(json.LIST_SALE_CALL_PCNT));
    };
    return SaleCallHead;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-History.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleCallHistory; });
/**
 * Created by pongsatorn.an on 24/08/2560.
 */
var SaleCallHistory = /** @class */ (function () {
    function SaleCallHistory(sale_call_no, seq_no, comp_ent_code, new_card_no, sale_call_dt, call_visit_by, sale_call_note, follow_up_point) {
        this._sale_call_no = sale_call_no;
        this._seq_no = seq_no;
        this._comp_ent_code = comp_ent_code;
        this._new_card_no = new_card_no;
        this._sale_call_dt = sale_call_dt;
        this._call_visit_by = call_visit_by;
        this._sale_call_note = sale_call_note;
        this._follow_up_point = follow_up_point;
    }
    Object.defineProperty(SaleCallHistory.prototype, "sale_call_no", {
        get: function () {
            return this._sale_call_no;
        },
        set: function (value) {
            this._sale_call_no = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallHistory.prototype, "seq_no", {
        get: function () {
            return this._seq_no;
        },
        set: function (value) {
            this._seq_no = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallHistory.prototype, "comp_ent_code", {
        get: function () {
            return this._comp_ent_code;
        },
        set: function (value) {
            this._comp_ent_code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallHistory.prototype, "new_card_no", {
        get: function () {
            return this._new_card_no;
        },
        set: function (value) {
            this._new_card_no = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallHistory.prototype, "sale_call_dt", {
        get: function () {
            return this._sale_call_dt;
        },
        set: function (value) {
            this._sale_call_dt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallHistory.prototype, "call_visit_by", {
        get: function () {
            return this._call_visit_by;
        },
        set: function (value) {
            this._call_visit_by = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallHistory.prototype, "sale_call_note", {
        get: function () {
            return this._sale_call_note;
        },
        set: function (value) {
            this._sale_call_note = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleCallHistory.prototype, "follow_up_point", {
        get: function () {
            return this._follow_up_point;
        },
        set: function (value) {
            this._follow_up_point = value;
        },
        enumerable: true,
        configurable: true
    });
    SaleCallHistory.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new SaleCallHistory(json[i].SALE_CALL_NO, json[i].SEQ_NO, json[i].COMP_ENT_CODE, json[i].NEW_CARD_NO, json[i].SALE_CALL_DT, json[i].CALL_VISIT_BY, json[i].SALE_CALL_NOTE, json[i].FOLLOW_UP_POINT));
            }
        }
        return data;
    };
    return SaleCallHistory;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Pcnt.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleCallPcnt; });
/**
 * Created by pongsatorn.an on 09/11/2560.
 */
var SaleCallPcnt = /** @class */ (function () {
    function SaleCallPcnt(ent_code, new_ind_code, ind_pcnt, rmrk, xold_ind_code, com_code, sub_id, input_user, last_update, sale_call_no, new_ind_decs, old_ind_decs) {
        this.ent_code = ent_code;
        this.new_ind_code = new_ind_code;
        this.ind_pcnt = ind_pcnt;
        this.rmrk = rmrk;
        this.xold_ind_code = xold_ind_code;
        this.com_code = com_code;
        this.sub_id = sub_id;
        this.input_user = input_user;
        this.last_update = last_update;
        this.sale_call_no = sale_call_no;
        this.new_ind_decs = new_ind_decs;
        this.old_ind_decs = old_ind_decs;
    }
    SaleCallPcnt.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new SaleCallPcnt(json[i].ent_code, json[i].new_ind_code, json[i].ind_pcnt, json[i].rmrk, json[i].xold_ind_code, json[i].com_code, json[i].sub_id, json[i].input_user, json[i].last_update, json[i].sale_call_no, json[i].new_ind_decs, json[i].old_ind_decs));
            }
        }
        return data;
    };
    return SaleCallPcnt;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-VisitOutSide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleCallVisitOutSide; });
/**
 * Created by pongsatorn.an on 25/08/2560.
 */
var SaleCallVisitOutSide = /** @class */ (function () {
    function SaleCallVisitOutSide(sale_call_no, seq_no, visit_by, visit_dt, from_time, to_time, visit_detail, mile_start, mile_end, doc_no, prce_per_km, joiner, travel_by, reqst_by, reqst_dt, last_usr, last_upd, withdraw_amt, travel_name, submit_flag) {
        if (seq_no === void 0) { seq_no = 1; }
        this.sale_call_no = sale_call_no;
        this.seq_no = seq_no;
        this.visit_by = visit_by;
        this.visit_dt = visit_dt;
        this.from_time = from_time ? from_time : '00:00';
        this.to_time = to_time ? to_time : '00:00';
        this.visit_detail = visit_detail;
        this.mile_start = mile_start;
        this.mile_end = mile_end;
        this.doc_no = doc_no;
        this.prce_per_km = prce_per_km ? prce_per_km : 0;
        this.joiner = joiner;
        this.travel_by = travel_by;
        this.reqst_by = reqst_by;
        this.reqst_dt = reqst_dt;
        this.last_usr = last_usr;
        this.last_upd = last_upd;
        this.withdraw_amt = withdraw_amt ? withdraw_amt : 0;
        this.travel_name = travel_name;
        this.submit_flag = submit_flag ? submit_flag : 'N';
    }
    SaleCallVisitOutSide.parse = function (json) {
        return new SaleCallVisitOutSide(json.sale_call_no, json.seq_no, json.visit_by, json.visit_dt, json.from_time, json.to_time, json.visit_detail, json.mile_start, json.mile_end, json.doc_no, json.prce_per_km, json.joiner, json.travel_by, json.reqst_by, json.reqst_dt, json.last_usr, json.last_upd, json.withdraw_amt, json.travel_name, json.submit_flag);
    };
    return SaleCallVisitOutSide;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.component.html":
/***/ (function(module, exports) {

module.exports = "<app-action-button-form title=\"Sale Call\" (onSave)=\"questionAction('SAVE')\"  (onSubmit)=\"questionAction('SUBMIT')\"\n                        [showSave]=\"btnFormSave\"  [showSubmit]=\"btnFormSubmit\"\n                        ></app-action-button-form>\n<div class=\"card m-1\">\n  <div class=\"card-header p-1\">\n    <p-panel header=\"Information\" [toggleable]=\"true\" >\n    <app-call-visit-head></app-call-visit-head>\n    </p-panel>\n  </div>\n  <div class=\"card-body p-1\">\n\n\n\n    <app-side-tab  [defaultMenuName]=\"'Information Detail'\">\n      <app-side-tab-panel>\n        <app-side-tab-level [nameMenu]=\"'Information Detail'\"  ></app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Call Detail & History'\"   ></app-side-tab-level>\n      </app-side-tab-panel>\n\n\n      <app-side-tab-main>\n        <app-side-tab-content [nameContent]=\"'Information Detail'\"   >\n          <app-call-visit-information></app-call-visit-information>\n        </app-side-tab-content>\n        <app-side-tab-content [nameContent]=\"'Call Detail & History'\">\n          <app-call-visit-detail></app-call-visit-detail>\n        </app-side-tab-content>\n      </app-side-tab-main>\n\n    </app-side-tab>\n\n\n  </div>\n\n  <!--------------------------------dialog alert ----------------------------->\n  <app-alert-dialog #dialogalert > </app-alert-dialog>\n  <app-alert-dialog #Questiondialog  (onOK)=\"actionOk()\"   ></app-alert-dialog>\n\n  <app-alert-dialog  #submitdialog   (onOK)=\"backToHome()\">\n  </app-alert-dialog>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleCallVisitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sale_call_visit_service__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Sale_Call_Head__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/Sale-Call-Head.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__call_visit_detail_call_visit_exposure_call_visit_exposure_service__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-exposure/call-visit-exposure.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SaleCallVisitComponent = /** @class */ (function () {
    function SaleCallVisitComponent(route, router, saleCallVisitService, saleCallExposureser, userStorage) {
        this.route = route;
        this.router = router;
        this.saleCallVisitService = saleCallVisitService;
        this.saleCallExposureser = saleCallExposureser;
        this.userStorage = userStorage;
        this.submitOrsave = '';
        this.vsale_no = '';
        this.vcard_no = '';
        this.msgs = [];
        this.code = "";
        this.username = "";
        this.comCode = "";
        this.task = "";
        this.btnFormSave = false;
        this.btnFormSubmit = false;
    }
    SaleCallVisitComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.code = this.userStorage.getCode();
        this.username = this.userStorage.getUserName();
        this.comCode = this.userStorage.getComCodePort();
        this.subParams = this.route.queryParams.subscribe(function (params) {
            _this.vsale_no = params['sale_call_no'];
            _this.vcard_no = params['card_no'];
            _this.task = params['task'];
            _this.controlActionForm(_this.task);
            if (_this.vcard_no) {
                _this.saleCallExposureser.setNewCardNO(_this.vcard_no);
            }
            _this.getSaleCall();
        });
    };
    SaleCallVisitComponent.prototype.ngOnDestroy = function () {
        if (this.subParams != null) {
            this.subParams.unsubscribe();
        }
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    SaleCallVisitComponent.prototype.getSaleCall = function () {
        var _this = this;
        var code = this.userStorage.getCode();
        var comCode = this.userStorage.getComCodePort();
        this.subscription = this.saleCallVisitService.getSaleCallHead_Detail("web", code, comCode, this.vsale_no).subscribe(function (json) {
            console.log(json);
            _this.saleCallVisitService.setListAns(json.LIST_DATA);
            _this.saleH = __WEBPACK_IMPORTED_MODULE_4__model_Sale_Call_Head__["a" /* SaleCallHead */].parse(json.DATA);
            if (!_this.saleH.ownr) {
                _this.saleH.ownr = code;
            }
            ;
            if (!_this.saleH.com_code) {
                _this.saleH.com_code = comCode;
            }
            _this.saleCallVisitService.setSaleCallHead(_this.saleH);
            _this.saleCallVisitService.setSaleCallDetail(_this.saleH.listDetail);
            if (!_this.vcard_no) {
                _this.saleCallExposureser.setNewCardNO(_this.saleH.new_card_no);
            }
        });
    };
    SaleCallVisitComponent.prototype.Savesalecall = function () {
        var _this = this;
        // this.dialogalert.reset() ;
        // this.dialogalert.setModeSingle(1);
        //
        //  if (this.saleCallVisitService.selectsaleD) {
        this.saleCallVisitService.sendSaleCall("web", this.username, this.comCode, this.vsale_no, "save").subscribe(function (data) {
            console.log(data);
            if (data.CODE != '500') {
                _this.router.navigate(['/SaleCall'], {
                    queryParams: {
                        sale_call_no: data.CODE,
                        task: _this.task
                    }
                });
                _this.dialogalert.setMessage("Save Complete");
                _this.dialogalert.open();
            }
            else {
                _this.dialogalert.setMessage("Save Error");
                _this.dialogalert.open();
            }
        });
        // }
        // else {
        //   this.dialogalert.setMessage("Please, Input Detail of Call");
        //   this.dialogalert.open();
        //
        // } ;
    };
    SaleCallVisitComponent.prototype.Submitsalecall = function () {
        var _this = this;
        this.saleCallVisitService.sendSaleCall("web", this.username, this.comCode, this.vsale_no, "submit").subscribe(function (test) {
            console.log(test);
            if (test.MSG.search('Success  submit') > -1) {
                _this.submitdialog.setAction('INFORMATION');
                _this.submitdialog.setMessage('Submit Complete');
                _this.submitdialog.open();
            }
            else {
                _this.dialogalert.setMessage("Submit Error");
                _this.dialogalert.open();
            }
            ;
        });
    };
    SaleCallVisitComponent.prototype.questionAction = function (action) {
        if (action == 'SAVE') {
            this.dialogalert.reset();
            this.dialogalert.setModeSingle(1);
            this.msgs = [];
            this.msgs = this.saleCallVisitService.validationOnSave();
            if (this.msgs.length > 1) {
                this.dialogalert.setModeSingle(0);
                for (var i = 0; i < this.msgs.length; i++) {
                    this.dialogalert.addMessage(this.msgs[i].detail);
                }
                this.dialogalert.open();
            }
            else {
                this.submitOrsave = action;
                this.Questiondialog.setAction(action);
                this.Questiondialog.open();
            }
        }
        else if (action == 'SUBMIT') {
            this.dialogalert.reset();
            this.dialogalert.setModeSingle(1);
            this.msgs = [];
            this.msgs = this.saleCallVisitService.ValidationSaleCallHead();
            if (this.msgs.length > 1) {
                this.dialogalert.setModeSingle(0);
                for (var i = 0; i < this.msgs.length; i++) {
                    this.dialogalert.addMessage(this.msgs[i].detail);
                }
                this.dialogalert.open();
            }
            else {
                this.submitOrsave = action;
                this.Questiondialog.setAction(action);
                this.Questiondialog.open();
            }
        }
    };
    SaleCallVisitComponent.prototype.actionOk = function () {
        if (this.submitOrsave == 'SAVE') {
            this.Savesalecall();
        }
        else if (this.submitOrsave == 'SUBMIT') {
            this.Submitsalecall();
        }
    };
    SaleCallVisitComponent.prototype.backToHome = function () {
        this.router.navigate(['/home']);
    };
    SaleCallVisitComponent.prototype.controlActionForm = function (task) {
        this.btnFormSave = true;
        this.btnFormSubmit = true;
        if (!task) {
            this.btnFormSubmit = false;
            this.btnFormSave = false;
        }
        else if (task == 'Wait For Apply CA') {
            this.btnFormSubmit = false;
            this.btnFormSave = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogalert'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], SaleCallVisitComponent.prototype, "dialogalert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Questiondialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], SaleCallVisitComponent.prototype, "Questiondialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('submitdialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], SaleCallVisitComponent.prototype, "submitdialog", void 0);
    SaleCallVisitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sale-call-visit',
            template: __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_2__sale_call_visit_service__["a" /* SaleCallVisitService */], __WEBPACK_IMPORTED_MODULE_6__call_visit_detail_call_visit_exposure_call_visit_exposure_service__["a" /* CallVisitExposureservice */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__sale_call_visit_service__["a" /* SaleCallVisitService */],
            __WEBPACK_IMPORTED_MODULE_6__call_visit_detail_call_visit_exposure_call_visit_exposure_service__["a" /* CallVisitExposureservice */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], SaleCallVisitComponent);
    return SaleCallVisitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleCallVisitModule", function() { return SaleCallVisitModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sale_call_visit_component__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sale_call_visit_routing_module__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_center_center_module__ = __webpack_require__("../../../../../src/app/shared/center/center.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__call_visit_head_call_visit_head_component__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-head/call-visit-head.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__call_visit_information_call_visit_information_component__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-information/call-visit-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_currency_mask__ = __webpack_require__("../../../../ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__call_visit_detail_call_visit_detail_component__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__call_visit_detail_call_visit_result_call_visit_result_component__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-result/call-visit-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__call_visit_detail_call_visit_credit_type_asset_call_visit_credit_type_asset_component__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-credit-type-asset/call-visit-credit-type-asset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__call_visit_detail_call_visit_attendees_call_visit_attendees_component__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-attendees/call-visit-attendees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__call_visit_detail_call_visit_expense_call_visit_expense_component__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-expense/call-visit-expense.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__call_visit_detail_call_visit_exposure_call_visit_exposure_component__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-exposure/call-visit-exposure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__call_visit_detail_call_visit_calling_history_call_visit_calling_history_component__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-calling-history/call-visit-calling-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__entity_entity_module__ = __webpack_require__("../../../../../src/app/main/mst/entity/entity.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__contactperson_contactperson_module__ = __webpack_require__("../../../../../src/app/main/mst/contactperson/contactperson.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__call_visit_detail_call_visit_telesale_call_visti_telesale_component__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/call-visit-detail/call-visit-telesale/call-visti-telesale.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// import {AgmCoreModule} from "@agm/core";
//
//
// const googleMapsCore = AgmCoreModule.forRoot({
//   apiKey : 'AIzaSyCTuueJ8iqoCoVVG96mvNL7_XWBC4iizr0',
//   ////   AIzaSyCTuueJ8iqoCoVVG96mvNL7_XWBC4iizr0   AIzaSyD1dcTmGu_H5Cy9bRw2b2Ld92TLTJumGTs
// });
var SaleCallVisitModule = /** @class */ (function () {
    function SaleCallVisitModule() {
    }
    SaleCallVisitModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__sale_call_visit_routing_module__["a" /* SaleCallVisitRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_center_center_module__["a" /* CenterModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_currency_mask__["CurrencyMaskModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_18_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SharedModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["KeyFilterModule"],
                __WEBPACK_IMPORTED_MODULE_17__entity_entity_module__["EntityModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PanelModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["TooltipModule"], __WEBPACK_IMPORTED_MODULE_19__contactperson_contactperson_module__["a" /* ContactpersonModule */]
                // ,googleMapsCore
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sale_call_visit_component__["a" /* SaleCallVisitComponent */], __WEBPACK_IMPORTED_MODULE_5__call_visit_head_call_visit_head_component__["a" /* CallVisitHeadComponent */],
                __WEBPACK_IMPORTED_MODULE_7__call_visit_information_call_visit_information_component__["a" /* CallVisitInformationComponent */], __WEBPACK_IMPORTED_MODULE_9__call_visit_detail_call_visit_detail_component__["a" /* CallVisitDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__call_visit_detail_call_visit_result_call_visit_result_component__["a" /* CallVisitResultComponent */], __WEBPACK_IMPORTED_MODULE_11__call_visit_detail_call_visit_credit_type_asset_call_visit_credit_type_asset_component__["a" /* CallVisitCreditTypeAssetComponent */],
                __WEBPACK_IMPORTED_MODULE_12__call_visit_detail_call_visit_attendees_call_visit_attendees_component__["a" /* CallVisitAttendeesComponent */], __WEBPACK_IMPORTED_MODULE_13__call_visit_detail_call_visit_expense_call_visit_expense_component__["a" /* CallVisitExpenseComponent */],
                __WEBPACK_IMPORTED_MODULE_14__call_visit_detail_call_visit_exposure_call_visit_exposure_component__["a" /* CallVisitExposureComponent */], __WEBPACK_IMPORTED_MODULE_15__call_visit_detail_call_visit_calling_history_call_visit_calling_history_component__["a" /* CallVisitCallingHistoryComponent */], __WEBPACK_IMPORTED_MODULE_20__call_visit_detail_call_visit_telesale_call_visti_telesale_component__["a" /* CallVistiTelesaleComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]]
        })
    ], SaleCallVisitModule);
    return SaleCallVisitModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleCallVisitRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sale_call_visit_component__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__sale_call_visit_component__["a" /* SaleCallVisitComponent */] }
];
var SaleCallVisitRoutingModule = /** @class */ (function () {
    function SaleCallVisitRoutingModule() {
    }
    SaleCallVisitRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], SaleCallVisitRoutingModule);
    return SaleCallVisitRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/sale-call-visit/sale-call-visit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleCallVisitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__ = __webpack_require__("../../../../../src/app/main/mst/sale-call-visit/model/ObjTemp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
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






var SaleCallVisitService = /** @class */ (function () {
    function SaleCallVisitService(http, service, userStorage) {
        this.http = http;
        this.service = service;
        this.userStorage = userStorage;
        this.eventsaleH = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.eventsaleD = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.eventselectsaleD = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        //END Dropdown List
        this.msgs = [];
    }
    SaleCallVisitService.prototype.ngOnDestroy = function () {
        console.log('Destroy Service Sale Call');
    };
    SaleCallVisitService.prototype.sendSaleCall = function (device, username, pccomcode, psalecall, psendflg) {
        /////// delete Detail & History
        this.saleH.listHistory = [];
        this.saleH.listDetail = [];
        this.VerifieddataSaleCall();
        var task_code = this.saleH.current_task ? this.saleH.current_task : 'Apply Sale Call';
        // const url =  'http://localhost:8080' + this.service.sale_call_api + `/ask/salecall/SendSaleCall`;
        var url = this.service.url + this.service.sale_call_api + "/ask/salecall/SendSaleCall";
        var data = {
            "device": device,
            "userName": username,
            "comCode": pccomcode,
            "saleCallNo": psalecall,
            "sendFlg": psendflg,
            "taskCode": task_code,
            "saleCallHead": this.saleH,
            "saleCallDetail": this.selectsaleD
        };
        console.log('Before send data');
        console.log(data);
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.post(url, data, options);
    };
    SaleCallVisitService.prototype.getSaleCallHead_Detail = function (device, userName, comCode, saleCallNo) {
        var url = this.service.url + this.service.sale_call_api + "/ask/salecall/PostSaleCallStore";
        var data = {
            "device": device,
            "userName": userName,
            "comCode": comCode,
            "saleCallNo": saleCallNo
        };
        //console.log(data)
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.post(url, data, options);
    };
    SaleCallVisitService.prototype.VerifieddataSaleCall = function () {
        var code = this.userStorage.getCode();
        this.saleH.input_by = code;
        if (this.selectsaleD) {
            this.selectsaleD.usr_upd = code;
            this.selectsaleD.call_visit_by = code;
        }
        this.selectsaleD.call_visit_date = this.selectsaleD.sale_call_dt ? this.selectsaleD.sale_call_dt : '';
    };
    SaleCallVisitService.prototype.setListAns = function (json) {
        this.ListVisit = [];
        this.ListPrebranch = [];
        this.ListFNMT = [];
        this.ListFNME = [];
        this.ListSOURCE = [];
        this.ListOFFICER = [];
        this.ListBUSTYPE = [];
        this.ListNATION = [];
        this.ListPROVINCE = [];
        this.ListNEWINDUSTRY = [];
        this.ListOLDINDUSTRY = [];
        this.ListREASONP = [];
        this.ListREASONF = [];
        this.ListREASONR = [];
        this.ListREASONRCF = [];
        this.ListREASONRCNF = [];
        this.ListBANK = [];
        this.ListEMP = [];
        for (var i = 0; i < json.length; i++) {
            if (json[i].TYPE == 'VISIT') {
                this.ListVisit.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
            else if (json[i].TYPE == 'Prebranch') {
                this.ListPrebranch.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
            else if (json[i].TYPE == 'FNMT') {
                this.ListFNMT.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
            else if (json[i].TYPE == 'FNME') {
                this.ListFNME.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
            else if (json[i].TYPE == 'SOURCE') {
                this.ListSOURCE.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
            else if (json[i].TYPE == 'OFFICER') {
                this.ListOFFICER.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
            else if (json[i].TYPE == 'BUS_TYPE') {
                this.ListBUSTYPE.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
            else if (json[i].TYPE == 'NATION') {
                this.ListNATION.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
            else if (json[i].TYPE == 'PROVINCE') {
                this.ListPROVINCE.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
            else if (json[i].TYPE == 'NEWINDUSTRY') {
                this.ListNEWINDUSTRY.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
            else if (json[i].TYPE == 'OLDINDUSTRY') {
                this.ListOLDINDUSTRY.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
            else if (json[i].TYPE == 'REASON') {
                if (json[i].KEY2 == 'POT') {
                    this.ListREASONP.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
                }
                else if (json[i].KEY2 == 'FOL_UP') {
                    this.ListREASONF.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
                }
                else if (json[i].KEY2 == 'REJ') {
                    this.ListREASONR.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
                }
                else if (json[i].KEY2 == 'REJ_CALL') {
                    this.ListREASONRCF.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
                }
                else if (json[i].KEY2 == 'REJ_CNF') {
                    this.ListREASONRCNF.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
                }
            }
            else if (json[i].TYPE == 'AMTTRAVEL') {
                this.TravelAmount = new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE);
            }
            else if (json[i].TYPE == 'BANK') {
                this.ListBANK.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
            else if (json[i].TYPE == 'EMP') {
                this.ListEMP.push(new __WEBPACK_IMPORTED_MODULE_3__model_ObjTemp__["a" /* ObjTemp */](json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
            }
        }
    };
    ;
    SaleCallVisitService.prototype.setselectsaleD = function (inSaleCallD) {
        this.selectsaleD = inSaleCallD;
        this.eventselectsaleD.emit(inSaleCallD);
    };
    SaleCallVisitService.prototype.reFreshSelectsaleD = function () {
        this.setselectsaleD(this.selectsaleD);
        // this.eventselectsaleD.emit(this.selectsaleD );
    };
    SaleCallVisitService.prototype.setSaleCallHead = function (inSaleCallH) {
        this.saleH = inSaleCallH;
        this.eventsaleH.emit(inSaleCallH);
    };
    SaleCallVisitService.prototype.setSaleCallDetail = function (inSaleCallD) {
        this.saleD = inSaleCallD;
        this.eventsaleD.emit(inSaleCallD);
    };
    SaleCallVisitService.prototype.getAttendees = function (attenType) {
        var url;
        if (attenType == "B") {
            url = this.service.url + this.service.sale_call_api + "/ask/salecall/GetATTND?device=web&user=sira.ch&attndtype=B&code=BGPL";
        }
        else if (attenType == "C") {
            if (this.saleH.comp_ent_code != "" && !Object(__WEBPACK_IMPORTED_MODULE_4_util__["isUndefined"])(this.saleH.comp_ent_code)) {
                url = this.service.url + this.service.sale_call_api + ("/ask/salecall/GetATTND?device=web&user=sira.ch&attndtype=C&code=" + this.saleH.comp_ent_code);
            }
        }
        return url;
    };
    SaleCallVisitService.prototype.ValidationSaleCallHead = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: 'Please, Input : ' });
        if (this.selectsaleD) {
            if ((!this.saleH.new_card_no) && (this.selectsaleD.call_result_flg == "P")) {
                this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '-  Card ID' });
            }
            if (!this.saleH.f_name) {
                this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '-  Intial Thai' });
            }
            if (!this.saleH.comp_tha_nme) {
                this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '-  Name Thai ' });
            }
            if (!this.saleH.connect_since) {
                this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '-  Connect Since' });
            }
            var saleinfo = this.ValidationSaleCallinfo();
            if (saleinfo.length > 0) {
                this.msgs = this.msgs.concat(saleinfo);
            }
            var saleresult = this.ValidationSaleCallresult();
            if (saleresult.length > 0) {
                this.msgs = this.msgs.concat(saleresult);
            }
            var saleasset = this.ValidationSaleCallAsset();
            if (saleasset.length > 0) {
                this.msgs = this.msgs.concat(saleasset);
            }
            var saleoth = this.validationAttenAndOutside();
            if (saleoth.length > 0) {
                this.msgs = this.msgs.concat(saleoth);
            }
        }
        else {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '-  Detail this Call' });
        }
        return this.msgs;
    };
    SaleCallVisitService.prototype.ValidationSaleCallinfo = function () {
        var thismsg = [];
        if (!this.saleH.bussiness_type) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '-  Bussiness Type' });
        }
        if ((!this.saleH.bussiness_detail)
            && (this.selectsaleD.call_result_flg != "CNF")) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Specifies' });
        }
        if ((!this.saleH.md_name)
            && ((this.selectsaleD.sale_call_type == 'V')
                || (this.selectsaleD.call_result_flg == 'P'))) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Managing Direct ' });
        }
        if ((!this.saleH.addr)
            && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Address' });
        }
        if ((!this.saleH.tel)
            && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Tel' });
        }
        if (((!this.saleH.regis_capital_amt) && (this.saleH.regis_capital_amt <= 0))
            && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Register Capital' });
        }
        if (((!this.saleH.paid_up_capital_amt) && (this.saleH.paid_up_capital_amt <= 0))
            && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Paid Up Capital' });
        }
        if ((!this.saleH.performance_year)
            && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Sales Ended Year' });
        }
        if (((!this.saleH.sale_amt) && (this.saleH.sale_amt <= 0))
            && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Sales Ended Amount' });
        }
        if (((!this.saleH.net_profit_amt) && (this.saleH.net_profit_amt <= 0))
            && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Net Profit' });
        }
        if ((!this.saleH.net_worth_year)
            && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Net Worth Year' });
        }
        if (((!this.saleH.net_worth_amt) && (this.saleH.net_worth_amt <= 0))
            && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Net Worth Amount' });
        }
        if ((!this.saleH.established_year)
            && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Established Year' });
        }
        return thismsg;
    };
    SaleCallVisitService.prototype.ValidationSaleCallresult = function () {
        var thismsg = [];
        if (this.selectsaleD.submit_flg == 'Y') {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Please Add New Call Detail' });
        }
        if (!this.selectsaleD.sale_call_type) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Call/Visit Type' });
        }
        if (!this.selectsaleD.sale_call_dt) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Call/Visit Date' });
        }
        if ((this.selectsaleD.sale_call_type == 'V') && (!this.selectsaleD.purpose)) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Visit Purpose' });
        }
        if (((this.selectsaleD.sale_call_type == 'CF') || (this.selectsaleD.sale_call_type == 'V'))
            && (!this.selectsaleD.sale_call_note)) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Call/Visit Note' });
        }
        if (!this.selectsaleD.call_result_flg) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Summary Call Results' });
        }
        if ((this.selectsaleD.call_result_flg == 'P') && (!this.selectsaleD.call_result_detail)) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Reason for Potential Customer' });
        }
        if ((this.selectsaleD.call_result_flg == 'R') && (!this.selectsaleD.call_result_detail)) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Reason for Reject' });
        }
        if ((this.selectsaleD.call_result_flg == 'F') && (!this.selectsaleD.follow_date)) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Follow Up/Date' });
        }
        if ((this.selectsaleD.call_result_flg == 'F') && (!this.selectsaleD.follow_up_point)) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Follow Up/Note' });
        }
        if ((!this.selectsaleD.follow_date) && (this.selectsaleD.call_result_flg == 'F')
            && (this.selectsaleD.sale_call_dt > this.selectsaleD.follow_date)) {
            this.msgs.push({
                severity: 'warnings',
                summary: 'warnings Message',
                detail: '   - Follow Up More Call/Visit Date* '
            });
        }
        // if ((this.selectsaleD.follow_date < this.date) && (!this.selectsaleD)
        //   && (this.selectsaleD.call_result_flg == 'F')) {
        //   this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Follow Up More Today'});
        // }
        if ((this.selectsaleD.call_result_flg == 'F') && (false)) {
            this.msgs.push({
                severity: 'warnings',
                summary: 'warnings Message',
                detail: '   - Follow Up Not More Than 90 days,From today '
            });
        }
        // if (((this.selectsaleD.sale_call_type == 'CF') || (this.selectsaleD.sale_call_type == 'V'))
        //    &&(!this.selectsaleD.cont_person_code)) {
        //   this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Contact Person'});
        // }
        if (((this.selectsaleD.sale_call_type == 'CF') || (this.selectsaleD.sale_call_type == 'V'))
            && (!this.selectsaleD.interview)) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Interview Time' });
        }
        if ((this.selectsaleD.sale_call_type == 'V') && (!this.selectsaleD.traffic)) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Traffic Time' });
        }
        return thismsg;
    };
    SaleCallVisitService.prototype.ValidationSaleCallAsset = function () {
        var thismsg = [];
        if ((this.selectsaleD.asset.credit_type == '') && (this.selectsaleD.call_result_flg == 'P')) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Credit Type' });
        }
        if ((this.selectsaleD.asset.fin_amt <= 0)
            && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Cost/Credit Line' });
        }
        if (this.selectsaleD.asset.credit_type) {
            if (((this.selectsaleD.asset.credit_type.search("HP") > -1) || (this.selectsaleD.asset.credit_type.search("LS") > -1))
                && (this.selectsaleD.asset.asset_type == '') && (this.selectsaleD.sale_call_type == 'V')) {
                this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Financing Asset' });
            }
            if (((this.selectsaleD.asset.credit_type.search("HP") > -1) || (this.selectsaleD.asset.credit_type.search("LS") > -1))
                && (this.selectsaleD.asset.open_lc == '')
                && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))
                && (this.selectsaleD.asset.credit_type != 'P')) {
                this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Open L/C' });
            }
            if (((this.selectsaleD.asset.credit_type.search("HP") > -1) || (this.selectsaleD.asset.credit_type.search("LS") > -1))
                && (this.selectsaleD.asset.brand == '')
                && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))
                && (this.selectsaleD.asset.credit_type != 'P')) {
                this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Brand' });
            }
            if (((this.selectsaleD.asset.credit_type.search("HP") > -1) || (this.selectsaleD.asset.credit_type.search("LS") > -1))
                && (this.selectsaleD.asset.brand == '')
                && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))
                && (this.selectsaleD.asset.credit_type != 'P')) {
                this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Specifies' });
            }
            if (((this.selectsaleD.asset.credit_type.search("HP") > -1) || (this.selectsaleD.asset.credit_type.search("LS") > -1))
                && (this.selectsaleD.asset.purpose == '')
                && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
                this.msgs.push({
                    severity: 'warnings',
                    summary: 'warnings Message',
                    detail: '   - The purpose of new credit line'
                });
            }
        }
        return thismsg;
    };
    SaleCallVisitService.prototype.validationAttenAndOutside = function () {
        var thismsg = [];
        if ((this.selectsaleD.sale_call_type == 'V') && (!this.selectsaleD.listAttendeesB)) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Attendees (BGPL)' });
        }
        if ((this.selectsaleD.sale_call_type == 'V') && (!this.selectsaleD.listAttendeesC)) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Attendees (Customer)' });
        }
        if ((this.selectsaleD.sale_call_type == 'V') && (this.selectsaleD.visitOutSide.travel_by == '')) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Travel By' });
        }
        if ((this.selectsaleD.sale_call_type == 'V') && (this.selectsaleD.visitOutSide.travel_by == 'OTH')
            && (this.selectsaleD.visitOutSide.travel_name == '')) {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Other MKT Name' });
        }
        if ((this.selectsaleD.sale_call_type == 'V') && (this.selectsaleD.call_visit_date)) {
            console.log(this.selectsaleD.visitOutSide);
            if (!this.selectsaleD.visitOutSide) {
                this.msgs.push({
                    severity: 'warnings',
                    summary: 'warnings Message',
                    detail: ' this visit time don have Expense '
                });
            }
            else {
                if (this.selectsaleD.visitOutSide.travel_by == 'O') {
                    if (!this.selectsaleD.visitOutSide.from_time) {
                        this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - From Time' });
                    }
                    if (!this.selectsaleD.visitOutSide.to_time) {
                        this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - To Time' });
                    }
                    if (!this.selectsaleD.visitOutSide.mile_start) {
                        this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Mile Start' });
                    }
                    if (!this.selectsaleD.visitOutSide.mile_end) {
                        this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Mile End' });
                    }
                    if (!this.selectsaleD.visitOutSide.visit_detail) {
                        this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: '   - Address Description of Visit' });
                    }
                    // let Str_Chk_Mile = this.MileCalc;
                    // if (Str_Chk_Mile)
                    // {
                    //   this.msgs.push({severity:'warnings', summary:'warnings Message', detail:'   - ' + Str_Chk_Mile });
                    // }
                }
            }
        }
        return thismsg;
    };
    SaleCallVisitService.prototype.validationOnSave = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: 'Please : ' });
        if (this.selectsaleD) {
            var saleresult = this.ValidationSaleCallresult();
            if (saleresult.length > 0) {
                this.msgs = this.msgs.concat(saleresult);
            }
        }
        else {
            this.msgs.push({ severity: 'warnings', summary: 'warnings Message', detail: 'New Detail of Call ' });
        }
        return this.msgs;
    };
    SaleCallVisitService.prototype.checkCustomer = function (device, user, comcode, newcard, entcode) {
        var url = decodeURI(this.service.url + this.service.sale_call_api + ("/ask/salecall/Getcheckcustomer?device=" + device + "&user=" + user + "&comcode=" + comcode + "&newcard=" + newcard + "&entcode=" + entcode));
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        console.log(url);
        return this.http.get(url, options);
    };
    SaleCallVisitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__["a" /* ServiceEndpoint */],
            __WEBPACK_IMPORTED_MODULE_5__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], SaleCallVisitService);
    return SaleCallVisitService;
}());



/***/ })

});
//# sourceMappingURL=sale-call-visit.module.chunk.js.map