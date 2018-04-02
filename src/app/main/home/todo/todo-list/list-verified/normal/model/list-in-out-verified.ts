export class ListInOutVerified {
  public inOut: string;

  constructor(IN_OUT) {
    this.inOut = IN_OUT;
  }

  static parse(json: any[]) {
    let data: ListInOutVerified[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new ListInOutVerified(
        json[i].IN_OUT
      ))
    }

    return data;
  }
}
