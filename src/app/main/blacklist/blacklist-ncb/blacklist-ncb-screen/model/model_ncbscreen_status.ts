/**
 * Created by patcharapon.ch on 12/01/2561.
 */
/**
 * Created by patcharapon.ch on 12/01/2561.
 */
export class ModelNcbScreenStatus{
  constructor(public CAPTION:string,
              public VALUES:string
  )
  {}

  static parse(json:any[])
  {
    let data: ModelNcbScreenStatus[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelNcbScreenStatus(
          json[i].CAPTION,
          json[i].VALUES
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
