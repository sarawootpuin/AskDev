import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ScrSubjModel} from "../../model/scrsubject.model";
import {RowTableModel} from "../../model/rowtable.model";
import {VerificationDetailService} from "../verification-detail.service";

@Component({
  selector: 'app-questiontabs-verification-detail',
  templateUrl: './questiontabs-verification-detail.component.html',
  styleUrls: ['./questiontabs-verification-detail.component.css']
})
export class QuestiontabsVerificationDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  listQuestionTab1: RowTableModel[] = [];

  constructor(private verficationDetailService: VerificationDetailService) {
  }

  ngOnInit() {
    this.verficationDetailService.eventIdxTab.subscribe(
      (obj: ScrSubjModel[]) => {
        //ส่งค่าอันเก่าไปแก้โดยการ emit การจะอ่านค่าใหม่มาว
        this.listQuestionTab1 = this.verficationDetailService.listQuestionTab[this.verficationDetailService.idxTabCalScore].listTableData;

        if ((this.listQuestionTab1 != null) && (this.listQuestionTab1.length > 0)) {
          this.verficationDetailService.saveTabDataOnShow(this.listQuestionTab1);
        }
        this.verficationDetailService.eventListQuestionTab.subscribe((objListTab: ScrSubjModel[]) => {
          this.listQuestionTab1 = this.verficationDetailService.listQuestionTab[this.verficationDetailService.idxTabCalScore].listTableData;
        });

      }
    );
    this.verficationDetailService.refreshData();
  }

  onEditTab(inListQuestionTab: RowTableModel[]){
    this.verficationDetailService.onEditQuestionTab(inListQuestionTab);
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }
}
