import {MovementRegModel} from "./movementReg.model";
/**
 * Created by tanapon.sa on 20/06/2561.
 */
export class MovementRegTransModel {
  public a_order : any;
  public reg_num : any;
  public detail_1 : any;
  public detail_2 : any;
  public detail_oth : any;
  public remark : any;
  public lblMovement_Status : any;
  public list_MMReg : MovementRegModel[];


  constructor(a_order?: any, reg_num?: any, detail_1?: any, detail_2?: any, detail_oth?: any,
              remark?: any, lblMovement_Status?: any, list_MMReg?: MovementRegModel[]) {
    this.a_order = a_order;
    this.reg_num = reg_num;
    this.detail_1 = detail_1;
    this.detail_2 = detail_2;
    this.detail_oth = detail_oth;
    this.remark = remark;
    this.lblMovement_Status = lblMovement_Status;
    this.list_MMReg = list_MMReg;
  }

  static parse(json:any[]) {
    let data: MovementRegTransModel[] = [];

    for(let i = 0;i < json.length; i++) {
      data.push(new MovementRegTransModel(
        json[i].a_order,
        json[i].reg_num,
        json[i].detail_1,
        json[i].detail_2,
        json[i].detail_oth,
        json[i].remark,
        json[i].lblMovement_Status,
        MovementRegModel.parse(json[i].list_MMReg)
      ))
    }

    return data;
  }
}
