import {OverdueModel} from "./overdue";
import {OvervatModel} from "./overvat";
import {InsuranceModel} from "./insurance";
import {PenaltyModel} from "./penalty";
import {CdsOver_InstallModel} from "./clientDataSet/cdsOver_Install";
import {CdsPaid_InstModel} from "./clientDataSet/cdsPaid_Inst";
import {cdsCust_PaidModel} from "./clientDataSet/cdsCust_Paid";
import {cdsPaid_VATModel} from "./clientDataSet/cdsPaid_VAT";
import {cdsPaid_InsModel} from "./clientDataSet/cdsPaid_Ins";
import {cdsPaid_LegalModel} from "./clientDataSet/cdsPaid_Legal";
import {stsLegalReposChrgeModel} from "./stsLegalReposChrge";
import {cdsStatus_ChargeModel} from "./clientDataSet/cdsStatus_Charge";
import {cdsDirect_DebitModel} from "./clientDataSet/cdsDirect_Debit";
import {extraChargeModel} from "./extraCharge";
import {cdsExtraChargeModel} from "./clientDataSet/cdsExtraCharge";
import {cbo_custinfo} from "./cbo_custinfo";
import {cdsFollow_UpModel} from "./clientDataSet/cdsFollow_Up";
import {cdsFol_To_PayerInsteadModel} from "./clientDataSet/cdsFol_To_PayerInstead";
import {cdsFol_To_ReferFolPrsnModel} from "./clientDataSet/cdsFol_To_ReferFolPrsn";
import {qryGuarantorModel} from "./Query/qryGuarantor";
import {cdsPaid_OtherModel} from "../paid/ccs-paid-other/cdsPaid_OtherModel";
import {AddressModel} from "../other/address/address.model";
import {RepaymentModel} from "../contract-detail/ccs-repayment/repayment.model";
import {TransferHistModel} from "../collection/transfer/transferHist.model";
import {DealerModel} from "../other/ccs-dealer/ccs-dealer.model";
import {cdsPaid_RegisModel} from "./clientDataSet/cdsPaid_Regis";
import {ReceiveTypModel} from "./ReceiveTyp.model";
import {VatCarHistModel} from "../other/ccs-vat-car-hist/vat-car-hist.model";
import {ChequePDCModel} from "../other/ccs-cheque-pdc/cheque-pdc.model";
import {RegSuspendedModel} from "../other/ccs-regsuspend-hist/RegSuspended.model";
import {ExpenseModel} from "../overdue/ccs-expense/ccs-expense.model";
import {AssetModel} from "../contract-detail/ccs-movement-master/ccs-asset";
import {ReferFollowPersonModel} from "../other/ccs-refer-follow-person/refer-follow-person.model";
import {MovementRegTransModel} from "../contract-detail/ccs-movement-regbook/movementRegTrans.model";
import {TelHistModel} from "../other/ccs-tel-hist/tel-hist.model";
import {CalcExtendVat} from "../other/ccs-calc-extend-vat/ccs-calc-extend-vat.model";
import {RelateContact} from "../other/ccs-relate/ccs-relate.model";
import {ChqGuarantee} from "../other/ccs-chq-guarantee/ccs-chq-guarantee.model";
/**
 * Created by tanapon.sa on 09/11/2560.
 */

export class CustinfoModel {

  public device: string;
  public usercode: string;

