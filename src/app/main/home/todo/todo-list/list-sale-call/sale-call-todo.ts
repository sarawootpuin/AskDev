export class SaleCallTodo {
  public COM_CODE;
  public sale_call_no;
  public card_no;
  public SEQ_NO;
  public COMP_ENT_CODE;
  public TITLE_T;
  public COMP_THA_NME;
  public COMP_ENG_NME;
  public CURRENT_TASK;
  public MKT_NAME;
  public DAY_COUNT;
  public TO_SALE_CALL;
  public FROM_SALE_CALL;
  public REJECT_TODO;

  constructor(COM_CODE, sale_call_no, card_no, SEQ_NO, COMP_ENT_CODE, TITLE_T, COMP_THA_NME, COMP_ENG_NME
    , CURRENT_TASK, MKT_NAME, DAY_COUNT, TO_SALE_CALL, FROM_SALE_CALL, REJECT_TODO) {
    this.COM_CODE = COM_CODE;
    this.sale_call_no = sale_call_no;
    this.card_no = card_no;
    this.SEQ_NO = SEQ_NO;
    this.COMP_ENT_CODE = COMP_ENT_CODE;
    this.TITLE_T = TITLE_T;
    this.COMP_THA_NME = COMP_THA_NME;
    this.COMP_ENG_NME = COMP_ENG_NME;
    this.CURRENT_TASK = CURRENT_TASK;
    this.MKT_NAME = MKT_NAME;
    this.DAY_COUNT = DAY_COUNT;
    this.TO_SALE_CALL = TO_SALE_CALL;
    this.FROM_SALE_CALL = FROM_SALE_CALL;
    this.REJECT_TODO = REJECT_TODO;
  }

  static parse(json: any[]) {
    let data: SaleCallTodo[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new SaleCallTodo(
        json[i].COM_CODE,
        json[i].sale_call_no,
        json[i].card_no,
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
