import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {BlacklistResultService} from "../blacklist-service";
import {BlShareCenterService} from "./blacklist-share-center-service";



@Component({
  selector: 'app-blacklist-share-center',
  templateUrl: './blacklist-share-center.component.html'
})
export class BlacklistShareCenterComponent implements OnInit  {

  location: string;
  componentName: string;

  constructor(router: Router, private  BLService: BlacklistResultService,private blShareCenterService : BlShareCenterService) {
    this.location = router.url;
  }

  ngOnInit() {
    this.blShareCenterService.setInit();
    this.BLService.eventComponentNameOnShow.subscribe(
      (obj) => {
        this.componentName = obj;
        console.log(this.componentName);
      }
    );
  }
}
