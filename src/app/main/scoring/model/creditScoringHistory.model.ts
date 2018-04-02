/**
 * Created by wisarut.su on 13/12/2560.
 */

export class CreditScoringHistoryModel
{
  public runNo : string;
  public entTyp : string;
  public entCd : string;
  public refNo : string;
  public scrDt : string;
  public scr : string;
  public indvJrstc : string;
  public mobileSource : string;

  constructor()
  constructor(runNo : string,
              entTyp : string,
              entCd : string,
              refNo : string,
              scrDt : string,
              scr : string,
              indvJrstc : string,
              mobileSource : string)
  constructor(runNo ?: string,
              entTyp ?: string,
              entCd ?: string,
              refNo ?: string,
              scrDt ?: string,
              scr ?: string,
              indvJrstc ?: string,
              mobileSource ?: string)
  {
    this.runNo = runNo;
    this.entTyp = entTyp;
    this.entCd = entCd;
    this.refNo = refNo;
    this.scrDt = scrDt;
    this.scr = scr;
    this.indvJrstc = indvJrstc;
    this.mobileSource = mobileSource;
  }

  static parse(json: any[]) {
    let data: CreditScoringHistoryModel[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new CreditScoringHistoryModel(
        json[i].RUN_NO,
        json[i].ENT_TYP,
        json[i].ENT_CD,
        json[i].REF_NO,
        json[i].SCR_DT,
        json[i].SCR,
        json[i].INDV_JRSTC,
        json[i].MOBILE_SOURCE
      ))
    }
    return data;
  }

}
