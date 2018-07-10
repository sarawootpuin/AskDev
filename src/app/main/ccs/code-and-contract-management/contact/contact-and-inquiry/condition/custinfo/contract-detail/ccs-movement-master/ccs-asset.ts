/**
 * Created by tanapon.sa on 21/06/2561.
 */
export class AssetModel {
  public lblLicense : any;
  public lblReg_Exp2 : any;
  public vCTRL_LIC : any;
  public lblA_Order : any;
  public lblBody : any;
  public lblBody_Desc : any;
  public lblBrand : any;
  public lblBrand_Desc : any;
  public lblModel : any;
  public lblAsset_Description : any;
  public lblAccessory : any;
  public lblColor : any;
  public lblColor_Desc : any;
  public lblYear : any;
  public lblCC : any;
  public lblWeight : any;
  public lblMiles : any;
  public lblEng_Num : any;
  public lblChassis : any;
  public lblSeat : any;
  public lblSeat_Desc : any;
  public lblEngine_Type : any;
  public lblEngine_Desc : any;
  public lblVehicle_Used : any;
  public lblVehical_Desc : any;
  public lblQuantity_Matrix : any;
  public lblQ_Matrix_Desc : any;
  public lblInsure_Code : any;
  public lblCode : any;
  public lblSub_Code : any;
  public lblReg_Num : any;
  public lblReg_Date : any;
  public lblReg_Exp : any;
  public lblReg_Amt_E_Service : any;
  public lblReg_Amt_I_Service : any;
  public lblReg_I_Service : any;
  public lblPremium : any;
  public lbl1 : any;
  public lbl2 : any;
  public lbl3 : any;
  public lbl4 : any;
  public lbl5 : any;
  public lbl6 : any;
  public lbl7 : any;
  public lbl8 : any;
  public lbl9 : any;
  public lbl10 : any;
  public lbl11 : any;
  public lbl12 : any;
  public addr_Asset : any;


