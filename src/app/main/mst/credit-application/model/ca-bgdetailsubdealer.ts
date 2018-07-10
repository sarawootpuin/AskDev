export class CaDealer {
  constructor(public dealer_code?: string,
              public ca_no?: string,
              public os_amt?: string) {

  }

  static parse(json: any[]) {
    let data: CaDealer[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new CaDealer(
        json[i].dealer_code,
        json[i].ca_no,
        json[i].os_amt
      ))
    }
    return data;
  }
}
