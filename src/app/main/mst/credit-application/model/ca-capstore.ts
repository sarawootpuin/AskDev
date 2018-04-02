/**
 * Created by pongsatorn.an on 30/01/2561.
 */
export class caCapstore {

  public p_type;
  public cus_code;
  public cus_name;
  public com_code;
  public ca_no;
  public os_pri;
  public sbu_typ;
  public joint_seller_group;
  public grp_code;
  public total_exposure;

  constructor()
  constructor(p_type, cus_code, cus_name, com_code, ca_no, os_pri, sbu_typ, joint_seller_group, grp_code, total_exposure)
  constructor(p_type?, cus_code?, cus_name?, com_code?, ca_no?, os_pri?, sbu_typ?, joint_seller_group?, grp_code?, total_exposure?) {
    this.p_type = p_type;
    this.cus_code = cus_code;
    this.cus_name = cus_name;
    this.com_code = com_code;
    this.ca_no = ca_no;
    this.os_pri = os_pri;
    this.sbu_typ = sbu_typ;
    this.joint_seller_group = joint_seller_group;
    this.grp_code = grp_code;
    this.total_exposure = total_exposure;
  }


  static
  parse(json: any[]) {
    let data: caCapstore[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caCapstore(
          json[i].p_type,
          json[i].cus_code,
          json[i].cus_name,
          json[i].com_code,
          json[i].ca_no,
          json[i].os_pri,
          json[i].sbu_typ,
          json[i].joint_seller_group,
          json[i].grp_code,
          json[i].total_exposure
        ))
      }
    }
    return data;
  }
}
