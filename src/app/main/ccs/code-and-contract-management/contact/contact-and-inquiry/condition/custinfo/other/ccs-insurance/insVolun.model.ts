/**
 * Created by tanapon.sa on 20/06/2561.
 */
export class InsVolunModel {
  public due_date: any;
  public payment_amount: any;
  public discount: any;
  public wht_amt: any;
  public net_amt: any;
  public paid_amount: any;
  public past_due: any;
  public total_pastdue: any;


  constructor(due_date?: any, payment_amount?: any, discount?: any, wht_amt?: any, net_amt?: any, paid_amount?: any,
              past_due?: any, total_pastdue?: any) {
    this.due_date = due_date;
    this.payment_amount = payment_amount;
    this.discount = discount;
    this.wht_amt = wht_amt;
    this.net_amt = net_amt;
    this.paid_amount = paid_amount;
    this.past_due = past_due;
    this.total_pastdue = total_pastdue;
  }

  static parse(json:any[]) {
    let data:InsVolunModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new InsVolunModel(
        json[i].due_date,
        json[i].payment_amount,
        json[i].discount,
        json[i].wht_amt,
        json[i].net_amt,
        json[i].paid_amount,
        json[i].past_due,
        json[i].total_pastdue
      ))
    }

    return data;
  }
}
