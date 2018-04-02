import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-process-progress',
  templateUrl: './process-progress.component.html',
  styleUrls: ['./process-progress.component.css']
})
export class ProcessProgressComponent implements OnInit {

  @Input() points: Number;
  @Input() currPoint: Number;
  @Input() captionTop: String[] = [];
  @Input() captionBot: String[] = [];

  _points: Number[] = [];
  setPoints: Number[];
  capacity: Number = 1;

  constructor() { }

  ngOnInit() {
    for( let i = 1; i <= this.points; i++ ){
      this._points.push(i);
    }

    this.capacity = this.currPoint;
  }

  // update() {
  //   this.points = this.setPoints.split(",");
  // }

  isActive(point) {
    if (point < this.capacity) {
      return true;
    }
  }

  clickDot(point) {
    this.capacity = point;
  }

  isCurrent(point) {
    if (point == this.capacity) {
      return true;
    }
  }

  hasLabelTop() {
    // if (this.label.length > 0) {
    //   return true;
    // }
    // return false;
    return this.captionTop.length > 0;
  }

  hasLabelBot() {
    // if (this.label.length > 0) {
    //   return true;
    // }
    // return false;
    return this.captionBot.length > 0;
  }

  calcPoint() {
    return 100 / (this._points.length - 1) + "%";
  }

  calcPoint2(index) {
    return 100 / (this._points.length - 1) * (index + 1) + "%";
  }

  calcPoint3(index) {
    return 100 / (this._points.length - 1) * (index + 2) + "%";
  }

  calcPoint4(index) {
    return 100 / (this._points.length - 1) * (index + 1) + "%";
  }

  calcPoint5(index) {
    return 100 / (this._points.length - 1) * (index + 1) + "%";
  }

}
