export class caBuyerDoc {
  public com_code;
  public ca_no;
  public buyer_code;
  public doc_type;
  public doc_code;
  public factored_doc_type;
  public factored_ifany;
  public effective_date;
  public input_by;
  public input_date;
  public last_update_by;
  public last_update_date;
  public remark;
  public id_code;
  public remark_cat;
  public select_o;
  public select_p;
  public select_c;
  public oth1;
  public oth2;
  public oth3;

  public forfilter;

  constructor()
  constructor(com_code, ca_no, buyer_code, doc_type, doc_code, factored_doc_type, factored_ifany, effective_date, input_by, input_date, last_update_by, last_update_date, remark, id_code, remark_cat, select_o, select_p, select_c, oth1, oth2, oth3)
  constructor(com_code?, ca_no?, buyer_code?, doc_type?, doc_code?, factored_doc_type?, factored_ifany?, effective_date?, input_by?, input_date?, last_update_by?, last_update_date?, remark?, id_code?, remark_cat?, select_o?, select_p?, select_c?, oth1?, oth2?, oth3?) {
    this.com_code = com_code;
    this.ca_no = ca_no;
    this.buyer_code = buyer_code;
    this.doc_type = doc_type;
    this.doc_code = doc_code;
    this.factored_doc_type = factored_doc_type;
    this.factored_ifany = factored_ifany ? factored_ifany : 'N';
    this.effective_date = effective_date;
    this.input_by = input_by;
    this.input_date = input_date;
    this.last_update_by = last_update_by;
    this.last_update_date = last_update_date;
    this.remark = remark ? remark : '';
    this.id_code = id_code;
    this.remark_cat = remark_cat ? remark_cat : '';
    this.select_o = select_o ? select_o : 'N';
    this.select_p = select_p ? select_p : 'N';
    this.select_c = select_c ? select_c : 'N';
    this.oth1 = oth1? oth1 : '';
    this.oth2 = oth2? oth2 : '';
    this.oth3 = oth3? oth3 : '';
    if (this.doc_type == '1') {
      this.forfilter  = 'Factored';
    }else if (this.doc_type == '2'){
      this.forfilter  = 'Collection';
    }
  }

  static
  parse(json: any[]) {
    let data: caBuyerDoc[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {

        data.push(new caBuyerDoc(
          json[i].com_code,
          json[i].ca_no,
          json[i].buyer_code,
          json[i].doc_type,
          json[i].doc_code,
          json[i].factored_doc_type,
          json[i].factored_ifany,
          json[i].effective_date,
          json[i].input_by,
          json[i].input_date,
          json[i].last_update_by,
          json[i].last_update_date,
          json[i].remark,
          json[i].id_code,
          json[i].remark_cat,
          json[i].select_o,
          json[i].select_p,
          json[i].select_c,
          json[i].oth1,
          json[i].oth2,
          json[i].oth3
        ))
      }
    }
    //console.log(data);
    return data ;
  }
}
