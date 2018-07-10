/**
 * Created by tanapon.sa on 27/09/2560.
 */
export class FlowStage {
  public FlowID: Number;
  public FlowName: String;
  public StageID: Number;
  public StageName: String;

  constructor(private pFlowId: Number, private pFlowName: String,
              private pStgId: Number, private pStgName: String) {
    this.FlowID = pFlowId;
    this.StageID = pStgId;
    this.StageName = pStgName;
  }

  static parse(json: any[]) {
    let data: FlowStage[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new FlowStage(
        json[i].FLOW_ID,
        json[i].FLOW_NME,
        json[i].STG_ID,
        json[i].STG_NME
      ))
    }

    return data;
  }

}
