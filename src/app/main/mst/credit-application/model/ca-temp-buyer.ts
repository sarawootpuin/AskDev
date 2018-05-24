/**
 * Created by piradee.bu on 24/05/2561.
 */

export class CaTempBuyer{

  constructor(
    public buyer_code?: string,
    public cust_name?: string,
    public join_grp_code?: string,
    public group_name?: string,
    public ca_limit?: number,
  ){}

  static parse(json: any[]) {
    let data: CaTempBuyer[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new CaTempBuyer(
          json[i].buyer_code,
          json[i].cust_name,
          json[i].join_grp_code,
          json[i].group_name,
          json[i].ca_limit
        ))
      }
    }
    return data;
  }
}
