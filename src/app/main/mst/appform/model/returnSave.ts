/**
 * Created by wisarut.su on 06/12/2560.
 */

export class ReturnSave{
  public apNo : any;
  public nextCase : any;

  constructor()
  constructor(apNo : any,
              nextCase : any)
  constructor(apNo ?: any,
              nextCase ?: any)
  {
    this.apNo = apNo;
    this.nextCase = nextCase;
  }
}
