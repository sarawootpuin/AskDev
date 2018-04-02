import {ScrChangeDepartmentModel} from "./change-department.model";
/**
 * Created by piradee.bu on 27/12/2560.
 */
export class ScrSubmitChangeDepartmentModel {
  public device: string;
  public userName: string;
  public listChangeDepartment:ScrChangeDepartmentModel[];
  constructor()
  constructor(
    device: string,
    userName :string,
    listChangeDepartment:ScrChangeDepartmentModel[],
  )
  constructor(
    device?: string,
    userName?: string,
    listChangeDeparment?:ScrChangeDepartmentModel[])
  {
    this.device =device;
    this.userName=userName;
    this.listChangeDepartment=listChangeDeparment;
  }

}
