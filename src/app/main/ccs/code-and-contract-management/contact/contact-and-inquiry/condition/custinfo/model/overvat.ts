import {cdsOver_VatModel} from "./clientDataSet/cdsOver_Vat";
/**
 * Created by tanapon.sa on 29/01/2561.
 */
export class OvervatModel {
  public pnlcal_v_term : string;
  public pnlcal_pastdue_vat : string;
  public list_cdsover_vat : cdsOver_VatModel[];

  constructor(pnlcal_v_term?: string, pnlcal_pastdue_vat?: string, list_cdsover_vat?: cdsOver_VatModel[]) {
    this.pnlcal_v_term = pnlcal_v_term || '';
    this.pnlcal_pastdue_vat = pnlcal_pastdue_vat || '';
    this.list_cdsover_vat = list_cdsover_vat || [];
  }

  static parse(json: any) {
    let data: OvervatModel = new OvervatModel();

    data.pnlcal_v_term = json.PNLCAL_V_TERM;
    data.pnlcal_pastdue_vat = json.PNLCAL_PASTDUE_VAT;
    data.list_cdsover_vat = cdsOver_VatModel.parse(json.LIST_CDSOVER_VAT);

    return data;
  }

}
