import {AppformReassignDetail} from "./AppformReassignDetail";
import {AppformReassignOfficer} from "./AppformReassignOfficer";
/**
 * Created by wisarut.su on 25/05/2561.
 */

export class AppformReassignHead {

  public analystOfficer;
  public code;
  public todo;
  public listReassignDetail;
  public listReassignOfficer;

  constructor()
  constructor(analystOfficer,
              code,
              todo,
              listReassignDetail,
              listReassignOfficer,)
  constructor(analystOfficer?,
              code?,
              todo?,
              listReassignDetail?,
              listReassignOfficer?,) {
    this.analystOfficer = analystOfficer;
    this.code = code;
    this.todo = todo;
    this.listReassignDetail = listReassignDetail;
    this.listReassignOfficer = listReassignOfficer;
  }

  static parse (jsons)
  {
    let data : AppformReassignHead[] = [];
    for(let json of jsons)
    {
      data.push(new AppformReassignHead(
        json.analystOfficer,
        json.code,
        json.todo,
        AppformReassignDetail.parse(json.listReassignDetail),
        AppformReassignOfficer.parse(json.listReassignOfficer)
      ));
    }
    return data;
  }
}
