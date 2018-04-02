export class caBgApvHist{
public   ca_no;
public   sub_id;
public   apprv_flg;
public   apprv_usr;
public   apprv_dt;
public   rmrk;
public   apprv_type;
public   ca_comment;
public   fullname;


  constructor()
  constructor(ca_no, sub_id, apprv_flg, apprv_usr, apprv_dt, rmrk, apprv_type, ca_comment, fullname)
  constructor(ca_no?, sub_id?, apprv_flg?, apprv_usr?, apprv_dt?, rmrk?, apprv_type?, ca_comment?, fullname?) {
    this.ca_no = ca_no;
    this.sub_id = sub_id;
    this.apprv_flg = apprv_flg;
    this.apprv_usr = apprv_usr;
    this.apprv_dt = apprv_dt;
    this.rmrk = rmrk;
    this.apprv_type = apprv_type;
    this.ca_comment = ca_comment;
    this.fullname = fullname;
  }

  static
  parse(json: any[]) {
    let data: caBgApvHist[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caBgApvHist(
          json[i].ca_no,
          json[i].sub_id,
          json[i].apprv_flg,
          json[i].apprv_usr,
          json[i].apprv_dt,
          json[i].rmrk,
          json[i].apprv_type,
          json[i].ca_comment,
          json[i].fullname
        ))
      }
    }
    return data ;
  }
}
