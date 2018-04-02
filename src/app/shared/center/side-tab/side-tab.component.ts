import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-tab',
  templateUrl: './side-tab.component.html',
  styleUrls: ['./side-tab.component.css'],
})
export class SideTabComponent implements OnInit,AfterViewInit {

  @Input() selectComponent:string;
  @Input() defaultMenuName:string;
  constructor() { }
  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.defaultMenuName)
    {
      this.defaultMenuName = this.convertToAscii(this.defaultMenuName);
      this.openContent(this.defaultMenuName);
    }
  }

  convertToAscii(value:string)
  {
    let result : string='';
    for(let i=0;i<value.length;i++)
    {
      result = result + value.charCodeAt(i);
      // console.log(value.charCodeAt(i));
    }
    //this.nameMenu = result;
    return result;
  }


  openContent(nameMenu?:string) {

    var i, tabcontent, tablinks;
    var nameMenuKeyword;
    // tabcontent = document.getElementsByClassName("col-md-10 float-left col px-5 pl-md-2 pt-2 main");

    if (document.getElementById("side-content" + nameMenu)) {
      tabcontent = document.getElementsByName("sidebar-main-content");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";

      }
      tabcontent = document.getElementsByClassName("list-group-item");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style = null;
      }
    }

    try {
      if (nameMenu) {
        if (document.getElementById("side-content" + nameMenu)) {
          document.getElementsByName("tab-level" + nameMenu)[0].style.background = "#64789c";
          document.getElementsByName("tab-level" + nameMenu)[0].style.color ="#FFF";
          document.getElementById("side-content" + nameMenu).style.display = "block";
        }
        //console.log("side-content"+nameMenu);
      }

    }
    catch (e) {

    }

  }

}
