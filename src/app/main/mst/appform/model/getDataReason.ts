/**
 * Created by peerawat.ko on 26/09/2560.
 */
export class ListReason {
  public com_code: any;
  public ca_no: any;
  public approve_type: any;
  public run_no: any;
  public approve_flg: any;
  public approve_user: any;
  public approve_date: any;
  public remark: any;
  public ca_comment: any;
  public approve_name: any;

  constructor()
  constructor(com_code: any,
              ca_no: any,
              approve_type: any,
              run_no: any,
              approve_flg: any,
              approve_user: any,
              approve_date: any,
              remark: any,
              ca_comment: any,
              approve_name: any)
  constructor(com_code ?: any,
              ca_no ?: any,
              approve_type ?: any,
              run_no ?: any,
              approve_flg ?: any,
              approve_user ?: any,
              approve_date ?: any,
              remark ?: any,
              ca_comment ?: any,
              approve_name ?: any) {
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

  static parse(json: any[]) {
    let data: ListReason[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new ListReason(
        json[i].COM_CODE,
        json[i].CA_NO,
        json[i].APPROVE_TYPE,
        json[i].RUN_NO,
        json[i].APPROVE_FLG,
        json[i].APPROVE_USER,
        json[i].APPROVE_DATE,
        json[i].REMARK,
        json[i].CA_COMMENT,
        json[i].APPROVE_NAME
      ))
    }

    return data;
  }
}
