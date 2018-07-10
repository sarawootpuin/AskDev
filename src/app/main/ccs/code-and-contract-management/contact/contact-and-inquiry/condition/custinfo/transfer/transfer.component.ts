import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NavMenuComponent} from "../../../../../../../nav-menu/nav-menu.component";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  public vHide :Boolean;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.vHide = false;
  }

  openCustGuar(){
    window.scrollTo(0,0);
    setTimeout(() => {
      this.vHide = true;
      this.router.navigate(['./CustomerGuarantor'],{relativeTo:this.route});
    }, 250);
  }
}
