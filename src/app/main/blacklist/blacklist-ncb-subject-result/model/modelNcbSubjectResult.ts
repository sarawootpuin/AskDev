/**
 * Created by patcharapon.ch on 08/02/2561.
 */
export class ModelNcbSubjectResult
{
  constructor(public tracking_id:string,
              public subject_amt:string,
              public memo1:string,
              public memo2:string,
              public subject_id:string,
              public x:string,
              public bankruptcy:string)
  {}

  static parse(json:any[]){

    let modelNcbSubjectResult:ModelNcbSubjectResult[]=[];
      for(let i=0;i<json.length;i++)
      {
        modelNcbSubjectResult.push(
          new ModelNcbSubjectResult(
            json[i].tracking_id,
            json[i].subject_amt,
            json[i].memo1,
            json[i].memo2,
            json[i].subject_id,
            json[i].x,
            json[i].bankruptcy
        ))
      }
      return modelNcbSubjectResult;
  }
}
