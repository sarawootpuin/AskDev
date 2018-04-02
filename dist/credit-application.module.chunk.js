webpackJsonp(["credit-application.module"],{

/***/ "../../../../../src/app/main/mst/credit-application/ca-approve-lv/ca-approve-lv.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Approve Level / Comment & Reason\">\n  <div class=\"main-container\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label class=\"my-3\"> Authority </label>\n          <input class=\"form-control\" disabled >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label class=\"my-1\"> Approve CA Level </label>\n          <p-dataTable selectionMode=\"single\" [value]= \"listcacusapv\"\n                       [(selection)]=\"selectCaCusApv\"\n                       [scrollable]=\"true\"\n                       scrollHeight=\"200px\"  scrollWidth=\"400px\"\n                       [responsive]=\"true\">\n            <p-column field=\"approve_level\" header=\"Level \" [style]=\"{'width':'50px'  }\" ></p-column>\n            <p-column field=\"apv_person_name\" header=\"Authorized approvers\"></p-column>\n            <p-column field=\"approve_date\" header=\" Approve date \"></p-column>\n            <p-column field=\"apv_user_name\" header=\"Approvers \"></p-column>\n            <p-footer>\n              <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n              </div>\n            </p-footer>\n          </p-dataTable>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label class=\"my-1\">History </label>\n          <p-dataTable selectionMode=\"single\"\n                       [value]= \"listcaapvhist\"\n                       [(selection)]=\"selectCaApvhist\"\n                       [scrollable]=\"true\"\n                       scrollHeight=\"200px\"  scrollWidth=\"400px\"\n                       [responsive]=\"true\">\n            <p-column field=\"run_no\" header=\" SeqNo. \"  [style]=\"{'width':'50px' ,'height':'50px'   }\"></p-column>\n            <p-column field=\"approve_flg\" header=\"Y/N\"  [style]=\"{'width':'50px','height':'50px'}\"></p-column>\n            <p-column field=\"approve_name\" header=\"Name\"  [style]=\"{'width':'150px','height':'50px'}\"></p-column>\n            <p-column field=\"approve_date\" header=\"Date \"  [style]=\"{'width':'150px','height':'50px'}\"></p-column>\n            <p-column field=\"remark\" header=\"Reason \"  [style]=\"{'width':'400px','height':'50px'}\"></p-column>\n            <p-footer>\n              <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n              </div>\n            </p-footer>\n          </p-dataTable>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label> Key Comment </label>\n          <textarea class=\"form-control\" disabled ></textarea>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label> Reject Reason </label>\n          <textarea class=\"form-control\"  disabled  ></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-approve-lv/ca-approve-lv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaApproveLvComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaApproveLvComponent = /** @class */ (function () {
    function CaApproveLvComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaApproveLvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (value) {
            _this.listcaapvhist = value.listcaapvhist;
            if ((_this.listcaapvhist) && (_this.listcaapvhist.length > 1)) {
                _this.selectCaApvhist = _this.listcaapvhist[0];
                //this.onRowSelect(this.listBuyer[0]);
            }
            if (value.caentity) {
                if (value.caentity.listcusapv) {
                    _this.listcacusapv = value.caentity.listcusapv;
                    if (_this.listcacusapv.length > 1) {
                        _this.selectCaCusApv = _this.listcacusapv[0];
                    }
                }
            }
        });
    };
    CaApproveLvComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaApproveLvComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-approve-lv',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-approve-lv/ca-approve-lv.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaApproveLvComponent);
    return CaApproveLvComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-asset/asset-detail/asset-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div>\n    <div class=\"flex-column\">\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-6\">\n          <div class=\"form-group\">\n            <label>Finance Asset Type</label><br>\n            <select class=\"form-control\"\n                    [ngModel]=\"bgdetailSub?.asst_type\"\n                    (ngModelChange)=\"bgdetailSub.asst_type=$event;onChangeFat('');\">\n              <option></option>\n              <option *ngFor=\"let list of listFAT\"\n                      [selected]=\"list?.id_code == bgdetailSub?.asst_type\"\n                      [value]=\"list?.id_code\">{{list?.remark}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-6\">\n          <div class=\"form-group\">\n            <label>Finance Asset Code</label><br>\n            <select class=\"form-control\"\n                    [ngModel]=\"bgdetailSub?.asst_code\"\n                    (ngModelChange)=\"bgdetailSub.asst_code=$event;onChangeFac('');\">\n              <option></option>\n              <option *ngFor=\"let list of listFAC\"\n                      [selected]=\"list?.id_code == bgdetailSub?.asst_code\"\n                      [value]=\"list?.id_code\">{{list?.remark}}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-6\">\n          <div class=\"form-group\">\n            <label>Finance Asset Sub Code</label><br>\n            <select class=\"form-control\"\n                    [ngModel]=\"bgdetailSub?.asst_sub_code\"\n                    (ngModelChange)=\"bgdetailSub.asst_sub_code=$event\">\n              <option></option>\n              <option *ngFor=\"let list of listFAS\"\n                      [selected]=\"list?.id_code == bgdetailSub?.asst_sub_code\"\n                      [value]=\"list?.id_code\">{{list?.remark}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-6 mt-3\">\n          <div class=\"form-group\">\n            <input type=\"radio\" name=\"bt\" value=\"N\"\n                   [ngModel]=\"bgdetailSub?.asset_status\"\n                   (ngModelChange)=\"bgdetailSub.asset_status=$event\"> New Asset\n            <input type=\"radio\" name=\"bt\" value=\"U\"\n                   [ngModel]=\"bgdetailSub?.asset_status\"\n                   (ngModelChange)=\"bgdetailSub.asset_status=$event\"> Used Asset\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div>\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-3\">\n          <div class=\"form-group\">\n            <label>Brand </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bgdetailSub.brand_code\">\n          </div>\n        </div>\n        <div class=\"flex-md-column offset-3 col-md-3\">\n          <div class=\"form-group\">\n            <label>Model</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bgdetailSub.model_code\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-3\">\n          <div class=\"form-group\">\n            <label>Chassis</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bgdetailSub.chassis\">\n          </div>\n        </div>\n        <div class=\"flex-md-column offset-3 col-md-3\">\n          <div class=\"form-group\">\n            <label>Engine No.</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bgdetailSub.eng_num\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-3\">\n          <div class=\"form-group\">\n            <label>Year</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bgdetailSub.year\" [textMask]=\"{mask: textmask.yyyy }\">\n          </div>\n        </div>\n        <div class=\"flex-md-column offset-3 col-md-3\">\n          <div class=\"form-group\">\n            <label>Regis No.</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bgdetailSub.reg_num\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-3\">\n          <div class=\"form-group\">\n            <label>Color</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bgdetailSub.color\">\n          </div>\n        </div>\n        <div class=\"flex-md-column offset-3 col-md-3\">\n          <div class=\"form-group\">\n            <label>CC</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bgdetailSub.cc\" pKeyFilter=\"int\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-8\">\n          <div class=\"form-group\">\n            <label>Dealer Name</label><br>\n            <app-search-un app-search-un inuURL={{OutURL}}\n                           title=\"NAME;CODE;\"\n                           [iconOnly]=\"false\" [displaycol]=\"'COL1'\" [displaytext]=\"bgdetailSub.dealer_name\"\n                           [callApiOnShow]=\"false\"\n                           [searchParamName]=\"'condition'\"\n                           (col1)=\"setDealerName($event)\"\n                           (col2)=\"setDealerCode($event)\">\n            </app-search-un>\n          </div>\n        </div>\n      </div>\n      <!--<div class=\"row\">-->\n      <!--<div class=\"flex-md-column col-md-9\">-->\n      <!--<div class=\"form-group\">-->\n      <!--<label>Last Name</label>-->\n      <!--<input type=\"text\" class=\"form-control\"   >-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-3\">\n          <div class=\"form-group\">\n            <label>O/S Credit Line</label>\n            <input class=\"form-control\"\n                   appMyCurrency\n                   [value]=\"bgdetailSub?.comm_amt\" (change)=\"bgdetailSub.comm_amt = $event.target.value\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-3\">\n          <div class=\"form-group\">\n            <label>Equip Type</label><br>\n            <select class=\"form-control\"\n                    [ngModel]=\"bgdetailSub?.eqp_ty\"\n                    (ngModelChange)=\"bgdetailSub.eqp_ty=$event\">\n              <option></option>\n              <option *ngFor=\"let list of listEQP\"\n                      [selected]=\"list?.id_code == bgdetailSub?.eqp_ty\"\n                      [value]=\"list?.id_code\">{{list?.remark}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"flex-md-column offset-3 col-md-3\">\n          <div class=\"form-group\">\n            <label>Weight</label>\n            <input type=\"text\" class=\"form-control\"\n                   appMyCurrency [value]=\"bgdetailSub.weight\" (change)=\"bgdetailSub.weight = $event.target.value\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-3\">\n          <div class=\"form-group\">\n            <label>Body </label><br>\n            <select class=\"form-control\"\n                    [ngModel]=\"bgdetailSub?.body\"\n                    (ngModelChange)=\"bgdetailSub.body=$event\">\n              <option></option>\n              <option *ngFor=\"let list of listBDY\"\n                      [selected]=\"list?.id_code == bgdetailSub?.body\"\n                      [value]=\"list?.id_code\">{{list?.remark}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"flex-md-column offset-3 col-md-3\">\n          <div class=\"form-group\">\n            <label>Miles</label>\n            <input type=\"text\" class=\"form-control\"\n                   appMyCurrency [value]=\"bgdetailSub.miles\" (change)=\"bgdetailSub.miles = $event.target.value\"\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-3\">\n          <div class=\"form-group\">\n            <label>Engine Type</label><br>\n            <select class=\"form-control\"\n                    [ngModel]=\"bgdetailSub?.enigne_type\"\n                    (ngModelChange)=\"bgdetailSub.enigne_type=$event\">\n              <option></option>\n              <option *ngFor=\"let list of listENG_TYPE\"\n                      [selected]=\"list?.id_code == bgdetailSub?.enigne_type\"\n                      [value]=\"list?.id_code\">{{list?.remark}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"flex-md-column offset-3 col-md-3\">\n          <div class=\"form-group\">\n            <label>Seat</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bgdetailSub.seat\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-9\">\n          <div class=\"form-group\">\n            <label>Asset Detail</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bgdetailSub.detail\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-6\">\n          <div class=\"form-group\">\n            <label>Accessory</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bgdetailSub.accessory\">\n          </div>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"flex-md-column col-md-3\">\n          <div class=\"form-group\">\n            <label>Asset (Exc. VAT)</label>\n            <input type=\"text\" class=\"form-control\"\n                   appMyCurrency\n                   [value]=\"bgdetailSub.asst_amt_e_vat\"\n                   (change)=\"bgdetailSub.asst_amt_e_vat = $event.target.value\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-asset/asset-detail/asset-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_bgdetailsub__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-bgdetailsub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_config_text_mask_type__ = __webpack_require__("../../../../../src/app/shared/config/text-mask-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AssetDetailComponent = /** @class */ (function () {
    function AssetDetailComponent(creditApplicationService, serviceEndPoint, textmask, userStorage) {
        this.creditApplicationService = creditApplicationService;
        this.serviceEndPoint = serviceEndPoint;
        this.textmask = textmask;
        this.userStorage = userStorage;
        this.bgdetailSub = new __WEBPACK_IMPORTED_MODULE_2__model_ca_bgdetailsub__["a" /* caBgDetailSub */]();
        this.listFAT = [];
        this.listFAC = [];
        this.listFAS = [];
        this.listEQP = [];
        this.listBDY = [];
        this.listENG_TYPE = [];
        this.OutURL = this.serviceEndPoint.url + this.serviceEndPoint.sale_call_api
            + "/ask/salecall/GetINTRO?device=web&user=" + this.userStorage.getUserName()
            + "&Comcode=" + this.userStorage.getComCode() + "&INTRO_MTHD_CD=20&condition";
    }
    AssetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.creditApplicationService.eventBgdetailSub.subscribe(function (detailSub) {
            _this.bgdetailSub = detailSub;
        });
        //--------- list ans
        this.creditApplicationService.eventListMaster.subscribe(function (value) {
            _this.listFAT = _this.creditApplicationService.listFAT;
            _this.listFAC = _this.creditApplicationService.listFAC;
            _this.listFAS = _this.creditApplicationService.listFAS;
            _this.listEQP = _this.creditApplicationService.listEQP;
            _this.listBDY = _this.creditApplicationService.listBDY;
            _this.listENG_TYPE = _this.creditApplicationService.listENG_TYPE;
            if (_this.listFAC)
                (_this.onChangeFat('OnInit'));
            if (_this.listFAS)
                (_this.onChangeFac('OnInit'));
        });
    };
    AssetDetailComponent.prototype.onChangeFat = function (mode) {
        var _this = this;
        if (mode != 'OnInit') {
            var assetSelect = (this.listFAT.find(function (item) { return item.id_code === _this.bgdetailSub.asst_type; }));
            this.bgdetailSub.asset_type = assetSelect.remark;
            this.bgdetailSub.asst_code = '';
            this.bgdetailSub.asst_sub_code = '';
        }
        if (this.creditApplicationService.listFAC) {
            var filterFac = [];
            filterFac = this.creditApplicationService.listFAC.filter(function (listObj) { return listObj.key1 == _this.bgdetailSub.asst_type; });
            this.listFAC = filterFac;
        }
    };
    AssetDetailComponent.prototype.onChangeFac = function (mode) {
        var _this = this;
        if (mode != 'OnInit') {
            this.bgdetailSub.asst_sub_code = '';
        }
        if (this.creditApplicationService.listFAS) {
            var filterFas = [];
            filterFas = this.creditApplicationService.listFAS.filter(function (listObj) { return ((listObj.key1 == _this.bgdetailSub.asst_type)
                && (listObj.key2 == _this.bgdetailSub.asst_code)); });
            this.listFAS = filterFas;
        }
    };
    AssetDetailComponent.prototype.setDealerName = function (value) {
        console.log(value);
    };
    AssetDetailComponent.prototype.setDealerCode = function (value) {
        this.bgdetailSub.dealer_code = value;
    };
    AssetDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-asset-detail',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-asset/asset-detail/asset-detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_config_service_endpoint__["a" /* ServiceEndpoint */],
            __WEBPACK_IMPORTED_MODULE_5__shared_config_text_mask_type__["a" /* TextMaskType */],
            __WEBPACK_IMPORTED_MODULE_4__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], AssetDetailComponent);
    return AssetDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-asset/ca-asset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\n  <div class=\"col-md-3 mr-1\">\n    <!-------------------Asset------------------------------->\n    <div class=\"row\">\n      <div class=\"thead-responsive\" style=\"overflow-x: auto;min-height: .01%; padding: 10px\">\n        <p-dataTable [value]=\"listbgdetail\" [(selection)]=\"selectbgdetail\"\n                     (onRowSelect)=\"onSelectdetail(selectbgdetail);index = 0;\"\n                     scrollable=\"true\" scrollHeight=\"400px\"\n                     [loading]=\"loading\" selectionMode=\"single\"\n                     [immutable]=\"false\">\n\n          <p-header>\n            <app-custom-botton-icon [option]=\"'new'\" (onBtnClick)=\"onAddAsset();index = 0;\"></app-custom-botton-icon>\n            <app-custom-botton-icon [option]=\"'delete'\"\n                                    (onBtnClick)=\"onDeleteAsset(selectbgdetail)\"></app-custom-botton-icon>\n          </p-header>\n          <p-column field=\"sub_id\" header=\"No.\" [style]=\"{'width':'75px'}\"></p-column>\n          <p-column field=\"credit_type\" header=\"Credit Type\"></p-column>\n        </p-dataTable>\n\n      </div>\n    </div>\n    <hr>\n    <!-------------------Sub  Asset------------------------------->\n    <div class=\"row\">\n      <div class=\"thead-responsive\" style=\"overflow-x: auto;min-height: .01%; padding: 10px\">\n        <p-dataTable [value]=\"listbgdetailSub\" [(selection)]=\"selectbgdetailSub\"\n                     (onRowSelect)=\"onSelectdetailSub(selectbgdetailSub);index = 1;\"\n                     scrollable=\"true\" scrollHeight=\"400px\"\n                     [loading]=\"loading\" selectionMode=\"single\"\n                     [immutable]=\"false\">\n\n          <p-header>\n            <app-custom-botton-icon [option]=\"'new'\" (onBtnClick)=\"onAddSubAsset();index = 1;\"></app-custom-botton-icon>\n            <app-custom-botton-icon [option]=\"'delete'\"\n                                    (onBtnClick)=\"onDeleteSubAsset(selectbgdetailSub)\"></app-custom-botton-icon>\n          </p-header>\n          <p-column field=\"sub_id2\" header=\"No.\" [style]=\"{'width':'75px'}\"></p-column>\n          <p-column field=\"asset_type\" header=\"Asset Code\"></p-column>\n        </p-dataTable>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-9 card border-isa\">\n    <p-tabView [activeIndex]=\"index\">\n      <p-tabPanel header=\"Finance\">\n        <app-ca-finance></app-ca-finance>\n      </p-tabPanel>\n      <p-tabPanel header=\"Asset Detail\">\n        <fieldset [disabled]=\"listbgdetailSub?.length == 0\">\n          <app-asset-detail></app-asset-detail>\n        </fieldset>\n      </p-tabPanel>\n    </p-tabView>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-asset/ca-asset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaAssetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_bgdetail__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-bgdetail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_ca_bgdetailsub__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-bgdetailsub.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CaAssetComponent = /** @class */ (function () {
    function CaAssetComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
        this.index = 0;
    }
    CaAssetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (caHead) {
            _this.listbgdetail = caHead.listbgdetail;
            //console.log(this.listbgdetail);
            if ((_this.listbgdetail) && (_this.listbgdetail.length > 0)) {
                _this.onSelectdetail(_this.listbgdetail[0]);
            }
        });
    };
    CaAssetComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaAssetComponent.prototype.onSelectdetail = function (value) {
        this.selectbgdetail = value;
        this.listbgdetailSub = value.listbgdetailsub;
        this.creditApplicationService.setSelectBgdetail(value);
        if ((this.listbgdetailSub) && (this.listbgdetailSub.length > 0)) {
            this.onSelectdetailSub(this.listbgdetailSub[0]);
        }
    };
    CaAssetComponent.prototype.onSelectdetailSub = function (value) {
        this.selectbgdetailSub = value;
        this.creditApplicationService.setSelectBgdetailSub(value);
    };
    CaAssetComponent.prototype.onAddAsset = function () {
        this.newAsset = new __WEBPACK_IMPORTED_MODULE_2__model_ca_bgdetail__["a" /* caBgDetail */]();
        this.newAsset.ca_no = this.creditApplicationService.caHead.ca_no;
        if (this.listbgdetail.length) {
            this.newAsset.sub_id = this.listbgdetail.length + 1;
        }
        else {
            this.newAsset.sub_id = 1;
        }
        this.listbgdetail = this.listbgdetail.concat([this.newAsset]);
        this.creditApplicationService.caHead.listbgdetail = this.listbgdetail;
        this.onSelectdetail(this.newAsset);
    };
    CaAssetComponent.prototype.onDeleteAsset = function (selectasset) {
        var delRow = this.listbgdetail.indexOf(selectasset);
        this.listbgdetail.splice(delRow, 1);
        ////  Change  order
        for (var i = 1; i <= this.listbgdetail.length; i++) {
            this.listbgdetail[i - 1].sub_id = i;
        }
        ;
        this.listbgdetail = this.listbgdetail.slice();
        if (this.listbgdetail[0]) {
            this.selectbgdetail = this.listbgdetail[0];
        }
    };
    CaAssetComponent.prototype.onAddSubAsset = function () {
        this.newSubAsset = new __WEBPACK_IMPORTED_MODULE_3__model_ca_bgdetailsub__["a" /* caBgDetailSub */]();
        this.newSubAsset.ca_no = this.selectbgdetail.ca_no;
        this.newSubAsset.sub_id = this.selectbgdetail.sub_id;
        if (this.listbgdetailSub.length) {
            this.newSubAsset.sub_id2 = this.listbgdetailSub.length + 1;
        }
        else {
            this.newSubAsset.sub_id2 = 1;
        }
        this.listbgdetailSub = this.listbgdetailSub.concat([this.newSubAsset]);
        this.selectbgdetail.listbgdetailsub = this.listbgdetailSub;
        this.onSelectdetailSub(this.newSubAsset);
    };
    CaAssetComponent.prototype.onDeleteSubAsset = function (selectsub) {
        var delRow = this.listbgdetailSub.indexOf(selectsub);
        this.listbgdetailSub.splice(delRow, 1);
        ////  Change  order
        for (var i = 1; i <= this.listbgdetailSub.length; i++) {
            this.listbgdetailSub[i - 1].sub_id = i;
        }
        ;
        this.listbgdetailSub = this.listbgdetailSub.slice();
        if (this.listbgdetailSub[0]) {
            this.selectbgdetailSub = this.listbgdetailSub[0];
        }
    };
    CaAssetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-asset',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-asset/ca-asset.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaAssetComponent);
    return CaAssetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-asset/ca-finance/ca-finance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-column\">\n  <div class=\"form-group col-md-12 form-inline mb-0\">\n    <!-------------------Credit Type-------------------------------------->\n    <label>Credit Type :</label>\n    <span class=\"star pr-1\">*</span>\n    <select class=\"form-control\"\n            (change)=\"creditTypeChange($event.target.value)\"\n            [(ngModel)]=\"bgdetail.fin_typ\">\n      <option [value]=\"\"></option>\n      <option *ngFor=\"let list of dataFin; let i = index\"\n              [value]=\"i+1\"\n              [selected]=\"bgdetail.fin_typ === list.id_code\">{{list?.remark}}\n      </option>\n    </select>\n    <!--------------fin_typ 1 (Hire purchars)---------------------------->\n    <select class=\"form-control\"\n            *ngIf=\"bgdetail.fin_typ == 1\"\n            (change)=\"subFinChange($event.target.value)\">\n      <option [value]=\"-1\"></option>\n      <option *ngFor=\"let list of dataSubFin; let i = index \"\n              [value]=\"list.id_code\"\n              [selected]=\"bgdetail.sub_fin === list.id_code\">{{list?.remark}}\n      </option>\n    </select>\n    <!--------------fin_typ 2 (Leasing)---------------------------->\n    <select class=\"form-control\"\n            *ngIf=\"bgdetail.fin_typ == 2\"\n            (change)=\"subFinChange($event.target.value)\">\n      <option [value]=\"-1\"></option>\n      <option *ngFor=\"let list of dataSubFinLs; let i = index \"\n              [value]=\"i\"\n              [selected]=\"bgdetail.sub_fin === list.id_code\">{{list?.remark}}\n      </option>\n    </select>\n    <!--------------if fin_typ 2--------------------------------------->\n    <select class=\"form-control\"\n            *ngIf=\"bgdetail.fin_typ == 2\"\n            (change)=\"operatingLeaseChange($event.target.value)\">\n      <option [value]=\"-1\"></option>\n      <option *ngFor=\"let list of dataLease; let i = index\"\n              [value]=\"i\"\n              [selected]=\"bgdetail.operating_lease === list.key1 &&\n                            bgdetail.buy_back_flg === list.key2\">{{list?.remark}}\n      </option>\n    </select>\n\n  </div>\n  <div class=\"form-group col-md-12 form-inline mb-0\">\n    <div class=\"flex-md-column col-md-4 border-isa m-1\">\n      <div class=\"form-group form-inline\">\n        <input type=\"radio\" name=\"lc_flg\" value=\"N\" [(ngModel)]=\"bgdetail.lc_flg\" (ngModelChange)=\"openLc()\"> No LC\n        <input type=\"radio\" name=\"lc_flg\" value=\"Y\" [(ngModel)]=\"bgdetail.lc_flg\" (ngModelChange)=\"openLc()\"\n               style=\"margin-left: 10px\"> LC\n        <input type=\"radio\" name=\"lc_flg\" value=\"A\" [(ngModel)]=\"bgdetail.lc_flg\" (ngModelChange)=\"openLc()\"\n               style=\"margin-left: 10px\"> Approx\n      </div>\n    </div>\n    <div class=\"form-group form-inline m-3\">\n      <input type=\"checkbox\" name=\"group_flg\" [checked]=\"bgdetail?.group_flg === 'Y'\"\n             (change)=\"$event.target.checked ? (bgdetail.group_flg = 'Y') : (bgdetail.group_flg = 'N')\"\n             style=\"margin-left: 10px\"> Project\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bgdetail.group_nme\" *ngIf=\"bgdetail?.group_flg === 'Y'\">\n    </div>\n  </div>\n</div>\n<div class=\"flex-row border-isa mb-0\">\n  <!-------   Pricing Detail   -------->\n  <div class=\"form-group col-md-12 card pt-1 mb-1\">\n    <div class=\"form-group row\">\n      <div class=\"d-flex col-md-12 p-0\">\n        <div class=\"form-inline col-md-4 mt-4\">\n          <input type=\"checkbox\"\n                 [checked]=\"bgdetail?.wh_tax > 0 \"\n                 (change)=\"$event.target.checked ? (bgdetail.wh_tax = 5) : (bgdetail.wh_tax = 0 )\">W/H Tax\n\n          <input type=\"text\" class=\"form-control ml-1 col-md-7\" [(ngModel)]=\"bgdetail.wh_tax\">\n          <label>&nbsp;%</label>\n        </div>\n        <div class=\"col-md-4\">\n          <label>ADVANCE / ARR :</label>\n          <span class=\"star\">*</span>\n          <select class=\"form-control\"\n                  [(ngModel)]=\"bgdetail.adv_arr\"\n                  (ngModelChange)=\"advChange()\">\n            <option [value]=\"-1\"></option>\n            <option *ngFor=\"let list of dataPaid; let i = index \"\n                    [value]=\"list.id_code\"\n                    [selected]=\"bgdetail.adv_arr === list.id_code\">{{list?.remark}}\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"form-inline col-md-3\">\n        <input type=\"checkbox\"\n               [checked]=\"bgdetail?.with_vat === 'Y'\"\n               (change)=\"$event.target.checked ? (bgdetail.with_vat = 'Y') : (bgdetail.with_vat = 'N')\">With VAT\n      </div>\n      <div class=\"col-md-4 form-inline\">\n        <p-inputSwitch [(ngModel)]=\"checked\"  (onChange)=\"handleChange(checked)\" class=\"ml-2\"></p-inputSwitch>\n        <label class=\"pl-1\">Input Include VAT</label>\n      </div>\n    </div>\n\n    <!--------------------Asset Price :------------------------------->\n    <div class=\"form-group row\">\n      <div class=\"col-md-2\">\n        <label class=\"mt-4 pt-2\">Asset Price : </label>\n      </div>\n      <div class=\"col-md-2.5 text-center\">\n        <label>Exclude VAT</label>\n        <input class=\"form-control\"\n               appMyCurrency\n               [value]=\"bgdetail.asst_amt_e_vat\" (change)=\"bgdetail.asst_amt_e_vat = $event.target.value\"\n               #assetEvat\n               (blur)=\"calculateAsset()\"\n               />\n      </div>\n      <div class=\"col-md-2 text-center\">\n        <label>VAT</label>\n        <input disabled\n               class=\"form-control\"\n               appMyCurrency  [value]=\"bgdetail.asst_amt_vat\" (change)=\"bgdetail.asst_amt_vat  = $event.target.value\"\n               />\n      </div>\n      <div class=\"col-md-2.5 text-center\">\n        <label>Include VAT</label>\n        <input #assetIvat\n               disabled\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.asst_amt_i_vat\" (change)=\"bgdetail.asst_amt_i_vat = $event.target.value\"\n             />\n      </div>\n\n    </div>\n    <!--------------------Down Amount------------------------------->\n    <div class=\"form-group row\" [hidden]=\"bgdetail.fin_typ == '2'\" >\n      <div class=\"col-md-2\">\n        <label class=\"mt-2\">Down Amount :</label>\n      </div>\n      <div class=\"col-md-2.5\">\n        <input\n               #downEvat\n               (blur)=\"calculateDown()\"\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.down_amt_e_vat\" (change)=\"bgdetail.down_amt_e_vat = $event.target.value\"/>\n      </div>\n      <div class=\"col-md-2\">\n        <input\n               disabled\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.down_amt_vat\" (change)=\"bgdetail.down_amt_vat = $event.target.value\"/>\n      </div>\n      <div class=\"col-md-2.5\">\n        <input #downIvat\n               disabled\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.down_amt_i_vat\" (change)=\"bgdetail.down_amt_i_vat = $event.target.value\"/>\n      </div>\n      <div class=\"col-md-2 text-center\">\n        <label>Ratio</label><br>\n\n      </div>\n    </div>\n    <!--------------------Deposit Amount------------------------------->\n    <div class=\"form-group row\" [hidden]=\"bgdetail.fin_typ == '1'\" >\n      <div class=\"col-md-2\">\n        <label class=\"mt-2\">Deposit Amount :</label>\n      </div>\n      <div class=\"col-md-2.5\">\n        <input #depEvat\n               (blur)=\"calculateDep('E')\"\n               class=\"form-control\"\n               appMyCurrency\n               [value]=\"bgdetail.dep_amt_e_vat\" (change)=\"bgdetail.dep_amt_e_vat = $event.target.value\"/>\n      </div>\n      <div class=\"col-md-2\">\n        <input disabled\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.dep_amt_vat\" (change)=\"bgdetail.dep_amt_vat = $event.target.value\"/>\n      </div>\n      <div class=\"col-md-2.5\">\n        <input #depIvat\n               disabled\n               (blur)=\"calculateDep('I')\"\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.dep_amt_i_vat\" (change)=\"bgdetail.dep_amt_i_vat = $event.target.value\"/>\n      </div>\n      <div class=\"col-md-2 text-center\">\n        <label>Ratio</label><br>\n\n      </div>\n    </div>\n    <!--------------------Financing Amt------------------------------->\n    <div class=\"form-group row\">\n      <div class=\"col-md-2\">\n        <label class=\"mt-2\">Financing Amt :</label>\n      </div>\n      <div class=\"col-md-2.5\">\n        <input #finEvatt\n               (blur)=\"calculateFin()\"\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.fin_amt_e_vat\" (change)=\"bgdetail.fin_amt_e_vat = $event.target.value\"/>\n      </div>\n      <div class=\"col-md-2\">\n        <input disabled\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.fin_amt_vat\" (change)=\"bgdetail.fin_amt_vat = $event.target.value\"/>\n      </div>\n      <div class=\"col-md-2.5\">\n        <input #finIvatt\n               disabled\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.fin_amt_i_vat\" (change)=\"bgdetail.fin_amt_i_vat = $event.target.value\"/>\n      </div>\n      <div class=\"col-md-2\">\n        <input (blur)=\"calculateRatio()\"\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.fin_ratio\" (change)=\"bgdetail.fin_ratio = $event.target.value\"/>\n      </div>\n    </div>\n    <!--------------------Purchase Option------------------------------->\n    <div class=\"row\" [hidden]=\"bgdetail.fin_typ == '1'\">\n      <div class=\"col-md-2 form-group\">\n        <label>Purchase Option</label>\n      </div>\n      <div class=\"col-md-2.5\">\n        <input #rvEvat\n               (blur)=\"calculateRv()\"\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.rv_amt_e_vat\" (change)=\"bgdetail.rv_amt_e_vat = $event.target.value\"/>\n      </div>\n      <div class=\"col-md-2\">\n        <input disabled\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.rv_amt_vat\"/>\n      </div>\n      <div class=\"col-md-2.5\">\n        <input #rvIvat\n               disabled\n               class=\"form-control\" appMyCurrency\n               [value]=\"bgdetail.rv_amt_i_vat\" (change)=\"bgdetail.rv_amt_i_vat = $event.target.value\"/>\n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n\n  </div>\n  <!-------    Term  &  IRR   -------->\n  <div class=\"form-group col-md-12 card pt-1 mb-0\">\n    <div class=\"form-group d-flex\">\n      <div class=\"col-md-3\">\n        <label>Terms :</label>\n        <input class=\"form-control\" appMyCurrency [fraction]=\"0\"\n               [value]=\"bgdetail.terms\" (change)=\"bgdetail.terms = $event.target.value\"\n        />\n      </div>\n      <div class=\"col-md-3\">\n        <label>Flat Rate :</label>\n        <input class=\"form-control\" appMyCurrency [fraction]=\"8\"\n               [value]=\"bgdetail.flat_rate\" (change)=\"bgdetail.flat_rate = $event.target.value\"\n        />\n      </div>\n      <div class=\"col-md-3\">\n        <label>Net IRR :</label>\n        <input class=\"form-control\"\n               appMyCurrency [fraction]=\"8\"\n               [value]=\"bgdetail.net_irr\" (change)=\"bgdetail.net_irr = $event.target.value\"\n        />\n      </div>\n      <div class=\"col-md-3\">\n        <label>Gross IRR</label>\n        <span class=\"star\">*</span>\n        <input class=\"form-control\"\n               appMyCurrency [fraction]=\"8\"\n               [value]=\"bgdetail.gross_irr\" (change)=\"bgdetail.gross_irr = $event.target.value\"\n        />\n      </div>\n    </div>\n    <div class=\"form-group d-flex\">\n      <div class=\"col-md-3\">\n        <label>Expense :</label>\n        <input class=\"form-control\"\n               appMyCurrency\n               [value]=\"bgdetail.es_expense\" (change)=\"bgdetail.es_expense = $event.target.value\"\n        />\n      </div>\n      <div class=\"col-md-3\">\n        <label>Revenue :</label>\n        <input class=\"form-control\"\n               appMyCurrency\n               [value]=\"bgdetail.es_revenue\" (change)=\"bgdetail.es_revenue = $event.target.value\"\n        />\n      </div>\n      <div class=\"col-md-6 form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-6 \">\n            <label>Cal IRR</label>\n            <select class=\"form-control w-100\" (change)=\"bgdetail.selectForCall = $event.target.value\">\n             <option [value]=\"1\">1.Calculate Installment + Flat Know Gross IRR , Fin, Term</option>\n            <option [value]=\"2\">2.Calculate Installment + IRR Know Fin, Flat, Term</option>\n            <option [value]=\"3\">3.Calculate IRR + Flat Know Installment, Fin, Term</option>\n            <option [value]=\"4\">4.Calculate Finance + Flat Know Installment, Gross IRR, Term</option>\n            <option [value]=\"5\">5.Calculate Flat Know Installment, Fin, Term</option>\n            </select>\n          </div>\n          <div class=\"col-md-6 mt-4 pt-1\">\n            <button type=\"button\" pButton style=\"float:left\"\n                    (click)=\"calculateClick()\"\n                    label=\"Calculate\"></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"form-group col-md-12 border-isa pt-1 mt-1 mb-1\">\n  <div class=\"form-group d-flex mb-0\">\n    <div class=\"col-md-4 \">\n      <div class=\"\">\n        <label> Disburse </label>\n        <p-calendar dateFormat=\"dd/mm/yy\" class=\"my-1\" placeholder=\"dd/mm/yyyy\"\n                    [ngModel]=\"bgdetail?.disburse_dt\"\n                    (ngModelChange)=\"bgdetail.disburse_dt=onSelectDate($event)\"\n                   ></p-calendar>\n\n\n      </div>\n    </div>\n    <div class=\"col-md-4 \">\n      <div class=\"form-group\">\n        <label> First Date </label>\n        <p-calendar dateFormat=\"dd/mm/yy\" class=\"my-1\" placeholder=\"dd/mm/yyyy\"\n                    [ngModel]=\"bgdetail?.first\"\n                    (ngModelChange)=\"bgdetail.first=onSelectDate($event)\"\n                    ></p-calendar>\n      </div>\n    </div>\n  </div>\n   <div class=\"d-flex\">\n    <p-tabView class=\"w-100\"  (onChange)=\"onTabChange($event.index)\" >\n      <p-tabPanel header=\"Fix\">\n        <div class=\"form-group col-md-12 card pt-1\">\n          <div class=\"form-group form-inline mt-2\">\n            <input type=\"radio\" name=\"schedule\" value=\"R\" [(ngModel)]=\"bgdetail.schedule\" (ngModelChange)=\"scheduleChange()\" > Straight <br>\n            <input type=\"radio\" name=\"schedule\" value=\"I\" [(ngModel)]=\"bgdetail.schedule\" (ngModelChange)=\"scheduleChange()\" > Step\n          </div>\n          <div class=\"form-group d-flex\"  *ngIf=\"bgdetail.schedule === 'R' \" >\n            <div class=\"col-md-2 mt-3\">\n              <label class=\"mt-3\">Installment : </label>\n            </div>\n            <div class=\"col-md-3 text-center\">\n              <label>Exclude VAT</label>\n              <input class=\"form-control\"\n                     appMyCurrency\n                     (blur)=\"calculateInstallment('eVat')\"\n                     [value]=\"bgdetail.installment_e_vat\" (change)=\"bgdetail.installment_e_vat = $event.target.value\"\n              />\n            </div>\n            <div class=\"col-md-3 text-center\">\n              <label>VAT</label>\n              <input appMyCurrency\n                     disabled\n                     class=\"form-control\"\n                     [value]=\"bgdetail.installment_vat\" (change)=\"bgdetail.installment_vat = $event.target.value\"\n              />\n            </div>\n            <div class=\"col-md-3 text-center\">\n              <label>Include VAT</label>\n              <input appMyCurrency\n                     class=\"form-control\"\n                     (blur)=\"calculateInstallment('iVat');\"\n                     [value]=\"bgdetail.installment_i_vat\" (change)=\"bgdetail.installment_i_vat = $event.target.value\"\n              />\n            </div>\n          </div>\n          <div class=\"mb-2\" *ngIf=\"bgdetail.schedule === 'I' \" >\n            <p-dataTable [value]=\"bgdetail.listcastep\"\n                         selectionMode=\"single\"\n                         [(selection)]=\"selectedStep\"\n                         rows=\"15\" [responsive]=\"true\"\n                         (onRowSelect)=\"onRowSelect($event)\"\n                         >\n              <p-header>\n                <app-custom-botton-icon [option]=\"'new'\"\n                                        (onBtnClick)=\"addEditStep('add')\"></app-custom-botton-icon>\n                <app-custom-botton-icon [option]=\"'edit'\"\n                                        (onBtnClick)=\"addEditStep('edit')\"></app-custom-botton-icon>\n                <app-custom-botton-icon [option]=\"'delete'\"\n                                        (onBtnClick)=\"delete()\"></app-custom-botton-icon>\n              </p-header>\n              <p-headerColumnGroup>\n                <p-row>\n                  <p-column header=\"From Term\" rowspan=\"2\"></p-column>\n                  <p-column header=\"To Term\" rowspan=\"2\"></p-column>\n                  <p-column header=\"Installment\" rowspan=\"2\"></p-column>\n                </p-row>\n              </p-headerColumnGroup>\n              <p-column field=\"from_term\" [style]=\"{'text-align':'right'}\">\n                <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n                  <span>{{ row[col.field] |  number:'.'  }}</span>\n                </ng-template>\n              </p-column>\n              <p-column field=\"to_term\" [style]=\"{'text-align':'right'}\">\n                <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n                  <span>{{ row[col.field] |  number:'.'  }}</span>\n                </ng-template>\n              </p-column>\n              <p-column field=\"inst_e_vat\" [style]=\"{'text-align':'right'}\">\n                <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n                  <span>{{ row[col.field] |  number:'.2-2'  }}</span>\n                </ng-template>\n              </p-column>\n            </p-dataTable>\n          </div>\n        </div>\n      </p-tabPanel>\n      <p-tabPanel header=\"Float\">\n        <div class=\"form-group col-md-12 modal-content pt-1\">\n          <div class=\"form-group d-flex\">\n            <div class=\"col-md-2\">\n              <label class=\"mt-4 pt-1\">Installment :</label>\n            </div>\n            <div class=\"col-md-3 text-center\">\n              <label>Exclude VAT</label>\n              <input appMyCurrency\n                     class=\"form-control\"\n                     [value]=\"bgdetail.installment_e_vat\" (change)=\"bgdetail.installment_e_vat = $event.target.value\"\n              />\n            </div>\n            <div class=\"col-md-3 text-center\">\n              <label>VAT</label>\n              <input appMyCurrency\n                     class=\"form-control\"\n                     [value]=\"bgdetail.installment_vat\" (change)=\"bgdetail.installment_vat = $event.target.value\"\n              />\n            </div>\n            <div class=\"col-md-3 text-center\">\n              <label>Include VAT</label>\n              <input appMyCurrency\n                     class=\"form-control\"\n                     [value]=\"bgdetail.installment_i_vat\" (change)=\"bgdetail.installment_i_vat = $event.target.value\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group d-flex\">\n            <div class=\"col-md-2\">\n              <label>Bank :</label>\n              <select class=\"form-control\"\n                      [(ngModel)]=\"bgdetail.bank_code\"\n                      (change)=\"rateChange()\">\n                <option [value]=\"\"></option>\n                <option *ngFor=\"let list of dataBank; let i = index\"\n                        [value]=\"list.id_code\"\n                        [selected]=\"bgdetail.bank_code === list.id_code\">{{list?.id_code}}\n                </option>\n              </select>\n            </div>\n            <div class=\"col-md-3\">\n              <label>Type :</label>\n              <select class=\"form-control\"\n                      [(ngModel)]=\"bgdetail.interest_rate_type\"\n                      (change)=\"rateChange()\">\n                <option [value]=\"\"></option>\n                <option *ngFor=\"let list of dataIntRate; let i = index\"\n                        [value]=\"list.id_code\"\n                        [selected]=\"bgdetail.interest_rate_type === list.id_code\">{{list?.remark}}\n                </option>\n              </select>\n            </div>\n            <div class=\"col-md-3\">\n              <label>Rate :</label>\n              <input disabled\n                     appMyCurrency\n                     class=\"form-control\"   [fraction]=\"3\"\n                     [value]=\"bgdetail.interest_rate\" (change)=\"bgdetail.interest_rate = $event.target.value\"\n                     />\n            </div>\n            <div class=\"col-md-3\">\n              <label>Spread :</label>\n              <input appMyCurrency\n                     class=\"form-control\"   [fraction]=\"3\"\n                     [value]=\"bgdetail.spread\" (change)=\"bgdetail.spread = $event.target.value\"\n                     />\n            </div>\n          </div>\n        </div>\n      </p-tabPanel>\n    </p-tabView>\n  </div>\n</div>\n\n<!-------------------------------------Open LC----------------------------------->\n<div class=\"col-md-12 form-group border-isa flex-row mb-1\" *ngIf=\"visiblePanel\">\n  <div class=\"row  form-group col-md-3\">\n    <label><b>Open LC</b></label>\n  </div>\n  <div class=\"row form-group col-md-12\">\n    <div class=\"col-md-3\">\n      <label>Asset Price</label><span class=\"star\">*</span>\n      <input appMyCurrency\n             class=\"form-control\"\n             [value]=\"bgdetail.asst_prce_forgn\" (change)=\"bgdetail.asst_prce_forgn = $event.target.value\"/>\n    </div>\n    <div class=\"col-md-3\">\n      <label>&nbsp;</label>\n      <select class=\"form-control\">\n        <option [value]=\"\"></option>\n        <option *ngFor=\"let list of dataCurType; let i = index\"\n                [value]=\"list.id_code\"\n                [selected]=\"bgdetail.curr_type === list.id_code\">{{list?.remark}}\n        </option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row form-group col-md-12\">\n    <div class=\"col-md-3\">\n      <label>Currency</label><span class=\"star\">*</span>\n      <input appMyCurrency\n             class=\"form-control\"\n             [value]=\"bgdetail.currency\" (change)=\"bgdetail.currency = $event.target.value\"\n             />\n    </div>\n    <div class=\"col-md-3\">\n      <label>Import Duty(%)</label>\n      <input appMyCurrency\n             class=\"form-control\"\n             (blur)=\"calculateLc()\"  [fraction]=\"0\"\n             [value]=\"bgdetail.duty_pcnt\" (change)=\"bgdetail.duty_pcnt = $event.target.value\"\n           />\n    </div>\n    <div class=\"col-md-3\">\n      <label>Installment</label><span class=\"star\">*</span>\n      <input appMyCurrency  [fraction]=\"5\"\n             class=\"form-control\"\n             (blur)=\"calculateLc()\"\n             [value]=\"bgdetail.inst_pcnt_of_asst\" (change)=\"bgdetail.inst_pcnt_of_asst = $event.target.value\"\n             />\n    </div>\n  </div>\n</div>\n\n<!--------------------------------Financing asset-------------------------------->\n<div class=\"form-group flex-row col-md-12 border-isa\">\n  <div class=\"form-group d-flex\">\n    <div class=\"col-md-6\">\n      <label>Financing Asset :</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"bgdetail.fin_asst\" rows=\"5\"></textarea>\n      <br>\n    </div>\n\n\n  </div>\n</div>\n\n<app-alert-dialog [mode_single]=\"0\" #warning></app-alert-dialog>\n\n<app-action-lock-screen *ngIf=\"checkLoader\"\n                        [spinner]=\"true\"\n                        [showCancel]=\"true\"\n                        (onCancel)=\"checkLoader = false\"\n                        #lockScreen></app-action-lock-screen>\n\n<app-action-dialog #actionDialog\n                   [showCancel]=\"true\"\n                   [showAdd]=\"true\"\n                   (onAdd)=\"addClick()\">\n  <div class=\"form-group\">\n    <label>From Term</label>\n    <input class=\"form-control\" [(ngModel)]=\"step.from_term\">\n  </div>\n  <div class=\"form-group\">\n    <label>To Term</label>\n    <input class=\"form-control\" [(ngModel)]=\"step.to_term\">\n  </div>\n  <div class=\"form-group\">\n    <label>Installment</label>\n    <input class=\"form-control\"\n           appMyCurrency\n           [value]=\"step.inst_e_vat\" (change)=\"step.inst_e_vat = $event.target.value\">\n  </div>\n</app-action-dialog>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-asset/ca-finance/ca-finance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaFinanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_bgdetail__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-bgdetail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_center_action_lock_screen_action_lock_screen_component__ = __webpack_require__("../../../../../src/app/shared/center/action-lock-screen/action-lock-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_center_utils_date_utils__ = __webpack_require__("../../../../../src/app/shared/center/utils/date-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_ca_step__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-step.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_center_action_dialog_action_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/action-dialog/action-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CaFinanceComponent = /** @class */ (function () {
    function CaFinanceComponent(creditApplicationService, dateUtils, userStorage) {
        this.creditApplicationService = creditApplicationService;
        this.dateUtils = dateUtils;
        this.userStorage = userStorage;
        this.visiblePanel = false;
        this.checked = false;
        this.bgdetail = new __WEBPACK_IMPORTED_MODULE_2__model_ca_bgdetail__["a" /* caBgDetail */]();
        this.checkLoader = false;
        this.step = new __WEBPACK_IMPORTED_MODULE_8__model_ca_step__["a" /* caStep */]();
        this.vatRate = Number(this.userStorage.getVatRate());
    }
    CaFinanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripData = this.creditApplicationService.eventBgdetail.subscribe(function (value) {
            _this.bgdetail = value;
            if (!_this.bgdetail.selectForCall) {
                _this.bgdetail.selectForCall = 1;
            }
            _this.handleChange(_this.checked);
        });
        //--------- list ans
        this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(function (value) {
            _this.dataFin = _this.creditApplicationService.listFIN;
            _this.dataSubFin = _this.creditApplicationService.listSUB_FIN;
            _this.dataSubFinLs = _this.creditApplicationService.listSUB_FINLS;
            _this.dataLease = _this.creditApplicationService.listLease;
            _this.dataPaid = _this.creditApplicationService.listPAID;
            _this.dataBank = _this.creditApplicationService.listBNK;
            _this.dataBankIntRate = _this.creditApplicationService.listBANK_INT_RATE;
        });
    };
    CaFinanceComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaFinanceComponent.prototype.creditTypeChange = function (dataSelect) {
        // this.bgdetail.inputIvat = false;
        // if (dataSelect) {
        //   this.bgdetail.fin_type_name = this.dataFin.find(
        //     (i) => dataSelect === i.id_code
        //   ).remark;
        // }
        // else {
        //   this.bgdetail.fin_type_name = '';
        // }
        this.bgdetail.sub_fin = '';
        this.bgdetail.operating_lease = '';
        this.bgdetail.with_vat = 'Y';
        this.bgdetail.wh_tax = 'N';
        //this.inputChange();
        //this.handleChange(!this.isChecked);
    };
    CaFinanceComponent.prototype.subFinChange = function (index) {
        if (index == -1) {
            this.bgdetail.sub_fin = '';
            this.bgdetail.buy_back_flg = '';
        }
        else {
            if (this.bgdetail.fin_typ == 1) {
                this.bgdetail.sub_fin = this.dataSubFin[index].id_code;
                this.bgdetail.buy_back_flg = this.dataSubFin[index].remark;
            }
            else {
                this.bgdetail.sub_fin = this.dataSubFinLs[index].id_code;
                this.bgdetail.buy_back_flg = this.dataSubFinLs[index].remark;
            }
        }
    };
    CaFinanceComponent.prototype.operatingLeaseChange = function (index) {
        if (index > -1) {
            this.bgdetail.operating_lease = this.dataLease[index].key1;
            if (this.dataLease[index].remark.search("Sales") > -1) {
                this.bgdetail.buy_back_flg = 'Y';
            }
            else {
                this.bgdetail.buy_back_flg = 'N';
            }
        }
    };
    CaFinanceComponent.prototype.openLc = function () {
        if (this.bgdetail.lc_flg === 'Y' || this.bgdetail.lc_flg === 'A') {
            this.visiblePanel = true;
        }
        else {
            this.visiblePanel = false;
        }
    };
    CaFinanceComponent.prototype.handleChange = function (value) {
        var isChecked = value;
        if (isChecked) {
            this.assetEvat.nativeElement.disabled = true;
            this.assetIvat.nativeElement.disabled = false;
            this.finEvatt.nativeElement.disabled = true;
            this.finIvatt.nativeElement.disabled = false;
            if (this.bgdetail.fin_typ == '1') {
                this.downEvat.nativeElement.disabled = true;
                this.downIvat.nativeElement.disabled = false;
            }
            else if (this.bgdetail.fin_typ == '2') {
                this.depEvat.nativeElement.disabled = true;
                this.depIvat.nativeElement.disabled = false;
                this.rvEvat.nativeElement.disabled = true;
                this.rvIvat.nativeElement.disabled = false;
            }
        }
        else {
            this.assetEvat.nativeElement.disabled = false;
            this.assetIvat.nativeElement.disabled = true;
            this.finEvatt.nativeElement.disabled = false;
            this.finIvatt.nativeElement.disabled = true;
            if (this.bgdetail.fin_typ == '1') {
                this.downEvat.nativeElement.disabled = false;
                this.downIvat.nativeElement.disabled = true;
            }
            else if (this.bgdetail.fin_typ == '2') {
                this.depEvat.nativeElement.disabled = false;
                this.depIvat.nativeElement.disabled = true;
                this.rvEvat.nativeElement.disabled = false;
                this.rvIvat.nativeElement.disabled = true;
            }
        }
    };
    CaFinanceComponent.prototype.calculateClick = function () {
        var _this = this;
        var calCheck = true;
        this.warning.list_msg = [];
        this.warning.title = 'Calculate Irr Warning';
        if (this.bgdetail.selectForCall == 1) {
            if (!this.bgdetail.disburse_dt) {
                this.warning.addMessage('- Disburse');
            }
            if (!this.bgdetail.first) {
                this.warning.addMessage('- First');
            }
            if (!this.bgdetail.fin_amt_e_vat) {
                this.warning.addMessage('- Financing Amount');
            }
            if (!this.bgdetail.gross_irr) {
                this.warning.addMessage('- Gross IRR');
            }
            if (!this.bgdetail.terms) {
                this.warning.addMessage('- Terms');
            }
        }
        else if (this.bgdetail.selectForCall == 2) {
            if (!this.bgdetail.fin_amt_e_vat) {
                this.warning.addMessage('- Financing Amount');
            }
            if (!this.bgdetail.flat_rate) {
                this.warning.addMessage('- Flat Rate');
            }
            if (!this.bgdetail.terms) {
                this.warning.addMessage('- Terms');
            }
        }
        else if (this.bgdetail.selectForCall == 3) {
            if (!this.bgdetail.disburse_dt) {
                this.warning.addMessage('- Disburse Date');
            }
            if (!this.bgdetail.first) {
                this.warning.addMessage('- First Due');
            }
            if (!this.bgdetail.fin_amt_e_vat) {
                this.warning.addMessage('- Financing Amount');
            }
            if (!this.bgdetail.terms) {
                this.warning.addMessage('- Terms');
            }
            if (this.bgdetail.cal_inst_typ == 'Fix' && this.bgdetail.schedule == 'R' && !this.bgdetail.installment_e_vat) {
                this.warning.addMessage('- Installment');
            }
            else if (this.bgdetail.cal_inst_typ == 'Fix' && this.bgdetail.schedule == 'I' && this.bgdetail.listcastep.length == 0) {
                this.warning.addMessage('- Installment');
            }
            else if (this.bgdetail.cal_inst_typ == 'Float' && !this.bgdetail.installment_e_vat) {
                this.warning.addMessage('- Installment');
            }
        }
        else if (this.bgdetail.selectForCall == 4) {
            if (!this.bgdetail.disburse_dt) {
                this.warning.addMessage('- Disburse Date');
            }
            if (!this.bgdetail.first) {
                this.warning.addMessage('- First Due');
            }
            if (!this.bgdetail.gross_irr) {
                this.warning.addMessage('- Gross IRR');
            }
            if (!this.bgdetail.terms) {
                this.warning.addMessage('- Terms');
            }
            if (this.bgdetail.cal_inst_typ == 'Fix' && this.bgdetail.schedule == 'R' && !this.bgdetail.installment_e_vat) {
                this.warning.addMessage('- Installment');
            }
            else if (this.bgdetail.cal_inst_typ == 'Fix' && this.bgdetail.schedule == 'I' && this.bgdetail.listcastep.length == 0) {
                this.warning.addMessage('- Installment');
            }
            else if (this.bgdetail.cal_inst_typ == 'Float' && !this.bgdetail.installment_e_vat) {
                this.warning.addMessage('- Installment');
            }
        }
        else if (this.bgdetail.selectForCall == 5) {
            if (!this.bgdetail.disburse_dt) {
                this.warning.addMessage('- Disburse Date');
            }
            if (!this.bgdetail.first) {
                this.warning.addMessage('- First Due');
            }
            if (!this.bgdetail.terms) {
                this.warning.addMessage('- Terms');
            }
            if (!this.bgdetail.installment_e_vat && this.bgdetail.listcastep.length == 0) {
                this.warning.addMessage('- Installment');
            }
            else if (this.bgdetail.schedule == 'I' && this.bgdetail.listcastep.length == 0) {
                this.warning.addMessage('- Installment');
            }
        }
        else if ((this.bgdetail.cal_inst_typ === 'Fix') && (!this.bgdetail.schedule)) {
            this.warning.addMessage('- Schedule');
        }
        else if (!this.bgdetail.adv_arr) {
            this.warning.addMessage('- ADVANCE/ARR');
        }
        if (this.warning.list_msg.length > 0) {
            calCheck = false;
            this.warning.open();
        }
        if (calCheck) {
            console.log(this.bgdetail.selectForCall);
            this.checkLoader = true;
            this.creditApplicationService.calculateIrr(this.bgdetail.sub_id, this.bgdetail.selectForCall).subscribe(function (callIrr) {
                if (callIrr.CODE == '200') {
                    console.log("Cal IRR");
                    console.log(callIrr);
                    _this.bgdetail.fin_amt_e_vat = callIrr.LIST_DATA[0].finExcVat;
                    _this.bgdetail.fin_amt_vat = callIrr.LIST_DATA[0].finVat;
                    _this.bgdetail.fin_amt_i_vat = callIrr.LIST_DATA[0].finIncVat;
                    _this.bgdetail.installment_e_vat = callIrr.LIST_DATA[0].installmentExcVat;
                    _this.bgdetail.installment_vat = callIrr.LIST_DATA[0].installmentVat;
                    _this.bgdetail.installment_i_vat = callIrr.LIST_DATA[0].installmentIncVat;
                    _this.bgdetail.flat_rate = callIrr.LIST_DATA[0].flatRate;
                    _this.bgdetail.gross_irr = callIrr.LIST_DATA[0].grossIrr;
                    _this.bgdetail.net_irr = callIrr.LIST_DATA[0].netIrr;
                    _this.checkLoader = false;
                }
            });
        }
    };
    CaFinanceComponent.prototype.calculatefinfromAsset = function () {
        if (this.bgdetail.with_vat === 'Y') {
            if (this.bgdetail.fin_typ === '1') {
                this.bgdetail.fin_amt_i_vat = this.bgdetail.asst_amt_i_vat - this.bgdetail.down_amt_i_vat;
                this.bgdetail.fin_amt_vat = this.bgdetail.asst_amt_vat - this.bgdetail.down_amt_vat;
                this.bgdetail.fin_amt_e_vat = this.bgdetail.fin_amt_i_vat - this.bgdetail.fin_amt_vat;
            }
            else if (this.bgdetail.fin_typ === '2') {
                this.bgdetail.fin_amt_i_vat = this.bgdetail.asst_amt_i_vat - this.bgdetail.dep_amt_i_vat;
                this.bgdetail.fin_amt_vat = this.bgdetail.asst_amt_vat - this.bgdetail.dep_amt_vat;
                this.bgdetail.fin_amt_e_vat = this.bgdetail.fin_amt_i_vat - this.bgdetail.fin_amt_vat;
            }
        }
        else {
            if (this.bgdetail.fin_typ === '1') {
                this.bgdetail.fin_amt_i_vat = this.bgdetail.asst_amt_e_vat - this.bgdetail.down_amt_e_vat;
            }
            else if (this.bgdetail.fin_typ === '2') {
                this.bgdetail.fin_amt_i_vat = this.bgdetail.asst_amt_e_vat - this.bgdetail.dep_amt_e_vat;
            }
            this.bgdetail.fin_amt_vat = '';
            this.bgdetail.fin_amt_e_vat = this.bgdetail.fin_amt_i_vat;
        }
        if (this.bgdetail.asst_amt_e_vat) {
            this.bgdetail.fin_ratio = Number(this.bgdetail.fin_amt_e_vat / this.bgdetail.asst_amt_e_vat).toFixed(2);
        }
    };
    CaFinanceComponent.prototype.calculateAsset = function () {
        if (this.bgdetail.with_vat === 'Y') {
            this.bgdetail.asst_amt_vat = Number(this.bgdetail.asst_amt_e_vat * this.vatRate / 100).toFixed(2);
            this.bgdetail.asst_amt_i_vat = (Number(this.bgdetail.asst_amt_e_vat) + Number(this.bgdetail.asst_amt_vat)).toFixed(2);
        }
        else {
            this.bgdetail.asst_amt_vat = '';
            this.bgdetail.asst_amt_i_vat = this.bgdetail.asst_amt_e_vat;
        }
        this.calculatefinfromAsset();
    };
    CaFinanceComponent.prototype.calculateDown = function () {
        if (this.bgdetail.with_vat === 'Y') {
            this.bgdetail.down_amt_vat = Number(this.bgdetail.down_amt_e_vat * this.vatRate / 100).toFixed(2);
            this.bgdetail.down_amt_i_vat = (Number(this.bgdetail.down_amt_e_vat) + Number(this.bgdetail.down_amt_vat)).toFixed(2);
        }
        else {
            this.bgdetail.down_amt_vat = '';
            this.bgdetail.down_amt_i_vat = this.bgdetail.down_amt_e_vat;
        }
        this.calculatefinfromAsset();
    };
    CaFinanceComponent.prototype.calculateDep = function (from) {
        if (from == 'E') {
            if (this.bgdetail.with_vat === 'Y') {
                this.bgdetail.dep_amt_vat = Number(this.bgdetail.dep_amt_e_vat * this.vatRate / 100).toFixed(2);
                this.bgdetail.dep_amt_i_vat = (Number(this.bgdetail.dep_amt_e_vat) + Number(this.bgdetail.dep_amt_vat)).toFixed(2);
            }
            else {
                this.bgdetail.dep_amt_e_vat = '';
                this.bgdetail.dep_amt_i_vat = this.bgdetail.dep_amt_e_vat;
            }
        }
        else {
            if (this.bgdetail.with_vat == 'Y') {
                this.bgdetail.dep_amt_e_vat = Number(this.bgdetail.dep_amt_i_vat * 100 / (100 + this.vatRate)).toFixed(2);
                this.bgdetail.dep_amt_vat = (Number(this.bgdetail.dep_amt_i_vat) - Number(this.bgdetail.dep_amt_e_vat)).toFixed(2);
            }
            else {
                this.bgdetail.dep_amt_vat = 0;
                this.bgdetail.dep_amt_e_vat = this.bgdetail.dep_amt_i_vat;
            }
        }
        console.log(this.bgdetail.dep_amt_i_vat);
        this.calculatefinfromAsset();
    };
    CaFinanceComponent.prototype.calculateRv = function () {
        if (this.bgdetail.with_vat === 'Y') {
            this.bgdetail.rv_amt_vat = Number(this.bgdetail.rv_amt_e_vat * this.vatRate / 100).toFixed(2);
            this.bgdetail.rv_amt_i_vat = (Number(this.bgdetail.rv_amt_e_vat) + Number(this.bgdetail.rv_amt_vat)).toFixed(2);
        }
        else {
            this.bgdetail.rv_amt_vat = '';
            this.bgdetail.rv_amt_i_vat = this.bgdetail.rv_amt_e_vat;
        }
        this.calculatefinfromAsset();
    };
    CaFinanceComponent.prototype.calculateFin = function () {
        if (this.bgdetail.with_vat === 'Y') {
            this.bgdetail.fin_amt_vat = Number(this.bgdetail.fin_amt_e_vat * this.vatRate / 100).toFixed(2);
            this.bgdetail.fin_amt_i_vat = (Number(this.bgdetail.fin_amt_e_vat) + Number(this.bgdetail.fin_amt_vat)).toFixed(2);
        }
        else {
            this.bgdetail.fin_amt_vat = '';
            this.bgdetail.fin_amt_i_vat = this.bgdetail.fin_amt_e_vat;
        }
        if (this.bgdetail.asst_amt_e_vat) {
            this.bgdetail.fin_ratio = Number(this.bgdetail.fin_amt_e_vat / this.bgdetail.asst_amt_e_vat).toFixed(2);
        }
    };
    CaFinanceComponent.prototype.calculateRatio = function () {
        if (this.bgdetail.asst_amt_e_vat) {
            this.bgdetail.fin_amt_e_vat = this.bgdetail.fin_ratio * this.bgdetail.asst_amt_e_vat;
            if (this.bgdetail.with_vat === 'Y') {
                this.bgdetail.fin_amt_vat = Number(this.bgdetail.fin_amt_e_vat * this.vatRate / 100).toFixed(2);
                this.bgdetail.fin_amt_i_vat = (Number(this.bgdetail.fin_amt_e_vat) + Number(this.bgdetail.fin_amt_vat)).toFixed(2);
            }
            else {
                this.bgdetail.fin_amt_vat = '';
                this.bgdetail.fin_amt_i_vat = this.bgdetail.fin_amt_e_vat;
            }
            if (this.bgdetail.fin_typ === '1') {
                this.bgdetail.down_amt_e_vat = this.bgdetail.asst_amt_e_vat - this.bgdetail.fin_amt_e_vat;
                if (this.bgdetail.with_vat === 'Y') {
                    this.bgdetail.down_amt_vat = Number(this.bgdetail.down_amt_e_vat * this.vatRate / 100).toFixed(2);
                    this.bgdetail.down_amt_i_vat = Number(this.bgdetail.down_amt_e_vat) + Number(this.bgdetail.down_amt_vat);
                }
                else {
                    this.bgdetail.down_amt_vat = '';
                    this.bgdetail.down_amt_i_vat = this.bgdetail.down_amt_e_vat;
                }
            }
            else if (this.bgdetail.fin_typ === '2') {
                this.bgdetail.dep_amt_e_vat = this.bgdetail.asst_amt_e_vat - this.bgdetail.fin_amt_e_vat;
                if (this.bgdetail.with_vat === 'Y') {
                    this.bgdetail.dep_amt_vat = Number(this.bgdetail.dep_amt_e_vat * this.vatRate / 100).toFixed(2);
                    this.bgdetail.dep_amt_i_vat = Number(this.bgdetail.dep_amt_e_vat) + Number(this.bgdetail.dep_amt_vat);
                }
                else {
                    this.bgdetail.dep_amt_vat = '';
                    this.bgdetail.dep_amt_i_vat = this.bgdetail.dep_amt_e_vat;
                }
            }
        }
    };
    CaFinanceComponent.prototype.calculateInstallment = function (have) {
        if (have == "eVat") {
            this.bgdetail.installment_vat = Number(this.bgdetail.installment_e_vat * this.vatRate / 100).toFixed(2);
            this.bgdetail.installment_i_vat = Number(this.bgdetail.installment_e_vat) + Number(this.bgdetail.installment_vat);
        }
        else {
            this.bgdetail.installment_vat = Number(this.bgdetail.installment_i_vat * this.vatRate / (100 + this.vatRate)).toFixed(2);
            this.bgdetail.installment_e_vat = Number(this.bgdetail.installment_i_vat) - Number(this.bgdetail.installment_vat);
        }
    };
    CaFinanceComponent.prototype.calculateLc = function () {
        this.bgdetail.asst_amt_e_vat = Number(Number(this.bgdetail.asst_prce_forgn) * Number(this.bgdetail.currency) * (100 + Number(this.bgdetail.duty_pcnt)) / 100).toFixed(2);
        if (this.bgdetail.cal_inst_typ === 'Float' || (this.bgdetail.schedule === 'R' && this.bgdetail.cal_inst_typ === 'Fix')) {
            this.bgdetail.installment_e_vat = Number(Number(this.bgdetail.asst_amt_e_vat) * Number(this.bgdetail.inst_pcnt_of_asst) / 100).toFixed(2);
            this.calculateInstallment('eVat');
        }
        this.calculateFin();
    };
    CaFinanceComponent.prototype.advChange = function () {
        if (this.bgdetail.adv_arr === 'V') {
            this.bgdetail.first = this.bgdetail.disburse_dt;
        }
        else {
            this.bgdetail.first = this.onSelectMethod(this.dateUtils.addMonth(this.bgdetail.disburse_dt, 1));
        }
    };
    CaFinanceComponent.prototype.onSelectMethod = function (inputDate) {
        return this.dateUtils.dateToString(inputDate, 'dd/MM/yyyy');
    };
    CaFinanceComponent.prototype.rateChange = function () {
        var _this = this;
        if (this.bgdetail.bank_code && this.bgdetail.interest_rate_type) {
            var rateSelect = (this.dataBankIntRate.find(function (item) {
                // return item.id_code === this.bgdetail.bank_code && item.remark === this.bgdetail.interest_rate_type
                return item.key1 === _this.bgdetail.bank_code && item.remark === _this.bgdetail.interest_rate_type;
            }));
            if (rateSelect) {
                this.bgdetail.interest_rate = rateSelect.remark;
            }
            else {
                this.bgdetail.interest_rate = '';
            }
        }
    };
    CaFinanceComponent.prototype.onTabChange = function (index) {
        // if (this.appFormService.getAppFormData().disabled != 'N') {
        if (true) {
            this.bgdetail.cal_inst_typ = this.tabView.tabs[index].header;
            this.bgdetail.installment_e_vat = '';
            this.bgdetail.installment_vat = '';
            this.bgdetail.installment_i_vat = '';
            if (this.bgdetail.cal_inst_typ === 'Fix') {
                this.bgdetail.bank_code = '';
                this.bgdetail.interest_rate = '';
                // this.bgdetail.int_rate_name = '';
                this.bgdetail.interest_rate_type = '';
                this.bgdetail.spread = '';
            }
            else {
                this.bgdetail.schedule = '';
                this.bgdetail.listcastep = [];
            }
        }
    };
    CaFinanceComponent.prototype.scheduleChange = function () {
        if (this.bgdetail.schedule === 'I') {
            this.bgdetail.installment_e_vat = '';
            this.bgdetail.installment_vat = '';
            this.bgdetail.installment_i_vat = '';
        }
        else if (this.bgdetail.schedule === 'R') {
            this.bgdetail.listcastep = [];
        }
    };
    CaFinanceComponent.prototype.onSelectDate = function (inputDate) {
        return this.dateUtils.dateToString(inputDate, 'dd/MM/yyyy');
    };
    CaFinanceComponent.prototype.addEditStep = function (action) {
        if (action == 'add') {
            if (this.bgdetail.disburse_dt && this.bgdetail.first) {
                this.newStep = true;
                this.step = new __WEBPACK_IMPORTED_MODULE_8__model_ca_step__["a" /* caStep */]();
                this.step.ca_no = this.bgdetail.ca_no;
                this.step.sub_id = this.bgdetail.sub_id;
                this.step.sub_id2 = String(this.bgdetail.listcastep.length + 1);
                this.step.due_day = this.bgdetail.first.substr(0, 2);
                this.step.inst_vat = String(0);
                this.step.interval = String(1);
                this.actionDialog.setTitle('Add');
                this.actionDialog.open();
            }
            else {
                this.warning.list_msg = [];
                this.warning.addMessage('- Disburse');
                this.warning.open();
            }
        }
        else if (action == 'edit') {
            this.newStep = false;
            this.actionDialog.setTitle('Edit');
            this.actionDialog.open();
        }
    };
    CaFinanceComponent.prototype.addClick = function () {
        console.log(this.step);
        if (this.step.inst_e_vat) {
            this.step.inst_vat = String((Number(this.step.inst_e_vat) * this.vatRate / 100).toFixed(2));
        }
        var listStep = this.bgdetail.listcastep.slice();
        if (this.newStep) {
            listStep.push(this.step);
        }
        else {
            listStep[this.findSelectedIndex()] = this.step;
        }
        this.bgdetail.listcastep = listStep;
    };
    CaFinanceComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.bgdetail.listcastep = this.bgdetail.listcastep.filter(function (val, i) { return i != index; });
        for (var i = 0; i < this.bgdetail.listcastep.length; i++) {
            this.bgdetail.listcastep[i].sub_id2 = i + 1;
        }
    };
    CaFinanceComponent.prototype.findSelectedIndex = function () {
        return this.bgdetail.listcastep.indexOf(this.selectedStep);
    };
    CaFinanceComponent.prototype.onRowSelect = function (event) {
        this.step = this.cloneData(event.data);
    };
    CaFinanceComponent.prototype.cloneData = function (list) {
        var step = new __WEBPACK_IMPORTED_MODULE_8__model_ca_step__["a" /* caStep */]();
        for (var i in list) {
            step[i] = list[i];
        }
        return step;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["TabView"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["TabView"])
    ], CaFinanceComponent.prototype, "tabView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('installIvat'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaFinanceComponent.prototype, "installIvat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('installEvat'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaFinanceComponent.prototype, "installEvat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('assetIvat'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaFinanceComponent.prototype, "assetIvat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('assetEvat'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaFinanceComponent.prototype, "assetEvat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('downEvat'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaFinanceComponent.prototype, "downEvat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('downIvat'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaFinanceComponent.prototype, "downIvat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('depIvat'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaFinanceComponent.prototype, "depIvat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('depEvat'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaFinanceComponent.prototype, "depEvat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('finEvatt'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaFinanceComponent.prototype, "finEvatt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('finIvatt'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaFinanceComponent.prototype, "finIvatt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rvEvat'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaFinanceComponent.prototype, "rvEvat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rvIvat'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaFinanceComponent.prototype, "rvIvat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lockScreen'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_action_lock_screen_action_lock_screen_component__["a" /* ActionLockScreenComponent */])
    ], CaFinanceComponent.prototype, "lockScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("warning"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], CaFinanceComponent.prototype, "warning", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('actionDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], CaFinanceComponent.prototype, "actionDialog", void 0);
    CaFinanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-finance',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-asset/ca-finance/ca-finance.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_center_utils_date_utils__["a" /* DateUtils */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], CaFinanceComponent);
    return CaFinanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-asset/repayment/repayment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group col-md-12\">\n  <div class=\"mb-2\">\n    <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                 [responsive]=\"true\" scrollable=\"true\" scrollWidth=\"73vw\">\n      <p-column field=\"f1\" header=\" Term \" [style]=\"{'width':'250px'}\"></p-column>\n      <p-column field=\"f2\" header=\"Due Date\" [style]=\"{'width':'250px'}\"></p-column>\n      <p-column field=\"f3\" header=\"ค่างวด\" [style]=\"{'width':'250px'}\"></p-column>\n      <p-column field=\"f4\" header=\"W/H TAX\" [style]=\"{'width':'250px'}\"></p-column>\n      <p-column field=\"f5\" header=\"ค่างวด W/H TAX\" [style]=\"{'width':'250px'}\"></p-column>\n      <p-column field=\"f6\" header=\"VAT \" [style]=\"{'width':'250px'}\"></p-column>\n      <p-column field=\"f7\" header=\"Cash Receive\" [style]=\"{'width':'250px'}\"></p-column>\n      <p-column field=\"f8\" header=\"เงินต้น\" [style]=\"{'width':'250px'}\"></p-column>\n      <p-column field=\"f9\" header=\" ดอกเบี้ย \" [style]=\"{'width':'250px'}\"></p-column>\n      <p-column field=\"f10\" header=\"เงินต้นคงเหลือ\" [style]=\"{'width':'250px'}\"></p-column>\n      <p-column field=\"f11\" header=\" OS_INTEREST \" [style]=\"{'width':'250px'}\"></p-column>\n    </p-dataTable>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-asset/repayment/repayment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepaymentComponent; });
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

var RepaymentComponent = /** @class */ (function () {
    function RepaymentComponent() {
    }
    RepaymentComponent.prototype.ngOnInit = function () {
    };
    RepaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-repayment',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-asset/repayment/repayment.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RepaymentComponent);
    return RepaymentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-attachment/ca-attachment.component.html":
/***/ (function(module, exports) {

module.exports = "<app-action-read-excel (onAfterOpen)=\"checkValueExcel()\" [caNo]=\"caNo\" [comCode]=\"comCode\" #actionReadExcel>\n\n</app-action-read-excel>\n\n\n<button type=\"button\" *ngIf = 'partDownload'\n        class=\"btn btn-print\" (click)=\"downloadFile()\">\n  <i class=\"fa fa-print\" ></i> {{titleDownload}}\n</button>\n\n<button type=\"button\"\n        class=\"btn btn-print\">\n  <i class=\"fa fa-print\" ></i> {{titleDownloadTemp}}\n</button>\n\n<app-action-button-download [buttonName]=\"'Print Excel'\"\n                            [modelExcel]=\"modelExcel\"\n                            [method]=\"'post'\"\n                            [linkWebService]=\"partDownload\"></app-action-button-download>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-attachment/ca-attachment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaAttachmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_center_action_read_excel_action_read_excel_component__ = __webpack_require__("../../../../../src/app/shared/center/action-read-excel/action-read-excel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaAttachmentComponent = /** @class */ (function () {
    function CaAttachmentComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
        this.titleDownload = 'Download';
        this.titleDownloadTemp = 'Download Temp';
        this.partDownload = '';
    }
    CaAttachmentComponent.prototype.ngOnInit = function () {
        this.caNo = this.creditApplicationService.caHead.ca_no.replace(/\//gi, "_");
        this.comCode = this.creditApplicationService.caHead.com_code;
        console.log(this.caNo);
        // this.actionReadExcel.findCaDirectoryPart().subscribe(
        //   (data: any) => {
        //     console.log(data);
        //   }
        // );
        this.checkFile(this.comCode, this.caNo);
    };
    CaAttachmentComponent.prototype.checkFile = function (comCode, caNo) {
        var _this = this;
        this.actionReadExcel.findCaDirectoryPart(comCode, caNo).subscribe(function (data) {
            console.log(data);
            if (data.MSG == "Complete") {
                _this.actionReadExcel.fileSelect = data.DATA.fileName;
                _this.partDownload = data.DATA.part;
                _this.partDownload = "http://picask:DC8C3078BC63EAA@" + _this.partDownload.substring(2).replace(/\\/g, '/');
                console.log(_this.partDownload);
            }
        });
    };
    CaAttachmentComponent.prototype.checkValueExcel = function () {
        //console.log(this.actionReadExcel.getmodelReadExcel());
        console.log(this.actionReadExcel.getPointGrade());
        //console.log(this.actionReadExcel.getNameManager());
        this.creditApplicationService.caHead.grade = this.actionReadExcel.getPointGrade().grade;
        this.creditApplicationService.caHead.score = this.actionReadExcel.getPointGrade().point;
        // this.creditApplicationService.caHead.scoring_date = this.actionReadExcel.getPointGrade().date;
        console.log(this.comCode);
        console.log(this.caNo);
        console.log(this.partDownload);
        this.checkFile(this.comCode, this.caNo);
    };
    CaAttachmentComponent.prototype.downloadFile = function () {
        //this.partDownload = "http:\\picask:DC8C3078BC63EAA@172.16.1.112\bgpl_doc_mobile1\0742_60\CREDIT_REPORT_FORM_0742_60";
        window.open(this.partDownload, '_blank');
        //window.open(this.partDownload,'Download')
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('actionReadExcel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_center_action_read_excel_action_read_excel_component__["a" /* ActionReadExcelComponent */])
    ], CaAttachmentComponent.prototype, "actionReadExcel", void 0);
    CaAttachmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-attachment',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-attachment/ca-attachment.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__credit_application_service__["a" /* creditApplicationService */]])
    ], CaAttachmentComponent);
    return CaAttachmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-bg-exposure/ca-bg-exposure.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\n    <p-panel header=\"Exposure\">\n      <div class=\"form-group flex-column\">\n        <p-dataTable selectionMode=\"single\"  rows=\"15\"\n                     [value]=\"listcaexposure\"\n                     [responsive]=\"true\">\n             <p-column field=\"product\" header=\"Categories\"></p-column>\n             <p-column field=\"exposure\" header=\"Total Exposure\"  [style]=\"{'text-align':'right'}\" >\n                 <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n                   <span>{{ row[col.field] |  number:'.2-2'  }}</span>\n                 </ng-template>\n             </p-column>\n             <p-column field=\"os_balance\" header=\"O/S Balance\"  [style]=\"{'text-align':'right'}\" >\n                 <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n                   <span>{{ row[col.field] |  number:'.2-2'  }}</span>\n                 </ng-template>\n             </p-column>\n             <p-column field=\"maturity_date\" header=\"Maturity Date\"></p-column>\n             <p-column field=\"highest_amt\" header=\"Highest Amount\"   [style]=\"{'text-align':'right'}\">\n                 <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n               <span>{{ row[col.field] |  number:'.2-2'  }}</span>\n             </ng-template>\n             </p-column>\n             <p-column field=\"with_collateral\" header=\"With Collateral\"   [style]=\"{'text-align':'right'}\">\n                 <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n                   <span>{{ row[col.field] |  number:'.2-2'  }}</span>\n                 </ng-template>\n             </p-column>\n             <p-column field=\"with_out_collateral\" header=\"Without Collateral\"   [style]=\"{'text-align':'right'}\">\n                 <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n                   <span>{{ row[col.field] |  number:'.2-2'  }}</span>\n                 </ng-template>\n             </p-column>\n             <p-column field=\"bl_flg\" header=\"B/L\"></p-column>\n        </p-dataTable>\n      </div>\n    </p-panel>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-bg-exposure/ca-bg-exposure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaBgExposureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_exposure__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-exposure.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaBgExposureComponent = /** @class */ (function () {
    function CaBgExposureComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaBgExposureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionNewcard = this.creditApplicationService.eventCardNo.subscribe(function (pnewCard) {
            if (pnewCard) {
                _this.subscription =
                    _this.creditApplicationService.getListBGExposure('web', _this.creditApplicationService.caHead.com_code, _this.creditApplicationService.caHead.ca_no, pnewCard).subscribe(function (data) {
                        // console.log(data);
                        _this.listcaexposure = __WEBPACK_IMPORTED_MODULE_2__model_ca_exposure__["a" /* caExposure */].parse(data.LIST_DATA);
                        // console.log(caExposure.parse(data.DATA));
                        // console.log(this.listcaexposure );
                    });
            }
        });
    };
    CaBgExposureComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionNewcard != null) {
            this.subscriptionNewcard.unsubscribe();
        }
    };
    CaBgExposureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-bg-exposure',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-bg-exposure/ca-bg-exposure.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaBgExposureComponent);
    return CaBgExposureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-cap/cap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"border-isa\">\n  <div class=\"d-flex\">\n    <div class=\"flex-md-column col-md-3\">\n      <div class=\"form-group\">\n        <label> Total Exposure (Before cap)</label>\n        <div class=\"form-inline\">\n          <input appMyCurrency\n                 [value]=\"caTotalExposure\"\n                 class=\"form-control\"  disabled\n                 />\n          <label>&nbsp;Baht.</label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"d-flex\">\n    <div class=\"flex-md-column col-md-3\">\n      <div class=\"form-group\">\n        <label> Request Cap</label>\n        <div class=\"form-inline\">\n          <input class=\"form-control\"  disabled\n                 appMyCurrency\n                 [value]=\"caRequestCap\"\n                 />\n          <label>&nbsp; Baht.</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex-md-column col-md-3\">\n      <div class=\"form-group\">\n        <label> Over Cap </label>\n        <div class=\"form-inline\">\n          <input appMyCurrency\n                 class=\"form-control\"  disabled\n                 [value]=\"caOverCap\"\n                /> <label>&nbsp;Baht.</label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"d-flex\">\n    <div class=\"form-group flex-md-column col-md-6 \">\n      <button type=\"button\"  pButton style=\"float:left\" (click)=\"openDialog()\"\n              label=\"Select Cap\"></button>\n      <button type=\"button\"  pButton style=\"float:left\" (click)=\"onClickCancelCap()\"  [disabled]=\"selectCapcl?.cancel_by != ''\"\n              label=\"Cancel Cap\"></button>\n    </div>\n  </div>\n\n  <div class=\"d-flex\">\n    <div class=\"flex-md-column col-md-6 \">\n      <p-panel header=\"Fac\">\n        <div class=\"form-group\">\n          <p-dataTable selectionMode=\"single\"\n                       [value] = \"listCapClOwner\"\n                       rows=\"15\"\n                       [responsive]=\"true\">\n            <p-column field=\"flg_cap\"            header=\" Selcet \" [style]=\"{'width':'60px','text-align': 'center'}\"></p-column>\n            <p-column field=\"seller_name\"        header=\" Seller Name \"></p-column>\n            <p-column field=\"this_approve\"       header=\" Exposures \"></p-column>\n            <p-column field=\"joint_seller_group\" header=\" Seller Group \"></p-column>\n            <p-column field=\"cust_group\"         header=\" Customer Group \"></p-column>\n            <p-footer>\n              <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n              </div>\n            </p-footer>\n          </p-dataTable>\n        </div>\n      </p-panel>\n    </div>\n    <div class=\"flex-md-column col-md-6 \">\n      <p-panel header=\"HP/LS/DL\">\n        <div class=\"form-group\">\n          <p-dataTable selectionMode=\"single\"\n                       [value]=\"listcapothstore\"\n                       [responsive]=\"true\">\n            <p-column field=\"com_code\" header=\" Company \"></p-column>\n            <p-column field=\"cus_name\" header=\" Customer Name \"></p-column>\n            <p-column field=\"ca_no\"    header=\" CA No./Agr \"></p-column>\n            <p-column field=\"os_pri\"   header=\" Exposures \"></p-column>\n            <p-footer>\n              <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n              </div>\n            </p-footer>\n          </p-dataTable>\n        </div>\n      </p-panel>\n    </div>\n  </div>\n</div>\n\n<app-action-dialog   #actiondialog [width]=\"1200\"\n                     [showCancel]=\"true\"\n                     [showOk]=\"true\" (onOk)=\"onOkCap()\" >\n    <div class=\"row\">\n      <div class=\"form-group col-md-6\" >\n        <label> Total Exposure : </label>\n        <input appMyCurrency\n               class=\"form-control\"  disabled\n               [value]=\"caTotalExposure\"\n                />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group col-md-6\" >\n        <label> Request Cap </label>\n        <input appMyCurrency\n               class=\"form-control\"\n               [value]=\"tempcaRequestCap\" (change)=\"tempcaRequestCap = $event.target.value\"\n               (blur)=\"calOverCap()\"\n               />\n      </div>\n      <div class=\"form-group col-md-6\" >\n        <label> Over Cap </label>\n        <input appMyCurrency\n               class=\"form-control\"  disabled\n               [value]=\"tempcaOverCap\"\n               />\n      </div>\n    </div>\n\n   <div class=\"row\">\n    <div class=\"col-md-6 form-group\">\n      <p-dataTable selectionMode=\"single\"\n                   [value] = \"listCapClOwnerFromStore\"\n                   rows=\"15\"\n                   [responsive]=\"true\">\n        <p-column field=\"flg_cap\" [editable]=\"true\"  header=\"Selcet\" [style]=\"{'width':'60px','text-align': 'center'}\" >\n          <ng-template let-col let-cl=\"rowData\" pTemplate=\"body\">\n            <input type=\"checkbox\"\n                   [checked]=\"cl[col.field] == 'Y'\" (change)=\"cl[col.field] = onClickCheck($event)\"\n            >\n          </ng-template>\n        </p-column>\n        <p-column field=\"seller_code\" header=\" Seller \"></p-column>\n        <p-column field=\"seller_name\" header=\" Name \"></p-column>\n        <p-column field=\"this_approve\" header=\" Credit Line \"></p-column>\n        <p-column field=\"joint_seller_group\" header=\" Joine Group \"></p-column>\n        <p-column field=\"cust_group\" header=\" Cust Group \"></p-column>\n        <p-footer>\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n          </div>\n        </p-footer>\n      </p-dataTable>\n    </div>\n\n    <div class=\"col-md-6 form-group\">\n      <p-panel header=\"HP/LS/DL\">\n        <div class=\"form-group\">\n          <p-dataTable selectionMode=\"single\"\n                       [value]=\"listcapothstore\"\n                       [responsive]=\"true\">\n            <p-column field=\"com_code\" header=\" Company \"></p-column>\n            <p-column field=\"cus_name\" header=\" Customer Name \"></p-column>\n            <p-column field=\"ca_no\"    header=\" CA No./Agr \"></p-column>\n            <p-column field=\"os_pri\"   header=\" Exposures \"></p-column>\n            <p-footer>\n              <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n              </div>\n            </p-footer>\n          </p-dataTable>\n        </div>\n      </p-panel>\n     </div>\n   </div>\n\n</app-action-dialog>\n\n<app-alert-dialog  #alertCap (onOK)=\"okCancelCap()\"  ></app-alert-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-cap/cap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaCapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_capcl__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-capcl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_ca_capclowner__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-capclowner.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_center_action_dialog_action_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/action-dialog/action-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CaCapComponent = /** @class */ (function () {
    function CaCapComponent(creditApplicationService, userStorage) {
        this.creditApplicationService = creditApplicationService;
        this.userStorage = userStorage;
        this.caTotalExposure = 0;
        this.caRequestCap = 0;
        this.tempcaRequestCap = 0;
        this.caOverCap = 0;
        this.tempcaOverCap = 0;
    }
    CaCapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (value) {
            _this.listCapcl = value.listcacapcl;
            _this.listCapClOwner = value.listcacapclowner;
            _this.caTotalExposure = value.total_exposure;
            if (value.caentity) {
                _this.listCapStore = value.caentity.listcapstore;
                _this.listcapothstore = value.caentity.listcapothstore;
            }
            ;
            if ((_this.listCapcl) && (_this.listCapcl.length > 0)) {
                _this.selectCapcl = _this.listCapcl[0];
                _this.caRequestCap = _this.selectCapcl.total_cap_amt;
            }
            _this.calOverCap;
        });
    };
    CaCapComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaCapComponent.prototype.openDialog = function () {
        this.actiondialog.setTitle('Request Cap');
        this.tempcaOverCap = this.caOverCap;
        this.tempcaRequestCap = this.tempcaRequestCap;
        this.getlistCapClOwnerFromStore();
        this.actiondialog.open();
    };
    CaCapComponent.prototype.calOverCap = function () {
        if (this.caTotalExposure > this.caRequestCap) {
            this.tempcaOverCap = this.caTotalExposure - this.tempcaRequestCap;
        }
        else {
            this.tempcaOverCap = 0;
        }
    };
    CaCapComponent.prototype.getlistCapClOwnerFromStore = function () {
        this.listCapClOwnerFromStore = [];
        var running_code = 0;
        if ((this.selectCapcl) && (this.selectCapcl.cancel_by != '')) {
            running_code = this.selectCapcl.running_code;
        }
        for (var i = 0; i < this.listCapStore.length; i++) {
            var newRec = new __WEBPACK_IMPORTED_MODULE_3__model_ca_capclowner__["a" /* caCapClOwner */]();
            newRec.running_code = running_code;
            newRec.seq_no = i + 1;
            newRec.com_code = this.listCapStore[i].com_code;
            newRec.sbu_type = this.listCapStore[i].sbu_typ;
            newRec.seller_code = this.listCapStore[i].cus_code;
            newRec.flg_cap = 'N';
            newRec.joint_seller_group = this.listCapStore[i].joint_seller_group;
            newRec.cust_group = this.listCapStore[i].grp_code;
            newRec.this_approve = this.listCapStore[i].os_pri;
            newRec.seller_name = this.listCapStore[i].cus_name;
            this.listCapClOwnerFromStore.push(newRec);
        }
    };
    CaCapComponent.prototype.onOkCap = function () {
        this.caRequestCap = this.tempcaRequestCap;
        this.caOverCap = this.tempcaOverCap;
        this.listCapClOwner = this.listCapClOwnerFromStore;
        this.creditApplicationService.caHead.listcacapclowner = this.listCapClOwner;
        if ((this.selectCapcl) && (this.selectCapcl.cancel_by != '')) {
            this.selectCapcl.total_cap_amt = this.caRequestCap ? this.caRequestCap : 0;
            this.selectCapcl.total_exposure = this.caTotalExposure ? this.caTotalExposure : 0;
            this.selectCapcl.over_cap = this.caOverCap ? this.caOverCap : 0;
        }
        else {
            this.selectCapcl = new __WEBPACK_IMPORTED_MODULE_2__model_ca_capcl__["a" /* caCapCl */]();
            this.selectCapcl.running_code = 0;
            this.selectCapcl.total_cap_amt = this.caRequestCap ? this.caRequestCap : 0;
            this.selectCapcl.total_exposure = this.caTotalExposure ? this.caTotalExposure : 0;
            this.selectCapcl.current_ca = this.creditApplicationService.caHead.ca_no;
            this.selectCapcl.cancel_dt = '';
            this.selectCapcl.cancel_by = '';
            this.selectCapcl.input_date = '';
            this.selectCapcl.input_by = '';
            this.selectCapcl.last_usr = '';
            this.selectCapcl.last_upd = '';
            this.selectCapcl.over_cap = this.caOverCap ? this.caOverCap : 0;
            this.listCapcl.push(this.selectCapcl);
        }
    };
    CaCapComponent.prototype.onClickCheck = function (value) {
        var data;
        if (value) {
            data = 'Y';
        }
        else {
            data = 'N';
        }
        return data;
    };
    CaCapComponent.prototype.onClickCancelCap = function () {
        this.alertCap.reset();
        this.alertCap.setAction('CANCEL');
        this.alertCap.open();
    };
    CaCapComponent.prototype.okCancelCap = function () {
        if ((this.selectCapcl) && (this.selectCapcl.cancel_by == '')) {
            this.selectCapcl.cancel_by = this.userStorage.getCode();
            this.selectCapcl.cancel_dt = new Date().toLocaleDateString('en-GB');
            for (var i = 0; i < this.listCapClOwner.length; i++) {
                this.listCapClOwner[i].flg_cap = 'N';
                this.listCapClOwner[i].cancel_by = this.userStorage.getCode();
                this.listCapClOwner[i].cancel_dt = new Date().toLocaleDateString('en-GB');
            }
        }
        ;
        console.log(this.selectCapcl);
        console.log(this.listCapClOwner);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('actiondialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], CaCapComponent.prototype, "actiondialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alertCap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], CaCapComponent.prototype, "alertCap", void 0);
    CaCapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-cap',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-cap/cap.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], CaCapComponent);
    return CaCapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-collateral/collateral.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <p-dataTable selectionMode=\"single\" [value]=\"listcacollateral\"\n                   [(selection)]=\"selectCollateral\"\n                   (onRowSelect)=\"rowSelect(selectCollateral)\"\n                   [scrollable]=\"true\"\n                   [responsive]=\"true\">\n        <p-header>\n          <app-custom-botton-icon [option]=\"'new'\" (onBtnClick)=\"addCollateral()\"></app-custom-botton-icon>\n          <app-custom-botton-icon [option]=\"'delete'\" (onBtnClick)=\"deleteCollateral()\"></app-custom-botton-icon>\n        </p-header>\n        <p-column field=\"seq_no\" header=\"Seq No.\"  [style]=\"{'width':'50px'}\"  ></p-column>\n        <p-column field=\"clt_type_desc\" header=\"Collateral type\"  [style]=\"{'width':'100px'}\"></p-column>\n        <p-column field=\"doc_no\" header=\"Doc No\"     [style]=\"{'width':'100px'}\"></p-column>\n      </p-dataTable>\n    </div>\n  </div>\n\n  <div class=\"col-md-9 border-isa\">\n    <fieldset [disabled]=\"!selectCollateral.clt_type\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <div class=\"mt-radio-inline border-isa\">\n            <label class=\"p-1\"><b>Payment Method</b></label>\n            <div class=\"form-group  \">\n              <div class=\"mt-radio-inline\" *ngIf=\"!cltTypeLosn\" style=\"padding: 5px\">\n                <input type=\"radio\" name=\"col_type\" [value]=\"'1'\" [(ngModel)]=\"selectCollateral.clt_type\"\n                       (ngModelChange)=\"getCltTypeDesc('1')\"> P/N\n                <input type=\"radio\" name=\"col_type\" [value]=\"'2'\" [(ngModel)]=\"selectCollateral.clt_type\"\n                       (ngModelChange)=\"getCltTypeDesc('2')\"> Cheque\n                <input type=\"radio\" name=\"col_type\" [value]=\"'3'\" [(ngModel)]=\"selectCollateral.clt_type\"\n                       (ngModelChange)=\"getCltTypeDesc('3')\"> CreditLine Guarantee\n              </div>\n              <div class=\"mt-radio-inline\" *ngIf=\"cltTypeLosn\" style=\"padding: 5px\">\n                <input type=\"radio\" name=\"col_type\" [value]=\"'4'\" [(ngModel)]=\"selectCollateral.clt_type\"\n                       (ngModelChange)=\"getCltTypeDesc('4')\"> Machine\n                <input type=\"radio\" name=\"col_type\" [value]=\"'5'\" [(ngModel)]=\"selectCollateral.clt_type\"\n                       (ngModelChange)=\"getCltTypeDesc('5')\"> Invoice\n                <input type=\"radio\" name=\"col_type\" [value]=\"'6'\" [(ngModel)]=\"selectCollateral.clt_type\"\n                       (ngModelChange)=\"getCltTypeDesc('6')\"> Stock\n                <input type=\"radio\" name=\"col_type\" [value]=\"'7'\" [(ngModel)]=\"selectCollateral.clt_type\"\n                       (ngModelChange)=\"getCltTypeDesc('7')\"> Cash Deposit\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\" [hidden]=\"!selectCollateral.clt_type\">\n        <div class=\"border-isa\" *ngIf=\"openCltDetailTab\">\n          <label class=\"p-1\"><b> {{selectCollateral.clt_type_desc}} Detail</b></label>\n          <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n              <label>Collateral Amount</label>\n              <div class=\"form-inline\">\n                <input class=\"form-control\"\n                       [ngModel]=\"selectCollateral?.clt_amt\"\n                       (ngModelChange)=\"selectCollateral.clt_amt=$event\"\n                       currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.' ,precision: 2 }\">\n                <label>&nbsp; Baht.</label>\n              </div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>{{selectCollateral.clt_type_desc}} No</label>\n              <input class=\"form-control\" [(ngModel)]=\"selectCollateral.doc_no\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>{{selectCollateral.clt_type_desc}} Date</label><br>\n              <p-calendar dateFormat=\"dd/mm/yy\"\n                          [ngModel]=\"selectCollateral?.doc_date\"\n                          (ngModelChange)=\"selectCollateral.doc_date=changedate($event)\"\n                          [disabled]=\"componentReadOnly\"\n              ></p-calendar>\n            </div>\n            <div class=\"form-group col-md-12\">\n              <label>Remark </label>\n              <textarea class=\"form-control\" [(ngModel)]=\"selectCollateral.remark\" rows=\"5\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"border-isa\" *ngIf=\"!openCltDetailTab && selectCollateral.clt_type == '3' \">\n          <label class=\"p-1\"><b>Detail</b></label>\n          <div class=\"d-flex\">\n            <div class=\"form-group col-md-6\">\n              <div class=\"col-md-12\">\n                <label>Collateral Amount </label>\n                <div class=\"form-inline\">\n                  <input class=\"form-control\"  (onblur)=\"callCollateral('colamt')\"\n                         [ngModel]=\"selectCollateral?.clt_amt\"\n                         (ngModelChange)=\"selectCollateral.clt_amt=$event\"\n                         currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.' ,precision: 2 }\">\n                  <label>&nbsp; Baht.</label>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <label>Cash </label>\n                <div class=\"form-inline\">\n                  <input class=\"form-control\"\n                         [ngModel]=\"selectCollateral?.clt_cash_rcp\"\n                         (ngModelChange)=\"selectCollateral.clt_cash_rcp=$event\"\n                         currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.' ,precision: 2 }\">\n                  <label>&nbsp; Baht.</label>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <label>Balance Amount</label>\n                <div class=\"form-inline\">\n                  <input class=\"form-control\"\n                         [ngModel]=\"selectCollateral?.clt_balance\"\n                         (ngModelChange)=\"selectCollateral.clt_balance=$event\"\n                         currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.' ,precision: 2 }\">\n                  <label>&nbsp; Baht.</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 border-isa mb-1\" *ngIf=\"selectCollateral.clt_type == '3'\" >\n              <label class=\"p-1\"><b>Deduct</b></label>\n              <div class=\"row form-inline\">\n                <label class=\"mt-radio col-md-3\">\n                  <input type=\"radio\" name=\"ded_type\" [value]=\"'P'\" [(ngModel)]=\"selectCollateral.deduct_flg\">&nbsp;Percent\n                </label>\n                <input class=\"form-control\"    [disabled]=\"selectCollateral.deduct_flg != 'P'\"\n                       [ngModel]=\"selectCollateral?.deduct_pcn\"\n                       (ngModelChange)=\"selectCollateral.deduct_pcn=$event\"\n                       currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.' ,precision: 2 }\">&nbsp;\n              </div>\n              <div class=\"row form-inline\">\n                <label class=\"mt-radio col-md-3\">\n                  <input type=\"radio\" name=\"ded_type\" [value]=\"'A'\" [(ngModel)]=\"selectCollateral.deduct_flg\">&nbsp;Amount\n                </label>\n                <input class=\"form-control\"         [disabled]=\"selectCollateral.deduct_flg != 'A'\"\n                       [ngModel]=\"selectCollateral?.deduct_amt\"\n                       (ngModelChange)=\"selectCollateral.deduct_amt=$event\"\n                       currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.' ,precision: 2 }\">&nbsp;\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"border-isa\">\n              <label class=\"p-1\"><b>Interest</b></label>\n              <div class=\"col-md-12\">\n                <div class=\"d-flex\">\n                  <div class=\"col-md-6 pb-2\">\n                    <label> Interest Calculate Detail : </label>\n                    <select class=\"form-control w-100\" (change)=\"selectCollateral.cal_int_type = $event.target.value\">\n                      <option [value]=\"-1\"></option>\n                      <option [value]=\"0\">1.No Calculate</option>\n                      <option [value]=\"1\">2.Away Calculate</option>\n                      <option [value]=\"2\">3.Paid Full Calculate</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"flex-row\">\n                <div class=\"form-group row\">\n                  <div class=\"col-md-2 pl-5 pt-3 mt-3\">\n                    <label class=\"mt-radio\">\n                      <input type=\"radio\" name=\"rate_type2\" [value]=\"'Fix'\" [(ngModel)]=\"selectCollateral.rate_type\">&nbsp;Fix\n                    </label>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <label>Interest Rate </label>\n                    <input class=\"form-control\"         [disabled]=\"selectCollateral.rate_type != 'Fix'\"\n                           [ngModel]=\"selectCollateral?.int_rate\"\n                           (ngModelChange)=\"selectCollateral.int_rate=$event\"\n                           currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.' ,precision: 2 }\">&nbsp;\n                  </div>\n                </div>\n              </div>\n              <div class=\"flex-row\">\n                <div class=\"form-group row\">\n                  <div class=\"col-md-2 pl-5 pt-3 mt-3\">\n                    <label class=\"mt-radio\">\n                      <input type=\"radio\" name=\"rate_type2\" [value]=\"'Float'\" [(ngModel)]=\"selectCollateral.rate_type\">&nbsp;Float\n                    </label>\n                  </div>\n                    <div class=\"col-md-2\">\n                      <label> Bank </label>\n                      <select class=\"form-control\"     [disabled]=\"selectCollateral.rate_type != 'Float'\"\n                              [(ngModel)]=\"selectCollateral.rate_bank\">\n                        <option [value]=\"-1\"></option>\n                        <option *ngFor=\"let list of dataListBank; let i = index\"\n                                [value]=\"list.id_code\"\n                                [selected]=\"selectCollateral.rate_bank === list.id_code\">{{list?.remark}}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"col-md-2\">\n                      <label> Rate </label>\n                      <select class=\"form-control\"     [disabled]=\"selectCollateral.rate_type != 'Float'\"\n                              [(ngModel)]=\"selectCollateral.rate_m\">\n                        <option [value]=\"-1\"></option>\n                        <option *ngFor=\"let list of dataListInsRate; let i = index\"\n                                [value]=\"list.id_code\"\n                                [selected]=\"selectCollateral.rate_m === list.id_code\">{{list?.remark}}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"col-md-2\">\n                      <label> Spread </label>\n                      <input class=\"form-control\"       [disabled]=\"selectCollateral.rate_type != 'Float'\"\n                             [ngModel]=\"selectCollateral?.rate_spread\"\n                             (ngModelChange)=\"selectCollateral.rate_spread=$event\"\n                             currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.' ,precision: 2 }\">\n                    </div>\n                    <div class=\"col-md-2\">\n                      <label> Max Interest Rate </label>\n                      <input class=\"form-control\"       [disabled]=\"selectCollateral.rate_type != 'Float'\"\n                             [ngModel]=\"selectCollateral?.max_int_rate\"\n                             (ngModelChange)=\"selectCollateral.max_int_rate=$event\"\n                             currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.' ,precision: 2 }\">\n                    </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>   <!--  Fac -->\n        <div class=\"border-isa\" *ngIf=\"!openCltDetailTab && selectCollateral.clt_type == '7'\">\n          <label class=\"p-1\"><b>Detail</b></label>\n          <div class=\"d-flex\">\n            <div class=\"form-group col-md-6\">\n              <div class=\"col-md-12\">\n                <label>Collateral Deposit </label>\n                <div class=\"form-inline\">\n                  <input class=\"form-control\"   (blur)=\"calDeposit('pcn')\"\n                         appMyCurrency\n                         [value]=\"selectCollateral.deduct_pcn\" (change)=\"selectCollateral.deduct_pcn = $event.target.value\"\n                  >\n                  <label>&nbsp;%</label>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <label>Collateral Deposit </label>\n                <div class=\"form-inline\">\n                  <input class=\"form-control\"   (blur)=\"calDeposit('amt')\"\n                         appMyCurrency\n                         [value]=\"selectCollateral.clt_amt\" (change)=\"selectCollateral.clt_amt = $event.target.value\">\n                  <label>&nbsp; Baht.</label>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <label>Deduct Cheque </label>\n                <div class=\"form-inline\">\n                  <input class=\"form-control\"   disabled\n                         appMyCurrency\n                         [value]=\"selectCollateral.clt_balance\" >\n                  <label>&nbsp; Baht.</label>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <label>Cash</label>\n                <div class=\"form-inline\">\n                  <input class=\"form-control\"   (onblur)=\"calDeposit()\"\n                         appMyCurrency\n                         [value]=\"selectCollateral.clt_cash_rcp\" (change)=\"selectCollateral.clt_cash_rcp = $event.target.value\">\n                  <label>&nbsp; Baht.</label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"border-isa\">\n              <label class=\"p-1\"><b>Interest</b></label>\n              <div class=\"col-md-12\">\n                <div class=\"d-flex\">\n                  <div class=\"col-md-6 pb-2\">\n                    <label> Pay Interest Method  </label>\n                    <select class=\"form-control w-100\" (change)=\"selectCollateral.cal_int_type = $event.target.value\">\n                      <option [value]=\"0\">1.  No Pay</option>\n                      <option [value]=\"1\">2.  Pay On Last due</option>\n                      <option [value]=\"2\">3.  Every Month</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"d-flex\">\n                  <div class=\"col-md-6 pb-2\">\n                    <label>Interest Rate </label>\n                    <input class=\"form-control\"\n                           appMyCurrency\n                           [value]=\"selectCollateral.int_rate\" (change)=\"selectCollateral.int_rate = $event.target.value\">&nbsp;\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>    <!--  Direct Loan -->\n      </div>\n    </fieldset>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-collateral/collateral.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaCollateralComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_collateral__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-collateral.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaCollateralComponent = /** @class */ (function () {
    function CaCollateralComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
        this.cltTypeLosn = false;
        this.openCltDetailTab = true;
    }
    CaCollateralComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectCollateral = new __WEBPACK_IMPORTED_MODULE_2__model_ca_collateral__["a" /* caCollateral */]();
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (value) {
            _this.myCaHead = value;
            if (_this.myCaHead.sbu_typ == 'P') {
                _this.cltTypeLosn = true;
            }
            _this.listcacollateral = value.listcacollateral;
            if ((_this.listcacollateral) && (_this.listcacollateral.length > 1)) {
                _this.selectCollateral = _this.listcacollateral[0];
            }
        });
        this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(function (obj) {
            _this.dataListBank = _this.creditApplicationService.listBNK;
            _this.dataListInsRate = _this.creditApplicationService.listInsRate;
            _this.dataBankInsRate = _this.creditApplicationService.listBANK_INT_RATE;
        });
    };
    CaCollateralComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaCollateralComponent.prototype.rowSelect = function (value) {
        this.selectCollateral = value;
        this.getCltTypeDesc(this.selectCollateral.clt_type);
    };
    CaCollateralComponent.prototype.addCollateral = function () {
        var newRec = new __WEBPACK_IMPORTED_MODULE_2__model_ca_collateral__["a" /* caCollateral */]();
        newRec.com_code = this.myCaHead.com_code;
        newRec.ca_no = this.myCaHead.ca_no;
        var maxSeq = this.listcacollateral.length ? this.listcacollateral.length : 0;
        newRec.seq_no = maxSeq + 1;
        if (!this.cltTypeLosn) {
            newRec.clt_type = '1';
        }
        else {
            newRec.clt_type = '4';
        }
        this.selectCollateral = newRec;
        this.getCltTypeDesc(this.selectCollateral.clt_type);
        this.listcacollateral = this.listcacollateral.concat([this.selectCollateral]);
        this.creditApplicationService.caHead.listcacollateral = this.listcacollateral;
    };
    CaCollateralComponent.prototype.deleteCollateral = function () {
        var delRow = this.listcacollateral.indexOf(this.selectCollateral);
        this.listcacollateral.splice(delRow, 1);
        ////  Change  order
        for (var i = 1; i <= this.listcacollateral.length; i++) {
            this.listcacollateral[i - 1].seq_no = i;
        }
        this.listcacollateral = this.listcacollateral.slice();
        this.creditApplicationService.caHead.listcacollateral = this.listcacollateral;
    };
    CaCollateralComponent.prototype.getCltTypeDesc = function (value) {
        var typeDesc = '';
        if (value == '1') {
            typeDesc = 'P/N';
        }
        else if (value == '2') {
            typeDesc = 'Cheque';
        }
        else if (value == '3') {
            typeDesc = 'CreditLine Guarantee';
        }
        else if (value == '4') {
            typeDesc = 'Machine';
        }
        else if (value == '5') {
            typeDesc = 'Invoice';
        }
        else if (value == '6') {
            typeDesc = 'Stock';
        }
        else if (value == '7') {
            typeDesc = 'Cash Deposit';
        }
        this.selectCollateral.clt_type_desc = typeDesc;
        if ((value == '3') || (value == '7')) {
            this.openCltDetailTab = false;
        }
        else {
            this.openCltDetailTab = true;
        }
    };
    CaCollateralComponent.prototype.changedate = function (indate) {
        return this.creditApplicationService.changedate(indate);
    };
    CaCollateralComponent.prototype.calDeposit = function (action) {
        var finAmt = this.myCaHead.listbgdetail[0].fin_amt_e_vat ? this.myCaHead.listbgdetail[0].fin_amt_e_vat : 0;
        if (finAmt) {
            if ((action == 'pcn') && (this.selectCollateral.deduct_pcn)) {
                if (this.selectCollateral.deduct_pcn > 30) {
                    this.selectCollateral.deduct_pcn = 30;
                }
                else if (this.selectCollateral.deduct_pcn < 0) {
                    this.selectCollateral.deduct_pcn = 0;
                }
                this.selectCollateral.clt_amt = finAmt * this.selectCollateral.deduct_pcn / 100;
            }
            else if ((action == 'amt') && (this.selectCollateral.clt_amt)) {
                this.selectCollateral.deduct_pcn = (this.selectCollateral.clt_amt / finAmt) * 100;
            }
            // this.selectCollateral.clt_cash_rcp = this.selectCollateral.clt_cash_rcp ? this.selectCollateral.clt_cash_rcp : 0 ;
            //  this.selectCollateral.clt_balance = this.selectCollateral.deduct_amt -  this.selectCollateral.clt_cash_rcp ;
            if (!this.openCltDetailTab && this.selectCollateral.clt_type == '7') {
                this.selectCollateral.printcipal_clg_amt = this.selectCollateral.clt_amt - this.selectCollateral.clt_cash_rcp;
                this.selectCollateral.clt_balance = this.selectCollateral.printcipal_clg_amt;
            }
        }
        ;
    };
    CaCollateralComponent.prototype.callCollateral = function (action) {
        var finAmt = this.myCaHead.listbgdetail[0].fin_amt_e_vat ? this.myCaHead.listbgdetail[0].fin_amt_e_vat : 0;
        var depositpcn = this.selectCollateral.deduct_pcn ? this.selectCollateral.deduct_pcn : 0;
        var depositamt = this.selectCollateral.deduct_amt ? this.selectCollateral.deduct_amt : 0;
        var depositcheque = this.selectCollateral.clt_balance ? this.selectCollateral.clt_balance : 0;
        var depositcash = this.selectCollateral.clt_cash_rcp ? this.selectCollateral.clt_cash_rcp : 0;
    };
    CaCollateralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-collateral',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-collateral/collateral.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaCollateralComponent);
    return CaCollateralComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-condition-remark/condition-remark.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView>\n  <p-tabPanel header=\"Condition\">\n    <div class=\"main-container\">\n      <div class=\"d-flex\">\n        <!------------------Condition-------------------------->\n        <div class=\"flex-md-column col-md-6\">\n          <div class=\"form-group form-inline border-isa\">\n            <label> Condition </label>\n            <p-dataTable selectionMode=\"single\" [value]=\"listCOND_MKT\"\n                         [scrollable]=\"true\" scrollHeight=\"200px\"\n                         [(selection)]=\"selectCond\"\n                         (onRowDblclick)=\"onDbClickCondition(selectCond)\"\n                         [responsive]=\"true\">\n              <p-column field=\"remark\" header=\" Condition Detail \"></p-column>\n              <p-footer>\n                <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n                </div>\n              </p-footer>\n            </p-dataTable>\n          </div>\n          <div class=\"border-isa\">\n            <textarea class=\"form-control\" rows=\"5\" style=\"resize: none\" [(ngModel)]=\"myCaHead.ca_condition\"></textarea>\n          </div>\n        </div>\n        <!------------------Remark-------------------------->\n        <div class=\"flex-md-column col-md-6\">\n          <div class=\"form-group border-isa\">\n            <label> Remark </label>\n            <textarea class=\"form-control pb-0\" rows=\"21\" style=\"resize: none\"  [(ngModel)]=\"myCaHead.ca_remark\"></textarea>\n          </div>\n        </div>\n      </div>\n    </div>\n  </p-tabPanel>\n\n\n  <p-tabPanel header=\"Opinion\" value=\"3\" *ngIf=\"false\">\n    <p-panel header=\"Opinion\">\n      <div class=\"main-container\">\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-6 \">\n            <div class=\"form-group\">\n              <label class=\"my-1\">Additon infomation</label>\n              <textarea class=\"form-control\"></textarea>\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-6\">\n            <div class=\"form-group\">\n              <label> &nbsp; </label>\n              <textarea class=\"form-control\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"my-3\"> Suggest to approve with condition </label>\n              <textarea class=\"form-control\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n    </p-panel>\n  </p-tabPanel>\n  <p-tabPanel header=\"Follow up point\" *ngIf=\"false\">\n    <p-panel header=\"Follow up point\">\n      <div class=\"main-container\">\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-6 \">\n            <div class=\"form-group\">\n              <div class=\"form-inline\">\n                <label>Expected Date : </label>\n                <p-calendar dateFormat=\"dd/mm/yy\" class=\"my-1\"></p-calendar>\n              </div>\n            </div>\n          </div>\n        </div>\n        <p-panel header=\"Follow up point\">\n          <div class=\"d-flex\">\n            <div class=\"flex-md-column col-md-6 \">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\"></textarea>\n              </div>\n            </div>\n          </div>\n        </p-panel>\n        <p-panel header=\"Response Follow up point\">\n          <div class=\"d-flex\">\n            <div class=\"flex-md-column col-md-6\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\"></textarea>\n              </div>\n            </div>\n          </div>\n        </p-panel>\n      </div>\n    </p-panel>\n  </p-tabPanel>\n  <p-tabPanel header=\"Remark (Attached Sheet)\" *ngIf=\"false\">\n    <p-panel header=\"Remark (Attached Sheet)\">\n      <div class=\"main-container\">\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-9 \">\n            <div class=\"form-group\">\n              <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                           [responsive]=\"true\">\n                <p-column field=\"f1\" header=\" Remark \"></p-column>\n                <p-footer>\n                  <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n                  </div>\n                </p-footer>\n              </p-dataTable>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-9\">\n            <div class=\"form-group\">\n              <textarea class=\"form-control\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n    </p-panel>\n  </p-tabPanel>\n</p-tabView>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-condition-remark/condition-remark.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaConditionRemarkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_head__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-head.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaConditionRemarkComponent = /** @class */ (function () {
    function CaConditionRemarkComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
        this.listRMK_MKT = [];
        this.listCOND_MKT = [];
    }
    CaConditionRemarkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myCaHead = new __WEBPACK_IMPORTED_MODULE_2__model_ca_head__["a" /* caHead */]();
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (obj) {
            _this.myCaHead = obj;
        });
        this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(function (obj) {
            _this.listRMK_MKT = _this.creditApplicationService.listRMK_MKT;
            _this.listCOND_MKT = _this.creditApplicationService.listCOND_MKT;
        });
    };
    CaConditionRemarkComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaConditionRemarkComponent.prototype.onDbClickCondition = function (select) {
        if (this.myCaHead.ca_condition.length > 1) {
            this.myCaHead.ca_condition += '\n' + select.remark;
        }
        else {
            this.myCaHead.ca_condition += select.remark;
        }
    };
    CaConditionRemarkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-condition-remark',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-condition-remark/condition-remark.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaConditionRemarkComponent);
    return CaConditionRemarkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-context-data/context-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"form-group\">\n    <p-dataTable selectionMode=\"single\"\n                 [value]=\"listcacontext\"\n                 [responsive]=\"true\">\n      <p-column field=\"last_upd\"     header=\" Action Date \"></p-column>\n      <p-column field=\"full_namet\"   header=\" Action By \"></p-column>\n      <p-column field=\"context_data\" header=\" Action Detail \"></p-column>\n      <p-footer>\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        </div>\n      </p-footer>\n    </p-dataTable>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-context-data/context-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaContextDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaContextDataComponent = /** @class */ (function () {
    function CaContextDataComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaContextDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (obj) {
            _this.listcacontext = obj.listcacontext;
        });
    };
    CaContextDataComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
    };
    CaContextDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-context-data',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-context-data/context-data.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaContextDataComponent);
    return CaContextDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-address-en/ca-address-en.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Current Address / Company Certificate\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.address_eng\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.address_eng2\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"d-flex\">\n      <!--<div class=\"flex-md-column col-md-3\">-->\n        <!--<div class=\"form-group\">-->\n          <!--<label>Post Code </label>-->\n          <!--<input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.post_cd\">-->\n\n        <!--</div>-->\n      <!--</div>-->\n      <div class=\"col-md-6 \">\n        <div class=\"form-group\">\n          <label> Neighborhood </label>\n          <input type=\"text\" class=\"form-control \"  [(ngModel)]=\"caEntityDetail.near_eng\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Telephone No.</label>\n          <input type=\"text\" class=\"form-control \"  [(ngModel)]=\"caEntityDetail.tel\">\n        </div>\n      </div>\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label> Fax No.</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.fax_current\" >\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\"Address VAT Registration\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caEntityDetail.add_c_eng\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caEntityDetail.add_c_eng2\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <!--<div class=\"flex-md-column col-md-3\">-->\n        <!--<div class=\"form-group\">-->\n          <!--<label>Post Code</label>-->\n          <!--<input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caEntityDetail.post_cd_c\">-->\n\n        <!--</div>-->\n      <!--</div>-->\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Telephone No.</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.tel_card\" >\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\" Office\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caEntityDetail.add_o_eng\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caEntityDetail.add_o_eng2\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <!--<div class=\"flex-md-column col-md-3\">-->\n        <!--<div class=\"form-group\">-->\n          <!--<label>Post Code</label>-->\n          <!--<input type=\"text\" class=\"form-control\" disabled >-->\n\n        <!--</div>-->\n      <!--</div>-->\n      <div class=\"col-md-6 \">\n        <div class=\"form-group\">\n          <label> Neighborhood </label>\n          <input type=\"text\" class=\"form-control \"  [(ngModel)]=\"caEntityDetail.near_o_eng\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Telephone No.</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.tel_o\" >\n        </div>\n      </div>\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label> Fax No.</label>\n          <input type=\"text\" class=\"form-control \"  [(ngModel)]=\"caEntityDetail.fax_office\">\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\" Mail\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caEntityDetail.add_m_eng\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caEntityDetail.add_m_eng2\">\n        </div>\n      </div>\n    </div>\n    <!--<div class=\"d-flex\">-->\n      <!--<div class=\"flex-md-column col-md-3\">-->\n        <!--<div class=\"form-group\">-->\n          <!--<label>Post Code</label>-->\n          <!--<input type=\"text\" class=\"form-control\"  disabled>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  </div>\n</p-panel>\n<p-panel header=\" Telephone\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label> Moblie Phone No. </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.mobile_phone\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.mobile_phone2\" >\n        </div>\n      </div>\n\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.mobile_phone3\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label> Emial Address </label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caEntityDetail.email_address\">\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-address-en/ca-address-en.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaAddressEnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ca_entity__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaAddressEnComponent = /** @class */ (function () {
    function CaAddressEnComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaAddressEnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caEntityDetail = new __WEBPACK_IMPORTED_MODULE_1__model_ca_entity__["a" /* caEntity */]();
        this.creditApplicationService.eventCaHead.subscribe(function (obj) {
            _this.caEntityDetail = obj.caentity;
        });
    };
    CaAddressEnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-address-en',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-address-en/ca-address-en.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__credit_application_service__["a" /* creditApplicationService */]])
    ], CaAddressEnComponent);
    return CaAddressEnComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-address-th/address-th.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\" Current Address / Certificate Address\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.address\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-2\">\n        <div class=\"form-group\">\n          <label>Address Code</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.zip\">\n\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.zip_desc\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-2 \">\n\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.post_cd\">\n        </div>\n      </div>\n      <div class=\"col-md-6 \">\n        <div class=\"form-group\">\n          <label>Nearby Place</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.near\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Telephone No. </label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.tel\">\n        </div>\n      </div>\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Fax No.</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.fax_current\">\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\" Address VAT Registration \">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <button (click)=\"copyOwnr('VAT')\" > <i class=\"fa fa-copy\">  Duplicate Address from Current </i> </button>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.add_c\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-2\">\n        <div class=\"form-group\">\n          <label>Address Code</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.zip_c\">\n\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.zip_c_desc\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-2 \">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.post_cd_c\">\n        </div>\n      </div>\n      <!--<div class=\"col-md-6 \">-->\n        <!--<div class=\"form-group\">-->\n          <!--<label>Nearby Code</label>-->\n          <!--<input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.near\">-->\n        <!--</div>-->\n      <!--</div>-->\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\" Office\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <button (click)=\"copyOwnr('OFFICE')\" > <i class=\"fa fa-copy\">  Duplicate Address from Current </i> </button>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.add_o\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-2\">\n        <div class=\"form-group\">\n          <label>Address Code</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.zip_o\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.zip_o_desc\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-2 \">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.post_cd_o\">\n        </div>\n      </div>\n      <div class=\"col-md-6 \">\n        <div class=\"form-group\">\n          <label>Nearby Place </label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.near_o\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Tel. </label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.tel_o\">\n        </div>\n      </div>\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Fax No.</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.fax_office\">\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\" Mail\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <button (click)=\"copyOwnr('MAIL')\" > <i class=\"fa fa-copy\">  Duplicate Address from Current </i> </button>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.add_m\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-2\">\n        <div class=\"form-group\">\n          <label>Address Code</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.zip_m\">\n\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.zip_m_desc\">\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caEntityDetail.post_cd_m\">\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\" Tel.\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Tel.1 </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.mobile_phone\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Tel.2</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.mobile_phone2\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Tel.3</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.mobile_phone3\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Email Address </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.email_address\"  >\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-address-th/address-th.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaAddressThComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ca_entity__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CaAddressThComponent = /** @class */ (function () {
    function CaAddressThComponent(creditApplicationService, userStorage) {
        this.creditApplicationService = creditApplicationService;
        this.userStorage = userStorage;
    }
    CaAddressThComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caEntityDetail = new __WEBPACK_IMPORTED_MODULE_1__model_ca_entity__["a" /* caEntity */]();
        this.creditApplicationService.eventCaHead.subscribe(function (obj) {
            _this.caEntityDetail = obj.caentity;
        });
    };
    CaAddressThComponent.prototype.copyOwnr = function (panel) {
        if (panel == 'VAT') {
            this.caEntityDetail.add_c = this.caEntityDetail.address;
            this.caEntityDetail.zip_c = this.caEntityDetail.zip;
            this.caEntityDetail.zip_c_desc = this.caEntityDetail.zip_desc;
            this.caEntityDetail.post_cd_c = this.caEntityDetail.post_cd;
        }
        else if (panel == 'OFFICE') {
            this.caEntityDetail.add_o = this.caEntityDetail.address;
            this.caEntityDetail.zip_o = this.caEntityDetail.zip;
            this.caEntityDetail.zip_o_desc = this.caEntityDetail.zip_desc;
            this.caEntityDetail.post_cd_o = this.caEntityDetail.post_cd;
            this.caEntityDetail.near_o = this.caEntityDetail.near;
            this.caEntityDetail.tel_o = this.caEntityDetail.tel;
            this.caEntityDetail.fax_office = this.caEntityDetail.fax_current;
        }
        else if (panel == 'MAIL') {
            this.caEntityDetail.add_m = this.caEntityDetail.address;
            this.caEntityDetail.zip_m = this.caEntityDetail.zip;
            this.caEntityDetail.zip_m_desc = this.caEntityDetail.zip_desc;
            this.caEntityDetail.post_cd_m = this.caEntityDetail.post_cd;
        }
    };
    CaAddressThComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-address-th',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-address-th/address-th.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__credit_application_service__["a" /* creditApplicationService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], CaAddressThComponent);
    return CaAddressThComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-asia-condition/ca-asia-condition.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Condition & Remark\">\n  <div class=\"main-container\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <div class=\"form-inline\">\n            <label class=\"my-1\"> Condition Template </label>\n          </div>\n          <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                       [responsive]=\"true\">\n            <p-column field=\"f1\" header=\" Condition Detail \"></p-column>\n            <p-footer>\n              <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n              </div>\n            </p-footer>\n          </p-dataTable>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <div class=\"form-inline\">\n            <label class=\"my-1\"> Remark Template </label>\n          </div>\n          <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                       [responsive]=\"true\">\n            <p-column field=\"f1\" header=\" Remark Detail \"></p-column>\n            <p-footer>\n              <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n              </div>\n            </p-footer>\n          </p-dataTable>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"my-3\"> Condition </label>\n          <textarea class=\"form-control\"></textarea>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"my-3\"> Previous Condition </label>\n          <textarea class=\"form-control\"></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-asia-condition/ca-asia-condition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaAsiaConditionComponent; });
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

var CaAsiaConditionComponent = /** @class */ (function () {
    function CaAsiaConditionComponent() {
    }
    CaAsiaConditionComponent.prototype.ngOnInit = function () {
    };
    CaAsiaConditionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-asia-condition',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-asia-condition/ca-asia-condition.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CaAsiaConditionComponent);
    return CaAsiaConditionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-customer-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView>\n  <p-tabPanel header=\"Customer Information\">\n    <app-ca-customer></app-ca-customer>\n  </p-tabPanel>\n  <p-tabPanel header=\"Address(TH)\">\n    <app-ca-address-th></app-ca-address-th>\n\n  </p-tabPanel>\n  <p-tabPanel header=\"Address(EN)\">\n    <app-ca-address-en></app-ca-address-en>\n\n  </p-tabPanel>\n  <!--<p-tabPanel header=\"Card / Bank\">-->\n    <!--<app-ca-card></app-ca-card>-->\n  <!--</p-tabPanel>-->\n  <p-tabPanel header=\"% Of Industry\">\n    <app-ca-percent-ind></app-ca-percent-ind>\n  </p-tabPanel>\n  <p-tabPanel header=\"Machine Location\"  *ngIf=\"sbu_type != 'FDO'\" >\n    <app-ca-machine  *ngIf=\"sbu_type != 'FDO'\" ></app-ca-machine>\n  </p-tabPanel>\n  <p-tabPanel header=\"Exposure\" *ngIf=\"false\" >\n    <app-ca-exposure  *ngIf=\"false\" ></app-ca-exposure>\n  </p-tabPanel>\n  <p-tabPanel header=\"Condition & Remark\">\n    <app-ca-condition-remark>  </app-ca-condition-remark>\n    <app-asia-condition *ngIf=\"false\" ></app-asia-condition   >\n  </p-tabPanel>\n</p-tabView>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-customer-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaCustomerTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaCustomerTabComponent = /** @class */ (function () {
    function CaCustomerTabComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaCustomerTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (caHead) {
            _this.sbu_type = caHead.sbu_typ;
        });
    };
    CaCustomerTabComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
    };
    CaCustomerTabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-customer-tab',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-customer-tab.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaCustomerTabComponent);
    return CaCustomerTabComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Customer Information\">\n  <div class=\"main-container\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3 \">\n        <div class=\"form-group\">\n          <label>Customer Code</label>\n          <span class=\"star\">*</span>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caEntityDetail.ent_code\"  disabled >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6 offset-md-3 \">\n        <div class=\"form-group\">\n          <label> Company </label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caEntityDetail.com_code\" disabled >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3 \">\n        <div class=\"form-group\">\n          <label> Intial </label>\n          <select class=\"form-control\"\n                  [ngModel]=\"caEntityDetail?.f_name_e\"\n                  (ngModelChange)=\"caEntityDetail.f_name_e=$event\">\n            <option></option>\n            <option *ngFor=\"let ansFNME of this.listFNME\"\n                    [selected]=\"ansFNME?.id_code == caEntityDetail?.f_name_e\"\n                    [value]=\"ansFNME?.id_code\">{{ansFNME?.remark}}\n            </option>\n          </select>\n\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3 offset-md-3 \">\n        <div class=\"form-group\">\n          <label> Intial(T) </label>\n          <select class=\"form-control\"\n                  [ngModel]=\"caEntityDetail?.f_name\"\n                  (ngModelChange)=\"caEntityDetail.f_name=$event\">\n            <option></option>\n            <option *ngFor=\"let ansFNMT of this.listFNMT\"\n                    [selected]=\"ansFNMT?.id_code == caEntityDetail?.f_name\"\n                    [value]=\"ansFNMT?.id_code\">{{ansFNMT?.remark}}\n            </option>\n          </select>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label> Branch No. </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.branch_no\" disabled >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label> Name (T)  </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.f_namet\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label>Last Name (T)</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.l_namet\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label> Name (E)</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.f_namee\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label> Last Name (E)</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.l_namee\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-2 \">\n        <div class=\"form-group\">\n          <label>Birth/Register Date</label>\n          <p-calendar  dateFormat=\"dd/mm/yy\" class=\"my-1\" placeholder=\"dd/mm/yyyy\"\n                       [ngModel]=\"caEntityDetail?.birth_d\"\n                       (ngModelChange)=\"caEntityDetail.birth_d= creditApplicationService.Changedate($event)\"></p-calendar>\n\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-2 \">\n        <div class=\"form-group\">\n          <label>  Establishment Date</label>\n            <p-calendar  dateFormat=\"dd/mm/yy\" class=\"my-1\" placeholder=\"dd/mm/yyyy\"\n                         [ngModel]=\"caEntityDetail?.birth_d\"\n                         (ngModelChange)=\"caEntityDetail.birth_d= creditApplicationService.Changedate($event)\"></p-calendar>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6 offset-2 \">\n        <div class=\"form-group\">\n          <label> Card No.  </label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caEntityDetail.card_no\" pKeyFilter=\"int\" >\n\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label> Card Type </label>\n          <select class=\"form-control\"\n                  [ngModel]=\"caEntityDetail?.card_type\"\n                  (ngModelChange)=\"caEntityDetail.card_type=$event\">\n            <option></option>\n            <option *ngFor=\"let ansCARD of listCRD\"\n                    [selected]=\"ansCARD?.id_code == caEntityDetail?.card_type\"\n                    [value]=\"ansCARD?.id_code\">{{ansCARD?.remark}}\n            </option>\n          </select>\n\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label>  Issue At  </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.card_by\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"flex-md-column col-md-6 \">\n        <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                     [responsive]=\"true\">\n          <p-column field=\"f1\" header=\" Nation \"></p-column>\n          <p-column field=\"f2\" header=\" % \"></p-column>\n          <p-footer>\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n            </div>\n          </p-footer>\n        </p-dataTable>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label>  (Authorized Officer)Signed By THAI </label>\n          <input type=\"text\" class=\"form-control\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label> (Authorized officer)Signed By ENG </label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label> (Exposure Group) Group Code </label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label> Business </label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label> Business Detail </label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3 \">\n        <div class=\"form-group\">\n          <label> Register Capital </label>\n          <div class=\"form-inline\">\n            <input currencyMask\n                   class=\"form-control\"\n                   [options]=\"{ prefix: '',suffix: '', thousands: ',', decimal: '.' }\"\n                   [(ngModel)]=\"caEntityDetail.regis_capital_mb\"/>\n            &nbsp;MB\n          </div>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label> Paid Up Capital </label>\n          <div class=\"form-inline\">\n            <input currencyMask\n                   class=\"form-control\"\n                   [options]=\"{ prefix: '',suffix: '', thousands: ',', decimal: '.' }\"\n                   [(ngModel)]=\"caEntityDetail.paid_up_capital_mb\"/>\n            &nbsp;MB\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3 \">\n        <div class=\"form-group\">\n          <label> Sale ended : Year </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.sales_year\" pKeyFilter=\"int\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3 \">\n        <div class=\"form-group\">\n          <label> &nbsp; </label>\n          <div class=\"form-inline\">\n            - &nbsp;&nbsp;\n          <input currencyMask\n                 class=\"form-control\"\n                 [options]=\"{ prefix: '',suffix: '', thousands: ',', decimal: '.' }\"\n                 [(ngModel)]=\"caEntityDetail.sales_amt_mb\"/>\n            &nbsp;MB\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3 \">\n        <div class=\"form-group\">\n          <label> Net Worth ended : Year </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.net_worth_year\" pKeyFilter=\"int\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3 \">\n        <div class=\"form-group\">\n          <label> &nbsp; </label>\n          <div class=\"form-inline\">\n            - &nbsp;&nbsp;\n            <input currencyMask\n                   class=\"form-control\"\n                   [options]=\"{ prefix: '',suffix: '', thousands: ',', decimal: '.' }\"\n                   [(ngModel)]=\"caEntityDetail.net_worth_amt_mb\"/>\n            &nbsp;MB\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label> Contact Person (ENG) </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.contract_e\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label> Contact Person (Th) </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.contract\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label> Tel. </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caEntityDetail.contract_tel\">\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_ca_entity__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-entity.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CaCustomerComponent = /** @class */ (function () {
    function CaCustomerComponent(creditApplicationService, userStorage) {
        this.creditApplicationService = creditApplicationService;
        this.userStorage = userStorage;
        this.caEntityDetail = new __WEBPACK_IMPORTED_MODULE_3__model_ca_entity__["a" /* caEntity */]();
    }
    CaCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (obj) {
            _this.caEntityDetail = obj.caentity;
        });
        this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(function (obj) {
            //console.log('subscribe');
            _this.listFNMT = _this.creditApplicationService.listFNM;
            _this.listFNME = _this.creditApplicationService.listFNME;
            _this.listCRD = _this.creditApplicationService.listCRD;
            _this.listNTY = _this.creditApplicationService.listNTY;
        });
    };
    CaCustomerComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-customer',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-customer/customer.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], CaCustomerComponent);
    return CaCustomerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-exposure-tab/ca-exposure-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView>\n  <p-tabPanel header=\"Total Exposure\">\n    <app-ca-exposure></app-ca-exposure>\n  </p-tabPanel>\n  <p-tabPanel header=\"Agreement\">\n    <app-ca-exposure></app-ca-exposure>\n  </p-tabPanel>\n  <p-tabPanel header=\"Close Account\">\n    <app-ca-exposure></app-ca-exposure>\n  </p-tabPanel>\n</p-tabView>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-exposure-tab/ca-exposure-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaExposureTabComponent; });
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

var CaExposureTabComponent = /** @class */ (function () {
    function CaExposureTabComponent() {
    }
    CaExposureTabComponent.prototype.ngOnInit = function () {
    };
    CaExposureTabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-exposure-tab',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-exposure-tab/ca-exposure-tab.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CaExposureTabComponent);
    return CaExposureTabComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-exposure/exposure.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Total Exposure\">\n  <div class=\"form-group\">\n    <div class=\"form-group\">\n      <p-dataTable selectionMode=\"single\"  rows=\"15\"\n                   [responsive]=\"true\">\n        <p-column field=\"f1\" header=\"Categories\"></p-column>\n        <p-column field=\"f2\" header=\"Finanncing Amount\"></p-column>\n        <p-column field=\"f3\" header=\"Total Exposure\"></p-column>\n        <p-column field=\"f4\" header=\"Highest Amount\"></p-column>\n        <p-column field=\"f5\" header=\"Approve Date\"></p-column>\n        <p-column field=\"f6\" header=\"Net IRR\"></p-column>\n        <p-column field=\"f7\" header=\"D.P\"></p-column>\n        <p-column field=\"f8\" header=\"Paid / Term\"></p-column>\n        <p-column field=\"f9\" header=\"Payment G.\"></p-column>\n        <p-column field=\"f10\" header=\"Installment\"></p-column>\n        <p-footer>\n        </p-footer>\n      </p-dataTable>\n    </div>\n  </div>\n</p-panel>\n\n<br>\n<p-panel header=\"Agreement\">\n  <div class=\"form-group\">\n    <p-dataTable selectionMode=\"single\"  rows=\"15\"\n                 [responsive]=\"true\">\n      <p-column field=\"f1\" header=\"Categories\"></p-column>\n      <p-column field=\"f1\" header=\"Agreement\"></p-column>\n      <p-column field=\"f1\" header=\"Financing Amount\"></p-column>\n      <p-column field=\"f1\" header=\"O/S Balance\"></p-column>\n      <p-column field=\"f1\" header=\"Terms\"></p-column>\n      <p-column field=\"f1\" header=\"Paid\"></p-column>\n      <p-column field=\"f1\" header=\"Installment\"></p-column>\n      <p-column field=\"f1\" header=\"Net IRR\"></p-column>\n      <p-column field=\"f1\" header=\"Down Percent\"></p-column>\n      <p-column field=\"f1\" header=\"Flat Rate\"></p-column>\n      <p-column field=\"f1\" header=\"Ver. Grade\"></p-column>\n      <p-column field=\"f1\" header=\"Status\"></p-column>\n      <p-column field=\"f1\" header=\"RD/RT\"></p-column>\n      <p-column field=\"f1\" header=\"Payment Grade\"></p-column>\n      <p-column field=\"f1\" header=\"Customer Name\"></p-column>\n    </p-dataTable>\n  </div>\n</p-panel>\n<br>\n<p-panel header=\"Close Account  \">\n  <div class=\"form-group\">\n    <p-dataTable selectionMode=\"single\"rows=\"15\"\n                 [responsive]=\"true\">\n      <p-column field=\"f1\" header=\"Categories\"></p-column>\n      <p-column field=\"f1\" header=\"Agreement\"></p-column>\n      <p-column field=\"f1\" header=\"Financing Amount\"></p-column>\n      <p-column field=\"f1\" header=\"O/S Balance\"></p-column>\n      <p-column field=\"f1\" header=\"Terms\"></p-column>\n      <p-column field=\"f1\" header=\"Paid\"></p-column>\n      <p-column field=\"f1\" header=\"Installment\"></p-column>\n      <p-column field=\"f1\" header=\"Net IRR\"></p-column>\n      <p-column field=\"f1\" header=\"Down Percent\"></p-column>\n      <p-column field=\"f1\" header=\"Flat Rate\"></p-column>\n      <p-column field=\"f1\" header=\"Ver. Grade\"></p-column>\n      <p-column field=\"f1\" header=\"Status\"></p-column>\n      <p-column field=\"f1\" header=\"RD/RT\"></p-column>\n      <p-column field=\"f1\" header=\"Payment Grade\"></p-column>\n      <p-column field=\"f1\" header=\"Customer Name\"></p-column>\n    </p-dataTable>\n  </div>\n</p-panel>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-exposure/exposure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaExposureComponent; });
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

var CaExposureComponent = /** @class */ (function () {
    function CaExposureComponent() {
    }
    CaExposureComponent.prototype.ngOnInit = function () {
    };
    CaExposureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-exposure',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-exposure/exposure.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CaExposureComponent);
    return CaExposureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-machine/machine.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-column\">\n  <p-panel header=\" Owner Infomation\">\n    <div class=\"col-md-12\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Owner Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"maChine.owner_name\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"maChine.owner_addr1\" >\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"maChine.owner_addr2\" >\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"maChine.owner_addr3\" >\n        </div>\n      </div>\n\n    </div>\n  </p-panel>\n  <br>\n  <p-panel header=\" Machine Location \">\n    <div class=\"col-md-12\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <button (click)=\"copyOwnr()\" > <i class=\"fa fa-copy\">  Duplicate Address from Current </i> </button>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"maChine.loc_addr1\" >\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"maChine.loc_addr2\" >\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"maChine.loc_addr3\" >\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"maChine.loc_addr4\" >\n        </div>\n      </div>\n    </div>\n  </p-panel>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-machine/machine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaMachineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_assetsite__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-assetsite.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaMachineComponent = /** @class */ (function () {
    function CaMachineComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
        this.maChine = new __WEBPACK_IMPORTED_MODULE_2__model_ca_assetsite__["a" /* caAssersite */]();
    }
    CaMachineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (obj) {
            if ((obj.listassetsite) && (obj.listassetsite.length > 0)) {
                _this.maChine = obj.listassetsite[0];
            }
            else if (obj.listassetsite) {
                _this.maChine.com_code = obj.com_code;
                _this.maChine.ref_code = obj.ca_no;
                _this.maChine.main_entry = 1;
                _this.maChine.order_from = 1;
                _this.maChine.order_to = 1;
                obj.listassetsite[0] = _this.maChine;
            }
        });
    };
    CaMachineComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaMachineComponent.prototype.copyOwnr = function () {
        this.maChine.loc_addr1 = this.maChine.owner_addr1;
        this.maChine.loc_addr2 = this.maChine.owner_addr2;
        this.maChine.loc_addr3 = this.maChine.owner_addr3;
        this.maChine.loc_addr4 = '';
    };
    CaMachineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-machine',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-machine/machine.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaMachineComponent);
    return CaMachineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-percent-ind/percent-ind.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <p-dataTable [value]=\"listIndus\"\n                selectionMode=\"single\" [(selection)]=\"selectIndus\"\n                rows=\"15\"\n               [responsive]=\"true\">\n    <p-header>\n      <app-custom-botton-icon [option]=\"'new'\"    (onBtnClick)=\"pcntAddorEdit('Add')\"  ></app-custom-botton-icon>\n      <app-custom-botton-icon [option]=\"'edit'\"   (onBtnClick)=\"pcntAddorEdit('Edit')\" ></app-custom-botton-icon>\n      <app-custom-botton-icon [option]=\"'delete'\" (onBtnClick)=\"deletePCNT()\"          ></app-custom-botton-icon>\n    </p-header>\n    <p-column field=\"old_ind_desc\" header=\"Old Industry\"></p-column>\n    <p-column field=\"new_ind_desc\" header=\"New Industry\"></p-column>\n    <p-column field=\"ind_pcnt\" header=\"Percent (%)\"></p-column>\n    <p-column field=\"rmrk\" header=\"Remark\"></p-column>\n    <p-footer>\n    </p-footer>\n\n  </p-dataTable>\n</div>\n\n\n<app-action-dialog   #actiondialog\n                     [showCancel]=\"true\"\n                     [showAdd]=\"true\"  (onAdd)=\"OkPcnt()\"  (onOk)=\"OkPcnt()\" >\n  <label *ngIf=\"!selectIndus\"> {{pcntAction}} Industry </label>\n  <div *ngIf=\"selectIndus\">\n    <div class=\"form-group\">\n      <label>New Industry</label>\n      <select #NEWINDUSTRY class=\"form-control\"\n              (change)=\"selectMultiIndustry('New',NEWINDUSTRY.value)\">\n        <option></option>\n        <option *ngFor=\"let ansNEW of listINE\"\n                [selected]=\"ansNEW?.id_code == tempmySelectPCNT?.new_ind_code\"\n                [value]=\"ansNEW.id_code\">{{ansNEW?.remark}}\n        </option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label>Old Industry</label>\n      <select #OLDINDUSTRY class=\"form-control\"\n              (change)=\"selectMultiIndustry('Old',OLDINDUSTRY.value)\">\n        <option></option>\n        <option *ngFor=\"let ansOLD of listIND\"\n                [selected]=\"ansOLD?.id_code == tempmySelectPCNT?.old_ind_code\"\n                [value]=\"ansOLD?.id_code\">{{ansOLD?.remark}}\n        </option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label>Percent(%)</label>\n      <input class=\"form-control\" [(ngModel)]=\"tempmySelectPCNT.ind_pcnt\">\n    </div>\n    <div class=\"form-group\">\n      <label>Remark</label>\n      <input class=\"form-control\" [(ngModel)]=\"tempmySelectPCNT.rmrk\">\n    </div>\n  </div>\n\n</app-action-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-percent-ind/percent-ind.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaPercentIndComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ca_pcnind__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-pcnind.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_ca_listmaster__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca_listmaster.ts");
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





var CaPercentIndComponent = /** @class */ (function () {
    function CaPercentIndComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
        this.tempmySelectPCNT = new __WEBPACK_IMPORTED_MODULE_1__model_ca_pcnind__["a" /* caPcnInd */]();
    }
    CaPercentIndComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectIndus = new __WEBPACK_IMPORTED_MODULE_1__model_ca_pcnind__["a" /* caPcnInd */]();
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (obj) {
            _this.myCaHead = obj;
            _this.listIndus = _this.myCaHead.listpcnind;
            if (_this.listIndus) {
                var _loop_1 = function (i) {
                    var ChooseNew = _this.listINE.find(function (ObjTemp) { return ObjTemp.id_code == _this.listIndus[i].new_ind_code; });
                    if (ChooseNew) {
                        _this.listIndus[i].new_ind_desc = ChooseNew.remark;
                    }
                    var ChooseOld = _this.listIND.find(function (ObjTemp) { return ObjTemp.id_code == _this.listIndus[i].old_ind_code; });
                    if (ChooseOld) {
                        _this.listIndus[i].old_ind_desc = ChooseOld.remark;
                    }
                };
                for (var i = 0; i < _this.listIndus.length; i++) {
                    _loop_1(i);
                }
            }
        });
        this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(function (obj) {
            _this.listINE = _this.creditApplicationService.listINE;
            _this.listIND = _this.creditApplicationService.listIND;
        });
    };
    CaPercentIndComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaPercentIndComponent.prototype.pcntAddorEdit = function (action) {
        this.pcntAction = action;
        this.selectPCNT = true;
        this.tempmySelectPCNT = new __WEBPACK_IMPORTED_MODULE_1__model_ca_pcnind__["a" /* caPcnInd */]();
        if (action == 'Add') {
            this.tempmySelectPCNT.com_code = this.myCaHead.com_code;
            this.tempmySelectPCNT.sub_id = this.myCaHead.listpcnind.length + 1;
            this.tempmySelectPCNT.ent_code = this.myCaHead.cus_code;
            this.labelOkPcnt = 'Add';
            this.actiondialog.setTitle('Add');
            this.actiondialog.open();
        }
        else if (action == 'Edit') {
            if (this.selectIndus) {
                this.tempmySelectPCNT.new_ind_code = this.selectIndus.new_ind_code;
                this.tempmySelectPCNT.old_ind_code = this.selectIndus.old_ind_code;
                this.tempmySelectPCNT.ind_pcnt = this.selectIndus.ind_pcnt;
                this.tempmySelectPCNT.rmrk = this.selectIndus.rmrk;
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
    CaPercentIndComponent.prototype.selectMultiIndustry = function (type, value) {
        var Choose = new __WEBPACK_IMPORTED_MODULE_3__model_ca_listmaster__["a" /* caListMaster */]();
        if (type == 'New') {
            Choose = this.listINE.find(function (ObjTemp) { return ObjTemp.id_code == value; });
            this.tempmySelectPCNT.new_ind_code = Choose.id_code;
            this.tempmySelectPCNT.new_ind_desc = Choose.remark;
        }
        else if (type == 'Old') {
            Choose = this.listIND.find(function (ObjTemp) { return ObjTemp.id_code == value; });
            this.tempmySelectPCNT.old_ind_code = Choose.id_code;
            this.tempmySelectPCNT.old_ind_desc = Choose.remark;
        }
    };
    CaPercentIndComponent.prototype.deletePCNT = function () {
        var delRow = this.listIndus.indexOf(this.selectIndus);
        this.listIndus.splice(delRow, 1);
        ////  Change  order
        for (var i = 1; i <= this.listIndus.length; i++) {
            this.listIndus[i - 1].sub_id = i;
        }
        ;
        this.listIndus = this.listIndus.slice();
        this.creditApplicationService.caHead.listpcnind = this.listIndus;
    };
    CaPercentIndComponent.prototype.OkPcnt = function () {
        if (this.pcntAction == 'Add') {
            this.listIndus = this.listIndus.concat([this.tempmySelectPCNT]);
        }
        else if (this.pcntAction == 'Edit') {
            this.selectIndus.new_ind_code = this.tempmySelectPCNT.new_ind_code;
            this.selectIndus.new_ind_desc = this.tempmySelectPCNT.new_ind_desc;
            this.selectIndus.old_ind_code = this.tempmySelectPCNT.old_ind_code;
            this.selectIndus.old_ind_desc = this.tempmySelectPCNT.old_ind_desc;
            this.selectIndus.ind_pcnt = this.tempmySelectPCNT.ind_pcnt;
            this.selectIndus.rmrk = this.tempmySelectPCNT.rmrk;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('actiondialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], CaPercentIndComponent.prototype, "actiondialog", void 0);
    CaPercentIndComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-percent-ind',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-percent-ind/percent-ind.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__credit_application_service__["a" /* creditApplicationService */]])
    ], CaPercentIndComponent);
    return CaPercentIndComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-directloans/ca-directloans.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset [disabled]=\"disabledForm == 'N'\">\n<div class=\"form-group border-isa container-fluid\">\n  <div class=\"row p-1\">\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>Requested Credit Line :</label>\n        <span class=\"star\">*</span>\n        <input appMyCurrency\n               class=\"form-control\"\n               [value]=\"selectbgdetail.fin_amt_e_vat\" (change)=\"selectbgdetail.fin_amt_e_vat = $event.target.value\"\n               />\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <label>Disburse Date</label><br>\n      <p-calendar [ngModel]=\"selectbgdetail.disburse_dt\"\n                  (ngModelChange)=\"disburseChange($event); selectbgdetail.first= firstChange($event);\"\n                  dateFormat=\"dd/mm/yy\"></p-calendar>\n    </div>\n    <div class=\"col-md-3\">\n      <label>First Due</label><br>\n      <p-calendar [ngModel]=\"selectbgdetail.first\"\n                  dateFormat=\"dd/mm/yy\"></p-calendar>\n    </div>\n\n  </div>\n  <div class=\"flex-row form-inline border-isa col-md-6\">\n    <div class=\"col-md-9\">\n      <select class=\"form-control\"\n              [(ngModel)] = \"selectbgdetail.selectForCall\">\n        <option [value]=\"6\">1.Calculate Installment: Know Interest,Fin,Term</option>\n        <option [value]=\"7\">2.Calculate Interest: Know Installment,Fin,Term</option>\n      </select>\n    </div>\n    <div class=\"col-md-3\">\n      <button type=\"button\" pButton style=\"float:left\"\n              (click)=\"calculateLoanClick()\"\n              label=\"Calculate\"></button>\n    </div>\n  </div>\n  <div class=\"border-isa mt-1 form-group col-md-12 p-2\">\n    <label><b>Interest Charge </b></label><br>\n    <div class=\"form-inline col-md-6\">\n      <label>Interest Rate : </label>\n      <input appMyCurrency\n             class=\"form-control\" [fraction]=\"8\"\n             [value]=\"selectbgdetail.flat_rate\" (change)=\"selectbgdetail.flat_rate = $event.target.value\"\n             />\n      <label>&nbsp;% (Gross IRR)</label>\n    </div>\n    <div class=\"form-inline mt-1 col-md-6\">\n      <label>Penalty Rate : </label>\n      <input appMyCurrency\n             readonly\n             class=\"form-control\"  [fraction]=\"8\"\n             [value]=\"selectbgdetail.pen_rate\" (change)=\"selectbgdetail.pen_rate = $event.target.value\"\n             />\n      <label>&nbsp;%</label>\n    </div>\n  </div>\n  <div class=\"border-isa\">\n    <div class=\"d-flex \">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Grace Period</label>\n          <div class=\"form-inline\">\n            <input appMyCurrency\n                   class=\"form-control\"\n                   [value]=\"selectbgdetail.great_period\" (change)=\"selectbgdetail.great_period = $event.target.value\"\n                   />\n            &nbsp; Day\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Front-end Fee</label>\n          <div class=\"form-inline\">\n            <input appMyCurrency\n                   class=\"form-control\"\n                   [value]=\"selectbgdetail.es_revenue\" (change)=\"selectbgdetail.es_revenue = $event.target.value\"\n                   />\n            &nbsp; Baht.\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Tenor</label>\n          <span class=\"star\">*</span>\n          <div class=\"form-inline\">\n            <input appMyCurrency\n                   class=\"form-control\"\n                   [fraction]=\"0\"\n                   [value]=\"selectbgdetail.terms\" (change)=\"selectbgdetail.terms = $event.target.value\"\n                   />\n            &nbsp; Month\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-12\">\n        <label>Net IRR</label>\n        <span class=\"star\">*</span>\n        <div class=\"form-group form-inline\">\n          <input class=\"form-control\" appMyCurrency\n                 [fraction]=\"5\"\n                 [value]=\"selectbgdetail.net_irr\"\n                 (change)=\"selectbgdetail.net_irr = $event.target.value\"\n                 >\n          <label class=\"pl-1 pr-1\">&nbsp; Inc. front end fee</label>\n          <div class=\"form-inline\">\n            <input class=\"form-control\"\n                   appMyCurrency\n                   [fraction]=\"5\"\n                   [value]=\"selectbgdetail.net_irr_inc_deposit\"\n                   (change)=\"selectbgdetail.net_irr_inc_deposit = $event.target.value\"\n                   readonly\n                   >\n            <label style=\"padding-left: 10px\">Inc. (front end fee+deposit)</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"border-isa mt-1\">\n    <div class=\"form-inline form-group\">\n      <label class=\"mt-radio\" style=\"padding: 5px\">\n        <input type=\"radio\" name=\"schedule_loan\" value=\"R\"\n               [(ngModel)]=\"selectbgdetail.schedule\"\n               (ngModelChange)=\"scheduleChange()\"> Straight\n        <input type=\"radio\" name=\"schedule_loan\" value=\"I\"\n               [(ngModel)]=\"selectbgdetail.schedule\"\n               (ngModelChange)=\"scheduleChange()\">Step\n      </label>\n      <label style=\"padding-left: 20px;padding-right: 10px\">Installment</label>\n      <input currencyMask\n             #insEVatLoan\n             [disabled]=\"selectbgdetail.schedule == 'I'\"\n             class=\"form-control\"\n             [(ngModel)]=\"selectbgdetail.installment_e_vat\"\n             [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n      <label style=\"padding-left: 10px;padding-right: 10px\">Advance / Rear </label>\n      <input type=\"text\" class=\"form-control\" style=\"width: 35%;\"\n             [ngModel]=\"adv_arr_name\" disabled><br>\n    </div>\n\n    <p-dataTable [value]=\"selectbgdetail.listcastep\" selectionMode=\"single\" [(selection)]=\"selectedStep\"\n                 rows=\"15\" [responsive]=\"true\"\n                 (onRowSelect)=\"onRowSelect($event)\"\n                 *ngIf=\"selectbgdetail.schedule == 'I'\">\n      <p-header>\n        <app-custom-botton-icon [option]=\"'new'\"\n                                (onBtnClick)=\"addEditStep('add')\"></app-custom-botton-icon>\n        <app-custom-botton-icon [option]=\"'edit'\"\n                                (onBtnClick)=\"addEditStep('edit')\"></app-custom-botton-icon>\n        <app-custom-botton-icon [option]=\"'delete'\"\n                                (onBtnClick)=\"delete()\"></app-custom-botton-icon>\n      </p-header>\n      <p-headerColumnGroup>\n        <p-row>\n          <p-column header=\"From Term\" rowspan=\"2\"></p-column>\n          <p-column header=\"To Term\" rowspan=\"2\"></p-column>\n          <p-column header=\"Installment\" rowspan=\"2\"></p-column>\n        </p-row>\n      </p-headerColumnGroup>\n      <p-column field=\"from_term\" [style]=\"{'text-align':'right'}\">\n        <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n          <span>{{ row[col.field] |  number:'.'  }}</span>\n        </ng-template>\n      </p-column>\n      <p-column field=\"to_term\" [style]=\"{'text-align':'right'}\">\n        <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n          <span>{{ row[col.field] |  number:'.'  }}</span>\n        </ng-template>\n      </p-column>\n      <p-column field=\"inst_e_vat\" [style]=\"{'text-align':'right'}\">\n        <ng-template let-col let-row=\"rowData\" pTemplate=\"body\">\n          <span>{{ row[col.field] |  number:'.2-2'  }}</span>\n        </ng-template>\n      </p-column>\n    </p-dataTable>\n  </div>\n</div>\n</fieldset>\n\n<app-action-dialog #actionDialog\n                   [showCancel]=\"true\"\n                   [showAdd]=\"true\"\n                   (onAdd)=\"addClick()\">\n  <div class=\"form-group\">\n    <label>From Term</label>\n    <input class=\"form-control\" [(ngModel)]=\"step.from_term\">\n  </div>\n  <div class=\"form-group\">\n    <label>To Term</label>\n    <input class=\"form-control\" [(ngModel)]=\"step.to_term\">\n  </div>\n  <div class=\"form-group\">\n    <label>Installment</label>\n    <input class=\"form-control\" appMyCurrency\n                [value]=\"step.inst_e_vat\" (change)=\"step.inst_e_vat = $event.target.value\">\n  </div>\n</app-action-dialog>\n\n\n<app-action-lock-screen *ngIf=\"checkLoader\"\n                        [spinner]=\"true\"\n                        [showCancel]=\"true\"\n                        (onCancel)=\"checkLoader = false\"\n                        #lockScreen></app-action-lock-screen>\n\n<app-alert-dialog [mode_single]=\"0\"\n                  #calIrrLoanWarning></app-alert-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-directloans/ca-directloans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaDirectloansComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ca_bgdetail__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-bgdetail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_center_utils_date_utils__ = __webpack_require__("../../../../../src/app/shared/center/utils/date-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/action-dialog/action-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_ca_step__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-step.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CaDirectloansComponent = /** @class */ (function () {
    function CaDirectloansComponent(creditApplicationService, userStorage, dateUtils) {
        this.creditApplicationService = creditApplicationService;
        this.userStorage = userStorage;
        this.dateUtils = dateUtils;
        this.selectbgdetail = new __WEBPACK_IMPORTED_MODULE_1__model_ca_bgdetail__["a" /* caBgDetail */]();
        this.step = new __WEBPACK_IMPORTED_MODULE_6__model_ca_step__["a" /* caStep */]();
        this.selectedStep = new __WEBPACK_IMPORTED_MODULE_6__model_ca_step__["a" /* caStep */]();
        this.checkLoader = false;
        this.disabledForm = 'N';
        this.strgrossIrr = 'Gross Irr';
        this.vatRate = Number(this.userStorage.getVatRate());
    }
    CaDirectloansComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (caHead) {
            if (caHead.sbu_typ == 'P') {
                _this.listbgdetail = caHead.listbgdetail;
                if ((_this.listbgdetail) && (_this.listbgdetail.length > 0)) {
                    _this.selectbgdetail = _this.listbgdetail[0];
                    if (caHead.sbu_typ == 'P') {
                        _this.selectbgdetail.selectForCall = 6;
                    }
                    _this.disburseChange(_this.selectbgdetail.disburse_dt);
                    _this.disabledForm = 'Y';
                }
            }
        });
    };
    CaDirectloansComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaDirectloansComponent.prototype.scheduleChange = function () {
        if (this.selectbgdetail.schedule === 'I') {
            this.selectbgdetail.installment_e_vat = '';
            this.insEVatLoan.nativeElement.disabled = true;
        }
        else {
            this.selectbgdetail.listcastep = [];
            this.insEVatLoan.nativeElement.disabled = false;
        }
    };
    CaDirectloansComponent.prototype.firstChange = function (event) {
        return this.dateUtils.dateToString(this.dateUtils.addMonth(event, 1), 'dd/MM/yyyy');
    };
    CaDirectloansComponent.prototype.disburseChange = function (disburse) {
        if (disburse.constructor.name != 'String') {
            this.selectbgdetail.disburse_dt = this.dateUtils.dateToString(disburse, 'dd/MM/yyyy');
        }
        if (this.selectbgdetail.disburse_dt === this.selectbgdetail.first) {
            this.selectbgdetail.adv_arr = 'V';
            this.adv_arr_name = 'Paid In Advance';
        }
        else {
            this.selectbgdetail.adv_arr = 'A';
            this.adv_arr_name = 'Paid In Rear';
        }
    };
    CaDirectloansComponent.prototype.calculateLoanClick = function () {
        var _this = this;
        var calCheck = true;
        this.calIrrLoanWarning.list_msg = [];
        this.calIrrLoanWarning.title = 'Calculate Irr Warning';
        if (this.selectbgdetail.selectForCall == 6) {
            if (!this.selectbgdetail.fin_amt_e_vat) {
                this.calIrrLoanWarning.addMessage('- Request Credit Line');
            }
            if (!this.selectbgdetail.flat_rate) {
                this.calIrrLoanWarning.addMessage('- Interest Rate');
            }
            if (!this.selectbgdetail.terms) {
                this.calIrrLoanWarning.addMessage('- Terms');
            }
            if (!this.selectbgdetail.disburse_dt) {
                this.calIrrLoanWarning.addMessage('- Disburse Date');
            }
            if (!this.selectbgdetail.first) {
                this.calIrrLoanWarning.addMessage('- First Due');
            }
            if (this.selectbgdetail.schedule == 'I') {
                this.calIrrLoanWarning.addMessage('- Installment Step Not Cal');
            }
        }
        else if (this.selectbgdetail.selectForCall == 7) {
            if (!this.selectbgdetail.fin_amt_e_vat) {
                this.calIrrLoanWarning.addMessage('- Request Credit Line');
            }
            if (!this.selectbgdetail.terms) {
                this.calIrrLoanWarning.addMessage('- Terms');
            }
            if (!this.selectbgdetail.disburse_dt) {
                this.calIrrLoanWarning.addMessage('- Disburse Date');
            }
            if (!this.selectbgdetail.first) {
                this.calIrrLoanWarning.addMessage('- First Due');
            }
            if (this.selectbgdetail.schedule == 'R' && !this.selectbgdetail.installment_e_vat) {
                this.calIrrLoanWarning.addMessage('- Installment');
            }
        }
        if (this.calIrrLoanWarning.list_msg.length > 0) {
            calCheck = false;
            this.calIrrLoanWarning.open();
        }
        if (calCheck) {
            this.checkLoader = true;
            this.creditApplicationService.calculateIrr(this.selectbgdetail.sub_id, this.selectbgdetail.selectForCall).subscribe(function (data) {
                if (data.CODE == '200') {
                    _this.selectbgdetail.fin_amt_e_vat = data.LIST_DATA[0].finExcVat;
                    _this.selectbgdetail.fin_amt_vat = data.LIST_DATA[0].finVat;
                    _this.selectbgdetail.fin_amt_i_vat = data.LIST_DATA[0].finIncVat;
                    _this.selectbgdetail.installment_e_vat = data.LIST_DATA[0].installmentExcVat;
                    _this.selectbgdetail.installment_vat = data.LIST_DATA[0].installmentVat;
                    _this.selectbgdetail.installment_i_vat = data.LIST_DATA[0].installmentIncVat;
                    _this.selectbgdetail.flat_rate = data.LIST_DATA[0].flatRate;
                    _this.selectbgdetail.gross_irr = data.LIST_DATA[0].grossIrr;
                    _this.selectbgdetail.net_irr = data.LIST_DATA[0].netIrr;
                    _this.selectbgdetail.net_irr_inc_deposit = data.LIST_DATA[0].netIrrIncDeposit;
                    _this.checkLoader = false;
                }
            });
        }
    };
    CaDirectloansComponent.prototype.calInstallment = function () {
        var _this = this;
        this.alertDialog.reset();
        this.alertDialog.setModeSingle(0);
        this.alertDialog.setTitle('Calculate Installment');
        if (this.selectbgdetail.fin_amt_e_vat <= 0 || !this.selectbgdetail.fin_amt_e_vat) {
            this.alertDialog.list_msg.push('Request Credit Line must be greater than 0');
        }
        if (this.selectbgdetail.flat_rate <= 0 || !this.selectbgdetail.flat_rate) {
            this.alertDialog.list_msg.push('Interest Rate must be greater than 0');
        }
        if (this.selectbgdetail.terms <= 0 || !this.selectbgdetail.terms) {
            this.alertDialog.list_msg.push('Terms must be greater than 0');
        }
        if (!this.selectbgdetail.disburse_dt) {
            this.alertDialog.list_msg.push('กรุณาระบุวันที่ Disburse Date');
        }
        if (this.selectbgdetail.schedule === 'I') {
            this.alertDialog.list_msg.push('ค่างวดแบบ Step ไม่สามารถระบุโดยระบบได้!');
        }
        if (this.alertDialog.list_msg.length > 0) {
            this.alertDialog.open();
        }
        else {
            this.creditApplicationService.calInstallment(this.selectbgdetail.fin_amt_e_vat, this.selectbgdetail.terms, this.selectbgdetail.flat_rate).subscribe(function (data) {
                _this.selectbgdetail.installment_e_vat = data.MSG;
            });
        }
    };
    CaDirectloansComponent.prototype.addEditStep = function (action) {
        if (action == 'add') {
            if (this.selectbgdetail.disburse_dt) {
                this.newStep = true;
                this.step = new __WEBPACK_IMPORTED_MODULE_6__model_ca_step__["a" /* caStep */]();
                this.step.ca_no = this.selectbgdetail.ca_no;
                this.step.sub_id = this.selectbgdetail.sub_id;
                this.step.sub_id2 = String(this.selectbgdetail.listcastep.length + 1);
                this.step.due_day = this.selectbgdetail.first.substr(0, 2);
                this.step.inst_vat = String(0);
                this.step.interval = String(1);
                this.actionDialog.setTitle('Add');
                this.actionDialog.open();
            }
            else {
                alert('-disburse');
            }
        }
        else if (action == 'edit') {
            this.newStep = false;
            this.actionDialog.setTitle('Edit');
            this.actionDialog.open();
        }
    };
    CaDirectloansComponent.prototype.addClick = function () {
        if (this.step.inst_e_vat) {
            this.step.inst_vat = String((Number(this.step.inst_e_vat) * this.vatRate / 100).toFixed(2));
        }
        var a = this.selectbgdetail.listcastep.slice();
        if (this.newStep) {
            a.push(this.step);
        }
        else {
            a[this.findSelectedIndex()] = this.step;
        }
        this.selectbgdetail.listcastep = a;
    };
    CaDirectloansComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.selectbgdetail.listcastep = this.selectbgdetail.listcastep.filter(function (val, i) { return i != index; });
        for (var i = 0; i < this.selectbgdetail.listcastep.length; i++) {
            this.selectbgdetail.listcastep[i].sub_id2 = i + 1;
        }
    };
    CaDirectloansComponent.prototype.findSelectedIndex = function () {
        return this.selectbgdetail.listcastep.indexOf(this.selectedStep);
    };
    CaDirectloansComponent.prototype.onRowSelect = function (event) {
        this.step = this.cloneData(event.data);
    };
    CaDirectloansComponent.prototype.cloneData = function (list) {
        var step = new __WEBPACK_IMPORTED_MODULE_6__model_ca_step__["a" /* caStep */]();
        for (var i in list) {
            step[i] = list[i];
        }
        return step;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('calIrrLoanWarning'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], CaDirectloansComponent.prototype, "calIrrLoanWarning", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alertDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], CaDirectloansComponent.prototype, "alertDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('insEVatLoan'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaDirectloansComponent.prototype, "insEVatLoan", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('actionDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], CaDirectloansComponent.prototype, "actionDialog", void 0);
    CaDirectloansComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-directloans',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-directloans/ca-directloans.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__credit_application_service__["a" /* creditApplicationService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_user_user_storage_service__["a" /* UserStorage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_center_utils_date_utils__["a" /* DateUtils */]])
    ], CaDirectloansComponent);
    return CaDirectloansComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-duty-stamp/ca-duty-stamp.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Collection Duty Stamp(รับอากรแสตมป์)\">\n  <div class=\"d-flex col-md-12\">\n    <div class=\"form-group col-md-3\">\n      <label>Date </label><br>\n      <p-calendar  dateFormat=\"dd/mm/yy\" class=\"my-1\" placeholder=\"dd/mm/yyyy\"></p-calendar>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label>จำนวนเงิน</label>\n      <div class=\"form-inline\">\n        <input class=\"form-control\">\n        Baht.\n      </div>\n    </div>\n  </div>\n</p-panel>\n<div class=\"form-group\">\n  <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n               [responsive]=\"true\">\n    <p-column field=\"f1\" header=\"COM_CODE\"></p-column>\n    <p-column field=\"f2\" header=\"CA_NO\"></p-column>\n    <p-column field=\"f3\" header=\"DRAWDOWN_NO\"></p-column>\n    <p-column field=\"f4\" header=\"TRN_DATE\"></p-column>\n    <p-column field=\"f5\" header=\"DUTY_AMT\"></p-column>\n    <p-footer>\n      <!--<div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\n                label=\"Add\"></button>\n      </div>-->\n    </p-footer>\n  </p-dataTable>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-duty-stamp/ca-duty-stamp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaDutyStampComponent; });
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

var CaDutyStampComponent = /** @class */ (function () {
    function CaDutyStampComponent() {
    }
    CaDutyStampComponent.prototype.ngOnInit = function () {
    };
    CaDutyStampComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-duty-stamp',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-duty-stamp/ca-duty-stamp.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CaDutyStampComponent);
    return CaDutyStampComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-buyer/buyer.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"d-flex\">\n  <div class=\"col-md-3 pl-0\">\n      <div class=\"form-group\">\n          <p-dataTable [value]=\"listBuyer\"\n                       selectionMode=\"single\"\n                       [(selection)]=\"selectBuyer\"\n                       (onRowSelect)=\"onRowSelect(selectBuyer)\"\n                       [scrollable]=\"true\"\n                       scrollHeight=\"300px\"\n                       [responsive]=\"true\">\n            <p-header>\n              <app-custom-botton-icon [option]=\"'new'\" (onBtnClick)=\"openEntity()\" ></app-custom-botton-icon>\n              <app-custom-botton-icon [option]=\"'delete'\" (onBtnClick)=\"deleteWarning()\" ></app-custom-botton-icon>\n            </p-header>\n            <p-column field=\"seq_no\" header=\"No.\" [style]=\"{'width':'75px'}\"></p-column>\n            <p-column field=\"buyer_name\" header=\"Buyer Name\"></p-column>\n            <p-footer>\n            </p-footer>\n\n          </p-dataTable>\n        </div>\n      </div>\n  <div class=\"col-md-9 border-isa\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <label style=\"padding:5px;\"><b>Buyer Code :</b></label>\n      </div>\n      <div class=\"col-md-3\">\n        <input type=\"text\" class=\"form-control input-small\"  [value]=\"selectBuyer.buyer_code\"  readonly>\n      </div>\n      <div class=\"col-md-6\">\n        <input type=\"text\" class=\"form-control input-small\" [value]=\"selectBuyer.buyer_name\" readonly>\n      </div>\n    </div>\n    <br>\n    <p-tabView>\n      <p-tabPanel header=\"Buyer Detail\">\n        <app-ca-buyer-detail></app-ca-buyer-detail>\n      </p-tabPanel>\n      <p-tabPanel header=\"Factored Documents\">\n        <app-ca-buyer-doc></app-ca-buyer-doc>\n      </p-tabPanel>\n    </p-tabView>\n\n  </div>\n</div>\n\n<app-entity-dialog #entity_dialog title=\"Buyer\"\n                   (onEntitySelect)=\"getEntity($event)\"></app-entity-dialog>\n\n<app-alert-dialog #deleteDialog (onOK)=\"deleteBuyer()\" >\n\n</app-alert-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-buyer/buyer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaBuyerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_center_utils_date_utils__ = __webpack_require__("../../../../../src/app/shared/center/utils/date-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_ca_buyer__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-buyer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entity_entity_dialog_entity_dialog_component__ = __webpack_require__("../../../../../src/app/main/mst/entity/entity-dialog/entity-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CaBuyerComponent = /** @class */ (function () {
    function CaBuyerComponent(creditApplicationService, dateUtils, userStorage) {
        this.creditApplicationService = creditApplicationService;
        this.dateUtils = dateUtils;
        this.userStorage = userStorage;
        this.selectBuyer = new __WEBPACK_IMPORTED_MODULE_4__model_ca_buyer__["a" /* caBuyer */]();
    }
    CaBuyerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectBuyer = new __WEBPACK_IMPORTED_MODULE_4__model_ca_buyer__["a" /* caBuyer */]();
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (value) {
            _this.listBuyer = value.listcabuyer;
            if ((_this.listBuyer) && (_this.listBuyer.length > 1)) {
                _this.onRowSelect(_this.listBuyer[0]);
                if (_this.selectBuyer.listcabuyerdoc) {
                    _this.setMasterBuyerDoc(_this.selectBuyer.listcabuyerdoc);
                }
            }
        });
        this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(function (obj) {
        });
    };
    CaBuyerComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaBuyerComponent.prototype.setMasterBuyerDoc = function (value) {
        if (value) {
            this.masterBuyerDoc = [];
            for (var i = 0; i < value.length; i++) {
                this.masterBuyerDoc.push(value[i]);
                this.masterBuyerDoc[i].factored_ifany = 'N';
                this.masterBuyerDoc[i].select_o = 'N';
                this.masterBuyerDoc[i].select_p = 'N';
                this.masterBuyerDoc[i].select_c = 'N';
                this.masterBuyerDoc[i].remark = '';
            }
            //console.log(this.masterBuyerDoc);
        }
    };
    CaBuyerComponent.prototype.onRowSelect = function (value) {
        this.selectBuyer = value;
        this.creditApplicationService.setSelectBuyer(value);
    };
    CaBuyerComponent.prototype.openEntity = function () {
        this.entity_dialog.title = 'Buyer';
        this.entity_dialog.showDialog();
    };
    CaBuyerComponent.prototype.getEntity = function (entityModel) {
        var newBuyer = new __WEBPACK_IMPORTED_MODULE_4__model_ca_buyer__["a" /* caBuyer */]();
        newBuyer.com_code = entityModel.comCode;
        newBuyer.ca_no = this.creditApplicationService.caHead.ca_no;
        newBuyer.seq_no = this.listBuyer.length + 1;
        newBuyer.ver_waive = 'N';
        newBuyer.app_type = '2';
        newBuyer.app_type_desc = 'WITH RECOURSE';
        this.creditApplicationService.checkFactoring(entityModel.entCode, entityModel.newCardNo).subscribe(function (data) {
            if (data.CODE === "200" && data.LIST_DATA.length > 0) {
                newBuyer.buyer_code = data.LIST_DATA[0].entCode;
            }
            else {
                newBuyer.buyer_code = entityModel.entCode;
            }
        });
        newBuyer.buyer_name = entityModel.fNameE + " " + entityModel.lNameE;
        newBuyer.listcabuyerdoc = this.masterBuyerDoc.slice();
        this.listBuyer.push(newBuyer);
        this.onRowSelect(newBuyer);
    };
    CaBuyerComponent.prototype.deleteWarning = function () {
        this.deleteDialog.setAction('DELETE');
        this.deleteDialog.open();
    };
    CaBuyerComponent.prototype.deleteBuyer = function () {
        var index = this.selectBuyer.seq_no - 1;
        this.listBuyer.splice(index, 1);
        var seqNo = 1;
        for (var _i = 0, _a = this.listBuyer; _i < _a.length; _i++) {
            var data = _a[_i];
            data.seq_no = seqNo;
            seqNo++;
        }
        this.listBuyer = this.listBuyer.slice();
        this.creditApplicationService.caHead.listcabuyer = this.listBuyer;
        if (this.listBuyer.length > 0) {
            this.onRowSelect(this.listBuyer[0]);
        }
        else {
            this.selectBuyer = new __WEBPACK_IMPORTED_MODULE_4__model_ca_buyer__["a" /* caBuyer */]();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("entity_dialog"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__entity_entity_dialog_entity_dialog_component__["a" /* EntityDialogComponent */])
    ], CaBuyerComponent.prototype, "entity_dialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deleteDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], CaBuyerComponent.prototype, "deleteDialog", void 0);
    CaBuyerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-buyer',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-buyer/buyer.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_center_utils_date_utils__["a" /* DateUtils */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], CaBuyerComponent);
    return CaBuyerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-buyer/ca-buyer-detail/ca-buyer-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"border-isa p-2\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <label>Application Type</label>\n      <span class=\"star\">*</span>\n      <div class=\"form-group\">\n        <select class=\"form-control\"\n                [(ngModel)]=\"selectBuyer.app_type\">\n          <option *ngFor=\"let list of listAPT; let i = index\"\n                  [value]=\"i+1\"\n                  [selected]=\"selectBuyer.app_type === list.id_code\">{{list?.remark}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <label>Advance Ratio</label>\n      <span class=\"star\">*</span>\n      <div class=\"form-group\">\n        <input currencyMask\n               class=\"form-control\"\n               [(ngModel)]=\"selectBuyer.advance_ratio\"\n               [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <label>Effective Rate(%)</label>\n      <div class=\"form-group\">\n        <input currencyMask\n               disabled\n               class=\"form-control\"\n               [(ngModel)]=\"selectBuyer.eff_rate\"\n               [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <label>Sub-Line Limit</label>\n      <span class=\"star\">*</span>\n      <div class=\"form-group\">\n        <input currencyMask\n               class=\"form-control\"\n               [(ngModel)]=\"selectBuyer.sub_line_amt\"\n               [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <label>Payment Term</label>\n      <span class=\"star\">*</span>\n      <div class=\"form-group\">\n        <input currencyMask\n               class=\"form-control\"\n               [(ngModel)]=\"selectBuyer.terms\"\n               [options]=\"{ prefix: '', thousands: ',', precision  : '0' }\"/>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <label>Join Buyer Group</label>\n      <div class=\"form-group\">\n        <select class=\"form-control\"\n                (change)=\"onBuyerGroupChange($event.target.value)\">\n          <option [value]=\"-1\"></option>\n          <option *ngFor=\"let list of listsJointB; let i = index\"\n                  [selected]=\"selectBuyer.joint_buyer_group === list.id_code\"\n                  [value]=\"i\"\n          >{{list.id_code}} : {{list.remark}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <label>Join Buyer CR. Amount </label>\n      <div class=\"form-group\">\n        <input currencyMask\n               disabled\n               class=\"form-control\"\n               [(ngModel)]=\"selectBuyer.cr_limit\"\n               [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <input type=\"checkbox\"\n             name=\"noti_type\"\n             [checked]=\"data?.noti_type==='Y'\"\n             (change)=\"$event.target.checked ? (selectBuyer.noti_type = 'Y') : (selectBuyer.noti_type = 'N')\"> Notification\n      <div class=\"mt-radio-inline border-isa\">\n        <label><b>Advance Condition Code</b></label>\n        <div class=\"form-group\">\n          <div class=\"mt-radio-inline\" style=\"padding: 5px\">\n            <input type=\"radio\"\n                   name=\"advance_code\"\n                   value=\"01\"\n                   [(ngModel)]=\"selectBuyer.advance_code\"> 01 : Pre-Delivery<br>\n            <input type=\"radio\"\n                   name=\"advance_code\"\n                   value=\"02\"\n                   [(ngModel)]=\"selectBuyer.advance_code\"> 02 : After Delivery<br>\n            <input type=\"radio\"\n                   name=\"advance_code\"\n                   value=\"03\"\n                   [(ngModel)]=\"selectBuyer.advance_code\"> 03 : After Billing<br>\n            <input type=\"radio\"\n                   name=\"advance_code\"\n                   value=\"04\"\n                   [(ngModel)]=\"selectBuyer.advance_code\"> 04 : No Billing Process<br>\n            <input type=\"radio\"\n                   name=\"advance_code\"\n                   value=\"05\"\n                   [(ngModel)]=\"selectBuyer.advance_code\"> 05 : Other<br>\n            <input type=\"radio\"\n                   name=\"advance_code\"\n                   value=\"06\"\n                   [(ngModel)]=\"selectBuyer.advance_code\"> 06 : After Shipment\n          </div>\n        </div>\n      </div>\n      <br>\n      <div class=\"form-group\">\n        <div class=\"mt-radio-inline border-isa\">\n          <label><b>Payment Type</b></label>\n          <div class=\"form-group\" style=\"padding: 5px\">\n            <input type=\"checkbox\"\n                   name=\"direct_payment\"\n                   [checked]=\"data?.drirect_payment === 'Y'\"\n                   (change)=\"$event.target.checked ? (selectBuyer.drirect_payment = 'Y') : (selectBuyer.drirect_payment = 'N')\"> :\n            Direct Payment\n            <br>\n            <input type=\"checkbox\"\n                   name=\"progress_payment\"\n                   [checked]=\"data?.progress_payment === 'Y'\"\n                   (change)=\"$event.target.checked ? (selectBuyer.progress_payment = 'Y') : (selectBuyer.progress_payment = 'N')\"> :\n            Progress Payment\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <label>Factoring Fee</label>\n      <span class=\"star\">*</span>\n      <div class=\"form-group\">\n        <input [disabled]=\"editable\"\n               currencyMask\n               class=\"form-control\"\n               [(ngModel)]=\"selectBuyer.factoring_fee\"\n               [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n      </div>\n      <label>Minimum Factoring Fee</label>\n      <div class=\"form-group\">\n        <input [disabled]=\"editable\"\n               currencyMask\n               class=\"form-control\"\n               [(ngModel)]=\"selectBuyer.min_facfee\"\n               [options]=\"{ prefix: '', thousands: ',', decimal: '.' , precision  : '0'}\"/>\n      </div>\n      <label>Max Facforing Fee</label>\n      <div class=\"form-group\">\n        <input [disabled]=\"editable\"\n               currencyMask\n               class=\"form-control\"\n               [(ngModel)]=\"selectBuyer.max_facfee\"\n               [options]=\"{ prefix: '', thousands: ',', decimal: '.', precision  : '0' }\"/>\n      </div>\n      <br>\n      <div class=\"mt-radio-inline border-isa\">\n        <label><b>Payment Method</b></label>\n        <div class=\"form-group\">\n          <div class=\"mt-radio-inline\" style=\"padding: 5px\">\n            <input type=\"radio\" name=\"pay_mthd\" value=\"CH\" [(ngModel)]=\"selectBuyer.pay_mthd\"> CH : Cheque Collection\n            <br>\n            <input type=\"radio\" name=\"pay_mthd\" value=\"TR\" [(ngModel)]=\"selectBuyer.pay_mthd\"> TR : Wire Tranfer\n            <br>\n            <input type=\"radio\" name=\"pay_mthd\" value=\"PDC\" [(ngModel)]=\"selectBuyer.pay_mthd\"> PDC : Post Date Cheque\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <label><b>Remark</b><br></label>\n      <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"selectBuyer.other_doc\"></textarea>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-buyer/ca-buyer-detail/ca-buyer-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaBuyerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_buyer__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-buyer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaBuyerDetailComponent = /** @class */ (function () {
    function CaBuyerDetailComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaBuyerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectBuyer = new __WEBPACK_IMPORTED_MODULE_2__model_ca_buyer__["a" /* caBuyer */]();
        this.subscripData = this.creditApplicationService.eventcabuyer.subscribe(function (value) {
            _this.selectBuyer = value;
        });
        this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(function (obj) {
            _this.listAPT = _this.creditApplicationService.listAPT;
        });
    };
    CaBuyerDetailComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaBuyerDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-buyer-detail',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-buyer/ca-buyer-detail/ca-buyer-detail.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaBuyerDetailComponent);
    return CaBuyerDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-buyer/ca-buyer-doc/ca-buyer-doc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"border-isa p-2\">\n  <div class=\"row\">\n    <div class=\"flex-md-column col-md-7\">\n      <div class=\"form-group mb-1\">\n        <input type=\"radio\" name=\"bt\" value=\"Factored\"> Factored &nbsp;\n        <input type=\"radio\" name=\"bt\" value=\"Collection\"> Collection &nbsp;\n        <input type=\"radio\" name=\"bt\" value=\"All\"> All &nbsp;\n      </div>\n      <div class=\"form-group mb-1\">\n        <label style=\"color:gray\"> click column title select all If any (Must = /)</label>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <p-dataTable   [value]=\"listBuyerDoc\"\n                         selectionMode=\"single\" [(selection)]=\"selectBuyerDoc\"\n                         [scrollable]=\"true\"\n                         scrollHeight=\"400px\"  scrollWidth=\"400px\"\n                         [responsive]=\"true\" >\n            <p-headerColumnGroup>\n              <p-row>\n                <p-column header=\"Select\" colspan=\"3\"  [style]=\"{'width':'180px'}\"></p-column>\n                <p-column header=\"If Any\" rowspan=\"2\"  [style]=\"{'width':'50px'}\"></p-column>\n                <p-column header=\"Description\" rowspan=\"10\" [style]=\"{'width':'250px'}\" ></p-column>\n                <p-column header=\"Remark\" rowspan=\"10\" [style]=\"{'width':'250px'}\" ></p-column>\n              </p-row>\n              <p-row>\n                <p-column header=\"Original\" [style]=\"{'width':'60px'}\"></p-column>\n                <p-column header=\"Photo\"    [style]=\"{'width':'60px'}\"></p-column>\n                <p-column header=\"Copy\"     [style]=\"{'width':'60px'}\"></p-column>\n              </p-row>\n            </p-headerColumnGroup>\n            <p-column field=\"select_o\"   [editable]=\"true\"   [style]=\"{'width':'60px','text-align': 'center'}\">\n              <ng-template let-col let-doc=\"rowData\" pTemplate=\"body\">\n                <input type=\"checkbox\"\n                       [checked]=\"doc[col.field] == 'Y'\"      (change)=\"doc[col.field] = onClickCheck($event)\"\n                >\n              </ng-template>\n            </p-column>\n            <p-column field=\"select_p\"   [editable]=\"true\"    [style]=\"{'width':'60px','text-align': 'center'}\">\n              <ng-template let-col let-doc=\"rowData\" pTemplate=\"body\">\n                <input type=\"checkbox\"\n                       [checked]=\"doc[col.field] == 'Y'\"      (change)=\"doc[col.field] = onClickCheck($event)\"\n                >\n              </ng-template>\n            </p-column>\n            <p-column field=\"select_c\"    [editable]=\"true\"    [style]=\"{'width':'60px','text-align': 'center'}\">\n              <ng-template let-col let-doc=\"rowData\" pTemplate=\"body\">\n                <input type=\"checkbox\"\n                       [checked]=\"doc[col.field] == 'Y'\"  (change)=\"doc[col.field] = onClickCheck($event)\"\n                >\n              </ng-template>\n            </p-column>\n            <p-column field=\"factored_ifany\" [editable]=\"true\" [style]=\"{'width':'50px','text-align': 'center'}\">\n              <ng-template let-col let-doc=\"rowData\" pTemplate=\"body\">\n                <input type=\"checkbox\"\n                       [checked]=\"doc[col.field] == 'Y'\"     (change)=\"doc[col.field] = onClickCheck($event)\"\n                >\n              </ng-template>\n            </p-column>\n            <p-column field=\"remark_cat\" [style]=\"{'width':'250px'}\" ></p-column>\n            <p-column field=\"remark\" [editable]=\"true\"  [style]=\"{'width':'250px'}\"></p-column>\n            <p-footer>\n            </p-footer>\n          </p-dataTable>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex col-md-5\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label><b>Other 1</b><br></label>\n          <input class=\"form-control\" [(ngModel)]=\"selectBuyerDoc.oth1\" >\n        </div>\n        <div class=\"form-group\">\n          <label><b>Other 2</b><br></label>\n          <input class=\"form-control\" [(ngModel)]=\"selectBuyerDoc.oth2\">\n        </div>\n        <div class=\"form-group\">\n          <label><b>Other 3</b><br></label>\n          <input class=\"form-control\" [(ngModel)]=\"selectBuyerDoc.oth3\">\n        </div>\n        <div class=\"form-group\">\n          <label style=\"color:gray\"> *Edit and Double click For update data</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-buyer/ca-buyer-doc/ca-buyer-doc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaBuyerDocComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ca_buyerdoc__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-buyerdoc.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaBuyerDocComponent = /** @class */ (function () {
    function CaBuyerDocComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaBuyerDocComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectBuyerDoc = new __WEBPACK_IMPORTED_MODULE_1__model_ca_buyerdoc__["a" /* caBuyerDoc */]();
        this.subscripData = this.creditApplicationService.eventcabuyer.subscribe(function (value) {
            _this.selectBuyer = value;
            if (_this.selectBuyer) {
                _this.listBuyerDoc = _this.selectBuyer.listcabuyerdoc;
                if ((_this.listBuyerDoc) && (_this.listBuyerDoc.length > 1)) {
                    _this.selectBuyerDoc = _this.listBuyerDoc[0];
                }
            }
        });
        this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(function (obj) {
        });
    };
    CaBuyerDocComponent.prototype.onClickCheck = function (value) {
        var data;
        if (value.target.checked) {
            data = 'Y';
        }
        else {
            data = 'N';
        }
        console.log(data);
        return data;
    };
    CaBuyerDocComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaBuyerDocComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-buyer-doc',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-buyer/ca-buyer-doc/ca-buyer-doc.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__credit_application_service__["a" /* creditApplicationService */]])
    ], CaBuyerDocComponent);
    return CaBuyerDocComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-fac-pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView>\n  <p-tabPanel header=\"Seller\">\n    <app-ca-pricing></app-ca-pricing>\n  </p-tabPanel>\n  <p-tabPanel header=\"Buyer\">\n    <app-ca-buyer></app-ca-buyer>\n  </p-tabPanel>\n</p-tabView>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-fac-pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaFacPricingComponent; });
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

var CaFacPricingComponent = /** @class */ (function () {
    function CaFacPricingComponent() {
    }
    CaFacPricingComponent.prototype.ngOnInit = function () {
    };
    CaFacPricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-fac-pricing',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-fac-pricing.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CaFacPricingComponent);
    return CaFacPricingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-pricing/pricing-normal/pricing-normal.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset [disabled]=\"disabled == 'N'\">\n  <div class=\"border-isa mt-1 form-group col-md-12\">\n    <div class=\"container-fluid\">\n      <div class=\"col-md-3 border-isa\">\n        <input type=\"radio\" name=\"radioAdvance\" [checked]=\"dataHead?.advance_type==='Y'\" disabled> With Advance\n        <input type=\"radio\" name=\"radioAdvance\" [checked]=\"dataHead?.advance_type==='N'\" disabled> With Out Advance\n      </div>\n      <br>\n      <div class=\"col-md-4\">\n        <label>Requested Credit Line</label>\n        <span class=\"star\">*</span>\n        <div class=\"form-inline\">\n          <input currencyMask\n                 class=\"form-control\"\n                 [(ngModel)]=\"dataFirst.credit_line_amt\"\n                 [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n          <div class=\"col-md-1\" style=\"margin-left: 10px;\">\n            <label> Baht. </label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"border-isa mt-2\">\n        <label><b>Interest Charge</b></label>\n        <div class=\"col-md-12\">\n          <div class=\"d-flex\">\n            <div class=\"form-group col-md-6\">\n                <input type=\"radio\" name=\"rate_type\" value=\"Fix\"\n                       [(ngModel)]=\"dataFirst.rate_type\"\n                       (ngModelChange)=\"interestChange($event)\"> Fix   &nbsp;\n                <input type=\"radio\" name=\"rate_type\" value=\"Float\"\n                       [(ngModel)]=\"dataFirst.rate_type\"\n                       (ngModelChange)=\"interestChange($event)\"> Float\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"rate_type!='Float'\">\n          <div class=\"d-flex\">\n            <div class=\"form-group col-md-3\">\n              <label> Interest Rate </label>\n              <div class=\"form-inline\">\n                <input currencyMask\n                       class=\"form-control\"\n                       [disabled]=\"dataFirst.rate_type=='Float'\"\n                       [(ngModel)]=\"dataFirst.int_rate\"\n                       [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>&nbsp; %\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"rate_type!='Fix'\">\n          <div class=\"d-flex\">\n\n            <div class=\"form-group col-md-3\">\n              <label> Bank </label>\n              <select class=\"form-control\"\n                      #rateBank\n                      (change)=\"rateChange()\"\n                      [(ngModel)]=\"dataFirst.rate_bank\">\n                <option [value]=\"-1\"></option>\n                <option *ngFor=\"let list of dataListBank; let i = index\"\n                        [value]=\"list.id_code\"\n                        [selected]=\"dataFirst.rate_bank === list.id_code\">{{list?.remark}}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label> Type </label>\n              <select class=\"form-control\"\n                      #rateM\n                      (change)=\"rateChange()\"\n                      [(ngModel)]=\"dataFirst.rate_m\">\n                <option [value]=\"-1\"></option>\n                <option *ngFor=\"let list of dataListInsRate; let i = index\"\n                        [value]=\"list.id_code\"\n                        [selected]=\"dataFirst.rate_m === list.id_code\">{{list?.remark}}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label> Rate </label>\n              <input currencyMask\n                     class=\"form-control\"\n                     disabled\n                     [(ngModel)]=\"dataFirst.bank_int_rate\"\n                     [options]=\"{ prefix: '', thousands: ',', decimal: '.' , precision  : '3' }\"/>\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label> Spread </label>\n              <input currencyMask\n                     class=\"form-control\"\n                     #rateSpread\n                     [disabled]=\"dataFirst.rate_type=='Fix'\"\n                     [(ngModel)]=\"dataFirst.rate_spread\"\n                     [options]=\"{ prefix: '', thousands: ',', decimal: '.' , precision  : '3' }\"/>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n\n      <div class=\"col-md-12 border-isa\">\n        <div class=\"mt-1 form-group col-md-12\">\n          <label><b>Factoring Fee Type</b></label><br>\n          <div class=\"row\">\n            <div class=\"col-md-7 form-inline\">\n              <input type=\"radio\" name=\"factfee_type\" value=\"1\"\n                     [(ngModel)]=\"dataFirst.factfee_type\"\n                     style=\"margin-right: 4px;\"\n                     (ngModelChange)=\"factFeeChange($event)\"> Float\n              <label style=\"color: darkgray\"> %type float คีย์ที่ Buyer Only หน้านี้โชว์อย่างเดียว </label>\n            </div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-9 form-inline\">\n              <input type=\"radio\" name=\"factfee_type\" value=\"2\"\n                     style=\"margin-right: 4px;\"\n                     [(ngModel)]=\"dataFirst.factfee_type\"\n                     (ngModelChange)=\"factFeeChange($event)\"> Per Month\n              <div class=\"col-md-5 form-inline\">\n                <input currencyMask\n                       class=\"form-control\"\n                       [disabled]=\"dataFirst.factfee_type==1\"\n                       [(ngModel)]=\"dataFirst.factfee_amt_month\"\n                       [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/> &nbsp; Baht.\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"row mt-1\">\n        <div class=\"col-md-4\">\n          <label>Front-end Fee </label>\n          <div class=\"form-inline\">\n            <input currencyMask\n                   class=\"form-control\"\n                   [(ngModel)]=\"dataFirst.front_end_fee_amt\"\n                   [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n            <div class=\"col-md-1\" style=\"margin-left: 10px;\">\n              <label> Baht. </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <label>Handling Fee </label>\n          <div class=\"form-inline\">\n            <input currencyMask\n                   class=\"form-control\"\n                   [(ngModel)]=\"dataFirst.handling_fee_amt\"\n                   [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n            <div class=\"col-md-1\" style=\"margin-left: 10px;\">\n              <label> Baht. </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</fieldset>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-pricing/pricing-normal/pricing-normal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingNormalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ca_head__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-head.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_pricing__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-pricing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_center_utils_date_utils__ = __webpack_require__("../../../../../src/app/shared/center/utils/date-utils.ts");
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






var PricingNormalComponent = /** @class */ (function () {
    function PricingNormalComponent(creditApplicationService, dateUtils, userStorage) {
        this.creditApplicationService = creditApplicationService;
        this.dateUtils = dateUtils;
        this.userStorage = userStorage;
        this.dataHead = new __WEBPACK_IMPORTED_MODULE_1__model_ca_head__["a" /* caHead */]();
        this.dataListBank = [];
        this.dataListInsRate = [];
        this.dataBankInsRate = [];
        this.disabled = 'Y';
    }
    PricingNormalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataFirst = new __WEBPACK_IMPORTED_MODULE_2__model_ca_pricing__["a" /* caPricing */]();
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (value) {
            _this.dataHead = value;
            if (_this.dataHead) {
                _this.data = _this.dataHead.listcapricing;
                if ((_this.data[0]) && (_this.data[0].prc_typ == '1')) {
                    _this.dataFirst = _this.data[0];
                    //console.log(this.dataFirst);
                    _this.interestChange(_this.dataFirst.rate_type);
                    _this.factFeeChange(_this.dataFirst.factfee_type);
                }
            }
        });
        this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(function (obj) {
            _this.dataListBank = _this.creditApplicationService.listBNK;
            _this.dataListInsRate = _this.creditApplicationService.listInsRate;
            _this.dataBankInsRate = _this.creditApplicationService.listBANK_INT_RATE;
        });
    };
    PricingNormalComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    PricingNormalComponent.prototype.rateChange = function () {
        var _this = this;
        if (this.dataFirst.rate_bank && this.dataFirst.rate_m) {
            var rateSelect = (this.dataBankInsRate.find(function (item) {
                return item.id_code === _this.dataFirst.rate_bank && item.remark === _this.dataFirst.rate_m;
            }));
            if (rateSelect) {
                this.dataFirst.bank_int_rate = rateSelect.remark;
            }
            else {
                this.dataFirst.bank_int_rate = 0;
            }
        }
    };
    PricingNormalComponent.prototype.interestChange = function (rateType) {
        if (rateType === 'Fix') {
            this.rateBank.nativeElement.disabled = true;
            this.rateM.nativeElement.disabled = true;
            this.rateSpread.nativeElement.disabled = true;
        }
        else if (rateType === 'Float') {
            this.rateBank.nativeElement.disabled = false;
            this.rateM.nativeElement.disabled = false;
            this.rateSpread.nativeElement.disabled = false;
            this.dataFirst.int_rate = '';
        }
        else {
            this.rateBank.nativeElement.disabled = false;
            this.rateM.nativeElement.disabled = false;
            this.rateSpread.nativeElement.disabled = false;
            this.dataFirst.int_rate = '';
        }
    };
    PricingNormalComponent.prototype.factFeeChange = function (factFee) {
        if (factFee === '1') {
            this.dataFirst.factfee_amt_month = '';
            // this.appFormService.editEvent.emit(false);
        }
        else if (factFee === '2') {
            // this.appFormService.editEvent.emit(true);
        }
        else {
            this.dataFirst.factfee_amt_month = '';
            // this.appFormService.editEvent.emit(false);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('intRate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PricingNormalComponent.prototype, "intRate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rateBank'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PricingNormalComponent.prototype, "rateBank", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rateM'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PricingNormalComponent.prototype, "rateM", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rateSpread'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PricingNormalComponent.prototype, "rateSpread", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('facFeeAmt'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PricingNormalComponent.prototype, "facFeeAmt", void 0);
    PricingNormalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pricing-normal',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-pricing/pricing-normal/pricing-normal.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__credit_application_service__["a" /* creditApplicationService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_center_utils_date_utils__["a" /* DateUtils */],
            __WEBPACK_IMPORTED_MODULE_5__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], PricingNormalComponent);
    return PricingNormalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-pricing/pricing-project/pricing-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"border-isa p-2\">\n  <div class=\"container-fluid\">\n    <div class=\"d-flex\">\n      <div class=\"form-group\">\n        <input type=\"radio\" name=\"radioAdvance\" [checked]=\"dataHead?.advance_type==='Y'\" disabled> With Advance\n        <input type=\"radio\" name=\"radioAdvance\" [checked]=\"dataHead?.advance_type==='N'\" disabled> With Out Advance\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Requested Credit Line </label>\n          <div class=\"form-inline\">\n            <input currencyMask\n                   class=\"form-control\"\n                   [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n            &nbsp; Baht.\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Expired Date : </label><br>\n          <p-calendar dateFormat=\"dd/mm/yy\" class=\"my-1\"></p-calendar>\n        </div>\n      </div>\n    </div>\n    <br>\n    <b>Advance Condition</b>\n    <div class=\"border-isa\">\n      <div class=\"border-isa\">\n        <label><b>Interest Charge</b></label>\n        <div class=\"col-md-12\">\n          <div class=\"d-flex\">\n            <div class=\"form-group col-md-3\">\n              <label class=\"mt-radio form-inline\">\n                <input type=\"radio\" name=\"rate_type\" value=\"Fix\">Fix\n                <input type=\"radio\" name=\"rate_type\" value=\"Float\">Float\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"rate_type!='Float'\">\n          <div class=\"d-flex\">\n            <div class=\"form-group col-md-3\">\n              <label> Interest Rate </label>\n              <div class=\"form-inline\">\n                <input currencyMask\n                       class=\"form-control\"\n                       [options]=\"{ prefix: '', thousands: ',', decimal: '.',suffix:'' }\"/>&nbsp; %\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\"  *ngIf=\"rate_type!='Fix'\">\n          <div class=\"d-flex\">\n\n            <div class=\"form-group col-md-3\">\n              <label> Bank </label>\n              <input class=\"form-control\">\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label> Type </label>\n              <input class=\"form-control\">\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label> Spread </label>\n              <input currencyMask\n                     class=\"form-control\"\n                     [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <br>\n\n      <div class=\"col-md-4 my-1\">\n        <label> Advance Condition</label>\n        <div class=\"form-inline\">\n          <input class=\"form-control\"/>\n          <label class=\"mx-1\"> % (Max Buyer)</label>\n        </div>\n      </div>\n\n      <div class=\"border-isa\">\n        <label><b>Factoring Fee Type</b></label>\n        <div class=\"col-md-6\">\n          <label class=\"mt-radio\" style=\"padding: 5px \">\n            <input type=\"radio\" name=\"factfee_type\" value=\"1\"> Float\n          </label>\n          <label style=\"color: darkgray\"> %type float คีย์ที่ Buyer Only หน้านี้โชว์อย่างเดียว </label>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-inline\">\n            <label class=\"mt-radio\" style=\"padding: 5px \">\n              <input type=\"radio\" name=\"factfee_type\" value=\"2\"> Per Month\n            </label>\n            <input currencyMask\n                   class=\"form-control\"\n                   [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n            <label> &nbsp; Baht.</label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <label>Front-end Fee : </label>\n        <div class=\"form-inline\">\n          <input currencyMask\n                 class=\"form-control\"\n                 [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n          &nbsp; Baht.\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <label>Handling Fee : </label>\n        <div class=\"form-inline\">\n          <input currencyMask\n                 class=\"form-control\"\n                 [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n          &nbsp; Baht.\n        </div>\n      </div>\n    </div>\n    <br>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-pricing/pricing-project/pricing-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingProjectComponent; });
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

var PricingProjectComponent = /** @class */ (function () {
    function PricingProjectComponent() {
    }
    PricingProjectComponent.prototype.ngOnInit = function () {
    };
    PricingProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pricing-project',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-pricing/pricing-project/pricing-project.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PricingProjectComponent);
    return PricingProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView>\n  <p-tabPanel header=\"Pricing Normal\">\n    <app-pricing-normal></app-pricing-normal>\n  </p-tabPanel>\n  <!--<p-tabPanel header=\"Pricing Project\">-->\n    <!--<app-pricing-project></app-pricing-project>-->\n  <!--</p-tabPanel>-->\n</p-tabView>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaPricingComponent; });
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

var CaPricingComponent = /** @class */ (function () {
    function CaPricingComponent() {
    }
    CaPricingComponent.prototype.ngOnInit = function () {
    };
    CaPricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-pricing',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-pricing/pricing.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CaPricingComponent);
    return CaPricingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-floor-plan/ca-floor-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Credit Line \">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"form-group col-md-1\">\n        <label class=\"mt-radio\">\n          <input type=\"radio\" name=\"rate_type\" value=\"Fix\">&nbsp;Fix\n        </label>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label> Interst Rate </label>\n        <div class=\"form-inline\">\n          <input currencyMask\n                 class=\"form-control\"\n                 [options]=\"{ prefix: '', thousands: ',', decimal: '.',suffix:'' }\"/>\n          &nbsp; %\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"form-group col-md-1\">\n        <label class=\"mt-radio\">\n          <input type=\"radio\" name=\"rate_type\" value=\"Float\">&nbsp;Float\n        </label>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label> Bank </label>\n        <input class=\"form-control\">\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label> Type </label>\n        <input class=\"form-control\">\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label> Spread </label>\n        <input currencyMask\n               class=\"form-control\"\n               [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<br>\n<div class=\"d-flex\">\n  <div class=\"col-md-6\">\n    <div class=\"d-flex col-md-12\">\n      <div class=\"form-group col-md-6 \">\n        <label> Tenor </label>\n        <div class=\"form-inline\">\n          <input class=\"form-control text-right\">\n          &nbsp; Month\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex col-md-12\">\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label> Start Date </label><br>\n          <p-calendar dateFormat=\"dd/mm/yy\" class=\"my-1\" placeholder=\"dd/mm/yyyy\"></p-calendar>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <label>Expiry Date</label><br>\n          <p-calendar dateFormat=\"dd/mm/yy\" class=\"my-1\" placeholder=\"dd/mm/yyyy\"></p-calendar>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex col-md-12\">\n      <div class=\"form-group col-md-6 \">\n        <label> Requested Credit Line </label>\n        <input class=\"form-control text-right\">\n      </div>\n      <div class=\"form-group col-md-6 \">\n        <label> Penalty Rate </label>\n        <div class=\"form-inline\">\n          <input class=\"form-control\">\n          &nbsp; %\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex col-md-12\">\n      <div class=\"form-group col-md-6 \">\n        <label> Duty Amount </label>\n        <input currencyMask\n               class=\"form-control\"\n               [options]=\"{ prefix: '', thousands: ',', decimal: '.',suffix:'' }\"/>\n      </div>\n      <div class=\"form-group col-md-6 \">\n        <label> Drawdown Period </label>\n        <div class=\"form-inline\">\n          <input class=\"form-control text-right\">\n          &nbsp; Days\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex col-md-12\">\n      <div class=\"form-group col-md-6 \">\n        <label>OS Duty Amount </label>\n        <input currencyMask\n               class=\"form-control\"\n               [options]=\"{ prefix: '', thousands: ',', decimal: '.',suffix:'' }\"/>\n      </div>\n      <div class=\"form-group col-md-6 \">\n        <label> Minimum Interest Rate </label>\n        <input currencyMask\n               class=\"form-control\"\n               [options]=\"{ prefix: '', thousands: ',', decimal: '.',suffix:'' }\"/>\n      </div>\n    </div>\n    <div class=\"d-flex col-md-12\">\n      <div class=\"form-group col-md-6 offset-6\">\n        <label> Percent of the appraised </label>\n        <div class=\"form-inline\">\n          <input currencyMask\n                 class=\"form-control\"\n                 [options]=\"{ prefix: '', thousands: ',', decimal: '.',suffix:'' }\"/>\n          &nbsp; %\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"form-group col-md-12 border-isa\">\n      <label class=\"p-1\">Ref. Old CA</label>\n      <div class=\"d-flex col-md-12\">\n        <div class=\"form-group col-md-6 \">\n          <label>Total Credit Line </label>\n          <input currencyMask\n                 class=\"form-control\"\n                 [options]=\"{ prefix: '', thousands: ',', decimal: '.',suffix:'' }\"/>\n        </div>\n        <div class=\"form-group col-md-6 \">\n          <label>Used Credit Line</label>\n          <input currencyMask\n                 class=\"form-control\"\n                 [options]=\"{ prefix: '', thousands: ',', decimal: '.',suffix:'' }\"/>\n        </div>\n      </div>\n      <div class=\"d-flex col-md-12\">\n        <div class=\"form-group col-md-6 \">\n          <label>Waiting DrawDown Approval </label>\n          <input currencyMask\n                 class=\"form-control\"\n                 [options]=\"{ prefix: '', thousands: ',', decimal: '.',suffix:'' }\"/>\n        </div>\n        <div class=\"form-group col-md-6 \">\n          <label>Available Credit Line</label>\n          <input currencyMask\n                 class=\"form-control\"\n                 [options]=\"{ prefix: '', thousands: ',', decimal: '.',suffix:'' }\"/>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-floor-plan/ca-floor-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaFloorPlanComponent; });
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

var CaFloorPlanComponent = /** @class */ (function () {
    function CaFloorPlanComponent() {
    }
    CaFloorPlanComponent.prototype.ngOnInit = function () {
    };
    CaFloorPlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-floor-plan',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-floor-plan/ca-floor-plan.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CaFloorPlanComponent);
    return CaFloorPlanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-address-en/ca-guar-address-en.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-address-en/ca-guar-address-en.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Current Address/ Company Certificate\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.address\"  >\n        </div>\n      </div>\n    </div>\n\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Post Code </label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caGua.post_cd\" >\n\n        </div>\n      </div>\n      <div class=\"col-md-6 \">\n        <div class=\"form-group\">\n          <label> Neighborhood </label>\n          <input type=\"text\" class=\"form-control \"  [(ngModel)]=\"caGua.near\" >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Telephone No.</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caGua.tel\" >\n        </div>\n      </div>\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label> Fax No.</label>\n          <input type=\"text\" class=\"form-control \"  [(ngModel)]=\"caGua.fax_current\">\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\" Address VAT Registration\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caGua.add_c\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.post_cd_c\" >\n\n        </div>\n      </div>\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Telephone No.</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caGua.tel_card\" >\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\" Office\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.add_o\" >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caGua.post_cd_o\" >\n\n        </div>\n      </div>\n      <div class=\"col-md-6 \">\n        <div class=\"form-group\">\n          <label> Neighborhood </label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caGua.near_o\" >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Telephone No.</label>\n          <input type=\"text\" class=\"form-control \"  [(ngModel)]=\"caGua.tel_o\" >\n        </div>\n      </div>\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label> Fax No.</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caGua.fax_office\" >\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\" Mail\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caGua.add_m\" >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caGua.post_cd_m\" >\n\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\" Telephone\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label> Moblie Phone No. </label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caGua.mobile_phone\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caGua.mobile_phone2\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caGua.mobile_phone3\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label> Emial Address </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.email_address\" >\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-address-en/ca-guar-address-en.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaGuarAddressEnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ca_guarantor__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-guarantor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaGuarAddressEnComponent = /** @class */ (function () {
    function CaGuarAddressEnComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaGuarAddressEnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caGua = new __WEBPACK_IMPORTED_MODULE_1__model_ca_guarantor__["a" /* caGuarantor */]();
        this.subscription = this.creditApplicationService.eventSelectGuarantor.subscribe(function (selectGua) {
            _this.caGua = selectGua;
        });
    };
    CaGuarAddressEnComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CaGuarAddressEnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-guar-address-en',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-address-en/ca-guar-address-en.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-address-en/ca-guar-address-en.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__credit_application_service__["a" /* creditApplicationService */]])
    ], CaGuarAddressEnComponent);
    return CaGuarAddressEnComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-address-th/ca-guar-address-th.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-address-th/ca-guar-address-th.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Current Address / Certificate Address\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.address\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-2\">\n        <div class=\"form-group\">\n          <label>Address Code</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.zip\" >\n\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.zip\"  >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-2 \">\n\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caGua.post_cd\"  >\n        </div>\n      </div>\n      <div class=\"col-md-6 \">\n        <div class=\"form-group\">\n          <label>Nearby Place</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.near\"  >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Telephone No.  </label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caGua.tel\"  >\n        </div>\n      </div>\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Fax No.</label>\n          <input type=\"text\" class=\"form-control \"  [(ngModel)]=\"caGua.fax_current\" >\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\"  ที่อยู่ตาม ภ.พ 20\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.add_c\"  >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-2\">\n        <div class=\"form-group\">\n          <label>Address Code</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.zip_c\"  >\n\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.zip_c_desc\"  >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-2 \">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caGua.post_cd_c\"  >\n        </div>\n      </div>\n      <div class=\"col-md-6 \">\n        <div class=\"form-group\">\n          <label>Nearby Code</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caGua.near\"  >\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\"Office\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caGua.add_o\" >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-2\">\n        <div class=\"form-group\">\n          <label>Address Code</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.zip_o\"  >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.zip_o_desc\"  >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-2 \">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caGua.post_cd_o\"  >\n        </div>\n      </div>\n      <div class=\"col-md-6 \">\n        <div class=\"form-group\">\n          <label>Nearby Place</label>\n          <input type=\"text\" class=\"form-control \" [(ngModel)]=\"caGua.near_o\"  >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Tel. </label>\n          <input type=\"text\" class=\"form-control \"  [(ngModel)]=\"caGua.tel_o\"  >\n        </div>\n      </div>\n      <div class=\"col-md-3 \">\n        <div class=\"form-group\">\n          <label>Fax No.</label>\n          <input type=\"text\" class=\"form-control \"  [(ngModel)]=\"caGua.fax_office\" >\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\" Mail\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.add_m\"  >\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-2\">\n        <div class=\"form-group\">\n          <label>Address Code</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.zip_m\"  >\n\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>&nbsp;</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caGua.zip_m_desc\"  >\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control \"  [(ngModel)]=\"caGua.post_cd_m\"  >\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n<p-panel header=\" Tel.\">\n  <div class=\"col-md-12\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Tel.1 </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.mobile_phone\" >\n        </div>\n      </div>\n\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Tel.2</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.mobile_phone2\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Tel.3</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.mobile_phone3\" >\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Email Address </label>\n          <input type=\"text\" class=\"form-control\"  readonly>\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-address-th/ca-guar-address-th.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaGuarAddressThComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ca_guarantor__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-guarantor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaGuarAddressThComponent = /** @class */ (function () {
    function CaGuarAddressThComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaGuarAddressThComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caGua = new __WEBPACK_IMPORTED_MODULE_1__model_ca_guarantor__["a" /* caGuarantor */]();
        this.subscription = this.creditApplicationService.eventSelectGuarantor.subscribe(function (selectGua) {
            _this.caGua = selectGua;
        });
    };
    CaGuarAddressThComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CaGuarAddressThComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-guar-address-th',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-address-th/ca-guar-address-th.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-address-th/ca-guar-address-th.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__credit_application_service__["a" /* creditApplicationService */]])
    ], CaGuarAddressThComponent);
    return CaGuarAddressThComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-asia-condition/ca-guar-asia-condition.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-asia-condition/ca-guar-asia-condition.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Condition & Remark\">\n  <div class=\"main-container\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <div class=\"form-inline\">\n            <label class=\"my-1\"> Condition Template </label>\n          </div>\n          <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                       [responsive]=\"true\">\n            <p-column field=\"f1\" header=\" Condition Detail \"></p-column>\n            <p-footer>\n              <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n              </div>\n            </p-footer>\n          </p-dataTable>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6 \">\n        <div class=\"form-group\">\n          <div class=\"form-inline\">\n            <label class=\"my-1\"> Remark Template </label>\n          </div>\n          <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                       [responsive]=\"true\">\n            <p-column field=\"f1\" header=\" Remark Detail \"></p-column>\n            <p-footer>\n              <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n              </div>\n            </p-footer>\n          </p-dataTable>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"my-3\"> Condition </label>\n          <textarea class=\"form-control\"></textarea>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"my-3\"> Previous Condition </label>\n          <textarea class=\"form-control\"></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-asia-condition/ca-guar-asia-condition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaGuarAsiaConditionComponent; });
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

var CaGuarAsiaConditionComponent = /** @class */ (function () {
    function CaGuarAsiaConditionComponent() {
    }
    CaGuarAsiaConditionComponent.prototype.ngOnInit = function () {
    };
    CaGuarAsiaConditionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-guar-asia-condition',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-asia-condition/ca-guar-asia-condition.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-asia-condition/ca-guar-asia-condition.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CaGuarAsiaConditionComponent);
    return CaGuarAsiaConditionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-card/ca-guar-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-card/ca-guar-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\n  <div class=\"panel panel-default\" style=\"width: 100%\">\n    <p-panel header=\"Other Card\">\n      <div class=\"main-container\">\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-6\">\n            <div class=\"form-group\">\n              <label> Card Number</label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-6\">\n            <div class=\"form-group\">\n              <label> Card Type</label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-6\">\n            <div class=\"form-group\">\n              <label> Issued at .</label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-6\">\n            <div class=\"form-group\">\n              <label> Dated Issued </label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-6\">\n            <div class=\"form-group\">\n              <label> Expiry date </label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-12\">\n            <div class=\"form-group\">\n              <label>Address</label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-12\">\n            <div class=\"form-group\">\n              <label></label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </p-panel>\n  </div>\n  <div class=\"panel panel-default\" style=\"width: 100%\">\n    <p-panel header=\"Bank\">\n      <div class=\"main-container\">\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-6\">\n            <div class=\"form-group\">\n              <label> Account name </label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-6\">\n            <div class=\"form-group\">\n              <label> Account Number </label>\n              <input type=\"text\" class=\"form-control\">\n              <br>\n              <input type=\"checkbox\" [checked]=\"data?.debit === 'Y'\"\n                     (change)=\"$event.target.checked ? (data.debit = 'Y') : (data.debit = 'N')\"> Debit\n            </div>\n          </div>\n        </div>\n\n        <div class=\"flex-md-column col-md-6\">\n          <div class=\"form-group\">\n            <input type=\"radio\" name=\"bt\" value=\"N\"> Saving\n            <input type=\"radio\" name=\"bt\" value=\"Y\"> Current\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-6\">\n            <div class=\"form-group\">\n              <label> Bank </label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-6\">\n            <div class=\"form-group\">\n              <label> Branch </label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-12\">\n            <div class=\"form-group\">\n              <label>Address</label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"flex-md-column col-md-12\">\n            <div class=\"form-group\">\n              <label></label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </p-panel>\n  </div>\n</div>\n\n<div class=\"d-flex\">\n  <div class=\"panel panel-default\" style=\"border: solid;border-width:thin;width: 100%\">\n    <div class=\"form-group\">\n      <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                   [responsive]=\"true\">\n        <p-header>\n          <app-custom-botton-icon [option]=\"'new'\"></app-custom-botton-icon>\n        </p-header>\n        <p-column field=\"f1\" header=\"Card Number\"></p-column>\n        <p-column field=\"f2\" header=\"Card Type\"></p-column>\n        <p-column field=\"f3\" header=\"Dated Issued\"></p-column>\n        <p-column field=\"f4\" header=\"Expiry date\"></p-column>\n        <p-column field=\"f5\" header=\"Issued at \"></p-column>\n        <p-footer></p-footer>\n      </p-dataTable>\n    </div>\n  </div>\n  <div class=\"panel panel-default\" style=\"border: solid;border-width:thin;width: 100%\">\n    <div class=\"form-group\">\n      <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                   [responsive]=\"true\">\n        <p-header>\n          <app-custom-botton-icon [option]=\"'new'\"></app-custom-botton-icon>\n        </p-header>\n        <p-column field=\"f1\" header=\"Account name\"></p-column>\n        <p-column field=\"f2\" header=\"Account Type\"></p-column>\n        <p-column field=\"f3\" header=\"Bank\"></p-column>\n        <p-column field=\"f4\" header=\"Branch\"></p-column>\n        <p-column field=\"f5\" header=\" Debit\"></p-column>\n        <p-footer></p-footer>\n      </p-dataTable>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-card/ca-guar-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaGuarCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaGuarCardComponent = /** @class */ (function () {
    function CaGuarCardComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaGuarCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.creditApplicationService.eventSelectGuarantor.subscribe(function (selectGua) {
            _this.caGua = selectGua;
        });
    };
    CaGuarCardComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CaGuarCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-guar-card',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-card/ca-guar-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-card/ca-guar-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaGuarCardComponent);
    return CaGuarCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-exposure/ca-guar-exposure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-exposure/ca-guar-exposure.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Total Exposure\">\n  <div class=\"form-group\">\n    <div class=\"form-group\">\n      <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                   [responsive]=\"true\">\n        <p-column field=\"f1\" header=\"Categories\"></p-column>\n        <p-column field=\"f2\" header=\"Finanncing Amount\"></p-column>\n        <p-column field=\"f3\" header=\"Total Exposure\"></p-column>\n        <p-column field=\"f4\" header=\"Highest Amount\"></p-column>\n        <p-column field=\"f5\" header=\"Approve Date\"></p-column>\n        <p-column field=\"f6\" header=\"Net IRR\"></p-column>\n        <p-column field=\"f7\" header=\"D.P\"></p-column>\n        <p-column field=\"f8\" header=\"Paid / Term\"></p-column>\n        <p-column field=\"f9\" header=\"Payment G.\"></p-column>\n        <p-column field=\"f10\" header=\"Installment\"></p-column>\n        <p-footer>\n          <!--<div class=\"ui-helper-clearfix\" style=\"width:100%\">\n            <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\n                    label=\"Add\"></button>\n          </div>-->\n        </p-footer>\n      </p-dataTable>\n    </div>\n  </div>\n</p-panel>\n\n<br>\n<p-panel header=\"Agreement\">\n  <div class=\"form-group\">\n    <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                 [responsive]=\"true\">\n      <p-column field=\"f1\" header=\"Categories\"></p-column>\n      <p-column field=\"f1\" header=\"Agreement\"></p-column>\n      <p-column field=\"f1\" header=\"Financing Amount\"></p-column>\n      <p-column field=\"f1\" header=\"O/S Balance\"></p-column>\n      <p-column field=\"f1\" header=\"Terms\"></p-column>\n      <p-column field=\"f1\" header=\"Paid\"></p-column>\n      <p-column field=\"f1\" header=\"Installment\"></p-column>\n      <p-column field=\"f1\" header=\"Net IRR\"></p-column>\n      <p-column field=\"f1\" header=\"Down Percent\"></p-column>\n      <p-column field=\"f1\" header=\"Flat Rate\"></p-column>\n      <p-column field=\"f1\" header=\"Ver. Grade\"></p-column>\n      <p-column field=\"f1\" header=\"Status\"></p-column>\n      <p-column field=\"f1\" header=\"RD/RT\"></p-column>\n      <p-column field=\"f1\" header=\"Payment Grade\"></p-column>\n      <p-column field=\"f1\" header=\"Customer Name\"></p-column>\n    </p-dataTable>\n  </div>\n</p-panel>\n<br>\n<p-panel header=\"Close Account  \">\n  <div class=\"form-group\">\n    <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                 [responsive]=\"true\">\n      <p-column field=\"f1\" header=\"Categories\"></p-column>\n      <p-column field=\"f1\" header=\"Agreement\"></p-column>\n      <p-column field=\"f1\" header=\"Financing Amount\"></p-column>\n      <p-column field=\"f1\" header=\"O/S Balance\"></p-column>\n      <p-column field=\"f1\" header=\"Terms\"></p-column>\n      <p-column field=\"f1\" header=\"Paid\"></p-column>\n      <p-column field=\"f1\" header=\"Installment\"></p-column>\n      <p-column field=\"f1\" header=\"Net IRR\"></p-column>\n      <p-column field=\"f1\" header=\"Down Percent\"></p-column>\n      <p-column field=\"f1\" header=\"Flat Rate\"></p-column>\n      <p-column field=\"f1\" header=\"Ver. Grade\"></p-column>\n      <p-column field=\"f1\" header=\"Status\"></p-column>\n      <p-column field=\"f1\" header=\"RD/RT\"></p-column>\n      <p-column field=\"f1\" header=\"Payment Grade\"></p-column>\n      <p-column field=\"f1\" header=\"Customer Name\"></p-column>\n    </p-dataTable>\n  </div>\n</p-panel>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-exposure/ca-guar-exposure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaGuarExposureComponent; });
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

var CaGuarExposureComponent = /** @class */ (function () {
    function CaGuarExposureComponent() {
    }
    CaGuarExposureComponent.prototype.ngOnInit = function () {
    };
    CaGuarExposureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-guar-exposure',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-exposure/ca-guar-exposure.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-exposure/ca-guar-exposure.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CaGuarExposureComponent);
    return CaGuarExposureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-machine/ca-guar-machine.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-machine/ca-guar-machine.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-column\">\n  <p-panel header=\" Owner Infomation\">\n    <div class=\"col-md-12\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Owner Name</label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n  </p-panel>\n  <br>\n  <p-panel header=\" Machine Location \">\n    <div class=\"col-md-12\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-3\">\n        <div class=\"form-group\">\n          <label>Post Code</label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n  </p-panel>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-machine/ca-guar-machine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaGuarMachineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaGuarMachineComponent = /** @class */ (function () {
    function CaGuarMachineComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaGuarMachineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.creditApplicationService.eventSelectGuarantor.subscribe(function (selectGua) {
            _this.caGua = selectGua;
        });
    };
    CaGuarMachineComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CaGuarMachineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-guar-machine',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-machine/ca-guar-machine.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-machine/ca-guar-machine.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaGuarMachineComponent);
    return CaGuarMachineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-percent-ind/ca-guar-percent-ind.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-percent-ind/ca-guar-percent-ind.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n               [responsive]=\"true\">\n    <p-column field=\"f1\" header=\"Old Industry\"></p-column>\n    <p-column field=\"f2\" header=\"New Industry\"></p-column>\n    <p-column field=\"f3\" header=\"Percent (%)\"></p-column>\n    <p-column field=\"f4\" header=\"Remark\"></p-column>\n    <p-footer>\n      <!--<div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\n                label=\"Add\"></button>\n      </div>-->\n    </p-footer>\n  </p-dataTable>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-percent-ind/ca-guar-percent-ind.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaGuarPercentIndComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaGuarPercentIndComponent = /** @class */ (function () {
    function CaGuarPercentIndComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaGuarPercentIndComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.creditApplicationService.eventSelectGuarantor.subscribe(function (selectGua) {
            _this.caGua = selectGua;
        });
    };
    CaGuarPercentIndComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    CaGuarPercentIndComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-guar-percent-ind',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-percent-ind/ca-guar-percent-ind.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-percent-ind/ca-guar-percent-ind.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaGuarPercentIndComponent);
    return CaGuarPercentIndComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guarantor-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\n  <div class=\"col-md-2\">\n    <div class=\"form-group\">\n      <p-dataTable selectionMode=\"single\"\n                   [(selection)]=\"selectGuarantor\"\n                   (onRowSelect)=\"onSelectGuarantor(selectGuarantor)\"\n                   [value]=\"listcaGuarantor\"\n                   [responsive]=\"true\">\n\n        <p-header>\n          <app-custom-botton-icon [option]=\"'new'\" (onBtnClick)=\"openEntity()\"  ></app-custom-botton-icon>\n          <app-custom-botton-icon [option]=\"'delete'\"  (onBtnClick)=\"deleteGuarantor()\" ></app-custom-botton-icon>\n        </p-header>\n        <p-column field=\"responsibility_level\" header=\"No\" [style]=\"{'width': '20%'}\" ></p-column>\n        <p-column field=\"f_namet\" header=\" Guarantor Name \"></p-column>\n\n      </p-dataTable>\n    </div>\n  </div>\n\n  <div class=\"col-md-10\">\n    <p-tabView>\n      <p-tabPanel header=\"Information\">\n        <app-ca-guarantor></app-ca-guarantor>\n      </p-tabPanel>\n      <p-tabPanel header=\"Address(TH)\">\n        <app-ca-guar-address-th></app-ca-guar-address-th>\n\n      </p-tabPanel>\n      <p-tabPanel header=\"Address(EN)\">\n        <app-ca-guar-address-en></app-ca-guar-address-en>\n\n      </p-tabPanel>\n      <p-tabPanel header=\"Card / Bank\" *ngIf=\"false\">\n        <app-ca-guar-card *ngIf=\"false\" ></app-ca-guar-card>\n      </p-tabPanel>\n      <p-tabPanel header=\"% Of Industry\"  *ngIf=\"false\" >\n        <app-ca-guar-percent-ind *ngIf=\"false\"></app-ca-guar-percent-ind>\n      </p-tabPanel>\n      <p-tabPanel header=\"Machine Location\"  *ngIf=\"false\" >\n        <app-ca-guar-machine *ngIf=\"false\"></app-ca-guar-machine>\n      </p-tabPanel>\n      <p-tabPanel header=\"Exposure\"  *ngIf=\"false\"  >\n        <app-ca-guar-exposure *ngIf=\"false\"></app-ca-guar-exposure>\n      </p-tabPanel>\n      <p-tabPanel header=\"Condition & Remark\"  *ngIf=\"false\"  >\n        <app-ca-guar-asia-condition *ngIf=\"false\"></app-ca-guar-asia-condition>\n      </p-tabPanel>\n    </p-tabView>\n  </div>\n</div>\n\n<!--dialog  Entity-->\n<app-entity-dialog #entity_dialog title=\"Guarantor\"\n                   (onEntitySelect)=\"getEntity($event)\"></app-entity-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guarantor-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaGuarantorTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_entity_dialog_entity_dialog_component__ = __webpack_require__("../../../../../src/app/main/mst/entity/entity-dialog/entity-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_guarantor__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-guarantor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CaGuarantorTabComponent = /** @class */ (function () {
    function CaGuarantorTabComponent(creditApplicationService, dataPipe) {
        this.creditApplicationService = creditApplicationService;
        this.dataPipe = dataPipe;
        this.listcaGuarantor = [];
    }
    CaGuarantorTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (caHead) {
            _this.listcaGuarantor = caHead.listcaguarantor;
            if ((_this.listcaGuarantor) && (_this.listcaGuarantor.length > 0)) {
                _this.onSelectGuarantor(_this.listcaGuarantor[0]);
            }
        });
    };
    CaGuarantorTabComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
    };
    ///////  add  &  select  Guarantor
    CaGuarantorTabComponent.prototype.openEntity = function () {
        this.entity_dialog.showDialog();
    };
    CaGuarantorTabComponent.prototype.getEntity = function (entityModel) {
        if (!this.listcaGuarantor) {
            console.log('Empty');
            this.listcaGuarantor = [];
        }
        var maxgua = this.listcaGuarantor.length; //  0,1,2,3
        this.listcaGuarantor = this.listcaGuarantor.concat([this.addGuarantor(entityModel, maxgua)]);
        this.creditApplicationService.caHead.listcaguarantor = this.listcaGuarantor;
        this.onSelectGuarantor(this.listcaGuarantor[maxgua]);
    };
    CaGuarantorTabComponent.prototype.addGuarantor = function (entityModel, maxGua) {
        console.log(entityModel);
        var newGuaran = new __WEBPACK_IMPORTED_MODULE_2__model_ca_guarantor__["a" /* caGuarantor */]();
        maxGua = maxGua + 1;
        newGuaran.com_code = entityModel.comCode;
        //newGuaran.ca_no    = this.creditApplicationService.caHead.ca_no ;
        newGuaran.ent_type = 'G';
        newGuaran.ent_code = entityModel.entCode;
        newGuaran.f_name = entityModel.fNameCode;
        newGuaran.f_namet = entityModel.fNameT;
        newGuaran.l_namet = entityModel.lNameT;
        newGuaran.f_name_e = entityModel.fNameECode;
        newGuaran.f_namee = entityModel.fNameE;
        newGuaran.l_namee = entityModel.lNameE;
        newGuaran.address = entityModel.address;
        newGuaran.zip = entityModel.zip;
        newGuaran.post_cd = entityModel.postCd;
        newGuaran.contract = entityModel.contract;
        newGuaran.address_eng = entityModel.addressEng;
        newGuaran.contract_e = entityModel.contractEng;
        newGuaran.tel = entityModel.tel;
        newGuaran.new_card_no = entityModel.newCardNo;
        newGuaran.last_usr = entityModel.lastUsr;
        newGuaran.nationality_code = entityModel.nationalityCode;
        if (entityModel.birthD) {
            newGuaran.birth_d = entityModel.birthD;
        }
        newGuaran.bus_detail = entityModel.busDetail;
        newGuaran.address_eng2 = entityModel.addressEng2;
        newGuaran.fax_current = entityModel.faxCurrent;
        newGuaran.contract_tel = entityModel.contract;
        newGuaran.grp_code = entityModel.grpCode;
        newGuaran.mobile_phone = entityModel.mobilePhone;
        newGuaran.mobile_phone2 = entityModel.mobilePhone2;
        newGuaran.mobile_phone3 = entityModel.mobilePhone3;
        newGuaran.net_worth_year = entityModel.netWorthYear;
        newGuaran.net_worth_amt = entityModel.netWorthAmt;
        newGuaran.regis_capital = entityModel.regisCapital;
        newGuaran.paid_up_capital = entityModel.paidUpCapital;
        newGuaran.cluster_ind = entityModel.clusterInd;
        newGuaran.add_c = entityModel.addC;
        newGuaran.add_c_eng = entityModel.addCEng;
        newGuaran.add_c_eng2 = entityModel.addCEng2;
        newGuaran.add_m = entityModel.addM;
        newGuaran.add_m_eng = entityModel.addMEng;
        newGuaran.add_m_eng2 = entityModel.addMEng2;
        newGuaran.add_o = entityModel.addO;
        newGuaran.add_o_eng = entityModel.addOEng;
        newGuaran.add_o_eng2 = entityModel.addOEng2;
        newGuaran.address_cont_cs = entityModel.addressContCs;
        newGuaran.ages = entityModel.ages;
        newGuaran.authorize_by_e = entityModel.authorizeE;
        newGuaran.authorize_by_t = entityModel.authorizeT;
        newGuaran.branch_no = entityModel.branchNo;
        newGuaran.bus_ty = entityModel.busTy;
        newGuaran.bus_vat_flg = entityModel.busVatFlg;
        newGuaran.business_type = entityModel.businessType;
        newGuaran.card_by = entityModel.cardBy;
        if (entityModel.cardExpireDate) {
            newGuaran.card_expire_date = entityModel.cardExpireDate;
        }
        if (entityModel.cardIssueDate) {
            newGuaran.card_issue_date = entityModel.cardIssueDate;
        }
        newGuaran.card_no = entityModel.cardNo;
        newGuaran.card_type = entityModel.cardType;
        newGuaran.chairman = entityModel.chairMan;
        newGuaran.confirm_statment_flg = entityModel.confirmStatmentFlag;
        newGuaran.currency_code = entityModel.currencyCode;
        newGuaran.email_address = entityModel.emailAddress;
        newGuaran.ent_ty = entityModel.entTy;
        if (entityModel.establishDate) {
            newGuaran.establish_date = entityModel.establishDate;
        }
        newGuaran.fax_office = entityModel.faxOffice;
        newGuaran.high = entityModel.high;
        newGuaran.highest = entityModel.highest;
        newGuaran.highest_hp = entityModel.highestHp;
        newGuaran.highest_ls = entityModel.highestLs;
        newGuaran.ind_ty = entityModel.indTy;
        newGuaran.loc_ty = entityModel.locTy;
        newGuaran.mkt_bgpl = entityModel.mktBgpl;
        newGuaran.mname = entityModel.mName;
        newGuaran.near = entityModel.near;
        newGuaran.near_eng = entityModel.nearEng;
        newGuaran.near_o = entityModel.nearO;
        newGuaran.near_o_eng = entityModel.nearOEng;
        newGuaran.occupa = entityModel.occupa;
        newGuaran.office_department = entityModel.officeDepartment;
        newGuaran.office_name = entityModel.officeName;
        newGuaran.other_income = entityModel.otherIncome;
        newGuaran.person_collect_billing = entityModel.personCollectBilling;
        newGuaran.place_billing = entityModel.placeBilling;
        newGuaran.place_collect = entityModel.placeCollect;
        newGuaran.posi = entityModel.posi;
        newGuaran.post_cd_c = entityModel.postCdC;
        newGuaran.post_cd_m = entityModel.postCdM;
        newGuaran.post_cd_o = entityModel.postCdO;
        newGuaran.prv_cont = entityModel.prvCont;
        newGuaran.salary_per_year = entityModel.salaryPerYear;
        newGuaran.sales_amt = entityModel.salesAmt;
        newGuaran.sales_year = entityModel.salesYear;
        newGuaran.sex = entityModel.sex;
        newGuaran.spous_ages = entityModel.spousAges;
        newGuaran.spous_occup = entityModel.spousOccup;
        newGuaran.spous_office_department = entityModel.spousOfficeDepartment;
        newGuaran.spous_office_name = entityModel.spousOfficeName;
        newGuaran.spous_other_income = entityModel.spousOtherIncome;
        newGuaran.spous_posi = entityModel.spousPosi;
        newGuaran.spous_salary = entityModel.spousSalary;
        newGuaran.spous_tel = entityModel.spousTel;
        newGuaran.spouse_card_no = entityModel.spousCardNo;
        newGuaran.spouse_card_type = entityModel.spousCardType;
        newGuaran.status_m = entityModel.statusM;
        newGuaran.tel_card = entityModel.telCard;
        newGuaran.tel_o = entityModel.telO;
        newGuaran.web_site = entityModel.webSite;
        newGuaran.weight = entityModel.weight;
        newGuaran.zip_c = entityModel.zipC;
        newGuaran.zip_m = entityModel.zipM;
        newGuaran.zip_o = entityModel.zipO;
        newGuaran.guar_code = entityModel.entCode;
        newGuaran.ref_code = this.creditApplicationService.caHead.ca_no;
        // newGuaran.remark = entityModel.rem
        // newGuaran.relation_with_cus = entityModel.rele
        newGuaran.seq_no = maxGua;
        newGuaran.business_detail = entityModel.busDetail;
        // newGuaran.ca_condition = entityModel.caC
        // newGuaran.ca_remark;
        // newGuaran.connect_since =  entityModel.con
        // newGuaran.cus_status  = entityModel.
        newGuaran.highest_amt = entityModel.highest;
        // newGuaran.ncb_run_no  = entityModel.
        // newGuaran.org_crd_grd =  entityModel.org
        // newGuaran.prim_scr =  entityModel.pri
        // newGuaran.prim_scr_rsult =
        // newGuaran.req_run_no =
        newGuaran.responsibility_level = maxGua;
        // newGuaran.score =
        // newGuaran.upd_crd_grd =
        // newGuaran.ver_emp_cd =
        // newGuaran.ver_opn =
        // newGuaran.bl_flag =
        // newGuaran.title_eng =
        // newGuaran.title_thi =
        newGuaran.card_type_desc = entityModel.cardTypeDesc;
        // newGuaran.bus_detail_desc = entityModel.bus
        newGuaran.zip_desc = entityModel.zipCDesc;
        // newGuaran.grp_name =  entityModel.grpCode ;
        // newGuaran.bus_ty_desc =
        newGuaran.regis_capital_mb = entityModel.regisCapital;
        newGuaran.paid_up_capital_mb = entityModel.paidUpCapital;
        newGuaran.sales_amt_mb = entityModel.salesAmt;
        newGuaran.net_worth_amt_mb = entityModel.netWorthAmt;
        newGuaran.zip_c_desc = entityModel.zipCDesc;
        newGuaran.zip_o_desc = entityModel.zipODesc;
        newGuaran.zip_m_desc = entityModel.zipMDesc;
        return newGuaran;
    };
    CaGuarantorTabComponent.prototype.onSelectGuarantor = function (selectGuarantor) {
        this.selectGuarantor = selectGuarantor;
        this.creditApplicationService.setSelectGuarantor(selectGuarantor);
    };
    CaGuarantorTabComponent.prototype.deleteGuarantor = function () {
        if ((this.selectGuarantor) && (this.listcaGuarantor)) {
            var delRow = this.listcaGuarantor.indexOf(this.selectGuarantor);
            this.listcaGuarantor.splice(delRow, 1);
            this.listcaGuarantor = this.listcaGuarantor.slice();
            this.creditApplicationService.caHead.listcaguarantor = this.listcaGuarantor;
            if (this.listcaGuarantor.length > 0) {
                this.onSelectGuarantor(this.listcaGuarantor[0]);
            }
            else {
                this.creditApplicationService.setSelectGuarantor(new __WEBPACK_IMPORTED_MODULE_2__model_ca_guarantor__["a" /* caGuarantor */]());
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("entity_dialog"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__entity_entity_dialog_entity_dialog_component__["a" /* EntityDialogComponent */])
    ], CaGuarantorTabComponent.prototype, "entity_dialog", void 0);
    CaGuarantorTabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-guarantor-tab',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guarantor-tab.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__credit_application_service__["a" /* creditApplicationService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"]])
    ], CaGuarantorTabComponent);
    return CaGuarantorTabComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guarantor/ca-guarantor.component.html":
/***/ (function(module, exports) {

module.exports = " <p-panel header=\"Guarantor Information\">\n    <div class=\"main-container\">\n      <div class=\"d-flex\">\n        <div class=\"flex-md-column col-md-3 \">\n          <div class=\"form-group\">\n            <label> Customer Code</label>\n            <input type=\"text\"  class=\"form-control\"  disabled [(ngModel)]=\"caGua.ent_code\" >\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-6 offset-md-3 \">\n          <div class=\"form-group\">\n            <label> Company </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.com_code\"  disabled >\n          </div>\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"flex-md-column col-md-3 \">\n          <div class=\"form-group\">\n            <label> Intial </label>\n            <select class=\"form-control\"\n                    [ngModel]=\"caGua?.f_name_e\"\n                    (ngModelChange)=\"caGua.f_name_e=$event\">\n              <option></option>\n              <option *ngFor=\"let ansFNME of listFNME\"\n                      [selected]=\"ansFNME?.id_code == caGua?.f_name_e\"\n                      [value]=\"ansFNME?.id_code\">{{ansFNME?.remark}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-3 offset-md-3 \">\n          <div class=\"form-group\">\n            <label>Intial(T)</label>\n            <select class=\"form-control\"\n                    [ngModel]=\"caGua?.f_name\"\n                    (ngModelChange)=\"caGua.f_name=$event\">\n              <option></option>\n              <option *ngFor=\"let ansFNMT of listFNMT\"\n                      [selected]=\"ansFNMT?.id_code == caGua?.f_name\"\n                      [value]=\"ansFNMT?.id_code\">{{ansFNMT?.remark}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-3\">\n          <div class=\"form-group\">\n            <label> Branch No. </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.branch_no\"  >\n          </div>\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label> Name (T) </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.f_namet\"  >\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label> Last Name (T)</label>\n            <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caGua.l_namet\"  >\n          </div>\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label> Name (E)</label>\n            <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"caGua.f_namee\" >\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label> Last Name (E)</label>\n            <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"caGua.l_namee\" >\n          </div>\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"flex-md-column col-md-2 \">\n          <div class=\"form-group\">\n            <label>Birth/Register Date</label>\n            <p-calendar dateFormat=\"dd/mm/yy\" class=\"my-1\" [(ngModel)]=\"caGua.birth_d\"\n                        placeholder=\"dd/mm/yyyy\"></p-calendar>\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-2 \">\n          <div class=\"form-group\">\n            <label>  Establishment Date</label>\n            <p-calendar dateFormat=\"dd/mm/yy\" class=\"my-1\"  [(ngModel)]=\"caGua.establish_date\"\n                        placeholder=\"dd/mm/yyyy\"></p-calendar>\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-6 offset-2 \">\n          <div class=\"form-group\">\n            <label>Registered Capital</label>\n            <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"caGua.regis_capital\" >\n          </div>\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label> Salary/Year</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.salary_per_year\" >\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label> Card No. </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.new_card_no\"   >\n          </div>\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label> Card Type</label>\n            <select class=\"form-control\"\n                    [ngModel]=\"caGua?.card_type\"\n                    (ngModelChange)=\"caGua.card_type=$event\">\n              <option></option>\n              <option *ngFor=\"let ansCARD of listCRD\"\n                      [selected]=\"ansCARD?.id_code == caGua?.card_type\"\n                      [value]=\"ansCARD?.id_code\">{{ansCARD?.remark}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label>Issue At </label>\n            <input type=\"text\" class=\"form-control\"   >\n          </div>\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"flex-md-column col-md-2 \">\n          <div class=\"form-group\">\n            <label>Issue Date</label>\n            <p-calendar dateFormat=\"dd/mm/yy\" class=\"my-1\"  [(ngModel)]=\"caGua.card_issue_date\"\n                        placeholder=\"dd/mm/yyyy\"></p-calendar>\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-2 \">\n          <div class=\"form-group\">\n            <label>Issue Expiry Date</label>\n            <p-calendar dateFormat=\"dd/mm/yy\" class=\"my-1\" [(ngModel)]=\"caGua.card_expire_date\"\n                        placeholder=\"dd/mm/yyyy\"></p-calendar>\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-3 offset-2\">\n          <div class=\"form-group\">\n            <label>Sex</label>\n            <select class=\"form-control\"\n                    [ngModel]=\"caGua?.sex\"\n                    (ngModelChange)=\"caGua.sex=$event\" >\n               <option> </option>\n               <option [selected]=\"caGua?.sex == 'M'\"  [value]=\"'M'\" > Male</option>\n               <option [selected]=\"caGua?.sex == 'F'\"  [value]=\"'F'\"> Female</option>\n\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label>Marital status</label>\n            <input type=\"text\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label>Nationality </label>\n            <select class=\"form-control\"\n                    [ngModel]=\"caGua?.nationality_code\"\n                    (ngModelChange)=\"caGua.nationality_code=$event\">\n              <option></option>\n              <option *ngFor=\"let ans of listNTY\"\n                      [selected]=\"ans?.id_code == caGua?.nationality_code\"\n                      [value]=\"ans?.id_code\">{{ans?.remark}}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label>(Authorized Officer)Signed By THAI </label>\n            <input type=\"text\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label>(Authorized Officer)Signed By ENG </label>\n            <input type=\"text\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"flex-md-column col-md-12 \">\n          <div class=\"form-group\">\n            <label> Authorized Ondition</label>\n            <input type=\"text\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label> Customer Group </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"caGua.grp_code\" >\n          </div>\n        </div>\n        <div class=\"flex-md-column col-md-6 \">\n          <div class=\"form-group\">\n            <label> Tel. </label>\n            <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"caGua.tel\"  >\n          </div>\n        </div>\n      </div>\n    </div>\n  </p-panel>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guarantor/ca-guarantor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaGuarantorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_guarantor__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-guarantor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaGuarantorComponent = /** @class */ (function () {
    function CaGuarantorComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }
    CaGuarantorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caGua = new __WEBPACK_IMPORTED_MODULE_2__model_ca_guarantor__["a" /* caGuarantor */]();
        this.subscripData = this.creditApplicationService.eventSelectGuarantor.subscribe(function (selectGua) {
            _this.caGua = selectGua;
        });
        this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(function (obj) {
            //console.log('subscribe');
            _this.listFNMT = _this.creditApplicationService.listFNM;
            _this.listFNME = _this.creditApplicationService.listFNME;
            _this.listCRD = _this.creditApplicationService.listCRD;
            _this.listNTY = _this.creditApplicationService.listNTY;
        });
    };
    CaGuarantorComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaGuarantorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-guarantor',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guarantor/ca-guarantor.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaGuarantorComponent);
    return CaGuarantorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-imgdoc/imgdoc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row\">\n  <div class=\"flex-md-column col-md-3\">\n    <div class=\"form-group\">\n      <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                   [responsive]=\"true\">\n        <p-column field=\"f1\" header=\" ประเภท \"></p-column>\n        <p-footer>\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n          </div>\n        </p-footer>\n      </p-dataTable>\n    </div>\n  </div>\n  <!--<button pButton type=\"button\" (click)=\"fullscreen = true\" icon=\"fa-arrows-alt\" panelHeight=\"100%\"></button>-->\n  <!--<p-sidebar [(visible)]=\"fullscreen\" [fullScreen]=\"true\" [baseZIndex]=\"10000\">-->\n  <p-lightbox class=\"form-control\" [images]=\"images\" id=\"details\" x-placement=\"100\"></p-lightbox>\n  <!--</p-sidebar>-->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-imgdoc/imgdoc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaImgdocComponent; });
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

var CaImgdocComponent = /** @class */ (function () {
    function CaImgdocComponent() {
    }
    CaImgdocComponent.prototype.ngOnInit = function () {
        this.images = [];
        this.images.push({ source: './assets/img/1.jpg', height: '100px', alt: 'Description for Image 1', title: 'Title 1', thumbnail: './assets/img/1 - Copy.jpg' });
        this.images.push({ source: './assets/img/2.jpg', alt: 'Description for Image 2', title: 'Title 2', thumbnail: './assets/img/2 - Copy.jpg' });
        this.images.push({ source: './assets/img/3.jpg', alt: 'Description for Image 3', title: 'Title 3', thumbnail: './assets/img/3 - Copy.jpg' });
        this.images.push({ source: './assets/img/4.jpg', alt: 'Description for Image 4', title: 'Title 4', thumbnail: './assets/img/4 - Copy.jpg' });
        this.images.push({ source: './assets/img/1.jpg', alt: 'Description for Image 1', title: 'Title 1', thumbnail: './assets/img/1 - Copy.jpg' });
        this.images.push({ source: './assets/img/2.jpg', alt: 'Description for Image 2', title: 'Title 2', thumbnail: './assets/img/2 - Copy.jpg' });
        this.images.push({ source: './assets/img/3.jpg', alt: 'Description for Image 3', title: 'Title 3', thumbnail: './assets/img/3 - Copy.jpg' });
        this.images.push({ source: './assets/img/4.jpg', alt: 'Description for Image 4', title: 'Title 4', thumbnail: './assets/img/4 - Copy.jpg' });
        this.images.push({ source: './assets/img/1.jpg', alt: 'Description for Image 1', title: 'Title 1', thumbnail: './assets/img/1 - Copy.jpg' });
        this.images.push({ source: './assets/img/2.jpg', alt: 'Description for Image 2', title: 'Title 2', thumbnail: './assets/img/2 - Copy.jpg' });
        this.images.push({ source: './assets/img/3.jpg', alt: 'Description for Image 3', title: 'Title 3', thumbnail: './assets/img/3 - Copy.jpg' });
        this.images.push({ source: './assets/img/4.jpg', alt: 'Description for Image 4', title: 'Title 4', thumbnail: './assets/img/4 - Copy.jpg' });
        this.images.push({ source: './assets/img/1.jpg', alt: 'Description for Image 1', title: 'Title 1', thumbnail: './assets/img/1 - Copy.jpg' });
        this.images.push({ source: './assets/img/2.jpg', alt: 'Description for Image 2', title: 'Title 2', thumbnail: './assets/img/2 - Copy.jpg' });
        this.images.push({ source: './assets/img/3.jpg', alt: 'Description for Image 3', title: 'Title 3', thumbnail: './assets/img/3 - Copy.jpg' });
        this.images.push({ source: './assets/img/4.jpg', alt: 'Description for Image 4', title: 'Title 4', thumbnail: './assets/img/4 - Copy.jpg' });
        this.images.push({ source: './assets/img/1.jpg', alt: 'Description for Image 1', title: 'Title 1', thumbnail: './assets/img/1 - Copy.jpg' });
        this.images.push({ source: './assets/img/2.jpg', alt: 'Description for Image 2', title: 'Title 2', thumbnail: './assets/img/2 - Copy.jpg' });
        this.images.push({ source: './assets/img/3.jpg', alt: 'Description for Image 3', title: 'Title 3', thumbnail: './assets/img/3 - Copy.jpg' });
        this.images.push({ source: './assets/img/4.jpg', alt: 'Description for Image 4', title: 'Title 4', thumbnail: './assets/img/4 - Copy.jpg' });
        this.images.push({ source: './assets/img/1.jpg', alt: 'Description for Image 1', title: 'Title 1', thumbnail: './assets/img/1 - Copy.jpg' });
        this.images.push({ source: './assets/img/2.jpg', alt: 'Description for Image 2', title: 'Title 2', thumbnail: './assets/img/2 - Copy.jpg' });
        this.images.push({ source: './assets/img/3.jpg', alt: 'Description for Image 3', title: 'Title 3', thumbnail: './assets/img/3 - Copy.jpg' });
        this.images.push({ source: './assets/img/4.jpg', alt: 'Description for Image 4', title: 'Title 4', thumbnail: './assets/img/4 - Copy.jpg' });
        this.images.push({ source: './assets/img/1.jpg', alt: 'Description for Image 1', title: 'Title 1', thumbnail: './assets/img/1 - Copy.jpg' });
        this.images.push({ source: './assets/img/2.jpg', alt: 'Description for Image 2', title: 'Title 2', thumbnail: './assets/img/2 - Copy.jpg' });
        this.images.push({ source: './assets/img/3.jpg', alt: 'Description for Image 3', title: 'Title 3', thumbnail: './assets/img/3 - Copy.jpg' });
        this.images.push({ source: './assets/img/4.jpg', alt: 'Description for Image 4', title: 'Title 4', thumbnail: './assets/img/4 - Copy.jpg' });
    };
    CaImgdocComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-imgdoc',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-imgdoc/imgdoc.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CaImgdocComponent);
    return CaImgdocComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-opinion/opinion.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Opinion\">\n  <div class=\"main-container\">\n    <div class=\"d-flex\">\n      <div class=\"flex-column col-md-8\">\n        <div class=\"form-group\">\n          <div class=\"form-inline\">\n            <label> การวิเคราะห์ Credit &nbsp;</label>\n            <input class=\"form-group\">\n            <button type=\"button\" class=\"my-2 mx-2\" pButton style=\"float:left\" (click)=\"showDialogToAdd()\"\n                    label=\"Ver. Report\"></button>\n            <button type=\"button\" class=\"my-2 mx-2\" pButton style=\"float:left\" (click)=\"showDialogToAdd()\"\n                    label=\"Enquiry NCB\"></button>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"flex-column col-md-12\">\n            <div class=\"form-group\">\n              <label> Characteristic </label>\n              <textarea class=\"form-control\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"flex-column col-md-12\">\n            <div class=\"form-group\">\n              <label> Capacity </label>\n              <textarea class=\"form-control\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"flex-column col-md-12\">\n            <div class=\"form-group\">\n              <label> Capital </label>\n              <textarea class=\"form-control\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"flex-column col-md-12\">\n            <div class=\"form-group\">\n              <label> Collateral </label>\n              <textarea class=\"form-control\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"flex-column col-md-12\">\n            <div class=\"form-group\">\n              <label> Condition </label>\n              <textarea class=\"form-control\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"flex-column col-md-12\">\n            <div class=\"form-group\">\n              <label> สรุปผลของการ Opinion </label>\n              <textarea class=\"form-control\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"flex-column col-md-4\">\n        <p-panel header=\"Result\">\n          <div class=\"form-group\">\n            <div class=\"flex-md-column col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"radio\" name=\"bt\" value=\"N\"> Accept\n                <input type=\"radio\" name=\"bt\" value=\"Y\"> Reject\n              </div>\n            </div>\n          </div>\n        </p-panel>\n      </div>\n    </div>\n    <hr>\n    <div class=\"d-flex\">\n      <div class=\"flex-column col-md-8\">\n        <div class=\"flex-column col-md-12\">\n          <div class=\"form-group\">\n            <label>สรุปความเห็นอนผู้อนุมัติ </label>\n            <textarea class=\"form-control\"></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"flex-column col-md-4\">\n        <div class=\"flex-column col-md-12\">\n          <div class=\"form-group\">\n            <label> เหตุผลการ Reject</label>\n            <textarea class=\"form-control\"></textarea>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</p-panel>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-opinion/opinion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaOpinionComponent; });
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

var CaOpinionComponent = /** @class */ (function () {
    function CaOpinionComponent() {
    }
    CaOpinionComponent.prototype.ngOnInit = function () {
    };
    CaOpinionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-opinion',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-opinion/opinion.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CaOpinionComponent);
    return CaOpinionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"General Infomation\">\n  <div class=\"d-flex\">\n    <div class=\"form-group col-md-4\">\n      <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n                   [responsive]=\"true\">\n        <p-column field=\"f1\" header=\" เอกสารแนบ \"></p-column>\n\n        <p-footer>\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n          </div>\n        </p-footer>\n      </p-dataTable>\n    </div>\n    <div class=\"form-group col-md-8\">\n      <button type=\"button\" pButton style=\"float:left\" (click)=\"showDialogToAdd()\"\n              label=\"Attach Files\"></button>\n      <br><br>\n      <button type=\"button\" pButton style=\"float:left\" (click)=\"showDialogToAdd()\"\n              label=\"Refresh Grading\"></button>\n      <br><br><label style=\"color: grey\">Credit Analist Only</label>\n\n    </div>\n  </div>\n</p-panel>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaProfileComponent; });
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

var CaProfileComponent = /** @class */ (function () {
    function CaProfileComponent() {
    }
    CaProfileComponent.prototype.ngOnInit = function () {
    };
    CaProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-profile',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-profile/profile.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CaProfileComponent);
    return CaProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-recommend/ca-recommend.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row  ml-2\" >\n   <div class=\"col-6 border-isa\">\n     <label class=\"pl-3\" > Recommendation CA </label>\n     <div class=\"form-group col-12\">\n       <div class=\"form-control col-12\">\n         <input type=\"radio\" name=\"rec_agr_flag\" value=\"A\"  [(ngModel)]=\"myCaHead.rec_agr_flag\" (ngModelChange) = \"clearCondition()\"> Agree with the proposal\n         <input type=\"radio\" name=\"rec_agr_flag\" value=\"AC\" [(ngModel)]=\"myCaHead.rec_agr_flag\" (ngModelChange) = \"clearCondition()\"> Agree with conditions\n         <input type=\"radio\" name=\"rec_agr_flag\" value=\"D\"  [(ngModel)]=\"myCaHead.rec_agr_flag\" (ngModelChange) = \"clearCondition()\"> Disagree with the proposal &nbsp;\n         <input type=\"radio\" name=\"rec_agr_flag\" value=\"R\"  [(ngModel)]=\"myCaHead.rec_agr_flag\" (ngModelChange) = \"clearCondition()\"> Return\n       </div>\n     </div>\n     <div class=\"form-group col-12\">\n       <div class=\"form-inline\">\n         <label class=\"my-1\"> Condition Template </label>\n       </div>\n       <p-dataTable [value]=\"listReCommendation\"\n                    selectionMode=\"single\"\n                    [(selection)]=\"selectCond\"\n                    (onRowDblclick)=\"onDbClickCondition(selectCond)\"\n                    rows=\"15\"\n                    [responsive]=\"true\">\n         <p-column field=\"remark\" header=\" Condition Detail \"></p-column>\n         <p-footer>\n           <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n           </div>\n         </p-footer>\n       </p-dataTable>\n     </div>\n     <div class=\"form-group col-12\">\n      <textarea class=\"form-control\"\n                [disabled] = \"myCaHead.rec_agr_flag == 'A'\"\n                rows=\"10\" [(ngModel)] = \"myCaHead.rec_cond\"  ></textarea>\n     </div>\n   </div>\n\n  <div class=\"col-6 border-isa\" >\n    <label class=\"pl-3\"> Recommendation Analyst </label>\n    <div class=\"form-group col-12\">\n      <div class=\"form-control col-12\">\n        <input type=\"radio\" name=\"ap_rec_agr_flag\" value=\"A\"  [(ngModel)]=\"myCaHead.ap_rec_agr_flag\" [disabled] = \"true\" > Agree with the proposal\n        <input type=\"radio\" name=\"ap_rec_agr_flag\" value=\"AC\" [(ngModel)]=\"myCaHead.ap_rec_agr_flag\" [disabled] = \"true\"> Agree with conditions\n        <input type=\"radio\" name=\"ap_rec_agr_flag\" value=\"D\"  [(ngModel)]=\"myCaHead.ap_rec_agr_flag\" [disabled] = \"true\"> Disagree with the proposal &nbsp;\n        <input type=\"radio\" name=\"ap_rec_agr_flag\" value=\"R\"  [(ngModel)]=\"myCaHead.ap_rec_agr_flag\" [disabled] = \"true\"> Return\n      </div>\n    </div>\n    <div class=\"form-group col-12\">\n      <textarea class=\"form-control\"\n                [disabled] = \"true\"\n                rows=\"10\" [(ngModel)] = \"myCaHead.ap_rec_cond\"  ></textarea>\n    </div>\n\n    <div class=\"form-group col-12\">\n      <input appMyCurrency\n             class=\"form-control\"\n             [value]=\"myCaHead.ap_rec_amount\" (change)=\"myCaHead.ap_rec_amount = $event.target.value\"\n      />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-recommend/ca-recommend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaRecommendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ca_head__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-head.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaRecommendComponent = /** @class */ (function () {
    function CaRecommendComponent(creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
        this.listReCommendation = [];
        this.myCaHead = new __WEBPACK_IMPORTED_MODULE_2__model_ca_head__["a" /* caHead */]();
    }
    CaRecommendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripData = this.creditApplicationService.eventCaHead.subscribe(function (caHead) {
            // console.log('-------- Recommend -------');
            // console.log(caHead);
            _this.myCaHead = caHead;
            _this.listReCommendation = _this.creditApplicationService.listCOND_CA;
        });
    };
    CaRecommendComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CaRecommendComponent.prototype.clearCondition = function () {
        this.myCaHead.rec_cond = '';
    };
    CaRecommendComponent.prototype.onDbClickCondition = function (select) {
        if (this.myCaHead.rec_cond.length > 1) {
            this.myCaHead.rec_cond += '\n' + select.remark;
        }
        else {
            this.myCaHead.rec_cond += select.remark;
        }
    };
    CaRecommendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-recommend',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-recommend/ca-recommend.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__credit_application_service__["a" /* creditApplicationService */]])
    ], CaRecommendComponent);
    return CaRecommendComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-ref/ca-ref.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"ผู้รับเงินแทน / บุคคลอ้างอิง\">\n  <div class=\"d-flex col-md-12\">\n    <div class=\"form-group\">\n      <p-panel header=\"ประเภทผู้ชำระ\">\n        <div class=\"form-inline\" style=\"padding: 5px\">\n          <input type=\"checkbox\" name=\"direct_payment\" [checked]=\"data?.p1 === 'Y'\"\n          >\n          :\n          ผู้รับเงินแทน\n          <span></span>\n          <br>\n          <input type=\"checkbox\" name=\"progress_payment\" [checked]=\"data?.p2 === 'Y'\"\n          >\n          : บุคคลอ้างอิง\n          <span></span>\n        </div>\n      </p-panel>\n    </div>\n  </div>\n  <div class=\"d-flex col-md-12\">\n\n    <div class=\"form-group col-md-3\">\n      <label>ผู้รับชำระเงินแทน</label>\n      <input class=\"form-control\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label>ความสัมพันธ์กับผู้เช่าซื้อ</label>\n      <input class=\"form-control\">\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label>ที่อยู่</label>\n      <input class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"d-flex col-md-12\">\n    <div class=\"form-group col-md-3\">\n      <label>โทรศัพท์</label>\n      <input class=\"form-control\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label>โทรศัพท์มือถือ (1)</label>\n      <input class=\"form-control\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label>(2)</label>\n      <input class=\"form-control\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label>(3)</label>\n      <input class=\"form-control\">\n    </div>\n  </div>\n</p-panel>\n<div class=\"form-group\">\n  <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n               [responsive]=\"true\">\n    <p-column field=\"f1\" header=\"ประเภทผู้รับชำระ\"></p-column>\n    <p-column field=\"f2\" header=\"ชื่อผู้รับชำระเงินแทน/ บุคคลอ้างอิง\"></p-column>\n    <p-column field=\"f3\" header=\"ชื่อผู้ค้ำ\"></p-column>\n    <p-column field=\"f4\" header=\"ลำดับความรับผิดชอบ\"></p-column>\n    <p-footer>\n      <!--<div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\n                label=\"Add\"></button>\n      </div>-->\n    </p-footer>\n  </p-dataTable>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-ref/ca-ref.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaRefComponent; });
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

var CaRefComponent = /** @class */ (function () {
    function CaRefComponent() {
    }
    CaRefComponent.prototype.ngOnInit = function () {
    };
    CaRefComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-ref',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-ref/ca-ref.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CaRefComponent);
    return CaRefComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-subca/ca-subca.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\n<div class=\"form-group flex-md-column col-md-4\">\n  <p-dataTable selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\" rows=\"15\"\n               [responsive]=\"true\">\n    <p-column field=\"f1\" header=\" ประเภท \"></p-column>\n    <p-column field=\"f2\" header=\" ยี่ห้อ \"></p-column>\n    <p-column field=\"f3\" header=\" จำนวน \"></p-column>\n    <p-column field=\"f4\" header=\" Finance Amt. \"></p-column>\n    <p-footer>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n      </div>\n    </p-footer>\n  </p-dataTable>\n\n</div>\n<div class=\"flex-md-column col-md-8 \">\n  <p-panel header=\"Pricing\">\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-12\">\n        <div class=\"form-group\">\n          <label> Asset Amt. (ราคารถ + ราคาอุปกรณ์ + ประกันชีวิต) </label>\n          <div class=\"form-inline\">\n            <input type=\"text\" class=\"form-control col-md-6 text-right\">\n            <input type=\"checkbox\" [checked]=\"data?.vat === 'Y'\"\n                   (change)=\"$event.target.checked ? (data.vat = 'Y') : (data.vat = 'N')\" class=\"mx-1\"> Asset With\n            VAT\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex-md-column col-md-12 \">\n      <div class=\"form-group\">\n        <label> Asset Desc. </label>\n        <input type=\"text\" class=\"form-control\">\n      </div>\n    </div>\n    <div class=\"flex-md-column col-md-12 \">\n      <div class=\"form-group\">\n        <label> Accessories </label>\n        <input type=\"text\" class=\"form-control\">\n      </div>\n    </div>\n    <div class=\"flex-md-column col-md-6 \">\n      <div class=\"form-group\">\n        <label> Accessories Amt. </label>\n        <input currencyMask\n               class=\"form-control\"\n               [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>\n      </div>\n    </div>\n    <div class=\"form-group col-md-6 d-flex\">\n      <div class=\"mt-radio-inline col-md-6\" style=\"padding: 5px;border: solid;border-width:thin;border-color:#dfdfdf\">\n        <input type=\"radio\" name=\"pay_status\" value=\"bg\"> Beginning\n        <br>\n        <input type=\"radio\" name=\"pay_status\" value=\"end\"> Ending\n      </div>\n      &nbsp;\n      <div class=\"mt-radio-inline col-md-6\" style=\"padding: 5px;border: solid;border-width:thin;border-color:#dfdfdf\">\n        <input type=\"radio\" name=\"pay_mthd\" value=\"Stra\"> Straight Payment\n        <br>\n        <input type=\"radio\" name=\"pay_mthd\" value=\"Step\"> Step Payment\n        <br>\n      </div>\n    </div>\n\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label> Down Payment</label>\n          <div class=\"form-inline\">\n            <input currencyMask\n                   class=\"form-control\"\n                   [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>&nbsp;(Baht.)\n          </div>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label> &nbsp; </label>\n          <div class=\"form-inline\">\n            <input currencyMask\n                   class=\"form-control\"\n                   [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>&nbsp;(%)\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label> Down Chassis</label>\n          <div class=\"form-inline\">\n            <input currencyMask\n                   class=\"form-control\"\n                   [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>&nbsp;(Baht.)\n          </div>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label> &nbsp; </label>\n          <div class=\"form-inline\">\n            <input currencyMask\n                   class=\"form-control\"\n                   [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>&nbsp;(%)\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label> Com Amt. (Exc. Vat)</label>\n          <div class=\"form-inline\">\n            <input currencyMask\n                   class=\"form-control\"\n                   [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>&nbsp;(Baht.)\n          </div>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label> &nbsp; </label>\n          <div class=\"form-inline\">\n            <input currencyMask\n                   class=\"form-control\"\n                   [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\"/>&nbsp;(%)\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <label>Est. Disb. Date</label>\n        <div class=\"form-group\">\n          <p-calendar dateFormat=\"dd/mm/yy\" class=\"my-1\"></p-calendar>\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <label> Est. First. Date </label>\n        <div class=\"form-group\">\n          <p-calendar dateFormat=\"dd/mm/yy\" class=\"my-1\"></p-calendar>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label> Term </label>\n          <input type=\"text\" class=\"form-control text-right\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label> Flat Rate </label>\n          <input type=\"text\" class=\"form-control text-right\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label> Net Flat Rate</label>\n          <input type=\"text\" class=\"form-control text-right\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label> Finance Amt. </label>\n          <input type=\"text\" class=\"form-control text-right\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label> Gross IRR </label>\n          <input type=\"text\" class=\"form-control text-right\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label> Net IRR </label>\n          <input type=\"text\" class=\"form-control text-right\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label> Installment Amt.</label>\n          <input type=\"text\" class=\"form-control text-right\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label> Vat. </label>\n          <input type=\"text\" class=\"form-control text-right\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-4\">\n        <div class=\"form-group\">\n          <label>Net Installment Amt.</label>\n          <input type=\"text\" class=\"form-control text-right\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-12\">\n        <div class=\"form-group\">\n          <label> ประเภทสัญญา </label>\n          <div class=\"form-inline\">\n            <input type=\"text\" class=\"form-control col-md-6\">\n            <input type=\"checkbox\" [checked]=\"data?.vat === 'Y'\"\n                   (change)=\"$event.target.checked ? (data.vat = 'Y') : (data.vat = 'N')\" class=\"mx-1\"> PDC\n            <input type=\"text\" class=\"form-control col-md-3 m-2 \"> ฉบับ\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label> ประเภทรถ</label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label> รุ่นรถ</label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-9\">\n        <div class=\"form-group\">\n          <label> ยี่ห้อ</label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-12\">\n        <div class=\"form-group\">\n          <label> ลักษณะรถ </label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>ปีรถ</label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"flex-md-column col-md-6\">\n        <div class=\"form-group\">\n          <label>จำนวน (คัน)</label>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n  </p-panel>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/ca-subca/ca-subca.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaSubcaComponent; });
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

var CaSubcaComponent = /** @class */ (function () {
    function CaSubcaComponent() {
    }
    CaSubcaComponent.prototype.ngOnInit = function () {
    };
    CaSubcaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ca-subca',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-subca/ca-subca.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CaSubcaComponent);
    return CaSubcaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/credit-application.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"checkLoader\" class=\"text-center my-2\">\n  <i class=\"fa fa-refresh fa-spin fa-2x fa-fw\"></i>Loading...\n</div>\n<div [hidden]=\"checkLoader\">\n<div class=\"\" style=\"background-color: #FFF\">\n  <app-action-button-form title=\"Credit Application Form\"\n                          (onSubmit)=\"questionAction('SUBMIT')\" (onSave)=\"questionAction('SAVE')\"\n                          (onPrint)=\"showReport()\"\n                          (onReject)=\"questionAction('REJECT')\" (onCancel)=\"questionAction('CANCEL')\"\n                          [showSubmit]=\"btnFormSubmit\" [showSave]=\"btnFormSave\" [showPrint]=\"true\"\n                          [showReject]=\"btnFormReject\" [showCancel]=\"btnFormCancel\"\n  ></app-action-button-form>\n  <div class=\"p-1 m-1 border-isa\">\n    <p-panel [toggleable]=\"true\" header=\"Infomation - {{myCaHead.sbu_type_desc}} ( {{myCaHead.ca_no}} )  - {{myCaHead.current_task}}  \">\n      <div class=\"main-container \">\n        <div class=\"row\">\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>Call / Visit No</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myCaHead.sale_call_no\" readonly>\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>CA No</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myCaHead.ca_no\" readonly>\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>Approve Data</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myCaHead.ca_approve_date\" readonly>\n            </div>\n          </div>\n          <div class=\"col-md-2 \">\n            <div class=\"d-flex\">\n              <div class=\"form-group\">\n                <label>Total Score</label>\n                <input type=\"text\" class=\"form-control text-center\" [(ngModel)]=\"myCaHead.score\" readonly>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>Marketing Officer</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myCaHead.mkt_name\" readonly>\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>Credit Analyst</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)] = \"myCaHead.verifier_name\" readonly>\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>Marketing Group</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myCaHead.team_mkt_leader\" readonly>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"d-flex\">\n              <div class=\"form-group\">\n                <label>Gradeing Result</label>\n                <input type=\"text\" class=\"form-control text-center\" [(ngModel)]=\"myCaHead.grade\" readonly\n                       value=\"A\">\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"row\">\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>Customer Code</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myCaHead.cus_code\" readonly>\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>Customer Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myCaHead.cus_name\" readonly>\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>Customer Status</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myCaHead.cus_status\" readonly>\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>Fin. Amt. of this CA (Bath)</label>\n              <input type=\"text\" class=\"form-control\"  readonly\n                     [ngModel]=\"myCaHead?.highest_amt\"\n                     currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.'}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Introduced By</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myCaHead.intro_by_name\" readonly>\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>O/S Principal</label>\n              <input type=\"text\" class=\"form-control\"  readonly\n                     [ngModel]=\"myCaHead?.os_credit_amt\"\n                     currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.'}\">\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label> O/S Credit Line</label>\n              <input type=\"text\" class=\"form-control\"  readonly\n                     [ngModel]=\"myCaHead?.os_credit_line_amt\"\n                     currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.'}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>Pre Branch</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myCaHead.prebranch_code\" readonly>\n            </div>\n          </div>\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>Credit Type</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myCaHead.sbu_type_desc\" readonly>\n            </div>\n          </div>\n\n          <div class=\"flex-md-column col-md-3\">\n            <div class=\"form-group\">\n              <label>BlackList</label>\n              <div class=\"row\">\n                <div class=\"col-md-7\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myCaHead.bl_flag\" readonly>\n                </div>\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-search\" type=\"button\" (click)=\"openBlackList()\"><i\n                    class=\"fa fa-search fa-fw\"></i> Check BL\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </p-panel>\n  </div>\n  <div class=\"m-1 border-isa\">\n    <app-side-tab [defaultMenuName]=\"'Customer'\">\n      <app-side-tab-panel>\n        <app-side-tab-level [nameMenu]=\"'Customer'\">\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Guarantor'\">\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Pricing'\" [idMenu]=\"1\" *ngIf=\"myCaHead.sbu_typ == 'P'\"> <!--#directloans-->\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Pricing'\" [idMenu]=\"2\" *ngIf=\"false\"> <!--#floor plan-->\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Pricing'\" [idMenu]=\"3\" *ngIf=\"false\" > <!--#Sub ca (Asia)-->\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Pricing'\" [idMenu]=\"4\" *ngIf=\"myCaHead.sbu_typ == 'HP' || myCaHead.sbu_typ == 'LS' || myCaHead.sbu_typ == 'HPLS' \" > <!--#Asset (BG)-->\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Pricing'\" [idMenu]=\"5\" *ngIf=\"myCaHead.sbu_typ == 'FDO'\">\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Exposure Detail'\">\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Cap Credit line'\">\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Profile/Report'\"   *ngIf=\"false\">\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Collateral'\"  *ngIf=\"myCaHead.sbu_typ == 'P' || myCaHead.sbu_typ == 'FDO' \" >\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Condition Detail'\"  *ngIf=\"false\" >\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Image Document'\"  *ngIf=\"false\">\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Opinion'\"  *ngIf=\"false\" >\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Collection Duty Stamp'\"  *ngIf=\"false\">\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'ผู้รับชำระเงินแทน/บุคคลอ้างอิง'\"  *ngIf=\"false\">\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Approve Level/Comment'\">\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Context Data'\">\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Attachment'\" *ngIf=\"task == 'CA-04-2' ||task == 'CA-04-3'\">\n        </app-side-tab-level>\n        <app-side-tab-level [nameMenu]=\"'Recommend'\" >\n        </app-side-tab-level>\n      </app-side-tab-panel>\n\n      <app-side-tab-main>\n        <!--===================customer tab============================-->\n        <app-side-tab-content [nameContent]=\"'Customer'\">\n          <app-ca-customer-tab></app-ca-customer-tab>\n        </app-side-tab-content>\n\n        <!--//=========================================================-->\n        <!--<app-side-tab-content [nameContent]=\"'Condition & Remark[m]1[/m]'\"  *ngIf=\"false\">-->\n          <!--<app-asia-condition></app-asia-condition>-->\n        <!--</app-side-tab-content>-->\n        <!--//=========================================================-->\n\n        <!--//=====================Guarantor===========================-->\n        <app-side-tab-content [nameContent]=\"'Guarantor'\">\n          <app-ca-guarantor-tab></app-ca-guarantor-tab>\n        </app-side-tab-content>\n\n        <!--//=========================Pricing===========================-->\n        <app-side-tab-content [nameContent]=\"'Pricing'\" [idMenu]=\"1\" > <!--#directloans-->\n          <app-ca-directloans></app-ca-directloans>\n        </app-side-tab-content>\n        <app-side-tab-content [nameContent]=\"'Pricing'\" [idMenu]=\"2\" *ngIf=\"false\">  <!--#floor plan-->\n          <app-ca-floor-plan></app-ca-floor-plan>\n        </app-side-tab-content>\n        <app-side-tab-content [nameContent]=\"'Pricing'\" [idMenu]=\"3\" *ngIf=\"false\">  <!--#Sub ca (Asia)-->\n          <app-ca-subca></app-ca-subca>\n        </app-side-tab-content>\n        <app-side-tab-content [nameContent]=\"'Pricing'\" [idMenu]=\"4\" >  <!--#Asset (BG)-->\n          <app-ca-asset></app-ca-asset>\n        </app-side-tab-content>\n        <app-side-tab-content [nameContent]=\"'Pricing'\" [idMenu]=\"5\"  >  <!--#Pricing (Fac)-->\n          <app-ca-fac-pricing></app-ca-fac-pricing>\n        </app-side-tab-content>\n        <!--//================================End Pricing============================-->\n        <app-side-tab-content [nameContent]=\"'Exposure Detail'\">\n          <app-ca-bg-exposure></app-ca-bg-exposure>\n        </app-side-tab-content>\n        <app-side-tab-content [nameContent]=\"'Cap Credit line'\">\n          <app-ca-cap></app-ca-cap>\n        </app-side-tab-content>\n        <app-side-tab-content [nameContent]=\"'Approve Level/Comment'\">\n          <app-ca-approve-lv></app-ca-approve-lv>\n        </app-side-tab-content>\n\n        <!--//=========================================================-->\n        <app-side-tab-content [nameContent]=\"'Condition & Remark[m]2[/m]'\" *ngIf=\"false\">\n          <app-asia-condition></app-asia-condition>\n        </app-side-tab-content>\n        <!--//=========================================================-->\n\n        <app-side-tab-content [nameContent]=\"'Profile/Report'\"  *ngIf=\"false\">\n          <app-ca-profile></app-ca-profile>\n        </app-side-tab-content>\n\n          <app-side-tab-content [nameContent]=\"'Opinion'\" *ngIf=\"false\">\n            <app-ca-opinion></app-ca-opinion>\n        </app-side-tab-content>\n        <app-side-tab-content [nameContent]=\"'Image Document'\"  *ngIf=\"false\" >\n          <app-ca-imgdoc></app-ca-imgdoc>\n        </app-side-tab-content>\n        <app-side-tab-content [nameContent]=\"'Context Data'\">\n          <app-ca-context-data></app-ca-context-data>\n        </app-side-tab-content>\n\n\n        <app-side-tab-content [nameContent]=\"'Condition Detail'\"  *ngIf=\"false\">\n          <app-ca-condition-remark></app-ca-condition-remark>\n        </app-side-tab-content>\n\n        <app-side-tab-content [nameContent]=\"'Collateral'\" >\n          <app-ca-collateral></app-ca-collateral>\n        </app-side-tab-content>\n\n\n        <app-side-tab-content [nameContent]=\"'Collection Duty Stamp'\" >\n          <app-ca-duty-stamp  *ngIf=\"false\" ></app-ca-duty-stamp>\n        </app-side-tab-content>\n        <app-side-tab-content [nameContent]=\"'ผู้รับชำระเงินแทน/บุคคลอ้างอิง'\" >\n          <app-ca-ref  *ngIf=\"false\" ></app-ca-ref>\n        </app-side-tab-content>\n        <app-side-tab-content [nameContent]=\"'Attachment'\">\n          <app-ca-attachment  *ngIf=\"task == 'CA-04-2' ||task == 'CA-04-3'\" ></app-ca-attachment>\n        </app-side-tab-content>\n\n        <app-side-tab-content [nameContent]=\"'Recommend'\">\n          <app-ca-recommend></app-ca-recommend>\n        </app-side-tab-content>\n\n      </app-side-tab-main>\n\n    </app-side-tab>\n  </div>\n</div>\n</div>\n\n<app-alert-dialog #Questiondialog  (onOK)=\"onConfirmQuest(submitOrsave)\" > </app-alert-dialog>\n\n<app-alert-dialog #dialogalert  (onOK)=\"onOksubmit()\" > </app-alert-dialog>\n\n\n<!--<app-action-lock-screen *ngIf=\"checkLoader\"-->\n                        <!--[spinner]=\"true\"-->\n                        <!--[showCancel]=\"false\"-->\n                        <!--#lockScreen></app-action-lock-screen>-->\n\n\n<app-action-dialog #reaSonDialog\n                   [width]=\"600\"\n                   [showOk]=\"true\"\n                   (onOk)=\"clickafReason()\">\n  <div class=\"form-group\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <label>Approve Person</label>\n      </div>\n      <div class=\"col-md\">\n        <input type=\"text\" class=\"form-control\" [ngModel]=\"approvePerson\" disabled>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <label>Task</label>\n      </div>\n      <div class=\"col-md\">\n        <input type=\"text\" class=\"form-control\" [ngModel]=\"myCaHead.current_task\" disabled>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <label>Comment & Reason {{tmpaction}}</label>\n      </div>\n      <div class=\"col-md\">\n        <textarea class=\"col-md\" style=\"height: 200px\" [(ngModel)]=\"comment\"></textarea>\n      </div>\n    </div>\n  </div>\n</app-action-dialog>\n\n\n\n\n<!--<app-action-dialog [title]=\"\" #blackListDialog-->\n                   <!--[width]=\"1300\">-->\n  <!--<app-blacklist-share-center></app-blacklist-share-center>-->\n<!--</app-action-dialog>-->\n"

/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/credit-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ca_head__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-head.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/action-dialog/action-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreditApplicationComponent = /** @class */ (function () {
    function CreditApplicationComponent(userStorage, route, router, creditApplicationService) {
        this.userStorage = userStorage;
        this.route = route;
        this.router = router;
        this.creditApplicationService = creditApplicationService;
        this.task = '';
        this.btnFormSave = true;
        this.btnFormSubmit = true;
        this.btnFormCancel = true;
        this.btnFormReject = true;
        this.checkLoader = false;
        this.approvePerson = '';
        this.comment = '';
        this.submitOrsave = '';
        this.submitComplete = false;
        this.saveComplete = false;
        this.tmpaction = '';
    }
    CreditApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.approvePerson = this.userStorage.getUserName();
        window.scrollTo(0, 0);
        this.myCaHead = new __WEBPACK_IMPORTED_MODULE_1__model_ca_head__["a" /* caHead */]();
        this.comCode = this.userStorage.getComCodePort();
        this.checkLoader = true;
        this.subParams = this.route.queryParams.subscribe(function (params) {
            _this.caNo = params['ca_no'];
            _this.task = params['task'];
            _this.controlActionForm(_this.task);
            ///////  List ans
            _this.subscripMaster = _this.creditApplicationService.getListMasterPost('web', _this.userStorage.userName, _this.userStorage.getComCodePort(), _this.caNo)
                .subscribe(function (json) {
                /////  Call  After give Ans List Master
                console.log(json);
                _this.callOpendata();
                _this.creditApplicationService.setListMaster(json.LIST_DATA);
            });
        });
    };
    CreditApplicationComponent.prototype.ngOnDestroy = function () {
        if (this.subscripData != null) {
            this.subscripData.unsubscribe();
        }
        if (this.subscripMaster != null) {
            this.subscripMaster.unsubscribe();
        }
    };
    CreditApplicationComponent.prototype.callOpendata = function () {
        var _this = this;
        this.subscripData = this.creditApplicationService.sendCreditApplication('web', this.userStorage.userName, this.userStorage.getComCodePort(), this.caNo)
            .subscribe(function (json) {
            console.log(json);
            _this.checkLoader = false;
            _this.myCaHead = __WEBPACK_IMPORTED_MODULE_1__model_ca_head__["a" /* caHead */].parse(json.DATA);
            _this.creditApplicationService.setCaHead(_this.myCaHead);
            if (_this.myCaHead.caentity.new_card_no) {
                _this.creditApplicationService.setNewCardNo(_this.myCaHead.caentity.new_card_no);
            }
        });
    };
    ;
    CreditApplicationComponent.prototype.questionAction = function (action) {
        this.Questiondialog.reset();
        if (action == 'SAVE') {
            this.submitOrsave = action;
        }
        else if (action == 'SUBMIT') {
            this.submitOrsave = action;
        }
        else if (action == 'REJECT') {
            this.submitOrsave = action;
        }
        else if (action == 'CANCEL') {
            this.submitOrsave = action;
        }
        this.Questiondialog.setAction(action);
        this.Questiondialog.open();
    };
    CreditApplicationComponent.prototype.onConfirmQuest = function (value) {
        this.tmpaction = value;
        if (value == 'SUBMIT') {
            if (this.myCaHead.current_task == 'Approve') {
                this.reaSonDialog.open();
            }
            else {
                this.processCA(value);
            }
        }
        else if (value == 'SAVE') {
            this.processCA(value);
        }
        else if (value == 'REJECT') {
            this.onRejectCA();
        }
        else if (value == 'CANCEL') {
            this.onCancalCA();
        }
    };
    CreditApplicationComponent.prototype.clickafReason = function () {
        if (this.tmpaction == 'SUBMIT') {
            this.processCA(this.tmpaction);
        }
        else if (this.tmpaction == 'REJECT') {
        }
    };
    CreditApplicationComponent.prototype.processCA = function (value) {
        var _this = this;
        this.submitComplete = false;
        this.saveComplete = false;
        this.checkLoader = true;
        this.creditApplicationService.processCa("web", this.userStorage.getUserName(), value, this.comment).subscribe(function (json) {
            _this.checkLoader = false;
            //console.log(json);
            var stringMsg = '';
            if (value == 'SAVE') {
                stringMsg = 'Save';
            }
            else {
                stringMsg = 'Submit';
            }
            if (json.CODE == '200') {
                if (value == 'SAVE') {
                    _this.saveComplete = true;
                }
                ;
                if (value == 'SUBMIT') {
                    _this.submitComplete = true;
                }
                ;
                _this.dialogalert.setMessage(json.MSG);
                _this.dialogalert.open();
            }
            else {
                _this.dialogalert.setMessage(stringMsg + " Error");
                _this.dialogalert.open();
            }
        });
    };
    CreditApplicationComponent.prototype.onOksubmit = function () {
        if (this.submitComplete) {
            this.submitComplete = false;
            this.router.navigate(['/home']);
        }
        else if (this.saveComplete) {
            this.saveComplete = false;
            console.log('Save Reload');
            this.callOpendata();
        }
        this.saveComplete = false;
        this.submitComplete = false;
    };
    CreditApplicationComponent.prototype.onCancalCA = function () {
    };
    CreditApplicationComponent.prototype.onRejectCA = function () {
    };
    CreditApplicationComponent.prototype.showReport = function () {
        if (this.caNo) {
            var ca_no = this.caNo.replace("/", "_");
            var strURL = '';
            if (this.myCaHead.sbu_typ == 'FDO') {
                strURL = "http://192.168.112.125:8097/result?report=MKT\\CA_DO_01.fr3&p_ca_no=" + ca_no + "&p_id_card=" + this.creditApplicationService.newCardNo + "&ca_no=" + ca_no + "&com_code=" + this.comCode + "&format=pdf";
            }
            else if (this.myCaHead.sbu_typ == 'P') {
                strURL = "http://192.168.112.125:8097/result?report=MKT\\CA_DL_01.fr3&p_ca_no=" + ca_no + "&p_id_card=" + this.creditApplicationService.newCardNo + "&ca_no=" + ca_no + "&com_code=" + this.comCode + "&format=pdf";
            }
            else if ((this.myCaHead.sbu_typ == 'HP') || (this.myCaHead.sbu_typ == 'LS') || (this.myCaHead.sbu_typ == 'HPLS')) {
                strURL = "http://192.168.112.125:8097/result?report=MKT\\CA_HPLS_01.fr3&p_ca_no=" + ca_no + "&p_id_card=" + this.creditApplicationService.newCardNo + "&ca_no=" + ca_no + "&com_code=" + this.comCode + "&format=pdf";
            }
            window.open(strURL, '_blank');
            console.log(strURL);
            // this.creditApplicationService.caReportExpo().subscribe(
            //   (json : any) => {
            //     //  window.open('http://192.168.112.125:8096/datasnap/rest/TServerMethods1/prc_temp1/ca_pkg.get_exposure_ca/p_id_card;/'+ this.myCaHead.caentity.new_card_no + ';' );
            //     console.log(json);
            //     if (json.result == 'Success'){
            //      window.open('http://192.168.112.125:8097/result?report=frxCA_Report.fr3&multipage=0&pagenav=1&comcode=' + this.comCode + '&cano=' + ca_no + '&format=pdf', '_blank');
            //     }
            //
            //     //  http://192.168.112.125:8096/datasnap/rest/TServerMethods1/prc_temp1/ca_pkg.get_exposure_ca/p_id_card;/0115556009898;
            //     //  http://192.168.112.125:8096/datasnap/rest/TServerMethods1/ReverseString/12345
            //     //  http://192.168.112.125:8096/datasnap/rest/TServerMethods1/prc_temp1/ca_pkg.get_exposure/p_id_card;/0115556009898;
            //   });
        }
    };
    CreditApplicationComponent.prototype.controlActionForm = function (task) {
        if (!task) {
            this.btnFormSubmit = false;
            this.btnFormSave = false;
            this.btnFormReject = false;
            this.btnFormCancel = false;
        }
        else if ((task == 'CA-01') || (task == 'CA-01-1')) {
            this.btnFormSubmit = true;
            this.btnFormSave = true;
            this.btnFormReject = false;
            this.btnFormCancel = true;
        }
        else if (task == 'CA-04-2') {
            this.btnFormSubmit = true;
            this.btnFormSave = true;
            this.btnFormReject = true;
            this.btnFormCancel = false;
        }
        else {
            this.btnFormSubmit = true;
            this.btnFormSave = false;
            this.btnFormReject = true;
            this.btnFormCancel = false;
        }
    };
    CreditApplicationComponent.prototype.openBlackList = function () {
        var _this = this;
        window.scrollTo(0, 0);
        setTimeout(function () {
            _this.blackListDialog.open();
        }, 200);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogalert'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], CreditApplicationComponent.prototype, "dialogalert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Questiondialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], CreditApplicationComponent.prototype, "Questiondialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('reaSonDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], CreditApplicationComponent.prototype, "reaSonDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('blackListDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], CreditApplicationComponent.prototype, "blackListDialog", void 0);
    CreditApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-credit-application',
            template: __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_user_user_storage_service__["a" /* UserStorage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__credit_application_service__["a" /* creditApplicationService */]])
    ], CreditApplicationComponent);
    return CreditApplicationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/credit-application.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditApplicationModule", function() { return CreditApplicationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_center_center_module__ = __webpack_require__("../../../../../src/app/shared/center/center.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__credit_application_routing_module__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__credit_application_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ca_customer_tab_ca_address_th_address_th_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-address-th/address-th.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ca_customer_tab_ca_address_en_ca_address_en_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-address-en/ca-address-en.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ca_customer_tab_ca_percent_ind_percent_ind_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-percent-ind/percent-ind.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ca_customer_tab_ca_machine_machine_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-machine/machine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ca_customer_tab_ca_exposure_exposure_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-exposure/exposure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ca_customer_tab_ca_customer_customer_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ca_condition_remark_condition_remark_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-condition-remark/condition-remark.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ca_subca_ca_subca_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-subca/ca-subca.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ca_profile_profile_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ca_approve_lv_ca_approve_lv_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-approve-lv/ca-approve-lv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ca_opinion_opinion_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-opinion/opinion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ca_imgdoc_imgdoc_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-imgdoc/imgdoc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ca_context_data_context_data_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-context-data/context-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ca_cap_cap_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-cap/cap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ca_fac_pricing_ca_pricing_pricing_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ca_fac_pricing_ca_pricing_pricing_normal_pricing_normal_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-pricing/pricing-normal/pricing-normal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ca_fac_pricing_ca_pricing_pricing_project_pricing_project_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-pricing/pricing-project/pricing-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ca_fac_pricing_ca_buyer_buyer_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-buyer/buyer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ca_collateral_collateral_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-collateral/collateral.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ca_fac_pricing_ca_buyer_ca_buyer_doc_ca_buyer_doc_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-buyer/ca-buyer-doc/ca-buyer-doc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ca_fac_pricing_ca_buyer_ca_buyer_detail_ca_buyer_detail_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-buyer/ca-buyer-detail/ca-buyer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ca_directloans_ca_directloans_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-directloans/ca-directloans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ca_floor_plan_ca_floor_plan_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-floor-plan/ca-floor-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ca_duty_stamp_ca_duty_stamp_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-duty-stamp/ca-duty-stamp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ca_ref_ca_ref_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-ref/ca-ref.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ca_customer_tab_ca_customer_tab_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-customer-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ca_guarantor_tab_ca_guarantor_tab_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guarantor-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ca_customer_tab_ca_exposure_tab_ca_exposure_tab_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-exposure-tab/ca-exposure-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ca_customer_tab_ca_asia_condition_ca_asia_condition_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-customer-tab/ca-asia-condition/ca-asia-condition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ca_bg_exposure_ca_bg_exposure_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-bg-exposure/ca-bg-exposure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ca_guarantor_tab_ca_guarantor_ca_guarantor_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guarantor/ca-guarantor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__credit_application_service__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ca_asset_ca_asset_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-asset/ca-asset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ca_asset_repayment_repayment_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-asset/repayment/repayment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ca_asset_asset_detail_asset_detail_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-asset/asset-detail/asset-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ca_guarantor_tab_ca_guar_address_en_ca_guar_address_en_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-address-en/ca-guar-address-en.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ca_guarantor_tab_ca_guar_asia_condition_ca_guar_asia_condition_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-asia-condition/ca-guar-asia-condition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ca_guarantor_tab_ca_guar_card_ca_guar_card_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-card/ca-guar-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ca_guarantor_tab_ca_guar_address_th_ca_guar_address_th_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-address-th/ca-guar-address-th.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ca_guarantor_tab_ca_guar_exposure_ca_guar_exposure_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-exposure/ca-guar-exposure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ca_guarantor_tab_ca_guar_machine_ca_guar_machine_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-machine/ca-guar-machine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ca_guarantor_tab_ca_guar_percent_ind_ca_guar_percent_ind_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-guarantor-tab/ca-guar-percent-ind/ca-guar-percent-ind.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ca_asset_ca_finance_ca_finance_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-asset/ca-finance/ca-finance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__entity_entity_module__ = __webpack_require__("../../../../../src/app/main/mst/entity/entity.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ca_attachment_ca_attachment_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-attachment/ca-attachment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_ng2_currency_mask__ = __webpack_require__("../../../../ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_52_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_53_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ca_fac_pricing_ca_fac_pricing_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-fac-pricing/ca-fac-pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ca_recommend_ca_recommend_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/ca-recommend/ca-recommend.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























































var CreditApplicationModule = /** @class */ (function () {
    function CreditApplicationModule() {
    }
    CreditApplicationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["FileUploadModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PanelModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["TabViewModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["FieldsetModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4__credit_application_routing_module__["a" /* CreditApplicationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_52_ng2_currency_mask__["CurrencyMaskModule"], __WEBPACK_IMPORTED_MODULE_3__shared_center_center_module__["a" /* CenterModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["GalleriaModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["LightboxModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SidebarModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PanelMenuModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_50__entity_entity_module__["EntityModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["InputSwitchModule"], __WEBPACK_IMPORTED_MODULE_53_angular2_text_mask__["TextMaskModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["KeyFilterModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__credit_application_component__["a" /* CreditApplicationComponent */], __WEBPACK_IMPORTED_MODULE_7__ca_customer_tab_ca_address_th_address_th_component__["a" /* CaAddressThComponent */], __WEBPACK_IMPORTED_MODULE_8__ca_customer_tab_ca_address_en_ca_address_en_component__["a" /* CaAddressEnComponent */], __WEBPACK_IMPORTED_MODULE_9__ca_customer_tab_ca_percent_ind_percent_ind_component__["a" /* CaPercentIndComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ca_customer_tab_ca_machine_machine_component__["a" /* CaMachineComponent */], __WEBPACK_IMPORTED_MODULE_11__ca_customer_tab_ca_exposure_exposure_component__["a" /* CaExposureComponent */], __WEBPACK_IMPORTED_MODULE_12__ca_customer_tab_ca_customer_customer_component__["a" /* CaCustomerComponent */], __WEBPACK_IMPORTED_MODULE_13__ca_condition_remark_condition_remark_component__["a" /* CaConditionRemarkComponent */], __WEBPACK_IMPORTED_MODULE_14__ca_subca_ca_subca_component__["a" /* CaSubcaComponent */], __WEBPACK_IMPORTED_MODULE_15__ca_profile_profile_component__["a" /* CaProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__ca_approve_lv_ca_approve_lv_component__["a" /* CaApproveLvComponent */], __WEBPACK_IMPORTED_MODULE_17__ca_opinion_opinion_component__["a" /* CaOpinionComponent */], __WEBPACK_IMPORTED_MODULE_18__ca_imgdoc_imgdoc_component__["a" /* CaImgdocComponent */], __WEBPACK_IMPORTED_MODULE_19__ca_context_data_context_data_component__["a" /* CaContextDataComponent */], __WEBPACK_IMPORTED_MODULE_20__ca_cap_cap_component__["a" /* CaCapComponent */], __WEBPACK_IMPORTED_MODULE_21__ca_fac_pricing_ca_pricing_pricing_component__["a" /* CaPricingComponent */], __WEBPACK_IMPORTED_MODULE_22__ca_fac_pricing_ca_pricing_pricing_normal_pricing_normal_component__["a" /* PricingNormalComponent */],
                __WEBPACK_IMPORTED_MODULE_23__ca_fac_pricing_ca_pricing_pricing_project_pricing_project_component__["a" /* PricingProjectComponent */], __WEBPACK_IMPORTED_MODULE_24__ca_fac_pricing_ca_buyer_buyer_component__["a" /* CaBuyerComponent */], __WEBPACK_IMPORTED_MODULE_25__ca_collateral_collateral_component__["a" /* CaCollateralComponent */], __WEBPACK_IMPORTED_MODULE_26__ca_fac_pricing_ca_buyer_ca_buyer_doc_ca_buyer_doc_component__["a" /* CaBuyerDocComponent */], __WEBPACK_IMPORTED_MODULE_27__ca_fac_pricing_ca_buyer_ca_buyer_detail_ca_buyer_detail_component__["a" /* CaBuyerDetailComponent */], __WEBPACK_IMPORTED_MODULE_28__ca_directloans_ca_directloans_component__["a" /* CaDirectloansComponent */], __WEBPACK_IMPORTED_MODULE_29__ca_floor_plan_ca_floor_plan_component__["a" /* CaFloorPlanComponent */],
                __WEBPACK_IMPORTED_MODULE_30__ca_duty_stamp_ca_duty_stamp_component__["a" /* CaDutyStampComponent */], __WEBPACK_IMPORTED_MODULE_31__ca_ref_ca_ref_component__["a" /* CaRefComponent */], __WEBPACK_IMPORTED_MODULE_32__ca_customer_tab_ca_customer_tab_component__["a" /* CaCustomerTabComponent */], __WEBPACK_IMPORTED_MODULE_33__ca_guarantor_tab_ca_guarantor_tab_component__["a" /* CaGuarantorTabComponent */],
                __WEBPACK_IMPORTED_MODULE_34__ca_customer_tab_ca_exposure_tab_ca_exposure_tab_component__["a" /* CaExposureTabComponent */], __WEBPACK_IMPORTED_MODULE_35__ca_customer_tab_ca_asia_condition_ca_asia_condition_component__["a" /* CaAsiaConditionComponent */], __WEBPACK_IMPORTED_MODULE_36__ca_bg_exposure_ca_bg_exposure_component__["a" /* CaBgExposureComponent */], __WEBPACK_IMPORTED_MODULE_37__ca_guarantor_tab_ca_guarantor_ca_guarantor_component__["a" /* CaGuarantorComponent */], __WEBPACK_IMPORTED_MODULE_39__ca_asset_ca_asset_component__["a" /* CaAssetComponent */], __WEBPACK_IMPORTED_MODULE_40__ca_asset_repayment_repayment_component__["a" /* RepaymentComponent */], __WEBPACK_IMPORTED_MODULE_41__ca_asset_asset_detail_asset_detail_component__["a" /* AssetDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_42__ca_guarantor_tab_ca_guar_address_en_ca_guar_address_en_component__["a" /* CaGuarAddressEnComponent */], __WEBPACK_IMPORTED_MODULE_43__ca_guarantor_tab_ca_guar_asia_condition_ca_guar_asia_condition_component__["a" /* CaGuarAsiaConditionComponent */], __WEBPACK_IMPORTED_MODULE_44__ca_guarantor_tab_ca_guar_card_ca_guar_card_component__["a" /* CaGuarCardComponent */], __WEBPACK_IMPORTED_MODULE_45__ca_guarantor_tab_ca_guar_address_th_ca_guar_address_th_component__["a" /* CaGuarAddressThComponent */], __WEBPACK_IMPORTED_MODULE_46__ca_guarantor_tab_ca_guar_exposure_ca_guar_exposure_component__["a" /* CaGuarExposureComponent */], __WEBPACK_IMPORTED_MODULE_47__ca_guarantor_tab_ca_guar_machine_ca_guar_machine_component__["a" /* CaGuarMachineComponent */],
                __WEBPACK_IMPORTED_MODULE_48__ca_guarantor_tab_ca_guar_percent_ind_ca_guar_percent_ind_component__["a" /* CaGuarPercentIndComponent */], __WEBPACK_IMPORTED_MODULE_41__ca_asset_asset_detail_asset_detail_component__["a" /* AssetDetailComponent */], __WEBPACK_IMPORTED_MODULE_49__ca_asset_ca_finance_ca_finance_component__["a" /* CaFinanceComponent */], __WEBPACK_IMPORTED_MODULE_51__ca_attachment_ca_attachment_component__["a" /* CaAttachmentComponent */], __WEBPACK_IMPORTED_MODULE_54__ca_fac_pricing_ca_fac_pricing_component__["a" /* CaFacPricingComponent */], __WEBPACK_IMPORTED_MODULE_55__ca_recommend_ca_recommend_component__["a" /* CaRecommendComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CurrencyPipe"], __WEBPACK_IMPORTED_MODULE_2__angular_common__["DecimalPipe"], __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_38__credit_application_service__["a" /* creditApplicationService */]]
        })
    ], CreditApplicationModule);
    return CreditApplicationModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/credit-application.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditApplicationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__credit_application_component__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/credit-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_0__credit_application_component__["a" /* CreditApplicationComponent */]
    }
];
var CreditApplicationRoutingModule = /** @class */ (function () {
    function CreditApplicationRoutingModule() {
    }
    CreditApplicationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], CreditApplicationRoutingModule);
    return CreditApplicationRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/credit-application.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return creditApplicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca_listmaster.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var creditApplicationService = /** @class */ (function () {
    function creditApplicationService(http, service, userStorage, dataPipe) {
        this.http = http;
        this.service = service;
        this.userStorage = userStorage;
        this.dataPipe = dataPipe;
        //////////  Set List Master
        this.listFNM = [];
        this.listFNME = [];
        this.listCRD = [];
        this.listNTY = [];
        this.listBNK = [];
        this.listSTS = [];
        this.listGRP_CUS = [];
        this.listOC = [];
        this.listPOS_BG = [];
        this.listCS_BUS = [];
        this.listINE = [];
        this.listIND = [];
        this.listPAID = [];
        this.listBANK_INT_RATE = [];
        this.listFIN = [];
        this.listSUB_FIN = [];
        this.listSUB_FINLS = [];
        this.listLease = [];
        this.listFAT = [];
        this.listFAC = [];
        this.listFAS = [];
        this.listEQP = [];
        this.listBDY = [];
        this.listENG_TYPE = [];
        this.listRMK_MKT = [];
        this.listCOND_MKT = [];
        this.listCOND_CA = [];
        this.listInsRate = [];
        this.listAPT = [];
        this.eventListMaster = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.eventCaHead = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.eventCardNo = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.eventSelectGuarantor = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.eventBgdetail = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.eventBgdetailSub = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        ////  Pricing Buyer
        this.eventcabuyer = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    creditApplicationService.prototype.sendCreditApplication = function (device, username, pccomcode, pcano) {
        var url = this.service.url + this.service.ca_api + '/ask/ca/GetDataCA';
        var data = {
            "device": device,
            "username": username,
            "comcode": pccomcode,
            "cano": pcano
        };
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.post(url, data, options);
    };
    creditApplicationService.prototype.processCa = function (device, username, psendflg, reason) {
        //  psendflg ( 'SAVE' , 'SUBMIT' )
        // const url =  'http://localhost:8080/API_CA/ask/ca/SaveAndSubmit';
        var url = this.service.url + this.service.ca_api + "/ask/ca/SaveAndSubmit";
        var data = {
            "device": device,
            "username": username,
            "comcode": this.caHead.com_code,
            "cano": this.caHead.ca_no,
            "action": psendflg,
            "reason": reason ? reason : '',
            "data": this.caHead
        };
        console.log('Before send data');
        console.log(data);
        console.log(JSON.stringify(data));
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.post(url, data, options);
    };
    creditApplicationService.prototype.caReportExpo = function () {
        var url = "http://192.168.112.125:8096/datasnap/rest/TServerMethods1/prc_temp1/ca_pkg.get_exposure_ca/p_id_card;/" + this.newCardNo + ";";
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        console.log(url);
        return this.http.get(url, options);
    };
    creditApplicationService.prototype.getListMasterPost = function (device, username, pccomcode, pcano) {
        var url = this.service.url + this.service.ca_api + '/ask/ca/GetListMaster';
        var data = {
            "device": device,
            "username": username,
            "comcode": pccomcode,
            "cano": pcano
        };
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.post(url, data, options);
    };
    creditApplicationService.prototype.getListBGExposure = function (device, pccomcode, pcano, pnewcard) {
        var url = this.service.url + this.service.ca_api + '/ask/ca/GetExposure';
        var data = {
            "device": device,
            "username": this.userStorage.getUserName(),
            "comcode": pccomcode,
            "cano": pcano,
            "idcard": pnewcard
        };
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.post(url, data, options);
    };
    creditApplicationService.prototype.setListMaster = function (json) {
        for (var i = 0; i < json.length; i++) {
            if (json[i].type == 'FNM') {
                this.listFNM.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'FNME') {
                this.listFNME.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'CRD') {
                this.listCRD.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'BNK') {
                this.listBNK.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'STS') {
                this.listSTS.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'GRP_CUS') {
                this.listGRP_CUS.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'OC') {
                this.listOC.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'POS_BG') {
                this.listPOS_BG.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'CS_BUS') {
                this.listCS_BUS.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'INE') {
                this.listINE.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'IND') {
                this.listIND.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'PAID') {
                this.listPAID.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'BANK_INT_RATE') {
                this.listBANK_INT_RATE.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'FIN') {
                this.listFIN.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'SUB_FIN') {
                this.listSUB_FIN.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'SUB_FIN_LS') {
                this.listSUB_FINLS.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'Lease') {
                this.listLease.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'FAT') {
                this.listFAT.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'FAC') {
                this.listFAC.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'FAS') {
                this.listFAS.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'EQP') {
                this.listEQP.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'BDY') {
                this.listBDY.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'ENG_TYPE') {
                this.listENG_TYPE.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'NTY') {
                this.listNTY.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'RMK_MKT') {
                this.listRMK_MKT.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'COND_MKT') {
                this.listCOND_MKT.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'COND_CA') {
                this.listCOND_CA.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'INS-RATE') {
                this.listInsRate.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
            else if (json[i].type == 'APT') {
                this.listAPT.push(new __WEBPACK_IMPORTED_MODULE_4__model_ca_listmaster__["a" /* caListMaster */](json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
            }
        }
        // console.log('Emit ans');
        this.eventListMaster.emit();
    };
    creditApplicationService.prototype.changedate = function (indate) {
        var strDate = this.dataPipe.transform(indate, 'dd/MM/yyyy');
        return strDate;
    };
    creditApplicationService.prototype.setCaHead = function (incaHead) {
        this.caHead = incaHead;
        this.eventCaHead.emit(incaHead);
    };
    creditApplicationService.prototype.setNewCardNo = function (pNewCard) {
        this.newCardNo = pNewCard;
        this.eventCardNo.emit(pNewCard);
    };
    creditApplicationService.prototype.setSelectGuarantor = function (selectGuarantor) {
        this.selectGuarantor = selectGuarantor;
        this.eventSelectGuarantor.emit(selectGuarantor);
    };
    creditApplicationService.prototype.setSelectBgdetail = function (value) {
        this.bgdetail = value;
        this.eventBgdetail.emit(value);
    };
    creditApplicationService.prototype.setSelectBgdetailSub = function (value) {
        this.bgdetailSub = value;
        this.eventBgdetailSub.emit(value);
    };
    creditApplicationService.prototype.setSelectBuyer = function (value) {
        this.eventcabuyer.emit(value);
    };
    ////-----------------------End  Event (Emit & subscribtion) ------------------
    creditApplicationService.prototype.calculateIrr = function (subId, calType) {
        var url = this.service.url + this.service.appform_api + "/ask/appForm/CalculateIrr";
        //const url = 'http://localhost:8080/MKS_WebServices/ask/appForm/CalculateIrr';
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        var dataDetail = this.bgdetail;
        var sumCash = 0;
        var cltType = '';
        var intRate = 0;
        for (var _i = 0, _a = this.caHead.listcacollateral; _i < _a.length; _i++) {
            var objCollateral = _a[_i];
            if (objCollateral.clt_type = '7') {
                sumCash = sumCash + objCollateral.clt_amt;
                cltType = objCollateral.cal_int_type;
                intRate = objCollateral.int_rate;
            }
        }
        var data = {
            "device": "web",
            "userCode": this.userStorage.getCode(),
            "calType": calType,
            "finType": dataDetail.fin_typ,
            "installmentExcVat": dataDetail.installment_e_vat ? dataDetail.installment_e_vat : 0,
            "installmentVat": dataDetail.installment_vat ? dataDetail.installment_vat : 0,
            "flatRate": dataDetail.flat_rate ? dataDetail.flat_rate : 0,
            "terms": dataDetail.terms ? dataDetail.terms : 0,
            "schedule": dataDetail.schedule,
            "stepList": dataDetail.listcastep,
            "disburseDate": dataDetail.disburse_dt,
            "firstDate": dataDetail.first,
            "isBeginning": dataDetail.adv_arr,
            "grossIrr": dataDetail.gross_irr ? dataDetail.gross_irr : 0,
            "netIrr": dataDetail.net_irr ? dataDetail.net_irr : 0,
            "finExcVat": dataDetail.fin_amt_e_vat ? dataDetail.fin_amt_e_vat : 0,
            "expense": dataDetail.es_expense ? dataDetail.es_expense : 0,
            "revenue": dataDetail.es_revenue ? dataDetail.es_revenue : 0,
            "depExcVat": dataDetail.dep_amt_e_vat ? dataDetail.dep_amt_e_vat : 0,
            "rvExcVat": dataDetail.rv_amt_e_vat ? dataDetail.rv_amt_e_vat : 0,
            "cashDep": sumCash,
            "cashType": cltType,
            "cashIntRate": intRate
        };
        //console.log(data);
        return this.http.post(url, JSON.stringify(data), options);
    };
    creditApplicationService.prototype.calInstallment = function (finAmtEVat, term, flatRate) {
        var url = this.service.url + this.service.appform_api + '/ask/appForm/calInstallment?device=web&userName=' + this.userStorage.getUserName() +
            '&finAmtEVat=' + finAmtEVat +
            '&term=' + term +
            '&flatRate=' + flatRate;
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.get(url, options);
    };
    creditApplicationService.prototype.checkFactoring = function (entCode, newCardNo) {
        var url = this.service.url + this.service.appform_api + '/ask/appForm/checkFactoring?device=web&userName=' + this.userStorage.getUserName() +
            '&entCode=' + entCode +
            '&newCardNo=' + newCardNo;
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        console.log(url);
        return this.http.get(url, options);
    };
    creditApplicationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__["a" /* ServiceEndpoint */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__["a" /* UserStorage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]])
    ], creditApplicationService);
    return creditApplicationService;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-apvhist.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caApvHist; });
var caApvHist = /** @class */ (function () {
    function caApvHist(com_code, ca_no, approve_type, run_no, approve_flg, approve_user, approve_date, remark, ca_comment, approve_name) {
        this.com_code = com_code;
        this.ca_no = ca_no;
        this.approve_type = approve_type;
        this.run_no = run_no;
        this.approve_flg = approve_flg;
        this.approve_user = approve_user;
        this.approve_date = approve_date;
        this.remark = remark;
        this.ca_comment = ca_comment;
        this.approve_name = approve_name;
    }
    caApvHist.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caApvHist(json[i].com_code, json[i].ca_no, json[i].approve_type, json[i].run_no, json[i].approve_flg, json[i].approve_user, json[i].approve_date, json[i].remark, json[i].ca_comment, json[i].approve_name));
            }
        }
        return data;
    };
    return caApvHist;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-assetsite.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caAssersite; });
/**
 * Created by pongsatorn.an on 12/01/2561.
 */
var caAssersite = /** @class */ (function () {
    function caAssersite(com_code, ref_code, main_entry, order_from, order_to, all_asset, active, change_site, loc_name, loc_addr1, loc_addr2, loc_addr3, loc_addr4, lease_name, lease_addr1, lease_addr2, lease_addr3, owner_name, owner_addr1, owner_addr2, owner_addr3, eff_date, input_date, input_usr, last_upd, last_usr, remark, reject_reason, current_task) {
        this.com_code = com_code;
        this.ref_code = ref_code;
        this.main_entry = main_entry;
        this.order_from = order_from;
        this.order_to = order_to;
        this.all_asset = all_asset;
        this.active = active;
        this.change_site = change_site;
        this.loc_name = loc_name;
        this.loc_addr1 = loc_addr1;
        this.loc_addr2 = loc_addr2;
        this.loc_addr3 = loc_addr3;
        this.loc_addr4 = loc_addr4;
        this.lease_name = lease_name;
        this.lease_addr1 = lease_addr1;
        this.lease_addr2 = lease_addr2;
        this.lease_addr3 = lease_addr3;
        this.owner_name = owner_name;
        this.owner_addr1 = owner_addr1;
        this.owner_addr2 = owner_addr2;
        this.owner_addr3 = owner_addr3;
        this.eff_date = eff_date;
        this.input_date = input_date;
        this.input_usr = input_usr;
        this.last_upd = last_upd;
        this.last_usr = last_usr;
        this.remark = remark;
        this.reject_reason = reject_reason;
        this.current_task = current_task;
    }
    caAssersite.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caAssersite(json[i].com_code, json[i].ref_code, json[i].main_entry, json[i].order_from, json[i].order_to, json[i].all_asset, json[i].active, json[i].change_site, json[i].loc_name, json[i].loc_addr1, json[i].loc_addr2, json[i].loc_addr3, json[i].loc_addr4, json[i].lease_name, json[i].lease_addr1, json[i].lease_addr2, json[i].lease_addr3, json[i].owner_name, json[i].owner_addr1, json[i].owner_addr2, json[i].owner_addr3, json[i].eff_date, json[i].input_date, json[i].input_usr, json[i].last_upd, json[i].last_usr, json[i].remark, json[i].reject_reason, json[i].current_task));
            }
        }
        return data;
    };
    return caAssersite;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-bgdetail.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caBgDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ca_bgdetailsub__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-bgdetailsub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ca_step__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-step.ts");


var caBgDetail = /** @class */ (function () {
    function caBgDetail(ca_no, sub_id, fin_typ, sub_fin, buy_back_flg, adv_arr, schedule, asst_amt_e_vat, asst_amt_vat, asst_amt_i_vat, fin_amt_e_vat, fin_amt_vat, fin_amt_i_vat, fin_ratio, down_amt_e_vat, down_amt_vat, down_amt_i_vat, dep_amt_e_vat, dep_amt_vat, dep_amt_i_vat, rv_amt_e_vat, rv_amt_vat, rv_amt_i_vat, cal_inst_typ, installment_e_vat, installment_vat, installment_i_vat, bank_code, interest_rate_type, interest_rate, terms, flat_rate, gross_irr, net_irr, spread, currency, disburse_dt, first, operating_lease, wh_tax, lc_flg, fin_asst, group_flg, group_nme, asst_prce_forgn, curr_type, duty_pcnt, inst_pcnt_of_asst, with_vat, free_text, es_expense, es_revenue, cancel_date, cancel_no, pen_rate, great_period, net_irr_inc_deposit, fin_name, credit_type, drawdown_flg, listbgdetailsub, listcastep) {
        this.selectForCall = 1;
        this.ca_no = ca_no;
        this.sub_id = sub_id;
        this.fin_typ = fin_typ;
        this.sub_fin = sub_fin;
        this.buy_back_flg = buy_back_flg;
        this.adv_arr = adv_arr;
        this.schedule = schedule;
        this.asst_amt_e_vat = asst_amt_e_vat;
        this.asst_amt_vat = asst_amt_vat;
        this.asst_amt_i_vat = asst_amt_i_vat;
        this.fin_amt_e_vat = fin_amt_e_vat;
        this.fin_amt_vat = fin_amt_vat;
        this.fin_amt_i_vat = fin_amt_i_vat;
        this.fin_ratio = fin_ratio;
        this.down_amt_e_vat = down_amt_e_vat;
        this.down_amt_vat = down_amt_vat;
        this.down_amt_i_vat = down_amt_i_vat;
        this.dep_amt_e_vat = dep_amt_e_vat;
        this.dep_amt_vat = dep_amt_vat;
        this.dep_amt_i_vat = dep_amt_i_vat;
        this.rv_amt_e_vat = rv_amt_e_vat;
        this.rv_amt_vat = rv_amt_vat;
        this.rv_amt_i_vat = rv_amt_i_vat;
        this.cal_inst_typ = cal_inst_typ;
        this.installment_e_vat = installment_e_vat;
        this.installment_vat = installment_vat;
        this.installment_i_vat = installment_i_vat;
        this.bank_code = bank_code;
        this.interest_rate_type = interest_rate_type;
        this.interest_rate = interest_rate;
        this.terms = terms;
        this.flat_rate = flat_rate;
        this.gross_irr = gross_irr;
        this.net_irr = net_irr;
        this.spread = spread;
        this.currency = currency;
        this.disburse_dt = disburse_dt;
        this.first = first;
        this.operating_lease = operating_lease;
        this.wh_tax = wh_tax;
        this.lc_flg = lc_flg;
        this.fin_asst = fin_asst;
        this.group_flg = group_flg;
        this.group_nme = group_nme;
        this.asst_prce_forgn = asst_prce_forgn;
        this.curr_type = curr_type;
        this.duty_pcnt = duty_pcnt;
        this.inst_pcnt_of_asst = inst_pcnt_of_asst;
        this.with_vat = with_vat;
        this.free_text = free_text;
        this.es_expense = es_expense;
        this.es_revenue = es_revenue;
        this.cancel_date = cancel_date;
        this.cancel_no = cancel_no;
        this.pen_rate = pen_rate;
        this.great_period = great_period;
        this.net_irr_inc_deposit = net_irr_inc_deposit;
        this.fin_name = fin_name;
        this.credit_type = credit_type;
        this.drawdown_flg = drawdown_flg;
        this.listbgdetailsub = listbgdetailsub;
        this.listcastep = listcastep ? listcastep : [];
    }
    caBgDetail.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caBgDetail(json[i].ca_no, json[i].sub_id, json[i].fin_typ, json[i].sub_fin, json[i].buy_back_flg, json[i].adv_arr, json[i].schedule, json[i].asst_amt_e_vat, json[i].asst_amt_vat, json[i].asst_amt_i_vat, json[i].fin_amt_e_vat, json[i].fin_amt_vat, json[i].fin_amt_i_vat, json[i].fin_ratio, json[i].down_amt_e_vat, json[i].down_amt_vat, json[i].down_amt_i_vat, json[i].dep_amt_e_vat, json[i].dep_amt_vat, json[i].dep_amt_i_vat, json[i].rv_amt_e_vat, json[i].rv_amt_vat, json[i].rv_amt_i_vat, json[i].cal_inst_typ, json[i].installment_e_vat, json[i].installment_vat, json[i].installment_i_vat, json[i].bank_code, json[i].interest_rate_type, json[i].interest_rate, json[i].terms, json[i].flat_rate, json[i].gross_irr, json[i].net_irr, json[i].spread, json[i].currency, json[i].disburse_dt, json[i].first, json[i].operating_lease, json[i].wh_tax, json[i].lc_flg, json[i].fin_asst, json[i].group_flg, json[i].group_nme, json[i].asst_prce_forgn, json[i].curr_type, json[i].duty_pcnt, json[i].inst_pcnt_of_asst, json[i].with_vat, json[i].free_text, json[i].es_expense, json[i].es_revenue, json[i].cancel_date, json[i].cancel_no, json[i].pen_rate, json[i].great_period, json[i].net_irr_inc_deposit, json[i].fin_name, json[i].credit_type, json[i].drawdown_flg, __WEBPACK_IMPORTED_MODULE_0__ca_bgdetailsub__["a" /* caBgDetailSub */].parse(json[i].listbgdetailsub), __WEBPACK_IMPORTED_MODULE_1__ca_step__["a" /* caStep */].parse(json[i].listcastep)));
            }
        }
        return data;
    };
    return caBgDetail;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-bgdetailsub.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caBgDetailSub; });
var caBgDetailSub = /** @class */ (function () {
    function caBgDetailSub(ca_no, sub_id, sub_id2, brand_code, model_code, chassis, eng_num, year, reg_num, detail, asst_type, asst_code, asst_sub_code, dealer_code, comm_amt, comm_pcnt, color, cc, eqp_ty, weight, body, miles, seat, enigne_type, accessory, asst_amt_e_vat, asset_status, fin_amt_e_vat, buy_back_grnty_no, asset_type, dealer_name) {
        this.ca_no = ca_no;
        this.sub_id = sub_id;
        this.sub_id2 = sub_id2;
        this.brand_code = brand_code;
        this.model_code = model_code;
        this.chassis = chassis;
        this.eng_num = eng_num;
        this.year = year;
        this.reg_num = reg_num;
        this.detail = detail;
        this.asst_type = asst_type;
        this.asst_code = asst_code;
        this.asst_sub_code = asst_sub_code;
        this.dealer_code = dealer_code;
        this.comm_amt = comm_amt;
        this.comm_pcnt = comm_pcnt;
        this.color = color;
        this.cc = cc;
        this.eqp_ty = eqp_ty;
        this.weight = weight;
        this.body = body;
        this.miles = miles;
        this.seat = seat;
        this.enigne_type = enigne_type;
        this.accessory = accessory;
        this.asst_amt_e_vat = asst_amt_e_vat;
        this.asset_status = asset_status;
        this.fin_amt_e_vat = fin_amt_e_vat;
        this.buy_back_grnty_no = buy_back_grnty_no;
        this.asset_type = asset_type;
        this.dealer_name = dealer_name;
    }
    caBgDetailSub.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caBgDetailSub(json[i].ca_no, json[i].sub_id, json[i].sub_id2, json[i].brand_code, json[i].model_code, json[i].chassis, json[i].eng_num, json[i].year, json[i].reg_num, json[i].detail, json[i].asst_type, json[i].asst_code, json[i].asst_sub_code, json[i].dealer_code, json[i].comm_amt, json[i].comm_pcnt, json[i].color, json[i].cc, json[i].eqp_ty, json[i].weight, json[i].body, json[i].miles, json[i].seat, json[i].enigne_type, json[i].accessory, json[i].asst_amt_e_vat, json[i].asset_status, json[i].fin_amt_e_vat, json[i].buy_back_grnty_no, json[i].asset_type, json[i].dealer_name));
            }
        }
        return data;
    };
    return caBgDetailSub;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-buyer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caBuyer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ca_buyerdoc__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-buyerdoc.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ca_factor__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-factor.ts");


var caBuyer = /** @class */ (function () {
    function caBuyer(com_code, ca_no, buyer_code, seq_no, app_type, joint_buyer_group, sub_line_amt, sub_line_amt_group, sub_os_amt, sub_os_amt_group, seller_cr_amt, seller_os_amt, terms, noti_type, advance_code, advance_ratio, factoring_fee, min_facfee, max_facfee, pay_mthd, other_doc, other_doc_remark, eff_date, expire_dt, eff_rate, drirect_payment, cancel_date, cancel_by, cancel_reason_code, last_usr, last_upd, input_by, input_date, progress_payment, currency_type, ver_waive, ori_sub_line_amt, buyer_name, app_type_desc, join_group_name, cr_limit, address_eng, address_eng2, listcabuyerdoc, listcafactor) {
        this.com_code = com_code;
        this.ca_no = ca_no;
        this.buyer_code = buyer_code;
        this.seq_no = seq_no;
        this.app_type = app_type;
        this.joint_buyer_group = joint_buyer_group;
        this.sub_line_amt = sub_line_amt;
        this.sub_line_amt_group = sub_line_amt_group;
        this.sub_os_amt = sub_os_amt;
        this.sub_os_amt_group = sub_os_amt_group;
        this.seller_cr_amt = seller_cr_amt;
        this.seller_os_amt = seller_os_amt;
        this.terms = terms;
        this.noti_type = noti_type;
        this.advance_code = advance_code;
        this.advance_ratio = advance_ratio;
        this.factoring_fee = factoring_fee;
        this.min_facfee = min_facfee;
        this.max_facfee = max_facfee;
        this.pay_mthd = pay_mthd;
        this.other_doc = other_doc;
        this.other_doc_remark = other_doc_remark;
        this.eff_date = eff_date;
        this.expire_dt = expire_dt;
        this.eff_rate = eff_rate;
        this.drirect_payment = drirect_payment;
        this.cancel_date = cancel_date;
        this.cancel_by = cancel_by;
        this.cancel_reason_code = cancel_reason_code;
        this.last_usr = last_usr;
        this.last_upd = last_upd;
        this.input_by = input_by;
        this.input_date = input_date;
        this.progress_payment = progress_payment;
        this.currency_type = currency_type;
        this.ver_waive = ver_waive;
        this.ori_sub_line_amt = ori_sub_line_amt;
        this.buyer_name = buyer_name;
        this.app_type_desc = app_type_desc;
        this.join_group_name = join_group_name;
        this.cr_limit = cr_limit;
        this.address_eng = address_eng;
        this.address_eng2 = address_eng2;
        this.listcabuyerdoc = listcabuyerdoc;
        this.listcafactor = listcafactor;
    }
    caBuyer.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caBuyer(json[i].com_code, json[i].ca_no, json[i].buyer_code, json[i].seq_no, json[i].app_type, json[i].joint_buyer_group, json[i].sub_line_amt, json[i].sub_line_amt_group, json[i].sub_os_amt, json[i].sub_os_amt_group, json[i].seller_cr_amt, json[i].seller_os_amt, json[i].terms, json[i].noti_type, json[i].advance_code, json[i].advance_ratio, json[i].factoring_fee, json[i].min_facfee, json[i].max_facfee, json[i].pay_mthd, json[i].other_doc, json[i].other_doc_remark, json[i].eff_date, json[i].expire_dt, json[i].eff_rate, json[i].drirect_payment, json[i].cancel_date, json[i].cancel_by, json[i].cancel_reason_code, json[i].last_usr, json[i].last_upd, json[i].input_by, json[i].input_date, json[i].progress_payment, json[i].currency_type, json[i].ver_waive, json[i].ori_sub_line_amt, json[i].buyer_name, json[i].app_type_desc, json[i].join_group_name, json[i].cr_limit, json[i].address_eng, json[i].address_eng2, __WEBPACK_IMPORTED_MODULE_0__ca_buyerdoc__["a" /* caBuyerDoc */].parse(json[i].listcabuyerdoc), __WEBPACK_IMPORTED_MODULE_1__ca_factor__["a" /* caFactor */].parse(json[i].listcafactor)));
            }
        }
        return data;
    };
    return caBuyer;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-buyerdoc.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caBuyerDoc; });
var caBuyerDoc = /** @class */ (function () {
    function caBuyerDoc(com_code, ca_no, buyer_code, doc_type, doc_code, factored_doc_type, factored_ifany, effective_date, input_by, input_date, last_update_by, last_update_date, remark, id_code, remark_cat, select_o, select_p, select_c, oth1, oth2, oth3) {
        this.com_code = com_code;
        this.ca_no = ca_no;
        this.buyer_code = buyer_code;
        this.doc_type = doc_type;
        this.doc_code = doc_code;
        this.factored_doc_type = factored_doc_type;
        this.factored_ifany = factored_ifany ? factored_ifany : 'N';
        this.effective_date = effective_date;
        this.input_by = input_by;
        this.input_date = input_date;
        this.last_update_by = last_update_by;
        this.last_update_date = last_update_date;
        this.remark = remark ? remark : '';
        this.id_code = id_code;
        this.remark_cat = remark_cat ? remark_cat : '';
        this.select_o = select_o ? select_o : 'N';
        this.select_p = select_p ? select_p : 'N';
        this.select_c = select_c ? select_c : 'N';
        this.oth1 = oth1 ? oth1 : '';
        this.oth2 = oth2 ? oth2 : '';
        this.oth3 = oth3 ? oth3 : '';
    }
    caBuyerDoc.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caBuyerDoc(json[i].com_code, json[i].ca_no, json[i].buyer_code, json[i].doc_type, json[i].doc_code, json[i].factored_doc_type, json[i].factored_ifany, json[i].effective_date, json[i].input_by, json[i].input_date, json[i].last_update_by, json[i].last_update_date, json[i].remark, json[i].id_code, json[i].remark_cat, json[i].select_o, json[i].select_p, json[i].select_c, json[i].oth1, json[i].oth2, json[i].oth3));
            }
        }
        return data;
    };
    return caBuyerDoc;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-capcl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caCapCl; });
var caCapCl = /** @class */ (function () {
    function caCapCl(running_code, total_cap_amt, total_exposure, current_ca, cancel_dt, cancel_by, input_date, input_by, last_usr, last_upd, over_cap) {
        this.running_code = running_code;
        this.total_cap_amt = total_cap_amt;
        this.total_exposure = total_exposure;
        this.current_ca = current_ca;
        this.cancel_dt = cancel_dt;
        this.cancel_by = cancel_by;
        this.input_date = input_date;
        this.input_by = input_by;
        this.last_usr = last_usr;
        this.last_upd = last_upd;
        this.over_cap = over_cap;
    }
    caCapCl.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caCapCl(json[i].running_code, json[i].total_cap_amt, json[i].total_exposure, json[i].current_ca, json[i].cancel_dt, json[i].cancel_by, json[i].input_date, json[i].input_by, json[i].last_usr, json[i].last_upd, json[i].over_cap));
            }
        }
        return data;
    };
    return caCapCl;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-capclowner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caCapClOwner; });
var caCapClOwner = /** @class */ (function () {
    function caCapClOwner(running_code, seq_no, com_code, sbu_type, seller_code, flg_cap, joint_seller_group, cust_group, this_approve, cancel_dt, cancel_by, input_date, input_by, last_usr, last_upd, seller_name) {
        this.running_code = running_code;
        this.seq_no = seq_no;
        this.com_code = com_code;
        this.sbu_type = sbu_type;
        this.seller_code = seller_code;
        this.flg_cap = flg_cap;
        this.joint_seller_group = joint_seller_group;
        this.cust_group = cust_group;
        this.this_approve = this_approve;
        this.cancel_dt = cancel_dt;
        this.cancel_by = cancel_by;
        this.input_date = input_date;
        this.input_by = input_by;
        this.last_usr = last_usr;
        this.last_upd = last_upd;
        this.seller_name = seller_name;
    }
    caCapClOwner.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caCapClOwner(json[i].running_code, json[i].seq_no, json[i].com_code, json[i].sbu_type, json[i].seller_code, json[i].flg_cap, json[i].joint_seller_group, json[i].cust_group, json[i].this_approve, json[i].cancel_dt, json[i].cancel_by, json[i].input_date, json[i].input_by, json[i].last_usr, json[i].last_upd, json[i].seller_name));
            }
        }
        return data;
    };
    return caCapClOwner;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-capothstore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caCapOthstore; });
/**
 * Created by pongsatorn.an on 01/02/2561.
 */
var caCapOthstore = /** @class */ (function () {
    function caCapOthstore(cus_code, cus_name, com_code, ca_no, os_pri) {
        this.cus_code = cus_code;
        this.cus_name = cus_name;
        this.com_code = com_code;
        this.ca_no = ca_no;
        this.os_pri = os_pri;
    }
    caCapOthstore.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caCapOthstore(json[i].cus_code, json[i].cus_name, json[i].com_code, json[i].ca_no, json[i].os_pri));
            }
        }
        return data;
    };
    return caCapOthstore;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-capstore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caCapstore; });
/**
 * Created by pongsatorn.an on 30/01/2561.
 */
var caCapstore = /** @class */ (function () {
    function caCapstore(p_type, cus_code, cus_name, com_code, ca_no, os_pri, sbu_typ, joint_seller_group, grp_code, total_exposure) {
        this.p_type = p_type;
        this.cus_code = cus_code;
        this.cus_name = cus_name;
        this.com_code = com_code;
        this.ca_no = ca_no;
        this.os_pri = os_pri;
        this.sbu_typ = sbu_typ;
        this.joint_seller_group = joint_seller_group;
        this.grp_code = grp_code;
        this.total_exposure = total_exposure;
    }
    caCapstore.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caCapstore(json[i].p_type, json[i].cus_code, json[i].cus_name, json[i].com_code, json[i].ca_no, json[i].os_pri, json[i].sbu_typ, json[i].joint_seller_group, json[i].grp_code, json[i].total_exposure));
            }
        }
        return data;
    };
    return caCapstore;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-collateral.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caCollateral; });
var caCollateral = /** @class */ (function () {
    function caCollateral(com_code, ca_no, seq_no, clt_type, clt_amt, clt_balance, doc_no, doc_date, rate_type, int_rate, max_int_rate, rate_bank, rate_m, rate_spread, deduct_flg, deduct_pcn, deduct_amt, remark, cal_int_type, printcipal_clg_amt, clt_cash_rcp, cal_int_type_desc, cal_int_mtd_desc, clt_type_desc, rate_m_desc, bank_int_rate) {
        this.com_code = com_code;
        this.ca_no = ca_no;
        this.seq_no = seq_no;
        this.clt_type = clt_type;
        this.clt_amt = clt_amt;
        this.clt_balance = clt_balance;
        this.doc_no = doc_no;
        this.doc_date = doc_date;
        this.rate_type = rate_type;
        this.int_rate = int_rate;
        this.max_int_rate = max_int_rate;
        this.rate_bank = rate_bank;
        this.rate_m = rate_m;
        this.rate_spread = rate_spread;
        this.deduct_flg = deduct_flg;
        this.deduct_pcn = deduct_pcn;
        this.deduct_amt = deduct_amt;
        this.remark = remark;
        this.cal_int_type = cal_int_type;
        this.printcipal_clg_amt = printcipal_clg_amt;
        this.clt_cash_rcp = clt_cash_rcp;
        this.cal_int_type_desc = cal_int_type_desc;
        this.cal_int_mtd_desc = cal_int_mtd_desc;
        this.clt_type_desc = clt_type_desc;
        this.rate_m_desc = rate_m_desc;
        this.bank_int_rate = bank_int_rate;
    }
    caCollateral.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caCollateral(json[i].com_code, json[i].ca_no, json[i].seq_no, json[i].clt_type, json[i].clt_amt, json[i].clt_balance, json[i].doc_no, json[i].doc_date, json[i].rate_type, json[i].int_rate, json[i].max_int_rate, json[i].rate_bank, json[i].rate_m, json[i].rate_spread, json[i].deduct_flg, json[i].deduct_pcn, json[i].deduct_amt, json[i].remark, json[i].cal_int_type, json[i].printcipal_clg_amt, json[i].clt_cash_rcp, json[i].cal_int_type_desc, json[i].cal_int_mtd_desc, json[i].clt_type_desc, json[i].rate_m_desc, json[i].bank_int_rate));
            }
        }
        return data;
    };
    return caCollateral;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-context.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caContext; });
var caContext = /** @class */ (function () {
    function caContext(context_source, context_task, ref_code, context_data, last_upd, last_usr, running_no, a_order, full_namet) {
        this.context_source = context_source;
        this.context_task = context_task;
        this.ref_code = ref_code;
        this.context_data = context_data;
        this.last_upd = last_upd;
        this.last_usr = last_usr;
        this.running_no = running_no;
        this.a_order = a_order;
        this.full_namet = full_namet;
    }
    caContext.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caContext(json[i].context_source, json[i].context_task, json[i].ref_code, json[i].context_data, json[i].last_upd, json[i].last_usr, json[i].running_no, json[i].a_order, json[i].full_namet));
            }
        }
        return data;
    };
    return caContext;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-cusapv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caCusapv; });
/**
 * Created by pongsatorn.an on 25/01/2561.
 */
var caCusapv = /** @class */ (function () {
    function caCusapv(com_code, ca_code, approve_type, approve_runno, approve_person, approve_level, approve_date, document_no, document_date, approve_user, apv_person_name, apv_user_name) {
        this.com_code = com_code;
        this.ca_code = ca_code;
        this.approve_type = approve_type;
        this.approve_runno = approve_runno;
        this.approve_person = approve_person;
        this.approve_level = approve_level;
        this.approve_date = approve_date;
        this.document_no = document_no;
        this.document_date = document_date;
        this.approve_user = approve_user;
        this.apv_person_name = apv_person_name;
        this.apv_user_name = apv_user_name;
    }
    caCusapv.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caCusapv(json[i].com_code, json[i].ca_code, json[i].approve_type, json[i].approve_runno, json[i].approve_person, json[i].approve_level, json[i].approve_date, json[i].document_no, json[i].document_date, json[i].approve_user, json[i].apv_person_name, json[i].apv_user_name));
            }
        }
        return data;
    };
    return caCusapv;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-detail.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caDetail; });
var caDetail = /** @class */ (function () {
    function caDetail(com_code, ca_no, sub_id, main_sub_id, newtr, body, est_disb_date, cost_e_amt, down_e_amt, fin_amt_e_vat, terms, flat_rate, brand, year, asset_description, unit, os_unit, adv_arr, chq_flag, chq_qty, accessory_desc, accessory_amt, mail_to, last_upd, last_usr, input_user, input_date, cost_i_amt, down_i_amt, fin_amt_i_vat, schedule, installment_e_vat, installment_i_vat, gross_irr, net_irr, fin_asst, comm_amt, comm_pcnt, with_vat, est_first_date, net_flat_rate, pdc_disb_flag, mobile_decision, mobile_decision_by, mobile_decision_remark, step_sim_no, model, down_per, down_chassis, down_chassis_per, body_name, brand_name, newtr_name, vat) {
        this.com_code = com_code;
        this.ca_no = ca_no;
        this.sub_id = sub_id;
        this.main_sub_id = main_sub_id;
        this.newtr = newtr;
        this.body = body;
        this.est_disb_date = est_disb_date;
        this.cost_e_amt = cost_e_amt;
        this.down_e_amt = down_e_amt;
        this.fin_amt_e_vat = fin_amt_e_vat;
        this.terms = terms;
        this.flat_rate = flat_rate;
        this.brand = brand;
        this.year = year;
        this.asset_description = asset_description;
        this.unit = unit;
        this.os_unit = os_unit;
        this.adv_arr = adv_arr;
        this.chq_flag = chq_flag;
        this.chq_qty = chq_qty;
        this.accessory_desc = accessory_desc;
        this.accessory_amt = accessory_amt;
        this.mail_to = mail_to;
        this.last_upd = last_upd;
        this.last_usr = last_usr;
        this.input_user = input_user;
        this.input_date = input_date;
        this.cost_i_amt = cost_i_amt;
        this.down_i_amt = down_i_amt;
        this.fin_amt_i_vat = fin_amt_i_vat;
        this.schedule = schedule;
        this.installment_e_vat = installment_e_vat;
        this.installment_i_vat = installment_i_vat;
        this.gross_irr = gross_irr;
        this.net_irr = net_irr;
        this.fin_asst = fin_asst;
        this.comm_amt = comm_amt;
        this.comm_pcnt = comm_pcnt;
        this.with_vat = with_vat;
        this.est_first_date = est_first_date;
        this.net_flat_rate = net_flat_rate;
        this.pdc_disb_flag = pdc_disb_flag;
        this.mobile_decision = mobile_decision;
        this.mobile_decision_by = mobile_decision_by;
        this.mobile_decision_remark = mobile_decision_remark;
        this.step_sim_no = step_sim_no;
        this.model = model;
        this.down_per = down_per;
        this.down_chassis = down_chassis;
        this.down_chassis_per = down_chassis_per;
        this.body_name = body_name;
        this.brand_name = brand_name;
        this.newtr_name = newtr_name;
        this.vat = vat;
    }
    caDetail.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caDetail(json[i].com_code, json[i].ca_no, json[i].sub_id, json[i].main_sub_id, json[i].newtr, json[i].body, json[i].est_disb_date, json[i].cost_e_amt, json[i].down_e_amt, json[i].fin_amt_e_vat, json[i].terms, json[i].flat_rate, json[i].brand, json[i].year, json[i].asset_description, json[i].unit, json[i].os_unit, json[i].adv_arr, json[i].chq_flag, json[i].chq_qty, json[i].accessory_desc, json[i].accessory_amt, json[i].mail_to, json[i].last_upd, json[i].last_usr, json[i].input_user, json[i].input_date, json[i].cost_i_amt, json[i].down_i_amt, json[i].fin_amt_i_vat, json[i].schedule, json[i].installment_e_vat, json[i].installment_i_vat, json[i].gross_irr, json[i].net_irr, json[i].fin_asst, json[i].comm_amt, json[i].comm_pcnt, json[i].with_vat, json[i].est_first_date, json[i].net_flat_rate, json[i].pdc_disb_flag, json[i].mobile_decision, json[i].mobile_decision_by, json[i].mobile_decision_remark, json[i].step_sim_no, json[i].model, json[i].down_per, json[i].down_chassis, json[i].down_chassis_per, json[i].body_name, json[i].brand_name, json[i].newtr_name, json[i].vat));
            }
        }
        return data;
    };
    return caDetail;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ca_cusapv__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-cusapv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ca_opinion__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-opinion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ca_capstore__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-capstore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ca_capothstore__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-capothstore.ts");




var caEntity = /** @class */ (function () {
    function caEntity(com_code, ca_no, ent_type, ent_code, f_name, f_namet, l_namet, f_namee, f_name_e, l_namee, address, zip, post_cd, contract, address_eng, contract_e, tel, new_card_no, last_upd, last_usr, input_user, input_date, nationality_code, birth_d, bus_detail, address_eng2, fax_current, contract_tel, grp_code, mobile_phone, mobile_phone2, mobile_phone3, net_worth_year, net_worth_amt, regis_capital, paid_up_capital, cluster_ind, add_c, add_c_eng, add_c_eng2, add_m, add_m_eng, add_m_eng2, add_o, add_o_eng, add_o_eng2, address_cont_cs, ages, authorize_by_e, authorize_by_t, branch_no, bus_ty, bus_vat_flg, business_type, card_by, card_expire_date, card_issue_date, card_no, card_type, chairman, confirm_statment_flg, currency_code, email_address, ent_ty, establish_date, fax_office, high, highest, highest_hp, highest_ls, ind_ty, loc_ty, mkt_bgpl, mname, near, near_eng, near_o, near_o_eng, occupa, office_department, office_name, other_income, person_collect_billing, place_billing, place_collect, posi, post_cd_c, post_cd_m, post_cd_o, prv_cont, salary_per_year, sales_amt, sales_year, sex, spous_ages, spous_occup, spous_office_department, spous_office_name, spous_other_income, spous_posi, spous_salary, spous_tel, spouse_card_no, spouse_card_type, status_m, tel_card, tel_o, web_site, weight, zip_c, zip_m, zip_o, title_eng, title_thi, card_type_desc, bus_detail_desc, zip_desc, grp_name, bus_ty_desc, regis_capital_mb, paid_up_capital_mb, sales_amt_mb, net_worth_amt_mb, zip_c_desc, zip_o_desc, zip_m_desc, ap_no, sale_call_no, listcapstore, listcusapv, listopinion, listcapothstore) {
        if (ap_no === void 0) { ap_no = ''; }
        if (sale_call_no === void 0) { sale_call_no = ''; }
        this.com_code = com_code;
        this.ca_no = ca_no;
        this.ent_type = ent_type;
        this.ent_code = ent_code;
        this.f_name = f_name;
        this.f_namet = f_namet;
        this.l_namet = l_namet;
        this.f_namee = f_namee;
        this.f_name_e = f_name_e;
        this.l_namee = l_namee;
        this.address = address;
        this.zip = zip;
        this.post_cd = post_cd;
        this.contract = contract;
        this.address_eng = address_eng;
        this.contract_e = contract_e;
        this.tel = tel;
        this.new_card_no = new_card_no;
        this.last_upd = last_upd;
        this.last_usr = last_usr;
        this.input_user = input_user;
        this.input_date = input_date;
        this.nationality_code = nationality_code;
        this.birth_d = birth_d;
        this.bus_detail = bus_detail;
        this.address_eng2 = address_eng2;
        this.fax_current = fax_current;
        this.contract_tel = contract_tel;
        this.grp_code = grp_code;
        this.mobile_phone = mobile_phone;
        this.mobile_phone2 = mobile_phone2;
        this.mobile_phone3 = mobile_phone3;
        this.net_worth_year = net_worth_year;
        this.net_worth_amt = net_worth_amt;
        this.regis_capital = regis_capital;
        this.paid_up_capital = paid_up_capital;
        this.cluster_ind = cluster_ind;
        this.add_c = add_c;
        this.add_c_eng = add_c_eng;
        this.add_c_eng2 = add_c_eng2;
        this.add_m = add_m;
        this.add_m_eng = add_m_eng;
        this.add_m_eng2 = add_m_eng2;
        this.add_o = add_o;
        this.add_o_eng = add_o_eng;
        this.add_o_eng2 = add_o_eng2;
        this.address_cont_cs = address_cont_cs;
        this.ages = ages;
        this.authorize_by_e = authorize_by_e;
        this.authorize_by_t = authorize_by_t;
        this.branch_no = branch_no;
        this.bus_ty = bus_ty;
        this.bus_vat_flg = bus_vat_flg;
        this.business_type = business_type;
        this.card_by = card_by;
        this.card_expire_date = card_expire_date;
        this.card_issue_date = card_issue_date;
        this.card_no = card_no;
        this.card_type = card_type;
        this.chairman = chairman;
        this.confirm_statment_flg = confirm_statment_flg;
        this.currency_code = currency_code;
        this.email_address = email_address;
        this.ent_ty = ent_ty;
        this.establish_date = establish_date;
        this.fax_office = fax_office;
        this.high = high;
        this.highest = highest;
        this.highest_hp = highest_hp;
        this.highest_ls = highest_ls;
        this.ind_ty = ind_ty;
        this.loc_ty = loc_ty;
        this.mkt_bgpl = mkt_bgpl;
        this.mname = mname;
        this.near = near;
        this.near_eng = near_eng;
        this.near_o = near_o;
        this.near_o_eng = near_o_eng;
        this.occupa = occupa;
        this.office_department = office_department;
        this.office_name = office_name;
        this.other_income = other_income;
        this.person_collect_billing = person_collect_billing;
        this.place_billing = place_billing;
        this.place_collect = place_collect;
        this.posi = posi;
        this.post_cd_c = post_cd_c;
        this.post_cd_m = post_cd_m;
        this.post_cd_o = post_cd_o;
        this.prv_cont = prv_cont;
        this.salary_per_year = salary_per_year;
        this.sales_amt = sales_amt;
        this.sales_year = sales_year;
        this.sex = sex;
        this.spous_ages = spous_ages;
        this.spous_occup = spous_occup;
        this.spous_office_department = spous_office_department;
        this.spous_office_name = spous_office_name;
        this.spous_other_income = spous_other_income;
        this.spous_posi = spous_posi;
        this.spous_salary = spous_salary;
        this.spous_tel = spous_tel;
        this.spouse_card_no = spouse_card_no;
        this.spouse_card_type = spouse_card_type;
        this.status_m = status_m;
        this.tel_card = tel_card;
        this.tel_o = tel_o;
        this.web_site = web_site;
        this.weight = weight;
        this.zip_c = zip_c;
        this.zip_m = zip_m;
        this.zip_o = zip_o;
        this.title_eng = title_eng;
        this.title_thi = title_thi;
        this.card_type_desc = card_type_desc;
        this.bus_detail_desc = bus_detail_desc;
        this.zip_desc = zip_desc;
        this.grp_name = grp_name;
        this.bus_ty_desc = bus_ty_desc;
        this.regis_capital_mb = regis_capital_mb;
        this.paid_up_capital_mb = paid_up_capital_mb;
        this.sales_amt_mb = sales_amt_mb;
        this.net_worth_amt_mb = net_worth_amt_mb;
        this.zip_c_desc = zip_c_desc;
        this.zip_o_desc = zip_o_desc;
        this.zip_m_desc = zip_m_desc;
        this.ap_no = ap_no;
        this.sale_call_no = sale_call_no;
        this.listcapstore = listcapstore;
        this.listcusapv = listcusapv;
        this.listopinion = listopinion;
        this.listcapothstore = listcapothstore;
    }
    caEntity.parse = function (json) {
        var data;
        if (!json) {
            data = new caEntity();
        }
        else {
            data = new caEntity(json.com_code, json.ca_no, json.ent_type, json.ent_code, json.f_name, json.f_namet, json.l_namet, json.f_namee, json.f_name_e, json.l_namee, json.address, json.zip, json.post_cd, json.contract, json.address_eng, json.contract_e, json.tel, json.new_card_no, json.last_upd, json.last_usr, json.input_user, json.input_date, json.nationality_code, json.birth_d, json.bus_detail, json.address_eng2, json.fax_current, json.contract_tel, json.grp_code, json.mobile_phone, json.mobile_phone2, json.mobile_phone3, json.net_worth_year, json.net_worth_amt, json.regis_capital, json.paid_up_capital, json.cluster_ind, json.add_c, json.add_c_eng, json.add_c_eng2, json.add_m, json.add_m_eng, json.add_m_eng2, json.add_o, json.add_o_eng, json.add_o_eng2, json.address_cont_cs, json.ages, json.authorize_by_e, json.authorize_by_t, json.branch_no, json.bus_ty, json.bus_vat_flg, json.business_type, json.card_by, json.card_expire_date, json.card_issue_date, json.card_no, json.card_type, json.chairman, json.confirm_statment_flg, json.currency_code, json.email_address, json.ent_ty, json.establish_date, json.fax_office, json.high, json.highest, json.highest_hp, json.highest_ls, json.ind_ty, json.loc_ty, json.mkt_bgpl, json.mname, json.near, json.near_eng, json.near_o, json.near_o_eng, json.occupa, json.office_department, json.office_name, json.other_income, json.person_collect_billing, json.place_billing, json.place_collect, json.posi, json.post_cd_c, json.post_cd_m, json.post_cd_o, json.prv_cont, json.salary_per_year, json.sales_amt, json.sales_year, json.sex, json.spous_ages, json.spous_occup, json.spous_office_department, json.spous_office_name, json.spous_other_income, json.spous_posi, json.spous_salary, json.spous_tel, json.spouse_card_no, json.spouse_card_type, json.status_m, json.tel_card, json.tel_o, json.web_site, json.weight, json.zip_c, json.zip_m, json.zip_o, json.title_eng, json.title_thi, json.card_type_desc, json.bus_detail_desc, json.zip_desc, json.grp_name, json.bus_ty_desc, json.regis_capital_mb, json.paid_up_capital_mb, json.sales_amt_mb, json.net_worth_amt_mb, json.zip_c_desc, json.zip_o_desc, json.zip_m_desc, json.ap_no, json.sale_call_no, __WEBPACK_IMPORTED_MODULE_2__ca_capstore__["a" /* caCapstore */].parse(json.listcapstore), __WEBPACK_IMPORTED_MODULE_0__ca_cusapv__["a" /* caCusapv */].parse(json.listcusapv), __WEBPACK_IMPORTED_MODULE_1__ca_opinion__["a" /* caOpinion */].parse(json.listopinion), __WEBPACK_IMPORTED_MODULE_3__ca_capothstore__["a" /* caCapOthstore */].parse(json.listcapothstore));
        }
        return data;
    };
    return caEntity;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-exposure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caExposure; });
/**
 * Created by pongsatorn.an on 25/12/2560.
 */
var caExposure = /** @class */ (function () {
    function caExposure(id, product, exposure, os_balance, maturity_date, highest_amt, with_collateral, with_out_collateral, bl_flg, discount_creditline, approve_type, min_eff_rate, cap, ca_approve_date, down_percent, fin_amt_e_vat, grade, installment, net_irr, paid) {
        this.id = id;
        this.product = product;
        this.exposure = exposure;
        this.os_balance = os_balance;
        this.maturity_date = maturity_date;
        this.highest_amt = highest_amt;
        this.with_collateral = with_collateral;
        this.with_out_collateral = with_out_collateral;
        this.bl_flg = bl_flg;
        this.discount_creditline = discount_creditline;
        this.approve_type = approve_type;
        this.min_eff_rate = min_eff_rate;
        this.cap = cap;
        this.ca_approve_date = ca_approve_date;
        this.down_percent = down_percent;
        this.fin_amt_e_vat = fin_amt_e_vat;
        this.grade = grade;
        this.installment = installment;
        this.net_irr = net_irr;
        this.paid = paid;
    }
    caExposure.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caExposure(json[i].id, json[i].product, json[i].exposure, json[i].os_balance, json[i].maturity_date, json[i].highest_amt, json[i].with_collateral, json[i].with_out_collateral, json[i].bl_flg, json[i].discount_creditline, json[i].approve_type, json[i].min_eff_rate, json[i].cap, json[i].ca_approve_date, json[i].down_percent, json[i].fin_amt_e_vat, json[i].grade, json[i].installment, json[i].net_irr, json[i].paid));
            }
        }
        return data;
    };
    return caExposure;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-factor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caFactor; });
var caFactor = /** @class */ (function () {
    function caFactor(com_code, ca_no, buyer_code, factor_code, priority_level, apply_amt, factor_type, max_cr_line, currency_code, comm_rate, handing_comm, handing_comm_cur, last_usr, last_upd, input_by, input_date, sbu_typ, factor_name, currency_code_desc) {
        this.com_code = com_code;
        this.ca_no = ca_no;
        this.buyer_code = buyer_code;
        this.factor_code = factor_code;
        this.priority_level = priority_level;
        this.apply_amt = apply_amt;
        this.factor_type = factor_type;
        this.max_cr_line = max_cr_line;
        this.currency_code = currency_code;
        this.comm_rate = comm_rate;
        this.handing_comm = handing_comm;
        this.handing_comm_cur = handing_comm_cur;
        this.last_usr = last_usr;
        this.last_upd = last_upd;
        this.input_by = input_by;
        this.input_date = input_date;
        this.sbu_typ = sbu_typ;
        this.factor_name = factor_name;
        this.currency_code_desc = currency_code_desc;
    }
    caFactor.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caFactor(json[i].com_code, json[i].ca_no, json[i].buyer_code, json[i].factor_code, json[i].priority_level, json[i].apply_amt, json[i].factor_type, json[i].max_cr_line, json[i].currency_code, json[i].comm_rate, json[i].handing_comm, json[i].handing_comm_cur, json[i].last_usr, json[i].last_upd, json[i].input_by, json[i].input_date, json[i].sbu_typ, json[i].factor_name, json[i].currency_code_desc));
            }
        }
        return data;
    };
    return caFactor;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-guarantor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caGuarantor; });
var caGuarantor = /** @class */ (function () {
    function caGuarantor(com_code, ca_no, ent_type, ent_code, f_name, f_namet, l_namet, f_namee, f_name_e, l_namee, address, zip, post_cd, contract, address_eng, contract_e, tel, new_card_no, last_upd, last_usr, input_user, input_date, nationality_code, birth_d, bus_detail, address_eng2, fax_current, contract_tel, grp_code, mobile_phone, mobile_phone2, mobile_phone3, net_worth_year, net_worth_amt, regis_capital, paid_up_capital, cluster_ind, add_c, add_c_eng, add_c_eng2, add_m, add_m_eng, add_m_eng2, add_o, add_o_eng, add_o_eng2, address_cont_cs, ages, authorize_by_e, authorize_by_t, branch_no, bus_ty, bus_vat_flg, business_type, card_by, card_expire_date, card_issue_date, card_no, card_type, chairman, confirm_statment_flg, currency_code, email_address, ent_ty, establish_date, fax_office, high, highest, highest_hp, highest_ls, ind_ty, loc_ty, mkt_bgpl, mname, near, near_eng, near_o, near_o_eng, occupa, office_department, office_name, other_income, person_collect_billing, place_billing, place_collect, posi, post_cd_c, post_cd_m, post_cd_o, prv_cont, salary_per_year, sales_amt, sales_year, sex, spous_ages, spous_occup, spous_office_department, spous_office_name, spous_other_income, spous_posi, spous_salary, spous_tel, spouse_card_no, spouse_card_type, status_m, tel_card, tel_o, web_site, weight, zip_c, zip_m, zip_o, guar_code, ref_code, remark, relation_with_cus, seq_no, business_detail, ca_condition, ca_remark, connect_since, cus_status, highest_amt, ncb_run_no, org_crd_grd, prim_scr, prim_scr_rsult, req_run_no, responsibility_level, score, upd_crd_grd, ver_emp_cd, ver_opn, bl_flag, title_eng, title_thi, card_type_desc, bus_detail_desc, zip_desc, grp_name, bus_ty_desc, regis_capital_mb, paid_up_capital_mb, sales_amt_mb, net_worth_amt_mb, zip_c_desc, zip_o_desc, zip_m_desc, ap_no, sale_call_no) {
        if (ap_no === void 0) { ap_no = ''; }
        if (sale_call_no === void 0) { sale_call_no = ''; }
        this.com_code = com_code;
        this.ca_no = ca_no;
        this.ent_type = ent_type;
        this.ent_code = ent_code;
        this.f_name = f_name;
        this.f_namet = f_namet;
        this.l_namet = l_namet;
        this.f_namee = f_namee;
        this.f_name_e = f_name_e;
        this.l_namee = l_namee;
        this.address = address;
        this.zip = zip;
        this.post_cd = post_cd;
        this.contract = contract;
        this.address_eng = address_eng;
        this.contract_e = contract_e;
        this.tel = tel;
        this.new_card_no = new_card_no;
        this.last_upd = last_upd;
        this.last_usr = last_usr;
        this.input_user = input_user;
        this.input_date = input_date;
        this.nationality_code = nationality_code;
        this.birth_d = birth_d;
        this.bus_detail = bus_detail;
        this.address_eng2 = address_eng2;
        this.fax_current = fax_current;
        this.contract_tel = contract_tel;
        this.grp_code = grp_code;
        this.mobile_phone = mobile_phone;
        this.mobile_phone2 = mobile_phone2;
        this.mobile_phone3 = mobile_phone3;
        this.net_worth_year = net_worth_year;
        this.net_worth_amt = net_worth_amt;
        this.regis_capital = regis_capital;
        this.paid_up_capital = paid_up_capital;
        this.cluster_ind = cluster_ind;
        this.add_c = add_c;
        this.add_c_eng = add_c_eng;
        this.add_c_eng2 = add_c_eng2;
        this.add_m = add_m;
        this.add_m_eng = add_m_eng;
        this.add_m_eng2 = add_m_eng2;
        this.add_o = add_o;
        this.add_o_eng = add_o_eng;
        this.add_o_eng2 = add_o_eng2;
        this.address_cont_cs = address_cont_cs;
        this.ages = ages;
        this.authorize_by_e = authorize_by_e;
        this.authorize_by_t = authorize_by_t;
        this.branch_no = branch_no;
        this.bus_ty = bus_ty;
        this.bus_vat_flg = bus_vat_flg;
        this.business_type = business_type;
        this.card_by = card_by;
        this.card_expire_date = card_expire_date;
        this.card_issue_date = card_issue_date;
        this.card_no = card_no;
        this.card_type = card_type;
        this.chairman = chairman;
        this.confirm_statment_flg = confirm_statment_flg;
        this.currency_code = currency_code;
        this.email_address = email_address;
        this.ent_ty = ent_ty;
        this.establish_date = establish_date;
        this.fax_office = fax_office;
        this.high = high;
        this.highest = highest;
        this.highest_hp = highest_hp;
        this.highest_ls = highest_ls;
        this.ind_ty = ind_ty;
        this.loc_ty = loc_ty;
        this.mkt_bgpl = mkt_bgpl;
        this.mname = mname;
        this.near = near;
        this.near_eng = near_eng;
        this.near_o = near_o;
        this.near_o_eng = near_o_eng;
        this.occupa = occupa;
        this.office_department = office_department;
        this.office_name = office_name;
        this.other_income = other_income;
        this.person_collect_billing = person_collect_billing;
        this.place_billing = place_billing;
        this.place_collect = place_collect;
        this.posi = posi;
        this.post_cd_c = post_cd_c;
        this.post_cd_m = post_cd_m;
        this.post_cd_o = post_cd_o;
        this.prv_cont = prv_cont;
        this.salary_per_year = salary_per_year;
        this.sales_amt = sales_amt;
        this.sales_year = sales_year;
        this.sex = sex;
        this.spous_ages = spous_ages;
        this.spous_occup = spous_occup;
        this.spous_office_department = spous_office_department;
        this.spous_office_name = spous_office_name;
        this.spous_other_income = spous_other_income;
        this.spous_posi = spous_posi;
        this.spous_salary = spous_salary;
        this.spous_tel = spous_tel;
        this.spouse_card_no = spouse_card_no;
        this.spouse_card_type = spouse_card_type;
        this.status_m = status_m;
        this.tel_card = tel_card;
        this.tel_o = tel_o;
        this.web_site = web_site;
        this.weight = weight;
        this.zip_c = zip_c;
        this.zip_m = zip_m;
        this.zip_o = zip_o;
        this.guar_code = guar_code;
        this.ref_code = ref_code;
        this.remark = remark;
        this.relation_with_cus = relation_with_cus;
        this.seq_no = seq_no;
        this.business_detail = business_detail;
        this.ca_condition = ca_condition;
        this.ca_remark = ca_remark;
        this.connect_since = connect_since;
        this.cus_status = cus_status;
        this.highest_amt = highest_amt;
        this.ncb_run_no = ncb_run_no;
        this.org_crd_grd = org_crd_grd;
        this.prim_scr = prim_scr;
        this.prim_scr_rsult = prim_scr_rsult;
        this.req_run_no = req_run_no;
        this.responsibility_level = responsibility_level;
        this.score = score;
        this.upd_crd_grd = upd_crd_grd;
        this.ver_emp_cd = ver_emp_cd;
        this.ver_opn = ver_opn;
        this.bl_flag = bl_flag;
        this.title_eng = title_eng;
        this.title_thi = title_thi;
        this.card_type_desc = card_type_desc;
        this.bus_detail_desc = bus_detail_desc;
        this.zip_desc = zip_desc;
        this.grp_name = grp_name;
        this.bus_ty_desc = bus_ty_desc;
        this.regis_capital_mb = regis_capital_mb;
        this.paid_up_capital_mb = paid_up_capital_mb;
        this.sales_amt_mb = sales_amt_mb;
        this.net_worth_amt_mb = net_worth_amt_mb;
        this.zip_c_desc = zip_c_desc;
        this.zip_o_desc = zip_o_desc;
        this.zip_m_desc = zip_m_desc;
        this.ap_no = ap_no;
        this.sale_call_no = sale_call_no;
    }
    caGuarantor.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caGuarantor(json[i].com_code, json[i].ca_no, json[i].ent_type, json[i].ent_code, json[i].f_name, json[i].f_namet, json[i].l_namet, json[i].f_namee, json[i].f_name_e, json[i].l_namee, json[i].address, json[i].zip, json[i].post_cd, json[i].contract, json[i].address_eng, json[i].contract_e, json[i].tel, json[i].new_card_no, json[i].last_upd, json[i].last_usr, json[i].input_user, json[i].input_date, json[i].nationality_code, json[i].birth_d, json[i].bus_detail, json[i].address_eng2, json[i].fax_current, json[i].contract_tel, json[i].grp_code, json[i].mobile_phone, json[i].mobile_phone2, json[i].mobile_phone3, json[i].net_worth_year, json[i].net_worth_amt, json[i].regis_capital, json[i].paid_up_capital, json[i].cluster_ind, json[i].add_c, json[i].add_c_eng, json[i].add_c_eng2, json[i].add_m, json[i].add_m_eng, json[i].add_m_eng2, json[i].add_o, json[i].add_o_eng, json[i].add_o_eng2, json[i].address_cont_cs, json[i].ages, json[i].authorize_by_e, json[i].authorize_by_t, json[i].branch_no, json[i].bus_ty, json[i].bus_vat_flg, json[i].business_type, json[i].card_by, json[i].card_expire_date, json[i].card_issue_date, json[i].card_no, json[i].card_type, json[i].chairman, json[i].confirm_statment_flg, json[i].currency_code, json[i].email_address, json[i].ent_ty, json[i].establish_date, json[i].fax_office, json[i].high, json[i].highest, json[i].highest_hp, json[i].highest_ls, json[i].ind_ty, json[i].loc_ty, json[i].mkt_bgpl, json[i].mname, json[i].near, json[i].near_eng, json[i].near_o, json[i].near_o_eng, json[i].occupa, json[i].office_department, json[i].office_name, json[i].other_income, json[i].person_collect_billing, json[i].place_billing, json[i].place_collect, json[i].posi, json[i].post_cd_c, json[i].post_cd_m, json[i].post_cd_o, json[i].prv_cont, json[i].salary_per_year, json[i].sales_amt, json[i].sales_year, json[i].sex, json[i].spous_ages, json[i].spous_occup, json[i].spous_office_department, json[i].spous_office_name, json[i].spous_other_income, json[i].spous_posi, json[i].spous_salary, json[i].spous_tel, json[i].spouse_card_no, json[i].spouse_card_type, json[i].status_m, json[i].tel_card, json[i].tel_o, json[i].web_site, json[i].weight, json[i].zip_c, json[i].zip_m, json[i].zip_o, json[i].guar_code, json[i].ref_code, json[i].remark, json[i].relation_with_cus, json[i].seq_no, json[i].business_detail, json[i].ca_condition, json[i].ca_remark, json[i].connect_since, json[i].cus_status, json[i].highest_amt, json[i].ncb_run_no, json[i].org_crd_grd, json[i].prim_scr, json[i].prim_scr_rsult, json[i].req_run_no, json[i].responsibility_level, json[i].score, json[i].upd_crd_grd, json[i].ver_emp_cd, json[i].ver_opn, json[i].bl_flag, json[i].title_eng, json[i].title_thi, json[i].card_type_desc, json[i].bus_detail_desc, json[i].zip_desc, json[i].grp_name, json[i].bus_ty_desc, json[i].regis_capital_mb, json[i].paid_up_capital_mb, json[i].sales_amt_mb, json[i].net_worth_amt_mb, json[i].zip_c_desc, json[i].zip_o_desc, json[i].zip_m_desc, json[i].ap_no, json[i].sale_call_no));
            }
        }
        return data;
    };
    return caGuarantor;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-head.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caHead; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ca_entity__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ca_pcnind__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-pcnind.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ca_guarantor__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-guarantor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ca_bgdetail__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-bgdetail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ca_context__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ca_assetsite__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-assetsite.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ca_pricing__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-pricing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ca_buyer__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-buyer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ca_apvhist__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-apvhist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ca_capcl__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-capcl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ca_capclowner__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-capclowner.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ca_collateral__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-collateral.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ca_detail__ = __webpack_require__("../../../../../src/app/main/mst/credit-application/model/ca-detail.ts");













var caHead = /** @class */ (function () {
    function caHead(com_code, prebranch_code, ca_no, sale_call_no, ctrl_no, cus_status, cus_code, grp_code, joint_seller_group, sbu_typ, advance_type, apply_by, apply_dt, expire_dt, contract_no, contract_date, contract_expire_date, mkt_code, ori_ca, ref_old_ca, intro_by, score, grade, incorporate_date, sales_year, sales_amt, net_worth_year, net_worth_amt, regis_capital, paid_up_capital, connect_since, business_type, total_exposure_cap, total_exposure_cal, fin_asst, ca_condition, ca_remark, ca_prv_cond, ca_approve_date, verifier, apprv_ver_by, apprv_ver_date, apprv_status, approve_credit_by_code, opinion_pro, opinion_con, opinion_suggest, expected_dt, follow_up_point, res_follow_up, print_ca_date, current_task, current_level_approve, max_level_aprove, settle_inv, last_usr, last_upd, need_guarantor, amend_time, intro_mthd_cd, review_level, review_level_max, cancel_date, authority_ca, print_contract_date, print_contract_by, close_date, total_exposure, business_detail, running_cap, above_manual, bus_detail, ca_type, cluster_ind, current_level_approve_review, highest_amt, intro_mthd_rmk, main_credit_line, max_level_aprove_review, mobile_decision, mobile_decision_by, mobile_decision_rmk, mobile_source, ncb_run_no, outlet, req_run_no, this_approve, verify_head, revise_time, bl_flag, apprv_cl_cust_amt, apprv_cl_cust_amt_grp, apprv_cl_dealer_amt, apprv_cl_dealer_amt_grp, apprv_hp_amt, apprv_hp_amt_grp, apprv_ls_amt, apprv_ls_amt_grp, ca_amt_cancel, ca_comment, credit_line_no, expo_ls_amt, expo_hp_amt, expo_ls_amt_grp, expo_hp_amt_grp, highest_amt_grp, highest_ls_amt, highest_hp_amt, highest_ls_amt_grp, highest_hp_amt_grp, last_due_ls, last_due_hp, mkt_grp, os_ar_hp, os_ar_ls, os_credit_amt, os_credit_line_amt, reqst_credit_amt, intro_by_cd, mkt_name, cus_name, sbu_type_desc, team_mkt_leader, verifier_name, join_group_name, join_group_cr, intro_mthd_desc, intro_by_name, title_authority, above_level, rec_agr_flag, rec_cond, rec_usr, rec_upd, ap_rec_agr_flag, ap_rec_amount, ap_rec_cond, caentity, listpcnind, listcaguarantor, listbgdetail, listcacontext, listassetsite, listcapricing, listcabuyer, listcaapvhist, listcacapcl, listcacapclowner, listcacollateral, listcadetail) {
        this.com_code = com_code;
        this.prebranch_code = prebranch_code;
        this.ca_no = ca_no;
        this.sale_call_no = sale_call_no;
        this.ctrl_no = ctrl_no;
        this.cus_status = cus_status;
        this.cus_code = cus_code;
        this.grp_code = grp_code;
        this.joint_seller_group = joint_seller_group;
        this.sbu_typ = sbu_typ;
        this.advance_type = advance_type;
        this.apply_by = apply_by;
        this.apply_dt = apply_dt;
        this.expire_dt = expire_dt;
        this.contract_no = contract_no;
        this.contract_date = contract_date;
        this.contract_expire_date = contract_expire_date;
        this.mkt_code = mkt_code;
        this.ori_ca = ori_ca;
        this.ref_old_ca = ref_old_ca;
        this.intro_by = intro_by;
        this.score = score;
        this.grade = grade;
        this.incorporate_date = incorporate_date;
        this.sales_year = sales_year;
        this.sales_amt = sales_amt;
        this.net_worth_year = net_worth_year;
        this.net_worth_amt = net_worth_amt;
        this.regis_capital = regis_capital;
        this.paid_up_capital = paid_up_capital;
        this.connect_since = connect_since;
        this.business_type = business_type;
        this.total_exposure_cap = total_exposure_cap;
        this.total_exposure_cal = total_exposure_cal;
        this.fin_asst = fin_asst;
        this.ca_condition = ca_condition ? ca_condition : '';
        this.ca_remark = ca_remark;
        this.ca_prv_cond = ca_prv_cond;
        this.ca_approve_date = ca_approve_date;
        this.verifier = verifier;
        this.apprv_ver_by = apprv_ver_by;
        this.apprv_ver_date = apprv_ver_date;
        this.apprv_status = apprv_status;
        this.approve_credit_by_code = approve_credit_by_code;
        this.opinion_pro = opinion_pro;
        this.opinion_con = opinion_con;
        this.opinion_suggest = opinion_suggest;
        this.expected_dt = expected_dt;
        this.follow_up_point = follow_up_point;
        this.res_follow_up = res_follow_up;
        this.print_ca_date = print_ca_date;
        this.current_task = current_task;
        this.current_level_approve = current_level_approve;
        this.max_level_aprove = max_level_aprove;
        this.settle_inv = settle_inv;
        this.last_usr = last_usr;
        this.last_upd = last_upd;
        this.need_guarantor = need_guarantor;
        this.amend_time = amend_time;
        this.intro_mthd_cd = intro_mthd_cd;
        this.review_level = review_level;
        this.review_level_max = review_level_max;
        this.cancel_date = cancel_date;
        this.authority_ca = authority_ca;
        this.print_contract_date = print_contract_date;
        this.print_contract_by = print_contract_by;
        this.close_date = close_date;
        this.total_exposure = total_exposure;
        this.business_detail = business_detail;
        this.running_cap = running_cap;
        this.above_manual = above_manual;
        this.bus_detail = bus_detail;
        this.ca_type = ca_type;
        this.cluster_ind = cluster_ind;
        this.current_level_approve_review = current_level_approve_review;
        this.highest_amt = highest_amt;
        this.intro_mthd_rmk = intro_mthd_rmk;
        this.main_credit_line = main_credit_line;
        this.max_level_aprove_review = max_level_aprove_review;
        this.mobile_decision = mobile_decision;
        this.mobile_decision_by = mobile_decision_by;
        this.mobile_decision_rmk = mobile_decision_rmk;
        this.mobile_source = mobile_source;
        this.ncb_run_no = ncb_run_no;
        this.outlet = outlet;
        this.req_run_no = req_run_no;
        this.this_approve = this_approve;
        this.verify_head = verify_head;
        this.revise_time = revise_time;
        this.bl_flag = bl_flag;
        this.apprv_cl_cust_amt = apprv_cl_cust_amt;
        this.apprv_cl_cust_amt_grp = apprv_cl_cust_amt_grp;
        this.apprv_cl_dealer_amt = apprv_cl_dealer_amt;
        this.apprv_cl_dealer_amt_grp = apprv_cl_dealer_amt_grp;
        this.apprv_hp_amt = apprv_hp_amt;
        this.apprv_hp_amt_grp = apprv_hp_amt_grp;
        this.apprv_ls_amt = apprv_ls_amt;
        this.apprv_ls_amt_grp = apprv_ls_amt_grp;
        this.ca_amt_cancel = ca_amt_cancel;
        this.ca_comment = ca_comment;
        this.credit_line_no = credit_line_no;
        this.expo_ls_amt = expo_ls_amt;
        this.expo_hp_amt = expo_hp_amt;
        this.expo_ls_amt_grp = expo_ls_amt_grp;
        this.expo_hp_amt_grp = expo_hp_amt_grp;
        this.highest_amt_grp = highest_amt_grp;
        this.highest_ls_amt = highest_ls_amt;
        this.highest_hp_amt = highest_hp_amt;
        this.highest_ls_amt_grp = highest_ls_amt_grp;
        this.highest_hp_amt_grp = highest_hp_amt_grp;
        this.last_due_ls = last_due_ls;
        this.last_due_hp = last_due_hp;
        this.mkt_grp = mkt_grp;
        this.os_ar_hp = os_ar_hp;
        this.os_ar_ls = os_ar_ls;
        this.os_credit_amt = os_credit_amt;
        this.os_credit_line_amt = os_credit_line_amt;
        this.reqst_credit_amt = reqst_credit_amt;
        this.intro_by_cd = intro_by_cd;
        this.mkt_name = mkt_name;
        this.cus_name = cus_name;
        this.sbu_type_desc = sbu_type_desc;
        this.team_mkt_leader = team_mkt_leader;
        this.verifier_name = verifier_name;
        this.join_group_name = join_group_name;
        this.join_group_cr = join_group_cr;
        this.intro_mthd_desc = intro_mthd_desc;
        this.intro_by_name = intro_by_name;
        this.title_authority = title_authority;
        this.above_level = above_level;
        this.rec_agr_flag = rec_agr_flag;
        this.rec_cond = rec_cond;
        this.rec_usr = rec_usr;
        this.rec_upd = rec_upd;
        this.ap_rec_agr_flag = ap_rec_agr_flag;
        this.ap_rec_amount = ap_rec_amount;
        this.ap_rec_cond = ap_rec_cond;
        this.caentity = caentity;
        this.listpcnind = listpcnind;
        this.listcaguarantor = listcaguarantor;
        this.listbgdetail = listbgdetail;
        this.listcacontext = listcacontext;
        this.listassetsite = listassetsite;
        this.listcapricing = listcapricing;
        this.listcabuyer = listcabuyer;
        this.listcaapvhist = listcaapvhist;
        this.listcacapcl = listcacapcl;
        this.listcacapclowner = listcacapclowner;
        this.listcacollateral = listcacollateral;
        this.listcadetail = listcadetail;
    }
    caHead.parse = function (json) {
        return new caHead(json.com_code, json.prebranch_code, json.ca_no, json.sale_call_no, json.ctrl_no, json.cus_status, json.cus_code, json.grp_code, json.joint_seller_group, json.sbu_typ, json.advance_type, json.apply_by, json.apply_dt, json.expire_dt, json.contract_no, json.contract_date, json.contract_expire_date, json.mkt_code, json.ori_ca, json.ref_old_ca, json.intro_by, json.score, json.grade, json.incorporate_date, json.sales_year, json.sales_amt, json.net_worth_year, json.net_worth_amt, json.regis_capital, json.paid_up_capital, json.connect_since, json.business_type, json.total_exposure_cap, json.total_exposure_cal, json.fin_asst, json.ca_condition, json.ca_remark, json.ca_prv_cond, json.ca_approve_date, json.verifier, json.apprv_ver_by, json.apprv_ver_date, json.apprv_status, json.approve_credit_by_code, json.opinion_pro, json.opinion_con, json.opinion_suggest, json.expected_dt, json.follow_up_point, json.res_follow_up, json.print_ca_date, json.current_task, json.current_level_approve, json.max_level_aprove, json.settle_inv, json.last_usr, json.last_upd, json.need_guarantor, json.amend_time, json.intro_mthd_cd, json.review_level, json.review_level_max, json.cancel_date, json.authority_ca, json.print_contract_date, json.print_contract_by, json.close_date, json.total_exposure, json.business_detail, json.running_cap, json.above_manual, json.bus_detail, json.ca_type, json.cluster_ind, json.current_level_approve_review, json.highest_amt, json.intro_mthd_rmk, json.main_credit_line, json.max_level_aprove_review, json.mobile_decision, json.mobile_decision_by, json.mobile_decision_rmk, json.mobile_source, json.ncb_run_no, json.outlet, json.req_run_no, json.this_approve, json.verify_head, json.revise_time, json.bl_flag, json.apprv_cl_cust_amt, json.apprv_cl_cust_amt_grp, json.apprv_cl_dealer_amt, json.apprv_cl_dealer_amt_grp, json.apprv_hp_amt, json.apprv_hp_amt_grp, json.apprv_ls_amt, json.apprv_ls_amt_grp, json.ca_amt_cancel, json.ca_comment, json.credit_line_no, json.expo_ls_amt, json.expo_hp_amt, json.expo_ls_amt_grp, json.expo_hp_amt_grp, json.highest_amt_grp, json.highest_ls_amt, json.highest_hp_amt, json.highest_ls_amt_grp, json.highest_hp_amt_grp, json.last_due_ls, json.last_due_hp, json.mkt_grp, json.os_ar_hp, json.os_ar_ls, json.os_credit_amt, json.os_credit_line_amt, json.reqst_credit_amt, json.intro_by_cd, json.mkt_name, json.cus_name, json.sbu_type_desc, json.team_mkt_leader, json.verifier_name, json.join_group_name, json.join_group_cr, json.intro_mthd_desc, json.intro_by_name, json.title_authority, json.above_level, json.rec_agr_flag, json.rec_cond, json.rec_usr, json.rec_upd, json.ap_rec_agr_flag, json.ap_rec_amount, json.ap_rec_cond, __WEBPACK_IMPORTED_MODULE_0__ca_entity__["a" /* caEntity */].parse(json.caentity), __WEBPACK_IMPORTED_MODULE_1__ca_pcnind__["a" /* caPcnInd */].parse(json.listpcnind), __WEBPACK_IMPORTED_MODULE_2__ca_guarantor__["a" /* caGuarantor */].parse(json.listcaguarantor), __WEBPACK_IMPORTED_MODULE_3__ca_bgdetail__["a" /* caBgDetail */].parse(json.listbgdetail), __WEBPACK_IMPORTED_MODULE_4__ca_context__["a" /* caContext */].parse(json.listcacontext), __WEBPACK_IMPORTED_MODULE_5__ca_assetsite__["a" /* caAssersite */].parse(json.listassetsite), __WEBPACK_IMPORTED_MODULE_6__ca_pricing__["a" /* caPricing */].parse(json.listcapricing), __WEBPACK_IMPORTED_MODULE_7__ca_buyer__["a" /* caBuyer */].parse(json.listcabuyer), __WEBPACK_IMPORTED_MODULE_8__ca_apvhist__["a" /* caApvHist */].parse(json.listcaapvhist), __WEBPACK_IMPORTED_MODULE_9__ca_capcl__["a" /* caCapCl */].parse(json.listcacapcl), __WEBPACK_IMPORTED_MODULE_10__ca_capclowner__["a" /* caCapClOwner */].parse(json.listcacapclowner), __WEBPACK_IMPORTED_MODULE_11__ca_collateral__["a" /* caCollateral */].parse(json.listcacollateral), __WEBPACK_IMPORTED_MODULE_12__ca_detail__["a" /* caDetail */].parse(json.listcadetail));
    };
    return caHead;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-opinion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caOpinion; });
var caOpinion = /** @class */ (function () {
    function caOpinion(com_code, ref_code, cus_code, opinion_desc, opinion_flag, opinion_date, opinion_usr, opinion_apv_date, opinion_apv_usr, current_task, gen_date, character_desc, capacity_desc, capital_desc, collateral_desc, condition_desc, opinion_apv_opinion, opinon_source, sub_id, opinion_apv_remark) {
        this.com_code = com_code;
        this.ref_code = ref_code;
        this.cus_code = cus_code;
        this.opinion_desc = opinion_desc;
        this.opinion_flag = opinion_flag;
        this.opinion_date = opinion_date;
        this.opinion_usr = opinion_usr;
        this.opinion_apv_date = opinion_apv_date;
        this.opinion_apv_usr = opinion_apv_usr;
        this.current_task = current_task;
        this.gen_date = gen_date;
        this.character_desc = character_desc;
        this.capacity_desc = capacity_desc;
        this.capital_desc = capital_desc;
        this.collateral_desc = collateral_desc;
        this.condition_desc = condition_desc;
        this.opinion_apv_opinion = opinion_apv_opinion;
        this.opinon_source = opinon_source;
        this.sub_id = sub_id;
        this.opinion_apv_remark = opinion_apv_remark;
    }
    caOpinion.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caOpinion(json[i].com_code, json[i].ref_code, json[i].cus_code, json[i].opinion_desc, json[i].opinion_flag, json[i].opinion_date, json[i].opinion_usr, json[i].opinion_apv_date, json[i].opinion_apv_usr, json[i].current_task, json[i].gen_date, json[i].character_desc, json[i].capacity_desc, json[i].capital_desc, json[i].collateral_desc, json[i].condition_desc, json[i].opinion_apv_opinion, json[i].opinon_source, json[i].sub_id, json[i].opinion_apv_remark));
            }
        }
        return data;
    };
    return caOpinion;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-pcnind.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caPcnInd; });
var caPcnInd = /** @class */ (function () {
    function caPcnInd(ent_code, new_ind_code, ind_pcnt, rmrk, old_ind_code, com_code, sub_id) {
        this.ent_code = ent_code;
        this.new_ind_code = new_ind_code;
        this.ind_pcnt = ind_pcnt;
        this.rmrk = rmrk;
        this.old_ind_code = old_ind_code;
        this.com_code = com_code;
        this.sub_id = sub_id;
    }
    caPcnInd.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caPcnInd(json[i].ent_code, json[i].new_ind_code, json[i].ind_pcnt, json[i].rmrk, json[i].old_ind_code, json[i].com_code, json[i].sub_id));
            }
        }
        return data;
    };
    return caPcnInd;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-pricing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caPricing; });
var caPricing = /** @class */ (function () {
    function caPricing(com_code, ca_no, sub_id, credit_line_amt, credit_line_amt_curr, commission, rate_bank, rate_type, rate_m, rate_spread, int_rate, handling_fee_amt, handling_fee_amt_curr, front_end_fee_amt, prc_typ, eff_date, expire_dt, currency_credit_line, currency_type, currency_hf_rate, currency_hf_type, currency_eff_date, factfee_type, factfee_amt_month, last_usr, last_upd, input_by, input_date, remark_attached_sheet, seller_code, risk_prem_rate, fci_rate, currency_type_desc, rate_bank_desc, rate_m_desc, currency_hf_type_desc, seller_name, bank_int_rate) {
        this.com_code = com_code;
        this.ca_no = ca_no;
        this.sub_id = sub_id;
        this.credit_line_amt = credit_line_amt;
        this.credit_line_amt_curr = credit_line_amt_curr;
        this.commission = commission;
        this.rate_bank = rate_bank;
        this.rate_type = rate_type;
        this.rate_m = rate_m;
        this.rate_spread = rate_spread;
        this.int_rate = int_rate;
        this.handling_fee_amt = handling_fee_amt;
        this.handling_fee_amt_curr = handling_fee_amt_curr;
        this.front_end_fee_amt = front_end_fee_amt;
        this.prc_typ = prc_typ;
        this.eff_date = eff_date;
        this.expire_dt = expire_dt;
        this.currency_credit_line = currency_credit_line;
        this.currency_type = currency_type;
        this.currency_hf_rate = currency_hf_rate;
        this.currency_hf_type = currency_hf_type;
        this.currency_eff_date = currency_eff_date;
        this.factfee_type = factfee_type;
        this.factfee_amt_month = factfee_amt_month;
        this.last_usr = last_usr;
        this.last_upd = last_upd;
        this.input_by = input_by;
        this.input_date = input_date;
        this.remark_attached_sheet = remark_attached_sheet;
        this.seller_code = seller_code;
        this.risk_prem_rate = risk_prem_rate;
        this.fci_rate = fci_rate;
        this.currency_type_desc = currency_type_desc;
        this.rate_bank_desc = rate_bank_desc;
        this.rate_m_desc = rate_m_desc;
        this.currency_hf_type_desc = currency_hf_type_desc;
        this.seller_name = seller_name;
        this.bank_int_rate = bank_int_rate;
    }
    caPricing.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caPricing(json[i].com_code, json[i].ca_no, json[i].sub_id, json[i].credit_line_amt, json[i].credit_line_amt_curr, json[i].commission, json[i].rate_bank, json[i].rate_type, json[i].rate_m, json[i].rate_spread, json[i].int_rate, json[i].handling_fee_amt, json[i].handling_fee_amt_curr, json[i].front_end_fee_amt, json[i].prc_typ, json[i].eff_date, json[i].expire_dt, json[i].currency_credit_line, json[i].currency_type, json[i].currency_hf_rate, json[i].currency_hf_type, json[i].currency_eff_date, json[i].factfee_type, json[i].factfee_amt_month, json[i].last_usr, json[i].last_upd, json[i].input_by, json[i].input_date, json[i].remark_attached_sheet, json[i].seller_code, json[i].risk_prem_rate, json[i].fci_rate, json[i].currency_type_desc, json[i].rate_bank_desc, json[i].rate_m_desc, json[i].currency_hf_type_desc, json[i].seller_name, json[i].bank_int_rate));
            }
        }
        return data;
    };
    return caPricing;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca-step.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caStep; });
var caStep = /** @class */ (function () {
    function caStep(ca_no, sub_id, sub_id2, due_day, from_term, to_term, inst_e_vat, interval, inst_vat) {
        this.ca_no = ca_no;
        this.sub_id = sub_id;
        this.sub_id2 = sub_id2;
        this.due_day = due_day;
        this.from_term = from_term;
        this.to_term = to_term;
        this.inst_e_vat = inst_e_vat;
        this.interval = interval;
        this.inst_vat = inst_vat;
    }
    caStep.parse = function (json) {
        var data = [];
        if (json) {
            for (var i = 0; i < json.length; i++) {
                data.push(new caStep(json[i].ca_no, json[i].sub_id, json[i].sub_id2, json[i].due_day, json[i].from_term, json[i].to_term, json[i].inst_e_vat, json[i].interval, json[i].inst_vat));
            }
        }
        return data;
    };
    return caStep;
}());



/***/ }),

/***/ "../../../../../src/app/main/mst/credit-application/model/ca_listmaster.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caListMaster; });
/**
 * Created by pongsatorn.an on 22/12/2560.
 */
var caListMaster = /** @class */ (function () {
    function caListMaster(id_code, key1, key2, remark, remark2, type) {
        this.id_code = id_code;
        this.key1 = key1;
        this.key2 = key2;
        this.remark = remark;
        this.remark2 = remark2;
        this.type = type;
    }
    caListMaster.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
        }
    };
    return caListMaster;
}());



/***/ })

});
//# sourceMappingURL=credit-application.module.chunk.js.map