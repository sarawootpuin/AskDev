/**
 * Created by tanapon.sa on 16/03/2561.
 */
export class PenaltyModel {
  public lblpinterest_overdue: string;
  public lblplate_overdue: string;
  public lblpinterest_actual: string;
  public lblplate_actual: string;
  public lblppaid_interest: string;
  public lblppaid_late: string;
  public lblpwaive_interest: string;
  public lblpwaive_late: string;
  public lblpnet_interest: string;
  public lblpnet_late: string;
  public lblprtn_charge: string;
  public lblppaid_rtn_charge: string;
  public lblpwaive_rtn_charge: string;
  public lblpnet_rtn_charge: string;
  public lblpdirect_debit_charge: string;
  public lblppaid_direct_debit_charge: string;
  public lblpwaive_direct_debit_charge: string;
  public lblpnet_direct_debit_charge: string;
  public lblppaid_status_charge: string;
  public lblpwaive_status_charge: string;
  public lblpnet_status_charge: string;
  public lblpstatus_charge: string;
  public lblplegal_charge: string;
  public lblppaid_legal_charge: string;
  public lblpwaive_legal_charge: string;
  public lblpnet_legal_charge: string;
  public lblprepos_charge: string;
  public lblppaid_repos_charge: string;
  public lblpwaive_repos_charge: string;
  public lblpnet_repos_charge: string;
  public lblpdebt_extra_charge: string;
  public lblppaid_debt_extra_charge: string;
  public lblpwaive_debt_extra_charge: string;
  public lblpnet_debt_extra_charge: string;
  public lblplegal_extra_charge: string;
  public lblppaid_legal_extra_charge: string;
  public lblpwaive_legal_extra_charge: string;
  public lblpnet_legal_extra_charge: string;
  public lblpnet_penalty: string;
  public lblpnet_charge: string;
  public lblstatus_amt: string;

  constructor()
  constructor(lblpinterest_overdue?: string, lblplate_overdue?: string, lblpinterest_actual?: string, lblplate_actual?: string,
              lblppaid_interest?: string, lblppaid_late?: string, lblpwaive_interest?: string, lblpwaive_late?: string,
              lblpnet_interest?: string, lblpnet_late?: string, lblprtn_charge?: string, lblppaid_rtn_charge?: string, lblpwaive_rtn_charge?: string,
              lblpnet_rtn_charge?: string, lblpdirect_debit_charge?: string, lblppaid_direct_debit_charge?: string, lblpwaive_direct_debit_charge?: string,
              lblpnet_direct_debit_charge?: string, lblppaid_status_charge?: string, lblpwaive_status_charge?: string, lblpnet_status_charge?: string,
              lblpstatus_charge?: string, lblplegal_charge?: string, lblppaid_legal_charge?: string, lblpwaive_legal_charge?: string,
              lblpnet_legal_charge?: string, lblprepos_charge?: string, lblppaid_repos_charge?: string, lblpwaive_repos_charge?: string,
              lblpnet_repos_charge?: string, lblpdebt_extra_charge?: string, lblppaid_debt_extra_charge?: string, lblpwaive_debt_extra_charge?: string,
              lblpnet_debt_extra_charge?: string, lblplegal_extra_charge?: string, lblppaid_legal_extra_charge?: string, lblpwaive_legal_extra_charge?: string,
              lblpnet_legal_extra_charge?: string, lblpnet_penalty?: string, lblpnet_charge?: string, lblstatus_amt?: string) {
    this.lblpinterest_overdue = lblpinterest_overdue || '';
    this.lblplate_overdue = lblplate_overdue || '';
    this.lblpinterest_actual = lblpinterest_actual || '';
    this.lblplate_actual = lblplate_actual || '';
    this.lblppaid_interest = lblppaid_interest || '';
    this.lblppaid_late = lblppaid_late || '';
    this.lblpwaive_interest = lblpwaive_interest || '';
    this.lblpwaive_late = lblpwaive_late || '';
    this.lblpnet_interest = lblpnet_interest || '';
    this.lblpnet_late = lblpnet_late || '';
    this.lblprtn_charge = lblprtn_charge || '';
    this.lblppaid_rtn_charge = lblppaid_rtn_charge || '';
    this.lblpwaive_rtn_charge = lblpwaive_rtn_charge || '';
    this.lblpnet_rtn_charge = lblpnet_rtn_charge || '';
    this.lblpdirect_debit_charge = lblpdirect_debit_charge || '';
    this.lblppaid_direct_debit_charge = lblppaid_direct_debit_charge || '';
    this.lblpwaive_direct_debit_charge = lblpwaive_direct_debit_charge || '';
    this.lblpnet_direct_debit_charge = lblpnet_direct_debit_charge || '';
    this.lblppaid_status_charge = lblppaid_status_charge || '';
    this.lblpwaive_status_charge = lblpwaive_status_charge || '';
    this.lblpnet_status_charge = lblpnet_status_charge || '';
    this.lblpstatus_charge = lblpstatus_charge || '';
    this.lblplegal_charge = lblplegal_charge || '';
    this.lblppaid_legal_charge = lblppaid_legal_charge || '';
    this.lblpwaive_legal_charge = lblpwaive_legal_charge || '';
    this.lblpnet_legal_charge = lblpnet_legal_charge || '';
    this.lblprepos_charge = lblprepos_charge || '';
    this.lblppaid_repos_charge = lblppaid_repos_charge || '';
    this.lblpwaive_repos_charge = lblpwaive_repos_charge || '';
    this.lblpnet_repos_charge = lblpnet_repos_charge || '';
    this.lblpdebt_extra_charge = lblpdebt_extra_charge || '';
    this.lblppaid_debt_extra_charge = lblppaid_debt_extra_charge || '';
    this.lblpwaive_debt_extra_charge = lblpwaive_debt_extra_charge || '';
    this.lblpnet_debt_extra_charge = lblpnet_debt_extra_charge || '';
    this.lblplegal_extra_charge = lblplegal_extra_charge || '';
    this.lblppaid_legal_extra_charge = lblppaid_legal_extra_charge || '';
    this.lblpwaive_legal_extra_charge = lblpwaive_legal_extra_charge || '';
    this.lblpnet_legal_extra_charge = lblpnet_legal_extra_charge || '';
    this.lblpnet_penalty = lblpnet_penalty || '';
    this.lblpnet_charge = lblpnet_charge || '';
    this.lblstatus_amt = lblstatus_amt || '';
  }

