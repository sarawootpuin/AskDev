import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NavMenuComponent} from "../../../../../../../../nav-menu/nav-menu.component";
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {TransferHistModel} from "./transferHist.model";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  public vSwitchPageTransfer :Boolean;


  constructor(private custService: CustinfoService) {
    this.vSwitchPageTransfer = false;
  }

  ngOnInit() {

  }

  openCustGuar(){
    this.vSwitchPageTransfer = !this.vSwitchPageTransfer;
    // window.scrollTo(0,0);
    // setTimeout(() => {
    //   this.vSwitchPageTransfer = 'content2';
    //   // this.router.navigate(['./CustomerGuarantor'],{relativeTo:this.route});
    // }, 250);
  }
}
