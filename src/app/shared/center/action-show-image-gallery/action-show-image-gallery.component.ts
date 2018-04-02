import {Component, Input, OnInit} from '@angular/core';
import {ModelImage} from "./model/modelImage";
import 'rxjs';
import {ImageServices} from "./action-show-images-gallery.services";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-action-show-image-gallery',
  templateUrl: './action-show-image-gallery.component.html',
  styleUrls: ['./action-show-image-gallery.component.css']
})
export class ActionShowImageGalleryComponent implements OnInit {

  subscription: Subscription;
  @Input()modelImage: ModelImage[]=[];
  totalImages:number=0;
  constructor(private imageServices:ImageServices) { }

  ngOnInit() {
    this.showListImage();
  }

  showListImage()
  {

    this.modelImage = this.imageServices.getModelImage();
    this.totalImages = this.modelImage.length;
  }

  rotate()
  {
    var img = $('img#app-image');
    console.log(img);
    if(img.hasClass('img-fluid north')){
      img.attr('class','img-fluid west');
    }else if(img.hasClass('img-fluid west')){
      img.attr('class','img-fluid south');
    }else if(img.hasClass('img-fluid south')){
      img.attr('class','img-fluid east');
    }else if(img.hasClass('img-fluid east')){
      img.attr('class','img-fluid north');
    }
  }
}
