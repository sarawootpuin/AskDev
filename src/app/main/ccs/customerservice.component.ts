import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {MasterFormService} from "./masterform/masterform.service";
import {take} from "rxjs/operator/take";
// import * as Vue from "../../../../vue.js";

// declare var Vue:any;

@Component({
  selector: 'app-customerservice',
  templateUrl: './customerservice.component.html',
  styleUrls: ['./customerservice.component.css']
})
export class CustomerserviceComponent implements OnInit {
  items: MenuItem[];
  featureSelected: String = 'SetStageOfFlow';

  captionsTop:String[] = ['User1','User2','User3','User4'];
  captionsBot:String[] = ['Stage1','Stage2','Stage3','Stage4'];
  currPoint:Number = 3;
  // captions:String[] = [10,5,0];

  constructor(private masterformService: MasterFormService) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'MasterForm',
        items: [{
          label: 'Set FLow'
        }]
      }
    ];
  }

  test() {
    this.currPoint = 2;
  }

  // update() {
  //   this.points = this.setPoints.split(",");
  // }

  onSelected(Task: String) {
    this.masterformService.loadedFeature = Task;
  }
}
