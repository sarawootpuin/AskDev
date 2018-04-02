export class AppFormTodo {
  public comCode;
  public apNo;
  public sbuType;
  public applyDate;
  public mktName;
  public sendDate;
  public saleCallNo;
  public caNo;
  public custName;
  public currentTask;
  public currentOwner;


  constructor(comCode, apNo, sbuType, applyDate, mktName, sendDate,
              saleCallNo, caNo, custName, currentTask, currentOwner) {
    this.comCode = comCode;
    this.apNo = apNo;
    this.sbuType = sbuType;
    this.applyDate = applyDate;
    this.mktName = mktName;
    this.sendDate = sendDate;
    this.saleCallNo = saleCallNo;
    this.caNo = caNo;
    this.custName = custName;
    this.currentTask = currentTask;
    this.currentOwner = currentOwner;
  }

  static parse(json: any[]) {
    let data: AppFormTodo[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new AppFormTodo(
        json[i].COM_CODE,
        json[i].AP_NO,
        json[i].SBU_TYPE,
        json[i].APPLY_DT,
        json[i].MKT_NAME,
        json[i].SEND_DATE,
        json[i].SALE_CALL_NO,
        json[i].CA_NO,
        json[i].CUST_NAME,
        json[i].CURRENT_TASK,
        json[i].CURRENT_OWNER
      ))
    }
    return data;
  }

}
