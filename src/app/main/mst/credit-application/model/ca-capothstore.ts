/**
 * Created by pongsatorn.an on 01/02/2561.
 */
export class caCapOthstore {

  public cus_code;
  public cus_name;
  public com_code;
  public ca_no;
  public os_pri;

  constructor()
  constructor(cus_code, cus_name, com_code, ca_no, os_pri)
  constructor(cus_code?, cus_name?, com_code?, ca_no?, os_pri?) {
    this.cus_code = cus_code;
    this.cus_name = cus_name;
    this.com_code = com_code;
    this.ca_no = ca_no;
    this.os_pri = os_pri;
  }

  static
  parse(json: any[]) {
    let data: caCapOthstore[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caCapOthstore(
          json[i].cus_code,
          json[i].cus_name,
          json[i].com_code,
          json[i].ca_no,
          json[i].os_pri
        ))
      }
    }
    return data;
  }
}
