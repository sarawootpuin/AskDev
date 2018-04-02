/**
 * Created by pongsatorn.an on 27/12/2560.
 */
export class ContactSearchModel {

  public  com_code;
  public  cont_person_code  ;
  public  cont_ent_code;
  public  name_th ;
  public  name_en;
  public  position ;

  constructor()
  constructor(com_code, cont_person_code, cont_ent_code, name_th, name_en, position)
  constructor(com_code?, cont_person_code?, cont_ent_code?, name_th?, name_en?, position?) {
    this.com_code = com_code;
    this.cont_person_code = cont_person_code;
    this.cont_ent_code = cont_ent_code;
    this.name_th = name_th;
    this.name_en = name_en;
    this.position = position;
  }

  static parse(json: any[]) {
    let data: ContactSearchModel[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new ContactSearchModel(
        json[i].com_code,
        json[i].cont_person_code,
        json[i].cont_ent_code,
        json[i].name_th,
        json[i].name_en,
        json[i].position
      ))
    }
    return data;
  }
}
