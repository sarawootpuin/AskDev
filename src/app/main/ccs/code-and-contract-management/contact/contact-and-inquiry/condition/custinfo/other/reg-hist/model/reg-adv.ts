import {RegAdvSub1} from "./reg-adv-sub1";
export class RegAdv {

  public ds_date;
  public ds_number;
  public ds_amount;
  public regis_amt;
  public advance_amt;
  public service_fee;
  public advance_date;
  public advance_no;
  public cv_num;
  public cv_date;
  public jv_num;
  public jv_date;
  public task_detail;
  public task_head;
  public reg_clear_advance;
  public registration_person;
  public first_name;
  public insouce_outsouce;
  public full_namet;
  public flag_advance;
  public cal_income_amt;
  public cal_over_amt;
  public listAdvSub1 : RegAdvSub1[];

  constructor()

  constructor(ds_date, ds_number, ds_amount, regis_amt, advance_amt, service_fee, advance_date, advance_no,
              cv_num, cv_date, jv_num, jv_date, task_detail, task_head, reg_clear_advance, registration_person,
              first_name, insouce_outsouce, full_namet, flag_advance, cal_income_amt, cal_over_amt,listAdvSub1)

  constructor(ds_date?, ds_number?, ds_amount?, regis_amt?, advance_amt?, service_fee?, advance_date?, advance_no?,
              cv_num?, cv_date?, jv_num?, jv_date?, task_detail?, task_head?, reg_clear_advance?, registration_person?,
              first_name?, insouce_outsouce?, full_namet?, flag_advance?, cal_income_amt?, cal_over_amt?, listAdvSub1?) {

    this.ds_date = ds_date;
    this.ds_number = ds_number;
    this.ds_amount = ds_amount;
    this.regis_amt = regis_amt;
    this.advance_amt = advance_amt;
    this.service_fee = service_fee;
    this.advance_date = advance_date;
    this.advance_no = advance_no;
    this.cv_num = cv_num;
    this.cv_date = cv_date;
    this.jv_num = jv_num;
    this.jv_date = jv_date;
    this.task_detail = task_detail;
    this.task_head = task_head;
    this.reg_clear_advance = reg_clear_advance;
    this.registration_person = registration_person;
    this.first_name = first_name;
    this.insouce_outsouce = insouce_outsouce;
    this.full_namet = full_namet;
    this.flag_advance = flag_advance;
    this.cal_income_amt =  cal_income_amt;
    this.cal_over_amt = cal_over_amt;
    this.listAdvSub1 = listAdvSub1;
  }

  static parse(json: any[]) {
    let data: RegAdv[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new RegAdv(
        json[i].ds_date,
        json[i].ds_number,
        json[i].ds_amount,
        json[i].regis_amt,
        json[i].advance_amt,
        json[i].service_fee,
        json[i].advance_date,
        json[i].advance_no,
        json[i].cv_num,
        json[i].cv_date,
        json[i].jv_num,
        json[i].jv_date,
        json[i].task_detail,
        json[i].task_head,
        json[i].reg_clear_advance,
        json[i].registration_person,
        json[i].first_name,
        json[i].insouce_outsouce,
        json[i].full_namet,
        json[i].flag_advance,
        json[i].cal_income_amt,
        json[i].cal_over_amt,
        RegAdvSub1.parse(json[i].listAdvSub1)
      ))
    }
    return data;
  }


}
