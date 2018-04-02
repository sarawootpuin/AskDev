/**
 * Created by pongsatorn.an on 25/08/2560.
 */

export class SaleCallAttendees {
  public    sale_call_no;
  public    seq_no;
  public    order_no;
  public    attnd_type;
  public    attnd_name;
  public    attnd_position;
  public    name_full;

  constructor()
  constructor(sale_call_no, seq_no, order_no, attnd_type, attnd_name, attnd_position, name_full)
  constructor(sale_call_no?, seq_no?, order_no?, attnd_type?, attnd_name?, attnd_position?, name_full?) {
    this.sale_call_no = sale_call_no;
    this.seq_no = seq_no;
    this.order_no = order_no;
    this.attnd_type = attnd_type;
    this.attnd_name = attnd_name;
    this.attnd_position = attnd_position;
    this.name_full = name_full;
  }


  static parse(json: any[]) {
    let data: SaleCallAttendees[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new SaleCallAttendees(
        json[i].sale_call_no,
        json[i].seq_no,
        json[i].order_no,
        json[i].attnd_type,
        json[i].attnd_name,
        json[i].attnd_position,
        json[i].name_full
      ))
    }
    return data;
  }

}
