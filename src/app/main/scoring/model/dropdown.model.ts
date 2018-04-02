/**
 * Created by piradee.bu on 24/08/2560.
 */
export class DropdownModel {
  constructor(public item: string,
              public id_code:string,
              public selected: string
  )

  {
  }

  static parse(json: any[]) {
    let data: DropdownModel[] = [];
    if (json !=null) {
      for (let i = 0; i < json.length; i++) {
        data.push(new DropdownModel(
          json[i].ITEM,
          json[i].ID_CODE,
          json[i].SELECTED
        ))
      }
    }
    return data;
  }
}
