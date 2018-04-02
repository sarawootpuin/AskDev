/**
 * Created by pongsatorn.an on 13/12/2560.
 */


export class SaleCallContactPerson {

  public cont_person_code;
  public cont_ent_code;
  public title_en;
  public title_th;
  public name_th;
  public name_en;
  public position;
  public department;
  public address;
  public phone;
  public phone_ext;
  public fax;
  public mobile;
  public email;
  public working_his1;
  public working_his2;
  public input_by;
  public input_date : string;
  public usr_upd;
  public last_upd;
  public character_p;
  public character_n;
  public com_code;
  public dealer_type;

  constructor()
  constructor(cont_person_code, cont_ent_code, title_en, title_th, name_th, name_en, position, department, address, phone, phone_ext, fax, mobile, email, working_his1, working_his2, input_by, input_date, usr_upd, last_upd, character_p, character_n, com_code, dealer_type)
  constructor(cont_person_code?, cont_ent_code?, title_en?, title_th?, name_th?, name_en?, position?, department?, address?, phone?, phone_ext?, fax?, mobile?, email?, working_his1?, working_his2?, input_by?, input_date?, usr_upd?, last_upd?, character_p?, character_n?, com_code?, dealer_type?) {
    this.cont_person_code = cont_person_code;
    this.cont_ent_code = cont_ent_code;
    this.title_en = title_en;
    this.title_th = title_th;
    this.name_th = name_th;
    this.name_en = name_en;
    this.position = position;
    this.department = department;
    this.address = address;
    this.phone = phone;
    this.phone_ext = phone_ext;
    this.fax = fax;
    this.mobile = mobile;
    this.email = email;
    this.working_his1 = working_his1;
    this.working_his2 = working_his2;
    this.input_by = input_by;
    this.input_date = input_date;
    this.usr_upd = usr_upd;
    this.last_upd = last_upd;
    this.character_p = character_p;
    this.character_n = character_n;
    this.com_code = com_code;
    this.dealer_type = dealer_type;
  }


  static parse(json: any[]) {
    let data: SaleCallContactPerson[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new SaleCallContactPerson(
        json[i].cont_person_code,
        json[i].cont_ent_code,
        json[i].title_en,
        json[i].title_th,
        json[i].name_th,
        json[i].name_en,
        json[i].position,
        json[i].department,
        json[i].address,
        json[i].phone,
        json[i].phone_ext,
        json[i].fax,
        json[i].mobile,
        json[i].email,
        json[i].working_his1,
        json[i].working_his2,
        json[i].input_by,
        json[i].input_date,
        json[i].usr_upd,
        json[i].last_upd,
        json[i].character_p,
        json[i].character_n,
        json[i].com_code,
        json[i].dealer_type
      ))
    }
    return data;
  }
}