  public agr_code: string;
  public agr_com_code: string;
  public collector_com_code: string;
  public col_com_code: string;
  public candidate_code: string;
  public mskReg_Date: string;
  public ref_code: string;
  public cus_code: string;
  public lblcust_name: string;
  public pastdue_installment: string;
  public pastdue_vat: string;
  public due_day: string;
  public first: string;
  public partial: string;
  public n_term: string;
  public penalty_rate: string;
  public term: string;
  public vat: string;
  public vat_rate: string;
  public os_vat: string;
  public os_vat_t: string;
  public principal: string;
  public interest: string;
  public irr: string;
  public os_ar: string;
  public v_ar: string;
  public os_term: string;
  public os_pri: string;
  public c_status: string;
  public sub_c_status: string;
  public c_status_flg: string;
  public os_compulsory: string;
  public os_voluntory: string;
  public com_irr: string;
  public pastdue_term: string;
  public upd_crd_grd: string;
  public new_reg: string;
  public installment_e_vat: string;
  public installment_i_vat: string;
  public unearn: string;
  public vat_dt: string;
  public accr_dt: string;
  public stop_vat_flg: string;
  public schedule: string;
  public unearn_old: string;
  public grace: string;
  public grace_ty: string;
  public new_agreement: string;
  public new_agr_type: string;
  public agr_flg: string;
  public found_fld54: string;
  public found_van59: string;
  public found_fld59: string;
  public on_click: string;
  public now: string;
  public prebranchcode: string;
  public lblp_branch_outlet: string;
  public start_rd_dt: string;
  public fin_ty: string;
  public sub_fin: string;
  public disbursement_date: string;
  public collector: string;
  public usercode_collector: string;
  public lblcollector_name: string;
  public lbl_collector_tel: string;
  public lbln_due_i: string;
  public lbln_due_v: string;
  public lblpaid_amount: string;
  public w_status_amt: string;
  public w_legal_extra_amt: string;
  public w_legal_amt: string;
  public w_debt_extra_amt: string;
  public w_rtn_direc_amt: string;
  public w_chqrtn_direc: string;
  public os_regis: string;
  public os_regis_vat: string;
  public vat_terms: string;
  public lblsalesexe: string;
  public trnsf_ownr_proj_dt: string;
  public with_vat: string;
  public rv: string;
  public lblrefer_old_agr: string;
  public lblfirst_installment_e_vat: string;
  public lbllast_installment_e_vat: string;
  public pnlasset_status: string;
  public pnlwith_vat: string;
  public pnlnew_reg: string;
  public pnldeduct_installment: string;
  public lbldeduct_install_term: string;
  public pnldeduct_voluntory: string;
  public pnlpur_op: string;
  public pnladv_arr: string;
  public new_tr: string;
  public lbldealer_code: string;
  public lbloutlet: string;
  public lblprj_code: string;
  public lbllast_due: string;
  public lblcost_e_vat: string;
  public lblcost_vat: string;
  public lblcost_i_vat: string;
  public lbldown_e_vat: string;
  public lbldown_vat: string;
  public lbldown_i_vat: string;
  public pnldeduct_compulsory: string;
  public lbldatetrn: string;
  public vos_collection_expense: string;
  public vos_other_expense: string;
  public vos_legal_expense: string;
  public vos_legal_fee: string;
  public vos_registration: string;
  public lblfin_date2: string;
  public stop_accr_flg: string;
  public dateend: string;
  public lblpayment_grading: string;
  public lblmet_pay2: string;
  public lblmet_pay_desc2: string;
  public prebranch_code: string;
  public pnlcal_pastdue2: string;
  public pnlcal_v_term2: string;
  public pnlcal_pastdue_vat2: string;
  public pnlexpense: string;
  public pnlexpense2: string;
  public pnlexpense3: string;
  public lblrelate_agr: string;
  public lblold_cust_name: string;
  public lbln_vat: string;
  public n_due_v: string;
  public lbln_term: string;
  public lbln_term1: string;
  public pnlregistration: string;
  public pnlcal_i_term2: string;
  public pnlup_charge: string;
  public pnlup_bal_i_term: string;
  public pnlup_bal_i_amt: string;
  public pnlup_bal_v_term: string;
  public pnlup_bal_v_amt: string;
  public pnlsub1: string;
  public pnlsub2: string;
  public pnlup_rv_amt: string;
  public pnlup_rv_vat: string;
  public edtup_advance_term: string;
  public edtup_advance_amt: string;
  public edtup_status_charge: string;
  public edtup_legal_exp: string;
  public edtup_other_exp: string;
  public edtpartial_comp: string;
  public edtpartial_normal: string;
  public mempartial_ins_note: string;
  public pnldep_amt1: string;
  public pnltotal: string;
  public lblunern_amt: string;
  public lblint_amt: string;
  public lbllate_amt: string;
  public lblint_late_amt: string;
  public lbldebt_extra_amt: string;
  public lbllegal_extra_amt: string;
  public lbllegal_amt: string;
  public lblrtn_chq_amt: string;
  public mskcalc_date: string;
  public mskcalc_date2: string;
  public mskpenalty_vat: string;
  public lblc_status: string;
  public list_cdspaid_inst: CdsPaid_InstModel[];
  public lblrental: string;
  public lblos_inst: string;
  public lblos_unearn: string;
  public ds_overdue: OverdueModel;
  public ds_overvat: OvervatModel;
  public ds_ins: InsuranceModel;
  public ds_penalty: PenaltyModel;
  public lblflat_rate: string;
  public lblfin_amt_e_vat: string;
  public lblfin_vat: string;
  public lblfin_amt_i_vat: string;
  public lblnew_tr_desc: string;
  public lbldealer_name: string;
  public lbloutlet_desc: string;
  public lblprj_desc: string;
  public lblsale_name: string;
  public lblver_name: string;
  public lblRelated_Contact: string;
  public list_cdscust_paid: cdsCust_PaidModel[];
  public list_cdspaid_vat: cdsPaid_VATModel[];
  public list_cdspaid_ins: cdsPaid_InsModel[];
  public list_cdspaid_legal: cdsPaid_LegalModel[];
  public ds_stslegalreposchrge: stsLegalReposChrgeModel;
  public list_cdsstatus_charge: cdsStatus_ChargeModel[];
  public list_cdsdirect_debit: cdsDirect_DebitModel[];
  public ds_extracharge: extraChargeModel;
  public list_cdsextracharge: cdsExtraChargeModel[];
  public list_cbo_custinfo: cbo_custinfo[];
  public list_cdsfollow_up: cdsFollow_UpModel[];
  public list_cdsfol_to_payerinstead: cdsFol_To_PayerInsteadModel[];
  public list_cdsfol_to_referfolprsn: cdsFol_To_ReferFolPrsnModel[];
  public list_qryGuarantor: qryGuarantorModel[];
  public list_cdspaid_other: cdsPaid_OtherModel[];
  public ds_address: AddressModel;
  public list_Repayment: RepaymentModel[];
  public list_TransferHist: TransferHistModel[];
  public ds_Dealer: DealerModel;
  public list_cdspaid_regis: cdsPaid_RegisModel[];
  public list_receiveTyp_Regis: ReceiveTypModel[];
  public list_receiveTyp_Ins: ReceiveTypModel[];
  public list_VatCarHist: VatCarHistModel[];
  public list_Cheque: ChequePDCModel[];
  public list_RegSuspended: RegSuspendedModel[];
  public ds_Expense: ExpenseModel;
  public list_Asset: AssetModel[];
  public list_AddrGuar: AddressModel[];
  public list_ReferPayPsrn: ReferFollowPersonModel[];
  public list_MMRegTrans: MovementRegTransModel[];
  public list_TelHist: TelHistModel[];
  public list_CalcExtendVat: CalcExtendVat[];
  public list_RelateContact: RelateContact[];
  public list_ChqGuarantee: ChqGuarantee[];


