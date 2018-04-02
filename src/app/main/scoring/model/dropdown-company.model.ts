/**
 * Created by piradee.bu on 21/12/2560.
 */
export class DropdownCompanyModel{
  constructor(public com_code: string,
              public com_sub_name:string
  )

  {
  }

  static parse(json: any[]) {
    let data: DropdownCompanyModel[] = [];
    if (json !=null) {
      for (let i = 0; i < json.length; i++) {
        data.push(new DropdownCompanyModel(
          json[i].COM_CODE,
          json[i].COM_SUB_NAME
        ))
      }
    }
    return data;
  }
}
