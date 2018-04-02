export class AnswerScoreRangeModel {
  constructor(public min: string,
              public max: string,
              public scr: string,
              public selected: string
  )

  {
  }

  static parse(json: any[]) {
    let data: AnswerScoreRangeModel[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new AnswerScoreRangeModel(
        json[i].MIN,
        json[i].MAX,
        json[i].SCR,
        json[i].SELECTED
      ))
    }

    return data;
  }
}
