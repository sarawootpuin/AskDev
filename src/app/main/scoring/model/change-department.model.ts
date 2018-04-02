/**
 * Created by piradee.bu on 27/12/2560.
 */
export class ScrChangeDepartmentModel {
  public chk: string;
  public code: string;
  public com_code: string;
  public full_name: string;
  public dept_code: string;
  public dept_name: string;
  public position: string;
  public key_field: string;
  public selected: string;



  constructor()
  constructor(
    chk: string,
    code: string,
    com_code: string,
    full_name: string,
    dept_code: string,
    dept_name: string,
    position: string,
    key_field:string


  )
  constructor(
    chk?: string,
    code?: string,
    com_code?: string,
    full_name?: string,
    dept_code?: string,
    dept_name?: string,
    position?: string,
    key_field?:string


  ){
    this.chk = chk;
    this.code = code;
    this.com_code = com_code;
    this.full_name = full_name;
    this.dept_code = dept_code;
    this.dept_name = dept_name;
    this.position = position;
    this.key_field =key_field;


  }


  static parse(json: any[]) {
    let data: ScrChangeDepartmentModel[] = [];
    if (json !=null) {
      for (let i = 0; i < json.length; i++) {
        let temp_key_field = json[i].CODE+json[i].DEPT_NAME;
        data.push(new ScrChangeDepartmentModel(
          json[i].CHK,
          json[i].CODE,
          json[i].COM_CODE,
          json[i].FULL_NAME,
          json[i].DEPT_CODE,
          json[i].DEPT_NAME,
          json[i].POSITION,
          temp_key_field
        ))
      }
    }
    return data;
  }
}
