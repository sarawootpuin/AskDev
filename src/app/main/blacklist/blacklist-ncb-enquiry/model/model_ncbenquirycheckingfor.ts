/**
 * Created by patcharapon.ch on 12/01/2561.
 */
export class ModelNcbEnquiryCheckingFor
{
  constructor(public COM_CODE:string
  )
  {}

  static parse(json:any[])
  {
    let data: ModelNcbEnquiryCheckingFor[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelNcbEnquiryCheckingFor(
          json[i].COM_CODE
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }


}
