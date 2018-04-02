import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-tab-content',
  templateUrl: './side-tab-content.component.html',
  styleUrls: ['./side-tab-content.component.css']
})
export class SideTabContentComponent implements OnInit {

  constructor() { }
  @Input() nameContent : string = "";
  @Input() idMenu: string = "";

  ngOnInit() {

    this.nameContent = this.convertToAscii(this.nameContent)+this.idMenu;
  }

  convertToAscii(value:string)
  {
    let result : string='';
    for(let i=0;i<value.length;i++)
    {
      result = result + value.charCodeAt(i);
    }
    //this.nameMenu = result;
    return result;
  }

}
