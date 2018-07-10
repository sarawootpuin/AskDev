/**
 * Created by tanapon.sa on 19/06/2561.
 */
export class AddressModel {
  public lblF_Name:string;
  public lblCus_Name:string;
  public lblAddress:string;
  public lblZip_Desc:string;
  public lbl_age:string;
  public lblNear:string;
  public lblContract:string;
  public lblTel:string;
  public lblAdd_C:string;
  public lblZip_C_Desc:string;
  public lblTel_Card:string;
  public lblAdd_O:string;
  public lblZip_O_Desc:string;
  public lblOffice_Name:string;
  public lblOffice_Department:string;
  public lblOccupa_Desc:string;
  public lblPosi_Desc:string;
  public lblNear_O:string;
  public lblTel_O:string;
  public lblAdd_M:string;
  public lblZip_M_Desc:string;
  public lblNew_Card_No:string;
  public lblBranch_No:string;
  public lblBus_Vat_Flg:string;
  public lblSMS:string;
  public lblMobile_Phone:string;
  public lblEmail_Address:string;
  public richAdd_Debt:string;
  public lblProvince_Debt:string;
  public labelAdd_Individual_1:string;
  public labelAdd_Individual_2:string;
  public labelAdd_Juristic:string;
  public labelMail_G:string;
  public lbtype_bill:string;
  public lbdate_bill:string;


  constructor(lblF_Name?: string, lblCus_Name?: string, lblAddress?: string, lblZip_Desc?: string, lbl_age?: string,
              lblNear?: string, lblContract?: string, lblTel?: string, lblAdd_C?: string, lblZip_C_Desc?: string,
              lblTel_Card?: string, lblAdd_O?: string, lblZip_O_Desc?: string, lblOffice_Name?: string,
              lblOffice_Department?: string, lblOccupa_Desc?: string, lblPosi_Desc?: string, lblNear_O?: string,
              lblTel_O?: string, lblAdd_M?: string, lblZip_M_Desc?: string, lblNew_Card_No?: string, lblBranch_No?: string,
              lblBus_Vat_Flg?: string, lblSMS?: string, lblMobile_Phone?: string, lblEmail_Address?: string,
              richAdd_Debt?: string, lblProvince_Debt?: string, labelAdd_Individual_1?: string, labelAdd_Individual_2?: string,
              labelAdd_Juristic?: string, labelMail_G?: string,lbtype_bill?: string, lbdate_bill?: string) {
    this.lblF_Name = lblF_Name;
    this.lblCus_Name = lblCus_Name;
    this.lblAddress = lblAddress;
    this.lblZip_Desc = lblZip_Desc;
    this.lbl_age = lbl_age;
    this.lblNear = lblNear;
    this.lblContract = lblContract;
    this.lblTel = lblTel;
    this.lblAdd_C = lblAdd_C;
    this.lblZip_C_Desc = lblZip_C_Desc;
    this.lblTel_Card = lblTel_Card;
    this.lblAdd_O = lblAdd_O;
    this.lblZip_O_Desc = lblZip_O_Desc;
    this.lblOffice_Name = lblOffice_Name;
    this.lblOffice_Department = lblOffice_Department;
    this.lblOccupa_Desc = lblOccupa_Desc;
    this.lblPosi_Desc = lblPosi_Desc;
    this.lblNear_O = lblNear_O;
    this.lblTel_O = lblTel_O;
    this.lblAdd_M = lblAdd_M;
    this.lblZip_M_Desc = lblZip_M_Desc;
    this.lblNew_Card_No = lblNew_Card_No;
    this.lblBranch_No = lblBranch_No;
    this.lblBus_Vat_Flg = lblBus_Vat_Flg;
    this.lblSMS = lblSMS;
    this.lblMobile_Phone = lblMobile_Phone;
    this.lblEmail_Address = lblEmail_Address;
    this.richAdd_Debt = richAdd_Debt;
    this.lblProvince_Debt = lblProvince_Debt;
    this.labelAdd_Individual_1 = labelAdd_Individual_1;
    this.labelAdd_Individual_2 = labelAdd_Individual_2;
    this.labelAdd_Juristic = labelAdd_Juristic;
    this.labelMail_G = labelMail_G;
    this.lbtype_bill = lbtype_bill;
    this.lbdate_bill = lbdate_bill;
  }

