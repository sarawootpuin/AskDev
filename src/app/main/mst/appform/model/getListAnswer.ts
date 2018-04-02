/**
 * Created by peerawat.ko on 05/10/2560.
 */
export class ListAnswer {
  public id_code: string;
  public remark: string;
  public remark1: string;
  public key1: string;
  public title: string;

  constructor()
  constructor(id_code: string,
              remark: string,
              remark1: string,
              key1: string,
              title: string)
  constructor(id_code ?: string,
              remark ?: string,
              remark1 ?: string,
              key1 ?: string,
              title ?: string) {
    this.id_code = id_code;
    this.remark = remark;
    this.remark1 = remark1;
    this.key1 = key1;
    this.title = title;
  }
  static parse(jsons : any[]){
    let data : ListAnswer[] = [];
    //console.log(jsons);
    for(let json of jsons){
      //console.log(json);
      data.push(new ListAnswer(
        json.ID_CODE,
        json.REMARK,
        json.REMARK1,
        json.KEY1,
        json.TITLE
      ))
    }
    return data;
  }
}
