import { Component, OnInit } from '@angular/core';
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {BlacklistNcbService} from "../../blacklist-ncb-service";
import {ModelNcbSubjectResult} from "../../blacklist-ncb-subject-result/model/modelNcbSubjectResult";
import {ModelNcrsHistory} from "./model/modelncrshistory";

@Component({
  selector: 'app-ncrs-history',
  templateUrl: './ncrs-history.component.html'
})
export class NcrsHistoryComponent implements OnInit {

  constructor(private  blacklistNcbService:BlacklistNcbService,
              private userStorage:UserStorage) { }

  modelNcbSubjectResult : ModelNcbSubjectResult[]=[];
  modelNcrsHistory : ModelNcrsHistory[]=[];
  ngOnInit() {

    this.modelNcbSubjectResult =  this.blacklistNcbService.getModelNcbSubjectResult();
    if(this.modelNcbSubjectResult.length>0) {
      this.modelNcbSubjectResult = this.blacklistNcbService.getModelNcbSubjectResult();
      let obj = {
        "ptracking_id": this.modelNcbSubjectResult[0].tracking_id,
        "psubject_id": this.modelNcbSubjectResult[0].subject_id,
        "userlogin": this.userStorage.getUserName()
      };

      this.blacklistNcbService.getNcbHistory(obj).subscribe(
        (data: any) => {
          if (data.CODE != "204")

            this.modelNcrsHistory = ModelNcrsHistory.parse(data.LIST_DATA);
           console.log(this.modelNcrsHistory);
        }
      );
    }

  }

}
