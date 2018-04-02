import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScrSubjModel} from "../../model/scrsubject.model";
import {VerificationDetailService} from "../verification-detail.service";
import {Router} from "@angular/router";
import {RowTableModel} from "../../model/rowtable.model";
import {AnswerScoreDropdownModel} from "../../model/answer-scr-dropdown.model";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-table-verification-detail',
  templateUrl: './table-verification-detail.component.html',
  styleUrls: ['./table-verification-detail.component.css']
})
export class TableVerificationDetailComponent implements OnInit {
  listQuestionTab: ScrSubjModel[];
  listTableOriginal: RowTableModel[] = [];
  subscription: Subscription;
  @Input("tabletData") listTable: RowTableModel[] = [];
  @Output("tableTabEdit") tableTabEdit: EventEmitter<RowTableModel[]> = new EventEmitter();
  checkReadOnly: Boolean;

  constructor(private router: Router, private verficationDetailService: VerificationDetailService) {
  }

  ngOnInit() {
    this.checkReadOnly = this.verficationDetailService.checkReadOnly;
  }

  onChangeSelectedAns(position_row: number, position: number) {
    if (this.listTable[position_row].relateToTopicCd) {//flitter A095 ที่ subid
      let tempSubIdx = this.listTable[position_row].listAnswer[position].sub_id2;
      // find หาค่า TopicCd ที่ topic cd = relative_to_topic_cd
      let relativeIdx = this.listTable.findIndex(listAns =>
      listAns.topicCd === this.listTable[position_row].relateToTopicCd);

      this.listTableOriginal = this.verficationDetailService.listQuestionTabOriginal[this.verficationDetailService.idxTabCalScore].listTableData;
      let ListAnsFiltered: AnswerScoreDropdownModel[] = this.listTableOriginal[relativeIdx].listAnswer.filter(ListA => ListA.sub_id == tempSubIdx);
      let tempFilter: AnswerScoreDropdownModel[] = [];
      this.listTable[relativeIdx].listAnswer = tempFilter.concat(ListAnsFiltered);
    }

    var min, max, scr: number;
    for (var i = 0; i < this.listTable[position_row].listAnswer.length; i++) {
      if (i == position) {
        this.listTable[position_row].listAnswer[i].selected = 'Y';
      }
      else {
        this.listTable[position_row].listAnswer[i].selected = 'N';
      }

    }

    this.changeScore();
  }

  onChangeSelectedAnsRange(position_row: number, pAnswer: string) {

    this.listTable[position_row].answer = pAnswer;

    for (var i = 0; i < this.listTable[position_row].listAnswerRange.length; i++) {
      if ((Number(pAnswer) >= Number(this.listTable[position_row].listAnswerRange[i].min))
        && (Number(pAnswer) <= Number(this.listTable[position_row].listAnswerRange[i].max))) {
        this.listTable[position_row].listAnswerRange[i].selected = 'Y';
      }
      else {
        this.listTable[position_row].listAnswerRange[i].selected = 'N';
      }
    }

    this.changeScore();
  }

  onEditTab() {
    this.tableTabEdit.emit(this.listTable);
  }

  changeScore() {
    this.onEditTab();
    this.verficationDetailService.calScoringAllPage();

  }

}
