/**
 * Created by piradee.bu on 24/08/2560.
 */
export class AnswerScoreDropdownModel {
  constructor(public answer: string,
              public scr: string,
              public selected: string,
              public sub_id: string,
              public sub_id2: string,
  )

  {
  }

  static parse(json: any[]) {
    let data: AnswerScoreDropdownModel[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new AnswerScoreDropdownModel(
        json[i].ANSWER,
        json[i].SCR,
        json[i].SELECTED,
        json[i].SUB_ID,
        json[i].SUB_ID2
      ))
    }

    return data;
  }
}
