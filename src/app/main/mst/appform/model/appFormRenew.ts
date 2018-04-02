/**
 * Created by wisarut.su on 21/11/2560.
 */

export class AppFormRenew {
  public ca_no: any;
  public cust_name: any;
  public prd_type: any;
  public expire_dt: any;
  public mkt_name: any;
  public sbu_typ: any;
  public ori_ca: any;
  public mkt_code: any;
  public contract_no: any;
  public contract_date: any;
  public contract_expire_date: any;
  public cus_code: any;
  public new_card_no: any;
  public net_worth_year: any;
  public net_worth_amt: any;
  public regis_capital_amt: any;
  public sales_year: any;
  public sales_amt: any;
  public paid_up_capital: any;

  constructor()
  constructor(ca_no: any,
              cust_name: any,
              prd_type: any,
              expire_dt: any,
              mkt_name: any,
              sbu_typ: any,
              ori_ca: any,
              mkt_code: any,
              contract_no: any,
              contract_date: any,
              contract_expire_date: any,
              cus_code: any,
              new_card_no: any,
              net_worth_year: any,
              net_worth_amt: any,
              regis_capital_amt: any,
              sales_year: any,
              sales_amt: any,
              paid_up_capital: any)
  constructor(ca_no ?: any,
              cust_name ?: any,
              prd_type ?: any,
              expire_dt ?: any,
              mkt_name ?: any,
              sbu_typ ?: any,
              ori_ca ?: any,
              mkt_code ?: any,
              contract_no ?: any,
              contract_date ?: any,
              contract_expire_date ?: any,
              cus_code ?: any,
              new_card_no ?: any,
              net_worth_year ?: any,
              net_worth_amt ?: any,
              regis_capital_amt ?: any,
              sales_year ?: any,
              sales_amt ?: any,
              paid_up_capital ?: any) {
    this.ca_no = ca_no;
    this.cust_name = cust_name;
    this.prd_type = prd_type;
    this.expire_dt = expire_dt;
    this.mkt_name = mkt_name;
    this.sbu_typ = sbu_typ;
    this.ori_ca = ori_ca;
    this.mkt_code = mkt_code;
    this.contract_no = contract_no;
    this.contract_date = contract_date;
    this.contract_expire_date = contract_expire_date;
    this.cus_code = cus_code;
    this.new_card_no = new_card_no;
    this.net_worth_year = net_worth_year;
    this.net_worth_amt = net_worth_amt;
    this.regis_capital_amt = regis_capital_amt;
    this.sales_year = sales_year;
    this.sales_amt = sales_amt;
    this.paid_up_capital = paid_up_capital;
  }

  static parse(json: any[]) {
    let data: AppFormRenew[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new AppFormRenew(
        json[i].CA_NO,
        json[i].CUST_NAME,
        json[i].PRD_TYPE,
        json[i].EXPIRE_DT,
        json[i].MKT_NAME,
        json[i].SBU_TYP,
        json[i].ORI_CA,
        json[i].MKT_CODE,
        json[i].CONTRACT_NO,
        json[i].CONTRACT_DATE,
        json[i].CONTRACT_EXPIRE_DATE,
        json[i].CUS_CODE,
        json[i].NEW_CARD_NO,
        json[i].netWorthYear,
        json[i].netWorthAmt,
        json[i].regisCapitalAmt,
        json[i].salesYear,
        json[i].salesAmt,
        json[i].paidUpCapital
      ))
    }
    return data;
  }

  static set(json: any) {
    let data: AppFormRenew = new AppFormRenew(
      json.ca_no,
      json.cust_name,
      json.prd_type,
      json.expire_dt,
      json.mkt_name,
      json.sbu_typ,
      json.ori_ca,
      json.mkt_code,
      json.contract_no,
      json.contract_date,
      json.contract_expire_date,
      json.cus_code,
      json.new_card_no,
      json.net_worth_year,
      json.net_worth_amt,
      json.regis_capital_amt,
      json.sales_year,
      json.sales_amt,
      json.paid_up_capital
    );
    return data;
  }
}
