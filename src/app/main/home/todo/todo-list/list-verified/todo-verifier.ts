/**
 * Created by piradee.bu on 31/08/2560.
 */
export class ToDoVerifier {
  public ver_emp_nme: string;
  public cnt_refno: string;
  public com_code: string;
  public ref_no: string;
  public ent_typ: string;
  public ent_cd: string;
  public mobile_source: string;
  public ent_cat: string;
  public name: string;
  public mkt_snd_dt: string;
  public start_scr_dt: string;
  public run_no: string;
  public cancel_flg: string;
  public wait_mthd: string;

  constructor(VER_EMP_NME, CNT_REFNO, COM_CODE, REF_NO, ENT_TYP, ENT_CD,
              MOBILE_SOURCE, ENT_CAT, NAME, MKT_SND_DT, START_SCR_DT, RUN_NO,
              CANCEL_FLG, WAIT_MTHD) {
    this.ver_emp_nme = VER_EMP_NME;
    this.cnt_refno = CNT_REFNO;
    this.com_code = COM_CODE;
    this.ref_no = REF_NO;
    this.ent_typ = ENT_TYP;
    this.ent_cd = ENT_CD;
    this.mobile_source = MOBILE_SOURCE;
    this.ent_cat = ENT_CAT;
    this.name = NAME;
    this.mkt_snd_dt = MKT_SND_DT;
    this.start_scr_dt = START_SCR_DT;
    this.run_no = RUN_NO;
    this.cancel_flg = CANCEL_FLG;
    this.wait_mthd = WAIT_MTHD;
  }

  static parse(json: any[]) {
    let data: ToDoVerifier[] = [];

    for (let i = 0; i < json.length; i++) {
      if (json[i].CNT_REFNO == "") {
        data.push(new ToDoVerifier(
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
    }

    return data;
  }
}
