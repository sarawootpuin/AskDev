import { Component, OnInit } from '@angular/core';
import {BlacklistNcbService} from "../../blacklist-ncb-service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {ModelNcbAccDetail} from "./model/modelncbaccdetail";
import {ModelNcbSubjectResult} from "../../blacklist-ncb-subject-result/model/modelNcbSubjectResult";

@Component({
  selector: 'app-ncrs-acc-detail',
  templateUrl: './ncrs-acc-detail.component.html'
})
export class NcrsAccDetailComponent implements OnInit {

  constructor(private blacklistNcbService:BlacklistNcbService,
              private userStorage:UserStorage
              ) { }

  modelNcbAccDetail:ModelNcbAccDetail[]=[];
  modelNcbSubjectResult:ModelNcbSubjectResult[]=[];

  ngOnInit() {
    this.modelNcbSubjectResult =  this.blacklistNcbService.getModelNcbSubjectResult();
    if(this.modelNcbSubjectResult.length>0) {
      this.modelNcbSubjectResult = this.blacklistNcbService.getModelNcbSubjectResult();
      let obj = {
        "ptracking_id": this.modelNcbSubjectResult[0].tracking_id,
        "psubject_id": this.modelNcbSubjectResult[0].subject_id,
        "userlogin": this.userStorage.getUserName()
      };

      this.blacklistNcbService.getNCBAccDetail(obj).subscribe(
        (data: any) => {
          if (data.CODE != "204")
            this.modelNcbAccDetail = ModelNcbAccDetail.parse(data.LIST_DATA);
           console.log(this.modelNcbAccDetail);
        }
      );
    }
  }

}
