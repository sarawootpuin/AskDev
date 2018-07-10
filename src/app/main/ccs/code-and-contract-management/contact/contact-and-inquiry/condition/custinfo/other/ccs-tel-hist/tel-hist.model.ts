/**
 * Created by tanapon.sa on 28/06/2561.
 */
export class TelHistModel {
  public sub_id : any;
  public from_val : any;
  public to_val : any;
  public upd_dt : any;
  public req_by : any;
  public change_by : any;
  public type : any;
  public ent_code : any;
  public com_code : any;


  constructor(sub_id?: any, from_val?: any, to_val?: any, upd_dt?: any, req_by?: any, change_by?: any, type?: any,
              ent_code?: any, com_code?: any) {
    this.sub_id = sub_id;
    this.from_val = from_val;
    this.to_val = to_val;
    this.upd_dt = upd_dt;
    this.req_by = req_by;
    this.change_by = change_by;
    this.type = type;
    this.ent_code = ent_code;
    this.com_code = com_code;
  }

  static parse(json : any[]) {
    let data: TelHistModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new TelHistModel(
        json[i].sub_id,
        json[i].from_val,
        json[i].to_val,
        json[i].upd_dt,
        json[i].req_by,
        json[i].change_by,
        json[i].type,
        json[i].ent_code,
        json[i].com_code
      ))
    }

    return data;
  }
}
