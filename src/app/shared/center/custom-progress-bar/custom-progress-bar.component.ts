import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-custom-progress-bar',
  templateUrl: './custom-progress-bar.component.html',
  styleUrls: ['./custom-progress-bar.component.css']
})
export class CustomProgressBarComponent implements OnInit, OnChanges {
  @ViewChild('pgloading') pgloading: ElementRef;
  @Input('width') width: number;

  constructor() {
    this.width = 25;
  }

  ngOnInit() {
    this.animateLoop();
  }

  ngOnChanges() {
    this.animateLoop();
  }

  animateLoop() {
    console.log(this.width);
    var animate_loop = function (width) {
      $(".progress-bar").css({'marginLeft': -width + '%'});
      $(".progress-bar").animate({
        marginLeft: (100 + width) + '%'
      }, 4000, function () {
        animate_loop(width);
      });
    }
    animate_loop(this.width);
  }

}
