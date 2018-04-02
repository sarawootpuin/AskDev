import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {EntityService} from "../../entity.service";
import {EntityMaster} from "../../model/entity-master";
import {EntityModel} from "../../model/entity-model";
import {Nation} from "../../model/nation";
import {DateUtils} from "../../../../../shared/center/utils/date-utils";

@Component({
  selector: 'app-entity-general-detail',
  templateUrl: './entity-general-detail.component.html',
  styleUrls: ['./entity-general-detail.component.css']
})
export class EntityGeneralDetailComponent implements OnInit, OnChanges {
  @Input("entity") entityModel: EntityModel;
  @ViewChild("inputCardType") inputCardType: ElementRef;
  @ViewChild("inputAges") inputAges: ElementRef;
  @ViewChild("inputCardBy") inputCardBy: ElementRef;
  @ViewChild("inputNationality") inputNationality: ElementRef;
  @ViewChild("inputSex") inputSex: ElementRef;
  @ViewChild("inputWeight") inputWeight: ElementRef;
  @ViewChild("inputHeight") inputHeight: ElementRef;
  @ViewChild("inputContactEng") inputContactEng: ElementRef;
  @ViewChild("inputContactTh") inputContactTh: ElementRef;
  @ViewChild("inputContactTel") inputContactTel: ElementRef;
  @ViewChild("inputStatusM") inputStatusM: ElementRef;
  @ViewChild("inputAuthorizeT") inputAuthorizeT: ElementRef;
  @ViewChild("inputAuthorizeE") inputAuthorizeE: ElementRef;
  @ViewChild("inputGroupCode") inputGroupCode: ElementRef;
  @ViewChild("inputBusinessType") inputBusinessType: ElementRef;
  @ViewChild("inputBusinessDetail") inputBusinessDetail: ElementRef;
  @ViewChild("inputEmailAddress") inputEmailAddress: ElementRef;
  @ViewChild("inputWebsite") inputWebsite: ElementRef;
  @ViewChild("inputRegisCapital") inputRegisCapital: ElementRef;
  @ViewChild("inputPaidUpCapital") inputPaidUpCapital: ElementRef;
  @ViewChild("inputSalesYear") inputSalesYear: ElementRef;
  @ViewChild("inputSalesAmt") inputSalesAmt: ElementRef;
  @ViewChild("inputNetWorthYear") inputNetWorthYear: ElementRef;
  @ViewChild("inputNetWorthAmt") inputNetWorthAmt: ElementRef;
  cardType: EntityMaster[] = [];
  marriageStatus: EntityMaster[] = [];
  nationality: EntityMaster[] = [];
  sex: EntityMaster[] = [];
  customerGroup: EntityMaster[] = [];
  businessType: EntityMaster[] = [];
  businessDetail: EntityMaster[] = [];
  cardIssueDate;
  cardExpireDate;

  listNationality: { 'row': number, 'code': string, 'percent': string }[] = [];

  constructor(private entityService: EntityService,
              private dateUtils: DateUtils) {
  }

  ngOnChanges() {
    this.listNationality = [];
    if (this.entityModel) {
      this.cardIssueDate = this.entityModel.cardIssueDate;
      this.cardExpireDate = this.entityModel.cardExpireDate;
      for (let i = 0; i < this.entityModel.listNation.length; i++) {
        let nation: Nation = this.entityModel.listNation[i];
        let row = i + 1;
        let code = nation.nationality;
        let percent = nation.percentage;

        this.listNationality.push({
          'row': row,
          'code': code, 'percent': percent
        })
      }
    } else {
      this.cardIssueDate = null;
      this.cardExpireDate = null;
    }

  }

  ngOnInit() {
    this.entityService.cardType.subscribe(
      (data: EntityMaster[]) => {
        this.cardType = data;
      }
    );
    this.entityService.marriageStatus.subscribe(
      (data: EntityMaster[]) => {
        this.marriageStatus = data;
      }
    );
    this.entityService.nationality.subscribe(
      (data: EntityMaster[]) => {
        this.nationality = data;
      }
    );
    this.entityService.sex.subscribe(
      (data: EntityMaster[]) => {
        this.sex = data;
      }
    );
    this.entityService.customerGroup.subscribe(
      (data: EntityMaster[]) => {
        this.customerGroup = data;
      }
    );
    this.entityService.businessType.subscribe(
      (data: EntityMaster[]) => {
        this.businessType = data;
      }
    );
    this.entityService.businessDetail.subscribe(
      (data: EntityMaster[]) => {
        this.businessDetail = data;
      }
    );
  }

  deleteNation(index: number) {
    this.listNationality.splice(index, 1);
  }

  generateRequest(entityRequest: EntityModel): EntityModel {
    entityRequest.cardType = this.inputCardType.nativeElement.value;
    entityRequest.ages = this.inputAges.nativeElement.value;
    entityRequest.cardBy = this.inputCardBy.nativeElement.value;
    if (this.cardIssueDate instanceof Date) {
      this.cardIssueDate = this.dateUtils.dateToString(this.cardIssueDate, 'dd/MM/yyyy')
    }
    entityRequest.cardIssueDate = this.cardIssueDate ? this.cardIssueDate : '';
    if (this.cardExpireDate instanceof Date) {
      this.cardExpireDate = this.dateUtils.dateToString(this.cardExpireDate, 'dd/MM/yyyy')
    }
    entityRequest.cardExpireDate = this.cardExpireDate ? this.cardExpireDate : '';
    entityRequest.nationalityCode = this.inputNationality.nativeElement.value;
    entityRequest.sex = this.inputSex.nativeElement.value;
    entityRequest.weight = this.inputWeight.nativeElement.value;
    entityRequest.high = this.inputHeight.nativeElement.value;
    let listNation: Nation[] = [];
    for (let i = 0; i < this.listNationality.length; i++) {
      let nation: Nation = new Nation('', '', this.listNationality[i].code,
        this.listNationality[i].percent, '', '');
      listNation.push(nation);
    }
    entityRequest.listNation = listNation;
    entityRequest.contractEng = this.inputContactEng.nativeElement.value;
    entityRequest.contract = this.inputContactTh.nativeElement.value;
    entityRequest.contactTel = this.inputContactTel.nativeElement.value;
    entityRequest.statusM = this.inputStatusM.nativeElement.value;
    entityRequest.authorizeT = this.inputAuthorizeT.nativeElement.value;
    entityRequest.authorizeE = this.inputAuthorizeE.nativeElement.value;
    entityRequest.grpCode = this.inputGroupCode.nativeElement.value;
    entityRequest.busTy = this.inputBusinessType.nativeElement.value;
    entityRequest.busDetail = this.inputBusinessDetail.nativeElement.value;
    entityRequest.emailAddress = this.inputEmailAddress.nativeElement.value;
    entityRequest.webSite = this.inputWebsite.nativeElement.value;
    entityRequest.regisCapital = this.inputRegisCapital.nativeElement.value;
    entityRequest.paidUpCapital = this.inputPaidUpCapital.nativeElement.value;
    entityRequest.salesYear = this.inputSalesYear.nativeElement.value;
    entityRequest.salesAmt = this.inputSalesAmt.nativeElement.value;
    entityRequest.netWorthYear = this.inputNetWorthYear.nativeElement.value;
    entityRequest.netWorthAmt = this.inputNetWorthAmt.nativeElement.value;
    return entityRequest;
  }
}