  static parse(json:any) {
    let data: AddressModel = new AddressModel();

    data.lblF_Name = json.lblF_Name;
    data.lblCus_Name = json.lblCus_Name;
    data.lblAddress = json.lblAddress;
    data.lblZip_Desc = json.lblZip_Desc;
    data.lbl_age = json.lbl_age;
    data.lblNear = json.lblNear;
    data.lblContract = json.lblContract;
    data.lblTel = json.lblTel;
    data.lblAdd_C = json.lblAdd_C;
    data.lblZip_C_Desc = json.lblZip_C_Desc;
    data.lblTel_Card = json.lblTel_Card;
    data.lblAdd_O = json.lblAdd_O;
    data.lblZip_O_Desc = json.lblZip_O_Desc;
    data.lblOffice_Name = json.lblOffice_Name;
    data.lblOffice_Department = json.lblOffice_Department;
    data.lblOccupa_Desc = json.lblOccupa_Desc;
    data.lblPosi_Desc = json.lblPosi_Desc;
    data.lblNear_O = json.lblNear_O;
    data.lblTel_O = json.lblTel_O;
    data.lblAdd_M = json.lblAdd_M;
    data.lblZip_M_Desc = json.lblZip_M_Desc;
    data.lblNew_Card_No = json.lblNew_Card_No;
    data.lblBranch_No = json.lblBranch_No;
    data.lblBus_Vat_Flg = json.lblBus_Vat_Flg;
    data.lblSMS = json.lblSMS;
    data.lblMobile_Phone = json.lblMobile_Phone;
    data.lblEmail_Address = json.lblEmail_Address;
    data.richAdd_Debt = json.richAdd_Debt;
    data.lblProvince_Debt = json.lblProvince_Debt;
    data.labelAdd_Individual_1 = json.labelAdd_Individual_1;
    data.labelAdd_Individual_2 = json.labelAdd_Individual_2;
    data.labelAdd_Juristic = json.labelAdd_Juristic;
    data.labelMail_G = json.labelMail_G;
    data.lbtype_bill = json.lbtype_bill;
    data.lbdate_bill = json.lbdate_bill;

    return data;
  }

  static parseList(json:any[]) {
    let data: AddressModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new AddressModel(
        json[i].lblF_Name,
        json[i].lblCus_Name,
        json[i].lblAddress,
        json[i].lblZip_Desc,
        json[i].lbl_age,
        json[i].lblNear,
        json[i].lblContract,
        json[i].lblTel,
        json[i].lblAdd_C,
        json[i].lblZip_C_Desc,
        json[i].lblTel_Card,
        json[i].lblAdd_O,
        json[i].lblZip_O_Desc,
        json[i].lblOffice_Name,
        json[i].lblOffice_Department,
        json[i].lblOccupa_Desc,
        json[i].lblPosi_Desc,
        json[i].lblNear_O,
        json[i].lblTel_O,
        json[i].lblAdd_M,
        json[i].lblZip_M_Desc,
        json[i].lblNew_Card_No,
        json[i].lblBranch_No,
        json[i].lblBus_Vat_Flg,
        json[i].lblSMS,
        json[i].lblMobile_Phone,
        json[i].lblEmail_Address,
        json[i].richAdd_Debt,
        json[i].lblProvince_Debt,
        json[i].labelAdd_Individual_1,
        json[i].labelAdd_Individual_2,
        json[i].labelAdd_Juristic,
        json[i].labelMail_G,
        json[i].lbtype_bill,
        json[i].lbdate_bill,
      ))
    }

    return data;
  }
}
