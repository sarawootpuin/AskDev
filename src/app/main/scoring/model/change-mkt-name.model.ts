/**
 * Created by piradee.bu on 27/12/2560.
 */
export class ScrChangeMktNameModel {
  public mark: string;
  public ref_no: string;
  public mkt_emp_nme: string;
  public ent_cd: string;
  public ent_typ: string;
  public name: string;
  public ver_type: string;
  public run_no: string;


  constructor()
  constructor(
    mark: string,
    ref_no: string,
    mkt_emp_nme: string,
    ent_cd: string,
    ent_typ: string,
    name: string,
    ver_type: string,
    run_no: string

  )
  constructor(
    mark?: string,
    ref_no?: string,
    mkt_emp_nme?: string,
    ent_cd?: string,
    ent_typ?: string,
    name?: string,
    ver_type?: string,
    run_no?: string


  ){
    this.mark = mark;
    this.ref_no = ref_no;
    this.mkt_emp_nme = mkt_emp_nme;
    this.ent_cd = ent_cd;
    this.ent_typ = ent_typ;
    this.name = name;
    this.ver_type = ver_type;
    this.run_no = run_no;

  }


  static parse(json: any[]) {
    let data: ScrChangeMktNameModel[] = [];
    if (json !=null) {
      for (let i = 0; i < json.length; i++) {
        data.push(new ScrChangeMktNameModel(
          json[i].MARK,
          json[i].REF_NO,
          json[i].MKT_EMP_NME,
          json[i].ENT_CD,
          json[i].ENT_TYP,
          json[i].NAME,
          json[i].VER_TYPE,
          json[i].RUN_NO
        ))
      }
    }
    return data;
  }
}
