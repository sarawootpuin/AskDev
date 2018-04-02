/**
 * Created by piradee.bu on 26/12/2560.
 */

/**
 * Created by piradee.bu on 20/12/2560.
 */
export class ScrRetryToReVerify {
  public ent_typ: string;
  public ent_nme: string;
  public run_no: string;
  public ent_cat: string;
  public com_code: string;
  public ref_no: string;
  public ent_cd: string;
  public finish_scr_dt: string;
  public mgr_app_dt: string;
  public ver_type: string;
  public open_session: string;
  public can_retry: string;

  constructor()
  constructor(
    ent_typ: string,
    ent_nme: string,
    run_no: string,
    ent_cat: string,
    com_code: string,
    ref_no: string,
    ent_cd: string,
    finish_scr_dt: string,
    mgr_app_dt: string,
    ver_type: string,
    open_session: string,
    can_retry: string

  )
  constructor(
    ent_typ?: string,
    ent_nme?: string,
    run_no?: string,
    ent_cat?: string,
    com_code?: string,
    ref_no?: string,
    ent_cd?: string,
    finish_scr_dt?: string,
    mgr_app_dt?: string,
    ver_type?: string,
    open_session?: string,
    can_retry?: string

  ){
    this.ent_typ = ent_typ;
    this.ent_nme = ent_nme;
    this.run_no = run_no;
    this.ent_cat = ent_cat;
    this.com_code = com_code;
    this.ref_no = ref_no;
    this.ent_cd = ent_cd;
    this.finish_scr_dt = finish_scr_dt;
    this.mgr_app_dt = mgr_app_dt;
    this.ver_type = ver_type;
    this.open_session = open_session;
    this.can_retry = can_retry;
  }


  static parse(json: any[]) {
    let data: ScrRetryToReVerify[] = [];
    if (json !=null) {
      for (let i = 0; i < json.length; i++) {
        data.push(new ScrRetryToReVerify(
          json[i].ENT_TYP,
          json[i].ENT_NME,
          json[i].RUN_NO,
          json[i].ENT_CAT,
          json[i].COM_CODE,
          json[i].REF_NO,
          json[i].ENT_CD,
          json[i].FINISH_SCR_DT,
          json[i].MGR_APP_DT,
          json[i].VER_TYPE,
          json[i].OPEN_SESSION,
          json[i].CAN_RETRY
        ))
      }
    }
    return data;
  }
}

