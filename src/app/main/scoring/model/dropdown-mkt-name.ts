/**
 * Created by piradee.bu on 27/12/2560.
 */
export class ScrDropDownMktNameModel {
  constructor(public mkt_emp_nme: string,
  )

  {
  }

  static parse(json: any[]) {
    let data: ScrDropDownMktNameModel[] = [];
    if (json !=null) {
      for (let i = 0; i < json.length; i++) {
        data.push(new ScrDropDownMktNameModel(
          json[i].MKT_EMP_NME
        ))
      }
    }
    return data;
  }
}
