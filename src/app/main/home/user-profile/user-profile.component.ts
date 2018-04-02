import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {UserStorage} from "../../../shared/user/user.storage.service";
import {AccessCompany} from "../../../shared/user/access-company";
import {Subscription} from "rxjs/Subscription";
import {UserProfileService} from "./user-profile.service";
import {UserProfile} from "./user-profile";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  accessCompany: AccessCompany[] = [];
  userProfile: UserProfile;
  comCode: string = '';
  @Output() comCodeChange: EventEmitter<string> = new EventEmitter();

  constructor(private userStorage: UserStorage,
              private userProfileService: UserProfileService) {
  }

  ngOnInit() {
    this.setUserProfile();
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  setUserProfile() {
    this.comCode = this.userStorage.getComCode();
    let accJson = JSON.parse(this.userStorage.getAccessCompany());
    for (let i = 0; i < accJson.length; i++) {
      let acc: AccessCompany = new AccessCompany(accJson[i].COM_CODE);
      this.accessCompany.push(acc);
    }
    let userCode = this.userStorage.getCode();

    this.subscription = this.userProfileService.getUserProfile("web", userCode)
      .subscribe(
        (data: any) => {

          this.userProfile = new UserProfile();
          this.userProfile.empCode = data.EMP_CODE;
          this.userProfile.fullNameT = data.FULL_NAMET;
          this.userProfile.fullNameE = data.FULL_NAMEE;
          this.userProfile.comCode = data.COM_CODE;
          this.userProfile.conciseBranchCode = data.CONCISE_BRANCH_CODE;
          this.userProfile.deptCode = data.DEPT_CODE;
          this.userProfile.deptName = data.DEPT_NAME;
          this.userProfile.email = data.EMAIL;
          this.userProfile.expireDate = data.EXPIREDATE;
          this.userProfile.position = data.POSITION;
          this.userProfile.saleExe = data.SALES_EXE;
          this.userProfile.secCode = data.SECCODE;
          this.userProfile.userName = data.USER_NAME;
        }
      );
  }

  onComCodeChange(comCode: string) {
    this.comCodeChange.emit(comCode);
  }
}
