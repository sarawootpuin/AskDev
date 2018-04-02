/**
 * Created by wisarut.su on 28/11/2560.
 */

export class ProductNewRenew {
  public idCode: any;
  public remark: any;
  public useId : any;

  constructor()
  constructor(idCode: any,
              remark: any,
              useId : any)
  constructor(idCode ?: any,
              remark ?: any,
              useId ?: any) {
    this.idCode = idCode;
    this.remark = remark;
    this.useId = useId;
  }

  static parse(json: any[]) {
    let data: ProductNewRenew[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new ProductNewRenew(
        json[i].ID_CODE,
        json[i].REMARK,
        json[i].USE_ID
      ))
    }
    return data;
  }
}
