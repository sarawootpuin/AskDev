export class caApvHist {
  public com_code;
  public ca_no;
  public approve_type;
  public run_no;
  public approve_flg;
  public approve_user;
  public approve_date;
  public remark;
  public ca_comment;
  public approve_name;

  constructor()
  constructor(com_code, ca_no, approve_type, run_no, approve_flg, approve_user, approve_date, remark, ca_comment, approve_name)

  constructor(com_code?, ca_no?, approve_type?, run_no?, approve_flg?, approve_user?, approve_date?, remark?, ca_comment?, approve_name?) {
    this.com_code = com_code;
    this.ca_no = ca_no;
    this.approve_type = approve_type;
    this.run_no = run_no;
    this.approve_flg = approve_flg;
    this.approve_user = approve_user;
    this.approve_date = approve_date;
    this.remark = remark;
    this.ca_comment = ca_comment;
    this.approve_name = approve_name;
  }

  static
  parse(json: any[]) {
    let data: caApvHist[] = [];
     if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caApvHist(
          json[i].com_code,
          json[i].ca_no,
          json[i].approve_type,
          json[i].run_no,
          json[i].approve_flg,
          json[i].approve_user,
          json[i].approve_date,
          json[i].remark,
          json[i].ca_comment,
          json[i].approve_name
        ))
      }
     }
    return data ;
  }

}
