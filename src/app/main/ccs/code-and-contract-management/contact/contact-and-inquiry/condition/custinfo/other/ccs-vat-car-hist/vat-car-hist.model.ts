/**
 * Created by tanapon.sa on 20/06/2561.
 */
export class VatCarHistModel {
  public REG_NUM : any;
  public REG_DATE : any;
  public REG_EXP : any;
  public REG_AMT_I_SERVICE : any;
  public REG_AMT_E_SERVICE : any;
  public REG_OTHER_EXPENSE : any;


  constructor(REG_NUM?: any, REG_DATE?: any, REG_EXP?: any, REG_AMT_I_SERVICE?: any, REG_AMT_E_SERVICE?: any, REG_OTHER_EXPENSE?: any) {
    this.REG_NUM = REG_NUM;
    this.REG_DATE = REG_DATE;
    this.REG_EXP = REG_EXP;
    this.REG_AMT_I_SERVICE = REG_AMT_I_SERVICE;
    this.REG_AMT_E_SERVICE = REG_AMT_E_SERVICE;
    this.REG_OTHER_EXPENSE = REG_OTHER_EXPENSE;
  }

  static parse(json:any[]) {
    let data: VatCarHistModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new VatCarHistModel(
        json[i].REG_NUM,
        json[i].REG_DATE,
        json[i].REG_EXP,
        json[i].REG_AMT_I_SERVICE,
        json[i].REG_AMT_E_SERVICE,
        json[i].REG_OTHER_EXPENSE
      ))
    }

    return data;
  }
}
