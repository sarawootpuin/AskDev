/**
 * Created by pongsatorn.an on 05/10/2560.
 */


export class ReassignList {

  public   seq;
  public   code;
  public   fullname;
  public   group_code;
  public   com_code;
  public   dept_code;
  public   dept_name;
  public   todo_numer;

  constructor()
  constructor(seq, code, fullname, group_code, com_code, dept_code, dept_name, todo_numer)
  constructor(seq?, code?, fullname?, group_code?, com_code?, dept_code?, dept_name?, todo_numer?) {
    this.seq = seq;
    this.code = code;
    this.fullname = fullname;
    this.group_code = group_code;
    this.com_code = com_code;
    this.dept_code = dept_code;
    this.dept_name = dept_name;
    this.todo_numer = todo_numer;
  }

  static parse(json: any[]) {
    let data: ReassignList[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new ReassignList(
        json[i].seq,
        json[i].code,
        json[i].fullname,
        json[i].group_code,
        json[i].com_code,
        json[i].dept_code,
        json[i].dept_name,
        json[i].todo_numer
      ))
    }
    return data;
  }
}
