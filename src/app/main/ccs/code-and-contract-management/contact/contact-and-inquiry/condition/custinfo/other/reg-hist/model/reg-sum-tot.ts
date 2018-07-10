export class RegSumTot {

  public sumttl_dsreg;
  public sumbal_dsreg;
  public sumttl_dsborrow;
  public sumbal_dsborrow;

  constructor()
  constructor(sumttl_dsreg, sumbal_dsreg, sumttl_dsborrow, sumbal_dsborrow)
  constructor(sumttl_dsreg?, sumbal_dsreg?, sumttl_dsborrow?, sumbal_dsborrow?){
    this.sumttl_dsreg = sumttl_dsreg;
    this.sumbal_dsreg = sumbal_dsreg;
    this.sumttl_dsborrow = sumttl_dsborrow;
    this.sumbal_dsborrow = sumbal_dsborrow;
  }


  static parse(json: any[]) {
    let data: RegSumTot[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new RegSumTot(
        json[i].sumttl_dsreg,
        json[i].sumbal_dsreg,
        json[i].sumttl_dsborrow,
        json[i].sumbal_dsborrow
        )
      )
    }
    return data;
  }
}
