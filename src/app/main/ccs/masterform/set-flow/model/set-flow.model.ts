export class Flow {
  public id: Number;
  public name: String;

  constructor(private pId: Number, private pFlowName: String) {
    this.id = pId;
    this.name = pFlowName;
  }

  static parse(json:any[]) {
    let data:Flow[] = [];

    for(let i=0;i<json.length;i++){
      data.push(new Flow(
        json[i].FLOW_ID,
        json[i].FLOW_NAME
      ))
    }

    return data;
  }

}
