import {ListStep} from "./getDataStep";
/**
 * Created by peerawat.ko on 31/08/2560.
 */
export class ListDetail {
  public ap_no: any;
  public sub_id: any;
  public fin_typ: any;
  public sub_fin: any;
  public buy_back_flg: any;
  public adv_arr: any;
  public schedule: any;
  public asst_amt_e_vat: any;
  public asst_amt_vat: any;
  public asst_amt_i_vat: any;
  public fin_amt_e_vat: any;
  public fin_amt_vat: any;
  public fin_amt_i_vat: any;
  public fin_ratio: any;
  public down_amt_e_vat: any;
  public down_amt_vat: any;
  public down_amt_i_vat: any;
  public dep_amt_e_vat: any;
  public dep_amt_vat: any;
  public dep_amt_i_vat: any;
  public rv_amt_e_vat: any;
  public rv_amt_vat: any;
  public rv_amt_i_vat: any;
  public cal_inst_typ: any;
  public installment_e_vat: any;
  public installment_vat: any;
  public installment_i_vat: any;
  public bank_code: any;
  public interest_rate_type: any;
  public interest_rate: any;
  public terms: any;
  public flat_rate: any;
  public gross_irr: any;
  public net_irr: any;
  public spread: any;
  public currency: any;
  public disburse_dt;
  public first: any;
  public operating_lease: any;
  public wh_tax: any;
  public lc_flg: any;
  public fin_asst: any;
  public es_expense: any;
  public es_revenue: any;
  public net_irr_inc_deposit: any;
  public asst_prce_forgn: any;
  public group_flg: any;
  public group_nme: any;
  public with_vat: any;
  public wh_tax_flg: any;
  public curr_type: any;
  public duty_pcnt: any;
  public inst_pcnt_of_asst: any;
  public fin_type_name: any;
  public sub_fin_name: any;
  public operating_lease_name: any;
  public curr_type_name: any;
  public int_rate_name: any;
  public adv_arr_name: any;
  public inputIvat: any;
  public calculateItem: any;
  public listStep: ListStep[];

  constructor()
  constructor(ap_no: any,
              sub_id: any,
              fin_typ: any,
              sub_fin: any,
              buy_back_flg: any,
              adv_arr: any,
              schedule: any,
              asst_amt_e_vat: any,
              asst_amt_vat: any,
              asst_amt_i_vat: any,
              fin_amt_e_vat: any,
              fin_amt_vat: any,
              fin_amt_i_vat: any,
              fin_ratio: any,
              down_amt_e_vat: any,
              down_amt_vat: any,
              down_amt_i_vat: any,
              dep_amt_e_vat: any,
              dep_amt_vat: any,
              dep_amt_i_vat: any,
              rv_amt_e_vat: any,
              rv_amt_vat: any,
              rv_amt_i_vat: any,
              cal_inst_typ: any,
              installment_e_vat: any,
              installment_vat: any,
              installment_i_vat: any,
              bank_code: any,
              interest_rate_type: any,
              interest_rate: any,
              terms: any,
              flat_rate: any,
              gross_irr: any,
              net_irr: any,
              spread: any,
              currency: any,
              disburse_dt,
              first: any,
              operating_lease: any,
              wh_tax: any,
              lc_flg: any,
              fin_asst: any,
              es_expense: any,
              es_revenue: any,
              net_irr_inc_deposit: any,
              asst_prce_forgn: any,
              group_flg: any,
              group_nme: any,
              with_vat: any,
              wh_tax_flg: any,
              curr_type: any,
              duty_pcnt: any,
              inst_pcnt_of_asst: any,
              fin_type_name: any,
              sub_fin_name: any,
              operating_lease_name: any,
              curr_type_name: any,
              int_rate_name: any,
              adv_arr_name: any,
              inputIvat: any,
              calculateItem: any,
              listStep: ListStep[])
  constructor(ap_no?: any,
              sub_id?: any,
              fin_typ?: any,
              sub_fin?: any,
              buy_back_flg?: any,
              adv_arr?: any,
              schedule?: any,
              asst_amt_e_vat?: any,
              asst_amt_vat?: any,
              asst_amt_i_vat?: any,
              fin_amt_e_vat?: any,
              fin_amt_vat?: any,
              fin_amt_i_vat?: any,
              fin_ratio?: any,
              down_amt_e_vat?: any,
              down_amt_vat?: any,
              down_amt_i_vat?: any,
              dep_amt_e_vat?: any,
              dep_amt_vat?: any,
              dep_amt_i_vat?: any,
              rv_amt_e_vat?: any,
              rv_amt_vat?: any,
              rv_amt_i_vat?: any,
              cal_inst_typ?: any,
              installment_e_vat?: any,
              installment_vat?: any,
              installment_i_vat?: any,
              bank_code?: any,
              interest_rate_type?: any,
              interest_rate?: any,
              terms?: any,
              flat_rate?: any,
              gross_irr?: any,
              net_irr?: any,
              spread?: any,
              currency?: any,
              disburse_dt?,
              first?: any,
              operating_lease?: any,
              wh_tax?: any,
              lc_flg?: any,
              fin_asst?: any,
              es_expense?: any,
              es_revenue?: any,
              net_irr_inc_deposit?: any,
              asst_prce_forgn?: any,
              group_flg?: any,
              group_nme?: any,
              with_vat?: any,
              wh_tax_flg?: any,
              curr_type?: any,
              duty_pcnt?: any,
              inst_pcnt_of_asst?: any,
              fin_type_name?: any,
              sub_fin_name?: any,
              operating_lease_name?: any,
              curr_type_name?: any,
              int_rate_name?: any,
              adv_arr_name?: any,
              inputIvat?: any,
              calculateItem?: any,
              listStep?: ListStep[]) {
    this.ap_no = ap_no;
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
    this.es_expense = es_expense;
    this.es_revenue = es_revenue;
    this.net_irr_inc_deposit = net_irr_inc_deposit;
    this.asst_prce_forgn = asst_prce_forgn;
    this.group_flg = group_flg;
    this.group_nme = group_nme;
    this.with_vat = with_vat;
    this.wh_tax_flg = wh_tax_flg;
    this.curr_type = curr_type;
    this.duty_pcnt = duty_pcnt;
    this.inst_pcnt_of_asst = inst_pcnt_of_asst;
    this.fin_type_name = fin_type_name;
    this.sub_fin_name = sub_fin_name;
    this.operating_lease_name = operating_lease_name;
    this.curr_type_name = curr_type_name;
    this.int_rate_name = int_rate_name;
    this.adv_arr_name = adv_arr_name;
    this.inputIvat = inputIvat;
    this.calculateItem = calculateItem;
    this.listStep = listStep;
  }

