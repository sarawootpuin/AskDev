/**
 * Created by wisarut.su on 28/05/2561.
 */
export class AppformReassignOfficer {
  public fullname;
  public code;
  public layerCode;

  constructor()
  constructor(fullname,
              code,
              layerCode,
  )
  constructor(fullname?,
              code?,
              layerCode?,
  )
  {
    this.fullname = fullname;
    this.code = code;
    this.layerCode = layerCode;
  }

  static parse (jsons)
  {
    let data : AppformReassignOfficer[] = [];
    for(let json of jsons)
    {
      data.push(new AppformReassignOfficer(
        json.fullname,
        json.code,
        json.layerCode
      ));
    }
    return data;
  }
}
