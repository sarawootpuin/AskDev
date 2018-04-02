webpackJsonp(["scoring.module"],{

/***/ "../../../../../src/app/main/scoring/model/answer-scr-dropdown.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerScoreDropdownModel; });
/**
 * Created by piradee.bu on 24/08/2560.
 */
var AnswerScoreDropdownModel = /** @class */ (function () {
    function AnswerScoreDropdownModel(answer, scr, selected, sub_id, sub_id2) {
        this.answer = answer;
        this.scr = scr;
        this.selected = selected;
        this.sub_id = sub_id;
        this.sub_id2 = sub_id2;
    }
    AnswerScoreDropdownModel.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new AnswerScoreDropdownModel(json[i].ANSWER, json[i].SCR, json[i].SELECTED, json[i].SUB_ID, json[i].SUB_ID2));
        }
        return data;
    };
    return AnswerScoreDropdownModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/answer-scr-range.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerScoreRangeModel; });
var AnswerScoreRangeModel = /** @class */ (function () {
    function AnswerScoreRangeModel(min, max, scr, selected) {
        this.min = min;
        this.max = max;
        this.scr = scr;
        this.selected = selected;
    }
    AnswerScoreRangeModel.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new AnswerScoreRangeModel(json[i].MIN, json[i].MAX, json[i].SCR, json[i].SELECTED));
        }
        return data;
    };
    return AnswerScoreRangeModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/change-department.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrChangeDepartmentModel; });
/**
 * Created by piradee.bu on 27/12/2560.
 */
var ScrChangeDepartmentModel = /** @class */ (function () {
    function ScrChangeDepartmentModel(chk, code, com_code, full_name, dept_code, dept_name, position, key_field) {
        this.chk = chk;
        this.code = code;
        this.com_code = com_code;
        this.full_name = full_name;
        this.dept_code = dept_code;
        this.dept_name = dept_name;
        this.position = position;
        this.key_field = key_field;
    }
    ScrChangeDepartmentModel.parse = function (json) {
        var data = [];
        if (json != null) {
            for (var i = 0; i < json.length; i++) {
                var temp_key_field = json[i].CODE + json[i].DEPT_NAME;
                data.push(new ScrChangeDepartmentModel(json[i].CHK, json[i].CODE, json[i].COM_CODE, json[i].FULL_NAME, json[i].DEPT_CODE, json[i].DEPT_NAME, json[i].POSITION, temp_key_field));
            }
        }
        return data;
    };
    return ScrChangeDepartmentModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/change-mkt-name.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrChangeMktNameModel; });
/**
 * Created by piradee.bu on 27/12/2560.
 */
var ScrChangeMktNameModel = /** @class */ (function () {
    function ScrChangeMktNameModel(mark, ref_no, mkt_emp_nme, ent_cd, ent_typ, name, ver_type, run_no) {
        this.mark = mark;
        this.ref_no = ref_no;
        this.mkt_emp_nme = mkt_emp_nme;
        this.ent_cd = ent_cd;
        this.ent_typ = ent_typ;
        this.name = name;
        this.ver_type = ver_type;
        this.run_no = run_no;
    }
    ScrChangeMktNameModel.parse = function (json) {
        var data = [];
        if (json != null) {
            for (var i = 0; i < json.length; i++) {
                data.push(new ScrChangeMktNameModel(json[i].MARK, json[i].REF_NO, json[i].MKT_EMP_NME, json[i].ENT_CD, json[i].ENT_TYP, json[i].NAME, json[i].VER_TYPE, json[i].RUN_NO));
            }
        }
        return data;
    };
    return ScrChangeMktNameModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/creditScoringHistory.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditScoringHistoryModel; });
/**
 * Created by wisarut.su on 13/12/2560.
 */
var CreditScoringHistoryModel = /** @class */ (function () {
    function CreditScoringHistoryModel(runNo, entTyp, entCd, refNo, scrDt, scr, indvJrstc, mobileSource) {
        this.runNo = runNo;
        this.entTyp = entTyp;
        this.entCd = entCd;
        this.refNo = refNo;
        this.scrDt = scrDt;
        this.scr = scr;
        this.indvJrstc = indvJrstc;
        this.mobileSource = mobileSource;
    }
    CreditScoringHistoryModel.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new CreditScoringHistoryModel(json[i].RUN_NO, json[i].ENT_TYP, json[i].ENT_CD, json[i].REF_NO, json[i].SCR_DT, json[i].SCR, json[i].INDV_JRSTC, json[i].MOBILE_SOURCE));
        }
        return data;
    };
    return CreditScoringHistoryModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/dropdown-company.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownCompanyModel; });
/**
 * Created by piradee.bu on 21/12/2560.
 */
var DropdownCompanyModel = /** @class */ (function () {
    function DropdownCompanyModel(com_code, com_sub_name) {
        this.com_code = com_code;
        this.com_sub_name = com_sub_name;
    }
    DropdownCompanyModel.parse = function (json) {
        var data = [];
        if (json != null) {
            for (var i = 0; i < json.length; i++) {
                data.push(new DropdownCompanyModel(json[i].COM_CODE, json[i].COM_SUB_NAME));
            }
        }
        return data;
    };
    return DropdownCompanyModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/dropdown-mkt-name.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrDropDownMktNameModel; });
/**
 * Created by piradee.bu on 27/12/2560.
 */
var ScrDropDownMktNameModel = /** @class */ (function () {
    function ScrDropDownMktNameModel(mkt_emp_nme) {
        this.mkt_emp_nme = mkt_emp_nme;
    }
    ScrDropDownMktNameModel.parse = function (json) {
        var data = [];
        if (json != null) {
            for (var i = 0; i < json.length; i++) {
                data.push(new ScrDropDownMktNameModel(json[i].MKT_EMP_NME));
            }
        }
        return data;
    };
    return ScrDropDownMktNameModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/dropdown.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownModel; });
/**
 * Created by piradee.bu on 24/08/2560.
 */
var DropdownModel = /** @class */ (function () {
    function DropdownModel(item, id_code, selected) {
        this.item = item;
        this.id_code = id_code;
        this.selected = selected;
    }
    DropdownModel.parse = function (json) {
        var data = [];
        if (json != null) {
            for (var i = 0; i < json.length; i++) {
                data.push(new DropdownModel(json[i].ITEM, json[i].ID_CODE, json[i].SELECTED));
            }
        }
        return data;
    };
    return DropdownModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/mainTab.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTabModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/dropdown.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scrsubject_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/scrsubject.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrcorp_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/scrcorp.model.ts");



/**
 * Created by piradee.bu on 24/08/2560.
 */
var MainTabModel = /** @class */ (function () {
    function MainTabModel(run_no, ent_typ, scr_dt, com_code, mkt_emp_no, ver_emp_no, ent_nme, spus_nme, ver_mthd, home_tel, offce_tel, moble_tel, home_tel_rsult, offce_tel_rsult, moble_tel_rsult, visit_cd, visit_rsult, ngbhd, home_addr_crrct_cd, offce_addr_crrct_cd, ask_rec_cd, ask_rec_dtel, ncb_rec_cd, ncb_rec_dtel, trce_rec_cd, trce_rec_dtel, ownr_home_tel, last_usr, last_upd, ref_no, ver_mthd_more, in_out, prod_cd, ent_cd, conf_submit, prim_scr, ent_cat, relsn, rev_dtel, pmnt_grdng, finish_scr_dt, hd_app_dt, mgr_app_dt, prim_scr_rsult, pmnt_grdng_agr_code, pmnt_grdng_asof, ver_opn, ori_prim_scr, ori_prim_scr_rsult, hd_app_by, mgr_app_by, no_submit, wait_mthd, no_reject, ver_emp_no_2, listWaitMthd, list_ver_mthd, list_in_out, list_visit_cd, list_ask_rec_cd, list_trec_rec_cd, list_ncb_rec_cd, list_offce_addr_crrct_cd, list_home_addr_crrct_cd, list_product_cd, listTabScrSubj, list_ver_emp_no, device, userName, stg_id, list_scr_corp, cust_name_display, id_card) {
        this.run_no = run_no;
        this.ent_typ = ent_typ;
        this.scr_dt = scr_dt;
        this.com_code = com_code;
        this.mkt_emp_no = mkt_emp_no;
        this.ver_emp_no = ver_emp_no;
        this.ent_nme = ent_nme;
        this.spus_nme = spus_nme;
        this.ver_mthd = ver_mthd;
        this.home_tel = home_tel;
        this.offce_tel = offce_tel;
        this.moble_tel = moble_tel;
        this.home_tel_rsult = home_tel_rsult;
        this.offce_tel_rsult = offce_tel_rsult;
        this.moble_tel_rsult = moble_tel_rsult;
        this.visit_cd = visit_cd;
        this.visit_rsult = visit_rsult;
        this.ngbhd = ngbhd;
        this.home_addr_crrct_cd = home_addr_crrct_cd;
        this.offce_addr_crrct_cd = offce_addr_crrct_cd;
        this.ask_rec_cd = ask_rec_cd;
        this.ask_rec_dtel = ask_rec_dtel;
        this.ncb_rec_cd = ncb_rec_cd;
        this.ncb_rec_dtel = ncb_rec_dtel;
        this.trce_rec_cd = trce_rec_cd;
        this.trce_rec_dtel = trce_rec_dtel;
        this.ownr_home_tel = ownr_home_tel;
        this.last_usr = last_usr;
        this.last_upd = last_upd;
        this.ref_no = ref_no;
        this.ver_mthd_more = ver_mthd_more;
        this.in_out = in_out;
        this.prod_cd = prod_cd;
        this.ent_cd = ent_cd;
        this.conf_submit = conf_submit;
        this.prim_scr = prim_scr;
        this.ent_cat = ent_cat;
        this.relsn = relsn;
        this.rev_dtel = rev_dtel;
        this.pmnt_grdng = pmnt_grdng;
        this.finish_scr_dt = finish_scr_dt;
        this.hd_app_dt = hd_app_dt;
        this.mgr_app_dt = mgr_app_dt;
        this.prim_scr_rsult = prim_scr_rsult;
        this.pmnt_grdng_agr_code = pmnt_grdng_agr_code;
        this.pmnt_grdng_asof = pmnt_grdng_asof;
        this.ver_opn = ver_opn;
        this.ori_prim_scr = ori_prim_scr;
        this.ori_prim_scr_rsult = ori_prim_scr_rsult;
        this.hd_app_by = hd_app_by;
        this.mgr_app_by = mgr_app_by;
        this.no_submit = no_submit;
        this.wait_mthd = wait_mthd;
        this.no_reject = no_reject;
        this.ver_emp_no_2 = ver_emp_no_2;
        this.listWaitMthd = listWaitMthd;
        this.list_ver_mthd = list_ver_mthd;
        this.list_in_out = list_in_out;
        this.list_visit_cd = list_visit_cd;
        this.list_ask_rec_cd = list_ask_rec_cd;
        this.list_trec_rec_cd = list_trec_rec_cd;
        this.list_ncb_rec_cd = list_ncb_rec_cd;
        this.list_offce_addr_crrct_cd = list_offce_addr_crrct_cd;
        this.list_home_addr_crrct_cd = list_home_addr_crrct_cd;
        this.list_product_cd = list_product_cd;
        this.listTabScrSubj = listTabScrSubj;
        this.list_ver_emp_no = list_ver_emp_no;
        this.device = device;
        this.userName = userName;
        this.stg_id = stg_id;
        this.list_scr_corp = list_scr_corp;
        this.cust_name_display = cust_name_display;
        this.id_card = id_card;
    }
    MainTabModel.parse = function (json) {
        // let json = JSON.parse(data);
        return new MainTabModel(
        // json.RUN_NO,
        // json.COM_CODE,
        // json.MKT_EMP_NO,
        // json.ENT_CD,
        // json.ENT_NME,
        // json.WAIT_MTHD
        json.RUN_NO, json.ENT_TYP, json.SCR_DT, json.COM_CODE, json.MKT_EMP_NO, json.VER_EMP_NO, json.ENT_NME, json.SPUS_NME, json.VER_MTHD, json.HOME_TEL, json.OFFCE_TEL, json.MOBLE_TEL, json.HOME_TEL_RSULT, json.OFFCE_TEL_RSULT, json.MOBLE_TEL_RSULT, json.VISIT_CD, json.VISIT_RSULT, json.NGBHD, json.HOME_ADDR_CRRCT_CD, json.OFFCE_ADDR_CRRCT_CD, json.ASK_REC_CD, json.ASK_REC_DTEL, json.NCB_REC_CD, json.NCB_REC_DTEL, json.TRCE_REC_CD, json.TRCE_REC_DTEL, json.OWNR_HOME_TEL, json.LAST_USR, json.LAST_UPD, json.REF_NO, json.VER_MTHD_MORE, json.IN_OUT, json.PROD_CD, json.ENT_CD, json.CONF_SUBMIT, json.PRIM_SCR, json.ENT_CAT, json.RELSN, json.REV_DTEL, json.PMNT_GRDNG, json.FINISH_SCR_DT, json.HD_APP_DT, json.MGR_APP_DT, json.PRIM_SCR_RSULT, json.PMNT_GRDNG_AGR_CODE, json.PMNT_GRDNG_ASOF, json.VER_OPN, json.ORI_PRIM_SCR, json.ORI_PRIM_SCR_RSULT, json.HD_APP_BY, json.MGR_APP_BY, json.NO_SUBMIT, json.WAIT_MTHD, json.NO_REJECT, json.VER_EMP_NO_2, __WEBPACK_IMPORTED_MODULE_0__dropdown_model__["a" /* DropdownModel */].parse(json.LIST_WAIT_METHD), __WEBPACK_IMPORTED_MODULE_0__dropdown_model__["a" /* DropdownModel */].parse(json.LIST_VER_MTHD), __WEBPACK_IMPORTED_MODULE_0__dropdown_model__["a" /* DropdownModel */].parse(json.LIST_IN_OUT), __WEBPACK_IMPORTED_MODULE_0__dropdown_model__["a" /* DropdownModel */].parse(json.LIST_VISIT_CD), __WEBPACK_IMPORTED_MODULE_0__dropdown_model__["a" /* DropdownModel */].parse(json.LIST_TRCE_REC_CD), __WEBPACK_IMPORTED_MODULE_0__dropdown_model__["a" /* DropdownModel */].parse(json.LIST_ASK_REC_CD), __WEBPACK_IMPORTED_MODULE_0__dropdown_model__["a" /* DropdownModel */].parse(json.LIST_NCB_REC_CD), __WEBPACK_IMPORTED_MODULE_0__dropdown_model__["a" /* DropdownModel */].parse(json.LIST_OFFCE_ADDR_CRRCT_CD), __WEBPACK_IMPORTED_MODULE_0__dropdown_model__["a" /* DropdownModel */].parse(json.LIST_HOME_ADDR_CRRCT_CD), __WEBPACK_IMPORTED_MODULE_0__dropdown_model__["a" /* DropdownModel */].parse(json.LIST_PROD_CD), __WEBPACK_IMPORTED_MODULE_1__scrsubject_model__["a" /* ScrSubjModel */].parse(json.LIST_TAB_SCR_SUBJ), __WEBPACK_IMPORTED_MODULE_0__dropdown_model__["a" /* DropdownModel */].parse(json.LIST_VER_EMP_NO), json.device, json.userName, json.STG_ID, __WEBPACK_IMPORTED_MODULE_2__scrcorp_model__["a" /* ScrCorp */].parse(json.LIST_SCR_CORP), json.CUST_NAME_DISPLAY, json.ID_CARD);
    };
    return MainTabModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/retry-to-reverify.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrRetryToReVerify; });
/**
 * Created by piradee.bu on 26/12/2560.
 */
/**
 * Created by piradee.bu on 20/12/2560.
 */
var ScrRetryToReVerify = /** @class */ (function () {
    function ScrRetryToReVerify(ent_typ, ent_nme, run_no, ent_cat, com_code, ref_no, ent_cd, finish_scr_dt, mgr_app_dt, ver_type, open_session, can_retry) {
        this.ent_typ = ent_typ;
        this.ent_nme = ent_nme;
        this.run_no = run_no;
        this.ent_cat = ent_cat;
        this.com_code = com_code;
        this.ref_no = ref_no;
        this.ent_cd = ent_cd;
        this.finish_scr_dt = finish_scr_dt;
        this.mgr_app_dt = mgr_app_dt;
        this.ver_type = ver_type;
        this.open_session = open_session;
        this.can_retry = can_retry;
    }
    ScrRetryToReVerify.parse = function (json) {
        var data = [];
        if (json != null) {
            for (var i = 0; i < json.length; i++) {
                data.push(new ScrRetryToReVerify(json[i].ENT_TYP, json[i].ENT_NME, json[i].RUN_NO, json[i].ENT_CAT, json[i].COM_CODE, json[i].REF_NO, json[i].ENT_CD, json[i].FINISH_SCR_DT, json[i].MGR_APP_DT, json[i].VER_TYPE, json[i].OPEN_SESSION, json[i].CAN_RETRY));
            }
        }
        return data;
    };
    return ScrRetryToReVerify;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/rowtable.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowTableModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__answer_scr_dropdown_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/answer-scr-dropdown.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answer_scr_range_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/answer-scr-range.model.ts");


/**
 * Created by piradee.bu on 24/08/2560.
 */
var RowTableModel = /** @class */ (function () {
    function RowTableModel(topicCd, topicNme, lookUp, answer, detail, type_for_cal, relateToTopicCd, rpt_ord, scr, listAnswer, listAnswerRange) {
        this.topicCd = topicCd;
        this.topicNme = topicNme;
        this.lookUp = lookUp;
        this.answer = answer;
        this.detail = detail;
        this.type_for_cal = type_for_cal;
        this.relateToTopicCd = relateToTopicCd;
        this.rpt_ord = rpt_ord;
        this.scr = scr;
        this.listAnswer = listAnswer;
        this.listAnswerRange = listAnswerRange;
    }
    RowTableModel.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new RowTableModel(json[i].TOPIC_CD, json[i].TOPIC_NME, json[i].LOOKUP, json[i].ANSWER, json[i].DETAIL, json[i].TYPE_FOR_CAL, json[i].RELATE_TO_TOPIC_CD, json[i].RPT_ORD, json[i].SCR, __WEBPACK_IMPORTED_MODULE_0__answer_scr_dropdown_model__["a" /* AnswerScoreDropdownModel */].parse(json[i].LIST_ANSWER), __WEBPACK_IMPORTED_MODULE_1__answer_scr_range_model__["a" /* AnswerScoreRangeModel */].parse(json[i].LIST_ANSWER_RANGE)));
        }
        return data;
    };
    return RowTableModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/save-change-mkt-name.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrSaveChangeMktNameModel; });
/**
 * Created by piradee.bu on 27/12/2560.
 */
var ScrSaveChangeMktNameModel = /** @class */ (function () {
    function ScrSaveChangeMktNameModel(device, userName, listChangeMktName) {
        this.device = device;
        this.userName = userName;
        this.listChangeMktName = listChangeMktName;
    }
    return ScrSaveChangeMktNameModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/scoring-enquiry.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrEnquiry; });
/**
 * Created by piradee.bu on 20/12/2560.
 */
var ScrEnquiry = /** @class */ (function () {
    function ScrEnquiry(source, run_no, com, ref_no, ent_typ, ent_nme, ver_emp_no, ent_cd, stg, finish_flg, scr_date, indv_jrstc, ver_opn, cancel_flg, mkt_snd_dt) {
        this.source = source;
        this.run_no = run_no;
        this.com = com;
        this.ref_no = ref_no;
        this.ent_typ = ent_typ;
        this.ent_nme = ent_nme;
        this.ver_emp_no = ver_emp_no;
        this.ent_cd = ent_cd;
        this.stg = stg;
        this.finish_flg = finish_flg;
        this.scr_date = scr_date;
        this.indv_jrstc = indv_jrstc;
        this.ver_opn = ver_opn;
        this.cancel_flg = cancel_flg;
        this.mkt_snd_dt = mkt_snd_dt;
    }
    ScrEnquiry.parse = function (json) {
        var data = [];
        if (json != null) {
            for (var i = 0; i < json.length; i++) {
                data.push(new ScrEnquiry(json[i].SOURCE, json[i].RUN_NO, json[i].COM, json[i].REF_NO, json[i].ENT_TYP, json[i].ENT_NME, json[i].VER_EMP_NO, json[i].ENT_CD, json[i].STG, json[i].FINISH_FLG, json[i].SCR_DATE, json[i].INDV_JRSTC, json[i].VER_OPN, json[i].CANCEL_FLG, json[i].MKT_SND_DT));
                if ((i % 20000) == 0) {
                    console.log("record" + i);
                }
            }
        }
        return data;
    };
    return ScrEnquiry;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/scoringVerifyHistory.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoringVerifyHistoryModel; });
/**
 * Created by wisarut.su on 13/12/2560.
 */
var ScoringVerifyHistoryModel = /** @class */ (function () {
    function ScoringVerifyHistoryModel(runNo, changeType, fieldDesc, oldData, newData, changeBy, editDt, flg, sentDt) {
        this.runNo = runNo;
        this.changeType = changeType;
        this.fieldDesc = fieldDesc;
        this.oldData = oldData;
        this.newData = newData;
        this.changeBy = changeBy;
        this.editDt = editDt;
        this.flg = flg;
        this.sentDt = sentDt;
    }
    ScoringVerifyHistoryModel.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new ScoringVerifyHistoryModel(json[i].RUN_NO, json[i].CHANGE_TYPE, json[i].FIELD_DESC, json[i].OLD_DATA, json[i].NEW_DATA, json[i].CHANGE_BY, json[i].EDIT_DT, json[i].FLG, json[i].SENT_DT));
        }
        return data;
    };
    return ScoringVerifyHistoryModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/scrcorp.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrCorp; });
