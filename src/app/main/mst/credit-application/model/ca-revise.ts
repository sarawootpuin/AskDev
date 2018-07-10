export class CaRevise {
  constructor(public com_code?: string,
              public ca_no?: string,
              public revise_time?: number,
              public apprv_by?: string,
              public apprv_dt?: string,
              public ver_approve_date?: string,
              public ver_approve_by?: string,
              public print_revise_date?: string,
              public ver_inform?: string,
              public apprv_person ?: string,
              public apprv_name ?: string) {
  }

  static parse(json: any[]) {
    let data: CaRevise[] = [];
    json.forEach((value) => {
      data.push(new CaRevise(
        value.COM_CODE,
        value.CA_NO,
        value.REVISE_TIME,
        value.APPRV_BY,
        value.APPRV_DT,
        value.VER_APPROVE_DATE,
        value.VER_APPROVE_BY,
        value.PRINT_REVISE_DATE,
        value.VER_INFORM,
        value.APPRV_PERSON,
        value.APPRV_NAME
      ))
    })
    return data;
  }
}
