import {DropdownModel} from "./dropdown.model";
import {ScrSubjModel} from "./scrsubject.model";
import {ScrCorp} from "./scrcorp.model";
/**
 * Created by piradee.bu on 24/08/2560.
 */
export class MainTabModel {
  public  run_no: string ;
  public  ent_typ: string ;
  public  scr_dt;
  public  com_code: string ;
  public  mkt_emp_no: string ;
  public  ver_emp_no: string ;
  public  ent_nme: string ;
  public  spus_nme: string ;
  public  ver_mthd: string ;
  public  home_tel: string ;
  public  offce_tel: string ;
  public  moble_tel: string ;
  public  home_tel_rsult: string ;
  public  offce_tel_rsult: string ;
  public  moble_tel_rsult: string ;
  public  visit_cd: string ;
  public  visit_rsult: string ;
  public  ngbhd: string ;
  public  home_addr_crrct_cd: string ;
  public  offce_addr_crrct_cd: string ;
  public  ask_rec_cd: string ;
  public  ask_rec_dtel: string ;
  public  ncb_rec_cd: string ;
  public  ncb_rec_dtel: string ;
  public  trce_rec_cd: string ;
  public  trce_rec_dtel: string ;
  public  ownr_home_tel: string ;
  public  last_usr: string ;
  public  last_upd: string ;
  public  ref_no: string ;
  public  ver_mthd_more: string ;
  public  in_out: string ;
  public  prod_cd: string ;
  public  ent_cd: string ;
  public  conf_submit: string ;
  public  prim_scr: string ;
  public  ent_cat: string ;
  public  relsn: string ;
  public  rev_dtel: string ;
  public  pmnt_grdng: string ;
  public  finish_scr_dt ;
  public  hd_app_dt: string ;
  public  mgr_app_dt: string ;
  public  prim_scr_rsult: string ;
  public  pmnt_grdng_agr_code: string ;
  public  pmnt_grdng_asof ;
  public  ver_opn: string ;
  public  ori_prim_scr: string ;
  public  ori_prim_scr_rsult: string ;
  public  hd_app_by: string ;
  public  mgr_app_by: string ;
  public  no_submit: string ;
  public  wait_mthd: string ;
  public  no_reject: string ;
  public  ver_emp_no_2: string;
  public  listWaitMthd: DropdownModel[] ;
  public  list_ver_mthd: DropdownModel[] ;
  public  list_in_out: DropdownModel[] ;
  public  list_visit_cd: DropdownModel[];
  public  list_ask_rec_cd: DropdownModel[];
  public  list_trec_rec_cd: DropdownModel[];
  public  list_ncb_rec_cd: DropdownModel[];
  public  list_offce_addr_crrct_cd: DropdownModel[];
  public  list_home_addr_crrct_cd: DropdownModel[];
  public  list_product_cd: DropdownModel[];
  public  listTabScrSubj: ScrSubjModel[];
  public  list_ver_emp_no: DropdownModel[];
  public  device : string;
  public  userName : string;
  public  stg_id :string;
  public  list_scr_corp: ScrCorp[];
  public  cust_name_display:string;
  public  id_card:string;

