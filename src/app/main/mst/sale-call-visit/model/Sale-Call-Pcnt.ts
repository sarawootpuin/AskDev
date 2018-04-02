/**
 * Created by pongsatorn.an on 09/11/2560.
 */
export class SaleCallPcnt{
  public   ent_code;
  public   new_ind_code;
  public   ind_pcnt;
  public   rmrk;
  public   xold_ind_code;
  public   com_code;
  public   sub_id;
  public   input_user;
  public   last_update;
  public   sale_call_no;
  public   new_ind_decs;
  public   old_ind_decs;

  constructor()
  constructor(ent_code, new_ind_code, ind_pcnt, rmrk, xold_ind_code, com_code, sub_id, input_user, last_update, sale_call_no, new_ind_decs, old_ind_decs)
  constructor(ent_code?, new_ind_code?, ind_pcnt?, rmrk?, xold_ind_code?, com_code?, sub_id?, input_user?, last_update?, sale_call_no?, new_ind_decs?, old_ind_decs?)
  {  this.ent_code = ent_code;
    this.new_ind_code = new_ind_code;
    this.ind_pcnt = ind_pcnt;
    this.rmrk = rmrk;
    this.xold_ind_code = xold_ind_code;
    this.com_code = com_code;
    this.sub_id = sub_id;
    this.input_user = input_user;
    this.last_update = last_update;
    this.sale_call_no = sale_call_no;
    this.new_ind_decs = new_ind_decs;
    this.old_ind_decs = old_ind_decs;
  }

  static parse(json: any[]) {
    let data: SaleCallPcnt[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new SaleCallPcnt(
          json[i].ent_code,
          json[i].new_ind_code,
          json[i].ind_pcnt,
          json[i].rmrk,
          json[i].xold_ind_code,
          json[i].com_code,
          json[i].sub_id,
          json[i].input_user,
          json[i].last_update,
          json[i].sale_call_no,
          json[i].new_ind_decs,
          json[i].old_ind_decs
        ))
      }
    }
    return data;
  }

}
