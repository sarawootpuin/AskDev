import {Component, OnDestroy, OnInit} from '@angular/core';
import {VerificationDetailService} from "./verification-detail.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {MainTabModel} from "../model/mainTab.model";
import {Dropdown} from "primeng/primeng";
import {DropdownModel} from "../model/dropdown.model";
import {ScrSubjModel} from "../model/scrsubject.model";
import {AnswerScoreDropdownModel} from "../model/answer-scr-dropdown.model";
import {RowTableModel} from "../model/rowtable.model";
import {ImageServices} from "../../../shared/center/action-show-image-gallery/action-show-images-gallery.services";
import {ModelNcbImage} from "../../blacklist/blacklist-ncb/blacklist-ncb-images/model/modelNcbImage";
import {ModelImage} from "../../../shared/center/action-show-image-gallery/model/modelImage";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";

@Component({
  selector: 'app-verification-detail',
  templateUrl: './verification-detail.component.html',
  styleUrls: ['./verification-detail.component.css']
})
export class VerificationDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionParam: Subscription;
  subscriptionImage: Subscription;
  mainTab: MainTabModel;
  listWaitMthd: DropdownModel[] = [];
  listVerMthd: DropdownModel[] = [];
  listAnswer: AnswerScoreDropdownModel[] = [];
  listQuestionTab: ScrSubjModel[] = [];
  run_no: string;
  com_code: string;
  ref_no: string;
  ent_cd: string;
  stg_id: string;
  currentTabName: string = 'main';
  isLoading:boolean =true;
  modelImage: ModelImage[]=[];
  checkSelectCreditScoring : boolean = false;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private verficationDetailService: VerificationDetailService,
              private imageServices:ImageServices,
              private service: ServiceEndpoint) {
  }


  ngOnInit() {
    this.subscriptionParam = this.route.queryParams.subscribe(
      (param: Params) => {
        this.run_no = param['run_no'];
        this.com_code = param['com_code'];
        this.ref_no = param['ref_no'];
        this.ent_cd = param['ent_cd'];
        this.stg_id = param['stg_id'];
        this.verficationDetailService.stgId = this.stg_id;
        // alert(this.run_no);

        this.getDataScoring();
      }
    );

    this.verficationDetailService.emitClickCrScrHis.subscribe(
      (click) => {

        this.checkSelectCreditScoring = click;

        if (this.checkSelectCreditScoring == true)
        {
          this.run_no = this.verficationDetailService.creditScoringHistory.runNo;
          // use same comCode //
          this.ref_no = this.verficationDetailService.creditScoringHistory.refNo;
          this.ent_cd = this.verficationDetailService.creditScoringHistory.entCd;

          this.getDataScoring();
        }
      }
    );

  }


  getDataScoring() {

    this.mainTab = new MainTabModel();
    this.isLoading = true;
    this.subscription = this.verficationDetailService.getDataScoring("device", "scr", this.run_no, this.com_code, this.ent_cd, this.ref_no).subscribe(
      (data: any) => {
       // console.log(data);
        this.mainTab = MainTabModel.parse(data.DATA);
        this.verficationDetailService.setMainTab(this.mainTab);
        this.listWaitMthd = DropdownModel.parse(data.DATA.LIST_WAIT_METHD);
        this.listVerMthd = DropdownModel.parse(data.DATA.ver_mthd);
        //-------satrt mark -----//
        this.listQuestionTab = JSON.parse(JSON.stringify(this.mainTab.listTabScrSubj));
        this.verficationDetailService.setSubj(this.listQuestionTab);

        //ต้อง cal ก่อน 1 ครั้ง
        this.verficationDetailService.calScoringAllPage();
        //-------end mark -----//
        // Mos //
        if (this.checkSelectCreditScoring == true)
        {
          this.verficationDetailService.onEditFromCreditScoringHist();
          this.checkSelectCreditScoring = false;
          this.verficationDetailService.creditScoringHistory = null;
        }

        this.isLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  getImage(){
     let url = this.service.url;
     this.subscriptionImage = this.imageServices.getImage(url+this.service.img_api+`/ask/image/GetScoringImage?device=web&userlogin=`+this.verficationDetailService.userName+'&comcode='+this.mainTab.com_code+'&entcode='+this.mainTab.ent_cd+'&refno='+this.mainTab.ref_no).subscribe(
    // this.subscriptionImage = this.imageServices.getImage('http://javadev01:8095/IMG_WebServices/ask/image/GetNCBImage?device=web&userlogin=CHOKCHAI.NI&comcode=ASKH&entcode=694057&runno=196386').subscribe(
      (data: any) => {
        //console.log(data.LIST_DATA);
        this.modelImage = ModelImage.parse(data.LIST_DATA);
        this.imageServices.setModelImage(this.modelImage);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParam != null) {
      this.subscriptionParam.unsubscribe()
    }
    if (this.subscriptionImage != null) {
      this.subscriptionImage.unsubscribe()
    }

  }
  onChangeTab(tabName: string){
    this.currentTabName = tabName;
    if(this.currentTabName == 'img'){
      this.getImage();
    }
  }
}