  constructor()
  constructor(
        run_no: string ,
        ent_typ: string ,
        scr_dt ,
        com_code: string ,
        mkt_emp_no: string ,
        ver_emp_no: string ,

        ent_nme: string ,
        spus_nme: string ,
        ver_mthd: string ,
        home_tel: string ,
        offce_tel: string ,
        moble_tel: string ,
        home_tel_rsult: string ,
        offce_tel_rsult: string ,
        moble_tel_rsult: string ,
        visit_cd: string ,
        visit_rsult: string ,
        ngbhd: string ,
        home_addr_crrct_cd: string ,
        offce_addr_crrct_cd: string ,
        ask_rec_cd: string ,
        ask_rec_dtel: string ,
        ncb_rec_cd: string ,
        ncb_rec_dtel: string ,
        trce_rec_cd: string ,
        trce_rec_dtel: string ,
        ownr_home_tel: string ,
        last_usr: string ,
        last_upd: string ,
        ref_no: string ,
        ver_mthd_more: string ,
        in_out: string ,
        prod_cd: string ,
        ent_cd: string ,
        conf_submit: string ,
        prim_scr: string ,
        ent_cat: string ,
        relsn: string ,
        rev_dtel: string ,
        pmnt_grdng: string ,
        finish_scr_dt ,
        hd_app_dt: string ,
        mgr_app_dt: string ,
        prim_scr_rsult: string ,
        pmnt_grdng_agr_code: string ,
        pmnt_grdng_asof ,
        ver_opn: string ,
        ori_prim_scr: string ,
        ori_prim_scr_rsult: string ,
        hd_app_by: string ,
        mgr_app_by: string ,
        no_submit: string ,
        wait_mthd: string ,
        no_reject: string ,
        ver_emp_no_2: string,
        listWaitMthd: DropdownModel[],
        list_ver_mthd: DropdownModel[],
        list_in_out: DropdownModel[],
        list_visit_cd: DropdownModel[],
        list_ask_rec_cd: DropdownModel[],
        list_trec_rec_cd: DropdownModel[],
        list_ncb_rec_cd: DropdownModel[],
        list_offce_addr_crrct_cd: DropdownModel[],
        list_home_addr_crrct_cd: DropdownModel[],
        list_product_cd: DropdownModel[],
        listTabScrSubj: ScrSubjModel[],
        list_ver_emp_no: DropdownModel[],
        device:string,
        userName:string,
        stg_id:string,
        list_scr_corp:ScrCorp[],
        cust_name_display:string,
        id_card:string,
)
   constructor(
     run_no ?: string,
     ent_typ ?: string,
     scr_dt ?,
     com_code ?: string,
     mkt_emp_no ?: string,
     ver_emp_no ?: string,
     ent_nme ?: string,
     spus_nme ?: string,
     ver_mthd ?: string,
     home_tel ?: string,
     offce_tel ?: string,
     moble_tel ?: string,
     home_tel_rsult ?: string,
     offce_tel_rsult ?: string,
     moble_tel_rsult ?: string,
     visit_cd ?: string,
     visit_rsult ?: string,
     ngbhd ?: string,
     home_addr_crrct_cd ?: string,
     offce_addr_crrct_cd ?: string,
     ask_rec_cd ?: string,
     ask_rec_dtel ?: string,
     ncb_rec_cd ?: string,
     ncb_rec_dtel ?: string,
     trce_rec_cd ?: string,
     trce_rec_dtel ?: string,
     ownr_home_tel ?: string,
     last_usr ?: string,
     last_upd ?: string,
     ref_no ?: string,
     ver_mthd_more ?: string,
     in_out ?: string,
     prod_cd ?: string,
     ent_cd ?: string,
     conf_submit ?: string,
     prim_scr ?: string,
     ent_cat ?: string,
     relsn ?: string,
     rev_dtel ?: string,
     pmnt_grdng ?: string,
     finish_scr_dt ?,
     hd_app_dt ?: string,
     mgr_app_dt ?: string,
     prim_scr_rsult ?: string,
     pmnt_grdng_agr_code ?: string,
     pmnt_grdng_asof ?,
     ver_opn ?: string,
     ori_prim_scr ?: string,
     ori_prim_scr_rsult ?: string,
     hd_app_by ?: string,
     mgr_app_by ?: string,
     no_submit ?: string,
     wait_mthd ?: string,
     no_reject ?: string,
     ver_emp_no_2 ?: string,
     listWaitMthd ?: DropdownModel[],
     list_ver_mthd ?: DropdownModel[],
     list_in_out ?: DropdownModel[],
     list_visit_cd ?: DropdownModel[],
     list_ask_rec_cd ?: DropdownModel[],
     list_trec_rec_cd ?: DropdownModel[],
     list_ncb_rec_cd ?: DropdownModel[],
     list_offce_addr_crrct_cd ?: DropdownModel[],
     list_home_addr_crrct_cd ?: DropdownModel[],
     list_product_cd ?: DropdownModel[],
     listTabScrSubj ?: ScrSubjModel[],
     list_ver_emp_no ?: DropdownModel[],
     device?:string,
     userName?:string,
     stg_id?:string,
     list_scr_corp?:ScrCorp[],
     cust_name_display?:string,
     id_card?:string,
   )
  {
    this.run_no =run_no;
    this.ent_typ =ent_typ;
    this.scr_dt =scr_dt;
    this.com_code =com_code;
    this.mkt_emp_no =mkt_emp_no;
    this.ver_emp_no =ver_emp_no;
    this.ent_nme =ent_nme;
    this.spus_nme =spus_nme;
    this.ver_mthd =ver_mthd;
    this.home_tel =home_tel;
    this.offce_tel =offce_tel;
    this.moble_tel =moble_tel;
    this.home_tel_rsult =home_tel_rsult;
    this.offce_tel_rsult =offce_tel_rsult;
    this.moble_tel_rsult =moble_tel_rsult;
    this.visit_cd =visit_cd;
    this.visit_rsult =visit_rsult;
    this.ngbhd =ngbhd;
    this.home_addr_crrct_cd =home_addr_crrct_cd;
    this.offce_addr_crrct_cd =offce_addr_crrct_cd;
    this.ask_rec_cd =ask_rec_cd;
    this.ask_rec_dtel =ask_rec_dtel;
    this.ncb_rec_cd =ncb_rec_cd;
    this.ncb_rec_dtel =ncb_rec_dtel;
    this.trce_rec_cd =trce_rec_cd;
    this.trce_rec_dtel =trce_rec_dtel;
    this.ownr_home_tel =ownr_home_tel;
    this.last_usr =last_usr;
    this.last_upd =last_upd;
    this.ref_no =ref_no;
    this.ver_mthd_more =ver_mthd_more;
    this.in_out =in_out;
    this.prod_cd =prod_cd;
    this.ent_cd =ent_cd;
    this.conf_submit =conf_submit;
    this.prim_scr =prim_scr;
    this.ent_cat =ent_cat;
    this.relsn =relsn;
    this.rev_dtel =rev_dtel;
    this.pmnt_grdng =pmnt_grdng;
    this.finish_scr_dt =finish_scr_dt;
    this.hd_app_dt =hd_app_dt;
    this.mgr_app_dt =mgr_app_dt;
    this.prim_scr_rsult =prim_scr_rsult;
    this.pmnt_grdng_agr_code =pmnt_grdng_agr_code;
    this.pmnt_grdng_asof =pmnt_grdng_asof;
    this.ver_opn =ver_opn;
    this.ori_prim_scr =ori_prim_scr;
    this.ori_prim_scr_rsult =ori_prim_scr_rsult;
    this.hd_app_by =hd_app_by;
    this.mgr_app_by =mgr_app_by;
    this.no_submit =no_submit;
    this.wait_mthd =wait_mthd;
    this.no_reject =no_reject;
    this.ver_emp_no_2 =ver_emp_no_2;
    this.listWaitMthd =listWaitMthd;
    this.list_ver_mthd =list_ver_mthd;
    this.list_in_out =list_in_out;
    this.list_visit_cd =list_visit_cd;
    this.list_ask_rec_cd =list_ask_rec_cd;
    this.list_trec_rec_cd =list_trec_rec_cd;
    this.list_ncb_rec_cd =list_ncb_rec_cd;
    this.list_offce_addr_crrct_cd =list_offce_addr_crrct_cd;
    this.list_home_addr_crrct_cd =list_home_addr_crrct_cd;
    this.list_product_cd =list_product_cd;
    this.listTabScrSubj =listTabScrSubj;
    this.list_ver_emp_no = list_ver_emp_no;
    this.device   = device;
    this.userName = userName;
    this.stg_id   = stg_id;
    this.list_scr_corp = list_scr_corp;
    this.cust_name_display=cust_name_display;
    this.id_card=id_card;
  }

