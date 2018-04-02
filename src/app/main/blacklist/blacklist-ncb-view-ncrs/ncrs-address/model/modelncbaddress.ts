/**
 * Created by patcharapon.ch on 20/02/2561.
 */
export class ModelNcbAddress{
  constructor(public ADDRESS_TYPE:string,
              public ADDRESS:string,
              public RESIDENTIAL_STATUS:string,
              public TELEPHONE_TYPE:string,
              public TELEPHONE:string,
              public REPORTED_DATE:string
  ){}
  static parse(json:any[]){
    let modelNcbAddress:ModelNcbAddress[]=[];
    for(let i=0;i<json.length;i++){
      modelNcbAddress.push(new ModelNcbAddress(
        json[i].ADDRESS_TYPE,
        json[i].ADDRESS,
        json[i].RESIDENTIAL_STATUS,
        json[i].TELEPHONE_TYPE,
        json[i].TELEPHONE,
        json[i].REPORTED_DATE
      ))
    }
    return modelNcbAddress;
  }
}
