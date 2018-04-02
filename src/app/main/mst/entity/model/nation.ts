export class Nation {
  public entCode;
  public subId;
  public nationality;
  public percentage;
  public comCode;
  public nationFull;

  constructor(entCode, subId, nationality, percentage, comCode, nationFull) {
    this.entCode = entCode;
    this.subId = subId;
    this.nationality = nationality;
    this.percentage = percentage;
    this.comCode = comCode;
    this.nationFull = nationFull;
  }

  static parse(json: any[]) {
    let data: Nation[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new Nation(
        json[i].entCode,
        json[i].subId,
        json[i].nationality,
        json[i].percentage,
        json[i].comCode,
        json[i].nationFull
      ))
    }
    return data;
  }
}
