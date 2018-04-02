import { Component, OnInit } from '@angular/core';
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {BlacklistNcbService} from "../../blacklist-ncb-service";
import {ModelNcbAddress} from "./model/modelncbaddress";
import {ModelNcbSubjectResult} from "../../blacklist-ncb-subject-result/model/modelNcbSubjectResult";

@Component({
  selector: 'app-ncrs-address',
  templateUrl: './ncrs-address.component.html'
})
export class NcrsAddressComponent implements OnInit {

  constructor(private  blacklistNcbService:BlacklistNcbService,
              private userStorage:UserStorage) { }

  modelNcbAddress:ModelNcbAddress[]=[];
  modelNcbSubjectResult : ModelNcbSubjectResult[]=[];

  ngOnInit() {
    this.modelNcbSubjectResult =  this.blacklistNcbService.getModelNcbSubjectResult();
    if(this.modelNcbSubjectResult.length>0) {
      this.modelNcbSubjectResult = this.blacklistNcbService.getModelNcbSubjectResult();
      let obj = {
        "ptracking_id": this.modelNcbSubjectResult[0].tracking_id,
        "psubject_id": this.modelNcbSubjectResult[0].subject_id,
        "userlogin": this.userStorage.getUserName()
      };

      this.blacklistNcbService.getNcbAddress(obj).subscribe(
        (data: any) => {
          if (data.CODE != "204")

            this.modelNcbAddress = ModelNcbAddress.parse(data.LIST_DATA);
         // console.log(this.modelNcbAddress);
        }
      );
    }
  }

}
