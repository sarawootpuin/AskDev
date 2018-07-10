export class RegAdvSub2 {

  public advance_no;
  public advance_date;
  public ds_number;
  public ds_date;
  public ds_amount;
  public cus_clear_advance;
  public reg_clear_advance;
  public description;

  constructor()

  constructor(advance_no, advance_date, ds_number, ds_date, ds_amount, cus_clear_advance,
              reg_clear_advance, description)

  constructor(advance_no?, advance_date?, ds_number?, ds_date?, ds_amount?, cus_clear_advance?,
              reg_clear_advance?, description?) {

    this.advance_no = advance_no;
    this.advance_date = advance_date;
    this.ds_number = ds_number;
    this.ds_date = ds_date;
    this.ds_amount = ds_amount;
    this.cus_clear_advance = cus_clear_advance;
    this.reg_clear_advance = reg_clear_advance;
    this.description = description;
  }

  static parse(json: any[]) {
    let data: RegAdvSub2[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new RegAdvSub2(
        json[i].advance_no,
        json[i].advance_date,
        json[i].ds_number,
        json[i].ds_date,
        json[i].ds_amount,
        json[i].cus_clear_advance,
        json[i].reg_clear_advance,
        json[i].description)
      )
    }
    return data;
  }

}
