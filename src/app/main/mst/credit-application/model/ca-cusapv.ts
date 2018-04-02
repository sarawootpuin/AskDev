/**
 * Created by pongsatorn.an on 25/01/2561.
 */

export class caCusapv {

  public com_code;
  public ca_code;
  public approve_type;
  public approve_runno;
  public approve_person;
  public approve_level;
  public approve_date;
  public document_no;
  public document_date;
  public approve_user;
  public apv_person_name;
  public apv_user_name;


  constructor()
  constructor(com_code, ca_code, approve_type, approve_runno, approve_person, approve_level, approve_date, document_no, document_date, approve_user, apv_person_name, apv_user_name)
  constructor(com_code?, ca_code?, approve_type?, approve_runno?, approve_person?, approve_level?, approve_date?, document_no?, document_date?, approve_user?, apv_person_name?, apv_user_name?) {
    this.com_code = com_code;
    this.ca_code = ca_code;
    this.approve_type = approve_type;
    this.approve_runno = approve_runno;
    this.approve_person = approve_person;
    this.approve_level = approve_level;
    this.approve_date = approve_date;
    this.document_no = document_no;
    this.document_date = document_date;
    this.approve_user = approve_user;
    this.apv_person_name = apv_person_name;
    this.apv_user_name = apv_user_name;
  }


  static
  parse(json: any[]) {
    let data: caCusapv[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caCusapv(
          json[i].com_code,
          json[i].ca_code,
          json[i].approve_type,
          json[i].approve_runno,
          json[i].approve_person,
          json[i].approve_level,
          json[i].approve_date,
          json[i].document_no,
          json[i].document_date,
          json[i].approve_user,
          json[i].apv_person_name,
          json[i].apv_user_name
          )
        )
      }
    }
    return data;
  }
}
