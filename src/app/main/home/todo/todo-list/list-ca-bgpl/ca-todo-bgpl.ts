export class CaTodoBgpl {
  public no;
  public comCode;
  public saleCallNo;
  public caNo;
  public sbuType;
  public custName;
  public applyDt;
  public currentTask;
  public mktName;
  public currentOwner;
  public refOldCa;
  public caApproveDate;
  public appType;
  public apNo;
  public grpCode;
  public grpName;
  public expireDt;
  public grade;
  public score;
  public analystName;


  constructor(no, com_code, sale_call_no, ca_no, sbu_type, cust_name, apply_dt,
              current_task, mkt_name, current_owner, ref_old_ca, ca_approve_date ,app_type,
              ap_no,grp_code,grpname,expire_dt,grade,score,analyst_name) {
    this.no = no;
    this.comCode = com_code;
    this.saleCallNo = sale_call_no;
    this.caNo = ca_no;
    this.sbuType = sbu_type;
    this.custName = cust_name;
    this.applyDt = apply_dt;
    this.currentTask = current_task;
    this.mktName = mkt_name;
    this.currentOwner = current_owner;
    this.refOldCa = ref_old_ca;
    this.caApproveDate = ca_approve_date;
    this.appType = app_type;
    this.apNo  = ap_no;
    this.grpCode = grp_code;
    this.grpName = grpname;
    this.expireDt = expire_dt;
    this.grade = grade;
    this.score = score;
    this.analystName = analyst_name;

  }

  static parse(json: any[]) {
    let data: CaTodoBgpl[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new CaTodoBgpl(
        i + 1,
        json[i].com_code,
        json[i].sale_call_no,
        json[i].ca_no,
        json[i].sbu_type,
        json[i].cust_name,
        json[i].apply_dt,
        json[i].current_task,
        json[i].mkt_name,
        json[i].current_owner,
        json[i].ref_old_ca,
        json[i].ca_approve_date,
        json[i].app_type,
        json[i].ap_no,
        json[i].grp_code,
        json[i].grpname,
        json[i].expire_dt,
        json[i].grade,
        json[i].score,
        json[i].analyst_name

      ))
    }
    return data;
  }
}
