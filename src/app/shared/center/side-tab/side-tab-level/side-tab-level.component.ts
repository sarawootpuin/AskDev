import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-side-tab-level',
  templateUrl: './side-tab-level.component.html',
  styleUrls: ['./side-tab-level.component.css']
})
export class SideTabLevelComponent implements OnInit {

  constructor() {
  }

  @Input() nameMenu: string = "";
  @Input() idMenu: string = "";
  @Input() icon:string = "";
  @Output() onMenuClick: EventEmitter<any> = new EventEmitter();
  @ViewChild('refChild') refChild;
  subNameMenu: string = "";
  checkChild:number;
  nameTitle:string = "";
  ngOnInit() {
    this.nameTitle = this.nameMenu;
    var regex = /\[m\](.+?)\[\/m\]/;
    this.nameTitle =this.nameTitle.replace(regex,"");

    var regex = /\[M\](.+?)\[\/M\]/;
    this.nameTitle =this.nameTitle.replace(regex,"");

    this.nameMenu = this.convertToAscii(this.nameMenu)+this.idMenu;
    let str:string;
    str = this.refChild.nativeElement.innerHTML;
    if(str.search('<app-side-tab-level') != -1)
      this.checkChild = 1;
    else
      this.checkChild = 0;

  }

  clickMenu(nameTitle) {
    this.onMenuClick.emit(nameTitle);
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

  openContent(event, nameMenu?: any) {

    var i, tabcontent, tablinks;
    var nameMenuKeyword;
    // tabcontent = document.getElementsByClassName("col-md-10 float-left col px-5 pl-md-2 pt-2 main");

    this.clickMenu(this.nameTitle);

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
