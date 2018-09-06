import {RepaymentModel} from "../../custinfo/contract-detail/ccs-repayment/repayment.model";
import {ArPlPaidInst} from "../arpl-paid/arpl-paid-inst/arpl-paid.model";
/**
 * Created by tanapon.sa on 13/07/2561.
 */
export class ArPlModel {
  public device: string;
  public usercode: string;

  public agr_code: string;
  public agr_com_code: string;
  public ref_code: string;
  public lblCust_Name: string;
  public lbl_collector_tel: string;
  public lblOS_PRI: string;
  public lblHP_Contract: string;
  public lblC_Status: string;
  public lblInstallment_E_VAT: string;
  public lblTerms: string;
  public lblPayment_Grading: string;
  public Collector: string;

  public list_Repayment: RepaymentModel[];
  public list_cdsPaid_Inst_PL: ArPlPaidInst[];


  constructor(device?: string, usercode?: string, agr_code?: string, agr_com_code?: string, ref_code?: string,
              lblCust_Name?: string, lbl_collector_tel?: string, lblOS_PRI?: string, lblHP_Contract?: string,
              lblC_Status?: string, lblInstallment_E_VAT?: string, lblTerms?: string, lblPayment_Grading?: string,
              Collector?: string, list_Repayment?: RepaymentModel[], list_cdsPaid_Inst_PL?: ArPlPaidInst[]) {
    this.device = device;
    this.usercode = usercode;
    this.agr_code = agr_code;
    this.agr_com_code = agr_com_code;
    this.ref_code = ref_code;
    this.lblCust_Name = lblCust_Name;
    this.lbl_collector_tel = lbl_collector_tel;
    this.lblOS_PRI = lblOS_PRI;
    this.lblHP_Contract = lblHP_Contract;
    this.lblC_Status = lblC_Status;
    this.lblInstallment_E_VAT = lblInstallment_E_VAT;
    this.lblTerms = lblTerms;
    this.lblPayment_Grading = lblPayment_Grading;
    this.Collector = Collector;
    this.list_Repayment = list_Repayment || [];
    this.list_cdsPaid_Inst_PL = list_cdsPaid_Inst_PL || [];
  }

  static parse(json: any) {
    let data: ArPlModel = new ArPlModel();

    data.device = json.DEVICE;
    data.usercode = json.USERCODE;
    data.agr_code = json.AGR_CODE;
    data.agr_com_code = json.AGR_COM_CODE;
    data.ref_code = json.REF_CODE;
    data.lblCust_Name = json.lblCust_Name;
    data.lbl_collector_tel = json.lbl_collector_tel;
    data.lblOS_PRI = json.lblOS_PRI;
    data.lblHP_Contract = json.lblHP_Contract;
    data.lblC_Status = json.lblC_Status;
    data.lblInstallment_E_VAT = json.lblInstallment_E_VAT;
    data.lblTerms = json.lblTerms;
    data.lblPayment_Grading = json.lblPayment_Grading;
    data.Collector = json.Collector;
    data.list_Repayment = RepaymentModel.parse(json.LIST_cdsRepayment);
    data.list_cdsPaid_Inst_PL = ArPlPaidInst.parse(json.LIST_cdsPaid_Inst);

    return data;
  }
}
