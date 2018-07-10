/**
 * Created by tanapon.sa on 21/06/2561.
 */
export class ListExpenseModel {
  public doc_no : any;
  public reqst_dt : any;
  public dtail : any;
  public reqst_amt : any;
  public user_alias_cd : any;
  public req_user : any;
  public type_desc : any;
  public apprve_user : any;
  public apprve_dt : any;


  constructor(doc_no?: any, reqst_dt?: any, dtail?: any, reqst_amt?: any, user_alias_cd?: any,
              req_user?: any, type_desc?: any, apprve_user?: any, apprve_dt?: any) {
    this.doc_no = doc_no;
    this.reqst_dt = reqst_dt;
    this.dtail = dtail;
    this.reqst_amt = reqst_amt;
    this.user_alias_cd = user_alias_cd;
    this.req_user = req_user;
    this.type_desc = type_desc;
    this.apprve_user = apprve_user;
    this.apprve_dt = apprve_dt;
  }

  static parse(json:any[]) {
    let data:ListExpenseModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new ListExpenseModel(
        json[i].doc_no,
        json[i].reqst_dt,
        json[i].dtail,
        json[i].reqst_amt,
        json[i].user_alias_cd,
        json[i].req_user,
        json[i].type_desc,
        json[i].apprve_user,
        json[i].apprve_dt
      ))
    }

    return data;
  }
}
