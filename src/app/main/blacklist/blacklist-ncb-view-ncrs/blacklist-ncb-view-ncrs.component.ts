import { Component, OnInit } from '@angular/core';
import {BlacklistNcbService} from "../blacklist-ncb-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blacklist-ncb-view-ncrs',
  templateUrl: './blacklist-ncb-view-ncrs.component.html'
})
export class BlacklistNcbViewNcrsComponent implements OnInit {

  constructor(private blacklistNcbService:BlacklistNcbService,
              private router:Router) { }

  ngOnInit() {
  //  console.log(this.blacklistNcbService.getModelNcbSubjectResult())
    if(this.blacklistNcbService.getModelNcbSubjectResult().length<1){

       this.router.navigate(['blacklist/ncb-subjectresult'])
    }
  }

}
