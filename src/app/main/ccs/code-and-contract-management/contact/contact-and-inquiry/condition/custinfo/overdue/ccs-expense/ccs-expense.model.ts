import {ListExpenseModel} from "./List-Expense.model";
/**
 * Created by tanapon.sa on 21/06/2561.
 */
export class ExpenseModel {
  public lblExp_Col_Amt : any;
  public lblExp_Lg_Fee_Amt : any;
  public lblExp_Lg_Exp_Amt : any;
  public lblExp_Other_Amt : any;
  public lblExp_Regis_Amt : any;
  public lblExp_Regis_VAT_Amt : any;
  public lblExp_Col_Paid : any;
  public lblExp_Lg_Fee_Paid : any;
  public lblExp_Lg_Exp_Paid : any;
  public lblExp_Other_Paid : any;
  public lblExp_Regis_Paid : any;
  public lblExp_Regis_VAT_Paid : any;
  public lblAdv_Regis_Amt : any;
  public lblAdv_Regis_Paid : any;
  public lblAdv_Regis_Total : any;
  public lblExp_Col_Total : any;
  public lblExp_Lg_Fee_Total : any;
  public lblExp_Lg_Exp_Total : any;
  public lblExp_Other_Total : any;
  public lblExp_Regis_Total : any;
  public lblExp_Regis_VAT_Total : any;
  public List_Expense : ListExpenseModel[];


  constructor(lblExp_Col_Amt?: any, lblExp_Lg_Fee_Amt?: any, lblExp_Lg_Exp_Amt?: any, lblExp_Other_Amt?: any,
              lblExp_Regis_Amt?: any, lblExp_Regis_VAT_Amt?: any, lblExp_Col_Paid?: any, lblExp_Lg_Fee_Paid?: any,
              lblExp_Lg_Exp_Paid?: any, lblExp_Other_Paid?: any, lblExp_Regis_Paid?: any, lblExp_Regis_VAT_Paid?: any,
              lblAdv_Regis_Amt?: any, lblAdv_Regis_Paid?: any, lblAdv_Regis_Total?: any, lblExp_Col_Total?: any,
              lblExp_Lg_Fee_Total?: any, lblExp_Lg_Exp_Total?: any, lblExp_Other_Total?: any, lblExp_Regis_Total?: any,
              lblExp_Regis_VAT_Total?: any, List_Expense?: ListExpenseModel[]) {
    this.lblExp_Col_Amt = lblExp_Col_Amt;
    this.lblExp_Lg_Fee_Amt = lblExp_Lg_Fee_Amt;
    this.lblExp_Lg_Exp_Amt = lblExp_Lg_Exp_Amt;
    this.lblExp_Other_Amt = lblExp_Other_Amt;
    this.lblExp_Regis_Amt = lblExp_Regis_Amt;
    this.lblExp_Regis_VAT_Amt = lblExp_Regis_VAT_Amt;
    this.lblExp_Col_Paid = lblExp_Col_Paid;
    this.lblExp_Lg_Fee_Paid = lblExp_Lg_Fee_Paid;
    this.lblExp_Lg_Exp_Paid = lblExp_Lg_Exp_Paid;
    this.lblExp_Other_Paid = lblExp_Other_Paid;
    this.lblExp_Regis_Paid = lblExp_Regis_Paid;
    this.lblExp_Regis_VAT_Paid = lblExp_Regis_VAT_Paid;
    this.lblAdv_Regis_Amt = lblAdv_Regis_Amt;
    this.lblAdv_Regis_Paid = lblAdv_Regis_Paid;
    this.lblAdv_Regis_Total = lblAdv_Regis_Total;
    this.lblExp_Col_Total = lblExp_Col_Total;
    this.lblExp_Lg_Fee_Total = lblExp_Lg_Fee_Total;
    this.lblExp_Lg_Exp_Total = lblExp_Lg_Exp_Total;
    this.lblExp_Other_Total = lblExp_Other_Total;
    this.lblExp_Regis_Total = lblExp_Regis_Total;
    this.lblExp_Regis_VAT_Total = lblExp_Regis_VAT_Total;
    this.List_Expense = List_Expense;
  }

  static parse(json : any) {
    let data:ExpenseModel = new ExpenseModel();

    data.lblExp_Col_Amt = json.lblExp_Col_Amt;
    data.lblExp_Lg_Fee_Amt = json.lblExp_Lg_Fee_Amt;
    data.lblExp_Lg_Exp_Amt = json.lblExp_Lg_Exp_Amt;
    data.lblExp_Other_Amt = json.lblExp_Other_Amt;
    data.lblExp_Regis_Amt = json.lblExp_Regis_Amt;
    data.lblExp_Regis_VAT_Amt = json.lblExp_Regis_VAT_Amt;
    data.lblExp_Col_Paid = json.lblExp_Col_Paid;
    data.lblExp_Lg_Fee_Paid = json.lblExp_Lg_Fee_Paid;
    data.lblExp_Lg_Exp_Paid = json.lblExp_Lg_Exp_Paid;
    data.lblExp_Other_Paid = json.lblExp_Other_Paid;
    data.lblExp_Regis_Paid = json.lblExp_Regis_Paid;
    data.lblExp_Regis_VAT_Paid = json.lblExp_Regis_VAT_Paid;
    data.lblAdv_Regis_Amt = json.lblAdv_Regis_Amt;
    data.lblAdv_Regis_Paid = json.lblAdv_Regis_Paid;
    data.lblAdv_Regis_Total = json.lblAdv_Regis_Total;
    data.lblExp_Col_Total = json.lblExp_Col_Total;
    data.lblExp_Lg_Fee_Total = json.lblExp_Lg_Fee_Total;
    data.lblExp_Lg_Exp_Total = json.lblExp_Lg_Exp_Total;
    data.lblExp_Other_Total = json.lblExp_Other_Total;
    data.lblExp_Regis_Total = json.lblExp_Regis_Total;
    data.lblExp_Regis_VAT_Total = json.lblExp_Regis_VAT_Total;
    data.List_Expense = ListExpenseModel.parse(json.List_Expense);

    return data;
  }
}
