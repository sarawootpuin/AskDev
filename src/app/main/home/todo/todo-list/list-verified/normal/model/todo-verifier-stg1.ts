/**
 * Created by piradee.bu on 31/08/2560.
 */
export class ToDoVerifierStg1 {
  public orgCom: string;
  public workCom: string;
  public refNo: string;
  public entType: string;
  public name: string;
  public verEmpNme: string;
  public inOut: string;
  public oldAssgnStus: string;
  public assgnStus: string;
  public mktEmpNme: string;
  public prvStg: string;
  public entCd: string;
  public zipCd: string;
  public revDtel: string;

  constructor(ORG_COM, WORK_COM, REF_NO, ENT_TYPE, NAME, VER_EMP_NME,
              IN_OUT, OLD_ASSGN_STUS, ASSGN_STUS, MKT_EMP_NME, PRV_STG,
              ENT_CD, ZIP_CD, REV_DTEL) {
    this.orgCom = ORG_COM;
    this.workCom = WORK_COM;
    this.refNo = REF_NO;
    this.entType = ENT_TYPE;
    this.name = NAME;
    this.verEmpNme = VER_EMP_NME;
    this.inOut = IN_OUT;
    this.oldAssgnStus = OLD_ASSGN_STUS;
    this.assgnStus = ASSGN_STUS;
    this.mktEmpNme = MKT_EMP_NME;
    this.prvStg = PRV_STG;
    this.entCd = ENT_CD;
    this.zipCd = ZIP_CD;
    this.revDtel = REV_DTEL;
  }

  static parse(json: any[]) {
    let data: ToDoVerifierStg1[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new ToDoVerifierStg1(
        json[i].ORG_COM,
        json[i].WORK_COM,
        json[i].REF_NO,
        json[i].ENT_TYPE,
        json[i].NAME,
        json[i].VER_EMP_NME,
        json[i].IN_OUT,
        json[i].OLD_ASSGN_STUS,
        json[i].ASSGN_STUS,
        json[i].MKT_EMP_NME,
        json[i].PRV_STG,
        json[i].ENT_CD,
        json[i].ZIP_CD,
        json[i].REV_DTEL,
      ))
    }

    return data;
  }
}
