import {RelateContactDtail} from "./ccs-relate-dtail.model";
/**
 * Created by tanapon.sa on 09/07/2561.
 */
export class RelateContact {
  public SEQ: any;
  public ENT_CODE: any;
  public ENT_NAME: any;
  public SUM_RELATE: any;
  public SUM_AR: any;
  public SUM_FIN: any;
  public LIST_DTAIL: RelateContactDtail[];


  constructor(SEQ?: any, ENT_CODE?: any, ENT_NAME?: any, SUM_RELATE?: any, SUM_AR?: any,
              SUM_FIN?: any, LIST_DTAIL?: RelateContactDtail[]) {
    this.SEQ = SEQ;
    this.ENT_CODE = ENT_CODE;
    this.ENT_NAME = ENT_NAME;
    this.SUM_RELATE = SUM_RELATE;
    this.SUM_AR = SUM_AR;
    this.SUM_FIN = SUM_FIN;
    this.LIST_DTAIL = LIST_DTAIL;
  }

  static parse(json:any[]) {
    let data:RelateContact[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new RelateContact(
        json[i].SEQ,
        json[i].ENT_CODE,
        json[i].ENT_NAME,
        json[i].SUM_RELATE,
        json[i].SUM_AR,
        json[i].SUM_FIN,
        RelateContactDtail.parse(json[i].LIST_DTAIL)
      ))
    }

    return data;
  }
}
