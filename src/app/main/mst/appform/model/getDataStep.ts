/**
 * Created by peerawat.ko on 27/09/2560.
 */
export class ListStep {
  public ap_no: any;
  public sub_id: any;
  public sub_id2: any;
  public due_day: any;
  public from_term: any;
  public to_term: any;
  public inst_e_vat: any;
  public interval: any;
  public inst_vat: any;

  constructor()
  constructor(ap_no: any,
              sub_id: any,
              sub_id2: any,
              due_day: any,
              from_term: any,
              to_term: any,
              inst_e_vat: any,
              interval: any,
              inst_vat: any)
  constructor(ap_no ?: any,
              sub_id ?: any,
              sub_id2 ?: any,
              due_day ?: any,
              from_term ?: any,
              to_term ?: any,
              inst_e_vat ?: any,
              interval ?: any,
              inst_vat ?: any,) {
    this.ap_no = ap_no;
    this.sub_id = sub_id;
    this.sub_id2 = sub_id2;
    this.due_day = due_day;
    this.from_term = from_term;
    this.to_term = to_term;
    this.inst_e_vat = inst_e_vat;
    this.interval = interval;
    this.inst_vat = inst_vat;
  }

  static parse(jsons: any[]) {
    let data: ListStep[] = [];
    for (let json of jsons) {
      data.push(new ListStep(
        json.AP_NO,
        json.SUB_ID,
        json.SUB_ID2,
        json.DUE_DAY,
        json.FROM_TERM,
        json.TO_TERM,
        json.INST_E_VAT,
        json.INTERVAL,
        json.INST_VAT
      ))
    }
    return data;
  }
}
