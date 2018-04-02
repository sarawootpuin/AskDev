export class AppFormNew {
  public sale_call_no: any;
  public comp_eng_nme: any;
  public credit_type: any;
  public owner_name: any;
  public comp_ent_code: any;
  public ownr: any;
  public intro_mthd_cd: any;
  public intro_by_cd: any;
  public intro_mthd_desc: any;
  public intro_by_name: any;
  public connect_since: any;
  public cus_status: any;
  public com_code: any;
  public prebranch_code: any;
  public new_card_no: any;
  public net_worth_year: any;
  public net_worth_amt: any;
  public regis_capital_amt: any;
  public sales_year: any;
  public sales_amt: any;
  public paid_up_capital: any;

  constructor()
  constructor(sale_call_no: any,
              comp_eng_nme: any,
              credit_type: any,
              owner_name: any,
              comp_ent_code: any,
              ownr: any,
              intro_mthd_cd: any,
              intro_by_cd: any,
              intro_mthd_desc: any,
              intro_by_name: any,
              connect_since: any,
              cus_status: any,
              com_code: any,
              prebranch_code: any,
              new_card_no: any,
              net_worth_year: any,
              net_worth_amt: any,
              regis_capital_amt: any,
              sales_year: any,
              sales_amt: any,
              paid_up_capital: any)
  constructor(sale_call_no ?: any,
              comp_eng_nme ?: any,
              credit_type ?: any,
              owner_name ?: any,
              comp_ent_code ?: any,
              ownr ?: any,
              intro_mthd_cd ?: any,
              intro_by_cd ?: any,
              intro_mthd_desc ?: any,
              intro_by_name ?: any,
              connect_since ?: any,
              cus_status ?: any,
              com_code ?: any,
              prebranch_code ?: any,
              new_card_no ?: any,
              net_worth_year ?: any,
              net_worth_amt ?: any,
              regis_capital_amt ?: any,
              sales_year ?: any,
              sales_amt ?: any,
              paid_up_capital ?: any) {
    this.sale_call_no = sale_call_no;
    this.comp_eng_nme = comp_eng_nme;
    this.credit_type = credit_type;
    this.owner_name = owner_name;
    this.comp_ent_code = comp_ent_code;
    this.ownr = ownr;
    this.intro_mthd_cd = intro_mthd_cd;
    this.intro_by_cd = intro_by_cd;
    this.intro_mthd_desc = intro_mthd_desc;
    this.intro_by_name = intro_by_name;
    this.connect_since = connect_since;
    this.cus_status = cus_status;
    this.com_code = com_code;
    this.prebranch_code = prebranch_code;
    this.new_card_no = new_card_no;
    this.net_worth_year = net_worth_year;
    this.net_worth_amt = net_worth_amt;
    this.regis_capital_amt = regis_capital_amt;
    this.sales_year = sales_year;
    this.sales_amt = sales_amt;
    this.paid_up_capital = paid_up_capital;
  }

  static parse(json: any[]) {
    let data: AppFormNew[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new AppFormNew(
        json[i].SALE_CALL_NO,
        json[i].COMP_ENG_NME,
        json[i].CREDIT_TYPE,
        json[i].OWNER_NAME,
        json[i].COMP_ENT_CODE,
        json[i].OWNR,
        json[i].INTRO_MTHD_CD,
        json[i].INTRO_BY_CD,
        json[i].INTRO_MTHD_DESC,
        json[i].INTRO_BY_NAME,
        json[i].CONNECT_SINCE,
        json[i].CUS_STATUS,
        json[i].COM_CODE,
        json[i].PREBRANCH_CODE,
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
    let data: AppFormNew = new AppFormNew(
      json.sale_call_no,
      json.comp_eng_nme,
      json.credit_type,
      json.owner_name,
      json.comp_ent_code,
      json.ownr,
      json.intro_mthd_cd,
      json.intro_by_cd,
      json.intro_mthd_desc,
      json.intro_by_name,
      json.connect_since,
      json.cus_status,
      json.com_code,
      json.prebranch_code,
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
