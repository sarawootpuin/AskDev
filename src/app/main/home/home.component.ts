import {Component, OnInit,DoCheck} from '@angular/core';
import {HomeService} from "./home.service";
import {UserStorage} from "../../shared/user/user.storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService,
              private userStorage: UserStorage,
              private router: Router) {
  }

  ngOnInit() {
    //debugger
    //clear Subor section
    //this.userStorage.storageIsSubor('N');

    if (this.userStorage.getCode() !== this.userStorage.getSuborCode()&&(this.userStorage.getIsSubor()=='Y'))  {
      this.router.navigate(['/subordinate']);

      this.userStorage.storageSuborCode(this.userStorage.getCode());
      this.userStorage.storageSuborUserName(this.userStorage.getUserName());
      this.userStorage.storageSuborAccessCompany(this.userStorage.getAccessCompany());
      this.userStorage.storageIsSubor('N');
    };

  }

  // ngDoCheck() {
  //
  //   //console.log('ngDoCheck user_code + user_code_sbd :='+this.user_code +'+'+this.user_code_sbd );
  //   // if (this.user_code !== this.user_code_sbd) {
  //   //   this.user_code = this.userStorage.getCode();
  //   //   this.user_code_sbd = this.user_code;
  //   //   console.log('set = '+this.user_code);
  //   //   this.router.navigate(['/subordinate']);
  //   // }
  //
  //   if (this.userStorage.getCode() !== this.userStorage.getSuborCode()&&(this.userStorage.getIsSubor()=='Y'))  {
  //     this.router.navigate(['/subordinate']);
  //
  //     this.userStorage.storageSuborCode(this.userStorage.getCode());
  //     this.userStorage.storageSuborUserName(this.userStorage.getUserName());
  //     this.userStorage.storageSuborAccessCompany(this.userStorage.getAccessCompany());
  //     this.userStorage.storageIsSubor('N');
  //   }
  // }


}
