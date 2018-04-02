export class ListGuarantor {

  public com_code: any;
  public guar_code: any;
  public ref_code: any;
  public remark: any;
  public relation_with_cus: any;
  public seq_no: any;
  public last_usr: any;
  public last_upd: any;
  public input_by: any;
  public input_date: any;
  public ap_no: any;
  public bl_flag: any;
  public title_eng: any;
  public title_thi: any;
  public card_type_desc: any;
  public grp_name: any;
  public bus_ty_desc: any;
  public nationality_code_desc: any;
  public sex_desc: any;
  public status_m_desc: any;
  public card_by: any;
  public new_card_no: any;
  public card_expire_date: any;
  public high: any;
  public authorize_by_e: any;
  public authorize_by_t: any;
  public weight: any;
  public card_issue_date: any;
  public establish_date: any;
  public birth_d: any;
  public l_namet: any;
  public l_namee: any;
  public f_namee: any;
  public f_namet: any;
  public branch_no: any;
  public tel: any;
  public regis_capital: any;
  public salary_per_year: any;
  public blackList: any;

  constructor()
  constructor(com_code: any,
              guar_code: any,
              ref_code: any,
              remark: any,
              relation_with_cus: any,
              seq_no: any,
              last_usr: any,
              last_upd: any,
              input_by: any,
              input_date: any,
              ap_no: any,
              bl_flag: any,
              title_eng: any,
              title_thi: any,
              card_type_desc: any,
              grp_name: any,
              bus_ty_desc: any,
              nationality_code_desc: any,
              sex_desc: any,
              status_m_desc: any,
              card_by: any,
              new_card_no: any,
              card_expire_date: any,
              high: any,
              authorize_by_e: any,
              authorize_by_t: any,
              weight: any,
              card_issue_date: any,
              establish_date: any,
              birth_d: any,
              l_namet: any,
              l_namee: any,
              f_namee: any,
              f_namet: any,
              branch_no: any,
              tel: any,
              regis_capital: any,
              salary_per_year: any,
              blackList: any)
  constructor(com_code ?: any,
              guar_code ?: any,
              ref_code ?: any,
              remark ?: any,
              relation_with_cus ?: any,
              seq_no ?: any,
              last_usr ?: any,
              last_upd ?: any,
              input_by ?: any,
              input_date ?: any,
              ap_no ?: any,
              bl_flag ?: any,
              title_eng ?: any,
              title_thi ?: any,
              card_type_desc ?: any,
              grp_name ?: any,
              bus_ty_desc ?: any,
              nationality_code_desc ?: any,
              sex_desc ?: any,
              status_m_desc ?: any,
              card_by ?: any,
              new_card_no ?: any,
              card_expire_date ?: any,
              high ?: any,
              authorize_by_e ?: any,
              authorize_by_t ?: any,
              weight ?: any,
              card_issue_date ?: any,
              establish_date ?: any,
              birth_d ?: any,
              l_namet ?: any,
              l_namee ?: any,
              f_namee ?: any,
              f_namet ?: any,
              branch_no ?: any,
              tel ?: any,
              regis_capital ?: any,
              salary_per_year ?: any,
              blackList ?: any) {
    this.com_code = com_code;
    this.guar_code = guar_code;
    this.ref_code = ref_code;
    this.remark = remark;
    this.relation_with_cus = relation_with_cus;
    this.seq_no = seq_no;
    this.last_usr = last_usr;
    this.last_upd = last_upd;
    this.input_by = input_by;
    this.input_date = input_date;
    this.ap_no = ap_no;
    this.bl_flag = bl_flag;
    this.title_eng = title_eng;
    this.title_thi = title_thi;
    this.card_type_desc = card_type_desc;
    this.grp_name = grp_name;
    this.bus_ty_desc = bus_ty_desc;
    this.nationality_code_desc = nationality_code_desc;
    this.sex_desc = sex_desc;
    this.status_m_desc = status_m_desc;
    this.card_by = card_by;
    this.new_card_no = new_card_no;
    this.card_expire_date = card_expire_date;
    this.high = high;
    this.authorize_by_e = authorize_by_e;
    this.authorize_by_t = authorize_by_t;
    this.weight = weight;
    this.card_issue_date = card_issue_date;
    this.establish_date = establish_date;
    this.birth_d = birth_d;
    this.l_namet = l_namet;
    this.l_namee = l_namee;
    this.f_namee = f_namee;
    this.f_namet = f_namet;
    this.branch_no = branch_no;
    this.tel = tel;
    this.regis_capital = regis_capital;
    this.salary_per_year = salary_per_year;
    this.blackList = blackList;
  }

  static parse(jsons: any[]) {
    let data: ListGuarantor[] = [];
    for (let json of jsons) {
      data.push(new ListGuarantor(
        json.COM_CODE,
        json.GUAR_CODE,
        json.REF_CODE,
        json.REMARK,
        json.RELATION_WITH_CUS,
        json.SEQ_NO,
        json.LAST_USR,
        json.LAST_UPD,
        json.INPUT_BY,
        json.INPUT_DATE,
        json.AP_NO,
        json.BL_FLAG,
        json.TITLE_ENG,
        json.TITLE_THI,
        json.CARD_TYPE_DESC,
        json.GRP_NAME,
        json.BUS_TY_DESC,
        json.NATIONALITY_CODE_DESC,
        json.SEX_DESC,
        json.STATUS_M_DESC,
        json.CARD_BY,
        json.NEW_CARD_NO,
        json.CARD_EXPIRE_DATE,
        json.HIGH,
        json.AUTHORIZE_BY_E,
        json.AUTHORIZE_BY_T,
        json.WEIGHT,
        json.CARD_ISSUE_DATE,
        json.ESTABLISH_DATE,
        json.BIRTH_D,
        json.L_NAMET,
        json.L_NAMEE,
        json.F_NAMEE,
        json.F_NAMET,
        json.BRANCH_NO,
        json.TEL,
        json.REGIS_CAPITAL,
        json.SALARY_PER_YEAR,
        json.blackList
      ));
    }
    return data;
  }
}
