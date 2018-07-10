/**
 * Created by tanapon.sa on 22/03/2561.
 */
export class cdsOver_VatModel {
  public term: string;
  public due_day: string;
  public vat: string;


  constructor(term?: string, due_day?: string, vat?: string) {
    this.term = term || '';
    this.due_day = due_day || '';
    this.vat = vat || '';
  }

  static parse(json : any[]) {
    let data: cdsOver_VatModel[] = [];

    for(let i = 0; i < json.length;i++) {
      data.push(new cdsOver_VatModel(
        json[i].TERM,
        json[i].DUE_DAY,
        json[i].VAT
      ))
    }
    return data;
  }
}
