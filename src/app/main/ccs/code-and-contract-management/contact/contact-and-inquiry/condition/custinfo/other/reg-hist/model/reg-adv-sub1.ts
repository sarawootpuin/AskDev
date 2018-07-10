import {RegAdvSub2} from "./reg-adv-sub2";
export class RegAdvSub1 {

  public clear_advance_date;
  public clear_advance_no;
  public expense_amount1;
  public expense_amount2;
  public advance_no;
  public jv_num;
  public jv_date;
  public current_task;
  public full_namet;
  public flag_advance;
  public listAdvSub2 : RegAdvSub2[];

  constructor()

  constructor(clear_advance_date, clear_advance_no, expense_amount1, expense_amount2, advance_no, jv_num, jv_date,
              current_task, full_namet, flag_advance, listAdvSub2)

  constructor(clear_advance_date?, clear_advance_no?, expense_amount1?, expense_amount2?, advance_no?, jv_num?, jv_date?,
              current_task?, full_namet?, flag_advance?, listAdvSub2?) {

    this.clear_advance_date = clear_advance_date;
    this.clear_advance_no = clear_advance_no;
    this.expense_amount1 = expense_amount1;
    this.expense_amount2 = expense_amount2;
    this.advance_no = advance_no;
    this.jv_num = jv_num;
    this.jv_date = jv_date;
    this.current_task = current_task;
    this.full_namet = full_namet;
    this.flag_advance = flag_advance;
    this.listAdvSub2 = listAdvSub2;
  }

  static parse(json: any[]) {
    let data: RegAdvSub1[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new RegAdvSub1(
        json[i].clear_advance_date,
        json[i].clear_advance_no,
        json[i].expense_amount1,
        json[i].expense_amount2,
        json[i].advance_no,
        json[i].jv_num,
        json[i].jv_date,
        json[i].current_task,
        json[i].full_namet,
        json[i].flag_advance,
        RegAdvSub2.parse(json[i].listAdvSub2)
      ))
    }
    return data;
  }

}
