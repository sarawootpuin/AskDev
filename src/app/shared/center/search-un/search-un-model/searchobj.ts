/**
 * Created by pongsatorn.an on 27/09/2560.
 */

export class searchobj{
  public    col1;
  public    col2;
  public    col3;
  public    col4;
  public    col5;

  constructor()
  constructor(col1, col2, col3, col4, col5)
  constructor(col1?, col2?, col3?, col4?, col5?) {
    this.col1 = col1;
    this.col2 = col2;
    this.col3 = col3;
    this.col4 = col4;
    this.col5 = col5;
  }


  static parse(json: any[]) {
    let data: searchobj[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new searchobj(
        json[i].col1,
        json[i].col2,
        json[i].col3,
        json[i].col4,
        json[i].col5
      ))
    }
    return data;
  }
}
