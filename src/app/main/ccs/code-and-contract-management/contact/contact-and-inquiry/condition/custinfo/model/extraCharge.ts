/**
 * Created by tanapon.sa on 09/04/2561.
 */
export class extraChargeModel {
  public lblextra_debt:string;
  public lblextra_legal:string;
  public lblextra_paid_debt:string;
  public lblextra_paid_legal:string;
  public lblextra_waive_debt:string;
  public lblextra_waive_legal:string;
  public lblextra_debt_total:string;
  public lblextra_legal_total:string;


  constructor(lblextra_debt?: string, lblextra_legal?: string, lblextra_paid_debt?: string, lblextra_paid_legal?: string,
              lblextra_waive_debt?: string, lblextra_waive_legal?: string, lblextra_debt_total?: string,
              lblextra_legal_total?: string) {
    this.lblextra_debt = lblextra_debt;
    this.lblextra_legal = lblextra_legal;
    this.lblextra_paid_debt = lblextra_paid_debt;
    this.lblextra_paid_legal = lblextra_paid_legal;
    this.lblextra_waive_debt = lblextra_waive_debt;
    this.lblextra_waive_legal = lblextra_waive_legal;
    this.lblextra_debt_total = lblextra_debt_total;
    this.lblextra_legal_total = lblextra_legal_total;
  }

  static parse(json : any) {
    let data:extraChargeModel = new extraChargeModel();

    data.lblextra_debt = json.LBLEXTRA_DEBT;
    data.lblextra_legal = json.LBLEXTRA_LEGAL;
    data.lblextra_paid_debt = json.LBLEXTRA_PAID_DEBT;
    data.lblextra_paid_legal = json.LBLEXTRA_PAID_LEGAL;
    data.lblextra_waive_debt = json.LBLEXTRA_WAIVE_DEBT;
    data.lblextra_waive_legal = json.LBLEXTRA_WAIVE_LEGAL;
    data.lblextra_debt_total = json.LBLEXTRA_DEBT_TOTAL;
    data.lblextra_legal_total = json.LBLEXTRA_LEGAL_TOTAL;

    return data;
  }
}
