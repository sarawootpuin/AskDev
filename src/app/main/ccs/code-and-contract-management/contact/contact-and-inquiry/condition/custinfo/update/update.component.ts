import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  date1 : Date;
  constructor() { }

  ngOnInit() {
  }

  onTest(e) {
    console.log(e + ' Clicked');
  }
}
