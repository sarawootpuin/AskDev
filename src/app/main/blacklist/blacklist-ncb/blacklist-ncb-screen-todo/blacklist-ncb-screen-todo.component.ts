import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModelNcbScreenTodo} from "./model/model_ncbscreentodo";
import {BlacklistNcbService} from "../../blacklist-ncb-service";
import {Subscription} from "rxjs/Subscription";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";
import {LazyLoadEvent} from "primeng/primeng";
import {ModelNcbImage} from "../blacklist-ncb-images/model/modelNcbImage";
import {BlacklistNcbImagesComponent} from "../blacklist-ncb-images/blacklist-ncb-images.component";
import {ModelNcbScreen} from "../blacklist-ncb-screen/model/model_ncbscreen";
import {BlacklistNcbScreenComponent} from "../blacklist-ncb-screen/blacklist-ncb-screen.component";
import {ModelNcbEnquiryCheckingFor} from "../../blacklist-ncb-enquiry/model/model_ncbenquirycheckingfor";
import {ImageServices} from "../../../../shared/center/action-show-image-gallery/action-show-images-gallery.services";
import {ModelImage} from "../../../../shared/center/action-show-image-gallery/model/modelImage";
import {ServiceEndpoint} from "../../../../shared/config/service-endpoint";
import {ActionShowImageGalleryComponent} from "../../../../shared/center/action-show-image-gallery/action-show-image-gallery.component";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {ModelNcbPdf} from "../blacklist-ncb-pdf/model/modelNcbPdf";

@Component({
  selector: 'app-blacklist-ncb-screen-todo',
  templateUrl: './blacklist-ncb-screen-todo.component.html'
})
export class BlacklistNcbScreenTodoComponent implements OnInit {
  _img_api:string="";
  _url:string="";
  constructor(private blacklistNcbService:BlacklistNcbService,
              private imageServices:ImageServices,
              private ServiceEndpoint : ServiceEndpoint,
              private userStorage:UserStorage
  ) {
    this._img_api = ServiceEndpoint.img_api;
    this._url = ServiceEndpoint.url;
  }

  modelNcbScreenTodo:ModelNcbScreenTodo[]=[];
  modelNcbEnquiryCheckingFor:ModelNcbEnquiryCheckingFor[]=[];
  datasource:ModelNcbScreenTodo[]=[];
  dataSelect:ModelNcbScreenTodo=null;
  totalTodo:number=0;
  modelImage: ModelNcbImage[]=[];
  modelNcbScreen:ModelNcbScreen[]=[];
  modelNcbPdf:ModelNcbPdf[]=[];
  totalImages:number=0;
  subscription:Subscription;
  subscriptionImage:Subscription;
  subscriptionDisplay:Subscription;
  waiting:boolean=false;
  selectedValue:string='rbN_InfMKT';
  @ViewChild("actionDialogComponent")actionDialogComponent:ActionDialogComponent;
  @ViewChild("blacklistNcbScreenComponent")blacklistNcbScreenComponent:BlacklistNcbScreenComponent;
  @Output() onSelectData: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    this.selectedValue = 'rbN_InfMKT';
    this.showListTodo('rbN_InfMKT');
    this.actionDialogComponent.open();

  }

  openDialog()
  {
    this.actionDialogComponent.open();
  }

  select(modelNcbScreenTodoSelect:ModelNcbScreenTodo)
  {
    this.dataSelect = modelNcbScreenTodoSelect;
  }

  onSelect(modelNcbScreenTodoSelect:ModelNcbScreenTodo)
  {

    this.waiting=true;
    this.subscriptionImage = this.imageServices.getImage(this._url+this._img_api+`/ask/image/GetNCBImage?device=web&userlogin=`+this.userStorage.getUserName()+'&comcode='+modelNcbScreenTodoSelect.COM_CODE+'&entcode='+modelNcbScreenTodoSelect.ENT_CODE+'&runno='+modelNcbScreenTodoSelect.RUN_NO).subscribe(
      (data: any) => {
        //console.log(data.LIST_DATA);
        this.waiting = true;
        this.modelImage = ModelImage.parse(data.LIST_DATA);
        this.totalImages = this.modelImage.length;
        this.imageServices.setModelImage(this.modelImage);
        this.onSelectData.emit();
        this.waiting = false;

      }
    );
    this.showNcbPdf(modelNcbScreenTodoSelect.RUN_NO);
    this.showDisplayScreen(modelNcbScreenTodoSelect.RUN_NO);
    this.actionDialogComponent.close();


  }

  showNcbPdf(runNo?:string)
  {
    this.blacklistNcbService.getNCBPDF(runNo).subscribe(
      (data: any) => {
        //  console.log(data.LIST_DATA);
        this.modelNcbPdf = ModelNcbPdf.parse(data.LIST_DATA);
        this.blacklistNcbService.setModelNcbPdf(this.modelNcbPdf);
      }
    );
  }

  showListTodo(selectMode?:any)
  {
    this.waiting = true;
   //this.modelNcbScreenTodo=[];
    this.subscription = this.blacklistNcbService.getApplyNewNCBRefreshTodo(selectMode).subscribe(
      (data: any) => {
      //  console.log(data.LIST_DATA);
        this.waiting = true;
        this.modelNcbScreenTodo = ModelNcbScreenTodo.parse(data.LIST_DATA);
        this.datasource = this.modelNcbScreenTodo;
        this.totalTodo = this.modelNcbScreenTodo.length;
        this.waiting = false;
      }
    );
  }

  showDisplayScreen(runNo?:string)
  {
    this.waiting = true;
    this.subscriptionDisplay = this.blacklistNcbService.getNCBDisplay(runNo).subscribe(
      (data: any) => {
      //  console.log(data.LIST_DATA);
        this.waiting = true;
        this.modelNcbScreen = ModelNcbScreen.parse(data.LIST_DATA);
        this.blacklistNcbService.setModelNcbScreen(this.modelNcbScreen);
        this.waiting = false;
      }
    );
  }

  loadListTodo(event: LazyLoadEvent) {
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    // console.log("test");
    // console.log(this.datasource);

    setTimeout(() => {
      if(this.datasource) {
        this.modelNcbScreenTodo = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }
}
