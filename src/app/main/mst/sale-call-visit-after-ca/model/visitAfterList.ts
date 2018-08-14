export class ListVisitAfter {

  constructor(  public ca_no  ?: string,
                public th_nme ?: string,
                public en_nme ?: string,
                public sale_call_no   ?:  string,
                public comp_ent_code  ?:  string){
  }

  static parse (json: any[]){
    let data: ListVisitAfter[] = [];
    if(json) {
      for (let i=0 ; i < json.length; i++){
        data.push(new ListVisitAfter(
          json[i].ca_no,
          json[i].th_nme,
          json[i].en_nme,
          json[i].sale_call_no,
          json[i].comp_ent_code
        ))
      }
    }
    //console.log(json)
    return data;

  }
}