  constructor(device?: string, usercode?: string, agr_code?: string, agr_com_code?: string, collector_com_code?: string,
              col_com_code?: string, candidate_code?: string, mskReg_Date?: string, ref_code?: string, cus_code?: string,
              lblcust_name?: string, pastdue_installment?: string, pastdue_vat?: string, due_day?: string, first?: string,
              partial?: string, n_term?: string, penalty_rate?: string, term?: string, vat?: string, vat_rate?: string,
              os_vat?: string, os_vat_t?: string, principal?: string, interest?: string, irr?: string, os_ar?: string,
              v_ar?: string, os_term?: string, os_pri?: string, c_status?: string, sub_c_status?: string, c_status_flg?: string,
              os_compulsory?: string, os_voluntory?: string, com_irr?: string, pastdue_term?: string, upd_crd_grd?: string,
              new_reg?: string, installment_e_vat?: string, installment_i_vat?: string, unearn?: string, vat_dt?: string,accr_dt?: string, stop_vat_flg?: string,
              schedule?: string, unearn_old?: string, grace?: string, grace_ty?: string, new_agreement?: string, new_agr_type?: string,
              agr_flg?: string, found_fld54?: string, found_van59?: string, found_fld59?: string, on_click?: string, now?: string,
              prebranchcode?: string, lblp_branch_outlet?: string, start_rd_dt?: string, fin_ty?: string, sub_fin?: string,
              disbursement_date?: string, collector?: string, usercode_collector?: string, lblcollector_name?: string, lbl_collector_tel?: string, lbln_due_i?: string, lbln_due_v?: string,
              lblpaid_amount?: string, w_status_amt?: string, w_legal_extra_amt?: string, w_legal_amt?: string, w_debt_extra_amt?: string,
              w_rtn_direc_amt?: string, w_chqrtn_direc?: string, os_regis?: string, os_regis_vat?: string, vat_terms?: string,
              lblsalesexe?: string, trnsf_ownr_proj_dt?: string, with_vat?: string, rv?: string, lblrefer_old_agr?: string, lblfirst_installment_e_vat?: string,
              lbllast_installment_e_vat?: string, pnlasset_status?: string, pnlwith_vat?:string, pnlnew_reg?: string, pnldeduct_installment?: string, lbldeduct_install_term?: string,
              pnldeduct_voluntory?: string, pnlpur_op?: string, pnladv_arr?: string, new_tr?: string, lbldealer_code?: string, lbloutlet?: string,
              lblprj_code?: string, lbllast_due?: string, lblcost_e_vat?: string, lblcost_vat?: string, lblcost_i_vat?: string,lbldown_e_vat?: string, lbldown_vat?: string,
              lbldown_i_vat?: string, pnldeduct_compulsory?: string, lbldatetrn?: string, vos_collection_expense?: string,
              vos_other_expense?: string, vos_legal_expense?: string, vos_legal_fee?: string, vos_registration?: string,
              lblfin_date2?: string, stop_accr_flg?: string, dateend?: string, lblpayment_grading?: string, lblmet_pay2?: string,
              lblmet_pay_desc2?: string, prebranch_code?: string, pnlcal_pastdue2?: string, pnlcal_v_term2?: string,
              pnlcal_pastdue_vat2?: string, pnlexpense?: string, pnlexpense2?: string, pnlexpense3?: string, lblrelate_agr?: string,
              lblold_cust_name?: string, lbln_vat?: string, n_due_v?: string, lbln_term?: string, lbln_term1?: string,
              pnlregistration?: string, pnlcal_i_term2?: string, pnlup_charge?: string, pnlup_bal_i_term?: string,
              pnlup_bal_i_amt?: string, pnlup_bal_v_term?: string, pnlup_bal_v_amt?: string, pnlsub1?: string, pnlsub2?: string,
              pnlup_rv_amt?: string, pnlup_rv_vat?: string, edtup_advance_term?: string, edtup_advance_amt?: string, edtup_status_charge?: string,
              edtup_legal_exp?: string, edtup_other_exp?: string, edtpartial_comp?: string, edtpartial_normal?: string, mempartial_ins_note?: string,
              pnldep_amt1?: string, pnltotal?: string, lblunern_amt?: string, lblint_amt?: string, lbllate_amt?: string, lblint_late_amt?: string,
              lbldebt_extra_amt?: string, lbllegal_extra_amt?: string, lbllegal_amt?: string, lblrtn_chq_amt?: string,
              mskcalc_date?: string, mskcalc_date2?: string, mskpenalty_vat?: string, lblc_status?: string, list_cdspaid_inst?: CdsPaid_InstModel[],
              lblrental?: string, lblos_inst?: string, lblos_unearn?: string, ds_overdue?: OverdueModel, ds_overvat?: OvervatModel,
              ds_ins?: InsuranceModel, ds_penalty?: PenaltyModel, lblflat_rate?: string, lblfin_amt_e_vat?: string, lblfin_vat?: string,
              lblfin_amt_i_vat?: string, lblnew_tr_desc?: string, lbldealer_name?: string, lbloutlet_desc?: string,
              lblprj_desc?: string, lblsale_name?: string,lblver_name?: string, lblRelated_Contact?: string, list_cdscust_paid ?: cdsCust_PaidModel[], list_cdspaid_vat ?: cdsPaid_VATModel[],
              list_cdspaid_ins?: cdsPaid_InsModel[],list_cdspaid_legal?: cdsPaid_LegalModel[],ds_stslegalreposchrge ?: stsLegalReposChrgeModel,
              list_cdsstatus_charge?: cdsStatus_ChargeModel[], list_cdsdirect_debit?:cdsDirect_DebitModel[], ds_extracharge?: extraChargeModel,
              list_cdsextracharge?: cdsExtraChargeModel[], list_cbo_custinfo?:cbo_custinfo[], list_cdsfollow_up?:cdsFollow_UpModel[],
              list_cdsfol_to_payerinstead?: cdsFol_To_PayerInsteadModel[], list_cdsfol_to_referfolprsn?: cdsFol_To_ReferFolPrsnModel[],
              list_qryGuarantor?: qryGuarantorModel[], list_cdspaid_other?: cdsPaid_OtherModel[], ds_address?: AddressModel,
              list_Repayment?: RepaymentModel[],list_TransferHist?: TransferHistModel[],ds_Dealer?: DealerModel,list_cdspaid_regis?: cdsPaid_RegisModel[],
              list_receiveTyp_Regis?: ReceiveTypModel[], list_receiveTyp_Ins?: ReceiveTypModel[],list_VatCarHist?: VatCarHistModel[],
              list_Cheque?: ChequePDCModel[],list_RegSuspended?: RegSuspendedModel[],ds_Expense?: ExpenseModel,list_Asset?: AssetModel[],
              list_AddrGuar?: AddressModel[],list_ReferPayPsrn?: ReferFollowPersonModel[],list_MMRegTrans?: MovementRegTransModel[],
              list_TelHist?: TelHistModel[],list_CalcExtendVat?: CalcExtendVat[],list_RelateContact?: RelateContact[],list_ChqGuarantee?: ChqGuarantee[]) {
    this.device = device || '';
    this.usercode = usercode || '';
    this.agr_code = agr_code || '';
    this.agr_com_code = agr_com_code || '';
    this.collector_com_code = collector_com_code || '';
    this.col_com_code = col_com_code || '';
    this.candidate_code = candidate_code || '';
    this.mskReg_Date = mskReg_Date || '';
    this.ref_code = ref_code || '';
    this.cus_code = cus_code || '';
    this.lblcust_name = lblcust_name || '';
    this.pastdue_installment = pastdue_installment || '';
    this.pastdue_vat = pastdue_vat || '';
    this.due_day = due_day || '';
    this.first = first || '';
    this.partial = partial || '';
    this.n_term = n_term || '';
    this.penalty_rate = penalty_rate || '';
    this.term = term || '';
    this.vat = vat || '';
    this.vat_rate = vat_rate || '';
    this.os_vat = os_vat || '';
    this.os_vat_t = os_vat_t || '';
    this.principal = principal || '';
    this.interest = interest || '';
    this.irr = irr || '';
    this.os_ar = os_ar || '';
    this.v_ar = v_ar || '';
    this.os_term = os_term || '';
    this.os_pri = os_pri || '';
    this.c_status = c_status || '';
    this.sub_c_status = sub_c_status || '';
    this.c_status_flg = c_status_flg || '';
    this.os_compulsory = os_compulsory || '';
    this.os_voluntory = os_voluntory || '';
    this.com_irr = com_irr || '';
    this.pastdue_term = pastdue_term || '';
    this.upd_crd_grd = upd_crd_grd || '';
    this.new_reg = new_reg || '';
    this.installment_e_vat = installment_e_vat || '';
    this.installment_i_vat = installment_i_vat || '';
    this.unearn = unearn || '';
    this.vat_dt = vat_dt || '';
    this.accr_dt = accr_dt || '';
    this.stop_vat_flg = stop_vat_flg || '';
    this.schedule = schedule || '';
    this.unearn_old = unearn_old || '';
    this.grace = grace || '';
    this.grace_ty = grace_ty || '';
    this.new_agreement = new_agreement || '';
    this.new_agr_type = new_agr_type || '';
    this.agr_flg = agr_flg || '';
    this.found_fld54 = found_fld54 || '';
    this.found_van59 = found_van59 || '';
    this.found_fld59 = found_fld59 || '';
    this.on_click = on_click || '';
    this.now = now || '';
    this.prebranchcode = prebranchcode || '';
    this.lblp_branch_outlet = lblp_branch_outlet || '';
    this.start_rd_dt = start_rd_dt || '';
    this.fin_ty = fin_ty || '';
    this.sub_fin = sub_fin || '';
    this.disbursement_date = disbursement_date || '';
    this.collector = collector || '';
    this.usercode_collector = usercode_collector || '';
    this.lblcollector_name = lblcollector_name || '';
    this.lbl_collector_tel = lbl_collector_tel || '';
    this.lbln_due_i = lbln_due_i || '';
    this.lbln_due_v = lbln_due_v || '';
    this.lblpaid_amount = lblpaid_amount || '';
    this.w_status_amt = w_status_amt || '';
    this.w_legal_extra_amt = w_legal_extra_amt || '';
    this.w_legal_amt = w_legal_amt || '';
    this.w_debt_extra_amt = w_debt_extra_amt || '';
    this.w_rtn_direc_amt = w_rtn_direc_amt || '';
    this.w_chqrtn_direc = w_chqrtn_direc || '';
    this.os_regis = os_regis || '';
    this.os_regis_vat = os_regis_vat || '';
    this.vat_terms = vat_terms || '';
    this.lblsalesexe = lblsalesexe || '';
    this.trnsf_ownr_proj_dt = trnsf_ownr_proj_dt || '';
    this.with_vat = with_vat || '';
    this.rv = rv || '';
    this.lblrefer_old_agr = lblrefer_old_agr || '';
    this.lblfirst_installment_e_vat = lblfirst_installment_e_vat || '';
    this.lbllast_installment_e_vat = lbllast_installment_e_vat || '';
    this.pnlasset_status = pnlasset_status || '';
    this.pnlwith_vat = pnlwith_vat || '';
    this.pnlnew_reg = pnlnew_reg || '';
    this.pnldeduct_installment = pnldeduct_installment || '';
    this.lbldeduct_install_term = lbldeduct_install_term || '';
    this.pnldeduct_voluntory = pnldeduct_voluntory || '';
    this.pnlpur_op = pnlpur_op || '';
    this.pnladv_arr = pnladv_arr || '';
    this.new_tr = new_tr || '';
    this.lbldealer_code = lbldealer_code || '';
    this.lbloutlet = lbloutlet || '';
    this.lblprj_code = lblprj_code || '';
    this.lbllast_due = lbllast_due || '';
    this.lblcost_e_vat = lblcost_e_vat || '';
    this.lblcost_vat = lblcost_vat || '';
    this.lblcost_i_vat = lblcost_i_vat || '';
    this.lbldown_e_vat = lbldown_e_vat || '';
    this.lbldown_vat = lbldown_vat || '';
    this.lbldown_i_vat = lbldown_i_vat || '';
    this.pnldeduct_compulsory = pnldeduct_compulsory || '';
    this.lbldatetrn = lbldatetrn || '';
    this.vos_collection_expense = vos_collection_expense || '';
    this.vos_other_expense = vos_other_expense || '';
    this.vos_legal_expense = vos_legal_expense || '';
    this.vos_legal_fee = vos_legal_fee || '';
    this.vos_registration = vos_registration || '';
    this.lblfin_date2 = lblfin_date2 || '';
    this.stop_accr_flg = stop_accr_flg || '';
    this.dateend = dateend || '';
    this.lblpayment_grading = lblpayment_grading || '';
    this.lblmet_pay2 = lblmet_pay2 || '';
    this.lblmet_pay_desc2 = lblmet_pay_desc2 || '';
    this.prebranch_code = prebranch_code || '';
    this.pnlcal_pastdue2 = pnlcal_pastdue2 || '';
    this.pnlcal_v_term2 = pnlcal_v_term2 || '';
    this.pnlcal_pastdue_vat2 = pnlcal_pastdue_vat2 || '';
    this.pnlexpense = pnlexpense || '';
    this.pnlexpense2 = pnlexpense2 || '';
    this.pnlexpense3 = pnlexpense3 || '';
    this.lblrelate_agr = lblrelate_agr || '';
    this.lblold_cust_name = lblold_cust_name || '';
    this.lbln_vat = lbln_vat || '';
    this.n_due_v = n_due_v || '';
    this.lbln_term = lbln_term || '';
    this.lbln_term1 = lbln_term1 || '';
    this.pnlregistration = pnlregistration || '';
    this.pnlcal_i_term2 = pnlcal_i_term2 || '';
    this.pnlup_charge = pnlup_charge || '';
    this.pnlup_bal_i_term = pnlup_bal_i_term || '';
    this.pnlup_bal_i_amt = pnlup_bal_i_amt || '';
    this.pnlup_bal_v_term = pnlup_bal_v_term || '';
    this.pnlup_bal_v_amt = pnlup_bal_v_amt || '';
    this.pnlsub1 = pnlsub1 || '';
    this.pnlsub2 = pnlsub2 || '';
    this.pnlup_rv_amt = pnlup_rv_amt || '';
    this.pnlup_rv_vat = pnlup_rv_vat || '';
    this.edtup_advance_term = edtup_advance_term || '';
    this.edtup_advance_amt = edtup_advance_amt || '';
    this.edtup_status_charge = edtup_status_charge || '';
    this.edtup_legal_exp = edtup_legal_exp || '';
    this.edtup_other_exp = edtup_other_exp || '';
    this.edtpartial_comp = edtpartial_comp || '';
    this.edtpartial_normal = edtpartial_normal || '';
    this.mempartial_ins_note = mempartial_ins_note || '';
    this.pnldep_amt1 = pnldep_amt1 || '';
    this.pnltotal = pnltotal || '';
    this.lblunern_amt = lblunern_amt || '';
    this.lblint_amt = lblint_amt || '';
    this.lbllate_amt = lbllate_amt || '';
    this.lblint_late_amt = lblint_late_amt || '';
    this.lbldebt_extra_amt = lbldebt_extra_amt || '';
    this.lbllegal_extra_amt = lbllegal_extra_amt || '';
    this.lbllegal_amt = lbllegal_amt || '';
    this.lblrtn_chq_amt = lblrtn_chq_amt || '';
    this.mskcalc_date = mskcalc_date || '';
    this.mskcalc_date2 = mskcalc_date2 || '';
    this.mskpenalty_vat = mskpenalty_vat || '';
    this.lblc_status = lblc_status || '';
    this.list_cdspaid_inst = list_cdspaid_inst || [];
    this.lblrental = lblrental || '';
    this.lblos_inst = lblos_inst || '';
    this.lblos_unearn = lblos_unearn || '';
    this.ds_overdue = ds_overdue || new OverdueModel();
    this.ds_overvat = ds_overvat || new OvervatModel();
    this.ds_ins = ds_ins || new InsuranceModel();
    this.ds_penalty = ds_penalty || new PenaltyModel();
    this.lblflat_rate = lblflat_rate || '';
    this.lblfin_amt_e_vat = lblfin_amt_e_vat || '';
    this.lblfin_vat = lblfin_vat || '';
    this.lblfin_amt_i_vat = lblfin_amt_i_vat || '';
    this.lblnew_tr_desc = lblnew_tr_desc || '';
    this.lbldealer_name = lbldealer_name || '';
    this.lbloutlet_desc = lbloutlet_desc || '';
    this.lblprj_desc = lblprj_desc || '';
    this.lblsale_name = lblsale_name || '';
    this.lblver_name = lblver_name || '';
    this.lblRelated_Contact = lblRelated_Contact || '';
    this.list_cdscust_paid = list_cdscust_paid || [];
    this.list_cdspaid_vat = list_cdspaid_vat || [];
    this.list_cdspaid_ins = list_cdspaid_ins || [];
    this.list_cdspaid_legal = list_cdspaid_legal || [];
    this.ds_stslegalreposchrge = ds_stslegalreposchrge || new stsLegalReposChrgeModel();
    this.list_cdsstatus_charge = list_cdsstatus_charge || [];
    this.list_cdsdirect_debit = list_cdsdirect_debit || [];
    this.ds_extracharge = ds_extracharge || new extraChargeModel();
    this.list_cdsextracharge = list_cdsextracharge || [];
    this.list_cbo_custinfo = list_cbo_custinfo || [];
    this.list_cdsfollow_up = list_cdsfollow_up || [];
    this.list_cdsfol_to_payerinstead = list_cdsfol_to_payerinstead || [];
    this.list_cdsfol_to_referfolprsn = list_cdsfol_to_referfolprsn || [];
    this.list_qryGuarantor = list_qryGuarantor || [];
    this.list_cdspaid_other = list_cdspaid_other || [];
    this.ds_address = ds_address;
    this.list_Repayment = list_Repayment;
    this.list_TransferHist = list_TransferHist;
    this.ds_Dealer = ds_Dealer;
    this.list_cdspaid_regis = list_cdspaid_regis;
    this.list_receiveTyp_Regis = list_receiveTyp_Regis;
    this.list_receiveTyp_Ins = list_receiveTyp_Ins;
    this.list_VatCarHist = list_VatCarHist;
    this.list_Cheque = list_Cheque;
    this.list_RegSuspended = list_RegSuspended;
    this.ds_Expense = ds_Expense;
    this.list_Asset = list_Asset || [];
    this.list_AddrGuar = list_AddrGuar;
    this.list_ReferPayPsrn = list_ReferPayPsrn;
    this.list_MMRegTrans = list_MMRegTrans;
    this.list_TelHist = list_TelHist;
    this.list_CalcExtendVat = list_CalcExtendVat;
    this.list_RelateContact = list_RelateContact;
    this.list_ChqGuarantee = list_ChqGuarantee;
  }

