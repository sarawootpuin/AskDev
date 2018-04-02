
import {RowTableModel} from "./rowtable.model";
/**
 * Created by piradee.bu on 24/08/2560.
 */
export class ScrSubjModel {



constructor(public pageSubj: string,
              public pageId: number,
              public listTableData: RowTableModel[]
  )

  {
  }

  static parse(json: any[]) {
    let data: ScrSubjModel[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new ScrSubjModel(
        json[i].PAGE_SUBJ,
        json[i].PAGE_ID,
        RowTableModel.parse(json[i].LIST_TABLE_DATA)
      ))
    }

    return data;
  }
}