/**
 * Created by piradee.bu on 30/11/2560.
 */
var ScrCorp = /** @class */ (function () {
    function ScrCorp(topic_typ, field_1, field_2, field_3, field_4) {
        this.topic_typ = topic_typ;
        this.field_1 = field_1;
        this.field_2 = field_2;
        this.field_3 = field_3;
        this.field_4 = field_4;
    }
    ScrCorp.parse = function (json) {
        var data = [];
        if (json != null) {
            for (var i = 0; i < json.length; i++) {
                data.push(new ScrCorp(json[i].TOPIC_TYP, json[i].FIELD_1, json[i].FIELD_2, json[i].FIELD_3, json[i].FIELD_4));
            }
        }
        return data;
    };
    return ScrCorp;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/scrsubject.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrSubjModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rowtable_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/rowtable.model.ts");

/**
 * Created by piradee.bu on 24/08/2560.
 */
var ScrSubjModel = /** @class */ (function () {
    function ScrSubjModel(pageSubj, pageId, listTableData) {
        this.pageSubj = pageSubj;
        this.pageId = pageId;
        this.listTableData = listTableData;
    }
    ScrSubjModel.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new ScrSubjModel(json[i].PAGE_SUBJ, json[i].PAGE_ID, __WEBPACK_IMPORTED_MODULE_0__rowtable_model__["a" /* RowTableModel */].parse(json[i].LIST_TABLE_DATA)));
        }
        return data;
    };
    return ScrSubjModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/submit-change-department.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrSubmitChangeDepartmentModel; });
/**
 * Created by piradee.bu on 27/12/2560.
 */
var ScrSubmitChangeDepartmentModel = /** @class */ (function () {
    function ScrSubmitChangeDepartmentModel(device, userName, listChangeDeparment) {
        this.device = device;
        this.userName = userName;
        this.listChangeDepartment = listChangeDeparment;
    }
    return ScrSubmitChangeDepartmentModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/model/todo-verifier.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoVerifierModel; });
/**
 * Created by piradee.bu on 31/08/2560.
 */
