import {Component, EventEmitter, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EntityService} from "../entity.service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EntityMaster} from "../model/entity-master";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
import {EntityModel} from "../model/entity-model";
import {EntityHeadComponent} from "./entity-head/entity-head.component";
import {EntityGeneralDetailComponent} from "./entity-general-detail/entity-general-detail.component";
import {EntityCareerSpouseComponent} from "./entity-career-spouse/entity-career-spouse.component";
import {EntityAddressThComponent} from "./entity-address-th/entity-address-th.component";
import {EntityAddressEnComponent} from "./entity-address-en/entity-address-en.component";
import {EntityCardComponent} from "./entity-card/entity-card.component";
import {EntityBankComponent} from "./entity-bank/entity-bank.component";
import {EntityIndustryComponent} from "./entity-industry/entity-industry.component";
import * as copy from 'copy-to-clipboard';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.css'],
})
export class EntityFormComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private subscriptionMaster: Subscription;
  private subscriptionDetail: Subscription;
  private subscriptionNew: Subscription;
  @ViewChild('alertDialog') alertDialog: AlertDialogComponent;
  @ViewChild('askDialog') askDialog: AlertDialogComponent;
  @ViewChild('entityHead') entityHead: EntityHeadComponent;
  @ViewChild('entityDetail') entityDetail: EntityGeneralDetailComponent;
  @ViewChild('entityCareer') entityCareer: EntityCareerSpouseComponent;
  @ViewChild('entityAddressT') entityAddressT: EntityAddressThComponent;
  @ViewChild('entityAddressE') entityAddressE: EntityAddressEnComponent;
  @ViewChild('entityCard') entityCard: EntityCardComponent;
  @ViewChild('entityBank') entityBank: EntityBankComponent;
  @ViewChild('entityIndustry') entityIndustry: EntityIndustryComponent;
  @ViewChild('alertWarning') alertWarning: AlertDialogComponent;

  userCode: string = '';
  comCode: string = '';
  entCode: string = '';
  fromNew: string = '';
  prefix: EntityMaster[] = [];
  prefixEng: EntityMaster[] = [];
  cardType: EntityMaster[] = [];
  marriageStatus: EntityMaster[] = [];
  nationality: EntityMaster[] = [];
  sex: EntityMaster[] = [];
  customerGroup: EntityMaster[] = [];
  businessType: EntityMaster[] = [];
  businessDetail: EntityMaster[] = [];
  occupation: EntityMaster[] = [];
  positionBg: EntityMaster[] = [];
  industry: EntityMaster[] = [];
  bank: EntityMaster[] = [];
  industryEng: EntityMaster[] = [];
  address: EntityMaster[] = [];
  entityModel: EntityModel;
  isLoading: boolean = true;
  isSaving: boolean = false;
  hiddenExit: boolean = false;


  constructor(private entityService: EntityService,
              private userStorage: UserStorage,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.hiddenExit = false;
    this.isLoading = true
    this.userCode = this.userStorage.getCode();
    //console.log('user code -->'+this.userCode);
    this.comCode = this.userStorage.getComCodePort();
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.subscriptionMaster = this.entityService.getMasterData('web', this.userCode, this.comCode,
          'fnm,fnme,sex,crd,bnk,sts,ntn,oc,pos_bg,bus,ind,ine,zip_cd,cus_grp,bus_detail').subscribe(
          (data: any) => {
            this.prefix = EntityMaster.parse(data.DATA.prefix);
            this.prefixEng = EntityMaster.parse(data.DATA.prefixEng);
            this.cardType = EntityMaster.parse(data.DATA.cardType);
            this.marriageStatus = EntityMaster.parse(data.DATA.marriageStatus);
            this.nationality = EntityMaster.parse(data.DATA.nationality);
            this.sex = EntityMaster.parse(data.DATA.sex);
            this.customerGroup = EntityMaster.parse(data.DATA.customerGroup);
            this.businessType = EntityMaster.parse(data.DATA.businessType);
            this.businessDetail = EntityMaster.parse(data.DATA.businessDetail);
            this.occupation = EntityMaster.parse(data.DATA.occupation);
            this.positionBg = EntityMaster.parse(data.DATA.positionBg);
            this.industry = EntityMaster.parse(data.DATA.industry);
            this.bank = EntityMaster.parse(data.DATA.bank);
            this.industryEng = EntityMaster.parse(data.DATA.industryEng);
            this.address = EntityMaster.parse(data.DATA.address);

            this.entityService.setPrefix(this.prefix);
            this.entityService.setPrefixEng(this.prefixEng);
            this.entityService.setCardType(this.cardType);
            this.entityService.setMarriageStatus(this.marriageStatus);
            this.entityService.setNationality(this.nationality);
            this.entityService.setSex(this.sex);
            this.entityService.setCustomerGroup(this.customerGroup);
            this.entityService.setBusinessType(this.businessType);
            this.entityService.setBusinessDetail(this.businessDetail);
            this.entityService.setOccupation(this.occupation);
            this.entityService.setPositionBg(this.positionBg);
            this.entityService.setIndustry(this.industry);
            this.entityService.setBank(this.bank);
            this.entityService.setIndustryEng(this.industryEng);
            this.entityService.setAddress(this.address);

            this.entCode = params['entCode'];
            if (this.entCode != null) {
              this.subscriptionDetail = this.entityService.openEntity
              ('web', this.userCode, this.comCode, this.entCode).subscribe(
                (data: any) => {
                  this.isLoading = false;
                  this.entityModel = EntityModel.parse(data.DATA);
                  console.log(this.entityModel);
                }
              )
            }
            else {
              this.isLoading = false;
            }
          }
        )
      }
    );
    this.subscriptionNew = this.route.queryParams.subscribe(
      (params: Params) => {
        this.fromNew = params['from'];
        if (this.fromNew == 'New') {
          console.log(this.fromNew);
          this.hiddenExit = true;
        }
      }
    );
  }

  showErrorMsg(event) {
    this.alertDialog.reset();
    this.alertDialog.setMessage(event);
    this.alertDialog.open();
  }

  backToEntity() {
    this.router.navigateByUrl('entity');
  }

  openSaveDialog() {
    this.askDialog.reset();
    this.askDialog.setAction('SAVE');
    this.askDialog.open();
  }

  validateSave(entityRequest: EntityModel) {
    this.alertWarning.list_msg = [];
    this.alertWarning.single = 0;
    let isCheck : boolean = true ;
    let isNotCust : string = this.userStorage.getnewEntType();
    //console.log(isNotCust);
     if (isNotCust=='G') { isCheck= false } ;

    if (!entityRequest.newCardNo) {
      this.alertWarning.addMessage('Id card is empty');
    }
    if ((!entityRequest.birthD) &&(isCheck)) {
      this.alertWarning.addMessage('Birth/Register Date is empty');
    }
    if (!entityRequest.fNameCode) {
      this.alertWarning.addMessage('Intial(T) name is empty');
    }
    if (!entityRequest.fNameT) {
      this.alertWarning.addMessage('Name Thai is empty');
    }
    if (!entityRequest.fNameECode) {
      this.alertWarning.addMessage('Intial(E) is empty');
    }
    if (!entityRequest.fNameE) {
      this.alertWarning.addMessage('First Name is empty');
    }
    if ((!entityRequest.cardType)&&(isCheck)) {
      this.alertWarning.addMessage('Card type is empty');
    }
    if ((!entityRequest.address)&&(isCheck)) {
      this.alertWarning.addMessage('Address is empty');
    }
    if ((!entityRequest.zip)&&(isCheck)) {
      this.alertWarning.addMessage('Address code is empty');
    }
    if ((!entityRequest.posi)) {
      this.alertWarning.addMessage('Position is empty');
    }
    return this.alertWarning.list_msg.length > 0 ? false : true;
  }

  saveEntity() {
    this.generateRequest();
  }

  private generateRequest() {
    let entityRequest: EntityModel = new EntityModel();
    entityRequest.device = 'Web';
    entityRequest.userCode = this.userCode;
    entityRequest.addressContCs = "";
    entityRequest.businessType = "";
    entityRequest.busVatFlg = "";
    entityRequest.cardNo = "";
    entityRequest.chairMan = "";
    entityRequest.clusterInd = "";
    entityRequest.confirmStatmentFlag = "";
    entityRequest.currencyCode = "";
    entityRequest.entTy = "";
    entityRequest.highest = "";
    entityRequest.highestHp = "";
    entityRequest.highestLs = "";
    entityRequest.inputDate = "";
    entityRequest.inputUser = "";
    entityRequest.lastUpd = "";
    entityRequest.lastUsr = "";
    entityRequest.locTy = "";
    entityRequest.mktBgpl = "";
    entityRequest.personCollectBilling = "";
    entityRequest.placeBilling = "";
    entityRequest.placeCollect = "";
    entityRequest.prvCont = "";
    entityRequest.spousCardNo = "";
    entityRequest.spousCardType = "";

    entityRequest = this.entityHead.generateHeadRequest(entityRequest);
    entityRequest = this.entityDetail.generateRequest(entityRequest);
    entityRequest = this.entityCareer.generateRequest(entityRequest);
    entityRequest = this.entityAddressT.generateRequest(entityRequest);
    entityRequest = this.entityAddressE.generateRequest(entityRequest);
    entityRequest = this.entityCard.generateRequest(entityRequest);
    entityRequest = this.entityBank.generateRequest(entityRequest);
    entityRequest = this.entityIndustry.generateRequest(entityRequest);

    if (this.validateSave(entityRequest)) {
      this.isSaving = true;
      this.entityService.saveEntity(entityRequest).subscribe(
        (data: any) => {
          console.log(data);
          this.isSaving = false;
          if (data.CODE != 500) {
            this.showErrorMsg('Complete');
            setTimeout(() => {
              this.alertDialog.close();
            }, 2000);

            if (!entityRequest.entCode) {copy(data.DATA,{message: 'Press Ctrl+c to copy',});
              };

            if (data.DATA && !entityRequest.entCode) {window.close();
              };

            this.entityService.setSaveCusCode('');

          } else {
            this.isSaving = false;
            this.showErrorMsg(data.MSG);
          }
        }
      )
    } else {
      this.alertWarning.open();
    }
  }

  ngOnDestroy() {
    console.log('entity form destroy')
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionMaster != null) {
      this.subscriptionMaster.unsubscribe();
    }
    if (this.subscriptionDetail != null) {
      this.subscriptionDetail.unsubscribe();
    }

  }

}
