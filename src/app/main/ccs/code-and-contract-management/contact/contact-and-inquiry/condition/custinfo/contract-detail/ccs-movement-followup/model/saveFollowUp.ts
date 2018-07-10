import {cdsFollow_UpModel} from "../../../model/clientDataSet/cdsFollow_Up";
/**
 * Created by tanapon.sa on 15/05/2561.
 */
export class saveFollowUpModel {
  public agr_code: string;
  public com_code: string;
  public user_code: string;
  public list_cdsFollow_UpModel: cdsFollow_UpModel;

  constructor(agr_code?: string, com_code?: string, user_code?: string, list_cdsFollow_UpModel?: cdsFollow_UpModel) {
    this.agr_code = agr_code;
    this.com_code = com_code;
    this.user_code = user_code;
    this.list_cdsFollow_UpModel = list_cdsFollow_UpModel;
  }

}
