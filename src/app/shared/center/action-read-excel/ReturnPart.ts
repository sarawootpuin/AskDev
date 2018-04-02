/**
 * Created by wisarut.su on 30/01/2561.
 */

export class ReturnPart{
  public part : string;
  public fileName : string;

  constructor()
  constructor(part : string,
              fileName : string)
  constructor(part ?: string,
              fileName ?: string)
  {
    this.part = part;
    this.fileName = fileName;
  }

  static parse(json: any) {
    // let json = JSON.parse(data);

    return new ReturnPart(

      json.part,
      json.fileName

    );
  }

}
