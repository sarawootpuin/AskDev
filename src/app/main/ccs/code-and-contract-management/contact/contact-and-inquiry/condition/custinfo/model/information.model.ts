/**
 * Created by tanapon.sa on 09/11/2560.
 */

export class Information {

  constructor(public agr_code, public agr_com_code, public collector_com_code, public ref_code) {
  }

  static parse(json: any[]) {
    let data: Information[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new Information(
        json[i].AGR_CODE,
        json[i].AGR_COM_CODE,
        json[i].COLLECTOR_COM_CODE,
        json[i].REF_CODE
      ))
    }

    return data;
  }

}
