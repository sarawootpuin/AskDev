/**
 * Created by patcharapon.ch on 25/01/2561.
 */
export class ModelImage
{
  constructor(public URL:string,
              public docName:string,
              public imgName:string,
              public reqDate:string)
  {}

  static parse(json:any[])
  {
    let data: ModelImage[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelImage(
          json[i].url,
          json[i].docname,
          json[i].imgname,
          json[i].reqdate
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
