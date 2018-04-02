export class ListAssgnStusVerified {
  public assgnStus: string;

  constructor(ASSGN_STUS) {
    this.assgnStus = ASSGN_STUS;
  }

  static parse(json: any[]) {
    let data: ListAssgnStusVerified[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new ListAssgnStusVerified(
        json[i].ASSGN_STUS
      ))
    }

    return data;
  }
}
