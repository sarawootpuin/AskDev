import {CdsOver_InstallModel} from "./clientDataSet/cdsOver_Install";
/**
 * Created by tanapon.sa on 25/01/2561.
 */
export class OverdueModel {
  public pnlcal_i_term : string;
  public pnlcal_pastdue : string;
  public pnlup_penalty : string;
  public list_cdsOver_Install : CdsOver_InstallModel[];


  constructor()

  constructor(pnlcal_i_term?: string, pnlcal_pastdue?: string, pnlup_penalty?: string, list_cdsOver_Install?: CdsOver_InstallModel[]) {
    this.pnlcal_i_term = pnlcal_i_term || '';
    this.pnlcal_pastdue = pnlcal_pastdue || '';
    this.pnlup_penalty = pnlup_penalty || '';
    this.list_cdsOver_Install = list_cdsOver_Install || [];
  }


  static parse(json: any) {
    let data: OverdueModel = new OverdueModel();

    data.pnlcal_i_term = json.PNLCAL_I_TERM;
    data.pnlcal_pastdue = json.PNLCAL_PASTDUE;
    data.pnlup_penalty = json.PNLUP_PENALTY;
    data.list_cdsOver_Install = CdsOver_InstallModel.parse(json.LIST_CDSOVER_INSTALL);

    return data;
  }


}
