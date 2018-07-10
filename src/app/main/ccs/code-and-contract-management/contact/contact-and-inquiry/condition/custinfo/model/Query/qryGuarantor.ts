/**
 * Created by tanapon.sa on 08/05/2561.
 */
/**
 * Created by tanapon.sa on 08/05/2561.
 */
export class qryGuarantorModel {
  public guar_seq:string;
  public guar_code:string;
  public responsibility_level:string;
  public guar_name:string;
  public relation_with_cus:string;
  public upd_crd_grd:string;


  constructor(guar_seq?: string, guar_code?: string, responsibility_level?: string, guar_name?: string, relation_with_cus?: string, upd_crd_grd?: string) {
    this.guar_seq = guar_seq;
    this.guar_code = guar_code;
    this.responsibility_level = responsibility_level;
    this.guar_name = guar_name;
    this.relation_with_cus = relation_with_cus;
    this.upd_crd_grd = upd_crd_grd;
  }

  static parse(json : any[]) {
    let data:qryGuarantorModel[] = [];

    for (let i = 0; i < json.length; i++){
      data.push(new qryGuarantorModel(
        json[i].guar_seq,
        json[i].guar_code,
        json[i].responsibility_level,
        json[i].guar_name,
        json[i].relation_with_cus,
        json[i].upd_crd_grd
      ))
    }

    return data;

  }
}
