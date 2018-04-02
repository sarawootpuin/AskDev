import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {EntityService} from "../../entity.service";
import {EntityMaster} from "../../model/entity-master";
import {EntityModel} from "../../model/entity-model";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {DateUtils} from "../../../../../shared/center/utils/date-utils";

@Component({
  selector: 'app-entity-head',
  templateUrl: './entity-head.component.html',
  styleUrls: ['./entity-head.component.css']
})
export class EntityHeadComponent implements OnInit, OnChanges {
  prefix: EntityMaster[] = [];
  prefixEng: EntityMaster[] = [];
  @Input("entity") entityModel: EntityModel;
  @ViewChild('inputCompany') inputCompany: ElementRef;
  @ViewChild('inputEntCode') inputEntCode: ElementRef;
  @ViewChild('inputBranch') inputBranch: ElementRef;
  @ViewChild('inputPrefixT') inputPrefixT: ElementRef;
  @ViewChild('inputFNameT') inputFNameT: ElementRef;
  @ViewChild('inputLNameT') inputLNameT: ElementRef;
  @ViewChild('inputPrefixE') inputPrefixE: ElementRef;
  @ViewChild('inputFNameE') inputFNameE: ElementRef;
  @ViewChild('inputLNameE') inputLNameE: ElementRef;
  @ViewChild('inputNewCard') inputNewCard: ElementRef;
  comCode: string = "";
  birthD;
  establishDate;

  constructor(private entityService: EntityService,
              private userStorage: UserStorage,
              private dateUtils: DateUtils) {
  }

  ngOnChanges() {
    if (this.entityModel) {
      this.birthD = this.entityModel.birthD;
      this.establishDate = this.entityModel.establishDate;
    } else {
      this.birthD = null;
      this.establishDate = null;
    }
  }

  ngOnInit() {
    this.comCode = this.userStorage.getComCodePort();
    this.entityService.prefix.subscribe(
      (data: EntityMaster[]) => {
        this.prefix = data;
      }
    );
    this.entityService.prefixEng.subscribe(
      (data: EntityMaster[]) => {
        this.prefixEng = data;
      }
    );
  }

  generateHeadRequest(entityRequest: EntityModel): EntityModel {
    entityRequest.comCode = this.inputCompany.nativeElement.value;
    entityRequest.entCode = this.inputEntCode.nativeElement.value;
    entityRequest.branchNo = this.inputBranch.nativeElement.value;
    entityRequest.fNameCode = this.inputPrefixT.nativeElement.value;
    entityRequest.fNameT = this.inputFNameT.nativeElement.value;
    entityRequest.lNameT = this.inputLNameT.nativeElement.value;
    entityRequest.fNameECode = this.inputPrefixE.nativeElement.value;
    entityRequest.fNameE = this.inputFNameE.nativeElement.value;
    entityRequest.lNameE = this.inputLNameE.nativeElement.value;
    if (this.birthD instanceof Date) {
      this.birthD = this.dateUtils.dateToString(this.birthD, 'dd/MM/yyyy')
    }
    entityRequest.birthD = this.birthD ? this.birthD : '';
    if (this.establishDate instanceof Date) {
      this.establishDate = this.dateUtils.dateToString(this.establishDate, 'dd/MM/yyyy')
    }
    entityRequest.establishDate = this.establishDate ? this.establishDate : '';
    entityRequest.newCardNo = this.inputNewCard.nativeElement.value;

    return entityRequest;
  }
}
