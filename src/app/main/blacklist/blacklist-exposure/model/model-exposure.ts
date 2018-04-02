

export class ModelExposure{
    constructor(
        public F_NAMET : string,
        public L_NAMET : string,
        public FIRST_NAME : string,
        public LAST_NAME : string,
        public CARD_NO : string,
        public COUNT : string,
        public OS_AR : string,
        public OS_PRI : string,
        public PAST_DUE : string
    )
    {}

  static parse(json:any[])
  {
    let data: ModelExposure[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelExposure(
          json[i].F_NAMET,
          json[i].L_NAMET,
          json[i].FIRST_NAME,
          json[i].LAST_NAME,
          json[i].CARD_NO,
          json[i].COUNT,
          json[i].OS_AR,
          json[i].OS_PRI,
          json[i].PAST_DUE
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
