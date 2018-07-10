/**
 * Created by tanapon.sa on 09/10/2560.
 */
export class ComCode {

  constructor(public com_code){}

  static parse(data: string) {
    let json = JSON.parse(data);

    return new ComCode(json.COM_CODE);
  }
}
