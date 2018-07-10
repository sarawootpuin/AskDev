import {InsVolunModel} from "./insVolun.model";
/**
 * Created by tanapon.sa on 20/06/2561.
 */
export class insTransModel {
  public lblInform : any;
  public lblIns_Com : any;
  public lblKind_Of_Insurance : any;
  public lblType_Of_Insurance : any;
  public lblIns_Date : any;
  public lblIns_Exp2 : any;
  public lblIns_Num : any;
  public lblPol_Num : any;
  public lblST_No : any;
  public lblCov_Amt : any;
  public lblTotal_Prem : any;
  public lblDuty : any;
  public lblIns_Vat : any;
  public lblNet_Prem : any;
  public lblWht_Amount : any;
  public lblDiscount_Amount : any;
  public lblWht_No : any;
  public lblWht_Date : any;
  public lblAccknowage_By : any;
  public lblInform_By : any;
  public lblIns_RCV : any;
  public paidAmt : any;
  public lblSeller : any;
  public overdueAmt : any;
  public overdueNo : any;
  public status_flg : any;
  public cancel_date : any;
  public com_code : any;
  public list_InsVolun : InsVolunModel[];


  constructor(lblInform?: any, lblIns_Com?: any, lblKind_Of_Insurance?: any, lblType_Of_Insurance?: any,
              lblIns_Date?: any, lblIns_Exp2?: any, lblIns_Num?: any, lblPol_Num?: any, lblST_No?: any,
              lblCov_Amt?: any, lblTotal_Prem?: any, lblDuty?: any, lblIns_Vat?: any, lblNet_Prem?: any,
              lblWht_Amount?: any, lblDiscount_Amount?: any, lblWht_No?: any, lblWht_Date?: any,
              lblAccknowage_By?: any, lblInform_By?: any, lblIns_RCV?: any, paidAmt?: any, lblSeller?: any,
              overdueAmt?: any, overdueNo?: any,status_flg?: any,cancel_date?: any,com_code?: any,list_InsVolun?: InsVolunModel[]) {
    this.lblInform = lblInform;
    this.lblIns_Com = lblIns_Com;
    this.lblKind_Of_Insurance = lblKind_Of_Insurance;
    this.lblType_Of_Insurance = lblType_Of_Insurance;
    this.lblIns_Date = lblIns_Date;
    this.lblIns_Exp2 = lblIns_Exp2;
    this.lblIns_Num = lblIns_Num;
    this.lblPol_Num = lblPol_Num;
    this.lblST_No = lblST_No;
    this.lblCov_Amt = lblCov_Amt;
    this.lblTotal_Prem = lblTotal_Prem;
    this.lblDuty = lblDuty;
    this.lblIns_Vat = lblIns_Vat;
    this.lblNet_Prem = lblNet_Prem;
    this.lblWht_Amount = lblWht_Amount;
    this.lblDiscount_Amount = lblDiscount_Amount;
    this.lblWht_No = lblWht_No;
    this.lblWht_Date = lblWht_Date;
    this.lblAccknowage_By = lblAccknowage_By;
    this.lblInform_By = lblInform_By;
    this.lblIns_RCV = lblIns_RCV;
    this.paidAmt = paidAmt;
    this.lblSeller = lblSeller;
    this.overdueAmt = overdueAmt;
    this.overdueNo = overdueNo;
    this.status_flg = status_flg;
    this.cancel_date = cancel_date;
    this.com_code = com_code;
    this.list_InsVolun = list_InsVolun;
  }

  static parse(json:any[]) {
    let data:insTransModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new insTransModel(
        json[i].lblInform,
        json[i].lblIns_Com,
        json[i].lblKind_Of_Insurance,
        json[i].lblType_Of_Insurance,
        json[i].lblIns_Date,
        json[i].lblIns_Exp2,
        json[i].lblIns_Num,
        json[i].lblPol_Num,
        json[i].lblST_No,
        json[i].lblCov_Amt,
        json[i].lblTotal_Prem,
        json[i].lblDuty,
        json[i].lblIns_Vat,
        json[i].lblNet_Prem,
        json[i].lblWht_Amount,
        json[i].lblDiscount_Amount,
        json[i].lblWht_No,
        json[i].lblWht_Date,
        json[i].lblAccknowage_By,
        json[i].lblInform_By,
        json[i].lblIns_RCV,
        json[i].paidAmt,
        json[i].lblSeller,
        json[i].overdueAmt,
        json[i].overdueNo,
        json[i].status_flg,
        json[i].cancel_date,
        json[i].com_code,
        InsVolunModel.parse(json[i].List_InsVol)
      ))
    }

    return data;
  }
}