  static parse(json: any) {
   // let json = JSON.parse(data);

    return new MainTabModel(
      // json.RUN_NO,
      // json.COM_CODE,
      // json.MKT_EMP_NO,
      // json.ENT_CD,
      // json.ENT_NME,
      // json.WAIT_MTHD
      json.RUN_NO,
      json.ENT_TYP,
      json.SCR_DT,
      json.COM_CODE,
      json.MKT_EMP_NO,
      json.VER_EMP_NO,
      json.ENT_NME,
      json.SPUS_NME,
      json.VER_MTHD,
      json.HOME_TEL,
      json.OFFCE_TEL,
      json.MOBLE_TEL,
      json.HOME_TEL_RSULT,
      json.OFFCE_TEL_RSULT,
      json.MOBLE_TEL_RSULT,
      json.VISIT_CD,
      json.VISIT_RSULT,
      json.NGBHD,
      json.HOME_ADDR_CRRCT_CD,
      json.OFFCE_ADDR_CRRCT_CD,
      json.ASK_REC_CD,
      json.ASK_REC_DTEL,
      json.NCB_REC_CD,
      json.NCB_REC_DTEL,
      json.TRCE_REC_CD,
      json.TRCE_REC_DTEL,
      json.OWNR_HOME_TEL,
      json.LAST_USR,
      json.LAST_UPD,
      json.REF_NO,
      json.VER_MTHD_MORE,
      json.IN_OUT,
      json.PROD_CD,
      json.ENT_CD,
      json.CONF_SUBMIT,
      json.PRIM_SCR,
      json.ENT_CAT,
      json.RELSN,
      json.REV_DTEL,
      json.PMNT_GRDNG,
      json.FINISH_SCR_DT,
      json.HD_APP_DT,
      json.MGR_APP_DT,
      json.PRIM_SCR_RSULT,
      json.PMNT_GRDNG_AGR_CODE,
      json.PMNT_GRDNG_ASOF,
      json.VER_OPN,
      json.ORI_PRIM_SCR,
      json.ORI_PRIM_SCR_RSULT,
      json.HD_APP_BY,
      json.MGR_APP_BY,
      json.NO_SUBMIT,
      json.WAIT_MTHD,
      json.NO_REJECT,
      json.VER_EMP_NO_2,
      DropdownModel.parse(json.LIST_WAIT_METHD),
      DropdownModel.parse(json.LIST_VER_MTHD),
      DropdownModel.parse(json.LIST_IN_OUT),
      DropdownModel.parse(json.LIST_VISIT_CD),
      DropdownModel.parse(json.LIST_TRCE_REC_CD),
      DropdownModel.parse(json.LIST_ASK_REC_CD),
      DropdownModel.parse(json.LIST_NCB_REC_CD),
      DropdownModel.parse(json.LIST_OFFCE_ADDR_CRRCT_CD),
      DropdownModel.parse(json.LIST_HOME_ADDR_CRRCT_CD),
      DropdownModel.parse(json.LIST_PROD_CD),
      ScrSubjModel.parse(json.LIST_TAB_SCR_SUBJ),
      DropdownModel.parse(json.LIST_VER_EMP_NO),
      json.device,
      json.userName,
      json.STG_ID,
      ScrCorp.parse(json.LIST_SCR_CORP),
      json.CUST_NAME_DISPLAY,
      json.ID_CARD

    );
  }
}
