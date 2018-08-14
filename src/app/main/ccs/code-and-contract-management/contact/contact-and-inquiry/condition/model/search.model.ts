/**
 * Created by tanapon.sa on 04/10/2560.
 */
export class Search {

  constructor(public com_code, public agr_code, public cus_code, public ent_code, public f_namet, public l_namet,
              public new_tr, public ent_type_desc, public cus_name, public card_no, public reg_num, public ref_code, public owner,
              public full_status, public found_agr, public mkt_namet) {
  }

  static parse(json: any[]) {
    let data: Search[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new Search(
        json[i].COM_CODE,
        json[i].AGR_CODE,
        json[i].CUS_CODE,
        json[i].ENT_CODE,
        json[i].F_NAMET,
        json[i].L_NAMET,
        json[i].NEW_TR,
        json[i].ENT_TYPE_DESC,
        json[i].CUS_NAME,
        json[i].CARD_NO,
        json[i].REG_NUM,
        json[i].REF_CODE,
        json[i].OWNER,
        json[i].FULL_STATUS,
        json[i].FOUND_AGR,
        json[i].MKT_NAMET
      ))
    }

    return data;
  }

}
