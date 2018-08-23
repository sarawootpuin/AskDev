import {ListDaTa} from "./listDt";
/**
 * Created by vijittra.ta on 10/08/2561.
 */
export class ListOrd {
  constructor(  public label      ?: string,
                public expanded   ?: boolean,
                public data       ?: any,
                public children : ListOrd[] = []
                ){
  }
}
