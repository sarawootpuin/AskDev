/**
 * Created by patcharapon.ch on 25/01/2561.
 */
export class ModelNcbPdf{

  constructor(public CARD_ID:string,
              public IMG_NAME:string,
              public IMG_PATH:string,
              public IMG_LINK:string,
              public RUNNING:string)
  {

  }

  static parse(json:any[])
  {
    let data : ModelNcbPdf[]=[];
    for(let i=0;i<json.length;i++)
    {
      data.push(new ModelNcbPdf(
        json[i].CARD_ID,
        json[i].IMG_NAME,
        json[i].IMG_PATH,
        json[i].IMG_LINK,
        json[i].RUNNING
                 )
      );
    }

    return data;
  }
}
