import {caBgDetailSub} from "./ca-bgdetailsub";
import {caStep} from "./ca-step";
export class caBgDetail {
  public   ca_no;
  public   sub_id;
  public   fin_typ;
  public   sub_fin;
  public   buy_back_flg;
  public   adv_arr;
  public   schedule;
  public   asst_amt_e_vat;
  public   asst_amt_vat;
  public   asst_amt_i_vat;
  public   fin_amt_e_vat;
  public   fin_amt_vat;
  public   fin_amt_i_vat;
  public   fin_ratio;
  public   down_amt_e_vat;
  public   down_amt_vat;
  public   down_amt_i_vat;
  public   dep_amt_e_vat;
  public   dep_amt_vat;
  public   dep_amt_i_vat;
  public   rv_amt_e_vat;
  public   rv_amt_vat;
  public   rv_amt_i_vat;
  public   cal_inst_typ;
  public   installment_e_vat;
  public   installment_vat;
  public   installment_i_vat;
  public   bank_code;
  public   interest_rate_type;
  public   interest_rate;
  public   terms;
  public   flat_rate;
  public   gross_irr;
  public   net_irr;
  public   spread;
  public   currency;
  public   disburse_dt;
  public   first;
  public   operating_lease;
  public   wh_tax;
  public   lc_flg;
  public   fin_asst;
  public   group_flg;
  public   group_nme;
  public   asst_prce_forgn;
  public   curr_type;
  public   duty_pcnt;
  public   inst_pcnt_of_asst;
  public   with_vat;
  public   free_text;
  public   es_expense;
  public   es_revenue;
  public   cancel_date;
  public   cancel_no;
  public   pen_rate;
  public   great_period;
  public   net_irr_inc_deposit;
  public   type_cal_pricing;
  public   buy_back_amt;
  public   dealer_code;
  public   fin_name;
  public   credit_type;
  public   drawdown_flg;
  public   listbgdetailsub :caBgDetailSub[] ;
  public   listcastep :caStep[] ;


  constructor()
  constructor(ca_no, sub_id, fin_typ, sub_fin, buy_back_flg, adv_arr, schedule, asst_amt_e_vat, asst_amt_vat, asst_amt_i_vat,
              fin_amt_e_vat, fin_amt_vat, fin_amt_i_vat, fin_ratio, down_amt_e_vat, down_amt_vat, down_amt_i_vat, dep_amt_e_vat,
              dep_amt_vat, dep_amt_i_vat, rv_amt_e_vat, rv_amt_vat, rv_amt_i_vat, cal_inst_typ, installment_e_vat, installment_vat,
              installment_i_vat, bank_code, interest_rate_type, interest_rate, terms, flat_rate, gross_irr, net_irr, spread,
              currency, disburse_dt, first, operating_lease, wh_tax, lc_flg, fin_asst, group_flg, group_nme, asst_prce_forgn,
              curr_type, duty_pcnt, inst_pcnt_of_asst, with_vat, free_text, es_expense, es_revenue, cancel_date, cancel_no,
              pen_rate, great_period, net_irr_inc_deposit, type_cal_pricing , buy_back_amt, dealer_code,
              fin_name, credit_type, drawdown_flg, listbgdetailsub , listcastep)
  constructor(ca_no ?, sub_id ?, fin_typ ?, sub_fin ?, buy_back_flg ?, adv_arr ?, schedule ?, asst_amt_e_vat ?, asst_amt_vat ?,
              asst_amt_i_vat ?, fin_amt_e_vat ?, fin_amt_vat ?, fin_amt_i_vat ?, fin_ratio ?, down_amt_e_vat ?, down_amt_vat ?,
              down_amt_i_vat ?, dep_amt_e_vat ?, dep_amt_vat ?, dep_amt_i_vat ?, rv_amt_e_vat ?, rv_amt_vat ?, rv_amt_i_vat ?,
              cal_inst_typ ?, installment_e_vat ?, installment_vat ?, installment_i_vat ?, bank_code ?, interest_rate_type ?,
              interest_rate ?, terms ?, flat_rate ?, gross_irr ?, net_irr ?, spread ?, currency ?, disburse_dt ?, first ?,
              operating_lease ?, wh_tax ?, lc_flg ?, fin_asst ?, group_flg ?, group_nme ?, asst_prce_forgn ?, curr_type ?,
              duty_pcnt ?, inst_pcnt_of_asst ?, with_vat ?, free_text ?, es_expense ?, es_revenue ?, cancel_date ?, cancel_no ?,
              pen_rate ?, great_period ?, net_irr_inc_deposit ?, type_cal_pricing ?, buy_back_amt?, dealer_code?,
              fin_name ?, credit_type ?, drawdown_flg ?, listbgdetailsub? ,listcastep ?) {
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
    this.type_cal_pricing = type_cal_pricing;
    this.buy_back_amt = buy_back_amt;
    this.dealer_code = dealer_code;
    this.fin_name = fin_name;
    this.credit_type = credit_type;
    this.drawdown_flg = drawdown_flg;
    this.listbgdetailsub = listbgdetailsub ? listbgdetailsub : [];
    this.listcastep = listcastep ?listcastep : [];
  }

  static
  parse(json: any[]) {
    let data: caBgDetail[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caBgDetail(
          json[i].ca_no,
          json[i].sub_id,
          json[i].fin_typ,
          json[i].sub_fin,
          json[i].buy_back_flg,
          json[i].adv_arr,
          json[i].schedule,
          json[i].asst_amt_e_vat,
          json[i].asst_amt_vat,
          json[i].asst_amt_i_vat,
          json[i].fin_amt_e_vat,
          json[i].fin_amt_vat,
          json[i].fin_amt_i_vat,
          json[i].fin_ratio,
          json[i].down_amt_e_vat,
          json[i].down_amt_vat,
          json[i].down_amt_i_vat,
          json[i].dep_amt_e_vat,
          json[i].dep_amt_vat,
          json[i].dep_amt_i_vat,
          json[i].rv_amt_e_vat,
          json[i].rv_amt_vat,
          json[i].rv_amt_i_vat,
          json[i].cal_inst_typ,
          json[i].installment_e_vat,
          json[i].installment_vat,
          json[i].installment_i_vat,
          json[i].bank_code,
          json[i].interest_rate_type,
          json[i].interest_rate,
          json[i].terms,
          json[i].flat_rate,
          json[i].gross_irr,
          json[i].net_irr,
          json[i].spread,
          json[i].currency,
          json[i].disburse_dt,
          json[i].first,
          json[i].operating_lease,
          json[i].wh_tax,
          json[i].lc_flg,
          json[i].fin_asst,
          json[i].group_flg,
          json[i].group_nme,
          json[i].asst_prce_forgn,
          json[i].curr_type,
          json[i].duty_pcnt,
          json[i].inst_pcnt_of_asst,
          json[i].with_vat,
          json[i].free_text,
          json[i].es_expense,
          json[i].es_revenue,
          json[i].cancel_date,
          json[i].cancel_no,
          json[i].pen_rate,
          json[i].great_period,
          json[i].net_irr_inc_deposit,
          json[i].type_cal_pricing,
          json[i].buy_back_amt,
          json[i].dealer_code,
          json[i].fin_name,
          json[i].credit_type,
          json[i].drawdown_flg,
          caBgDetailSub.parse(json[i].listbgdetailsub),
          caStep.parse(json[i].listcastep)
        ))
      }
    }
    return data;
  }
}
