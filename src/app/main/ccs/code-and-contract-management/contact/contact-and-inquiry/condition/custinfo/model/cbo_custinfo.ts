/**
 * Created by tanapon.sa on 24/04/2561.
 */
export class cbo_custinfo {
  public id: String;
  public remark: String;
  public selected: Number;


  constructor(id?: String, remark?: String, selected?: Number) {
    this.id = id;
    this.remark = remark;
    this.selected = selected;
  }

  static parse(json : any[]) {
    let data: cbo_custinfo[] = [];

    for (let i = 0; i < json.length; i++){
      data.push(new cbo_custinfo(
        json[i].ID,
        json[i].REMARK,
        json[i].SELECTED
      ));
    }


    return data;
  }

}
