/**
 * Created by tanapon.sa on 19/06/2561.
 */
export class TransferHistModel {
  public no: any;
  public agr_code: any;
  public old_cust_code: any;
  public new_cust_code: any;
  public trnsfr_app_dt: any;
  public at_term: any;
  public amt: any;
  public old_cust: any;
  public new_cust: any;
  public ownr_cd: any;
  public ownr_usr: any;


  constructor(no?: any, agr_code?: any, old_cust_code?: any, new_cust_code?: any, trnsfr_app_dt?: any,
              at_term?: any, amt?: any, old_cust?: any, new_cust?: any, ownr_cd?: any, ownr_usr?: any) {
    this.no = no;
    this.agr_code = agr_code;
    this.old_cust_code = old_cust_code;
    this.new_cust_code = new_cust_code;
    this.trnsfr_app_dt = trnsfr_app_dt;
    this.at_term = at_term;
    this.amt = amt;
    this.old_cust = old_cust;
    this.new_cust = new_cust;
    this.ownr_cd = ownr_cd;
    this.ownr_usr = ownr_usr;
  }

  static parse(json:any[]) {
    let data: TransferHistModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new TransferHistModel(
        json[i].no,
        json[i].agr_code,
        json[i].old_cust_code,
        json[i].new_cust_code,
        json[i].trnsfr_app_dt,
        json[i].at_term,
        json[i].amt,
        json[i].old_cust ,
        json[i].new_cust,
        json[i].ownr_cd,
        json[i].ownr_usr
      ))
    }

    return data;
  }
}