  static parse(json: any) {
    let data: CustinfoModel = new CustinfoModel();

    data.device = json.DEVICE;
    data.usercode = json.USERCODE;
    data.agr_code = json.AGR_CODE;
    data.agr_com_code = json.AGR_COM_CODE;
    data.collector_com_code = json.COLLECTOR_COM_CODE;
    data.col_com_code = json.COL_COM_CODE;
    data.candidate_code = json.CANDIDATE_CODE;
    data.mskReg_Date = json.MSKREG_DATE;
    data.ref_code = json.REF_CODE;
    data.cus_code = json.CUS_CODE;
    data.lblcust_name = json.LBLCUST_NAME;
    data.pastdue_installment = json.PASTDUE_INSTALLMENT;
    data.pastdue_vat = json.PASTDUE_VAT;
    data.due_day = json.DUE_DAY;
    data.first = json.FIRST;
    data.partial = json.PARTIAL;
    data.n_term = json.N_TERM;
    data.penalty_rate = json.PENALTY_RATE;
    data.term = json.TERM;
    data.vat = json.VAT;
    data.vat_rate = json.VAT_RATE;
    data.os_vat = json.OS_VAT;
    data.os_vat_t = json.OS_VAT_T;
    data.principal = json.PRINCIPAL;
    data.interest = json.INTEREST;
    data.irr = json.IRR;
    data.os_ar = json.OS_AR;
    data.v_ar = json.V_AR;
    data.os_term = json.OS_TERM;
    data.os_pri = json.OS_PRI;
    data.c_status = json.C_STATUS;
    data.sub_c_status = json.SUB_C_STATUS;
    data.c_status_flg = json.C_STATUS_FLG;
    data.os_compulsory = json.OS_COMPULSORY;
    data.os_voluntory = json.OS_VOLUNTORY;
    data.com_irr = json.COM_IRR;
    data.pastdue_term = json.PASTDUE_TERM;
    data.upd_crd_grd = json.UPD_CRD_GRD;
    data.new_reg = json.NEW_REG;
    data.installment_e_vat = json.INSTALLMENT_E_VAT;
    data.installment_i_vat = json.INSTALLMENT_I_VAT;
    data.unearn = json.UNEARN;
    data.vat_dt = json.VAT_DT;
    data.accr_dt = json.ACCR_DT;
    data.stop_vat_flg = json.STOP_VAT_FLG;
    data.schedule = json.SCHEDULE;
    data.unearn_old = json.UNEARN_OLD;
    data.grace = json.GRANCE;
    data.grace_ty = json.GRACE_TY;
    data.new_agreement = json.NEW_AGREEMENT;
    data.new_agr_type = json.NEW_AGR_TYPE;
    data.agr_flg = json.AGR_FLG;
    data.found_fld54 = json.FOUND_FLD54;
    data.found_van59 = json.FOUND_VAN59;
    data.found_fld59 = json.FOUND_FLD59;
    data.on_click = json.ON_CLICK;
    data.now = json.NOW;
    data.prebranchcode = json.PREBRANCHCODE;
    data.lblp_branch_outlet = json.LBLP_BRANCH_OUTLET;
    data.start_rd_dt = json.START_RD_DT;
    data.fin_ty = json.FIN_TY;
    data.sub_fin = json.SUB_FIN;
    data.disbursement_date = json.DISBURSEMENT_DATE;
    data.collector = json.COLLECTOR;
    data.usercode_collector = json.USERCODE_COLLECTOR;
    data.lblcollector_name = json.LBLCOLLECTOR_NAME;
    data.lbl_collector_tel = json.LBL_COLLECTOR_TEL;
    data.lbln_due_i = json.LBLN_DUE_I;
    data.lbln_due_v = json.LBLN_DUE_V;
    data.lblpaid_amount = json.LBLPAID_AMOUNT;
    data.w_status_amt = json.W_STATUS_AMT;
    data.w_legal_extra_amt = json.W_LEGAL_EXTRA_AMT;
    data.w_legal_amt = json.W_LEGAL_AMT;
    data.w_debt_extra_amt = json.W_DEBT_EXTRA_AMT;
    data.w_rtn_direc_amt = json.W_RTN_DIREC_AMT;
    data.w_chqrtn_direc = json.W_CHQRTN_DIREC;
    data.os_regis = json.OS_REGIS;
    data.os_regis_vat = json.OS_REGIS_VAT;
    data.vat_terms = json.VAT_TERMS;
    data.lblsalesexe = json.LBLSALESEXE;
    data.trnsf_ownr_proj_dt = json.TRNSF_OWNR_PROJ_DT;
    data.with_vat = json.WITH_VAT;
    data.rv = json.RV;
    data.lblrefer_old_agr = json.LBLREFER_OLD_AGR;
    data.lblfirst_installment_e_vat = json.LBLFIRST_INSTALLMENT_E_VAT;
    data.lbllast_installment_e_vat = json.LBLLAST_INSTALLMENT_E_VAT;
    data.pnlasset_status = json.PNLASSET_STATUS;
    data.pnlwith_vat = json.PNLWITH_VAT;
    data.pnlnew_reg = json.PNLNEW_REG;
    data.pnldeduct_installment = json.PNLDEDUCT_INSTALLMENT;
    data.lbldeduct_install_term = json.LBLDEDUCT_INSTALL_TERM;
    data.pnldeduct_voluntory = json.PNLDEDUCT_VOLUNTORY;
    data.pnlpur_op = json.PNLPUR_OP;
    data.pnladv_arr = json.PNLADV_ARR;
    data.new_tr = json.NEW_TR;
    data.lbldealer_code = json.LBLDEALER_CODE;
    data.lbloutlet = json.LBLOUTLET;
    data.lblprj_code = json.LBLPRJ_CODE;
    data.lbllast_due = json.LBLLAST_DUE;
    data.lblcost_e_vat = json.LBLCOST_E_VAT;
    data.lblcost_vat = json.LBLCOST_VAT;
    data.lblcost_i_vat = json.LBLCOST_I_VAT;
    data.lbldown_e_vat = json.LBLDOWN_E_VAT;
    data.lbldown_vat = json.LBLDOWN_VAT;
    data.lbldown_i_vat = json.LBLDOWN_I_VAT;
    data.pnldeduct_compulsory = json.PNLDEDUCT_COMPULSORY;
    data.lbldatetrn = json.LBLDATETRN;
    data.vos_collection_expense = json.VOS_COLLECTION_EXPENSE;
    data.vos_other_expense = json.VOS_OTHER_EXPENSE;
    data.vos_legal_expense = json.VOS_LEGAL_EXPENSE;
    data.vos_legal_fee = json.VOS_LEGAL_FEE;
    data.vos_registration = json.VOS_REGISTRATION;
    data.lblfin_date2 = json.LBLFIN_DATE2;
    data.stop_accr_flg = json.STOP_ACCR_FLG;
    data.dateend = json.DATEEND;
    data.lblpayment_grading = json.LBLPAYMENT_GRADING;
    data.lblmet_pay2 = json.LBLMET_PAY2;
    data.lblmet_pay_desc2 = json.LBLMET_PAY_DESC2;
    data.prebranch_code = json.PREBRANCH_CODE;
    data.pnlcal_pastdue2 = json.PNLCAL_PASTDUE2;
    data.pnlcal_v_term2 = json.PNLCAL_V_TERM2;
    data.pnlcal_pastdue_vat2 = json.PNLCAL_PASTDUE_VAT2;
    data.pnlexpense = json.PNLEXPENSE;
    data.pnlexpense2 = json.PNLEXPENSE2;
    data.pnlexpense3 = json.PNLEXPENSE3;
    data.lblrelate_agr = json.LBLRELATE_AGR;
    data.lblold_cust_name = json.LBLOLD_CUST_NAME;
    data.lbln_vat = json.LBLN_VAT;
    data.n_due_v = json.N_DUE_V;
    data.lbln_term = json.LBLN_TERM;
    data.lbln_term1 = json.LBLN_TERM1;
    data.pnlregistration = json.PNLREGISTRATION;
    data.pnlcal_i_term2 = json.PNLCAL_I_TERM2;
    data.pnlup_charge = json.PNLUP_CHARGE;
    data.pnlup_bal_i_term = json.PNLUP_BAL_I_TERM;
    data.pnlup_bal_i_amt = json.PNLUP_BAL_I_AMT;
    data.pnlup_bal_v_term = json.PNLUP_BAL_V_TERM;
    data.pnlup_bal_v_amt = json.PNLUP_BAL_V_AMT;
    data.pnlsub1 = json.PNLSUB1;
    data.pnlsub2 = json.PNLSUB2;
    data.pnlup_rv_amt = json.PNLUP_RV_AMT;
    data.pnlup_rv_vat = json.PNLUP_RV_VAT;
    data.edtup_advance_term = json.EDTUP_ADVANCE_TERM;
    data.edtup_advance_amt = json.EDTUP_ADVANCE_AMT;
    data.edtup_status_charge = json.EDTUP_STATUS_CHARGE;
    data.edtup_legal_exp = json.EDTUP_LEGAL_EXP;
    data.edtup_other_exp = json.EDTUP_OTHER_EXP;
    data.edtpartial_comp = json.EDTPARTIAL_COMP;
    data.edtpartial_normal = json.EDTPARTIAL_NORMAL;
    data.mempartial_ins_note = json.MEMPARTIAL_INS_NOTE;
    data.pnldep_amt1 = json.PNLDEP_AMT1;
    data.pnltotal = json.PNLTOTAL;
    data.lblunern_amt = json.LBLUNERN_AMT;
    data.lblint_amt = json.LBLINT_AMT;
    data.lbllate_amt = json.LBLLATE_AMT;
    data.lblint_late_amt = json.LBLINT_LATE_AMT;
    data.lbldebt_extra_amt = json.LBLDEBT_EXTRA_AMT;
    data.lbllegal_extra_amt = json.LBLLEGAL_EXTRA_AMT;
    data.lbllegal_amt = json.LBLLEGAL_AMT;
    data.lblrtn_chq_amt = json.LBLRTN_CHQ_AMT;
    data.mskcalc_date = json.MSKCALC_DATE;
    data.mskcalc_date2 = json.MSKCALC_DATE2;
    data.mskpenalty_vat = json.MSKPENALTY_VAT;
    data.lblc_status = json.LBLC_STATUS;
    data.list_cdspaid_inst = CdsPaid_InstModel.parse(json.LIST_CDSPAID_INST);
    data.lblrental = json.LBLRENTAL;
    data.lblos_inst = json.LBLOS_INST;
    data.lblos_unearn = json.LBLOS_UNEARN;
    data.ds_overdue = OverdueModel.parse(json.DS_OVERDUE);
    data.ds_overvat = OvervatModel.parse(json.DS_OVERVAT);
    data.ds_ins = InsuranceModel.parse(json.DS_INS);
    data.ds_penalty = PenaltyModel.parse(json.DS_PENALTY);
    data.lblflat_rate = json.LBLFLAT_RATE;
    data.lblfin_amt_e_vat = json.LBLFIN_AMT_E_VAT;
    data.lblfin_vat = json.LBLFIN_VAT;
    data.lblfin_amt_i_vat = json.LBLFIN_AMT_I_VAT;
    data.lblnew_tr_desc = json.LBLNEW_TR_DESC;
    data.lbldealer_name = json.LBLDEALER_NAME;
    data.lbloutlet_desc = json.LBLOUTLET_DESC;
    data.lblprj_desc = json.LBLPRJ_DESC;
    data.lblsale_name = json.LBLSALE_NAME;
    data.lblver_name = json.LBLVER_NAME;
    data.lblRelated_Contact = json.LBLRELATED_CONTACT;
    data.list_cdscust_paid = cdsCust_PaidModel.parse(json.LIST_CDSCUST_PAID);
    data.list_cdspaid_vat = cdsPaid_VATModel.parse(json.LIST_CDSPAID_VAT);
    data.list_cdspaid_ins = cdsPaid_InsModel.parse(json.LIST_CDSPAID_INS);
    data.list_cdspaid_legal = cdsPaid_LegalModel.parse(json.LIST_CDSPAID_LEGAL);
    data.ds_stslegalreposchrge = stsLegalReposChrgeModel.parse(json.DS_STSLEGALREPOSCHRGE);
    data.list_cdsstatus_charge = cdsStatus_ChargeModel.parse(json.LIST_CDSSTATUS_CHARGE);
    data.list_cdsdirect_debit = cdsDirect_DebitModel.parse(json.LIST_CDSDIRECT_DEBIT);
    data.ds_extracharge = extraChargeModel.parse(json.DS_EXTRACHARGE);
    data.list_cdsextracharge =  cdsExtraChargeModel.parse(json.LIST_CDSEXTRACHARGE);
    data.list_cbo_custinfo =  cbo_custinfo.parse(json.LIST_CBO_CUSTINFO);
    data.list_cdsfollow_up =  cdsFollow_UpModel.parse(json.LIST_CDSFOLLOW_UP);
    data.list_cdsfol_to_payerinstead =  cdsFol_To_PayerInsteadModel.parse(json.LIST_CDSFOL_TO_PAYERINSTEAD);
    data.list_cdsfol_to_referfolprsn =  cdsFol_To_ReferFolPrsnModel.parse(json.LIST_CDSFOL_TO_REFERFOLPRSN);
    data.list_qryGuarantor =  qryGuarantorModel.parse(json.list_qryGuarantor);
    data.list_cdspaid_other =  cdsPaid_OtherModel.parse(json.LIST_CDSPAID_OTHER);
    data.ds_address =  AddressModel.parse(json.DS_ADDRESS_TH);
    data.list_Repayment =  RepaymentModel.parse(json.LIST_cdsRepayment);
    data.list_TransferHist =  TransferHistModel.parse(json.LIST_Show_TransferHist);
    data.ds_Dealer =  DealerModel.parse(json.DS_DEALER);
    data.list_cdspaid_regis =  cdsPaid_RegisModel.parse(json.LIST_CDSPAID_REGIS);
    data.list_receiveTyp_Regis =  ReceiveTypModel.parse(json.LIST_RecievTyp_Regis_AR);
    data.list_receiveTyp_Ins =  ReceiveTypModel.parse(json.LIST_RecievTyp_Ins_AR);
    data.list_VatCarHist =  VatCarHistModel.parse(json.LIST_VatCarHist);
    data.list_Cheque =  ChequePDCModel.parse(json.LIST_Cheque);
    data.list_RegSuspended =  RegSuspendedModel.parse(json.LIST_RegSuspended);
    data.ds_Expense =  ExpenseModel.parse(json.DS_Expense);
    data.list_Asset =  AssetModel.parse(json.LIST_Asset);
    data.list_AddrGuar =  AddressModel.parseList(json.LIST_AddrGuar);
    data.list_ReferPayPsrn =  ReferFollowPersonModel.parse(json.list_PaymentPrsn);
    data.list_MMRegTrans =  MovementRegTransModel.parse(json.LIST_MMRegTrans);
    data.list_TelHist =  TelHistModel.parse(json.LIST_TelHist);
    data.list_CalcExtendVat =  CalcExtendVat.parse(json.LIST_CalcExtendVat);
    data.list_RelateContact =  RelateContact.parse(json.LIST_RelateContact);
    data.list_ChqGuarantee =  ChqGuarantee.parse(json.LIST_ChqGuarantee);
    return data;
  }


}
