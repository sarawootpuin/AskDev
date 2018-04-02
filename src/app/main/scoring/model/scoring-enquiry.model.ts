/**
 * Created by piradee.bu on 20/12/2560.
 */
export class ScrEnquiry {
  public source: string;
  public run_no: string;
  public com: string;
  public ref_no: string;
  public ent_typ: string;
  public ent_nme: string;
  public ver_emp_no: string;
  public ent_cd: string;
  public stg: string;
  public finish_flg: string;
  public scr_date: string;
  public indv_jrstc: string;
  public ver_opn: string;
  public cancel_flg: string;
  public mkt_snd_dt: string;


  constructor()
  constructor(
    source: string,
    run_no: string,
    com: string,
    ref_no: string,
    ent_typ: string,
    ent_nme: string,
    ver_emp_no: string,
    ent_cd: string,
    stg: string,
    finish_flg: string,
    scr_date: string,
    indv_jrstc: string,
    ver_opn: string,
    cancel_flg: string,
    mkt_snd_dt: string
  )
  constructor(
    source?: string,
    run_no?: string,
    com?: string,
    ref_no?: string,
    ent_typ?: string,
    ent_nme?: string,
    ver_emp_no?: string,
    ent_cd?: string,
    stg?: string,
    finish_flg?: string,
    scr_date?: string,
    indv_jrstc?: string,
    ver_opn?: string,
    cancel_flg?: string,
    mkt_snd_dt?: string,

  ){
    this.source = source;
    this.run_no = run_no;
    this.com = com;
    this.ref_no = ref_no;
    this.ent_typ = ent_typ;
    this.ent_nme = ent_nme;
    this.ver_emp_no = ver_emp_no;
    this.ent_cd = ent_cd;
    this.stg = stg;
    this.finish_flg = finish_flg;
    this.scr_date = scr_date;
    this.indv_jrstc = indv_jrstc;
    this.ver_opn = ver_opn;
    this.cancel_flg = cancel_flg;
    this.mkt_snd_dt = mkt_snd_dt;
  }


  static parse(json: any[]) {
    let data: ScrEnquiry[] = [];
    if (json !=null) {
      for (let i = 0; i < json.length; i++) {
        data.push(new ScrEnquiry(
          json[i].SOURCE,
          json[i].RUN_NO,
          json[i].COM,
          json[i].REF_NO,
          json[i].ENT_TYP,
          json[i].ENT_NME,
          json[i].VER_EMP_NO,
          json[i].ENT_CD,
          json[i].STG,
          json[i].FINISH_FLG,
          json[i].SCR_DATE,
          json[i].INDV_JRSTC,
          json[i].VER_OPN,
          json[i].CANCEL_FLG,
          json[i].MKT_SND_DT

        ))
        if((i % 20000)==0) {
          console.log("record"+i)
        }
      }
    }
    return data;
  }
}
