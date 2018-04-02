export class ModelNcbImage
{
  constructor(public URL:string,
              public docName:string,
              public imgName:string,
              public reqDate:string)
  {}

  static parse(json:any[])
  {
    let data: ModelNcbImage[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelNcbImage(
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
