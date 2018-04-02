/**
 * Created by piradee.bu on 30/11/2560.
 */
export class ScrCorp {
  public  topic_typ: string;
  public  field_1: string;
  public  field_2: string;
  public  field_3: string;
  public  field_4: string;

  constructor()
  constructor(
    topic_typ: string,
    field_1: string,
    field_2: string,
    field_3: string,
    field_4: string
  )
  constructor(
    topic_typ ?: string,
    field_1 ?: string,
    field_2 ?: string,
    field_3 ?: string,
    field_4 ?: string
  ){
    this.topic_typ =topic_typ;
    this.field_1 =field_1;
    this.field_2 =field_2;
    this.field_3 =field_3;
    this.field_4 =field_4;
  }


  static parse(json: any[]) {
    let data: ScrCorp[] = [];
    if (json !=null) {
      for (let i = 0; i < json.length; i++) {
        data.push(new ScrCorp(
          json[i].TOPIC_TYP,
          json[i].FIELD_1,
          json[i].FIELD_2,
          json[i].FIELD_3,
          json[i].FIELD_4
      ))
      }
    }
    return data;
  }
}
