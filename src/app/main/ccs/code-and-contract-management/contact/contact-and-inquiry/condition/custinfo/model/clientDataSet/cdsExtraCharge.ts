/**
 * Created by tanapon.sa on 09/04/2561.
 */
export class cdsExtraChargeModel {
  public reqst_dt:string;
  public reqst_amt:string;
  public user_alias_cd:string;
  public req_user:string;
  public reqst_typ:string;
  public apprve_user:string;
  public apprve_dt:string;


  constructor(reqst_dt?: string, reqst_amt?: string, user_alias_cd?: string, req_user?: string,
              reqst_typ?: string, apprve_user?: string, apprve_dt?: string) {
    this.reqst_dt = reqst_dt;
    this.reqst_amt = reqst_amt;
    this.user_alias_cd = user_alias_cd;
    this.req_user = req_user;
    this.reqst_typ = reqst_typ;
    this.apprve_user = apprve_user;
    this.apprve_dt = apprve_dt;
  }

  static parse(json : any[]) {
    let data : cdsExtraChargeModel[] = [];

    for(let i = 0; i < json.length ; i++) {
      data.push(new cdsExtraChargeModel(
        json[i].REQST_DT,
        json[i].REQST_AMT,
        json[i].USER_ALIAS_CD,
        json[i].REQ_USER,
        json[i].REQST_TYP,
        json[i].APPRVE_USER,
        json[i].APPRVE_DT
      ))
    }

    return data;
  }
}
