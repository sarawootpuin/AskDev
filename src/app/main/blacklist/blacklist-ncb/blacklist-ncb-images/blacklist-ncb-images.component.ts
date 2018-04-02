import {Component, OnInit, ViewChild} from '@angular/core';
import {BlacklistNcbService} from "../../blacklist-ncb-service";
import {Subscription} from "rxjs/Subscription";
import {ModelNcbImage} from "./model/modelNcbImage";
import * as $ from 'jquery';
import {ServiceEndpoint} from "../../../../shared/config/service-endpoint";
import {ModelImage} from "../../../../shared/center/action-show-image-gallery/model/modelImage";
import {ImageServices} from "../../../../shared/center/action-show-image-gallery/action-show-images-gallery.services";
import {ActionShowImageGalleryComponent} from "../../../../shared/center/action-show-image-gallery/action-show-image-gallery.component";

@Component({
  selector: 'app-blacklist-ncb-images',
  templateUrl: './blacklist-ncb-images.component.html'
})
export class BlacklistNcbImagesComponent implements OnInit {
  subscription: Subscription;
  modelImage: ModelImage[]=[];
  totalImages:number=0;
  @ViewChild("actionShowImageGalleryComponent")actionShowImageGalleryComponent:ActionShowImageGalleryComponent;
  constructor(private blacklistNcbService:BlacklistNcbService,
              private imageServices:ImageServices) {
  }

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
    var img = $('img#imageNcb');
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
