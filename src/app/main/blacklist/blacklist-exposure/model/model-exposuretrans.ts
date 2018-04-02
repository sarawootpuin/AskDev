/**
 * Created by patcharapon.ch on 21/09/2560.
 */
export class ExposureTransfer {
  constructor(public AGR_CODE: string,
              public NEW_CUS: string,
              public REG_NUM: string,
              public CUS_GUAR: string,
              public CLOSE_ACTIVE: string,
              public STATUS_CD: string,
              public TRNSFR_APP_DT: string) {

  }

  static parse(json: any[]) {
    let data: ExposureTransfer[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(
        new ExposureTransfer(
          json[i].AGR_CODE,
          json[i].NEW_CUS,
          json[i].REG_NUM,
          json[i].CUS_GUAR,
          json[i].CLOSE_ACTIVE,
          json[i].STATUS_CD,
          json[i].TRNSFR_APP_DT
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
