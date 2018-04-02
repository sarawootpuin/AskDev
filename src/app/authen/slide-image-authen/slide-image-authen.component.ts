import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare var $: any;

@Component({
  selector: 'slide-image-authen',
  templateUrl: './slide-image-authen.component.html',
  styleUrls: ['./slide-image-authen.component.css']
})
export class SlideImageAuthenComponent implements OnInit {
  @ViewChild('slider') slider: ElementRef;
  images: string[] = [];
  captions: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.setImages();
    this.setCaptions();
    $(this.slider.nativeElement).carousel({
      interval: 3000
    });
  }

  setImages() {
    this.images = ["./assets/img/caterpillar.jpg", "./assets/img/ford_trucks.jpg",
      "./assets/img/mercedes_benz.jpg", "./assets/img/omfQ6K.jpg",
      "./assets/img/taxi_meter.jpg", "./assets/img/robo-taxi.jpg","./assets/img/toyota_hiace.jpg","./assets/img/toyota_hilux.jpg",
      "./assets/img/M1.jpg","./assets/img/M2.jpg","./assets/img/M3.jpg","./assets/img/M4.jpg",
    ]
  }

  setCaptions() {
    this.captions = ["Construction Machine/Vehicle","Pickup","Passenger","Truck","Taxi","Taxi","Van","Pickup",
      "Machine","Construction Vehicle","Construction Vehicle","Machine"
    ]
  }

  prevImage(){
    $(this.slider.nativeElement).carousel('prev');
  }

  nextImage(){
    $(this.slider.nativeElement).carousel('next');
  }

}
