/**
 * Created by tanapon.sa on 06/07/2561.
 */
export class CalcExtendVat {
  public a_order: any;
  public pnlReg_Amt_E_Service: any;
  public pnlTax_Rate: any;
  public pnlCal_Reg_Penalty: any;
  public pnlReg_Sub_Total1: any;
  public pnlService_Amt: any;
  public pnlService_VAT: any;
  public pnlReg_Other_Exp: any;
  public pnlTax_Amt: any;
  public pnlReg_Sub_Total2: any;
  public pnlReg_Total: any;


  constructor(a_order?: any, pnlReg_Amt_E_Service?: any, pnlTax_Rate?: any, pnlCal_Reg_Penalty?: any,
              pnlReg_Sub_Total1?: any, pnlService_Amt?: any, pnlService_VAT?: any, pnlReg_Other_Exp?: any,
              pnlTax_Amt?: any, pnlReg_Sub_Total2?: any, pnlReg_Total?: any) {
    this.a_order = a_order;
    this.pnlReg_Amt_E_Service = pnlReg_Amt_E_Service;
    this.pnlTax_Rate = pnlTax_Rate;
    this.pnlCal_Reg_Penalty = pnlCal_Reg_Penalty;
    this.pnlReg_Sub_Total1 = pnlReg_Sub_Total1;
    this.pnlService_Amt = pnlService_Amt;
    this.pnlService_VAT = pnlService_VAT;
    this.pnlReg_Other_Exp = pnlReg_Other_Exp;
    this.pnlTax_Amt = pnlTax_Amt;
    this.pnlReg_Sub_Total2 = pnlReg_Sub_Total2;
    this.pnlReg_Total = pnlReg_Total;
  }

  static parse(json:any[]) {
    let data: CalcExtendVat[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new CalcExtendVat(
        json[i].a_order,
        json[i].pnlReg_Amt_E_Service,
        json[i].pnlTax_Rate,
        json[i].pnlCal_Reg_Penalty,
        json[i].pnlReg_Sub_Total1,
        json[i].pnlService_Amt,
        json[i].pnlService_VAT,
        json[i].pnlReg_Other_Exp,
        json[i].pnlTax_Amt,
        json[i].pnlReg_Sub_Total2,
        json[i].pnlReg_Total
      ))
    }

    return data;

  }
}
