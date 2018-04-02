import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-tab-panel',
  templateUrl: './side-tab-panel.component.html',
  styleUrls: ['./side-tab-panel.component.css']
})
export class SideTabPanelComponent implements OnInit {

  @Input() scrollable: boolean;
  overflowY : string ;
  constructor() {
    this.scrollable = false ;
    //console.log('side con');
  }

  ngOnInit() {

    if (this.scrollable){ this.overflowY = 'auto' }
    else { this.overflowY = 'hidden' }

    //console.log(this.overflowY );

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

    if (document.getElementsByClassName("d-flex flex-column main app-tab-content")[0]) {
      document.getElementsByClassName("d-flex flex-column main app-tab-content")[0].className = "d-flex flex-column main";
    }
    else
    {
      document.getElementsByClassName("d-flex flex-column main")[0].className  = "d-flex flex-column main app-tab-content";
    }

    if(document.getElementsByClassName("fa fa-chevron-right flex-sidebar-split-plane")[0]){
      document.getElementsByClassName("fa fa-chevron-right flex-sidebar-split-plane")[0].className = "fa fa-chevron-left flex-sidebar-split-plane"
    }
    else {
      document.getElementsByClassName("fa fa-chevron-left flex-sidebar-split-plane")[0].className = "fa fa-chevron-right flex-sidebar-split-plane"
    }
  }
}
