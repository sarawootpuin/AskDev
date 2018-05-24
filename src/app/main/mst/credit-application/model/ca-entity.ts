import {caCusapv} from "./ca-cusapv";
import {caOpinion} from "./ca-opinion";
import {caCapstore} from "./ca-capstore";
import {caCapOthstore} from "./ca-capothstore";
import {caNationality} from "./ca-nationality";
export class caEntity {

  public com_code;
  public ca_no;
  public ent_type;
  public ent_code;
  public f_name;
  public f_namet;
  public l_namet;
  public f_namee;
  public f_name_e;
  public l_namee;
  public address;
  public zip;
  public post_cd;
  public contract;
  public address_eng;
  public contract_e;
  public tel;
  public new_card_no;
  public last_upd;
  public last_usr;
  public input_user;
  public input_date;
  public nationality_code;
  public birth_d;
  public bus_detail;
  public address_eng2;
  public fax_current;
  public contract_tel;
  public grp_code;
  public mobile_phone;
  public mobile_phone2;
  public mobile_phone3;
  public net_worth_year;
  public net_worth_amt;
  public regis_capital;
  public paid_up_capital;
  public cluster_ind;
  public add_c;
  public add_c_eng;
  public add_c_eng2;
  public add_m;
  public add_m_eng;
  public add_m_eng2;
  public add_o;
  public add_o_eng;
  public add_o_eng2;
  public address_cont_cs;
  public ages;
  public authorize_by_e;
  public authorize_by_t;
  public branch_no;
  public bus_ty;
  public bus_vat_flg;
  public business_type;
  public card_by;
  public card_expire_date;
  public card_issue_date;
  public card_no;
  public card_type;
  public chairman;
  public confirm_statment_flg;
  public currency_code;
  public email_address;
  public ent_ty;
  public establish_date;
  public fax_office;
  public high;
  public highest;
  public highest_hp;
  public highest_ls;
  public ind_ty;
  public loc_ty;
  public mkt_bgpl;
  public mname;
  public near;
  public near_eng;
  public near_o;
  public near_o_eng;
  public occupa;
  public office_department;
  public office_name;
  public other_income;
  public person_collect_billing;
  public place_billing;
  public place_collect;
  public posi;
  public post_cd_c;
  public post_cd_m;
  public post_cd_o;
  public prv_cont;
  public salary_per_year;
  public sales_amt;
  public sales_year;
  public sex;
  public spous_ages;
  public spous_occup;
  public spous_office_department;
  public spous_office_name;
  public spous_other_income;
  public spous_posi;
  public spous_salary;
  public spous_tel;
  public spouse_card_no;
  public spouse_card_type;
  public status_m;
  public tel_card;
  public tel_o;
  public web_site;
  public weight;
  public zip_c;
  public zip_m;
  public zip_o;
  public title_eng;
  public title_thi;
  public card_type_desc;
  public bus_detail_desc;
  public zip_desc;
  public grp_name;
  public bus_ty_desc;
  public regis_capital_mb;
  public paid_up_capital_mb;
  public sales_amt_mb;
  public net_worth_amt_mb;
  public zip_c_desc;
  public zip_o_desc;
  public zip_m_desc;

  public ap_no;
  public sale_call_no;

  public listcapstore :caCapstore[] ;
  public listcusapv : caCusapv[] ;
  public listopinion : caOpinion[] ;
  public listcapothstore : caCapOthstore[];
  public listentitynation : caNationality[];

