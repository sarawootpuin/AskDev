/**
 * Created by vijittra.ta on 16/05/2561.
 */
export class CaDetailappraisal{

  constructor(
    public ca_no?: string,
    public sub_id?: number,
    public sub_id2?: number,
    public appraisal_amt?: number,
    public references?: string,
    public references_date?: string,
    public input_date?: string,
    public inpur_user?: string
  ){}

  static parse(json: any[]) {
      console.log('bbbbbbbbbbbbbbbbb',json);
    let data: CaDetailappraisal[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new CaDetailappraisal(
          json[i].ca_no,
          json[i].sub_id,
          json[i].sub_id2,
          json[i].appraisal_amt,
          json[i].references,
          json[i].references_date,
          json[i].input_date,
          json[i].inpur_user
        ))
      }
    }
    return data;
  }
}
