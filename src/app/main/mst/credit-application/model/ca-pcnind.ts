export class caPcnInd{
  public   ent_code;
  public   new_ind_code;
  public   new_ind_desc;
  public   ind_pcnt;
  public   rmrk;
  public   old_ind_code;
  public   old_ind_desc;
  public   com_code;
  public   sub_id;

  constructor()
  constructor(ent_code, new_ind_code, ind_pcnt, rmrk, old_ind_code, com_code, sub_id)
  constructor(ent_code?, new_ind_code?, ind_pcnt?, rmrk?, old_ind_code?, com_code?, sub_id?) {
    this.ent_code = ent_code;
    this.new_ind_code = new_ind_code;
    this.ind_pcnt = ind_pcnt;
    this.rmrk = rmrk;
    this.old_ind_code = old_ind_code;
    this.com_code = com_code;
    this.sub_id = sub_id;
  }

  static
  parse(json: any[]) {
    let data: caPcnInd[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caPcnInd(
          json[i].ent_code,
          json[i].new_ind_code,
          json[i].ind_pcnt,
          json[i].rmrk,
          json[i].old_ind_code,
          json[i].com_code,
          json[i].sub_id,
        ))
      }
    }
    return data;
  }
}
