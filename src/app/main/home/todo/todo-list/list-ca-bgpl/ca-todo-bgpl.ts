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
  public appType;

  constructor(no, com_code, sale_call_no, ca_no, sbu_type, cust_name, apply_dt,
              current_task, mkt_name, current_owner, ref_old_ca, app_type) {
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
    this.appType = app_type;
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
        json[i].app_type
      ))
    }
    return data;
  }
}
