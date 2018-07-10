/**
 * Created by tanapon.sa on 03/05/2561.
 */
export class cdsFol_To_PayerInsteadModel {
  public guar_level:string;
  public responsibility:string;
  public payee_name:string;


  constructor(guar_level?: string, responsibility?: string, payee_name?: string) {
    this.guar_level = guar_level;
    this.responsibility = responsibility;
    this.payee_name = payee_name;
  }

  public static parse(json:any[]) {
    let data:cdsFol_To_PayerInsteadModel[] = [];

    for (let i=0; i < json.length; i++) {
      data.push(new cdsFol_To_PayerInsteadModel(
        json[i].GUAR_LEVEL,
        json[i].RESPONSIBILITY,
        json[i].PAYEE_NAME
      ))
    }

    return data;
  }
}
