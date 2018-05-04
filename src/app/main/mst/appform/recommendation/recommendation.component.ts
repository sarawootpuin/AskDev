import {Component, Input, OnInit} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ListAnswer} from "../model/getListAnswer";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html'
})
export class RecommendationComponent implements OnInit {
  listReCommendation: ListAnswer[] = [];
  rec_cond: any;
  rec_agr_flag: any;
  rec_approve: any;
  subscription : Subscription;
  @Input() inquiry : boolean = false;

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.rec_cond = this.appFormService.getAppFormData().rec_cond;
    this.rec_agr_flag = this.appFormService.getAppFormData().rec_agr_flag;
    this.rec_approve = this.appFormService.getAppFormData().recAmount;
    if(!this.rec_agr_flag){
      this.rec_agr_flag = '';
      this.appFormService.appFormData.rec_agr_flag = '';
    }
    this.listReCommendation = this.appFormService.listReCommendation;

  }

  onRowSelect(data: any) {
    if (this.rec_agr_flag == 'AC') {
      if (!this.rec_cond) {
        this.rec_cond = data.remark;
      }
      else{
        this.rec_cond = this.rec_cond + '\n' + data.remark;
      }
      this.appFormService.appFormData.rec_cond = this.rec_cond;
    }
  }

  clearCondition(){
    this.rec_cond = '';
    this.appFormService.appFormData.rec_cond = this.rec_cond;
  }

  linkModel(){
    this.appFormService.appFormData.rec_agr_flag = this.rec_agr_flag;
    this.appFormService.appFormData.rec_cond = this.rec_cond;
    this.appFormService.appFormData.recAmount = this.rec_approve;
  }

}
