import { Component, OnInit } from '@angular/core';
import {ModelNcbSubjectResult} from "../../blacklist-ncb-subject-result/model/modelNcbSubjectResult";
import {BlacklistNcbService} from "../../blacklist-ncb-service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {ModelPersonalInfo} from "./model/modelpersonalinfo";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html'
})
export class PersonalInfoComponent implements OnInit {

  modelNcbSubjectResult : ModelNcbSubjectResult[]=[];
  modelPersonalInfo:ModelPersonalInfo[]=[];
  totalRecords:number;
  constructor(private  blacklistNcbService:BlacklistNcbService,
              private userStorage:UserStorage
  ) { }

  ngOnInit() {
        this.modelNcbSubjectResult =  this.blacklistNcbService.getModelNcbSubjectResult();
        if(this.modelNcbSubjectResult.length>0)
        {
          let obj = {
            "tracking_id":this.modelNcbSubjectResult[0].tracking_id,
            "subject_id":this.modelNcbSubjectResult[0].subject_id,
            "userlogin":this.userStorage.getUserName()
          }
          this.blacklistNcbService.getNCBPersonalInfo(obj).subscribe(
            (data:any)=>{
              this.modelPersonalInfo = ModelPersonalInfo.parse(data.LIST_DATA);
              //  console.log(this.modelPersonalInfo);
            }
          );
        }

  }

}
