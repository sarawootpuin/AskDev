/**
 * Created by peerawat.ko on 26/08/2560.
 */
export class ListContext {
  constructor(public owner: any,
              public context_source: any,
              public context_task: any,
              public ref_code: any,
              public context_data: any,
              public last_upd: any,
              public last_usr: any,
              public running_no: any,
              public a_order: any) {

  }

  static parse(json: any[]) {
    let data: ListContext[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new ListContext(
        json[i].OWNER,
        json[i].CONTEXT_SOURCE,
        json[i].CONTEXT_TASK,
        json[i].REF_CODE,
        json[i].CONTEXT_DATA,
        json[i].LAST_UPD,
        json[i].LAST_USR,
        json[i].RUNNING_NO,
        json[i].A_ORDER
      ))
    }

    return data;
  }
}

