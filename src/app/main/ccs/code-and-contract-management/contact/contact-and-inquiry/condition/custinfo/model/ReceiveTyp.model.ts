/**
 * Created by tanapon.sa on 20/06/2561.
 */
export class ReceiveTypModel {
  public no : any;
  public receive_type : any;
  public receive_name : any;


  constructor(no?: any, receive_type?: any, receive_name?: any) {
    this.no = no;
    this.receive_type = receive_type;
    this.receive_name = receive_name;
  }

  static parse(json:any[]) {
    let data:ReceiveTypModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new ReceiveTypModel(
        json[i].no,
        json[i].receive_type,
        json[i].receive_name
      ))
    }

    return data;
  }
}
