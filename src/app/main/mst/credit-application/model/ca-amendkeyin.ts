export class caAmendKeyIn {

  public com_code;
  public ca_no;
  public run_no;
  public table_name;
  public field_name;
  public field_type;
  public old_data;
  public new_data;
  public amend_by;
  public last_amend_dt;
  public apprv_by;
  public apprv_dt;
  public amend_reason;
  public key_field;
  public key_value;
  public cancel_by;
  public cancel_dt;
  public reqst_dt;
  public topic_old;
  public content;
  public suffix_field;
  public grp_nme;
  public seq_field;
  public topic_new;
  public amend_no;
  public key_mst_value;
  public key_mst_field;

  constructor()
  constructor(com_code,
              ca_no,
              run_no,
              table_name,
              field_name,
              field_type,
              old_data,
              new_data,
              amend_by,
              last_amend_dt,
              apprv_by,
              apprv_dt,
              amend_reason,
              key_field,
              key_value,
              cancel_by,
              cancel_dt,
              reqst_dt,
              topic_old,
              content,
              suffix_field,
              grp_nme,
              seq_field,
              topic_new,
              amend_no,
              key_mst_value,
              key_mst_field)
  constructor(com_code?,
              ca_no?,
              run_no?,
              table_name?,
              field_name?,
              field_type?,
              old_data?,
              new_data?,
              amend_by?,
              last_amend_dt?,
              apprv_by?,
              apprv_dt?,
              amend_reason?,
              key_field?,
              key_value?,
              cancel_by?,
              cancel_dt?,
              reqst_dt?,
              topic_old?,
              content?,
              suffix_field?,
              grp_nme?,
              seq_field?,
              topic_new?,
              amend_no?,
              key_mst_value?,
              key_mst_field?) {
    this.com_code = com_code;
    this.ca_no = ca_no;
    this.run_no = run_no;
    this.table_name = table_name;
    this.field_name = field_name;
    this.field_type = field_type;
    this.old_data = old_data;
    this.new_data = new_data;
    this.amend_by = amend_by;
    this.last_amend_dt = last_amend_dt;
    this.apprv_by = apprv_by;
    this.apprv_dt = apprv_dt;
    this.amend_reason = amend_reason;
    this.key_field = key_field;
    this.key_value = key_value;
    this.cancel_by = cancel_by;
    this.cancel_dt = cancel_dt;
    this.reqst_dt = reqst_dt;
    this.topic_old = topic_old;
    this.content = content;
    this.suffix_field = suffix_field;
    this.grp_nme = grp_nme;
    this.seq_field = seq_field;
    this.topic_new = topic_new;
    this.amend_no = amend_no;
    this.key_mst_value = key_mst_value;
    this.key_mst_field = key_mst_field;

  }

  static parse(jsons: any[]) : caAmendKeyIn[] {
    let data: caAmendKeyIn[] = [];
    if (jsons) {
      for (let json of jsons) {
        data.push(new caAmendKeyIn(
          json.com_code,
          json.ca_no,
          json.run_no,
          json.table_name,
          json.field_name,
          json.field_type,
          json.old_data,
          json.new_data,
          json.amend_by,
          json.last_amend_dt,
          json.apprv_by,
          json.apprv_dt,
          json.amend_reason,
          json.key_field,
          json.key_value,
          json.cancel_by,
          json.cancel_dt,
          json.reqst_dt,
          json.topic_old,
          json.content,
          json.suffix_field,
          json.grp_nme,
          json.seq_field,
          json.topic_new,
          json.amend_no,
          json.key_mst_value,
          json.key_mst_field
        ))
      }
    }
    return data;
  }
}
