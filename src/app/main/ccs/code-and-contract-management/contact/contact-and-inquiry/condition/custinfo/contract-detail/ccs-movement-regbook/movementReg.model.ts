/**
 * Created by tanapon.sa on 20/06/2561.
 */
export class MovementRegModel {
  public control_no: any;
  public control_date: any;
  public in_date: any;
  public in_by: any;
  public out_date: any;
  public out_by: any;
  public purpose: any;


  constructor(control_no?: any, control_date?: any, in_date?: any, in_by?: any, out_date?: any,
              out_by?: any, purpose?: any) {
    this.control_no = control_no;
    this.control_date = control_date;
    this.in_date = in_date;
    this.in_by = in_by;
    this.out_date = out_date;
    this.out_by = out_by;
    this.purpose = purpose;
  }

  static parse(json:any[]) {
    let data: MovementRegModel[] = [];

    for(let i = 0;i < json.length; i++) {
      data.push(new MovementRegModel(
        json[i].control_no,
        json[i].control_date,
        json[i].in_date,
        json[i].in_by,
        json[i].out_date,
        json[i].out_by,
        json[i].purpose
      ))
    }

    return data;
  }
}
