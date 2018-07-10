/**
 * Created by tanapon.sa on 22/06/2561.
 */
export class ReferFollowPersonModel {
  public lbl_pay_add1: any;
  public lbl_pay_add2: any;
  public lbl_pay_tel: any;
  public lbl_pay_mo: any;
  public lbl_pay_mo2: any;
  public lbl_pay_mo3: any;
  public payee_name: any;
  public related_with_cus: any;


  constructor(lbl_pay_add1?: any, lbl_pay_add2?: any, lbl_pay_tel?: any, lbl_pay_mo?: any,
              lbl_pay_mo2?: any, lbl_pay_mo3?: any, payee_name?: any, related_with_cus?: any) {
    this.lbl_pay_add1 = lbl_pay_add1|| '';
    this.lbl_pay_add2 = lbl_pay_add2|| '';
    this.lbl_pay_tel = lbl_pay_tel|| '';
    this.lbl_pay_mo = lbl_pay_mo|| '';
    this.lbl_pay_mo2 = lbl_pay_mo2|| '';
    this.lbl_pay_mo3 = lbl_pay_mo3|| '';
    this.payee_name = payee_name|| '';
    this.related_with_cus = related_with_cus|| '';
  }

  static parse(json:any[]) {
    let data: ReferFollowPersonModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new ReferFollowPersonModel(
        json[i].lbl_pay_add1,
        json[i].lbl_pay_add2,
        json[i].lbl_pay_tel,
        json[i].lbl_pay_mo,
        json[i].lbl_pay_mo2,
        json[i].lbl_pay_mo3,
        json[i].payee_name,
        json[i].related_with_cus
      ))
    }

    return data;
  }
}
