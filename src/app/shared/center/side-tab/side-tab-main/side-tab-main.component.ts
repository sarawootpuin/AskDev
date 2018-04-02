import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-tab-main',
  templateUrl: './side-tab-main.component.html',
  styleUrls: ['./side-tab-main.component.css']
})
export class SideTabMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setContentWidth() {
   // doc = document.getElementsByClassName("col-md-10 float-left col px-5 pl-md-2 pt-2 main app-tab-content")[0];
   //   if (document.getElementsByClassName("col-md-10 float-left col px-5 pl-md-2 pt-2 main app-tab-content")[0]) {
   //    document.getElementsByClassName("col-md-10 float-left col px-5 pl-md-2 pt-2 main app-tab-content")[0].className = "col-md-12 float-left col px-5 pl-md-2 pt-2 main";
   //  }
   //  else
   //  {
   //    document.getElementsByClassName("col-md-12 float-left col px-5 pl-md-2 pt-2 main")[0].className  = "col-md-10 float-left col px-5 pl-md-2 pt-2 main app-tab-content";
   //  }

    // if (document.getElementsByClassName("d-flex flex-column main app-tab-content")[0]) {
    //   document.getElementsByClassName("d-flex flex-column main app-tab-content")[0].className = "d-flex flex-column main";
    // }
    // else
    // {
    //   document.getElementsByClassName("d-flex flex-column main")[0].className  = "d-flex flex-column main app-tab-content";
    // }

    if(document.getElementsByClassName("fa fa-forward flex-sidebar-split-plane")[0]){
      document.getElementsByClassName("fa fa-forward flex-sidebar-split-plane")[0].className = "fa fa-backward flex-sidebar-split-plane"
    }
    else {
      document.getElementsByClassName("fa fa-backward flex-sidebar-split-plane")[0].className = "fa fa-forward flex-sidebar-split-plane"
    }
  }
}
