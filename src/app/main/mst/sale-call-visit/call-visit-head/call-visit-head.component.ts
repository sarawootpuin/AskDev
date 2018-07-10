import { FormControl } from '@angular/forms';
import { ElementRef, NgZone } from '@angular/core';
import {Component, Input, OnChanges, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SaleCallHead} from "../model/Sale-Call-Head";
import {ObjTemp} from "../model/ObjTemp";
import {SaleCallVisitService} from "../sale-call-visit.service";
import {isUndefined} from "util";
import {ServiceEndpoint} from "../../../../shared/config/service-endpoint";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {EntityDialogComponent} from "../../entity/entity-dialog/entity-dialog.component";
import {EntityModel} from "../../entity/model/entity-model";
import {Subscription} from "rxjs/Subscription";
import {SaleCallPcnt} from "../model/Sale-Call-Pcnt";
import {DatePipe} from "@angular/common";
import {TextMaskType} from "../../../../shared/config/text-mask-type";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
import {ActivatedRoute, Params} from "@angular/router";
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { zip } from 'rxjs/observable/zip';
@Component({
  selector: 'app-call-visit-head',
  templateUrl: './call-visit-head.component.html',
  styleUrls: ['./call-visit-head.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CallVisitHeadComponent implements OnInit, OnDestroy {
  @ViewChild("entity_dialog") entity_dialog: EntityDialogComponent;
  @ViewChild('Questiondialog') Questiondialog: AlertDialogComponent;
  @ViewChild('QuestionAfnewcard') QuestionAfnewcard: AlertDialogComponent;
  @ViewChild('Aleartdialog') Aleartdialog: AlertDialogComponent;
  subParams: Subscription;
  subscription: Subscription;
  subscriptionCheckEntity: Subscription;
  ListPrebranch: ObjTemp[];
  ListFNMT: ObjTemp[];
  ListFNME: ObjTemp[];
  ListSOURCE: ObjTemp[];
  ListOFFICER: ObjTemp[];

  listpcnt: SaleCallPcnt[];

  intro_by: string = "";
  OutURL: string;

  saleCallH: SaleCallHead = new SaleCallHead();

  inputIntro: boolean = false;
  buttonIntro: boolean = false;

  checkLoader : boolean = false ;

  code: string = "";
  username: string = "";
  comCode: string = "";

  vsale_no: string = '';
  vcard_no: string = '';
  vtask_code : string = '' ;
  amend : string
  componentReadOnly : boolean = false ;
  latitude = 13.720439
  longtidue = 100.532809
  locationChosen = false
  zoom = 12
  @ViewChild("search") public searchElementRef: ElementRef
  public searchControl: FormControl;
  constructor(private saleCallVisitService: SaleCallVisitService,
              private serviceEndPoint: ServiceEndpoint,
              private route: ActivatedRoute,
              private dataPipe: DatePipe,
              private textmask : TextMaskType,
              private userStorage: UserStorage,
              private mapsAPILoader : MapsAPILoader,
              private ngZone : NgZone) {
  }

  ngOnInit() {

    this.subParams = this.route.queryParams.subscribe(
      (params: Params) => {
        this.vsale_no = params['sale_call_no'];
        this.vcard_no = params['card_no'];
        this.vtask_code = params['task'];
        this.amend = params['amend']
      }
    );
    if (this.vtask_code == 'Cross Expense'){
       this.componentReadOnly = true;
    }


    this.code = this.userStorage.getCode();
    this.username = this.userStorage.getUserName();
    this.comCode = this.userStorage.getComCodePort();

    this.subscription = this.saleCallVisitService.eventsaleH.subscribe(
      (obj) => {
        this.saleCallH = obj;
        this.ListPrebranch = this.saleCallVisitService.ListPrebranch;
        this.ListFNMT = this.saleCallVisitService.ListFNMT;
        this.ListFNME = this.saleCallVisitService.ListFNME;
        this.ListSOURCE = this.saleCallVisitService.ListSOURCE;
        this.ListOFFICER = this.saleCallVisitService.ListOFFICER;

        if (!isUndefined(this.saleCallH.intro_mthd_cd)) {
          this.controlIntro(this.saleCallH.intro_mthd_cd);

          this.intro_by = this.saleCallH.intro_by_cd_full ;

        }

        //// after  Call  Data  finish
        if (!this.vsale_no){     ///  Don'have Sale Call No
          if (this.vcard_no){   ///  But have New Card No
            console.log(this.vsale_no);
            console.log(this.vcard_no);
            this.saleCallH.new_card_no = this.vcard_no ;
            this.onNewCardchkEntity(this.saleCallH.new_card_no,'')
          }
        }
      }
    )

    /*this.searchControl = new FormControl();
    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longtidue = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });*/
  }
  private setCurrentPosition() {
    console.log('test');
    if ("geolocation" in navigator) {
      console.log('test2');
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.latitude = position.coords.latitude;
        this.longtidue = position.coords.longitude;
        this.zoom = 12;
      });
    }
    
  }

  ngOnDestroy() {

    if (this.subParams != null){
       this.subParams.unsubscribe();
    }

    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }


    if (this.subscriptionCheckEntity != null) {
      this.subscriptionCheckEntity.unsubscribe();
    }

  }

  openEntity() {
    this.entity_dialog.showDialog();
  }

  changeSource(source: string) {
    this.saleCallH.source = source;
    this.saleCallH.intro_mthd_cd = source;
    this.controlIntro(this.saleCallH.intro_mthd_cd);
    this.intro_by = "";
    this.saleCallH.intro_by_cd = "";
  }

  controlIntro(source: string) {
    if (source == "40" || source == "53" || source == "300" || source == "403" || source == "90") {
      this.inputIntro = true;
      this.buttonIntro = true;
      this.OutURL = "";
    } else {
      this.inputIntro = false;
      this.buttonIntro = false;
      this.OutURL = this.serviceEndPoint.url + this.serviceEndPoint.sale_call_api
        + "/ask/salecall/GetINTRO?device=web&user=" + this.username
        + "&Comcode=" + this.comCode + "&INTRO_MTHD_CD=" + source;
    }
  }

  setIntroName(data: string) {
    this.intro_by = data;
  }

  setIntroValue(data: string) {
    this.saleCallH.intro_by_cd = data;
  }

  selectEntity : EntityModel ;
  fromSelectEntity : boolean = false ;
  checkEntity(entityModel:EntityModel){
    this.selectEntity = entityModel ;
    this.fromSelectEntity = true ;
    this.onNewCardchkEntity(this.selectEntity.newCardNo ,this.selectEntity.entCode );
    // this.subscriptionCheckEntity = this.saleCallVisitService.checkCustomer(
    //   'web', this.userStorage.getCode(), this.userStorage.getComCode(), this.selectEntity.newCardNo
    //   )
    //   .subscribe(
    //   (data:any) => {
    //     console.log(data);
    //       if (data.CODE == '200'){
    //          this.getEntity(this.selectEntity);
    //       }else if (data.CODE == '204'){
    //         this.Questiondialog.reset();
    //         this.Questiondialog.setAction('QUESTION')   ;
    //         this.Questiondialog.setMessage(data.MSG);
    //         this.Questiondialog.open();
    //       }else if (data.CODE == '400'){
    //         this.Aleartdialog.reset();
    //         this.Aleartdialog.setAction('WARNING') ;
    //         this.Aleartdialog.setMessage(data.MSG);
    //         this.Aleartdialog.open();
    //
    //       }
    //   }
    // );

  }

  getEntity(entityModel:EntityModel){
    //get entity from search

    ////   Entity To Sale Call Head
    this.saleCallH.com_code = entityModel.comCode ;
    this.saleCallH.comp_ent_code = entityModel.entCode;
    this.saleCallH.new_card_no = entityModel.newCardNo ;

    this.saleCallH.f_name = entityModel.fNameCode ;
    this.saleCallH.comp_tha_nme = entityModel.fNameT ;
    this.saleCallH.comp_l_tha_nme = entityModel.lNameT ;

    this.saleCallH.f_name_e = entityModel.fNameECode ;
    this.saleCallH.comp_eng_nme = entityModel.fNameE ;
    this.saleCallH.comp_l_eng_nme = entityModel.lNameE ;

    this.saleCallH.bussiness_type = '';
    this.saleCallH.bussiness_detail = '';
    this.saleCallH.md_name = entityModel.authorizeE ;
    this.saleCallH.nationality = entityModel.nationalityCode ;
    this.saleCallH.addr = entityModel.address ;
    this.saleCallH.prv_code = entityModel.prvCont ;
    this.saleCallH.tel = entityModel.tel ;
    this.saleCallH.e_mail = entityModel.emailAddress ;
    this.saleCallH.fax = entityModel.faxCurrent ;
    this.saleCallH.website = entityModel.webSite ;
    //this.saleCallH.regis_capital_amt = parseFloat(entityModel.regisCapital) / 1000000  ;
    this.saleCallH.regis_capital_amt = entityModel.regisCapital  ;
    //this.saleCallH.paid_up_capital_amt = parseFloat(entityModel.paidUpCapital) / 1000000 ;
    this.saleCallH.paid_up_capital_amt = entityModel.paidUpCapital ;
    this.saleCallH.performance_year = entityModel.salesYear ;
    //this.saleCallH.sale_amt = parseFloat(entityModel.salesAmt) / 1000000 ;
    this.saleCallH.sale_amt = entityModel.salesAmt;
    //this.saleCallH.net_profit_amt = 2
    this.saleCallH.net_worth_year = entityModel.netWorthYear ;
    //this.saleCallH.net_worth_amt = parseFloat(entityModel.netWorthAmt) / 1000000 ;
    this.saleCallH.net_worth_amt = entityModel.netWorthAmt ;
  //  console.log(entityModel.establishDate );
  //  console.log(entityModel.establishDate.constructor.name );
    this.saleCallH.established_year =  entityModel.establishDate.substr(6,4) ? entityModel.establishDate.substr(6,4) : "";



    ////// List industry
    if ((entityModel.listIndustry) && (entityModel.listIndustry.length > 0)  ){
      this.listpcnt = [] ;
      for (let i = 0; i <  entityModel.listIndustry.length; i++)
      {
        this.listpcnt.push(new SaleCallPcnt(
          entityModel.listIndustry[i].entCode,
          entityModel.listIndustry[i].newIndCode,
          entityModel.listIndustry[i].indPcnt,
          '',//entityModel.listIndustry[i].rmrk,
          entityModel.listIndustry[i].oldIndCode,
          entityModel.listIndustry[i].comCode,
          entityModel.listIndustry[i].subId,
          '',// entityModel.listIndustry[i].input_user,
          '',//entityModel.listIndustry[i].last_update,
          this.saleCallH.sale_call_no ? this.saleCallH.sale_call_no : ''  ,//entityModel.listIndustry[i].sale_call_no,
          entityModel.listIndustry[i].newIndDecs,
          entityModel.listIndustry[i].oldIndDecs
        ))
      }

      this.saleCallH.listPCNT = this.listpcnt ;

    }

  }

  mapIntial(inputT : string){
     if(inputT == 'T'){
        let tempObj = this.ListFNMT.find(ObjTemp => ObjTemp.id == this.saleCallH.f_name) ;
        if (tempObj){
           this.saleCallH.f_name_e = tempObj.key1 ;
        }
     }
     else if (inputT == 'E')
     {
       let tempObj = this.ListFNME.find(ObjTemp => ObjTemp.id == this.saleCallH.f_name_e) ;
       if (tempObj){
         this.saleCallH.f_name = tempObj.key1 ;
       }
     }
  }

  private comparesaleCallH: SaleCallHead;
  onNewCardchkEntity(newcard : string, entCode : string){
   //  console.log(newcard);
    if (newcard.length >= 6) {
      this.checkLoader = true ;
      this.subscriptionCheckEntity = this.saleCallVisitService.checkCustomer(
        'web', this.userStorage.getCode(),
        this.userStorage.getComCode(), newcard , entCode
      )
        .subscribe(
          (data:any) => {
            this.checkLoader = false ;
             console.log(data);
             if (data.CODE == '400'){
              this.Aleartdialog.reset();
              this.Aleartdialog.setAction('WARNING') ;
              this.Aleartdialog.setMessage(data.MSG);
              this.Aleartdialog.open();
              this.saleCallH.new_card_no = '' ;
            } else {
               this.saleCallH.new_card_no = newcard;
               if (data.DATA){
                 this.comparesaleCallH = SaleCallHead.parse(data.DATA);
                 if (data.CODE == '204'){
                   this.QuestionAfnewcard.reset();
                   this.QuestionAfnewcard.setAction('QUESTION')   ;
                   this.QuestionAfnewcard.setMessage(data.MSG);
                   this.QuestionAfnewcard.open();
                 } else if (data.CODE == '200')  {
                    if (this.fromSelectEntity){
                      this.onCompareSaleCall();
                    }else if (data.DATA.COMP_ENT_CODE) {
                      this.QuestionAfnewcard.reset();
                      this.QuestionAfnewcard.setAction('QUESTION')   ;
                      this.QuestionAfnewcard.setMessage('ลูกค้าคนนี้มีอยู่ในฐานข้อมูล บริษัท ต้องการนำข้อมูลใน ฐานข้อมูล บริษัท มาทับ หรือไม่');
                      this.QuestionAfnewcard.open();
                    }
                 }
               }
            }
            this.fromSelectEntity = false ;
          }
      );
    }
  }
  
  onCompareSaleCall(){

    this.saleCallH.comp_ent_code = this.comparesaleCallH.comp_ent_code ;

    this.saleCallH.f_name = this.comparesaleCallH.f_name ;
    this.saleCallH.comp_tha_nme = this.comparesaleCallH.comp_tha_nme ;
    this.saleCallH.comp_l_tha_nme = this.comparesaleCallH.comp_l_tha_nme ;

    this.saleCallH.f_name_e = this.comparesaleCallH.f_name_e ;
    this.saleCallH.comp_eng_nme = this.comparesaleCallH.comp_eng_nme ;
    this.saleCallH.comp_l_eng_nme = this.comparesaleCallH.comp_l_eng_nme ;
    this.saleCallH.connect_since = this.comparesaleCallH.connect_since ;

    this.saleCallH.bussiness_type = this.comparesaleCallH.bussiness_type ;
    this.saleCallH.bussiness_detail = this.comparesaleCallH.bussiness_detail ;
    this.saleCallH.bussiness_detail_name = this.comparesaleCallH.bussiness_detail_name ;
    this.saleCallH.cluster = this.comparesaleCallH.cluster ;

    this.saleCallH.md_name = this.comparesaleCallH.md_name ;
    this.saleCallH.nationality = this.comparesaleCallH.nationality ;
    this.saleCallH.addr = this.comparesaleCallH.addr ;
    this.saleCallH.prv_code = this.comparesaleCallH.prv_code ;

    this.saleCallH.tel = this.comparesaleCallH.tel ;
    this.saleCallH.e_mail = this.comparesaleCallH.e_mail ;
    this.saleCallH.fax = this.comparesaleCallH.fax ;
    this.saleCallH.website = this.comparesaleCallH.website ;

    this.saleCallH.regis_capital_amt = this.comparesaleCallH.regis_capital_amt ;
    this.saleCallH.paid_up_capital_amt = this.comparesaleCallH.paid_up_capital_amt ;



    this.saleCallH.performance_year = this.comparesaleCallH.performance_year ;
    this.saleCallH.sale_amt = this.comparesaleCallH.sale_amt ;
    this.saleCallH.net_worth_year = this.comparesaleCallH.net_worth_year ;
    this.saleCallH.net_worth_amt = this.comparesaleCallH.net_worth_amt ;
    this.saleCallH.established_year = this.comparesaleCallH.established_year ;

    this.saleCallH.listPCNT = this.comparesaleCallH.listPCNT ;
  }

  onChoseLocation(event){
    this.latitude = event.coords.lat;
    this.longtidue = event.coords.lng;
    this.locationChosen = true;
    
  }

}
