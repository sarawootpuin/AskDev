export class caNationality{
  constructor(public ent_code ?: any,
              public sub_id ?: any,
              public nationality ?: any,
              public percentage ?: any,
              public com_code ?: any,
              public nation_full?: any){
  }

  static parse(json : any[]){
    let data : caNationality[] = []
    json.forEach((value)=> {
      data.push(new caNationality(
        value.ent_code,
        value.sub_id,
        value.nationality,
        value.percentage,
        value.com_code,
        value.nation_full
      ))
    })
    return data;
  }
}
