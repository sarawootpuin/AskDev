import {ListVerifier} from "./list-verifier";
export class ListSearchComVerified {
  public comSubName: string;
  public comCode: string;
  public listVerifier: ListVerifier[];

  constructor(COM_SUB_NAME, COM_CODE, LIST_VERIFIER) {
    this.comSubName = COM_SUB_NAME;
    this.comCode = COM_CODE;
    this.listVerifier = LIST_VERIFIER;
  }

  static parse(json: any[]) {
    let data: ListSearchComVerified[] = [];

    for (let i = 0; i < json.length; i++) {
      let comSubName = json[i].COM_SUB_NAME;
      let comCode = json[i].COM_CODE;
      let listVerifier: ListVerifier[] = ListVerifier.parse(json[i].LIST_VERIFIER);

      data.push(new ListSearchComVerified(
        comSubName,
        comCode,
        listVerifier
      ))
    }

    return data;
  }
}
