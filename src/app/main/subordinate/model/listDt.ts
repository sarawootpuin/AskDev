/**
 * Created by vijittra.ta on 10/08/2561.
 */
export class ListDaTa {
  constructor(
    public layerCode ?: string,
    public userCode ?: string,
    public userName ?: string,
    public enName ?: string,
    public thName ?: string,
    public active ?: string,
    public child : ListDaTa[] = []
  ){}
}
