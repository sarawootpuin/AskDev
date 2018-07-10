/**
 * Created by tanapon.sa on 21/06/2561.
 */
export class RegSuspendedModel {
  public no : any;
  public reg_num : any;
  public reg_date : any;
  public reg_exp : any;
  public suspend_date : any;
  public name_input : any;
  public cancel_suspend_date : any;
  public name_cancel : any;
  public status : any;
  public last_upd : any;
  public remark : any;
  public purpose : any;
  public last_user : any;
  public control_no : any;
  public input_date : any;
  public cancel_date : any;


  constructor(no?: any, reg_num?: any, reg_date?: any, reg_exp?: any, suspend_date?: any, name_input?: any,
              cancel_suspend_date?: any, name_cancel?: any, status?: any, last_upd?: any, remark?: any,
              purpose?: any, last_user?: any, control_no?: any, input_date?: any, cancel_date?: any) {
    this.no = no;
    this.reg_num = reg_num;
    this.reg_date = reg_date;
    this.reg_exp = reg_exp;
    this.suspend_date = suspend_date;
    this.name_input = name_input;
    this.cancel_suspend_date = cancel_suspend_date;
    this.name_cancel = name_cancel;
    this.status = status;
    this.last_upd = last_upd;
    this.remark = remark;
    this.purpose = purpose;
    this.last_user = last_user;
    this.control_no = control_no;
    this.input_date = input_date;
    this.cancel_date = cancel_date;

  }

  static parse(json:any[]) {
    let data:RegSuspendedModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new RegSuspendedModel(
        json[i].no,
        json[i].reg_num,
        json[i].reg_date,
        json[i].reg_exp,
        json[i].suspend_date,
        json[i].name_input,
        json[i].cancel_suspend_date,
        json[i].name_cancel,
        json[i].status,
        json[i].last_upd,
        json[i].remark,
        json[i].purpose,
        json[i].last_user,
        json[i].control_no,
        json[i].input_date,
        json[i].cancel_date
      ))
    }

    return data;
  }
}
