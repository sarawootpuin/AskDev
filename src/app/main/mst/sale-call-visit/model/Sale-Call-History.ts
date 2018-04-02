/**
 * Created by pongsatorn.an on 24/08/2560.
 */


export class SaleCallHistory {

  private   _sale_call_no        ;
  private   _seq_no             ;
  private   _comp_ent_code     ;
  private   _new_card_no        ;
  private   _sale_call_dt        ;
  private   _call_visit_by      ;
  private   _sale_call_note      ;
  private   _follow_up_point     ;

  constructor(sale_call_no, seq_no, comp_ent_code, new_card_no, sale_call_dt, call_visit_by, sale_call_note, follow_up_point) {
    this._sale_call_no = sale_call_no;
    this._seq_no = seq_no;
    this._comp_ent_code = comp_ent_code;
    this._new_card_no = new_card_no;
    this._sale_call_dt = sale_call_dt;
    this._call_visit_by = call_visit_by;
    this._sale_call_note = sale_call_note;
    this._follow_up_point = follow_up_point;
  }

  get sale_call_no() {
    return this._sale_call_no;
  }

  set sale_call_no(value) {
    this._sale_call_no = value;
  }

  get seq_no() {
    return this._seq_no;
  }

  set seq_no(value) {
    this._seq_no = value;
  }

  get comp_ent_code() {
    return this._comp_ent_code;
  }

  set comp_ent_code(value) {
    this._comp_ent_code = value;
  }

  get new_card_no() {
    return this._new_card_no;
  }

  set new_card_no(value) {
    this._new_card_no = value;
  }

  get sale_call_dt() {
    return this._sale_call_dt;
  }

  set sale_call_dt(value) {
    this._sale_call_dt = value;
  }

  get call_visit_by() {
    return this._call_visit_by;
  }

  set call_visit_by(value) {
    this._call_visit_by = value;
  }

  get sale_call_note() {
    return this._sale_call_note;
  }

  set sale_call_note(value) {
    this._sale_call_note = value;
  }

  get follow_up_point() {
    return this._follow_up_point;
  }

  set follow_up_point(value) {
    this._follow_up_point = value;
  }

  static parse(json: any[]) {
    let data: SaleCallHistory[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new SaleCallHistory(
          json[i].SALE_CALL_NO,
          json[i].SEQ_NO,
          json[i].COMP_ENT_CODE,
          json[i].NEW_CARD_NO,
          json[i].SALE_CALL_DT,
          json[i].CALL_VISIT_BY,
          json[i].SALE_CALL_NOTE,
          json[i].FOLLOW_UP_POINT
        ))
      }
    }
    return data;
  }
}
