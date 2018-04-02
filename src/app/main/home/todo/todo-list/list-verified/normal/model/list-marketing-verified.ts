export class ListMarketingVerified {
  public username: string;

  constructor(USERNAME) {
    this.username = USERNAME;
  }

  static parse(json: any[]) {
    let data: ListMarketingVerified[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new ListMarketingVerified(
        json[i].USERNAME
      ))
    }

    return data;
  }
}
