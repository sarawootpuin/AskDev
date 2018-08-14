/**
 * Created by pongsatorn.an on 14/11/2560.
 */
export class MonitorList {

  public   com_code;
  public   team_code;
  public   mkt_code;
  public   mkt_name;
  public   dept_code;
  public   total_task;
  public   reject_task;
  public   result_reject;
  public   result_recall;
  public   result_follow;
  public   result_prepare;
  public   activity_cf;
  public   activity_cnf;
  public   activity_visit;
  public   visit_01;
  public   visit_02;
  public   visit_03;
  public   visit_04;
  public   visit_05;
  public   visit_06;
  public   activity_undo;
  public   undo;
  public   join_visit;
  public   visitwarning;

  constructor()
  constructor(com_code, team_code, mkt_code, mkt_name, dept_code, total_task, reject_task, result_reject, result_recall, result_follow, result_prepare, activity_cf, activity_cnf, activity_visit, visit_01, visit_02, visit_03, visit_04, visit_05, visit_06, activity_undo, undo, join_visit, visitwarning)
  constructor(com_code?, team_code?, mkt_code?, mkt_name?, dept_code?,
              total_task? , reject_task?, result_reject?, result_recall?, result_follow?, result_prepare?, activity_cf?, activity_cnf?, activity_visit?, visit_01?, visit_02?, visit_03?, visit_04?, visit_05?, visit_06?, activity_undo?, undo?, join_visit?, visitwarning?) {
    this.com_code = com_code;
    this.team_code = team_code;
    this.mkt_code = mkt_code;
    this.mkt_name = mkt_name;
    this.dept_code = dept_code;
    this.total_task = total_task;
    this.reject_task = reject_task;
    this.result_reject = result_reject;
    this.result_recall = result_recall;
    this.result_follow = result_follow;
    this.result_prepare = result_prepare;
    this.activity_cf = activity_cf;
    this.activity_cnf = activity_cnf;
    this.activity_visit = activity_visit;
    this.visit_01 = visit_01;
    this.visit_02 = visit_02;
    this.visit_03 = visit_03;
    this.visit_04 = visit_04;
    this.visit_05 = visit_05;
    this.visit_06 = visit_06;
    this.activity_undo = activity_undo;
    this.undo = undo;
    this.join_visit = join_visit;
    this.visitwarning = visitwarning;
  }


  static parse(json: any[]) {
    let data: MonitorList[] = [];
      if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new MonitorList(
          json[i].com_code,
          json[i].team_code,
          json[i].mkt_code,
          json[i].mkt_name,
          json[i].dept_code,
          json[i].total_task,
          json[i].reject_task,
          json[i].result_reject,
          json[i].result_recall,
          json[i].result_follow,
          json[i].result_prepare,
          json[i].activity_cf,
          json[i].activity_cnf,
          json[i].activity_visit,
          json[i].visit_01,
          json[i].visit_02,
          json[i].visit_03,
          json[i].visit_04,
          json[i].visit_05,
          json[i].visit_06,
          json[i].activity_undo,
          json[i].undo,
          json[i].join_visit,
          json[i].visitwarning,
        ))
      }
    }
    return data;
  }
}
