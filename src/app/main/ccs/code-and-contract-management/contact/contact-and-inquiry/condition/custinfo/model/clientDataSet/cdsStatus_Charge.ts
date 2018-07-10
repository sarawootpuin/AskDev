/**
 * Created by tanapon.sa on 04/04/2561.
 */
export class cdsStatus_ChargeModel {
  public cal_old_owner:string;
  public cal_new_owner:string;
  public change_status_dt:string;
  public status_old:string;
  public status_new:string;
  public over_due_inst_trm:string;
  public chnge_ownr_dt:string;
  public stg_ownr_old:string;
  public stg_ownr_new:string;
  public apprv_ownr_old:string;
  public apprv_ownr_old_dt:string;
  public status_chrge_amt:string;
  public legal_chrge_amt:string;
  public repos_chrge_amt:string;
  public apprv_ownr_new:string;
  public ow_old_name:string;
  public ow_new_name:string;
  public ap_old_name:string;
  public ap_new_name:string;
  public reqst_dt:string;


  constructor(cal_old_owner?: string, cal_new_owner?: string, change_status_dt?: string, status_old?: string,
              status_new?: string, over_due_inst_trm?: string, chnge_ownr_dt?: string, stg_ownr_old?: string,
              stg_ownr_new?: string, apprv_ownr_old?: string, apprv_ownr_old_dt?: string, status_chrge_amt?: string,
              legal_chrge_amt?: string, repos_chrge_amt?: string, apprv_ownr_new?: string, ow_old_name?: string,
              ow_new_name?: string, ap_old_name?: string, ap_new_name?: string, reqst_dt?: string) {
    this.cal_old_owner = cal_old_owner;
    this.cal_new_owner = cal_new_owner;
    this.change_status_dt = change_status_dt;
    this.status_old = status_old;
    this.status_new = status_new;
    this.over_due_inst_trm = over_due_inst_trm;
    this.chnge_ownr_dt = chnge_ownr_dt;
    this.stg_ownr_old = stg_ownr_old;
    this.stg_ownr_new = stg_ownr_new;
    this.apprv_ownr_old = apprv_ownr_old;
    this.apprv_ownr_old_dt = apprv_ownr_old_dt;
    this.status_chrge_amt = status_chrge_amt;
    this.legal_chrge_amt = legal_chrge_amt;
    this.repos_chrge_amt = repos_chrge_amt;
    this.apprv_ownr_new = apprv_ownr_new;
    this.ow_old_name = ow_old_name;
    this.ow_new_name = ow_new_name;
    this.ap_old_name = ap_old_name;
    this.ap_new_name = ap_new_name;
    this.reqst_dt = reqst_dt;
  }

  static parse(json : any[]) {
    let data : cdsStatus_ChargeModel[] = [];

    for (let i = 0; i < json.length; i++){
      data.push(new cdsStatus_ChargeModel(
        json[i].CAL_OLD_OWNER,
        json[i].CAL_NEW_OWNER,
        json[i].CHANGE_STATUS_DT,
        json[i].STATUS_OLD,
        json[i].STATUS_NEW,
        json[i].OVER_DUE_INST_TRM,
        json[i].CHNGE_OWNR_DT,
        json[i].STG_OWNR_OLD,
        json[i].APPRV_OWNR_OLD,
        json[i].APPRV_OWNR_OLD_DT,
        json[i].STATUS_CHRGE_AMT,
        json[i].LEGAL_CHRGE_AMT,
        json[i].REPOS_CHRGE_AMT,
        json[i].APPRV_OWNR_NEW,
        json[i].OW_OLD_NAME,
        json[i].OW_NEW_NAME,
        json[i].AP_OLD_NAME,
        json[i].AP_NEW_NAME,
        json[i].REQST_DT
      ))
    }

    return data;
  }
}