var ToDoVerifierModel = /** @class */ (function () {
    function ToDoVerifierModel(ver_emp_nme, cnt_refno, com_code, ref_no, ent_typ, ent_cd, mobile_source, ent_cat, name, mkt_snd_dt, start_scr_dt, run_no, cancel_flg, wait_mthd) {
        this.ver_emp_nme = ver_emp_nme;
        this.cnt_refno = cnt_refno;
        this.com_code = com_code;
        this.ref_no = ref_no;
        this.ent_typ = ent_typ;
        this.ent_cd = ent_cd;
        this.mobile_source = mobile_source;
        this.ent_cat = ent_cat;
        this.name = name;
        this.mkt_snd_dt = mkt_snd_dt;
        this.start_scr_dt = start_scr_dt;
        this.run_no = run_no;
        this.cancel_flg = cancel_flg;
        this.wait_mthd = wait_mthd;
    }
    ToDoVerifierModel.parse = function (json) {
        var data = [];
        for (var i = 0; i < json.length; i++) {
            data.push(new ToDoVerifierModel(json[i].VER_EMP_NME, json[i].CNT_REFNO, json[i].COM_CODE, json[i].REF_NO, json[i].ENT_TYP, json[i].ENT_CD, json[i].MOBILE_SOURCE, json[i].ENT_CAT, json[i].NAME, json[i].MKT_SND_DT, json[i].START_SCR_DT, json[i].RUN_NO, json[i].CANCEL_FLG, json[i].WAIT_MTHD));
        }
        return data;
    };
    return ToDoVerifierModel;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/scoring.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoringModule", function() { return ScoringModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verification_detail_header_verification_detail_header_verification_detail_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/header-verification-detail/header-verification-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_detail_mainTab_verification_detail_mainTab_verification_detail_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/mainTab-verification-detail/mainTab-verification-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verification_detail_table_verification_detail_table_verification_detail_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/table-verification-detail/table-verification-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scoring_routing_module__ = __webpack_require__("../../../../../src/app/main/scoring/scoring.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__verification_detail_verification_detail_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__verification_detail_verification_detail_service__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__verification_detail_todo_verifier_todo_verifier_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/todo-verifier/todo-verifier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__verification_detail_questiontabs_verification_detail_questiontabs_verification_detail_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/questiontabs-verification-detail/questiontabs-verification-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__verification_detail_scr_alert_jrst_fin_scr_alert_jrst_fin_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/scr-alert-jrst-fin/scr-alert-jrst-fin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_currency_mask__ = __webpack_require__("../../../../ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_center_center_module__ = __webpack_require__("../../../../../src/app/shared/center/center.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_user_user_module__ = __webpack_require__("../../../../../src/app/shared/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__scr_verify_history_scr_verify_history_component__ = __webpack_require__("../../../../../src/app/main/scoring/scr-verify-history/scr-verify-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__verification_detail_scr_credit_scoring_history_scr_credit_scoring_history_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/scr-credit-scoring-history/scr-credit-scoring-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__verification_detail_scoring_enquiry_scoring_enquiry_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/scoring-enquiry/scoring-enquiry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scr_retry_to_reverify_scr_retry_to_reverify_component__ = __webpack_require__("../../../../../src/app/main/scoring/scr-retry-to-reverify/scr-retry-to-reverify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__scr_retry_to_reverify_scr_retry_to_reverify_service__ = __webpack_require__("../../../../../src/app/main/scoring/scr-retry-to-reverify/scr-retry-to-reverify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__scr_change_mkt_name_scr_change_mkt_name_component__ = __webpack_require__("../../../../../src/app/main/scoring/scr-change-mkt-name/scr-change-mkt-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__scr_change_department_scr_change_department_component__ = __webpack_require__("../../../../../src/app/main/scoring/scr-change-department/scr-change-department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__scr_change_mkt_name_scr_change_mkt_name_service__ = __webpack_require__("../../../../../src/app/main/scoring/scr-change-mkt-name/scr-change-mkt-name.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__scr_change_department_scr_change_department_service__ = __webpack_require__("../../../../../src/app/main/scoring/scr-change-department/scr-change-department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__blacklist_blacklist_module__ = __webpack_require__("../../../../../src/app/main/blacklist/blacklist.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__scr_verify_history_scr_verify_history_service__ = __webpack_require__("../../../../../src/app/main/scoring/scr-verify-history/scr-verify-history.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var ScoringModule = /** @class */ (function () {
    function ScoringModule() {
    }
    ScoringModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__scoring_routing_module__["a" /* ScoringRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["TabMenuModule"]
                // BrowserAnimationsModule
                ,
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_14_ng2_currency_mask__["CurrencyMaskModule"],
                __WEBPACK_IMPORTED_MODULE_15__shared_center_center_module__["a" /* CenterModule */],
                __WEBPACK_IMPORTED_MODULE_16__shared_user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_26__blacklist_blacklist_module__["BlacklistModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__verification_detail_verification_detail_component__["a" /* VerificationDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_1__verification_detail_header_verification_detail_header_verification_detail_component__["a" /* HeaderVerificationDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_2__verification_detail_mainTab_verification_detail_mainTab_verification_detail_component__["a" /* mainTabVerificationDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_3__verification_detail_table_verification_detail_table_verification_detail_component__["a" /* TableVerificationDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__verification_detail_todo_verifier_todo_verifier_component__["a" /* TodoVerifierComponent */],
                __WEBPACK_IMPORTED_MODULE_12__verification_detail_questiontabs_verification_detail_questiontabs_verification_detail_component__["a" /* QuestiontabsVerificationDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__verification_detail_scr_alert_jrst_fin_scr_alert_jrst_fin_component__["a" /* ScrAlertJrstFinComponent */],
                __WEBPACK_IMPORTED_MODULE_17__scr_verify_history_scr_verify_history_component__["a" /* ScrVerifyHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__verification_detail_scr_credit_scoring_history_scr_credit_scoring_history_component__["a" /* ScrCreditScoringHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_19__verification_detail_scoring_enquiry_scoring_enquiry_component__["a" /* ScoringEnquiryComponent */],
                __WEBPACK_IMPORTED_MODULE_20__scr_retry_to_reverify_scr_retry_to_reverify_component__["a" /* ScrRetryToReverifyComponent */],
                __WEBPACK_IMPORTED_MODULE_22__scr_change_mkt_name_scr_change_mkt_name_component__["a" /* ScrChangeMktNameComponent */],
                __WEBPACK_IMPORTED_MODULE_23__scr_change_department_scr_change_department_component__["a" /* ScrChangeDepartmentComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__verification_detail_verification_detail_service__["a" /* VerificationDetailService */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_21__scr_retry_to_reverify_scr_retry_to_reverify_service__["a" /* RetryToReVerifyService */], __WEBPACK_IMPORTED_MODULE_24__scr_change_mkt_name_scr_change_mkt_name_service__["a" /* ChangeMktNameService */], __WEBPACK_IMPORTED_MODULE_25__scr_change_department_scr_change_department_service__["a" /* ChangeDepartmentService */], __WEBPACK_IMPORTED_MODULE_27__scr_verify_history_scr_verify_history_service__["a" /* ScrVerifyHistoryService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_17__scr_verify_history_scr_verify_history_component__["a" /* ScrVerifyHistoryComponent */]]
        })
    ], ScoringModule);
    return ScoringModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/scoring.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoringRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_detail_verification_detail_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verification_detail_mainTab_verification_detail_mainTab_verification_detail_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/mainTab-verification-detail/mainTab-verification-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verification_detail_todo_verifier_todo_verifier_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/todo-verifier/todo-verifier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__verification_detail_questiontabs_verification_detail_questiontabs_verification_detail_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/questiontabs-verification-detail/questiontabs-verification-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__verification_detail_scoring_enquiry_scoring_enquiry_component__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/scoring-enquiry/scoring-enquiry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scr_retry_to_reverify_scr_retry_to_reverify_component__ = __webpack_require__("../../../../../src/app/main/scoring/scr-retry-to-reverify/scr-retry-to-reverify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scr_change_mkt_name_scr_change_mkt_name_component__ = __webpack_require__("../../../../../src/app/main/scoring/scr-change-mkt-name/scr-change-mkt-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scr_change_department_scr_change_department_component__ = __webpack_require__("../../../../../src/app/main/scoring/scr-change-department/scr-change-department.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by piradee.bu on 15/08/2560.
 */










var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__verification_detail_verification_detail_component__["a" /* VerificationDetailComponent */], children: [
            { path: '', redirectTo: 'verify-detail', pathMatch: 'full' },
            { path: 'verify-detail', component: __WEBPACK_IMPORTED_MODULE_3__verification_detail_mainTab_verification_detail_mainTab_verification_detail_component__["a" /* mainTabVerificationDetailComponent */] },
            { path: 'question', component: __WEBPACK_IMPORTED_MODULE_5__verification_detail_questiontabs_verification_detail_questiontabs_verification_detail_component__["a" /* QuestiontabsVerificationDetailComponent */] }
        ]
    },
    { path: 'todo', component: __WEBPACK_IMPORTED_MODULE_4__verification_detail_todo_verifier_todo_verifier_component__["a" /* TodoVerifierComponent */] },
    { path: 'enquiry', component: __WEBPACK_IMPORTED_MODULE_6__verification_detail_scoring_enquiry_scoring_enquiry_component__["a" /* ScoringEnquiryComponent */] },
    { path: 'reverify', component: __WEBPACK_IMPORTED_MODULE_7__scr_retry_to_reverify_scr_retry_to_reverify_component__["a" /* ScrRetryToReverifyComponent */] },
    { path: 'change-mkt-name', component: __WEBPACK_IMPORTED_MODULE_8__scr_change_mkt_name_scr_change_mkt_name_component__["a" /* ScrChangeMktNameComponent */] },
    { path: 'change-department', component: __WEBPACK_IMPORTED_MODULE_9__scr_change_department_scr_change_department_component__["a" /* ScrChangeDepartmentComponent */] },
];
var ScoringRoutingModule = /** @class */ (function () {
    function ScoringRoutingModule() {
    }
    ScoringRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ScoringRoutingModule);
    return ScoringRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-change-department/scr-change-department.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-change-department/scr-change-department.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alert-dialog #dialogChangeDepartment></app-alert-dialog>\n<app-alert-dialog (onOK)=\"onSubmitClick()\" #dialogConfirm></app-alert-dialog>\n<app-action-button-form\n  [title]=\"'Change Department'\"\n  [showSubmit]=\"true\"\n  (onSubmit)=\"onConfirmSubmit()\"\n></app-action-button-form>\n<div class=\"container-fluid\" style=\"margin-top: 10px\">\n  <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\n    <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n  </div>\n  <p-dataTable [value]=\"this.listScrChangeDepartModel\" scrollable=\"true\" scrollHeight=\"190px\"   [(selection)]=\"this.listScrChangeDepartModelSelected\"  dataKey=\"key_field\"\n               [globalFilter]=\"gb\" #dt\n               [sortField]=\"this.sortF\"\n               (onSort)=\"changeSort($event)\"\n               >\n    <p-column [style]=\"{'width':'3%'}\" selectionMode=\"multiple\"></p-column>\n    <p-header>** พนักงานแผนก Verification และ สาขา เท่านั้น</p-header>\n    <!--<p-column  field=\"chk\"  header=\"CHECK\"></p-column>-->\n    <p-column  field=\"code\"  header=\"ID พนักงาน\" [sortable]=\"true\"></p-column>\n    <p-column  field=\"com_code\"  header=\"รหัสบริษัท\" [sortable]=\"true\"></p-column>\n    <p-column  field=\"full_name\"  header=\"ชื่อ-นามสกุล\" [sortable]=\"true\"></p-column>\n    <p-column  field=\"dept_name\"  header=\"แผนก\" [sortable]=\"true\"></p-column>\n    <p-column  field=\"position\"  header=\"ตำแหน่ง\" [sortable]=\"true\"></p-column>\n  </p-dataTable>\n\n  <p-dataTable [value]=\"this.listScrChangeDepartModelSelected\" scrollable=\"true\" scrollHeight=\"150px\" >\n    <p-header>พนักงานแผนก VER และ สาขา ที่ย้ายแผนก</p-header>\n    <!--<p-column  field=\"chk\"  header=\"CHECK\"></p-column>-->\n    <p-column  field=\"code\"  header=\"ID พนักงาน\"></p-column>\n    <p-column  field=\"com_code\"  header=\"รหัสบริษัท\"></p-column>\n    <p-column  field=\"full_name\"  header=\"ชื่อ-นามสกุล\"></p-column>\n    <p-column  field=\"dept_name\"  header=\"แผนก\"></p-column>\n    <p-column  field=\"position\"  header=\"ตำแหน่ง\"></p-column>\n  </p-dataTable>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-change-department/scr-change-department.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrChangeDepartmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_change_department_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/change-department.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scr_change_department_service__ = __webpack_require__("../../../../../src/app/main/scoring/scr-change-department/scr-change-department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_submit_change_department_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/submit-change-department.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScrChangeDepartmentComponent = /** @class */ (function () {
    function ScrChangeDepartmentComponent(changeDepartmentService) {
        this.changeDepartmentService = changeDepartmentService;
        this.submitChangeDepartment = new __WEBPACK_IMPORTED_MODULE_3__model_submit_change_department_model__["a" /* ScrSubmitChangeDepartmentModel */]();
        this.sortF = 'code';
    }
    ScrChangeDepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.changeDepartmentService.getListChangeDepartment().subscribe(function (data) {
            console.log(data);
            _this.listScrChangeDepartModel = __WEBPACK_IMPORTED_MODULE_1__model_change_department_model__["a" /* ScrChangeDepartmentModel */].parse(data.LIST_DATA);
            _this.listScrChangeDepartModelSelected = __WEBPACK_IMPORTED_MODULE_1__model_change_department_model__["a" /* ScrChangeDepartmentModel */].parse(data.LIST_DATA);
            _this.listScrChangeDepartModelSelected = _this.listScrChangeDepartModelSelected.filter(function (ListA) { return ListA.chk == "Y"; });
        }, function (error) {
            console.log(error);
        });
    };
    ScrChangeDepartmentComponent.prototype.onDeleteDataSelected = function (event) {
        var index = this.listScrChangeDepartModelSelected.indexOf(event.data);
        console.log(index);
        if (index !== -1) {
            this.listScrChangeDepartModelSelected.splice(index, 1);
            console.log(this.listScrChangeDepartModelSelected);
        }
    };
    ScrChangeDepartmentComponent.prototype.onConfirmSubmit = function () {
        this.dialogConfirm.setAction("SUBMIT");
        this.dialogConfirm.open();
    };
    ScrChangeDepartmentComponent.prototype.onSubmitClick = function () {
        var _this = this;
        this.submitChangeDepartment.device = "web";
        this.submitChangeDepartment.userName = this.changeDepartmentService.userName;
        this.submitChangeDepartment.listChangeDepartment = JSON.parse(JSON.stringify(this.listScrChangeDepartModelSelected));
        this.subscription = this.changeDepartmentService.submitChangeDepartment(this.submitChangeDepartment).subscribe(function (data) {
            if (data.MSG == "Complete") {
                _this.dialogChangeDepartment.setAction("INFORMATION");
                _this.dialogChangeDepartment.setMessage("การทำรายการเสร็จเรียบร้อย");
                _this.dialogChangeDepartment.open();
            }
            else {
                _this.dialogChangeDepartment.setTitle("ERROR");
                _this.dialogChangeDepartment.setMessage("การทำรายการมีปัญหา ขณะกดปุ่ม  ");
                _this.dialogChangeDepartment.open();
            }
        }, function (error) {
            _this.dialogChangeDepartment.setTitle("ERROR");
            _this.dialogChangeDepartment.setMessage("การทำรายการมีปัญหา ขณะกดปุ่ม  ");
            _this.dialogChangeDepartment.open();
        });
        this.submitChangeDepartment = new __WEBPACK_IMPORTED_MODULE_3__model_submit_change_department_model__["a" /* ScrSubmitChangeDepartmentModel */]();
    };
    ScrChangeDepartmentComponent.prototype.changeSort = function (event) {
        if (!event.order) {
            this.sortF = 'code';
        }
        else {
            this.sortF = event.field;
        }
    };
    ScrChangeDepartmentComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogChangeDepartment'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], ScrChangeDepartmentComponent.prototype, "dialogChangeDepartment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogConfirm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], ScrChangeDepartmentComponent.prototype, "dialogConfirm", void 0);
    ScrChangeDepartmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scr-change-department',
            template: __webpack_require__("../../../../../src/app/main/scoring/scr-change-department/scr-change-department.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/scr-change-department/scr-change-department.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__scr_change_department_service__["a" /* ChangeDepartmentService */]])
    ], ScrChangeDepartmentComponent);
    return ScrChangeDepartmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-change-department/scr-change-department.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeDepartmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
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
/**
 * Created by piradee.bu on 27/12/2560.
 */




/**
 * Created by piradee.bu on 27/12/2560.
 */
var ChangeDepartmentService = /** @class */ (function () {
    function ChangeDepartmentService(http, service, userStorage) {
        this.http = http;
        this.service = service;
        this.userStorage = userStorage;
        this.userName = '';
        this.code = '';
        this.comCode = '';
        this.userName = this.userStorage.getUserName();
        this.code = this.userStorage.getCode();
        this.comCode = this.userStorage.getComCode();
    }
    ChangeDepartmentService.prototype.getListChangeDepartment = function () {
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/ChangeDepartmentPost";
        var data = {
            "userName": this.userName,
            "device": "web"
        };
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        console.log(JSON.stringify(data));
        return this.http.post(url, JSON.stringify(data), options);
    };
    ChangeDepartmentService.prototype.submitChangeDepartment = function (data) {
        console.log("saveChangeMktName");
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/SubmitChangeDepartmentPost";
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        console.log(JSON.stringify(data));
        console.log(url);
        return this.http.post(url, JSON.stringify(data), options);
    };
    ChangeDepartmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__["a" /* ServiceEndpoint */],
            __WEBPACK_IMPORTED_MODULE_1__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], ChangeDepartmentService);
    return ChangeDepartmentService;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-change-mkt-name/scr-change-mkt-name.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-change-mkt-name/scr-change-mkt-name.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alert-dialog #dialogChangeMktName></app-alert-dialog>\n<app-alert-dialog (onOK)=\"onClickSave()\" #dialogConfirm></app-alert-dialog>\n<app-action-button-form\n  [title]=\"'Change Marketing Name'\"\n></app-action-button-form>\n\n<div class=\"container-fluid\">\n  <div class=\"d-flex justify-content-start\">\n    <div class=\"p-2\">\n      <div class=\"form-group\">\n        <label>Reference No.</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"this.refNo\">\n      </div>\n    </div>\n    <div class=\"p-3\">\n      <br>\n      <app-custom-button [option]=\"'search'\" (click)=\"onClickSearch()\"></app-custom-button>\n      <app-custom-button [option]=\"'cancel'\" (click)=\"onClickClear()\"></app-custom-button>\n      <app-custom-button [option]=\"'save'\"   (click)=\"onConfirmSave()\"></app-custom-button>\n    </div>\n  </div>\n\n  <p-dataTable [value]=\"this.listScrChangeMktNameModel\" scrollable=\"true\" scrollHeight=\"340px\" [(selection)]=\"this.listScrChangeMktNameModelSelected\"  dataKey=\"run_no\">\n    <p-column [style]=\"{'width':'3%'}\" selectionMode=\"multiple\"></p-column>\n    <p-column  field=\"ref_no\"  header=\"เลขที่อ้างอิง\"></p-column>\n    <p-column field=\"mkt_emp_nme\" header=\"MKT\" [editable]=\"true\">\n        <ng-template let-col let-rowAns=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n            <select class=\"form-control h-25\" [(ngModel)]=\"rowAns[col.field]\">\n              <option *ngFor=\"let items of listScrDropDownMktNameModel;let i=index\" [selected]=\"items?.mkt_emp_nme == rowAns.mkt_emp_nme\" [value]=\"items.mkt_emp_nme\">\n                {{items.mkt_emp_nme}}\n              </option>\n            </select>\n        </ng-template>\n    </p-column>\n    <p-column  field=\"ent_cd\"  header=\"รหัสลูกค้า\"></p-column>\n    <p-column  field=\"ent_typ\"  header=\"ประเภทลูกค้า\"></p-column>\n    <p-column  field=\"name\"  header=\"ชื่่อ-นามสกุล\"></p-column>\n    <!--<p-column  field=\"ver_type\"  header=\"VER_TYPE\"></p-column>-->\n    <p-column  field=\"run_no\"  header=\"ลำดับ\"></p-column>\n    <p-footer>\n      <!--<ul>-->\n        <!--<li *ngFor=\"let car of listScrChangeMktNameModelSelected\" style=\"text-align: left\">{{car.mkt_emp_nme + ' - ' + car.ent_typ + ' - ' + car.name + ' - ' + car.run_no}}</li>-->\n      <!--</ul>-->\n    </p-footer>\n  </p-dataTable>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-change-mkt-name/scr-change-mkt-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrChangeMktNameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scr_change_mkt_name_service__ = __webpack_require__("../../../../../src/app/main/scoring/scr-change-mkt-name/scr-change-mkt-name.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_change_mkt_name_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/change-mkt-name.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_dropdown_mkt_name__ = __webpack_require__("../../../../../src/app/main/scoring/model/dropdown-mkt-name.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_save_change_mkt_name_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/save-change-mkt-name.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScrChangeMktNameComponent = /** @class */ (function () {
    function ScrChangeMktNameComponent(changeMktNameService) {
        this.changeMktNameService = changeMktNameService;
        this.saveChangeMktName = new __WEBPACK_IMPORTED_MODULE_4__model_save_change_mkt_name_model__["a" /* ScrSaveChangeMktNameModel */]();
    }
    ScrChangeMktNameComponent.prototype.ngOnInit = function () {
    };
    ScrChangeMktNameComponent.prototype.getListChangeMktName = function () {
        var _this = this;
        this.subscription = this.changeMktNameService.getListChangeMktName(this.refNo).subscribe(function (data) {
            console.log(data);
            _this.listScrChangeMktNameModel = __WEBPACK_IMPORTED_MODULE_2__model_change_mkt_name_model__["a" /* ScrChangeMktNameModel */].parse(data.LIST_DATA);
            _this.listScrDropDownMktNameModel = __WEBPACK_IMPORTED_MODULE_3__model_dropdown_mkt_name__["a" /* ScrDropDownMktNameModel */].parse(data.DATA.LIST_MKT_EMP_NAME);
            console.log(_this.listScrChangeMktNameModel);
            console.log(_this.listScrDropDownMktNameModel);
        }, function (error) {
            console.log(error);
        });
    };
    ScrChangeMktNameComponent.prototype.onClickSearch = function () {
        this.getListChangeMktName();
        this.listScrChangeMktNameModelSelected = [];
    };
    ScrChangeMktNameComponent.prototype.onClickClear = function () {
        this.refNo = '';
        this.getListChangeMktName();
        this.listScrChangeMktNameModelSelected = [];
    };
    ScrChangeMktNameComponent.prototype.onConfirmSave = function () {
        this.dialogConfirm.setAction("SAVE");
        this.dialogConfirm.open();
    };
    ScrChangeMktNameComponent.prototype.onClickSave = function () {
        var _this = this;
        this.saveChangeMktName.device = "web";
        this.saveChangeMktName.userName = this.changeMktNameService.userName;
        this.saveChangeMktName.listChangeMktName = JSON.parse(JSON.stringify(this.listScrChangeMktNameModelSelected));
        this.subscription = this.changeMktNameService.saveChangeMktName(this.saveChangeMktName).subscribe(function (data) {
            console.log(data);
            if (data.MSG == "Complete") {
                _this.dialogChangeMktName.setAction("INFORMATION");
                _this.dialogChangeMktName.setMessage("บันทึกเรียบร้อยแล้ว");
                _this.dialogChangeMktName.open();
            }
            else {
                _this.dialogChangeMktName.setAction("ERROR");
                _this.dialogChangeMktName.setMessage("การทำรายการมีปัญหา ขณะกดปุ่ม  ");
                _this.dialogChangeMktName.open();
            }
        }, function (error) {
            console.log(error);
            _this.dialogChangeMktName.setAction("ERROR");
            _this.dialogChangeMktName.setMessage("การทำรายการมีปัญหา ขณะกดปุ่ม  ");
            _this.dialogChangeMktName.open();
        });
        this.saveChangeMktName = new __WEBPACK_IMPORTED_MODULE_4__model_save_change_mkt_name_model__["a" /* ScrSaveChangeMktNameModel */]();
    };
    ScrChangeMktNameComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionSave != null) {
            this.subscriptionSave.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogChangeMktName'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], ScrChangeMktNameComponent.prototype, "dialogChangeMktName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogConfirm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], ScrChangeMktNameComponent.prototype, "dialogConfirm", void 0);
    ScrChangeMktNameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scr-change-mkt-name',
            template: __webpack_require__("../../../../../src/app/main/scoring/scr-change-mkt-name/scr-change-mkt-name.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/scr-change-mkt-name/scr-change-mkt-name.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scr_change_mkt_name_service__["a" /* ChangeMktNameService */]])
    ], ScrChangeMktNameComponent);
    return ScrChangeMktNameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-change-mkt-name/scr-change-mkt-name.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeMktNameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
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




/**
 * Created by piradee.bu on 27/12/2560.
 */
var ChangeMktNameService = /** @class */ (function () {
    function ChangeMktNameService(http, service, userStorage) {
        this.http = http;
        this.service = service;
        this.userStorage = userStorage;
        this.userName = '';
        this.code = '';
        this.comCode = '';
        this.userName = this.userStorage.getUserName();
        this.code = this.userStorage.getCode();
        this.comCode = this.userStorage.getComCode();
    }
    ChangeMktNameService.prototype.getListChangeMktName = function (refNO) {
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/SearchChangeMktNamePost";
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.post(url, refNO, options);
    };
    ChangeMktNameService.prototype.saveChangeMktName = function (data) {
        console.log("saveChangeMktName");
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/SaveChangeMktNamePost";
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        console.log(JSON.stringify(data));
        console.log(url);
        return this.http.post(url, JSON.stringify(data), options);
    };
    ChangeMktNameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__["a" /* ServiceEndpoint */],
            __WEBPACK_IMPORTED_MODULE_1__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], ChangeMktNameService);
    return ChangeMktNameService;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-retry-to-reverify/scr-retry-to-reverify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-retry-to-reverify/scr-retry-to-reverify.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alert-dialog #dialogWarning></app-alert-dialog>\n\n\n<app-alert-dialog #dialogConfirm\n    (onOK)=\"onSubmit()\" (onCancel)=\"onClickCloseConfirmDialog()\">\n</app-alert-dialog>\n\n<app-action-button-form\n  [title]=\"'Retry To Re-Verify'\"\n  [showSubmit]=\"true\"\n  (onSubmit)=\"onConfirmDialog()\"\n></app-action-button-form>\n\n\n<div class=\"container-fluid\">\n\n  <div class=\"d-flex justify-content-start\">\n    <div class=\"p-2\">\n      <div class=\"form-group\">\n        <label>Reference No.</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"this.refNo\">\n      </div>\n    </div>\n    <div class=\"p-3\">\n      <br>\n      <app-custom-button [option]=\"'search'\"  (click)=\"onClickSearch()\"></app-custom-button>\n      <app-custom-button [option]=\"'cancel'\" (click)=\"onClickClear()\"></app-custom-button>\n    </div>\n  </div>\n\n<p-dataTable [value]=\"this.listScrRetryToReVerify\" scrollable=\"true\" scrollHeight=\"340px\"\n             [(selection)]=\"listScrRetryToReVerifySelected\" dataKey=\"ent_cd\"\n             rowHover =\"true\">\n  <p-column [style]=\"{'width':'2%'}\" selectionMode=\"single\"></p-column>\n  <p-column  field=\"ent_cd\"  header=\"Entity Code\"></p-column>\n  <p-column  field=\"ent_typ\"  header=\"Entity Type\"></p-column>\n  <p-column  field=\"ent_nme\"  header=\"Name\"></p-column>\n  <p-column  field=\"finish_scr_dt\"  header=\"วันที่ Ver ทำสำเร็จ\"></p-column>\n  <p-column  field=\"mgr_app_dt\"  header=\"วันที่ Manager อนุมัติ\"></p-column>\n  <p-column  field=\"ver_type\"  header=\"Ver Type\"></p-column>\n  <p-column  field=\"open_session\"  header=\"Todo ค้าง\"></p-column>\n</p-dataTable>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-retry-to-reverify/scr-retry-to-reverify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrRetryToReverifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_retry_to_reverify_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/retry-to-reverify.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scr_retry_to_reverify_service__ = __webpack_require__("../../../../../src/app/main/scoring/scr-retry-to-reverify/scr-retry-to-reverify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScrRetryToReverifyComponent = /** @class */ (function () {
    function ScrRetryToReverifyComponent(retryToReverifyService) {
        this.retryToReverifyService = retryToReverifyService;
        this.refNo = '';
    }
    ScrRetryToReverifyComponent.prototype.ngOnInit = function () {
    };
    ScrRetryToReverifyComponent.prototype.getListRetryToReVerify = function () {
        var _this = this;
        this.subscription = this.retryToReverifyService.getListRetryToReVerify(this.refNo).subscribe(function (data) {
            console.log(data);
            _this.listScrRetryToReVerify = __WEBPACK_IMPORTED_MODULE_1__model_retry_to_reverify_model__["a" /* ScrRetryToReVerify */].parse(data.LIST_DATA);
        }, function (error) {
            console.log(error);
        });
    };
    ScrRetryToReverifyComponent.prototype.onClickSearch = function () {
        this.getListRetryToReVerify();
    };
    ScrRetryToReverifyComponent.prototype.onClickClear = function () {
        this.refNo = '';
        this.getListRetryToReVerify();
    };
    ScrRetryToReverifyComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.listScrRetryToReVerifySelected);
        if (this.listScrRetryToReVerifySelected) {
            console.log('have data');
            // 'ยืนยันทำรายการ เอางานกลับ '+ strEntTyp
            if (this.listScrRetryToReVerifySelected.can_retry == "YES") {
                this.subscriptionSubmit = this.retryToReverifyService.submitRetryToReVerify(this.listScrRetryToReVerifySelected.run_no, this.listScrRetryToReVerifySelected.com_code, this.listScrRetryToReVerifySelected.ref_no, this.listScrRetryToReVerifySelected.ent_typ, this.listScrRetryToReVerifySelected.ent_cd).subscribe(function (data) {
                    if (data.MSG == "Complete") {
                        _this.dialogWarning.setTitle("Information");
                        _this.dialogWarning.setMessage("To-do " + _this.listScrRetryToReVerifySelected.ent_typ + " รายนี้ไปอยู่ที่ Step Retry to Re-Verify"
                            + " คุณ " + data.DATA.VER_NAME +
                            " เรียบร้อยแล้ว");
                        _this.dialogWarning.open();
                    }
                    else {
                        _this.dialogWarning.setTitle("Information");
                        _this.dialogWarning.setMessage("การทำรายการมีปัญหา ขณะกดปุ่ม  " + data.MSG);
                        _this.dialogWarning.open();
                    }
                }, function (error) {
                    _this.dialogWarning.setTitle("Submit Information");
                    _this.dialogWarning.setMessage("การทำรายการมีปัญหา ขณะกดปุ่ม  ");
                    _this.dialogWarning.open();
                });
            }
            else {
                this.dialogWarning.setTitle("Warning Information");
                this.dialogWarning.setMessage("รายการนี้ไม่สามารถนำ To-do กลับมาได้ เนื่องจากรายการนี้ยังทำไม่เสร็จสิ้น");
                this.dialogWarning.open();
            }
        }
        else {
            this.dialogWarning.setTitle("Warning Information");
            this.dialogWarning.setMessage("กรุณาเลือกรายการที่ต้องการ Submit");
            this.dialogWarning.open();
        }
    };
    ScrRetryToReverifyComponent.prototype.onClickCloseConfirmDialog = function () {
        this.dialogConfirm.close();
    };
    ScrRetryToReverifyComponent.prototype.onConfirmDialog = function () {
        this.dialogConfirm.setAction('SUBMIT');
        this.dialogConfirm.open();
    };
    ScrRetryToReverifyComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionSubmit != null) {
            this.subscriptionSubmit.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogWarning'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], ScrRetryToReverifyComponent.prototype, "dialogWarning", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogConfirm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], ScrRetryToReverifyComponent.prototype, "dialogConfirm", void 0);
    ScrRetryToReverifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scr-retry-to-reverify',
            template: __webpack_require__("../../../../../src/app/main/scoring/scr-retry-to-reverify/scr-retry-to-reverify.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/scr-retry-to-reverify/scr-retry-to-reverify.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__scr_retry_to_reverify_service__["a" /* RetryToReVerifyService */]])
    ], ScrRetryToReverifyComponent);
    return ScrRetryToReverifyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-retry-to-reverify/scr-retry-to-reverify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetryToReVerifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
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




/**
 * Created by piradee.bu on 25/12/2560.
 */
var RetryToReVerifyService = /** @class */ (function () {
    function RetryToReVerifyService(http, service, userStorage) {
        this.http = http;
        this.service = service;
        this.userStorage = userStorage;
        this.userName = '';
        this.code = '';
        this.comCode = '';
        this.userName = this.userStorage.getUserName();
        this.code = this.userStorage.getCode();
        this.comCode = this.userStorage.getComCode();
    }
    RetryToReVerifyService.prototype.getListRetryToReVerify = function (refNO) {
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/SearchRetryToReVerifyPost";
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return this.http.post(url, refNO, options);
    };
    RetryToReVerifyService.prototype.submitRetryToReVerify = function (runNo, comCode, refNo, entType, entCd) {
        console.log("submitRetryToReVerify");
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/SubmitRetryToReVerifyPost";
        var data = {
            "runNo": runNo,
            "comCode": comCode,
            "refNo": refNo,
            "entType": entType,
            "entCd": entCd,
            "device": "web",
            "userName": this.userName
        };
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        console.log(JSON.stringify(data));
        return this.http.post(url, JSON.stringify(data), options);
    };
    RetryToReVerifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__["a" /* ServiceEndpoint */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], RetryToReVerifyService);
    return RetryToReVerifyService;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-verify-history/scr-verify-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-verify-history/scr-verify-history.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p-dataTable [value]=\"dataTable\" scrollable=\"true\" scrollHeight=\"340px\">\n  <p-column field=\"runNo\" header=\"ลำดับ\"></p-column>\n  <p-column field=\"changeType\" header=\"ประเภทการแก้ไข\"></p-column>\n  <p-column field=\"fieldDesc\" header=\"รายการแก้ไข\"></p-column>\n  <p-column field=\"oldData\" header=\"ข้อมุูลเก่า\"></p-column>\n  <p-column field=\"newData\" header=\"ข้อมูลใหม่\"></p-column>\n  <p-column field=\"changeBy\" header=\"แก้ไขโดย\"></p-column>\n  <p-column field=\"editDt\" header=\"วันที่แก้ไข\"></p-column>\n  <p-column field=\"sentDt\" header=\"วันที่ส่ง\"></p-column>\n</p-dataTable>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-verify-history/scr-verify-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrVerifyHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scr_verify_history_service__ = __webpack_require__("../../../../../src/app/main/scoring/scr-verify-history/scr-verify-history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_scoringVerifyHistory_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/scoringVerifyHistory.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrVerifyHistoryComponent = /** @class */ (function () {
    function ScrVerifyHistoryComponent(scrVerifyHistoryService) {
        this.scrVerifyHistoryService = scrVerifyHistoryService;
        this.dataTable = [];
    }
    ScrVerifyHistoryComponent.prototype.ngOnInit = function () {
    };
    ScrVerifyHistoryComponent.prototype.getInitData = function (refNo, comCode) {
        var _this = this;
        console.log('refNo:' + refNo);
        this.scrVerifyHistoryService.getScoringVerifyHistory(refNo, comCode).subscribe(function (data) {
            console.log(data);
            if (data.CODE == "200") {
                _this.dataTable = __WEBPACK_IMPORTED_MODULE_2__model_scoringVerifyHistory_model__["a" /* ScoringVerifyHistoryModel */].parse(data.LIST_DATA);
            }
        });
    };
    ScrVerifyHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scr-verify-history',
            template: __webpack_require__("../../../../../src/app/main/scoring/scr-verify-history/scr-verify-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/scr-verify-history/scr-verify-history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scr_verify_history_service__["a" /* ScrVerifyHistoryService */]])
    ], ScrVerifyHistoryComponent);
    return ScrVerifyHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/scr-verify-history/scr-verify-history.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrVerifyHistoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
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




var ScrVerifyHistoryService = /** @class */ (function () {
    function ScrVerifyHistoryService(http, service, userStorage) {
        this.http = http;
        this.service = service;
        this.userStorage = userStorage;
        this.userName = '';
        this.code = '';
        this.comCode = '';
        this.dataTable = [];
        this.userName = this.userStorage.getUserName();
        this.code = this.userStorage.getCode();
        this.comCode = this.userStorage.getComCode();
    }
    ScrVerifyHistoryService.prototype.getScoringVerifyHistory = function (refNo, comCode) {
        console.log();
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/ScoringVerifyHistoryPost";
        var data = {
            "device": "web",
            "userName": this.userName,
            "comCode": comCode,
            "refNo": refNo,
        };
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        console.log(JSON.stringify(data));
        return this.http.post(url, JSON.stringify(data), options);
    };
    ScrVerifyHistoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__shared_config_service_endpoint__["a" /* ServiceEndpoint */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], ScrVerifyHistoryService);
    return ScrVerifyHistoryService;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/header-verification-detail/header-verification-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*li.dropdown-submenu:nth-of-type(8n+1) > ul {*/\r\n  /*background: #02a1a5;*/\r\n  /*}*/\r\n  /*li.dropdown-submenu:nth-of-type(8n+2) > ul {*/\r\n  /*background: #006b9c;*/\r\n  /*}*/\r\n  /*li.dropdown-submenu:nth-of-type(8n+3) > ul {*/\r\n  /*background: #960075;*/\r\n  /*}*/\r\n  /*li.dropdown-submenu:nth-of-type(8n+4) > ul {*/\r\n  /*background: #540768;*/\r\n  /*}*/\r\n  /*li.dropdown-submenu:nth-of-type(8n+5) > ul {*/\r\n  /*background: #680909;*/\r\n  /*}*/\r\n  /*li.dropdown-submenu:nth-of-type(8n+6) > ul {*/\r\n  /*background: #683D0E;*/\r\n  /*}*/\r\n  /*li.dropdown-submenu:nth-of-type(8n+7) > ul {*/\r\n  /*background: #0F680C;*/\r\n  /*}*/\r\n  /*li.dropdown-submenu:nth-of-type(8n+8) > ul {*/\r\n  /*background: #056830;*/\r\n  /*}*/\r\n  /*.dropdown-submenu {*/\r\n  /*!*position: relative;*!*/\r\n  /*}*/\r\n  /*.navbar-nav > .dropdown > .dropdown-menu {*/\r\n  /*background-color: #292b2c;*/\r\n  /*}*/\r\n  /*.dropdown-menu {*/\r\n  /*border-radius: 0px;*/\r\n  /*}*/\r\n  /*.dropdown-menu > li > a {*/\r\n  /*color: #f9f9f9;*/\r\n  /*}*/\r\n  /*.dropdown-menu > li > a:hover {*/\r\n  /*color: #292b2c;*/\r\n  /*background-color: #cccccc;*/\r\n  /*}*/\r\n  /*.dropdown-submenu:hover > a:after {*/\r\n  /*border-left-color: #fff;*/\r\n  /*}*/\r\n  /*.dropdown-submenu > .dropdown-menu {*/\r\n  /*top: 0;*/\r\n  /*left: 100%;*/\r\n  /*min-height: 100%;*/\r\n  /*}*/\r\n  /*.dropdown-submenu:hover > .dropdown-menu {*/\r\n  /*display: block;*/\r\n  /*}*/\r\n  /*.dropdown-submenu > a:after {*/\r\n  /*display: block;*/\r\n  /*content: \" \";*/\r\n  /*float: right;*/\r\n  /*width: 0;*/\r\n  /*height: 0;*/\r\n  /*border-color: transparent;*/\r\n  /*border-style: solid;*/\r\n  /*border-width: 5px 0 5px 5px;*/\r\n  /*border-left-color: #ccc;*/\r\n  /*margin-top: 5px;*/\r\n  /*margin-right: -10px;*/\r\n  /*}*/\r\n  /*p-dialog .ui-dialog {*/\r\n  /*overflow: scroll;*/\r\n  /*max-height: 70%;*/\r\n  /*}*/\r\n  .btn {\r\n  width: 100px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  border: 1px solid transparent;\r\n  border-radius: 5px;\r\n  white-space: nowrap;\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  padding: 8px 14px 7px;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .18);\r\n          box-shadow: 0 1px 3px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .18);\r\n  color: #fff;\r\n}\r\n  .btn:hover {\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.34), 0 1px 2px rgba(0, 0, 0, 0.43);\r\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.34), 0 1px 2px rgba(0, 0, 0, 0.43);\r\n  color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/header-verification-detail/header-verification-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-action-button-form\n  [title]=\"'Detail Verification'\"\n  [showSave]  =\"true\"\n  [showCalculator]=\"true\"\n  [showCancel]=\"true\"\n  [showSubmit]=\"true\"\n  [showReject]=\"true\"\n\n  (onSave)=\"onConfirmDialogSave()\"\n  (onCalculator)=\"onCalScoreClick()\"\n  (onCancel)=\"onConfirmDialogCancel()\"\n  (onSubmit)=\"onConfirmDialogSubmit()\"\n  (onReject)=\"onConfirmDialogReject()\"\n  *ngIf=\"((!checkReadOnly) ||((checkEnquiry==false) && (this?.mainTab.stg_id == '4')))\"\n>\n</app-action-button-form>\n\n\n<app-action-button-form\n  [title]=\"'Detail Verification'\"\n  *ngIf=\"(checkReadOnly==true)&& (this.mainTab.stg_id != '4') \">\n</app-action-button-form>\n\n<app-alert-dialog #dialogHeaderVerify\n                  (onCloseDialog)=\"onCloseDialogHeaderVerify()\"\n                  (onOK)=\"onCloseDialogHeaderVerify()\"></app-alert-dialog>\n\n\n<app-action-dialog [title]=\"'ประวัติการทำ Credit Scoring'\" #creditScoringHistoryDialog\n                   [width]=\"1200\"\n                   [showOk]=\"!checkReadOnly\" (onOk)=\"selectCreditScoringHistory()\"\n                   [showCancel]=\"true\">\n  <app-scr-credit-scoring-history></app-scr-credit-scoring-history>\n</app-action-dialog>\n\n\n<app-action-dialog [title]=\"'ประวัติการแก้ไขข้อมูลที่มีผลต่อการ Verify Data'\" #verifyHistoryDialog\n                   [width]=\"1200\"\n                   [showCancel]=\"true\">\n  <!--<app-scr-verify-history></app-scr-verify-history>-->\n  <app-scr-verify-history #scrVerifyHistory></app-scr-verify-history>\n</app-action-dialog>\n\n<app-alert-dialog #dialogConfirm\n                  (onOK)=\"onCallAction()\" (onCancel)=\"onClickCloseConfirmDialog()\">\n</app-alert-dialog>\n\n<app-action-dialog [title]=\"'ผล Decision Grade'\" #decisionGradeDialog\n                   [showOk]=\"!checkReadOnly\" (onOk)=\"onSaveDecisionGrade()\">\n  <div class=\"form-group\">\n    <label>Decision Grade</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"this.tempPrimScr\" [readOnly]=\"checkReadOnly\">\n  </div>\n  <div class=\"form-group\">\n    <label>เหตุผล</label>\n    <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"this.tempPrimScrResult\" [readOnly]=\"checkReadOnly\">{{mainTab?.prim_scr_rsult}}</textarea>\n  </div>\n</app-action-dialog>\n\n<app-action-dialog [title]=\"'Payment Grading'\" #paymentGradeDialog\n                   [showOk]=\"true\" (onOk)=\"onSavePaymentGrade()\">\n  <div class=\"form-group\">\n    <label>เลขที่สัญญา</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"this.tempPmtGrdngAgrCode\">\n  </div>\n  <div class=\"form-group\" style=\"padding-top: 2px\">\n    <label>Payment Grading</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"this.tempPmntGrdng\">\n  </div>\n  <div class=\"form-group\" style=\"padding-top: 2px\">\n    <label>As of Date</label><br>\n    <p-calendar #idTempPmntGrdngAsOf [ngModel]=\"this.tempPmntGrdngAsOf\"\n                dateFormat=\"dd/mm/yy\"\n                (onSelect)=\"this.tempPmntGrdngAsOf=onChangedate(idTempPmntGrdngAsOf.value)\"></p-calendar>\n  </div>\n</app-action-dialog>\n\n<app-action-dialog [title]=\"' ข้อมูลทางการเงิน'\" #scrCorpDialog\n                   [width]=\"900\">\n  <app-scr-alert-jrst-fin (onClose)=\"onCloseAlertScrCorp()\"\n                          [displayDialogScrJrstFin]=\"this.alertScrCorp\"></app-scr-alert-jrst-fin>\n</app-action-dialog>\n\n<div>\n  <div class=\"d-flex justify-content-end\">\n    <div class=\"mr-auto p-2 col-6\">\n      <i class=\"fa fa-user fa-lg\"></i>\n      <strong>ลูกค้า: </strong>\n      <span>{{mainTab?.cust_name_display}}</span>\n    </div>\n\n    <div class=\"col-2 \">\n      <i class=\"fa fa-edit fa-2x\" style=\"color: #3519d4\" (click)=\"showDialogDecisionGrade()\"></i>\n      <strong>Descision Grade: </strong>\n      <span style=\"color: #3519d4\">{{mainTab?.prim_scr}}</span>\n    </div>\n\n    <div class=\"col-2\" *ngIf=\"!checkReadOnly\">\n      <i class=\"fa fa-edit fa-2x\" style=\"color: #3519d4\" (click)=\"showDialogPaymentGrade()\"></i>\n      <strong>Payment Grading: </strong>\n      <span style=\"color: #3519d4\">{{mainTab?.pmnt_grdng}}</span>\n    </div>\n\n    <div class=\"col-2\" style=\"margin-top: 7px\">\n      <strong>ผลเกรด: </strong>\n      <span style=\"color: #3519d4\">{{resultGrade}}</span>\n    </div>\n  </div>\n\n\n  <p-tabView (onChange)=\"onChangeHeaderTab($event)\">\n    <p-tabPanel header=\"หน้าหลัก\">\n      <div class=\"d-flex justify-content-start\">\n        <div class=\"ml-auto\">\n          <button type=\"button\" class=\"btn btn-primary\" style=\"width: auto\" (click)=\"clickVerifyHistory()\">\n            <i class=\"fa fa-eye\"></i>\n            Verify History\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\" style=\"width: auto\" (click)=\"clickCreditScoringHistory()\">\n            <i class=\"fa fa-edit\"></i>\n            Credit Scoring History\n          </button>\n        </div>\n      </div>\n    </p-tabPanel>\n    <p-tabPanel header=\"ความสามารถ\">\n      <div *ngIf=\"mainTab?.ent_cat == 'Juristic'\">\n        <div class=\"d-flex justify-content-start\">\n          <div class=\"ml-auto\">\n            <button type=\"button\" class=\"btn btn-primary\" style=\"width: auto\" (click)=\"showDialogCorp()\">\n              <i class=\"fa fa-edit\"></i>\n              สถานะทางการเงิน\n            </button>\n          </div>\n        </div>\n      </div>\n    </p-tabPanel>\n    <p-tabPanel header=\"ข้อมูล NCB\">\n      <div class=\"d-flex justify-content-start\">\n        <p-tabView (onChange)=\"onChangeSubHeaderTab($event)\">\n          <p-tabPanel header=\"เงินให้กู้เพื่อการเคหะ\">\n          </p-tabPanel>\n          <p-tabPanel header=\"เช่าซื้อ\">\n          </p-tabPanel>\n          <p-tabPanel header=\"บัตรสินเชื่อ\">\n          </p-tabPanel>\n          <p-tabPanel header=\"เงินให้กู้ส่วนบุคคล\">\n          </p-tabPanel>\n          <p-tabPanel header=\"เงินเบิกเกินบัญชี\">\n          </p-tabPanel>\n        </p-tabView>\n      </div>\n    </p-tabPanel>\n    <p-tabPanel header=\"ฐานะความเป็นอยู่\">\n    </p-tabPanel>\n    <p-tabPanel header=\"หลักประกัน\">\n    </p-tabPanel>\n    <p-tabPanel header=\"ความเห็น\">\n    </p-tabPanel>\n    <p-tabPanel header=\"รูปภาพ\">\n    </p-tabPanel>\n  </p-tabView>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/header-verification-detail/header-verification-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderVerificationDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verification_detail_service__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/action-dialog/action-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_config_string_utils__ = __webpack_require__("../../../../../src/app/shared/config/string-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blacklist_blacklist_ncb_service__ = __webpack_require__("../../../../../src/app/main/blacklist/blacklist-ncb-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scr_verify_history_scr_verify_history_component__ = __webpack_require__("../../../../../src/app/main/scoring/scr-verify-history/scr-verify-history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HeaderVerificationDetailComponent = /** @class */ (function () {
    function HeaderVerificationDetailComponent(router, verficationDetailService, datePipe, stringUtils, blacklistNcbService) {
        this.router = router;
        this.verficationDetailService = verficationDetailService;
        this.datePipe = datePipe;
        this.stringUtils = stringUtils;
        this.blacklistNcbService = blacklistNcbService;
        this.listQuestionTab = [];
        this.alertScrCorp = false;
        this.alertVerifyHist = false;
        this.alertCreditScoringHist = false;
        this.tempPmtGrdngAgrCode = '';
        this.tempPmntGrdng = '';
        this.tempPmntGrdngAsOf = '';
        this.tempPrimScrResult = '';
        this.tempPrimScr = '';
        this.strConfirmDialog = '';
        this.actionType = '';
        this.onTabNameChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modelNcbImage = [];
    }
    HeaderVerificationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkReadOnly = this.verficationDetailService.checkReadOnly;
        this.checkEnquiry = this.verficationDetailService.checkEnquiry;
        this.verficationDetailService.eventTabMain.subscribe(function (obj) {
            _this.checkEnquiry = _this.verficationDetailService.checkEnquiry;
            _this.checkReadOnly = _this.verficationDetailService.checkReadOnly;
            _this.mainTab = obj;
            _this.scrVerifyHistory.getInitData(_this.mainTab.ref_no, _this.mainTab.com_code);
        });
        this.verficationDetailService.eventResultGrade.subscribe(function (obj) {
            _this.resultGrade = obj;
        });
        this.verficationDetailService.eventIdxTab.subscribe(function (obj) {
            _this.idxTab = obj;
        });
        this.verficationDetailService.eventListQuestionTab.subscribe(function (obj) {
            _this.listQuestionTab = obj;
        });
        this.verficationDetailService.refreshData();
    };
    HeaderVerificationDetailComponent.prototype.setTabId = function (idx) {
        //cal grand total score in page
        this.idxTab = idx;
        this.verficationDetailService.setIdxCalScore(idx);
    };
    HeaderVerificationDetailComponent.prototype.onCalScoreClick = function () {
        this.verficationDetailService.calScoringAllPage();
    };
    HeaderVerificationDetailComponent.prototype.onSaveClick = function () {
        var _this = this;
        var msgValidate = this.verficationDetailService.validateDataSave();
        if (msgValidate == "Complete") {
            this.subscriptionSave = this.verficationDetailService.onSaveScoring().subscribe(function (data) {
                if (data.MSG == "Complete") {
                    _this.setAlertDialog('INFORMATION', "Save Complete");
                }
                else {
                    _this.setAlertDialog('ERROR', data.MSG);
                }
            }, function (error) {
                _this.setAlertDialog('ERROR', error);
            });
        }
        else {
            this.isWarning = true;
            this.setAlertDialog('WARNING', msgValidate);
        }
    };
    HeaderVerificationDetailComponent.prototype.onDeleteClick = function () {
        var _this = this;
        // Please Confirm to Delete
        this.subscriptionDelete = this.verficationDetailService.onDeleteScoring().subscribe(function (data) {
            if (data.MSG == "Complete") {
                _this.setAlertDialog('INFORMATION', "Cancel Complete");
            }
        }, function (error) {
            _this.setAlertDialog('ERROR', error);
        });
    };
    HeaderVerificationDetailComponent.prototype.onChangeHeaderTab = function (e) {
        //fix sub tab
        var idxHaveSubHeaderTab = 2;
        var numSubHeaderTab = 5;
        this.idxHeaderTab = e.index;
        console.log(e.index);
        if ((this.idxHeaderTab > idxHaveSubHeaderTab) && (this.idxHeaderTab < 6)) {
            this.idxHeaderTab = this.idxHeaderTab + numSubHeaderTab;
        }
        if (this.idxHeaderTab === 0) {
            this.onTabNameChange.emit('main');
        }
        else if (this.idxHeaderTab === 6) {
            this.onTabNameChange.emit('img');
        }
        else {
            this.setTabId(this.idxHeaderTab - 1);
            this.onTabNameChange.emit('question');
        }
    };
    HeaderVerificationDetailComponent.prototype.onChangeSubHeaderTab = function (e) {
        this.idxSubHeaderTab = e.index;
        this.setTabId((this.idxHeaderTab + this.idxSubHeaderTab) - 1);
        this.onTabNameChange.emit('question');
    };
    HeaderVerificationDetailComponent.prototype.onSavePaymentGrade = function () {
        if ((this.tempPmtGrdngAgrCode) && (this.tempPmntGrdng) && (this.tempPmntGrdngAsOf)) {
            this.mainTab.pmnt_grdng_agr_code = this.tempPmtGrdngAgrCode;
            this.mainTab.pmnt_grdng = this.tempPmntGrdng;
            this.mainTab.pmnt_grdng_asof = this.tempPmntGrdngAsOf;
            this.verficationDetailService.setMainTab(this.mainTab);
            this.paymentGradeDialog.close();
        }
        else {
            this.isWarning = true;
            this.setAlertDialog('WARNING', "กรุณาใส่ข้อมูลให้ครบถ้วน");
        }
    };
    HeaderVerificationDetailComponent.prototype.showDialogPaymentGrade = function () {
        this.tempPmtGrdngAgrCode = this.mainTab.pmnt_grdng_agr_code;
        this.tempPmntGrdng = this.mainTab.pmnt_grdng;
        this.tempPmntGrdngAsOf = this.mainTab.pmnt_grdng_asof;
        // this.alertPayment = true;
        this.paymentGradeDialog.open();
    };
    HeaderVerificationDetailComponent.prototype.onSaveDecisionGrade = function () {
        if (this.verficationDetailService.IsGrade(this.tempPrimScr)) {
            this.mainTab.prim_scr = this.tempPrimScr;
            this.mainTab.prim_scr_rsult = this.tempPrimScrResult;
            // this.alertDecision = !this.alertDecision;
            this.decisionGradeDialog.close();
        }
        else {
            this.isWarning = true;
            this.setAlertDialog("WARNING", "กรุณาใส่เกรดตามที่ Policy ได้ระบุไว้");
        }
    };
    HeaderVerificationDetailComponent.prototype.showDialogDecisionGrade = function () {
        var msgValidate = this.verficationDetailService.validateDialogDecisionGrade();
        if (msgValidate == "Complete") {
            this.tempPrimScr = this.mainTab.prim_scr;
            this.tempPrimScrResult = this.mainTab.prim_scr_rsult;
            // this.alertDecision = true;
            this.decisionGradeDialog.open();
        }
        else {
            this.setAlertDialog('WARNING', msgValidate);
        }
    };
    HeaderVerificationDetailComponent.prototype.showDialogCorp = function () {
        this.verficationDetailService.eventCopyQuestionTab.emit(true);
        // this.alertScrCorp = true;
        this.scrCorpDialog.open();
    };
    HeaderVerificationDetailComponent.prototype.onCloseAlertScrCorp = function () {
        // this.alertScrCorp=!this.alertScrCorp;
        this.scrCorpDialog.close();
        this.verficationDetailService.eventCopyQuestionTab.emit(true);
    };
    HeaderVerificationDetailComponent.prototype.onShowDialogVerifyHist = function () {
        this.alertVerifyHist = true;
    };
    HeaderVerificationDetailComponent.prototype.onCloseDialogVerifyHist = function () {
        this.alertVerifyHist = !this.alertVerifyHist;
    };
    HeaderVerificationDetailComponent.prototype.onShowDialogCreditScoringHist = function () {
        this.alertCreditScoringHist = true;
    };
    HeaderVerificationDetailComponent.prototype.onCloseDialogCreditScoringHist = function () {
        this.alertCreditScoringHist = !this.alertCreditScoringHist;
    };
    HeaderVerificationDetailComponent.prototype.onChangedate = function (indate) {
        var strDate = this.datePipe.transform(indate, 'dd/MM/yyyy');
        return strDate;
    };
    HeaderVerificationDetailComponent.prototype.clickVerifyHistory = function () {
        this.verifyHistoryDialog.open();
    };
    // Mos //
    HeaderVerificationDetailComponent.prototype.clickCreditScoringHistory = function () {
        this.verficationDetailService.setTabMainTemp(this.mainTab);
        this.creditScoringHistoryDialog.open();
    };
    HeaderVerificationDetailComponent.prototype.selectCreditScoringHistory = function () {
        this.verficationDetailService.clickCreditScoringHistory(true);
    };
    HeaderVerificationDetailComponent.prototype.submitClick = function () {
        var _this = this;
        var msgValidate = this.verficationDetailService.validateDataSubmit();
        if (msgValidate == "Complete") {
            this.subscriptionSubmit = this.verficationDetailService.onSubmitScoring().subscribe(function (data) {
                if (data.MSG == "Complete") {
                    if (_this.mainTab.stg_id == '4') {
                        _this.setAlertDialog('INFORMATION', "Sumit Complete");
                    }
                    else {
                        _this.setAlertDialog('INFORMATION', "Send To: " + data.DATA.VER_NAME);
                    }
                }
            }, function (error) {
                _this.setAlertDialog('ERROR', error);
            });
        }
        else {
            this.isWarning = true;
            this.setAlertDialog('WARNING', msgValidate);
        }
    };
    HeaderVerificationDetailComponent.prototype.retryClick = function () {
        var _this = this;
        this.subscriptionRetry = this.verficationDetailService.onRetryScoring().subscribe(function (data) {
            if (data.MSG == "Complete") {
                _this.setAlertDialog('INFORMATION', "Send To: " + data.DATA.VER_NAME);
            }
        }, function (error) {
            _this.setAlertDialog('ERROR', error);
        });
    };
    HeaderVerificationDetailComponent.prototype.onConfirmDialogCancel = function () {
        this.actionType = 'CANCEL';
        this.strConfirmDialog = this.stringUtils.TitleDialog.CANCEL;
        this.onConfirmDialog();
    };
    HeaderVerificationDetailComponent.prototype.onConfirmDialogSave = function () {
        this.actionType = 'SAVE';
        this.strConfirmDialog = this.stringUtils.TitleDialog.SAVE;
        this.onConfirmDialog();
    };
    HeaderVerificationDetailComponent.prototype.onConfirmDialogSubmit = function () {
        this.actionType = 'SUBMIT';
        this.strConfirmDialog = this.stringUtils.TitleDialog.SUBMIT;
        this.onConfirmDialog();
    };
    HeaderVerificationDetailComponent.prototype.onConfirmDialogReject = function () {
        this.actionType = 'REJECT';
        this.onConfirmDialog();
    };
    HeaderVerificationDetailComponent.prototype.onConfirmDialog = function () {
        this.dialogConfirm.setAction(this.actionType);
        this.dialogConfirm.open();
    };
    HeaderVerificationDetailComponent.prototype.onClickCloseConfirmDialog = function () {
        this.dialogConfirm.close();
    };
    HeaderVerificationDetailComponent.prototype.onCallAction = function () {
        this.isWarning = false;
        if (this.actionType == 'SAVE') {
            this.onSaveClick();
        }
        else if (this.actionType == 'CANCEL') {
            this.onDeleteClick();
        }
        else if (this.actionType == 'SUBMIT') {
            this.submitClick();
        }
        else if (this.actionType == 'REJECT') {
            this.retryClick();
        }
    };
    HeaderVerificationDetailComponent.prototype.onCloseDialogHeaderVerify = function () {
        var _this = this;
        // if ((this.actionType != 'save') && (this.isWarning == false)){}
        if (this.isWarning == false) {
            console.log('inlooop');
            window.scrollTo(0, 0);
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 200);
        }
    };
    HeaderVerificationDetailComponent.prototype.setAlertDialog = function (action, msg) {
        this.dialogHeaderVerify.setAction(action);
        this.dialogHeaderVerify.setMessage(msg);
        this.dialogHeaderVerify.open();
    };
    HeaderVerificationDetailComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionSave != null) {
            this.subscriptionSave.unsubscribe();
        }
        if (this.subscriptionDelete != null) {
            this.subscriptionDelete.unsubscribe();
        }
        if (this.subscriptionSubmit != null) {
            this.subscriptionSubmit.unsubscribe();
        }
        if (this.subscriptionRetry != null) {
            this.subscriptionRetry.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onTabNameChange"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], HeaderVerificationDetailComponent.prototype, "onTabNameChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogHeaderVerify'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], HeaderVerificationDetailComponent.prototype, "dialogHeaderVerify", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('creditScoringHistoryDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], HeaderVerificationDetailComponent.prototype, "creditScoringHistoryDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('verifyHistoryDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], HeaderVerificationDetailComponent.prototype, "verifyHistoryDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('decisionGradeDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], HeaderVerificationDetailComponent.prototype, "decisionGradeDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paymentGradeDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], HeaderVerificationDetailComponent.prototype, "paymentGradeDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrCorpDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], HeaderVerificationDetailComponent.prototype, "scrCorpDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogConfirm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], HeaderVerificationDetailComponent.prototype, "dialogConfirm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrVerifyHistory"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__scr_verify_history_scr_verify_history_component__["a" /* ScrVerifyHistoryComponent */])
    ], HeaderVerificationDetailComponent.prototype, "scrVerifyHistory", void 0);
    HeaderVerificationDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-verification-detail',
            template: __webpack_require__("../../../../../src/app/main/scoring/verification-detail/header-verification-detail/header-verification-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/verification-detail/header-verification-detail/header-verification-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__verification_detail_service__["a" /* VerificationDetailService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_6__shared_config_string_utils__["a" /* StringUtils */], __WEBPACK_IMPORTED_MODULE_7__blacklist_blacklist_ncb_service__["a" /* BlacklistNcbService */]])
    ], HeaderVerificationDetailComponent);
    return HeaderVerificationDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/mainTab-verification-detail/mainTab-verification-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\r\n  width: 100px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  border: 1px solid transparent;\r\n  border-radius: 5px;\r\n  white-space: nowrap;\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  padding: 8px 14px 7px;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .18);\r\n          box-shadow: 0 1px 3px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .18);\r\n  color: #fff;\r\n}\r\n\r\n.btn:hover {\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.34), 0 1px 2px rgba(0, 0, 0, 0.43);\r\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.34), 0 1px 2px rgba(0, 0, 0, 0.43);\r\n  color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/mainTab-verification-detail/mainTab-verification-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alert-dialog #dialogMainVerify></app-alert-dialog>\n\n<app-action-dialog [title]=\"''\" #ncbDialog\n                   [width]=\"1000\">\n<app-blacklist-ncb-showenquiry [ptradeid]=\"mainTab.id_card\"\n[showMktCheckDate]=\"true\"\n[showSentNcbDate]=\"true\"\n[showMktName]=\"true\"\n[showEntSurname]=\"true\"\n[showEntName]=\"true\"\n[showBlResult]=\"true\"\n[showResultNcb]=\"true\"\n></app-blacklist-ncb-showenquiry>\n</app-action-dialog>\n\n<app-action-dialog [title]=\"''\" #blDialog\n                   [width]=\"1000\">\n  <app-blacklist-showblacklist [LAST_NAME]=\"this.nameSearchBL\" *ngIf=\"this.mainTab.ent_cat == 'Individual'\"></app-blacklist-showblacklist>\n  <app-blacklist-showblacklist [FIRST_NAME]=\"this.nameSearchBL\" *ngIf=\"this.mainTab.ent_cat == 'Juristic'\"></app-blacklist-showblacklist>\n</app-action-dialog>\n\n<div class=\"container-fluid\">\n  <br>\n  <div class=\"row\">\n    <div class=\"col- col-md-1\">\n      <div class=\"form-group\">\n        <label>สำนักงาน</label>\n        <input type=\"text\" class=\"form-control\" readonly value=\"{{mainTab?.com_code}}\">\n      </div>\n    </div>\n\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <label>ลำดับ</label>\n        <input type=\"text\" class=\"form-control\" readonly value=\"{{mainTab?.run_no}}\">\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>เลขที่อ้างอิง</label>\n        <input type=\"text\" class=\"form-control\" readonly value=\"{{mainTab?.ref_no}}\" readonly>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"row\">\n        <div class=\"form-group col-md-5\">\n          <label>ประเภทลูกค้า</label>\n          <input type=\"text\" class=\"form-control\" readonly value=\"{{mainTab?.ent_typ}}\" readonly>\n        </div>\n        <div class=\"form-group col-md\">\n          <label>วันที่ทำรายการ</label>\n          <input class=\"form-control\" type=\"text\" readonly value=\"{{mainTab?.scr_dt}}\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>Product Code</label>\n        <select class=\"form-control\" (change)=\"onChangeDropDown(mainTab.list_product_cd,$event.target.value)\"\n                [disabled]=\"checkReadOnly\">\n          <option *ngFor=\"let items of mainTab?.list_product_cd;let i=index\" [selected]=\"items?.selected == 'Y'\"\n                  [value]=\"i\">{{items.item}}\n          </option>\n        </select>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>MKT/CS</label>\n        <input type=\"text\" class=\"form-control\" readonly value=\"{{mainTab?.mkt_emp_no}}\">\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>เจ้าหน้าที่ตรวจสอบ</label>\n        <select class=\"form-control\" (change)=\"onChangeDropDown(mainTab.list_ver_emp_no,$event.target.value)\"\n                [disabled]=\"checkReadOnly\">\n          <option *ngFor=\"let items of mainTab?.list_ver_emp_no;let i=index\" [selected]=\"items?.selected == 'Y'\"\n                  [value]=\"i\">{{items.item}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>รหัส</label>\n        <input type=\"text\" class=\"form-control\" readonly value=\"{{mainTab?.ent_cd}}\">\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ชื่อ - นามสกุล</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mainTab.ent_nme\" [readonly]=\"checkReadOnly\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ชื่อ-นามสกุล คู่สมรส</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mainTab.spus_nme\" [readonly]=\"checkReadOnly\">\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ตรวจสอบภายใน/ภายนอก</label>\n        <select class=\"form-control\" (change)=\"onChangeDropDown(mainTab.list_in_out,$event.target.value)\"\n                [disabled]=\"checkReadOnly\">\n          <option *ngFor=\"let items of mainTab?.list_in_out;let i=index\" [selected]=\"items?.selected == 'Y'\"\n                  [value]=\"i\">{{items.item}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>งานรอตรวจสอบ</label>\n        <select class=\"form-control\" (change)=\"onChangeDropDown(mainTab.listWaitMthd,$event.target.value)\"\n                [disabled]=\"checkReadOnly\">\n          <option *ngFor=\"let items of mainTab?.listWaitMthd;let i=index\" [selected]=\"items?.selected == 'Y'\"\n                  [value]=\"i\">{{items.item}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-3\" *ngIf=\"mainTab.ent_typ!='Customer'\">\n      <div class=\"form-group\">\n        <label>ความสัมพันธ์กับผู้เช่าซื้อ</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mainTab.relsn\" [readonly]=\"checkReadOnly\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>วิธีการตรวจสอบ</label>\n        <select class=\"form-control\" (change)=\"onChangeDropDown(mainTab.list_ver_mthd,$event.target.value)\"\n                [disabled]=\"checkReadOnly\">\n          <option *ngFor=\"let items of mainTab?.list_ver_mthd;let i=index\" [selected]=\"items?.selected == 'Y'\"\n                  [value]=\"i\">{{items.item}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ไม่สามารถตรวจสอบได้เพราะ</label>\n        <textarea class=\"form-control\" rows=\"1\" [(ngModel)]=\"mainTab.ver_mthd_more\"\n                  [readonly]=\"checkReadOnly\"></textarea>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>โทรศัพท์บ้าน</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mainTab.home_tel\" [readonly]=\"checkReadOnly\">\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ผลตรวจสอบโทรศัพท์บ้าน</label>\n        <textarea class=\"form-control\" rows=\"1\" [(ngModel)]=\"mainTab.home_tel_rsult\"\n                  [readonly]=\"checkReadOnly\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>โทรศัพท์ที่ทำงาน</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mainTab.offce_tel\" [readonly]=\"checkReadOnly\">\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ผลตรวจสอบโทรศัพท์ที่ทำงาน</label>\n        <textarea class=\"form-control\" rows=\"1\" [(ngModel)]=\"mainTab.offce_tel_rsult\"\n                  [readonly]=\"checkReadOnly\"></textarea>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>โทรศัพท์มือถือ</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mainTab.moble_tel\" [readonly]=\"checkReadOnly\">\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ผลตรวจสอบโทรศัพท์ทมือถือ</label>\n        <textarea class=\"form-control\" rows=\"1\" [(ngModel)]=\"mainTab.visit_rsult\" [readonly]=\"checkReadOnly\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ผู้ขอใช้เบอร์</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mainTab.ownr_home_tel\" [readonly]=\"checkReadOnly\">\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ที่อยู่ที่บ้าน</label>\n        <select class=\"form-control\" (change)=\"onChangeDropDown(mainTab.list_home_addr_crrct_cd,$event.target.value)\"\n                [disabled]=\"checkReadOnly\">\n          <option *ngFor=\"let items of mainTab?.list_home_addr_crrct_cd;let i=index\"\n                  [selected]=\"items?.selected == 'Y'\" [value]=\"i\">{{items.item}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ที่อยู่ที่ทำงาน</label>\n        <select class=\"form-control\"\n                (change)=\"onChangeDropDown(mainTab.list_offce_addr_crrct_cd,$event.target.value)\"\n                [disabled]=\"checkReadOnly\">\n          <option *ngFor=\"let items of mainTab?.list_offce_addr_crrct_cd;let i=index\"\n                  [selected]=\"items?.selected == 'Y'\" [value]=\"i\">{{items.item}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ข้อมูลข้างเคียง</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mainTab.ngbhd\" [readonly]=\"checkReadOnly\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ขณะตรวจสอบ</label>\n        <select class=\"form-control\" (change)=\"onChangeDropDown(mainTab.list_visit_cd,$event.target.value)\"\n                [disabled]=\"checkReadOnly\">\n          <option *ngFor=\"let items of mainTab?.list_visit_cd;let i=index\" [selected]=\"items?.selected == 'Y'\"\n                  [value]=\"i\">{{items.item}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>เหตุผลขณะตรวจสอบ</label>\n        <textarea class=\"form-control\" rows=\"1\" [(ngModel)]=\"mainTab.ver_mthd_more\"\n                  [readonly]=\"checkReadOnly\"></textarea>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>ประวัติ Tracing</label>\n        <select class=\"form-control\" (change)=\"onChangeDropDown(mainTab.list_trec_rec_cd,$event.target.value)\"\n                [disabled]=\"checkReadOnly\">\n          <option *ngFor=\"let items of mainTab?.list_trec_rec_cd;let i=index\" [selected]=\"items?.selected == 'Y'\"\n                  [value]=\"i\">{{items.item}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>รายละเอียดTracing</label>\n        <textarea class=\"form-control\" rows=\"1\" [(ngModel)]=\"mainTab.trce_rec_dtel\"\n                  [readonly]=\"checkReadOnly\"></textarea>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"width: auto\" (click)=\"clickBlDialog()\">\n          <i class=\"fa fa-search\" aria-hidden=\"true\" ></i>\n        </button>\n        <label>ประวัติ B/L ของ ASK</label>\n        <select class=\"form-control\" (change)=\"onChangeDropDown(mainTab.list_ask_rec_cd,$event.target.value)\"\n                [disabled]=\"checkReadOnly\">\n          <option *ngFor=\"let items of mainTab?.list_ask_rec_cd;let i=index\" [selected]=\"items?.selected == 'Y'\"\n                  [value]=\"i\">{{items.item}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"width: auto\" (click)=\"clickNcbDialog()\">\n          <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n        </button>\n        <label>ประวัติ NCB</label>\n\n        <select class=\"form-control\" (change)=\"onChangeDropDown(mainTab.list_ncb_rec_cd,$event.target.value)\"\n                [disabled]=\"checkReadOnly\">\n          <option *ngFor=\"let items of mainTab?.list_ncb_rec_cd;let i=index\" [selected]=\"items?.selected == 'Y'\"\n                  [value]=\"i\">{{items.item}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label>รายละเอียดB/LของASKและประวัติNCB</label>\n        <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"mainTab.ask_rec_dtel\"\n                  [readonly]=\"checkReadOnly\"></textarea>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\" *ngIf=\"this.mainTab.stg_id =='4'\">\n        <label>ข้อมูลที่ต้องเตรียม</label>\n        <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"mainTab.rev_dtel\" [readonly]=\"checkEnquiry\"></textarea>\n      </div>\n      <div class=\"form-group\" *ngIf=\"this.mainTab.stg_id !='4'\">\n        <label>ข้อมูลที่ต้องเตรียม</label>\n        <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"mainTab.rev_dtel\" [readonly]=\"checkReadOnly\"></textarea>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/mainTab-verification-detail/mainTab-verification-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mainTabVerificationDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verification_detail_service__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_mainTab_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/mainTab.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/action-dialog/action-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blacklist_blacklist_share_center_blacklist_share_center_service__ = __webpack_require__("../../../../../src/app/main/blacklist/blacklist-share-center/blacklist-share-center-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var mainTabVerificationDetailComponent = /** @class */ (function () {
    function mainTabVerificationDetailComponent(verficationDetailService, datePipe, router, blShareCenterService) {
        this.verficationDetailService = verficationDetailService;
        this.datePipe = datePipe;
        this.router = router;
        this.blShareCenterService = blShareCenterService;
        this.mainTab = new __WEBPACK_IMPORTED_MODULE_2__model_mainTab_model__["a" /* MainTabModel */]();
    }
    mainTabVerificationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('onInitMain');
        this.mainTab = new __WEBPACK_IMPORTED_MODULE_2__model_mainTab_model__["a" /* MainTabModel */]();
        this.checkEnquiry = this.verficationDetailService.checkEnquiry;
        this.checkReadOnly = this.verficationDetailService.checkReadOnly;
        this.verficationDetailService.eventTabMain.subscribe(function (obj) {
            _this.mainTab = obj;
            console.log(_this.mainTab.stg_id);
            if (_this.mainTab.stg_id == '4') {
                _this.verficationDetailService.checkReadOnly = true;
            }
            _this.checkEnquiry = _this.verficationDetailService.checkEnquiry;
            _this.checkReadOnly = _this.verficationDetailService.checkReadOnly;
            _this.setNameSearchBL();
        });
        this.verficationDetailService.refreshData();
    };
    mainTabVerificationDetailComponent.prototype.onChangedate = function (indate) {
        var strDate = this.datePipe.transform(indate, 'dd/MM/yyyy');
        return strDate;
    };
    mainTabVerificationDetailComponent.prototype.setNameSearchBL = function () {
        if (this.mainTab.ent_cat === 'Individual') {
            //get surname
            this.nameSearchBL = this.mainTab.ent_nme.substring(String(this.mainTab.ent_nme).indexOf(" "));
        }
        else {
            this.nameSearchBL = this.mainTab.ent_nme;
        }
    };
    mainTabVerificationDetailComponent.prototype.onChangeDropDown = function (model, position) {
        for (var i = 0; i < model.length; i++) {
            if (i == position) {
                model[i].selected = 'Y';
            }
            else {
                model[i].selected = 'N';
            }
        }
    };
    mainTabVerificationDetailComponent.prototype.clickNcbDialog = function () {
        var _this = this;
        window.scrollTo(0, 0);
        setTimeout(function () {
            _this.ncbDialog.open();
        }, 200);
    };
    mainTabVerificationDetailComponent.prototype.clickBlDialog = function () {
        var _this = this;
        window.scrollTo(0, 0);
        setTimeout(function () {
            _this.blDialog.open();
        }, 200);
    };
    mainTabVerificationDetailComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogMainVerify'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], mainTabVerificationDetailComponent.prototype, "dialogMainVerify", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ncbDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], mainTabVerificationDetailComponent.prototype, "ncbDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('blDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_action_dialog_action_dialog_component__["a" /* ActionDialogComponent */])
    ], mainTabVerificationDetailComponent.prototype, "blDialog", void 0);
    mainTabVerificationDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mainTab-verification-detail',
            template: __webpack_require__("../../../../../src/app/main/scoring/verification-detail/mainTab-verification-detail/mainTab-verification-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/verification-detail/mainTab-verification-detail/mainTab-verification-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__verification_detail_service__["a" /* VerificationDetailService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_7__blacklist_blacklist_share_center_blacklist_share_center_service__["a" /* BlShareCenterService */]])
    ], mainTabVerificationDetailComponent);
    return mainTabVerificationDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/questiontabs-verification-detail/questiontabs-verification-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/questiontabs-verification-detail/questiontabs-verification-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-table-verification-detail [tabletData]=\"this.listQuestionTab1\" (tableTabEdit)=\"onEditTab($event)\"></app-table-verification-detail>\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/questiontabs-verification-detail/questiontabs-verification-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestiontabsVerificationDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verification_detail_service__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestiontabsVerificationDetailComponent = /** @class */ (function () {
    function QuestiontabsVerificationDetailComponent(verficationDetailService) {
        this.verficationDetailService = verficationDetailService;
        this.listQuestionTab1 = [];
    }
    QuestiontabsVerificationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.verficationDetailService.eventIdxTab.subscribe(function (obj) {
            //ส่งค่าอันเก่าไปแก้โดยการ emit การจะอ่านค่าใหม่มาว
            _this.listQuestionTab1 = _this.verficationDetailService.listQuestionTab[_this.verficationDetailService.idxTabCalScore].listTableData;
            if ((_this.listQuestionTab1 != null) && (_this.listQuestionTab1.length > 0)) {
                _this.verficationDetailService.saveTabDataOnShow(_this.listQuestionTab1);
            }
            _this.verficationDetailService.eventListQuestionTab.subscribe(function (objListTab) {
                _this.listQuestionTab1 = _this.verficationDetailService.listQuestionTab[_this.verficationDetailService.idxTabCalScore].listTableData;
            });
        });
        this.verficationDetailService.refreshData();
    };
    QuestiontabsVerificationDetailComponent.prototype.onEditTab = function (inListQuestionTab) {
        this.verficationDetailService.onEditQuestionTab(inListQuestionTab);
    };
    QuestiontabsVerificationDetailComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    QuestiontabsVerificationDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-questiontabs-verification-detail',
            template: __webpack_require__("../../../../../src/app/main/scoring/verification-detail/questiontabs-verification-detail/questiontabs-verification-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/verification-detail/questiontabs-verification-detail/questiontabs-verification-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__verification_detail_service__["a" /* VerificationDetailService */]])
    ], QuestiontabsVerificationDetailComponent);
    return QuestiontabsVerificationDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/scoring-enquiry/scoring-enquiry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui-datatable-data> tr> td {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  max-width: 150px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/scoring-enquiry/scoring-enquiry.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alert-dialog #dialogWarning></app-alert-dialog>\n\n<app-action-button-form\n  [title]=\"'Scoring Enquiry'\"\n></app-action-button-form>\n\n\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <label>Company</label>\n        <select class=\"form-control\"\n                (change)=\"onChangeCompany($event.target.value)\">\n          <option *ngFor=\"let list of listCompany; let i = index\"\n                  [value]=\"i\"\n                  [selected]=\"this.com_code === list.com_code\">{{list?.com_sub_name}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <label>Global Filter</label><i class=\"fa fa-search\" style=\"padding-left: 2px\"></i>\n        <input type=\"text\" #gb class=\"form-control\">\n        <!--<input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">-->\n\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"isLoading\" class=\"text-center\">\n    <app-action-lock-screen [spinner]=\"true\" [showCancel]=\"false\"></app-action-lock-screen>\n  </div>\n\n  <p-dataTable [value]=\"listScoringEnquiry\" [rows]=\"7\" [paginator]=\"true\"\n               [responsive]=\"true\"\n               (onRowDblclick)=\"onDbClickRowTable($event)\"\n               scrollable=\"true\" scrollHeight=\"300px\"\n               [globalFilter]=\"gb\" #dt>\n    <p-header>รายการค้นหา</p-header>\n    <!--<p-column field=\"source\" header=\"Decision\"></p-column>-->\n    <p-column field=\"run_no\" header=\"ลำดับ\" [style]=\"{'width':'7%'}\"></p-column>\n    <p-column field=\"ref_no\" header=\"เลขที่อ้างอิง\" [style]=\"{'width':'10%'}\"></p-column>\n    <p-column field=\"ent_typ\" header=\"ประเภท\" [style]=\"{'width':'7%'}\"></p-column>\n    <p-column field=\"ent_nme\" header=\"ชื่อ-นามสกุล\" [style]=\"{'width':'15%'}\"></p-column>\n    <p-column field=\"ver_emp_no\" header=\"เจ้าหน้าที่ตรวจสอบ\" [style]=\"{'width':'8%'}\"></p-column>\n    <p-column field=\"ent_cd\" header=\"รหัส\" [style]=\"{'width':'5%'}\"></p-column>\n    <p-column field=\"stg\" header=\"สถานะปัจจุบัน\" [style]=\"{'width':'8%'}\"></p-column>\n    <p-column field=\"scr_date\" header=\"วันที่ทำรายการ\" [style]=\"{'width':'8%'}\"></p-column>\n    <p-column field=\"ver_opn\" header=\"ผลตรวจสอบ\" [style]=\"{'width':'5%'}\"></p-column>\n    <p-column field=\"indv_jrstc\" header=\"บุคคล/นิติบุคคล\" [style]=\"{'width':'7%'}\"></p-column>\n    <p-column field=\"cancel_flg\" header=\"สถานะยกเลิก\" [style]=\"{'width':'5%'}\"></p-column>\n    <p-column field=\"mkt_snd_dt\" header=\"วันที MKT ส่งงาน\" [style]=\"{'width':'10%'}\"></p-column>\n  </p-dataTable>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/scoring-enquiry/scoring-enquiry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoringEnquiryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_scoring_enquiry_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/scoring-enquiry.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_detail_service__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_dropdown_company_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/dropdown-company.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_center_alert_dialog_alert_dialog_component__ = __webpack_require__("../../../../../src/app/shared/center/alert-dialog/alert-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScoringEnquiryComponent = /** @class */ (function () {
    function ScoringEnquiryComponent(router, route, verficationDetailService) {
        this.router = router;
        this.route = route;
        this.verficationDetailService = verficationDetailService;
        this.comCode = '';
        this.refNo = '';
        this.cusName = '';
        this.entCd = '';
        this.isLoading = true;
        this.getMaxPage = 'TRUE';
    }
    ScoringEnquiryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comCode = this.verficationDetailService.comCode;
        this.subscription = this.verficationDetailService.getGroupSearchScoringEnquiry().subscribe(function (data) {
            _this.listCompany = __WEBPACK_IMPORTED_MODULE_3__model_dropdown_company_model__["a" /* DropdownCompanyModel */].parse(data.DATA.LIST_COMPANY);
            _this.getlistScoringEnquiry();
        }, function (error) {
            console.log(error);
        });
    };
    ScoringEnquiryComponent.prototype.getlistScoringEnquiry = function () {
        var _this = this;
        this.isLoading = true;
        this.subscriptionSearch = this.verficationDetailService.getListScoringEnquiry(this.comCode, this.refNo, this.cusName, this.entCd).subscribe(function (data) {
            _this.listScoringEnquiry = __WEBPACK_IMPORTED_MODULE_1__model_scoring_enquiry_model__["a" /* ScrEnquiry */].parse(data.LIST_DATA);
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
            console.log(error);
        });
    };
    ScoringEnquiryComponent.prototype.onChangeCompany = function (idx) {
        this.comCode = this.listCompany[idx].com_code;
        this.getlistScoringEnquiry();
    };
    ScoringEnquiryComponent.prototype.onDbClickRowTable = function (event) {
        if (event.data.run_no) {
            this.verficationDetailService.checkReadOnly = true;
            this.verficationDetailService.checkEnquiry = true;
            this.router.navigate(['/scoring/verify-detail'], {
                relativeTo: this.route,
                queryParams: {
                    run_no: event.data.run_no, com_code: event.data.com_code, ref_no: event.data.ref_no,
                    ent_cd: event.data.ent_cd
                }
            });
        }
        else {
            this.dialogWarning.setTitle("");
            this.dialogWarning.setMessage("รายการนี้ไม่สามารถเรียกดูได้ เนื่องจากยังไม่ได้คีย์งานเข้าระบบ");
            this.dialogWarning.open();
        }
    };
    ScoringEnquiryComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
        if (this.subscription != null) {
            this.subscriptionSearch.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogWarning'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_center_alert_dialog_alert_dialog_component__["a" /* AlertDialogComponent */])
    ], ScoringEnquiryComponent.prototype, "dialogWarning", void 0);
    ScoringEnquiryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scoring-enquiry',
            template: __webpack_require__("../../../../../src/app/main/scoring/verification-detail/scoring-enquiry/scoring-enquiry.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/verification-detail/scoring-enquiry/scoring-enquiry.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__verification_detail_service__["a" /* VerificationDetailService */]])
    ], ScoringEnquiryComponent);
    return ScoringEnquiryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/scr-alert-jrst-fin/scr-alert-jrst-fin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/scr-alert-jrst-fin/scr-alert-jrst-fin.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-action-dialog [title]=\"' ข้อมูลทางการเงิน'\" #creditScoringHistoryDialog-->\n                   <!--[width]=\"900\"-->\n                   <!--&gt;-->\n  <!--<app-scr-credit-scoring-history></app-scr-credit-scoring-history>-->\n<!--</app-action-dialog>-->\n\n<!--<p-dialog (onHide)=\"hideDialog()\" [(visible)]=\"this.displayDialogScrJrstFin\"-->\n          <!--[width]=\"900\" [height]=\"1000\"-->\n          <!--[contentStyle]=\"{'overflow':'scroll'}\" baseZIndex=\"0\">-->\n\n  <!--<p-header>-->\n    <!--ข้อมูลทางการเงิน-->\n  <!--</p-header>-->\n<input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" [(ngModel)]=\"num_test\" >\n  <div class=\"row\">\n    <div class=\"col-4 text-right\">\n    </div>\n    <div class=\"col-2\">\n\n      <label>ย้อนหลัง 1 ปี</label>\n    </div>\n    <div class=\"col-2\">\n      <label>ย้อนหลัง 2 ปี</label>\n    </div>\n    <div class=\"col-2\">\n      <label>ย้อนหลัง 3 ปี</label>\n    </div>\n    <div class=\"col-2\">\n      <label>ย้อนหลัง 4 ปี</label>\n    </div>\n  </div>\n  <div class=\"row   \">\n    <div class=\"col-4 text-right\">\n      <label>ปี ค.ศ.</label>\n    </div>\n    <div class=\"col-2\">\n      <input type=\"text\"  class=\"form-control h-75 h-75\"\n             [(ngModel)]=\"this.listScrCorp[0].field_1\">\n    </div>\n    <div class=\"col-2\">\n      <input type=\"text\"  class=\"form-control h-75\"\n             [(ngModel)]=\"this.listScrCorp[0].field_2\">\n    </div>\n    <div class=\"col-2\">\n      <input type=\"text\"  class=\"form-control h-75\"\n             [(ngModel)]=\"this.listScrCorp[0].field_3\">\n    </div>\n    <div class=\"col-2\">\n      <input type=\"text\"  class=\"form-control h-75\"\n             [(ngModel)]=\"this.listScrCorp[0].field_4\">\n    </div>\n  </div>\n\n  <div class=\"row  \">\n    <div class=\"col-4 text-right\">\n      <label>รายได้</label>\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" [(ngModel)]=\"this.listScrCorp[1].field_1\" >\n\n      <!--<input type=\"text\" currencyMask [options]=\"{ prefix: ''}\" currencyMask [options]=\"{ prefix: ''}\"-->\n             <!--class=\"form-control h-75\" [(ngModel)]=\"this.listScrCorp[1].field_1\">-->\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[1].field_2\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[1].field_3\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[1].field_4\">\n    </div>\n  </div>\n\n  <div class=\"row  \">\n    <div class=\"col-4 text-right\">\n      <label>ต้นทุนขาย</label>\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[2].field_1\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[2].field_2\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[2].field_3\">\n    </div>\n    <div class=\"col-2\">\n    </div>\n  </div>\n\n  <div class=\"row  \">\n    <div class=\"col-4 text-right\">\n      <label>สินทรัพย์หมุนเวียน</label>\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[3].field_1\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[3].field_2\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[3].field_3\">\n    </div>\n    <div class=\"col-2\">\n    </div>\n  </div>\n\n  <div class=\"row  \">\n    <div class=\"col-4 text-right\">\n      <label>หนี้สินหมุนเวียน</label>\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[4].field_1\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[4].field_2\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[4].field_3\">\n    </div>\n    <div class=\"col-2\">\n    </div>\n  </div>\n\n  <div class=\"row  \">\n    <div class=\"col-4 text-right\">\n      <label>สินทรัพย์รวม</label>\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[5].field_1\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[5].field_2\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[5].field_3\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[5].field_4\">\n    </div>\n  </div>\n\n  <div class=\"row  \">\n    <div class=\"col-4 text-right\">\n      <label>หนี้สินรวม</label>\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[6].field_1\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[6].field_2\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[6].field_3\">\n    </div>\n    <div class=\"col-2\">\n    </div>\n  </div>\n\n\n  <div class=\"row  \">\n    <div class=\"col-4 text-right\">\n      <label>กำไรขั้นต้น</label>\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n             [(ngModel)]=\"this.listScrCorp[7].field_1\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n             [(ngModel)]=\"this.listScrCorp[7].field_2\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n             [(ngModel)]=\"this.listScrCorp[7].field_3\">\n    </div>\n    <div class=\"col-2\">\n    </div>\n  </div>\n\n  <div class=\"row  \">\n    <div class=\"col-4 text-right\">\n      <label>กำไร/ขาดทุนสุทธิ</label>\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[8].field_1\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[8].field_2\">\n    </div>\n    <div class=\"col-2\">\n      <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\"\n             [(ngModel)]=\"this.listScrCorp[8].field_3\">\n    </div>\n    <div class=\"col-2\">\n    </div>\n  </div>\n\n  <div style=\"background-color: rgba(203,197,154,0.25)\">\n    <div class=\"row  \">\n      <div class=\"col-4 text-right\">\n        <label>การเติบโตรายได้</label>\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[1].field_1\">\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[1].field_2\">\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[1].field_3\">\n      </div>\n      <div class=\"col-2\">\n      </div>\n    </div>\n\n    <div class=\"row  \">\n      <div class=\"col-4 text-right\">\n        <label>สภาพคล่องทางการเงิน</label>\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[2].field_1\">\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[2].field_2\">\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[2].field_3\">\n      </div>\n      <div class=\"col-2\">\n      </div>\n    </div>\n\n    <div class=\"row  \">\n      <div class=\"col-4 text-right\">\n        <label>ประสิทธิภาพในการใช้ทรัพย์สิน</label>\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[3].field_1\">\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[3].field_2\">\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[3].field_3\">\n      </div>\n      <div class=\"col-2\">\n      </div>\n    </div>\n\n    <div class=\"row  \">\n      <div class=\"col-4 text-right\">\n        <label>ความสามารถในการก่อหนี้</label>\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[4].field_1\">\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[4].field_2\">\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[4].field_3\">\n      </div>\n      <div class=\"col-2\">\n      </div>\n    </div>\n\n    <div class=\"row  \">\n      <div class=\"col-4 text-right\">\n        <label>ความสามารถในการทำกำไร</label>\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[5].field_1\">\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[5].field_2\">\n      </div>\n      <div class=\"col-2\">\n        <input inputFormatNumber [decimalPlace]=\"2\"  class=\"form-control input-small\" readonly\n               [(ngModel)]=\"this.listScrCorpCalculate[5].field_3\">\n      </div>\n      <div class=\"col-2\">\n      </div>\n    </div>\n  </div>\n<div class=\"d-flex justify-content-start\">\n  <div class=\"ml-auto\">\n      <button type=\"button\" class=\"btn-nav-saveisa\" style=\"width: auto\" (click)=\"calCulateScrCorp()\">\n      <i class=\"fa fa-save\"></i> CALCULATE\n      </button>\n      <button type=\"button\" class=\"btn-nav-cancelisa\" style=\"width: auto\" (click)=\"transferScrCorp()\" *ngIf=\"!checkReadOnly\">\n      <i class=\"fa fa-reply-all\"></i> TRANSFER\n      </button>\n  </div>\n</div>\n\n\n  <!--<p-footer>-->\n    <!--<button type=\"button\" class=\"btn-nav-saveisa\" style=\"width: auto\" (click)=\"calCulateScrCorp()\">-->\n      <!--<i class=\"fa fa-save\"></i> CALCULATE-->\n    <!--</button>-->\n    <!--<button type=\"button\" class=\"btn-nav-cancelisa\" style=\"width: auto\" (click)=\"transferScrCorp()\" *ngIf=\"!checkReadOnly\">-->\n      <!--<i class=\"fa fa-reply-all\"></i> TRANSFER-->\n    <!--</button>-->\n  <!--</p-footer>-->\n<!--</p-dialog>-->\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/scr-alert-jrst-fin/scr-alert-jrst-fin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrAlertJrstFinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_scrcorp_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/scrcorp.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_detail_service__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrAlertJrstFinComponent = /** @class */ (function () {
    function ScrAlertJrstFinComponent(verficationDetailService) {
        this.verficationDetailService = verficationDetailService;
        this.listScrCorp = [];
        this.listScrCorpCalculate = [];
        this.alertDialogScrJrstFin = false;
        this.displayDialogScrJrstFin = false;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.num_test = '0';
    }
    ScrAlertJrstFinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkReadOnly = this.verficationDetailService.checkReadOnly;
        for (var i = 0; i < 9; i++) {
            this.listScrCorp.push(new __WEBPACK_IMPORTED_MODULE_1__model_scrcorp_model__["a" /* ScrCorp */]());
        }
        var j = 17;
        for (var i = 0; i < 6; i++) {
            this.listScrCorpCalculate.push(new __WEBPACK_IMPORTED_MODULE_1__model_scrcorp_model__["a" /* ScrCorp */]("B0" + j, '0.00', '0.00', '0.00', '0.00'));
            j = j + 4;
        }
        this.listScrCorp = JSON.parse(JSON.stringify(this.verficationDetailService.tabMain.list_scr_corp));
        this.subscription = this.verficationDetailService.eventTabMain.subscribe(function (obj) {
            _this.listScrCorp = JSON.parse(JSON.stringify(obj.list_scr_corp));
        });
        this.verficationDetailService.eventTabMain.subscribe(function (obj) {
        });
    };
    ScrAlertJrstFinComponent.prototype.calCulateScrCorp = function () {
        //ปั ค.ศ.
        this.listScrCorpCalculate[0].field_1 = this.listScrCorp[0].field_1;
        this.listScrCorpCalculate[0].field_2 = this.listScrCorp[0].field_2;
        this.listScrCorpCalculate[0].field_3 = this.listScrCorp[0].field_3;
        //การเติบโตรายได้(ปีที่n) = (รายได้(ปีที่n)-รายได้(ปีที่n+1))/รายได้(ปีที่n+1)*100
        this.listScrCorpCalculate[1].field_1 = String(Number((Number(this.listScrCorp[1].field_1) - Number(this.listScrCorp[1].field_2)) / Number(this.listScrCorp[1].field_2) * 100).toFixed(2));
        this.listScrCorpCalculate[1].field_2 = String(Number((Number(this.listScrCorp[1].field_2) - Number(this.listScrCorp[1].field_3)) / Number(this.listScrCorp[1].field_3) * 100).toFixed(2));
        this.listScrCorpCalculate[1].field_3 = String(Number((Number(this.listScrCorp[1].field_3) - Number(this.listScrCorp[1].field_4)) / Number(this.listScrCorp[1].field_4) * 100).toFixed(2));
        //สภาพคล่องทางการเงิน(ปีที่n) = สินทรัพย์(ปีที่n)/หนี้สิน(ปีที่n)
        this.listScrCorpCalculate[2].field_1 = String(Number(Number(this.listScrCorp[3].field_1) / Number(this.listScrCorp[4].field_1)).toFixed(2));
        this.listScrCorpCalculate[2].field_2 = String(Number(Number(this.listScrCorp[3].field_2) / Number(this.listScrCorp[4].field_2)).toFixed(2));
        this.listScrCorpCalculate[2].field_3 = String(Number(Number(this.listScrCorp[3].field_3) / Number(this.listScrCorp[4].field_3)).toFixed(2));
        //ประสิทธิภาพการใช้ทรัย์สิน(ปีที่n)=  รายได้(ปีที่n)/((สินทรัพย์รวม(ปีที่n)+สินทรัพย์รวม(ปีที่n+1))/2)
        this.listScrCorpCalculate[3].field_1 = String(Number(Number(this.listScrCorp[1].field_1) / (((Number(this.listScrCorp[5].field_1)) + (Number(this.listScrCorp[5].field_2))) / 2)).toFixed(2));
        this.listScrCorpCalculate[3].field_2 = String(Number(Number(this.listScrCorp[1].field_2) / (((Number(this.listScrCorp[5].field_2)) + (Number(this.listScrCorp[5].field_3))) / 2)).toFixed(2));
        this.listScrCorpCalculate[3].field_3 = String(Number(Number(this.listScrCorp[1].field_3) / (((Number(this.listScrCorp[5].field_3)) + (Number(this.listScrCorp[5].field_4))) / 2)).toFixed(2));
        //ความสามารถในการก่อหนี้(ปีที่n)= หนี้สินรวม(ปีที่n)/สินทรัพย์รวม(ปีที่n)
        this.listScrCorpCalculate[4].field_1 = String(Number(Number(this.listScrCorp[6].field_1) / Number(this.listScrCorp[5].field_1)).toFixed(2));
        this.listScrCorpCalculate[4].field_2 = String(Number(Number(this.listScrCorp[6].field_2) / Number(this.listScrCorp[5].field_2)).toFixed(2));
        this.listScrCorpCalculate[4].field_3 = String(Number(Number(this.listScrCorp[6].field_3) / Number(this.listScrCorp[5].field_3)).toFixed(2));
        //กำไรขั้นต้น= รายได้(ปีที่n)-ต้นทุนขาย(ปีที่n)
        this.listScrCorp[7].field_1 = String(Number(Number(this.listScrCorp[1].field_1) - Number(this.listScrCorp[2].field_1)).toFixed(2));
        this.listScrCorp[7].field_2 = String(Number(Number(this.listScrCorp[1].field_2) - Number(this.listScrCorp[2].field_2)).toFixed(2));
        this.listScrCorp[7].field_3 = String(Number(Number(this.listScrCorp[1].field_3) - Number(this.listScrCorp[2].field_3)).toFixed(2));
        //ความสามารถในการทำกำไร(ปีที่n)=กำไรขั้นต้น(ปีที่n)/รายได้(ปีที่n)*100
        this.listScrCorpCalculate[5].field_1 = String(Number(Number(this.listScrCorp[7].field_1) / Number(this.listScrCorp[1].field_1) * 100).toFixed(2));
        this.listScrCorpCalculate[5].field_2 = String(Number(Number(this.listScrCorp[7].field_2) / Number(this.listScrCorp[1].field_2) * 100).toFixed(2));
        this.listScrCorpCalculate[5].field_3 = String(Number(Number(this.listScrCorp[7].field_3) / Number(this.listScrCorp[1].field_3) * 100).toFixed(2));
    };
    ScrAlertJrstFinComponent.prototype.transferScrCorp = function () {
        this.verficationDetailService.tranferDataScrCorp(this.listScrCorp, this.listScrCorpCalculate);
        this.verficationDetailService.copyQuestionTab();
        this.hideDialog();
    };
    ScrAlertJrstFinComponent.prototype.open = function () {
        this.alertDialogScrJrstFin = true;
    };
    ScrAlertJrstFinComponent.prototype.hideDialog = function () {
        this.onClose.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("displayDialogScrJrstFin"),
        __metadata("design:type", Boolean)
    ], ScrAlertJrstFinComponent.prototype, "displayDialogScrJrstFin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onClose"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ScrAlertJrstFinComponent.prototype, "onClose", void 0);
    ScrAlertJrstFinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scr-alert-jrst-fin',
            template: __webpack_require__("../../../../../src/app/main/scoring/verification-detail/scr-alert-jrst-fin/scr-alert-jrst-fin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/verification-detail/scr-alert-jrst-fin/scr-alert-jrst-fin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__verification_detail_service__["a" /* VerificationDetailService */]])
    ], ScrAlertJrstFinComponent);
    return ScrAlertJrstFinComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/scr-credit-scoring-history/scr-credit-scoring-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/scr-credit-scoring-history/scr-credit-scoring-history.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataTable [value]=\"dataTable\" selectionMode={{selectMode}} scrollable=\"true\" scrollHeight=\"340px\"\n             [(selection)]=\"selectedData\" (onRowSelect)=\"onRowSelect($event)\" #table>\n  <p-column field=\"runNo\" header=\"Running No\"></p-column>\n  <p-column field=\"entTyp\" header=\"Entity Type\"></p-column>\n  <p-column field=\"entCd\" header=\"Entity No\"></p-column>\n  <p-column field=\"refNo\" header=\"เลขที่อ้างอิง\"></p-column>\n  <p-column field=\"scrDt\" header=\"วันที่ทำ\"></p-column>\n  <p-column field=\"scr\" header=\"เกรด\"></p-column>\n  <!--<p-column field=\"indv_jrstc\" header=\"col.header\"></p-column>-->\n  <p-column field=\"mobileSource\" header=\"ทำเพื่อออกเกรดเบื้องต้น\"></p-column>\n</p-dataTable>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/scr-credit-scoring-history/scr-credit-scoring-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrCreditScoringHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verification_detail_service__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_creditScoringHistory_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/creditScoringHistory.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrCreditScoringHistoryComponent = /** @class */ (function () {
    function ScrCreditScoringHistoryComponent(verificationDetailService) {
        this.verificationDetailService = verificationDetailService;
        this.dataTable = [];
        this.selectedData = new __WEBPACK_IMPORTED_MODULE_2__model_creditScoringHistory_model__["a" /* CreditScoringHistoryModel */]();
    }
    ScrCreditScoringHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entType = this.verificationDetailService.tabMain.ent_typ;
        this.entCd = this.verificationDetailService.tabMain.ent_cd;
        this.comCode = this.verificationDetailService.tabMain.com_code;
        if (this.verificationDetailService.checkReadOnly == true) {
            this.selectMode = "";
        }
        else {
            this.selectMode = "single";
        }
        this.verificationDetailService.getCreditScoringHistory(this.entType, this.entCd, this.comCode).subscribe(function (data) {
            if (data.CODE == "200") {
                _this.dataTable = __WEBPACK_IMPORTED_MODULE_2__model_creditScoringHistory_model__["a" /* CreditScoringHistoryModel */].parse(data.LIST_DATA);
            }
        });
    };
    ScrCreditScoringHistoryComponent.prototype.onRowSelect = function (event) {
        this.verificationDetailService.setCreditScoringHistory(this.selectedData);
    };
    ScrCreditScoringHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scr-credit-scoring-history',
            template: __webpack_require__("../../../../../src/app/main/scoring/verification-detail/scr-credit-scoring-history/scr-credit-scoring-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/verification-detail/scr-credit-scoring-history/scr-credit-scoring-history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__verification_detail_service__["a" /* VerificationDetailService */]])
    ], ScrCreditScoringHistoryComponent);
    return ScrCreditScoringHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/table-verification-detail/table-verification-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trOdd {\r\n  background: rgba(150, 171, 189, 0.1);\r\n}\r\n.trEven {\r\n  background:#FFFFFF;\r\n}\r\n/*\r\ntable {\r\ntable-layout: fixed;\r\nword-wrap: break-word;\r\n}\r\n\r\ntable th, table td {\r\noverflow: hidden;\r\n}\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/table-verification-detail/table-verification-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataTable [value]=\"listTable\" [responsive]=\"true\" [scrollable]=\"true\" scrollHeight=\"360px\">\n  <p-column field=\"topicCd\" header=\"#\" [style]=\"{'width':'10%'}\"></p-column>\n  <p-column field=\"topicNme\" header=\"คำถาม\" [style]=\"{'width':'30%'}\"></p-column>\n  <p-column header=\"คำตอบ\" [editable]=\"true\" [style]=\"{'width':'20%'}\">\n    <ng-template let-rowAns=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n      <div *ngIf=\"rowAns.lookUp ==='Y';\">\n        <select class=\"form-control h-25\" (change)=\"onChangeSelectedAns(ri,$event.target.value)\"\n                [disabled]=\"checkReadOnly\">\n          <option *ngFor=\"let items of rowAns.listAnswer;let i=index\" [selected]=\"items?.selected == 'Y'\" [value]=\"i\">\n            {{items.answer}}\n          </option>\n        </select>\n      </div>\n      <!--grand point and total point does not show anser-->\n      <div *ngIf=\"rowAns.lookUp ==='N';\">\n        <div *ngIf=\"rowAns.type_for_cal != 'G' && rowAns.type_for_cal != 'GG'\n                    && rowAns.type_for_cal != 'P' &&rowAns.type_for_cal != 'GP'\">\n          <textarea class=\"form-control\" rows=\"1\" (blur)=\"onChangeSelectedAnsRange(ri,$event.target.value)\"\n                    [(ngModel)]=\"rowAns.answer\" [readOnly]=\"checkReadOnly\"></textarea>\n        </div>\n      </div>\n    </ng-template>\n  </p-column>\n  <p-column header=\"คะแนน\" [style]=\"{'width':'10%'}\">\n    <ng-template let-rowAns=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n      <div *ngIf=\"rowAns.lookUp ==='Y';\">\n        <div *ngFor=\"let items of rowAns.listAnswer\">\n          <div *ngIf=\"items?.selected == 'Y'\">{{items?.scr}}</div>\n        </div>\n      </div>\n      <div *ngIf=\"rowAns.lookUp ==='N';\">\n        <!--all case -->\n        <div *ngIf=\"rowAns.type_for_cal != 'P' && rowAns.type_for_cal != 'GP'\">\n          <div *ngFor=\"let items of rowAns.listAnswerRange\">\n            <div *ngIf=\"items?.selected == 'Y'\">{{items?.scr}}</div>\n          </div>\n        </div>\n        <!--Grand Point -->\n        <div *ngIf=\"rowAns.type_for_cal == 'P' || rowAns.type_for_cal == 'GP'\">\n          <div>{{rowAns?.scr}}</div>\n        </div>\n      </div>\n    </ng-template>\n  </p-column>\n  <p-column header=\"คำอธิบาย\" [editable]=\"true\" [style]=\"{'width':'30%'}\">\n    <ng-template let-rowAns=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n      <textarea class=\"form-control\" rows=\"1\" [(ngModel)]=\"rowAns.detail\" (blur)=\"onEditTab()\"\n                [readOnly]=\"checkReadOnly\"></textarea>\n    </ng-template>\n  </p-column>\n\n</p-dataTable>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/table-verification-detail/table-verification-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableVerificationDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verification_detail_service__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableVerificationDetailComponent = /** @class */ (function () {
    function TableVerificationDetailComponent(router, verficationDetailService) {
        this.router = router;
        this.verficationDetailService = verficationDetailService;
        this.listTableOriginal = [];
        this.listTable = [];
        this.tableTabEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TableVerificationDetailComponent.prototype.ngOnInit = function () {
        this.checkReadOnly = this.verficationDetailService.checkReadOnly;
    };
    TableVerificationDetailComponent.prototype.onChangeSelectedAns = function (position_row, position) {
        var _this = this;
        if (this.listTable[position_row].relateToTopicCd) {
            var tempSubIdx_1 = this.listTable[position_row].listAnswer[position].sub_id2;
            // find หาค่า TopicCd ที่ topic cd = relative_to_topic_cd
            var relativeIdx = this.listTable.findIndex(function (listAns) {
                return listAns.topicCd === _this.listTable[position_row].relateToTopicCd;
            });
            this.listTableOriginal = this.verficationDetailService.listQuestionTabOriginal[this.verficationDetailService.idxTabCalScore].listTableData;
            var ListAnsFiltered = this.listTableOriginal[relativeIdx].listAnswer.filter(function (ListA) { return ListA.sub_id == tempSubIdx_1; });
            var tempFilter = [];
            this.listTable[relativeIdx].listAnswer = tempFilter.concat(ListAnsFiltered);
        }
        var min, max, scr;
        for (var i = 0; i < this.listTable[position_row].listAnswer.length; i++) {
            if (i == position) {
                this.listTable[position_row].listAnswer[i].selected = 'Y';
            }
            else {
                this.listTable[position_row].listAnswer[i].selected = 'N';
            }
        }
        this.changeScore();
    };
    TableVerificationDetailComponent.prototype.onChangeSelectedAnsRange = function (position_row, pAnswer) {
        this.listTable[position_row].answer = pAnswer;
        for (var i = 0; i < this.listTable[position_row].listAnswerRange.length; i++) {
            if ((Number(pAnswer) >= Number(this.listTable[position_row].listAnswerRange[i].min))
                && (Number(pAnswer) <= Number(this.listTable[position_row].listAnswerRange[i].max))) {
                this.listTable[position_row].listAnswerRange[i].selected = 'Y';
            }
            else {
                this.listTable[position_row].listAnswerRange[i].selected = 'N';
            }
        }
        this.changeScore();
    };
    TableVerificationDetailComponent.prototype.onEditTab = function () {
        this.tableTabEdit.emit(this.listTable);
    };
    TableVerificationDetailComponent.prototype.changeScore = function () {
        this.onEditTab();
        this.verficationDetailService.calScoringAllPage();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("tabletData"),
        __metadata("design:type", Array)
    ], TableVerificationDetailComponent.prototype, "listTable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("tableTabEdit"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TableVerificationDetailComponent.prototype, "tableTabEdit", void 0);
    TableVerificationDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-verification-detail',
            template: __webpack_require__("../../../../../src/app/main/scoring/verification-detail/table-verification-detail/table-verification-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/verification-detail/table-verification-detail/table-verification-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__verification_detail_service__["a" /* VerificationDetailService */]])
    ], TableVerificationDetailComponent);
    return TableVerificationDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/todo-verifier/todo-verifier.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trHeader {\r\n  background: #cdedfe;\r\n}\r\n/*table {*/\r\n/*table-layout: fixed;*/\r\n/*word-wrap: break-word;*/\r\n/*}*/\r\n/*table th, table td {*/\r\n/*overflow: hidden;*/\r\n/*}*/\r\n/*table {*/\r\n/*table-layout: auto;*/\r\n/*border-collapse: collapse;*/\r\n/*width: 100%;*/\r\n/*}*/\r\n/*table td {*/\r\n/*border: 1px solid #ccc;*/\r\n/*}*/\r\n/*table .absorbing-column {*/\r\n/*width: 100%;*/\r\n/*}*/\r\ntable{\r\n  width:100%;\r\n}\r\ntable td{\r\n  white-space: nowrap;\r\n}\r\ntable td:last-child{\r\n  width:100%;\r\n}\r\ntable th {\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/todo-verifier/todo-verifier.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label>stg id </label>\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"stgId\" (blur)=\"chageStg()\">\n</div>\n<p-dataTable [value]=\"todoVerifier\" rowGroupMode=\"subheader\" groupField=\"ver_emp_nme\" expandableRowGroups=\"true\"\n             [sortableRowGroup]=\"false\" (onRowClick)=\"setSelectedTodo($event)\">\n  <p-header>Todo : Verfier</p-header>\n  <ng-template pTemplate=\"rowgroupheader\" let-rowData>{{rowData['ver_emp_nme']}} จำนวนงาน ({{rowData['cnt_refno']}})\n  </ng-template>\n  <!--  <p-column field=\"ver_emp_nme\" header=\"Verifier Owner\"></p-column>\n    <p-column field=\"\" header=\"จำนcnt_refnoวนงาน\"></p-column>-->\n  <p-column field=\"com_code\" header=\"บริษัท\"></p-column>\n  <p-column field=\"ref_no\" header=\"เลขที่อ้างอิง\"></p-column>\n  <p-column field=\"ent_typ\" header=\"ประเภท Entity\"></p-column>\n  <p-column field=\"ent_cd\" header=\"รหัส Entity\"></p-column>\n  <p-column field=\"ent_cat\" header=\"บุคคล/นิติบุคคล\"></p-column>\n  <p-column field=\"*\" header=\"*\"></p-column>\n  <p-column field=\"name\" header=\"ชื่อ-นามสกุล\"></p-column>\n  <p-column field=\"start_scr_dt\" header=\"เริ่มทำ scoring\"></p-column>\n  <p-column field=\"wait_mthd\" header=\"Wait\"></p-column>\n  <p-column field=\"run_no\" header=\"Runnning\"></p-column>\n\n  <!--    <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\n        <span>{{car[col.field] | currency:'USD':true:'.0-0'}}</span>\n      </ng-template>\n    </p-column>-->\n  <!--<ng-template pTemplate=\"rowgroupfooter\" let-car>-->\n  <!--<td colspan=\"3\" style=\"text-align:right\">Total Price</td>-->\n  <!--<td>{{calculateGroupTotal(car['brand']) | currency:'USD':true:'.0-0' }}</td>-->\n  <!--</ng-template>-->\n</p-dataTable>\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/todo-verifier/todo-verifier.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoVerifierComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verification_detail_service__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_todo_verifier_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/todo-verifier.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoVerifierComponent = /** @class */ (function () {
    function TodoVerifierComponent(router, route, verficationDetailService) {
        this.router = router;
        this.route = route;
        this.verficationDetailService = verficationDetailService;
    }
    TodoVerifierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.verficationDetailService.stgId = '1';
        this.stgId = this.verficationDetailService.stgId;
        this.subscription = this.verficationDetailService.getToDoVerifier().subscribe(function (data) {
            _this.todoVerifier = __WEBPACK_IMPORTED_MODULE_3__model_todo_verifier_model__["a" /* ToDoVerifierModel */].parse(data.LIST_DATA);
            console.log(_this.todoVerifier);
        }, function (error) {
            console.log(error);
        });
    };
    TodoVerifierComponent.prototype.setSelectedTodo = function (event) {
        this.verficationDetailService.checkReadOnly = false;
        this.router.navigate(['/scoring/verify-detail'], {
            relativeTo: this.route,
            queryParams: {
                run_no: event.data.run_no, com_code: event.data.com_code, ref_no: event.data.ref_no,
                ent_cd: event.data.ent_cd
            }
        });
    };
    TodoVerifierComponent.prototype.chageStg = function () {
        var _this = this;
        console.log(this.stgId);
        this.verficationDetailService.stgId = this.stgId;
        console.log(this.verficationDetailService.stgId);
        this.subscription = this.verficationDetailService.getToDoVerifier().subscribe(function (data) {
            _this.todoVerifier = __WEBPACK_IMPORTED_MODULE_3__model_todo_verifier_model__["a" /* ToDoVerifierModel */].parse(data.LIST_DATA);
            console.log(_this.todoVerifier);
        }, function (error) {
            console.log(error);
        });
    };
    TodoVerifierComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    TodoVerifierComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo-verifier',
            template: __webpack_require__("../../../../../src/app/main/scoring/verification-detail/todo-verifier/todo-verifier.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/verification-detail/todo-verifier/todo-verifier.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__verification_detail_service__["a" /* VerificationDetailService */]])
    ], TodoVerifierComponent);
    return TodoVerifierComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/verification-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/verification-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" class=\"text-center\">\n  <app-action-lock-screen [spinner]=\"true\" [showCancel]=\"false\"></app-action-lock-screen>\n</div>\n\n<div *ngIf=\"isLoading == false\">\n  <div>\n    <app-header-verification-detail (onTabChange)=\"navigateTab($event)\"\n                                    (onTabNameChange)=\"onChangeTab($event)\"></app-header-verification-detail>\n  </div>\n  <!--<router-outlet></router-outlet>-->\n  <div *ngIf=\"currentTabName == 'main'\">\n    <app-mainTab-verification-detail></app-mainTab-verification-detail>\n  </div>\n  <div *ngIf=\"currentTabName == 'question'\">\n    <app-questiontabs-verification-detail></app-questiontabs-verification-detail>\n  </div>\n  <div *ngIf=\"currentTabName == 'img'\">\n    <app-action-show-image-gallery #actionShowImageGalleryComponent [modelImage]=\"modelImage\"></app-action-show-image-gallery>\n  </div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/verification-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verification_detail_service__ = __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_mainTab_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/mainTab.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_dropdown_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/dropdown.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_center_action_show_image_gallery_action_show_images_gallery_services__ = __webpack_require__("../../../../../src/app/shared/center/action-show-image-gallery/action-show-images-gallery.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_center_action_show_image_gallery_model_modelImage__ = __webpack_require__("../../../../../src/app/shared/center/action-show-image-gallery/model/modelImage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VerificationDetailComponent = /** @class */ (function () {
    function VerificationDetailComponent(route, router, verficationDetailService, imageServices, service) {
        this.route = route;
        this.router = router;
        this.verficationDetailService = verficationDetailService;
        this.imageServices = imageServices;
        this.service = service;
        this.listWaitMthd = [];
        this.listVerMthd = [];
        this.listAnswer = [];
        this.listQuestionTab = [];
        this.currentTabName = 'main';
        this.isLoading = true;
        this.modelImage = [];
        this.checkSelectCreditScoring = false;
    }
    VerificationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionParam = this.route.queryParams.subscribe(function (param) {
            _this.run_no = param['run_no'];
            _this.com_code = param['com_code'];
            _this.ref_no = param['ref_no'];
            _this.ent_cd = param['ent_cd'];
            _this.stg_id = param['stg_id'];
            _this.verficationDetailService.stgId = _this.stg_id;
            // alert(this.run_no);
            _this.getDataScoring();
        });
        this.verficationDetailService.emitClickCrScrHis.subscribe(function (click) {
            _this.checkSelectCreditScoring = click;
            if (_this.checkSelectCreditScoring == true) {
                _this.run_no = _this.verficationDetailService.creditScoringHistory.runNo;
                // use same comCode //
                _this.ref_no = _this.verficationDetailService.creditScoringHistory.refNo;
                _this.ent_cd = _this.verficationDetailService.creditScoringHistory.entCd;
                _this.getDataScoring();
            }
        });
    };
    VerificationDetailComponent.prototype.getDataScoring = function () {
        var _this = this;
        this.mainTab = new __WEBPACK_IMPORTED_MODULE_3__model_mainTab_model__["a" /* MainTabModel */]();
        this.isLoading = true;
        this.subscription = this.verficationDetailService.getDataScoring("device", "scr", this.run_no, this.com_code, this.ent_cd, this.ref_no).subscribe(function (data) {
            // console.log(data);
            _this.mainTab = __WEBPACK_IMPORTED_MODULE_3__model_mainTab_model__["a" /* MainTabModel */].parse(data.DATA);
            _this.verficationDetailService.setMainTab(_this.mainTab);
            _this.listWaitMthd = __WEBPACK_IMPORTED_MODULE_4__model_dropdown_model__["a" /* DropdownModel */].parse(data.DATA.LIST_WAIT_METHD);
            _this.listVerMthd = __WEBPACK_IMPORTED_MODULE_4__model_dropdown_model__["a" /* DropdownModel */].parse(data.DATA.ver_mthd);
            //-------satrt mark -----//
            _this.listQuestionTab = JSON.parse(JSON.stringify(_this.mainTab.listTabScrSubj));
            _this.verficationDetailService.setSubj(_this.listQuestionTab);
            //ต้อง cal ก่อน 1 ครั้ง
            _this.verficationDetailService.calScoringAllPage();
            //-------end mark -----//
            // Mos //
            if (_this.checkSelectCreditScoring == true) {
                _this.verficationDetailService.onEditFromCreditScoringHist();
                _this.checkSelectCreditScoring = false;
                _this.verficationDetailService.creditScoringHistory = null;
            }
            _this.isLoading = false;
        }, function (error) {
            console.log(error);
            _this.isLoading = false;
        });
    };
    VerificationDetailComponent.prototype.getImage = function () {
        var _this = this;
        var url = this.service.url;
        this.subscriptionImage = this.imageServices.getImage(url + this.service.img_api + "/ask/image/GetScoringImage?device=web&userlogin=" + this.verficationDetailService.userName + '&comcode=' + this.mainTab.com_code + '&entcode=' + this.mainTab.ent_cd + '&refno=' + this.mainTab.ref_no).subscribe(
        // this.subscriptionImage = this.imageServices.getImage('http://javadev01:8095/IMG_WebServices/ask/image/GetNCBImage?device=web&userlogin=CHOKCHAI.NI&comcode=ASKH&entcode=694057&runno=196386').subscribe(
        function (data) {
            //console.log(data.LIST_DATA);
            _this.modelImage = __WEBPACK_IMPORTED_MODULE_6__shared_center_action_show_image_gallery_model_modelImage__["a" /* ModelImage */].parse(data.LIST_DATA);
            _this.imageServices.setModelImage(_this.modelImage);
        });
    };
    VerificationDetailComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionParam != null) {
            this.subscriptionParam.unsubscribe();
        }
        if (this.subscriptionImage != null) {
            this.subscriptionImage.unsubscribe();
        }
    };
    VerificationDetailComponent.prototype.onChangeTab = function (tabName) {
        this.currentTabName = tabName;
        if (this.currentTabName == 'img') {
            this.getImage();
        }
    };
    VerificationDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-verification-detail',
            template: __webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/scoring/verification-detail/verification-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__verification_detail_service__["a" /* VerificationDetailService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_center_action_show_image_gallery_action_show_images_gallery_services__["a" /* ImageServices */],
            __WEBPACK_IMPORTED_MODULE_7__shared_config_service_endpoint__["a" /* ServiceEndpoint */]])
    ], VerificationDetailComponent);
    return VerificationDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/scoring/verification-detail/verification-detail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationDetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_rowtable_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/rowtable.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config_service_endpoint__ = __webpack_require__("../../../../../src/app/shared/config/service-endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_user_storage_service__ = __webpack_require__("../../../../../src/app/shared/user/user.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_creditScoringHistory_model__ = __webpack_require__("../../../../../src/app/main/scoring/model/creditScoringHistory.model.ts");
/**
 * Created by piradee.bu on 21/08/2560.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VerificationDetailService = /** @class */ (function () {
    function VerificationDetailService(http, service, userStorage) {
        this.http = http;
        this.service = service;
        this.userStorage = userStorage;
        this.eventListQuestionTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventTabMain = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventIdxTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventResultGrade = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventCopyQuestionTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventIsLoading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.listQuestionTabOriginal = [];
        this.listQuestionTab = [];
        this.listQuestionTab1 = [];
        this.idxTabCalScore = 0;
        this.resultGrade = '';
        this.tempResultGrade = '';
        this.tempResultPointGrade = 0;
        this.userName = '';
        this.code = '';
        this.comCode = '';
        this.checkReadOnly = false;
        this.checkEnquiry = false;
        // Mos //
        // Mos //
        this.creditScoringHistory = new __WEBPACK_IMPORTED_MODULE_6__model_creditScoringHistory_model__["a" /* CreditScoringHistoryModel */]();
        this.emitClickCrScrHis = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userName = this.userStorage.getUserName();
        this.code = this.userStorage.getCode();
        this.comCode = this.userStorage.getComCode();
    }
    VerificationDetailService.prototype.getToDoVerifier = function () {
        // const url = this.service.url + this.service.mks_tps +`/ask/scoring/ScoringGetToDo?device=test&user=CHOKCHAI.NI&comcode=ASKH&stgid=2`;
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/ScoringGetToDo?device=" + "web" + "&user=" + this.userName + "&comcode=" + this.comCode + "&stgid=" + this.stgId;
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        console.log(url);
        return this.http.get(url, options);
    };
    VerificationDetailService.prototype.checkDownAndDownPercent = function () {
        var answerA072 = 0;
        var answerA099 = 0;
        var tempResult = true;
        // เงินดาวน์(%) A072 และ เงินดาวน์ ต้องสัมพันธ์หัน
        if (this.tabMain.ent_typ === 'Customer') {
            for (var i = 0; i < this.tabMain.listTabScrSubj.length; i++) {
                for (var j = 0; j < this.tabMain.listTabScrSubj[i].listTableData.length; j++) {
                    if (this.tabMain.listTabScrSubj[i].listTableData[j].topicCd == 'A072') {
                        answerA072 = Number(this.tabMain.listTabScrSubj[i].listTableData[j].answer);
                    }
                    else if (this.tabMain.listTabScrSubj[i].listTableData[j].topicCd == 'A099') {
                        answerA099 = Number(this.tabMain.listTabScrSubj[i].listTableData[j].answer);
                        console.log('ass a099' + answerA099);
                    }
                }
            }
            console.log('answerA072' + answerA072);
            console.log('answerA099' + answerA099);
            if (((answerA072 == 0) && (answerA099 != 0))
                || ((answerA072 != 0) && (answerA099 == 0))) {
                console.log('false');
                tempResult = false;
            }
        }
        return tempResult;
    };
    VerificationDetailService.prototype.checkArrTopicVarridate = function (arrStrInput) {
        var resultCheck = true;
        for (var i = 0; i < this.tabMain.listTabScrSubj.length; i++) {
            for (var j = 0; j < this.tabMain.listTabScrSubj[i].listTableData.length; j++) {
                console.log(arrStrInput.length);
                for (var k = 0; k < arrStrInput.length; k++) {
                    if (this.tabMain.listTabScrSubj[i].listTableData[j].topicCd == arrStrInput[k]) {
                        console.log("all" + this.tabMain.listTabScrSubj[i].listTableData[j].topicCd);
                        if (this.tabMain.listTabScrSubj[i].listTableData[j].answer) {
                            if (this.tabMain.listTabScrSubj[i].listTableData[j].answer == 'N/A') {
                                resultCheck = false;
                                console.log(this.tabMain.listTabScrSubj[i].listTableData[j].topicCd);
                                return resultCheck;
                            }
                        }
                        else {
                            console.log(this.tabMain.listTabScrSubj[i].listTableData[j].topicCd);
                            resultCheck = false;
                            return resultCheck;
                        }
                    }
                }
            }
        }
        return resultCheck;
    };
    VerificationDetailService.prototype.validateDialogDecisionGrade = function () {
        var reulltCheck = false;
        var msgValidate = '';
        var arrInvidualCustomer = ["A005", "A006", "A007", "A020", "A024", "A026", "A073", "A074", "A075",
            "A076", "A087", "A089", "A094", "A095", "A103", "A104", "A105"];
        var arrInvidualGuarantor = ["A005", "A006", "A007", "A020", "A024", "A026", "A073", "A074", "A075",
            "A076", "A087", "A089"];
        var arrJuristicCustomer = ["B002", "B004", "B005", "B006", "B007", "B009", "B010", "B012", "B089",
            "B090", "B091", "B102", "B104", "B109", "B110", "B119", "B120", "B121"];
        var arrJuristicGuarantor = ["B002", "B004", "B005", "B006", "B007", "B009", "B010", "B012", "B089",
            "B090", "B091", "B092", "B102", "B104"];
        // if ((this.tabMain.ent_cat === 'Individual') && (this.tabMain.ent_typ === 'Customer')) {
        //   reulltCheck = this.checkArrTopicVarridate(arrInvidualCustomer);
        // }
        // else if ((this.tabMain.ent_cat === 'Individual') && (this.tabMain.ent_typ === 'Guarantor')) {
        //   reulltCheck = this.checkArrTopicVarridate(arrInvidualGuarantor);
        // }
        // else if ((this.tabMain.ent_cat === 'Juristic') && (this.tabMain.ent_typ === 'Customer')) {
        //   reulltCheck = this.checkArrTopicVarridate(arrJuristicCustomer);
        // }
        // else if ((this.tabMain.ent_cat === 'Juristic') && (this.tabMain.ent_typ === 'Guarantor')) {
        //   reulltCheck = this.checkArrTopicVarridate(arrJuristicGuarantor);
        // }
        if (this.tabMain.ent_cat === 'Individual') {
            if (this.tabMain.ent_typ === 'Customer') {
                reulltCheck = this.checkArrTopicVarridate(arrInvidualCustomer);
            }
            else {
                reulltCheck = this.checkArrTopicVarridate(arrInvidualGuarantor);
            }
        }
        else {
            if (this.tabMain.ent_typ === 'Customer') {
                reulltCheck = this.checkArrTopicVarridate(arrJuristicCustomer);
            }
            else {
                reulltCheck = this.checkArrTopicVarridate(arrJuristicGuarantor);
            }
        }
        if (reulltCheck) {
            msgValidate = "Complete";
        }
        else {
            console.log('validate');
            msgValidate = "กรุณาใส่ข้อมูลให้ครบก่อนทำ Decision Grade";
        }
        return msgValidate;
    };
    VerificationDetailService.prototype.validateDataSave = function () {
        var msgvalidate = 'Complete';
        // if (!this.checkDownAndDownPercent()) {
        //   msgvalidate = 'เงินดาวน์(%) และ เงินดาวน์ ไม่สัมพันธ์กัน';
        //   console.log(msgvalidate);
        // }
        if (this.checkDownAndDownPercent()) {
        }
        else {
            msgvalidate = 'เงินดาวน์(%) และ เงินดาวน์ ไม่สัมพันธ์กัน';
            console.log(msgvalidate);
        }
        return msgvalidate;
    };
    VerificationDetailService.prototype.IsGrade = function (grade) {
        var arrGrade = ["A", "B", "C", "X", "F", "N/A"];
        for (var i = 0; i < arrGrade.length; i++) {
            if (grade == arrGrade[i]) {
                return true;
            }
        }
        return false;
    };
    VerificationDetailService.prototype.validateDataSubmit = function () {
        var msgvalidate = 'Complete';
        if ((this.tabMain.prim_scr) && (this.tabMain.prim_scr != 'N/A')) {
            if (this.tabMain.ask_rec_dtel) {
                if (this.checkDownAndDownPercent()) {
                }
                else {
                    msgvalidate = 'เงินดาวน์(%) และ เงินดาวน์ ไม่สัมพันธ์กัน';
                    console.log(msgvalidate);
                }
            }
            else {
                msgvalidate = 'กรุณากรอกข้อมูล รายละเอียด B/L ของ ASKและ ประวัติ NCB';
            }
        }
        else {
            msgvalidate = 'กรุณากรอกข้อมูล เกรดเบื้องต้น';
        }
        return msgvalidate;
    };
    VerificationDetailService.prototype.onSaveScoring = function () {
        //const url = this.service.url + this.service.mks_tps + `/ask/scoring/TestSendObjWeb`;
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/ScoringSave";
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        this.tabMain.device = 'web';
        this.tabMain.userName = this.userName;
        var data = this.tabMain;
        console.log(url);
        console.log(JSON.stringify(data));
        return this.http.post(url, JSON.stringify(data), options);
    };
    VerificationDetailService.prototype.onDeleteScoring = function () {
        //const url = this.service.url + this.service.mks_tps + `/ask/scoring/TestSendObjWeb`;
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/onDeleteScoring";
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        this.tabMain.device = 'web';
        this.tabMain.userName = this.userName;
        var data = this.tabMain;
        console.log(url);
        console.log(JSON.stringify(data));
        return this.http.post(url, JSON.stringify(data), options);
    };
    VerificationDetailService.prototype.onSubmitScoring = function () {
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/SubmitScoringPost";
        // const url = `http://localhost:8080/MKS_WebServices/ask/scoring/SubmitScoringPost`;
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        this.tabMain.device = 'web';
        this.tabMain.userName = this.userName;
        var data = this.tabMain;
        console.log(url);
        console.log(JSON.stringify(data));
        return this.http.post(url, JSON.stringify(data), options);
    };
    VerificationDetailService.prototype.onRetryScoring = function () {
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/RetryScoringPost";
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        this.tabMain.device = 'web';
        this.tabMain.userName = this.userName;
        var data = this.tabMain;
        console.log(url);
        console.log(JSON.stringify(data));
        return this.http.post(url, JSON.stringify(data), options);
    };
    VerificationDetailService.prototype.getDataScoring = function (device, username, runNo, comCode, entCD, refNo) {
        console.log(Date.now());
        this.isLoading = true;
        this.eventIsLoading.emit(this.isLoading);
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/VeifyDetailPost";
        //re
        // const url = this.service.url + this.service.mks_tps +`/ask/scoring/ScoringPOST`;
        var data = {
            "comCode": comCode,
            "entCD": entCD,
            "refNo": refNo,
            "runNo": runNo,
            "stgId": this.stgId,
            //"stgId": "2",
            "userName": username,
            "device": device
        };
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        this.isLoading = false;
        this.eventIsLoading.emit(this.isLoading);
        console.log(url);
        console.log(JSON.stringify(data));
        return this.http.post(url, JSON.stringify(data), options);
    };
    VerificationDetailService.prototype.setIdxCalScore = function (idx) {
        this.idxTabCalScore = idx;
        this.eventIdxTab.emit(idx);
    };
    VerificationDetailService.prototype.setSubj = function (listQuestionTabNew) {
        //�?�?าสำหรั�?เ�?�?�?เมื�?อมี�?าร�?�?�?�?�?�?�?อมูล
        this.listQuestionTab = listQuestionTabNew;
        this.eventListQuestionTab.emit(listQuestionTabNew);
        //�?�?าตั�?�?ต�?�? �?รณี dropdown ที�?มี sub
        this.listQuestionTabOriginal = JSON.parse(JSON.stringify(listQuestionTabNew));
    };
    VerificationDetailService.prototype.copyQuestionTab = function () {
        this.tabMain.listTabScrSubj = JSON.parse(JSON.stringify(this.listQuestionTab));
        this.eventTabMain.emit(this.tabMain);
    };
    VerificationDetailService.prototype.saveTabDataOnShow = function (lisTabOnShowNew) {
        if ((lisTabOnShowNew != null) && (lisTabOnShowNew.length > 0)) {
            this.eventListQuestionTab.emit(this.listQuestionTab);
        }
    };
    VerificationDetailService.prototype.setMainTab = function (tabMainNew) {
        this.tabMain = tabMainNew;
        this.eventTabMain.emit(tabMainNew);
    };
    VerificationDetailService.prototype.setTodoSelected = function (todoSelected) {
        this.todoVerifierSelected = todoSelected;
    };
    VerificationDetailService.prototype.getTable = function (idx) {
        return this.listQuestionTab[idx].listTableData;
    };
    VerificationDetailService.prototype.refreshData = function () {
        if (this.listQuestionTab != null && this.listQuestionTab.length > 0) {
            this.eventListQuestionTab.emit(this.listQuestionTab);
        }
        if (this.tabMain != null) {
            this.eventTabMain.emit(this.tabMain);
        }
        if (this.idxTabCalScore != null) {
            this.eventIdxTab.emit(this.idxTabCalScore);
        }
        this.calScoringAllPage();
    };
    VerificationDetailService.prototype.tranferDataScrCorp = function (listScrCorp, listScrCorpCalculate) {
        var i, j;
        for (i = 0; i < this.listQuestionTab[0].listTableData.length; i++) {
            for (j = 0; j < listScrCorpCalculate.length; j++) {
                if (this.listQuestionTab[0].listTableData[i].topicCd == listScrCorpCalculate[j].topic_typ) {
                    this.listQuestionTab[0].listTableData[i].answer = listScrCorpCalculate[j].field_1;
                    this.listQuestionTab[0].listTableData[i + 1].answer = listScrCorpCalculate[j].field_2;
                    this.listQuestionTab[0].listTableData[i + 2].answer = listScrCorpCalculate[j].field_3;
                }
            }
        }
        this.eventListQuestionTab.emit(this.listQuestionTab);
        /// copy �?�?าที�?�?ห�?�?�?�?�?ส�?ว�?ที�?ดึ�?มา�?า�?db
        this.tabMain.list_scr_corp = JSON.parse(JSON.stringify(listScrCorp));
        this.eventTabMain.emit(this.tabMain);
    };
    VerificationDetailService.prototype.calScoringInPage = function (tabID) {
        var listQuestionTabCal = this.listQuestionTab;
        var sumscore = 0;
        var i;
        var pAnswer;
        for (i = 0; i < listQuestionTabCal[tabID].listTableData.length; i++) {
            //�?รณี dropdown
            if (listQuestionTabCal[tabID].listTableData[i].type_for_cal == 'P') {
                this.listQuestionTab[tabID].listTableData[i].scr = String(sumscore);
                this.tempResultPointGrade = this.tempResultPointGrade + sumscore;
            }
            else if (listQuestionTabCal[tabID].listTableData[i].type_for_cal == 'GP') {
                this.listQuestionTab[tabID].listTableData[i].scr = String(this.tempResultPointGrade);
            }
            else if ((listQuestionTabCal[tabID].listTableData[i].type_for_cal == 'G')
                || (listQuestionTabCal[tabID].listTableData[i].type_for_cal == 'GG')) {
                if (listQuestionTabCal[tabID].listTableData[i].type_for_cal == 'GG') {
                    pAnswer = String(this.tempResultPointGrade);
                }
                else {
                    pAnswer = String(sumscore);
                }
                for (var k = 0; k < this.listQuestionTab[tabID].listTableData[i].listAnswerRange.length; k++) {
                    if ((Number(pAnswer) >= Number(this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].min))
                        && (Number(pAnswer) <= Number(this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].max))) {
                        this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].selected = 'Y';
                        if (this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].scr != null) {
                            //เอาเ�?รด�?ต�?ละห�?�?ามารวม�?ั�?เ�?ื�?อ�?�?ว�?�?ลเ�?รด
                            //this.resultGrade=this.resultGrade+this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].scr;
                            if (listQuestionTabCal[tabID].listTableData[i].type_for_cal == 'GG') {
                                if (this.tempResultGrade) {
                                    this.tempResultGrade = this.tempResultGrade + '=';
                                }
                                this.tempResultGrade = this.tempResultGrade + this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].scr;
                            }
                            else {
                                if (this.tempResultGrade) {
                                    this.tempResultGrade = this.tempResultGrade + '+';
                                }
                                this.tempResultGrade = this.tempResultGrade + this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].scr;
                            }
                        }
                    }
                    else {
                        this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].selected = 'N';
                    }
                }
            }
            else {
                if (listQuestionTabCal[tabID].listTableData[i].lookUp == 'Y') {
                    for (var j = 0; j < listQuestionTabCal[tabID].listTableData[i].listAnswer.length; j++) {
                        if (listQuestionTabCal[tabID].listTableData[i].listAnswer[j].selected == 'Y') {
                            if ((listQuestionTabCal[tabID].listTableData[i].listAnswer[j].scr != null)
                                && (listQuestionTabCal[tabID].listTableData[i].listAnswer[j].scr != '-')) {
                                sumscore = sumscore + Number(listQuestionTabCal[tabID].listTableData[i].listAnswer[j].scr);
                            }
                        }
                    }
                } //if
                else {
                    //�?รณี�?�?ว�?�?ำตอย
                    for (var j = 0; j < listQuestionTabCal[tabID].listTableData[i].listAnswerRange.length; j++) {
                        if (listQuestionTabCal[tabID].listTableData[i].listAnswerRange[j].selected == 'Y') {
                            if ((listQuestionTabCal[tabID].listTableData[i].listAnswerRange[j].selected != null)
                                && (listQuestionTabCal[tabID].listTableData[i].listAnswerRange[j].selected != '-')) {
                                sumscore = sumscore + Number(listQuestionTabCal[tabID].listTableData[i].listAnswerRange[j].scr);
                            }
                        }
                    }
                }
            }
        }
        this.resultGrade = this.tempResultGrade;
        this.eventResultGrade.emit(this.resultGrade);
    };
    VerificationDetailService.prototype.calScoringAllPage = function () {
        this.tempResultGrade = '';
        this.tempResultPointGrade = 0;
        for (var i = 0; i < 9; i++) {
            this.calScoringInPage(i);
        }
    };
    VerificationDetailService.prototype.onEditQuestionTab = function (recQuestionTab) {
        this.listQuestionTab[this.idxTabCalScore].listTableData = JSON.parse(JSON.stringify(recQuestionTab));
        this.tabMain.listTabScrSubj = JSON.parse(JSON.stringify(this.listQuestionTab));
        console.log(this.listQuestionTab[this.idxTabCalScore]);
        this.eventListQuestionTab.emit(this.listQuestionTab);
        this.eventTabMain.emit(this.tabMain);
    };
    VerificationDetailService.prototype.getRowDataCopyTabMainHist = function (topicCd) {
        var tempRowTableModel = new __WEBPACK_IMPORTED_MODULE_2__model_rowtable_model__["a" /* RowTableModel */]();
        for (var i = 0; i < this.allTabCopyHist.listTabScrSubj.length; i++) {
            for (var j = 0; j < this.allTabCopyHist.listTabScrSubj[i].listTableData.length; j++) {
                if (this.allTabCopyHist.listTabScrSubj[i].listTableData[j].topicCd == topicCd) {
                    return this.allTabCopyHist.listTabScrSubj[i].listTableData[j];
                }
            }
        }
        return tempRowTableModel;
    };
    VerificationDetailService.prototype.onEditFromCreditScoringHist = function () {
        //main Tab
        this.tabMain.com_code = this.allTabCopyHist.com_code;
        this.tabMain.run_no = this.allTabCopyHist.run_no;
        this.tabMain.scr_dt = this.allTabCopyHist.scr_dt;
        this.tabMain.ent_cd = this.allTabCopyHist.ent_cd;
        this.tabMain.ent_typ = this.allTabCopyHist.ent_typ;
        this.tabMain.ref_no = this.allTabCopyHist.ref_no;
        this.tabMain.pmnt_grdng = this.allTabCopyHist.pmnt_grdng;
        this.tabMain.mkt_emp_no = this.allTabCopyHist.mkt_emp_no;
        this.tabMain.trce_rec_dtel = this.allTabCopyHist.trce_rec_dtel;
        this.tabMain.ask_rec_dtel = this.allTabCopyHist.ask_rec_dtel;
        this.tabMain.ver_mthd_more = this.allTabCopyHist.ver_mthd_more;
        this.tabMain.list_product_cd = JSON.parse(JSON.stringify(this.allTabCopyHist.list_product_cd));
        this.tabMain.list_ver_emp_no = JSON.parse(JSON.stringify(this.allTabCopyHist.list_ver_emp_no));
        this.tabMain.list_in_out = JSON.parse(JSON.stringify(this.allTabCopyHist.list_in_out));
        this.tabMain.list_trec_rec_cd = JSON.parse(JSON.stringify(this.allTabCopyHist.list_trec_rec_cd));
        this.tabMain.list_ask_rec_cd = JSON.parse(JSON.stringify(this.allTabCopyHist.list_ask_rec_cd));
        this.tabMain.list_ncb_rec_cd = JSON.parse(JSON.stringify(this.allTabCopyHist.list_ncb_rec_cd));
        this.tabMain.list_ver_mthd = JSON.parse(JSON.stringify(this.allTabCopyHist.list_ver_mthd));
        // Question tab
        var arrGetOldData = ["A002", "A005", "A072", "A073", "B088", "B089", "A094", "A095",
            "A096", "A097", "A098", "A099", "A100", "A101", "A102", "B111",
            "B112", "B113", "B114", "B115", "B116", "B117"];
        for (var i = 0; i < this.tabMain.listTabScrSubj.length; i++) {
            for (var j = 0; j < this.tabMain.listTabScrSubj[i].listTableData.length; j++) {
                for (var k = 0; k < arrGetOldData.length; k++) {
                    if (this.tabMain.listTabScrSubj[i].listTableData[j].topicCd == arrGetOldData[k]) {
                        this.tabMain.listTabScrSubj[i].listTableData[j] = JSON.parse(JSON.stringify(this.getRowDataCopyTabMainHist(arrGetOldData[k])));
                    }
                }
            }
        }
        this.eventListQuestionTab.emit(this.tabMain.listTabScrSubj);
        this.eventTabMain.emit(this.tabMain);
    };
    VerificationDetailService.prototype.getGroupSearchScoringEnquiry = function () {
        this.isLoading = true;
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/GroupSearchScoringEnquiryPost";
        var data = {};
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        console.log(JSON.stringify(data));
        return this.http.post(url, JSON.stringify(data), options);
    };
    VerificationDetailService.prototype.getListScoringEnquiry = function (comCode, refNO, entName, entCd) {
        this.isLoading = true;
        this.eventIsLoading.emit(this.isLoading);
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/ScoringEnquiryPost";
        //  const url =`http://localhost:8080/MKS_WebServices/ask/scoring/ScoringEnquiryPost`;
        console.log(url);
        var data = {
            "comCode": comCode,
            "refNo": refNO,
            "cusName": entName,
            "entCd": entCd
            // "userName": username
            // "device": device
        };
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        console.log(JSON.stringify(data));
        return this.http.post(url, JSON.stringify(data), options);
    };
    // Mos //
    VerificationDetailService.prototype.getCreditScoringHistory = function (entType, entCd, comCode) {
        this.isLoading = true;
        this.eventIsLoading.emit(this.isLoading);
        var url = this.service.url + this.service.mks_scoring + "/ask/scoring/ScoringCreditScoringHistoryPost";
        // const url = this.service.url + this.service.mks_tps +`/ask/scoring/ScoringCreditScoringHistoryPost`;
        var data = {
            "comCode": comCode,
            "entType": entType,
            "entCd": entCd,
            "device": "web",
            "userName": this.userName,
        };
        var options = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        this.isLoading = false;
        this.eventIsLoading.emit(this.isLoading);
        console.log(JSON.stringify(data));
        return this.http.post(url, JSON.stringify(data), options);
    };
    VerificationDetailService.prototype.setCreditScoringHistory = function (data) {
        this.creditScoringHistory = data;
        console.log(this.creditScoringHistory);
    };
    VerificationDetailService.prototype.setTabMainTemp = function (event) {
        this.allTabCopyHist = event;
        console.log(this.allTabCopyHist);
    };
    VerificationDetailService.prototype.clickCreditScoringHistory = function (event) {
        if (event == true) {
            this.emitClickCrScrHis.emit(event);
        }
    };
    VerificationDetailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__shared_config_service_endpoint__["a" /* ServiceEndpoint */],
            __WEBPACK_IMPORTED_MODULE_5__shared_user_user_storage_service__["a" /* UserStorage */]])
    ], VerificationDetailService);
    return VerificationDetailService;
}());



/***/ })

});
//# sourceMappingURL=scoring.module.chunk.js.map