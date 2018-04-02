import {ScrChangeMktNameModel} from "./change-mkt-name.model";
/**
 * Created by piradee.bu on 27/12/2560.
 */
export class ScrSaveChangeMktNameModel {
  public device: string;
  public userName: string;
  public listChangeMktName:ScrChangeMktNameModel[];
  constructor()
  constructor(
    device: string,
    userName :string,
    listChangeMktName:ScrChangeMktNameModel[],
  )
  constructor(
    device?: string,
    userName?: string,
    listChangeMktName?:ScrChangeMktNameModel[])
  {
    this.device =device;
    this.userName=userName;
    this.listChangeMktName=listChangeMktName;
  }

}
