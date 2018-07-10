import {insTransModel} from "../other/ccs-insurance/insTrans.model";
/**
 * Created by tanapon.sa on 07/02/2561.
 */
export class InsuranceModel {
  public lblsum_ins_pastdue : string;
  public pnlinsurance_complusory : string;
  public lblins_exp : string;
  public lblcom_exp : string;
  public sum_pastdue_normal : string;
  public sum_pastdue_normal_askbg : string;
  public sum_pastdue_normal_skib : string;
  public sum_pastdue_compulsory : string;
  public sum_pastdue_compulsory_askbg : string;
  public sum_pastdue_compulsory_skib : string;
  public sum_pastdue_marine : string;
  public sum_pastdue_close : string;
  public upd_pastdue_normal : string;
  public upd_pastdue_compulsory : string;
  public upd_pastdue_marine : string;
  public adv_ins_normal : string;
  public adv_ins_normal_skib : string;
  public adv_ins_compulsory : string;
  public adv_ins_compulsory_skib : string;
  public adv_ins_marine : string;
  public ins_pastdue_normal_askbg : string;
  public ins_pastdue_normal_skib : string;
  public ins_pastdue_compulsory_askbg : string;
  public ins_pastdue_compulsory_skib : string;
  public list_InsTrans : insTransModel[];


  constructor(lblsum_ins_pastdue?: string, pnlinsurance_complusory?: string, lblins_exp?: string,
              lblcom_exp?: string, sum_pastdue_normal?: string, sum_pastdue_normal_askbg?: string,
              sum_pastdue_normal_skib?: string, sum_pastdue_compulsory?: string, sum_pastdue_compulsory_askbg?: string,
              sum_pastdue_compulsory_skib?: string, sum_pastdue_marine?: string, sum_pastdue_close?: string,
              upd_pastdue_normal?: string, upd_pastdue_compulsory?: string, upd_pastdue_marine?: string,
              adv_ins_normal?: string, adv_ins_normal_skib?: string, adv_ins_compulsory?: string,
              adv_ins_compulsory_skib?: string, adv_ins_marine?: string, ins_pastdue_normal_askbg?: string,
              ins_pastdue_normal_skib?: string, ins_pastdue_compulsory_askbg?: string, ins_pastdue_compulsory_skib?: string,
              list_InsTrans?: insTransModel[] ) {
    this.lblsum_ins_pastdue = lblsum_ins_pastdue || '';
    this.pnlinsurance_complusory = pnlinsurance_complusory || '';
    this.lblins_exp = lblins_exp || '';
    this.lblcom_exp = lblcom_exp || '';
    this.sum_pastdue_normal = sum_pastdue_normal || '';
    this.sum_pastdue_normal_askbg = sum_pastdue_normal_askbg || '';
    this.sum_pastdue_normal_skib = sum_pastdue_normal_skib || '';
    this.sum_pastdue_compulsory = sum_pastdue_compulsory || '';
    this.sum_pastdue_compulsory_askbg = sum_pastdue_compulsory_askbg || '';
    this.sum_pastdue_compulsory_skib = sum_pastdue_compulsory_skib || '';
    this.sum_pastdue_marine = sum_pastdue_marine || '';
    this.sum_pastdue_close = sum_pastdue_close || '';
    this.upd_pastdue_normal = upd_pastdue_normal || '';
    this.upd_pastdue_compulsory = upd_pastdue_compulsory || '';
    this.upd_pastdue_marine = upd_pastdue_marine || '';
    this.adv_ins_normal = adv_ins_normal || '';
    this.adv_ins_normal_skib = adv_ins_normal_skib || '';
    this.adv_ins_compulsory = adv_ins_compulsory || '';
    this.adv_ins_compulsory_skib = adv_ins_compulsory_skib || '';
    this.adv_ins_marine = adv_ins_marine || '';
    this.ins_pastdue_normal_askbg = ins_pastdue_normal_askbg || '';
    this.ins_pastdue_normal_skib = ins_pastdue_normal_skib || '';
    this.ins_pastdue_compulsory_askbg = ins_pastdue_compulsory_askbg || '';
    this.ins_pastdue_compulsory_skib = ins_pastdue_compulsory_skib || '';
    this.list_InsTrans = list_InsTrans;
  }

  static parse(json: any) {
    let data: InsuranceModel = new InsuranceModel();

    data.lblsum_ins_pastdue = json.LBLSUM_INS_PASTDUE;
    data.pnlinsurance_complusory = json.PNLINSURANCE_COMPLUSORY;
    data.lblins_exp = json.LBLINS_EXP;
    data.lblcom_exp = json.LBLCOM_EXP;
    data.sum_pastdue_normal = json.SUM_PASTDUE_NORMAL;
    data.sum_pastdue_normal_askbg = json.SUM_PASTDUE_NORMAL_ASKBG;
    data.sum_pastdue_normal_skib = json.SUM_PASTDUE_NORMAL_SKIB;
    data.sum_pastdue_compulsory = json.SUM_PASTDUE_COMPULSORY;
    data.sum_pastdue_compulsory_askbg = json.SUM_PASTDUE_COMPULSORY_ASKBG;
    data.sum_pastdue_compulsory_skib = json.SUM_PASTDUE_COMPULSORY_SKIB;
    data.sum_pastdue_marine = json.SUM_PASTDUE_MARINE;
    data.sum_pastdue_close = json.SUM_PASTDUE_CLOSE;
    data.upd_pastdue_normal = json.UPD_PASTDUE_NORMAL;
    data.upd_pastdue_compulsory = json.UPD_PASTDUE_COMPULSORY;
    data.upd_pastdue_marine = json.UPD_PASTDUE_MARINE;
    data.adv_ins_normal = json.ADV_INS_NORMAL;
    data.adv_ins_normal_skib = json.ADV_INS_NORMAL_SKIB;
    data.adv_ins_compulsory = json.ADV_INS_COMPULSORY;
    data.adv_ins_compulsory_skib = json.ADV_INS_COMPULSORY_SKIB;
    data.adv_ins_marine = json.ADV_INS_MARINE;
    data.ins_pastdue_normal_askbg = json.INS_PASTDUE_NORMAL_ASKBG;
    data.ins_pastdue_normal_skib = json.INS_PASTDUE_NORMAL_SKIB;
    data.ins_pastdue_compulsory_askbg = json.INS_PASTDUE_COMPULSORY_ASKBG;
    data.ins_pastdue_compulsory_skib = json.INS_PASTDUE_COMPULSORY_SKIB;
    data.list_InsTrans = insTransModel.parse(json.LIST_InsTrans);

    return data;
  }

}