  constructor(lblLicense?: any, lblReg_Exp2?: any, vCTRL_LIC?: any, lblA_Order?: any, lblBody?: any,
              lblBody_Desc?: any, lblBrand?: any, lblBrand_Desc?: any, lblModel?: any, lblAsset_Description?: any,
              lblAccessory?: any, lblColor?: any, lblColor_Desc?: any, lblYear?: any, lblCC?: any, lblWeight?: any,
              lblMiles?: any, lblEng_Num?: any, lblChassis?: any, lblSeat?: any, lblSeat_Desc?: any,
              lblEngine_Type?: any, lblEngine_Desc?: any, lblVehicle_Used?: any, lblVehical_Desc?: any,
              lblQuantity_Matrix?: any, lblQ_Matrix_Desc?: any, lblInsure_Code?: any, lblCode?: any,
              lblSub_Code?: any, lblReg_Num?: any, lblReg_Date?: any, lblReg_Exp?: any, lblReg_Amt_E_Service?: any,
              lblReg_Amt_I_Service?: any, lblReg_I_Service?: any, lblPremium?: any, lbl1?: any, lbl2?: any,
              lbl3?: any, lbl4?: any, lbl5?: any, lbl6?: any, lbl7?: any, lbl8?: any, lbl9?: any, lbl10?: any,
              lbl11?: any, lbl12?: any, addr_Asset?: any) {
    this.lblLicense = lblLicense || '';
    this.lblReg_Exp2 = lblReg_Exp2|| '';
    this.vCTRL_LIC = vCTRL_LIC|| '';
    this.lblA_Order = lblA_Order|| '';
    this.lblBody = lblBody || ''|| '';
    this.lblBody_Desc = lblBody_Desc || '';
    this.lblBrand = lblBrand|| '';
    this.lblBrand_Desc = lblBrand_Desc|| '';
    this.lblModel = lblModel || '';
    this.lblAsset_Description = lblAsset_Description|| '';
    this.lblAccessory = lblAccessory|| '';
    this.lblColor = lblColor|| '';
    this.lblColor_Desc = lblColor_Desc|| '';
    this.lblYear = lblYear|| '';
    this.lblCC = lblCC|| '';
    this.lblWeight = lblWeight|| '';
    this.lblMiles = lblMiles|| '';
    this.lblEng_Num = lblEng_Num|| '';
    this.lblChassis = lblChassis|| '';
    this.lblSeat = lblSeat|| '';
    this.lblSeat_Desc = lblSeat_Desc|| '';
    this.lblEngine_Type = lblEngine_Type|| '';
    this.lblEngine_Desc = lblEngine_Desc|| '';
    this.lblVehicle_Used = lblVehicle_Used|| '';
    this.lblVehical_Desc = lblVehical_Desc|| '';
    this.lblQuantity_Matrix = lblQuantity_Matrix|| '';
    this.lblQ_Matrix_Desc = lblQ_Matrix_Desc|| '';
    this.lblInsure_Code = lblInsure_Code|| '';
    this.lblCode = lblCode|| '';
    this.lblSub_Code = lblSub_Code|| '';
    this.lblReg_Num = lblReg_Num|| '';
    this.lblReg_Date = lblReg_Date|| '';
    this.lblReg_Exp = lblReg_Exp|| '';
    this.lblReg_Amt_E_Service = lblReg_Amt_E_Service|| '';
    this.lblReg_Amt_I_Service = lblReg_Amt_I_Service|| '';
    this.lblReg_I_Service = lblReg_I_Service|| '';
    this.lblPremium = lblPremium|| '';
    this.lbl1 = lbl1|| '';
    this.lbl2 = lbl2|| '';
    this.lbl3 = lbl3|| '';
    this.lbl4 = lbl4|| '';
    this.lbl5 = lbl5|| '';
    this.lbl6 = lbl6|| '';
    this.lbl7 = lbl7|| '';
    this.lbl8 = lbl8|| '';
    this.lbl9 = lbl9|| '';
    this.lbl10 = lbl10|| '';
    this.lbl11 = lbl11|| '';
    this.lbl12 = lbl12|| '';
    this.addr_Asset = addr_Asset|| '';
  }

  static parse(json : any[]) {
    let data: AssetModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new AssetModel(
        json[i].lblLicense,
        json[i].lblReg_Exp2,
        json[i].vCTRL_LIC,
        json[i].lblA_Order,
        json[i].lblBody,
        json[i].lblBody_Desc,
        json[i].lblBrand,
        json[i].lblBrand_Desc,
        json[i].lblModel,
        json[i].lblAsset_Description,
        json[i].lblAccessory,
        json[i].lblColor,
        json[i].lblColor_Desc,
        json[i].lblYear,
        json[i].lblCC,
        json[i].lblWeight,
        json[i].lblMiles,
        json[i].lblEng_Num,
        json[i].lblChassis,
        json[i].lblSeat,
        json[i].lblSeat_Desc,
        json[i].lblEngine_Type,
        json[i].lblEngine_Desc,
        json[i].lblVehicle_Used,
        json[i].lblVehical_Desc,
        json[i].lblQuantity_Matrix,
        json[i].lblQ_Matrix_Desc,
        json[i].lblInsure_Code,
        json[i].lblCode,
        json[i].lblSub_Code,
        json[i].lblReg_Num,
        json[i].lblReg_Date,
        json[i].lblReg_Exp,
        json[i].lblReg_Amt_E_Service,
        json[i].lblReg_Amt_I_Service,
        json[i].lblReg_I_Service,
        json[i].lblPremium,
        json[i].lbl1,
        json[i].lbl2,
        json[i].lbl3,
        json[i].lbl4,
        json[i].lbl5,
        json[i].lbl6,
        json[i].lbl7,
        json[i].lbl8,
        json[i].lbl9,
        json[i].lbl10,
        json[i].lbl11,
        json[i].lbl12,
        json[i].addr_Asset
      ))
    }

    return data;
  }
}
