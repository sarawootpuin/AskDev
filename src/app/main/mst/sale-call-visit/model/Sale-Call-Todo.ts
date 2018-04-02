/**
 * Created by pongsatorn.an on 15/08/2560.
 */
export class SaleCallTodo{
  private _COM_CODE;
  private _sale_call_no;
  private _card_id;
  private _SEQ_NO;
  private _COMP_ENT_CODE;
  private _TITLE_T;
  private _COMP_THA_NME;
  private _COMP_ENG_NME;
  private _CURRENT_TASK;
  private _MKT_NAME;
  private _DAY_COUNT;
  private _TO_SALE_CALL;
  private _FROM_SALE_CALL;
  private _REJECT_TODO;

  constructor(COM_CODE, sale_call_no, card_id, SEQ_NO, COMP_ENT_CODE, TITLE_T, COMP_THA_NME, COMP_ENG_NME
      , CURRENT_TASK, MKT_NAME, DAY_COUNT, TO_SALE_CALL, FROM_SALE_CALL, REJECT_TODO) {
    this._COM_CODE = COM_CODE;
    this._sale_call_no = sale_call_no;
    this._card_id = card_id;
    this._SEQ_NO = SEQ_NO;
    this._COMP_ENT_CODE = COMP_ENT_CODE;
    this._TITLE_T = TITLE_T;
    this._COMP_THA_NME = COMP_THA_NME;
    this._COMP_ENG_NME = COMP_ENG_NME;
    this._CURRENT_TASK = CURRENT_TASK;
    this._MKT_NAME = MKT_NAME;
    this._DAY_COUNT = DAY_COUNT;
    this._TO_SALE_CALL = TO_SALE_CALL;
    this._FROM_SALE_CALL = FROM_SALE_CALL;
    this._REJECT_TODO = REJECT_TODO;
  }

  get COM_CODE() {
    return this._COM_CODE;
  }

  set COM_CODE(value) {
    this._COM_CODE = value;
  }

  get sale_call_no() {
    return this._sale_call_no;
  }

  set sale_call_no(value) {
    this._sale_call_no = value;
  }

  get card_id() {
    return this._card_id;
  }

  set card_id(value) {
    this._card_id = value;
  }

  get SEQ_NO() {
    return this._SEQ_NO;
  }

  set SEQ_NO(value) {
    this._SEQ_NO = value;
  }

  get COMP_ENT_CODE() {
    return this._COMP_ENT_CODE;
  }

  set COMP_ENT_CODE(value) {
    this._COMP_ENT_CODE = value;
  }

  get TITLE_T() {
    return this._TITLE_T;
  }

  set TITLE_T(value) {
    this._TITLE_T = value;
  }

  get COMP_THA_NME() {
    return this._COMP_THA_NME;
  }

  set COMP_THA_NME(value) {
    this._COMP_THA_NME = value;
  }

  get COMP_ENG_NME() {
    return this._COMP_ENG_NME;
  }

  set COMP_ENG_NME(value) {
    this._COMP_ENG_NME = value;
  }

  get CURRENT_TASK() {
    return this._CURRENT_TASK;
  }

  set CURRENT_TASK(value) {
    this._CURRENT_TASK = value;
  }

  get MKT_NAME() {
    return this._MKT_NAME;
  }

  set MKT_NAME(value) {
    this._MKT_NAME = value;
  }

  get DAY_COUNT() {
    return this._DAY_COUNT;
  }

  set DAY_COUNT(value) {
    this._DAY_COUNT = value;
  }

  get TO_SALE_CALL() {
    return this._TO_SALE_CALL;
  }

  set TO_SALE_CALL(value) {
    this._TO_SALE_CALL = value;
  }

  get FROM_SALE_CALL() {
    return this._FROM_SALE_CALL;
  }

  set FROM_SALE_CALL(value) {
    this._FROM_SALE_CALL = value;
  }

  get REJECT_TODO() {
    return this._REJECT_TODO;
  }

  set REJECT_TODO(value) {
    this._REJECT_TODO = value;
  }

  static parse(json: any[]) {
    let data: SaleCallTodo[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new SaleCallTodo(
        json[i].COM_CODE,
        json[i].sale_call_no,
        json[i].card_id,
        json[i].SEQ_NO,
        json[i].COMP_ENT_CODE,
        json[i].TITLE_T,
        json[i].COMP_THA_NME,
        json[i].COMP_ENG_NME,
        json[i].CURRENT_TASK,
        json[i].MKT_NAME,
        json[i].DAY_COUNT,
        json[i].TO_SALE_CALL,
        json[i].FROM_SALE_CALL,
        json[i].REJECT_TODO
      ))
    }

    return data;
  }

}
