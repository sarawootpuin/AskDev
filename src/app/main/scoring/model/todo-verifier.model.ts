/**
 * Created by piradee.bu on 31/08/2560.
 */
export class ToDoVerifierModel {
  constructor(public ver_emp_nme : string,
              public cnt_refno: string,
              public com_code: string,
              public ref_no: string,
              public ent_typ: string,
              public ent_cd: string,
              public mobile_source: string,
              public ent_cat: string,
              public name: string,
              public mkt_snd_dt: string,
              public start_scr_dt: string,
              public run_no: string,
              public cancel_flg: string,
              public wait_mthd
)

  {
  }

  static parse(json: any[]) {
    let data: ToDoVerifierModel[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new ToDoVerifierModel(
        json[i].VER_EMP_NME,
        json[i].CNT_REFNO,
        json[i].COM_CODE,
        json[i].REF_NO,
        json[i].ENT_TYP,
        json[i].ENT_CD,
        json[i].MOBILE_SOURCE,
        json[i].ENT_CAT,
        json[i].NAME,
        json[i].MKT_SND_DT,
        json[i].START_SCR_DT,
        json[i].RUN_NO,
        json[i].CANCEL_FLG,
        json[i].WAIT_MTHD,
      ))
    }

    return data;
  }
}
