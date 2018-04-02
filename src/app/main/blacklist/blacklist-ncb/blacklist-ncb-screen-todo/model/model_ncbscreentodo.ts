/**
 * Created by patcharapon.ch on 10/01/2561.
 */
export class ModelNcbScreenTodo{
  constructor(public RUN_NO:string,
              public ENT:string,
              public NAME:string,
              public CARD_ID:string,
              public ENT_CODE:string,
              public COM_CODE:string,
              public REF_CODE:string)
  {}
  static parse(json:any[])
  {
    let data: ModelNcbScreenTodo[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelNcbScreenTodo(
          json[i].RUN_NO,
          json[i].ENT,
          json[i].NAME,
          json[i].CARD_ID,
          json[i].ENT_CODE,
          json[i].COM_CODE,
          json[i].REF_CODE
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