  static parse(jsons: any[]) {
    let data: ListDetail[] = [];
    //for (let i = 0; i < json.length; i++) {
    for (let json of jsons) {
      data.push(new ListDetail(
        json.AP_NO,
        json.SUB_ID,
        json.FIN_TYP,
        json.SUB_FIN,
        json.BUY_BACK_FLG,
        json.ADV_ARR,
        json.SCHEDULE,
        json.ASST_AMT_E_VAT,
        json.ASST_AMT_VAT,
        json.ASST_AMT_I_VAT,
        json.FIN_AMT_E_VAT,
        json.FIN_AMT_VAT,
        json.FIN_AMT_I_VAT,
        json.FIN_RATIO,
        json.DOWN_AMT_E_VAT,
        json.DOWN_AMT_VAT,
        json.DOWN_AMT_I_VAT,
        json.DEP_AMT_E_VAT,
        json.DEP_AMT_VAT,
        json.DEP_AMT_I_VAT,
        json.RV_AMT_E_VAT,
        json.RV_AMT_VAT,
        json.RV_AMT_I_VAT,
        json.CAL_INST_TYP,
        json.INSTALLMENT_E_VAT,
        json.INSTALLMENT_VAT,
        json.INSTALLMENT_I_VAT,
        json.BANK_CODE,
        json.INTEREST_RATE_TYPE,
        json.INTEREST_RATE,
        json.TERMS,
        json.FLAT_RATE,
        json.GROSS_IRR,
        json.NET_IRR,
        json.SPREAD,
        json.CURRENCY,
        json.DISBURSE_DT,
        json.FIRST,
        json.OPERATING_LEASE,
        json.WH_TAX,
        json.LC_FLG,
        json.FIN_ASST,
        json.ES_EXPENSE,
        json.ES_REVENUE,
        json.NET_IRR_INC_DEPOSIT,
        json.ASST_PRCE_FORGN,
        json.GROUP_FLG,
        json.GROUP_NME,
        json.WITH_VAT,
        json.WH_TAX_FLG,
        json.CURR_TYPE,
        json.DUTY_PCNT,
        json.INST_PCNT_OF_ASST,
        json.FIN_TYPE_NAME,
        json.SUB_FIN_NAME,
        json.OPERATING_LEASE_NAME,
        json.CURR_TYPE_NAME,
        json.INT_RATE_NAME,
        json.ADV_ARR_NAME,
        json.inputIVat,
        json.calculateItem,
        ListStep.parse(json.STEP)
      ))
    }

    return data;
  }
}
