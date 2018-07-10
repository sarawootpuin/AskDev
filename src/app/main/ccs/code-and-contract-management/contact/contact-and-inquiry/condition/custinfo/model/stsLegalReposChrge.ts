/**
 * Created by tanapon.sa on 04/04/2561.
 */
export class stsLegalReposChrgeModel {
  public lblcharge_status:string;
  public lblcharge_legal:string;
  public lblcharge_repos:string;
  public lblcharge_paid_status:string;
  public lblcharge_paid_legal:string;
  public lblcharge_paid_repos:string;
  public lblcharge_waive_status:string;
  public lblcharge_waive_legal:string;
  public lblcharge_waive_repos:string;
  public lblcharge_net_status:string;
  public lblcharge_net_legal:string;
  public lblcharge_net_repos:string;


  constructor(lblcharge_status?: string, lblcharge_legal?: string, lblcharge_repos?: string, lblcharge_paid_status?: string,
              lblcharge_paid_legal?: string, lblcharge_paid_repos?: string, lblcharge_waive_status?: string,
              lblcharge_waive_legal?: string, lblcharge_waive_repos?: string, lblcharge_net_status?: string,
              lblcharge_net_legal?: string, lblcharge_net_repos?: string) {
    this.lblcharge_status = lblcharge_status;
    this.lblcharge_legal = lblcharge_legal;
    this.lblcharge_repos = lblcharge_repos;
    this.lblcharge_paid_status = lblcharge_paid_status;
    this.lblcharge_paid_legal = lblcharge_paid_legal;
    this.lblcharge_paid_repos = lblcharge_paid_repos;
    this.lblcharge_waive_status = lblcharge_waive_status;
    this.lblcharge_waive_legal = lblcharge_waive_legal;
    this.lblcharge_waive_repos = lblcharge_waive_repos;
    this.lblcharge_net_status = lblcharge_net_status;
    this.lblcharge_net_legal = lblcharge_net_legal;
    this.lblcharge_net_repos = lblcharge_net_repos;
  }

  static parse(json : any) {
    let data : stsLegalReposChrgeModel = new stsLegalReposChrgeModel();

    data.lblcharge_status = json.LBLCHARGE_STATUS;
    data.lblcharge_legal = json.LBLCHARGE_LEGAL;
    data.lblcharge_repos = json.LBLCHARGE_REPOS;
    data.lblcharge_paid_status = json.LBLCHARGE_PAID_STATUS;
    data.lblcharge_paid_legal = json.LBLCHARGE_PAID_LEGAL;
    data.lblcharge_paid_repos = json.LBLCHARGE_PAID_REPOS;
    data.lblcharge_waive_status = json.LBLCHARGE_WAIVE_STATUS;
    data.lblcharge_waive_legal = json.LBLCHARGE_WAIVE_LEGAL;
    data.lblcharge_waive_repos = json.LBLCHARGE_WAIVE_REPOS;
    data.lblcharge_net_status = json.LBLCHARGE_NET_STATUS;
    data.lblcharge_net_legal = json.LBLCHARGE_NET_LEGAL;
    data.lblcharge_net_repos = json.LBLCHARGE_NET_REPOS;

    return data;
  }
}
