/**
 * Created by wisarut.su on 25/05/2561.
 */

export class AppformReassignDetail {

  public caNo;
  public cusCode;
  public cusNameE;
  public cusNameT;
  public verifierName;
  public comCode;
  public apNo;
  public mktCode;
  public verifyHead;
  public verifier;

  constructor()
  constructor(caNo,
              cusCode,
              cusNameE,
              cusNameT,
              verifierName,
              comCode,
              apNo,
              mktCode,
              verifyHead,
              verifier,)
  constructor(caNo?,
              cusCode?,
              cusNameE?,
              cusNameT?,
              verifierName?,
              comCode?,
              apNo?,
              mktCode?,
              verifyHead?,
              verifier?,) {
    this.caNo = caNo;
    this.cusCode = cusCode;
    this.cusNameE = cusNameE;
    this.cusNameT = cusNameT;
    this.verifierName = verifierName;
    this.comCode = comCode;
    this.apNo = apNo;
    this.mktCode = mktCode;
    this.verifyHead = verifyHead;
    this.verifier = verifier;
  }

  static parse(jsons) {
    let data: AppformReassignDetail[] = [];
    for (let json of jsons) {
      data.push(new AppformReassignDetail(
        json.caNo,
        json.cusCode,
        json.cusNameE,
        json.cusNameT,
        json.verifierName,
        json.comCode,
        json.apNo,
        json.mktCode,
        json.verifyHead,
        json.verifier
      ));
    }
    return data;
  }

}
