/**
 * Created by tanapon.sa on 11/05/2561.
 */
export class cdsGroupAgrFollowModel {
  public com_code: string;
  public agr_code: string;
  public new_card_no: string;
  public collector: string;
  public c_status: string;
  public license_no: string;
  public new_use: string;
  public product_type: string;


  constructor(com_code?: string, agr_code?: string, new_card_no?: string, collector?: string,
              c_status?: string, license_no?: string, new_use?: string, product_type?: string) {
    this.com_code = com_code;
    this.agr_code = agr_code;
    this.new_card_no = new_card_no;
    this.collector = collector;
    this.c_status = c_status;
    this.license_no = license_no;
    this.new_use = new_use;
    this.product_type = product_type;
  }

  static parse(json : any[]) {
    let data:cdsGroupAgrFollowModel[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new cdsGroupAgrFollowModel(
        json[i].com_code,
        json[i].agr_code,
        json[i].new_card_no,
        json[i].collector,
        json[i].c_status,
        json[i].license_no,
        json[i].new_use,
        json[i].product_type
      ))
    }

    return data;
  }
}
