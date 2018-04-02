/**
 * Created by wisarut.su on 22/11/2560.
 */

export class ApplyEmit {
  public sbuType: any;
  public productName: any;
  public type: any;
  public useId : any;

  constructor()
  constructor(sbuType: any,
              productName: any,
              type: any,
              useId: any)
  constructor(sbuType ?: any,
              productName ?: any,
              type ?: any,
              useId ?: any) {
    this.sbuType = sbuType;
    this.productName = productName;
    this.type = type;
    this.useId = useId;
  }
}
