import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BlacklistResultService} from "../blacklist-service";
import {Router} from "@angular/router";
import { Location } from '@angular/common';
import {ExposureComponent} from "../blacklist-exposure/blacklist-exposure.component";
import {Input} from "@angular/compiler/src/core";

@Component({
  selector: 'app-tabvwblchecking',
  templateUrl: './blacklist-tabvwblchecking.component.html'
})
export class TabvwblcheckingComponent implements OnInit {

  constructor(private blackListService:BlacklistResultService,
              private router:Router,
              private _location:Location) { }

  controlTabBlacklistChecking : number;
  blShared:boolean;
  componentOnShow:string;
  tabName:string;


  ngOnInit() {
     this.tabName =  this.blackListService.tabName;
    this.controlTabBlacklistChecking  = this.blackListService.controlTabBlacklistChecking;
    if(!this.controlTabBlacklistChecking)
    {
      this.router.navigate(['home']);
    }

  }

  backPage()
  {
    this.blShared = this.blackListService.blShared;
    this.componentOnShow = this.blackListService.componentNameOnShow;
    this.blackListService.DestroyService();
    this.blackListService.setBLShare(this.blShared);
    this.blackListService.setComponentNameOnShow(this.componentOnShow);
    if(this.controlTabBlacklistChecking==1){
       if (this.blackListService.blShared) {
         this.blackListService.setComponentNameOnShow('search');
       }
       else {
         this.router.navigate(['/blacklist/search']);
       }


    }
    else
      this.router.navigate(['/blacklist/blacklist-exposureinquiry']);
  }

}
