/**
 * Created by tanapon.sa on 25/04/2561.
 */
export class cdsFollow_UpModel {
  public fol_flag_desc: string;
  public fol_s_flag_desc: string;
  public fol_to_desc: string;
  public fol_by_desc: string;
  public fol_place_desc: string;
  public appmnt_dt: string;
  public add_addr_desc: string;
  public action_dt: string;
  public input_user: string;
  public last_upd: string;
  public upd_user: string;
  public topic_cntct_oth: string;
  public fol_to_oth: string;
  public fol_by_oth: string;
  public fol_place_oth: string;
  public appmnt_topic: string;
  public add_addr: string;
  public appmnt_dtel: string;
  public conf_flg: string;
  public sub_id: string;


  constructor(fol_flag_desc?: string, fol_s_flag_desc?: string, fol_to_desc?: string, fol_by_desc?: string, fol_place_desc?: string, appmnt_dt?: string,
              add_addr_desc?: string, action_dt?: string, input_user?: string, last_upd?: string, upd_user?: string,
              topic_cntct_oth?: string, fol_to_oth?: string, fol_by_oth?: string, fol_place_oth?: string,
              appmnt_topic?: string, add_addr?: string, appmnt_dtel?: string, conf_flg?: string, sub_id?: string) {
    this.fol_flag_desc = fol_flag_desc;
    this.fol_s_flag_desc = fol_s_flag_desc;
    this.fol_to_desc = fol_to_desc;
    this.fol_by_desc = fol_by_desc;
    this.fol_place_desc = fol_place_desc;
    this.appmnt_dt = appmnt_dt;
    this.add_addr_desc = add_addr_desc;
    this.action_dt = action_dt;
    this.input_user = input_user;
    this.last_upd = last_upd;
    this.upd_user = upd_user;
    this.topic_cntct_oth = topic_cntct_oth;
    this.fol_to_oth = fol_to_oth;
    this.fol_by_oth = fol_by_oth;
    this.fol_place_oth = fol_place_oth;
    this.appmnt_topic = appmnt_topic;
    this.add_addr = add_addr;
    this.appmnt_dtel = appmnt_dtel;
    this.conf_flg = conf_flg;
    this.sub_id = sub_id;
  }

  static parse(json : any[]) {
    let data: cdsFollow_UpModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new cdsFollow_UpModel(
        json[i].FOL_FLAG_DESC,
        json[i].FOL_S_FLAG_DESC,
        json[i].FOL_TO_DESC,
        json[i].FOL_BY_DESC,
        json[i].FOL_PLACE_DESC,
        json[i].APPMNT_DT,
        json[i].ADD_ADDR_DESC,
        json[i].ACTION_DT,
        json[i].INPUT_USER,
        json[i].LAST_UPD,
        json[i].UPD_USER,
        json[i].TOPIC_CNTCT_OTH,
        json[i].FOL_TO_OTH,
        json[i].FOL_BY_OTH,
        json[i].FOL_PLACE_OTH,
        json[i].APPMNT_TOPIC,
        json[i].ADD_ADDR,
        json[i].APPMNT_DTEL,
        json[i].CONF_FLG,
        json[i].SUB_ID
      ))
    }

    return data;
  }
}