  static parse(json: any) {
    let data: PenaltyModel = new PenaltyModel();

    data.lblpinterest_overdue = json.LBLPINTEREST_OVERDUE;
    data.lblplate_overdue = json.LBLPLATE_OVERDUE;
    data.lblpinterest_actual = json.LBLPINTEREST_ACTUAL;
    data.lblplate_actual = json.LBLPLATE_ACTUAL;
    data.lblppaid_interest = json.LBLPPAID_INTEREST;
    data.lblppaid_late = json.LBLPPAID_LATE;
    data.lblpwaive_interest = json.LBLPWAIVE_INTEREST;
    data.lblpwaive_late = json.LBLPWAIVE_LATE;
    data.lblpnet_interest = json.LBLPNET_INTEREST;
    data.lblpnet_late = json.LBLPNET_LATE;
    data.lblprtn_charge = json.LBLPRTN_CHARGE;
    data.lblppaid_rtn_charge = json.LBLPPAID_RTN_CHARGE;
    data.lblpwaive_rtn_charge = json.LBLPWAIVE_RTN_CHARGE;
    data.lblpnet_rtn_charge = json.LBLPNET_RTN_CHARGE;
    data.lblpdirect_debit_charge = json.LBLPDIRECT_DEBIT_CHARGE;
    data.lblppaid_direct_debit_charge = json.LBLPPAID_DIRECT_DEBIT_CHARGE;
    data.lblpwaive_direct_debit_charge = json.LBLPWAIVE_DIRECT_DEBIT_CHARGE;
    data.lblpnet_direct_debit_charge = json.LBLPNET_DIRECT_DEBIT_CHARGE;
    data.lblppaid_status_charge = json.LBLPPAID_STATUS_CHARGE;
    data.lblpwaive_status_charge = json.LBLPWAIVE_STATUS_CHARGE;
    data.lblpnet_status_charge = json.LBLPNET_STATUS_CHARGE;
    data.lblpstatus_charge = json.LBLPSTATUS_CHARGE;
    data.lblplegal_charge = json.LBLPLEGAL_CHARGE;
    data.lblppaid_legal_charge = json.LBLPPAID_LEGAL_CHARGE;
    data.lblpwaive_legal_charge = json.LBLPWAIVE_LEGAL_CHARGE;
    data.lblpnet_legal_charge = json.LBLPNET_LEGAL_CHARGE;
    data.lblprepos_charge = json.LBLPREPOS_CHARGE;
    data.lblppaid_repos_charge = json.LBLPPAID_REPOS_CHARGE;
    data.lblpwaive_repos_charge = json.LBLPWAIVE_REPOS_CHARGE;
    data.lblpnet_repos_charge = json.LBLPNET_REPOS_CHARGE;
    data.lblpdebt_extra_charge = json.LBLPDEBT_EXTRA_CHARGE;
    data.lblppaid_debt_extra_charge = json.LBLPPAID_DEBT_EXTRA_CHARGE;
    data.lblpwaive_debt_extra_charge = json.LBLPWAIVE_DEBT_EXTRA_CHARGE;
    data.lblpnet_debt_extra_charge = json.LBLPNET_DEBT_EXTRA_CHARGE;
    data.lblplegal_extra_charge = json.LBLPLEGAL_EXTRA_CHARGE;
    data.lblppaid_legal_extra_charge = json.LBLPPAID_LEGAL_EXTRA_CHARGE;
    data.lblpwaive_legal_extra_charge = json.LBLPWAIVE_LEGAL_EXTRA_CHARGE;
    data.lblpnet_legal_extra_charge = json.LBLPNET_LEGAL_EXTRA_CHARGE;
    data.lblpnet_penalty = json.LBLPNET_PENALTY;
    data.lblpnet_charge = json.LBLPNET_CHARGE;
    data.lblstatus_amt = json.LBLSTATUS_AMT;

    return data;
  }
}
