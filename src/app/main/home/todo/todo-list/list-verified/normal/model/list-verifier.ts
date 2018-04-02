export class ListVerifier {
  public verifier: string;

  constructor(VERIFIER) {
    this.verifier = VERIFIER;
  }

  static parse(json: any[]) {
    let data: ListVerifier[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new ListVerifier(
        json[i].VERIFIER
      ))
    }

    return data;
  }
}
