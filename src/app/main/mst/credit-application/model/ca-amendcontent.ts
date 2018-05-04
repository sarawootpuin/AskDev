export class caAmendContent {
  public com_code;
  public ca_no;
  public amend_time;
  public content;
  public amend_reason;
  public apprv_by;
  public apprv_dt;
  public num_line;
  public num_non_line;
  public amend_note;
  public amend_date;
  public ver_amend_date;
  public ver_amend_by;
  public ver_approve_date;
  public ver_approve_by;
  public overdue_reason;

  constructor()
  constructor(com_code,
              ca_no,
              amend_time,
              content,
              amend_reason,
              apprv_by,
              apprv_dt,
              num_line,
              num_non_line,
              amend_note,
              amend_date,
              ver_amend_date,
              ver_amend_by,
              ver_approve_date,
              ver_approve_by,
              overdue_reason)
  constructor(com_code?,
              ca_no?,
              amend_time?,
              content?,
              amend_reason?,
              apprv_by?,
              apprv_dt?,
              num_line?,
              num_non_line?,
              amend_note?,
              amend_date?,
              ver_amend_date?,
              ver_amend_by?,
              ver_approve_date?,
              ver_approve_by?,
              overdue_reason?) {
    this.com_code = com_code;
    this.ca_no = ca_no;
    this.amend_time = amend_time;
    this.content = content;
    this.amend_reason = amend_reason;
    this.apprv_by = apprv_by;
    this.apprv_dt = apprv_dt;
    this.num_line = num_line;
    this.num_non_line = num_non_line;
    this.amend_note = amend_note;
    this.amend_date = amend_date;
    this.ver_amend_date = ver_amend_date;
    this.ver_amend_by = ver_amend_by;
    this.ver_approve_date = ver_approve_date;
    this.ver_approve_by = ver_approve_by;
    this.overdue_reason = overdue_reason;
  }

  static parse(jsons: any[]) {
    let data: caAmendContent[] = [];
    if (jsons) {
      for (let json of jsons) {
        data.push(new caAmendContent(
          json.com_code,
          json.ca_no,
          json.amend_time,
          json.content,
          json.amend_reason,
          json.apprv_by,
          json.apprv_dt,
          json.num_line,
          json.num_non_line,
          json.amend_note,
          json.amend_date,
          json.ver_amend_date,
          json.ver_amend_by,
          json.ver_approve_date,
          json.ver_approve_by,
          json.overdue_reason
        ))
      }
    }
    return data;
  }
}
