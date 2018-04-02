import {AnswerScoreDropdownModel, } from "./answer-scr-dropdown.model";
import {AnswerScoreRangeModel} from "./answer-scr-range.model";
/**
 * Created by piradee.bu on 24/08/2560.
 */
export class RowTableModel {
    public topicCd: string;
    public topicNme: string;
    public lookUp: string;
    public answer: string;
    public detail: string;
    public type_for_cal: string;
    public relateToTopicCd: string;
    public rpt_ord: string;
    public scr :string;
    public listAnswer:AnswerScoreDropdownModel[];
    public listAnswerRange:AnswerScoreRangeModel[];
  constructor()
  constructor(
     topicCd: string,
     topicNme: string,
     lookUp: string,
     answer: string,
     detail: string,
     type_for_cal: string,
     relateToTopicCd: string,
     rpt_ord: string,
     scr :string,
     listAnswer:AnswerScoreDropdownModel[],
     listAnswerRange:AnswerScoreRangeModel[]
  )
  constructor(
    topicCd?: string,
    topicNme?: string,
    lookUp?: string,
    answer?: string,
    detail?: string,
    type_for_cal?: string,
    relateToTopicCd?: string,
    rpt_ord?: string,
    scr ?:string,
    listAnswer?:AnswerScoreDropdownModel[],
    listAnswerRange?:AnswerScoreRangeModel[])
  {
    this.topicCd =topicCd;
    this.topicNme=topicNme;
      this.lookUp=lookUp;
      this.answer=answer;
      this.detail=detail;
      this.type_for_cal=type_for_cal;
      this.relateToTopicCd=relateToTopicCd;
      this.rpt_ord=rpt_ord;
      this.scr=scr;
      this.listAnswer=listAnswer;
      this.listAnswerRange=listAnswerRange;
  }

  static parse(json: any[]) {
    let data: RowTableModel[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new RowTableModel(
        json[i].TOPIC_CD,
        json[i].TOPIC_NME,
        json[i].LOOKUP,
        json[i].ANSWER,
        json[i].DETAIL,
        json[i].TYPE_FOR_CAL,
        json[i].RELATE_TO_TOPIC_CD,
        json[i].RPT_ORD,
        json[i].SCR,
        AnswerScoreDropdownModel.parse(json[i].LIST_ANSWER),
        AnswerScoreRangeModel.parse(json[i].LIST_ANSWER_RANGE)
      ))
    }

    return data;
  }
}
