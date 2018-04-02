export class caEntityCard {
  public   com_code;
  public   ent_code;
  public   card_type;
  public   card_no;
  public   card_issue_date;
  public   card_expire_date;
  public   card_add1;
  public   card_add2;
  public   card_by;
  public   card_type_desc;


  constructor()

  constructor(com_code, ent_code, card_type, card_no, card_issue_date, card_expire_date, card_add1, card_add2, card_by)
  constructor(com_code?, ent_code?, card_type?, card_no?, card_issue_date?, card_expire_date?, card_add1?, card_add2?, card_by?) {
    this.com_code = com_code ? com_code  : '';
    this.ent_code = ent_code;
    this.card_type = card_type;
    this.card_no = card_no;
    this.card_issue_date = card_issue_date;
    this.card_expire_date = card_expire_date;
    this.card_add1 = card_add1;
    this.card_add2 = card_add2;
    this.card_by = card_by;
  }

    static
    parse(json: any[]) {
      let data: caEntityCard[] = [];
      if (json) {
        for (let i = 0; i < json.length; i++) {
          data.push(new caEntityCard(
          json[i].com_code,
          json[i].ent_code,
          json[i].card_type,
          json[i].card_no,
          json[i].card_issue_date,
          json[i].card_expire_date,
          json[i].card_add1,
          json[i].card_add2,
          json[i].card_by

        ))
      }
     }
    return data;
  }
}
