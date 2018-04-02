/**
 * Created by pongsatorn.an on 22/12/2560.
 */
export class caListMaster {
  public id_code ;
  public key1;
  public key2;
  public remark;
  public remark2;
  public type;

  constructor()
  constructor(id_code, key1, key2, remark, remark2, type)
  constructor(id_code?, key1?, key2?, remark?, remark2?, type?) {
    this.id_code = id_code;
    this.key1 = key1;
    this.key2 = key2;
    this.remark = remark;
    this.remark2 = remark2;
    this.type = type;
  }


  static
  parse(json: any[]) {
    let data: caListMaster[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new caListMaster(
        json[i].id_code,
        json[i].key1,
        json[i].key2,
        json[i].remark,
        json[i].remark_e,
        json[i].type
      ))
    }
  }
}
