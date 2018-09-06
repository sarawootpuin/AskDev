/**
 * Created by tanapon.sa on 09/07/2561.
 */
export class RelateContactDtail {
  public ENT_TYPE: any;
  public ENT_CODE: any;
  public REF_CODE: any;
  public AGR_CODE: any;
  public COM_CODE: any;
  public AR: any;
  public FIN_AMT_E_VAT: any;
  public PAYMENT_GRADING: any;
  public FULL_STATUS: any;
  public COLLECTOR: any;
  public ENT_CD: any;
  public DUE_DAY: any;
  public INSTALLMENT_R: any;
  public INSTALLMENT: any;
  public SCHEDULE: any;
  public SCHEDULE_TYPE: any;
  public REG_NUM_PROV: any;
  public REG_NUM: any;
  public REG_PROVINCE: any;


  constructor(ENT_TYPE?: any, ENT_CODE?: any, REF_CODE?: any, AGR_CODE?: any, COM_CODE?: any, AR ?: any, FIN_AMT_E_VAT?: any,
              PAYMENT_GRADING?: any, FULL_STATUS?: any, COLLECTOR?: any, ENT_CD?: any, DUE_DAY?: any, INSTALLMENT_R?: any,
              INSTALLMENT?: any, SCHEDULE?: any, SCHEDULE_TYPE?: any, REG_NUM_PROV?: any, REG_NUM?: any, REG_PROVINCE?: any) {
    this.ENT_TYPE = ENT_TYPE;
    this.ENT_CODE = ENT_CODE;
    this.REF_CODE = REF_CODE;
    this.AGR_CODE = AGR_CODE;
    this.COM_CODE = COM_CODE;
    this.AR = AR;
    this.FIN_AMT_E_VAT = FIN_AMT_E_VAT;
    this.PAYMENT_GRADING = PAYMENT_GRADING;
    this.FULL_STATUS = FULL_STATUS;
    this.COLLECTOR = COLLECTOR;
    this.ENT_CD = ENT_CD;
    this.DUE_DAY = DUE_DAY;
    this.INSTALLMENT_R = INSTALLMENT_R;
    this.INSTALLMENT = INSTALLMENT;
    this.SCHEDULE = SCHEDULE;
    this.SCHEDULE_TYPE = SCHEDULE_TYPE;
    this.REG_NUM_PROV = REG_NUM_PROV;
    this.REG_NUM = REG_NUM;
    this.REG_PROVINCE = REG_PROVINCE;
  }

  static parse(json: any[]) {
    let data: RelateContactDtail[] = [];

    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new RelateContactDtail(
          json[i].ENT_TYPE,
          json[i].ENT_CODE,
          json[i].REF_CODE,
          json[i].AGR_CODE,
          json[i].COM_CODE,
          json[i].AR,
          json[i].FIN_AMT_E_VAT,
          json[i].PAYMENT_GRADING,
          json[i].FULL_STATUS,
          json[i].COLLECTOR,
          json[i].ENT_CD,
          json[i].DUE_DAY,
          json[i].INSTALLMENT_R,
          json[i].INSTALLMENT,
          json[i].SCHEDULE,
          json[i].SCHEDULE_TYPE,
          json[i].REG_NUM_PROV,
          json[i].REG_NUM,
          json[i].REG_PROVINCE
        ))
      }
    }

    return data;
  }
}
