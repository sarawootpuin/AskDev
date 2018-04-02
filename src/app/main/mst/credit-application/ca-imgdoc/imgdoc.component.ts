import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-imgdoc',
  templateUrl: './imgdoc.component.html',

})
export class CaImgdocComponent implements OnInit {

  constructor() { }

  images: any[];

  ngOnInit() {
    this.images = [];

    this.images.push({source:'./assets/img/1.jpg',height:'100px', alt:'Description for Image 1', title:'Title 1',thumbnail:'./assets/img/1 - Copy.jpg' });
    this.images.push({source:'./assets/img/2.jpg', alt:'Description for Image 2', title:'Title 2',thumbnail:'./assets/img/2 - Copy.jpg'});
    this.images.push({source:'./assets/img/3.jpg', alt:'Description for Image 3', title:'Title 3',thumbnail:'./assets/img/3 - Copy.jpg'});
    this.images.push({source:'./assets/img/4.jpg', alt:'Description for Image 4', title:'Title 4',thumbnail:'./assets/img/4 - Copy.jpg'});
    this.images.push({source:'./assets/img/1.jpg', alt:'Description for Image 1', title:'Title 1',thumbnail:'./assets/img/1 - Copy.jpg'});
    this.images.push({source:'./assets/img/2.jpg', alt:'Description for Image 2', title:'Title 2',thumbnail:'./assets/img/2 - Copy.jpg'});
    this.images.push({source:'./assets/img/3.jpg', alt:'Description for Image 3', title:'Title 3',thumbnail:'./assets/img/3 - Copy.jpg'});
    this.images.push({source:'./assets/img/4.jpg', alt:'Description for Image 4', title:'Title 4',thumbnail:'./assets/img/4 - Copy.jpg'});
    this.images.push({source:'./assets/img/1.jpg', alt:'Description for Image 1', title:'Title 1',thumbnail:'./assets/img/1 - Copy.jpg'});
    this.images.push({source:'./assets/img/2.jpg', alt:'Description for Image 2', title:'Title 2',thumbnail:'./assets/img/2 - Copy.jpg'});
    this.images.push({source:'./assets/img/3.jpg', alt:'Description for Image 3', title:'Title 3',thumbnail:'./assets/img/3 - Copy.jpg'});
    this.images.push({source:'./assets/img/4.jpg', alt:'Description for Image 4', title:'Title 4',thumbnail:'./assets/img/4 - Copy.jpg'});
    this.images.push({source:'./assets/img/1.jpg', alt:'Description for Image 1', title:'Title 1',thumbnail:'./assets/img/1 - Copy.jpg'});
    this.images.push({source:'./assets/img/2.jpg', alt:'Description for Image 2', title:'Title 2',thumbnail:'./assets/img/2 - Copy.jpg'});
    this.images.push({source:'./assets/img/3.jpg', alt:'Description for Image 3', title:'Title 3',thumbnail:'./assets/img/3 - Copy.jpg'});
    this.images.push({source:'./assets/img/4.jpg', alt:'Description for Image 4', title:'Title 4',thumbnail:'./assets/img/4 - Copy.jpg'});
    this.images.push({source:'./assets/img/1.jpg', alt:'Description for Image 1', title:'Title 1',thumbnail:'./assets/img/1 - Copy.jpg'});
    this.images.push({source:'./assets/img/2.jpg', alt:'Description for Image 2', title:'Title 2',thumbnail:'./assets/img/2 - Copy.jpg'});
    this.images.push({source:'./assets/img/3.jpg', alt:'Description for Image 3', title:'Title 3',thumbnail:'./assets/img/3 - Copy.jpg'});
    this.images.push({source:'./assets/img/4.jpg', alt:'Description for Image 4', title:'Title 4',thumbnail:'./assets/img/4 - Copy.jpg'});
    this.images.push({source:'./assets/img/1.jpg', alt:'Description for Image 1', title:'Title 1',thumbnail:'./assets/img/1 - Copy.jpg'});
    this.images.push({source:'./assets/img/2.jpg', alt:'Description for Image 2', title:'Title 2',thumbnail:'./assets/img/2 - Copy.jpg'});
    this.images.push({source:'./assets/img/3.jpg', alt:'Description for Image 3', title:'Title 3',thumbnail:'./assets/img/3 - Copy.jpg'});
    this.images.push({source:'./assets/img/4.jpg', alt:'Description for Image 4', title:'Title 4',thumbnail:'./assets/img/4 - Copy.jpg'});
    this.images.push({source:'./assets/img/1.jpg', alt:'Description for Image 1', title:'Title 1',thumbnail:'./assets/img/1 - Copy.jpg'});
    this.images.push({source:'./assets/img/2.jpg', alt:'Description for Image 2', title:'Title 2',thumbnail:'./assets/img/2 - Copy.jpg'});
    this.images.push({source:'./assets/img/3.jpg', alt:'Description for Image 3', title:'Title 3',thumbnail:'./assets/img/3 - Copy.jpg'});
    this.images.push({source:'./assets/img/4.jpg', alt:'Description for Image 4', title:'Title 4',thumbnail:'./assets/img/4 - Copy.jpg'});

  }

}
