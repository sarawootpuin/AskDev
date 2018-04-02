/**
 * Created by patcharapon.ch on 14/02/2561.
 */
export class ModelPersonalInfo{
  constructor(public subject_id:string,
              public full_name:string,
              public date_of_birth:string,
              public nationality:string,
              public gender:string,
              public marital_status:string,
              public number_of_children:string,
              public occupation:string
             ){

  }
  static parse(json:any[])
  {
    let modelPersonalInfo:ModelPersonalInfo[]=[];
    for(let i=0;i<json.length;i++)
    {
      modelPersonalInfo.push(new ModelPersonalInfo(
        json[i].subject_id,
        json[i].full_name,
        json[i].date_of_birth?json[i].date_of_birth:'',
        json[i].nationality,
        json[i].gender,
        json[i].marital_status,
        json[i].number_of_children,
        json[i].occupation
      ));
    }
    return modelPersonalInfo;
  }
}
