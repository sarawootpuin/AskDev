/**
 * Created by hataichanok.yo on 09/07/2561.
 */
export class caRating{
  public   com_code;
  public   ca_no;
  public   id_code;
  public   answer;
  public   remark;
  public   remark_sub;

  constructor()
  constructor(com_code, ca_no, id_code, answer, remark, remark_sub)
  constructor(com_code?, ca_no?, id_code?, answer?, remark?, remark_sub?) {
    this.com_code = com_code;
    this.ca_no = ca_no;
    this.id_code = id_code;
    this.answer = answer;
    this.remark = remark;
    this.remark_sub = remark_sub;
  }

  static
  parse(json: any[]) {
    let data: caRating[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new caRating(
        json[i].COM_CODE,
        json[i].CA_NO,
        json[i].ID_CODE,
        json[i].ANSWER,
        json[i].REMARK,
        json[i].REMARK_SUB
      ))
    }
    return data;
  }
}