  constructor()
  constructor(com_code, ca_no, ent_type, ent_code, f_name, f_namet, l_namet, f_namee, f_name_e, l_namee, address, zip, post_cd, contract, address_eng, contract_e, tel, new_card_no, last_upd, last_usr, input_user, input_date, nationality_code, birth_d, bus_detail, address_eng2, fax_current, contract_tel, grp_code, mobile_phone, mobile_phone2, mobile_phone3, net_worth_year, net_worth_amt, regis_capital, paid_up_capital, cluster_ind, add_c, add_c_eng, add_c_eng2, add_m, add_m_eng, add_m_eng2, add_o, add_o_eng, add_o_eng2, address_cont_cs, ages, authorize_by_e, authorize_by_t, branch_no, bus_ty, bus_vat_flg, business_type, card_by, card_expire_date, card_issue_date, card_no, card_type, chairman, confirm_statment_flg, currency_code, email_address, ent_ty, establish_date, fax_office, high, highest, highest_hp, highest_ls, ind_ty, loc_ty, mkt_bgpl, mname, near, near_eng, near_o, near_o_eng, occupa, office_department, office_name, other_income, person_collect_billing, place_billing, place_collect, posi, post_cd_c, post_cd_m, post_cd_o, prv_cont, salary_per_year, sales_amt, sales_year, sex, spous_ages, spous_occup, spous_office_department, spous_office_name, spous_other_income, spous_posi, spous_salary, spous_tel, spouse_card_no, spouse_card_type, status_m, tel_card, tel_o, web_site, weight, zip_c, zip_m, zip_o, title_eng, title_thi, card_type_desc, bus_detail_desc, zip_desc, grp_name, bus_ty_desc, regis_capital_mb, paid_up_capital_mb, sales_amt_mb, net_worth_amt_mb, zip_c_desc, zip_o_desc, zip_m_desc
             ,ap_no,sale_call_no
             ,listcapstore,listcusapv,listopinion,listcapothstore,listNation)
  constructor(com_code?, ca_no?, ent_type?, ent_code?, f_name?, f_namet?, l_namet?, f_namee?, f_name_e?, l_namee?, address?, zip?, post_cd?, contract?, address_eng?, contract_e?, tel?, new_card_no?, last_upd?, last_usr?, input_user?, input_date?, nationality_code?, birth_d?, bus_detail?, address_eng2?, fax_current?, contract_tel?, grp_code?, mobile_phone?, mobile_phone2?, mobile_phone3?, net_worth_year?, net_worth_amt?, regis_capital?, paid_up_capital?, cluster_ind?, add_c?, add_c_eng?, add_c_eng2?, add_m?, add_m_eng?, add_m_eng2?, add_o?, add_o_eng?, add_o_eng2?, address_cont_cs?, ages?, authorize_by_e?, authorize_by_t?, branch_no?, bus_ty?, bus_vat_flg?, business_type?, card_by?, card_expire_date?, card_issue_date?, card_no?, card_type?, chairman?, confirm_statment_flg?, currency_code?, email_address?, ent_ty?, establish_date?, fax_office?, high?, highest?, highest_hp?, highest_ls?, ind_ty?, loc_ty?, mkt_bgpl?, mname?, near?, near_eng?, near_o?, near_o_eng?, occupa?, office_department?, office_name?, other_income?, person_collect_billing?, place_billing?, place_collect?, posi?, post_cd_c?, post_cd_m?, post_cd_o?, prv_cont?, salary_per_year?, sales_amt?, sales_year?, sex?, spous_ages?, spous_occup?, spous_office_department?, spous_office_name?, spous_other_income?, spous_posi?, spous_salary?, spous_tel?, spouse_card_no?, spouse_card_type?, status_m?, tel_card?, tel_o?, web_site?, weight?, zip_c?, zip_m?, zip_o?, title_eng?, title_thi?, card_type_desc?, bus_detail_desc?, zip_desc?, grp_name?, bus_ty_desc?, regis_capital_mb?, paid_up_capital_mb?, sales_amt_mb?, net_worth_amt_mb?, zip_c_desc?, zip_o_desc?, zip_m_desc?
             ,ap_no = '',sale_call_no = ''
              ,listcapstore?,listcusapv?,listopinion?,listcapothstore?,listentitynation?)
  {
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
    this.ap_no = ap_no ;
    this.sale_call_no = sale_call_no ;
    this.listcapstore = listcapstore;
    this.listcusapv = listcusapv;
    this.listopinion  = listopinion ;
    this.listcapothstore = listcapothstore ;
    this.listentitynation =listentitynation;
  }

  static parse(json: any) {
    let data ;

    if (!json) { data = new caEntity()  }
    else {
      data = new caEntity(
        json.com_code,
        json.ca_no,
        json.ent_type,
        json.ent_code,
        json.f_name,
        json.f_namet,
        json.l_namet,
        json.f_namee,
        json.f_name_e,
        json.l_namee,
        json.address,
        json.zip,
        json.post_cd,
        json.contract,
        json.address_eng,
        json.contract_e,
        json.tel,
        json.new_card_no,
        json.last_upd,
        json.last_usr,
        json.input_user,
        json.input_date,
        json.nationality_code,
        json.birth_d,
        json.bus_detail,
        json.address_eng2,
        json.fax_current,
        json.contract_tel,
        json.grp_code,
        json.mobile_phone,
        json.mobile_phone2,
        json.mobile_phone3,
        json.net_worth_year,
        json.net_worth_amt,
        json.regis_capital,
        json.paid_up_capital,
        json.cluster_ind,
        json.add_c,
        json.add_c_eng,
        json.add_c_eng2,
        json.add_m,
        json.add_m_eng,
        json.add_m_eng2,
        json.add_o,
        json.add_o_eng,
        json.add_o_eng2,
        json.address_cont_cs,
        json.ages,
        json.authorize_by_e,
        json.authorize_by_t,
        json.branch_no,
        json.bus_ty,
        json.bus_vat_flg,
        json.business_type,
        json.card_by,
        json.card_expire_date,
        json.card_issue_date,
        json.card_no,
        json.card_type,
        json.chairman,
        json.confirm_statment_flg,
        json.currency_code,
        json.email_address,
        json.ent_ty,
        json.establish_date,
        json.fax_office,
        json.high,
        json.highest,
        json.highest_hp,
        json.highest_ls,
        json.ind_ty,
        json.loc_ty,
        json.mkt_bgpl,
        json.mname,
        json.near,
        json.near_eng,
        json.near_o,
        json.near_o_eng,
        json.occupa,
        json.office_department,
        json.office_name,
        json.other_income,
        json.person_collect_billing,
        json.place_billing,
        json.place_collect,
        json.posi,
        json.post_cd_c,
        json.post_cd_m,
        json.post_cd_o,
        json.prv_cont,
        json.salary_per_year,
        json.sales_amt,
        json.sales_year,
        json.sex,
        json.spous_ages,
        json.spous_occup,
        json.spous_office_department,
        json.spous_office_name,
        json.spous_other_income,
        json.spous_posi,
        json.spous_salary,
        json.spous_tel,
        json.spouse_card_no,
        json.spouse_card_type,
        json.status_m,
        json.tel_card,
        json.tel_o,
        json.web_site,
        json.weight,
        json.zip_c,
        json.zip_m,
        json.zip_o,
        json.title_eng,
        json.title_thi,
        json.card_type_desc,
        json.bus_detail_desc,
        json.zip_desc,
        json.grp_name,
        json.bus_ty_desc,
        json.regis_capital_mb,
        json.paid_up_capital_mb,
        json.sales_amt_mb,
        json.net_worth_amt_mb,
        json.zip_c_desc,
        json.zip_o_desc,
        json.zip_m_desc,
        json.ap_no,
        json.sale_call_no,
        caCapstore.parse(json.listcapstore),
        caCusapv.parse(json.listcusapv),
        caOpinion.parse(json.listopinion),
        caCapOthstore.parse(json.listcapothstore),
        caNationality.parse(json.listentitynation)
      )
    }
    return data ;

  }
}
