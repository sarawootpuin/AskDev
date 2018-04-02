import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {EntityService} from "../../entity.service";
import {EntityMaster} from "../../model/entity-master";
import {Calendar, DataTable} from "primeng/primeng";
import {EntityModel} from "../../model/entity-model";
import {Card} from "../../model/card";
import {DateUtils} from "../../../../../shared/center/utils/date-utils";

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.css']
})
export class EntityCardComponent implements OnInit, OnChanges {
  @Input("entity") entityModel: EntityModel;
  cardType: EntityMaster[] = [];
  @ViewChild('dt') dt: DataTable;
  @ViewChild('inputCardNumber') inputCardNumber: ElementRef;
  @ViewChild('inputCardType') inputCardType: ElementRef;
  @ViewChild('inputPlace') inputPlace: ElementRef;
  @ViewChild('inputStartDate') inputStartDate: Calendar;
  @ViewChild('inputExpiredDate') inputExpiredDate: Calendar;
  @ViewChild('inputAddress1') inputAddress1: ElementRef;
  @ViewChild('inputAddress2') inputAddress2: ElementRef;
  @Output("errorMsg") errorMsg: EventEmitter<string> = new EventEmitter();
  ERROR_MSG: string = 'Please fill in required fields.';
  cols: any[];
  listCard: {
    'row': number,
    'card_number': string, 'card_type_code': string,
    'card_type_name': string,
    'place': string, 'start_date': string,
    'expired_date': string, 'address1': string, 'address2': string
  }[] = [];
  listCardSelected: {
    'row': number,
    'card_number': string, 'card_type_code': string,
    'card_type_name': string,
    'place': string, 'start_date': string,
    'expired_date': string, 'address1': string, 'address2': string
  };

  constructor(private entityService: EntityService,
              private dateUtils: DateUtils) {
  }

  ngOnChanges() {
    this.listCard = [];
    this.listCardSelected = null;
    if (this.entityModel) {
      for (let i = 0; i < this.entityModel.listCard.length; i++) {
        let card: Card = this.entityModel.listCard[i];
        let row = i + 1;
        let cardNumber = card.cardNo;
        let cardTypeCode = card.cardType;
        let cardTypeName = card.cardTypeDesc;
        let place = card.cardBy;
        let startDate = card.cardIssueDate;
        let expiredDate = card.cardExpireDate;
        let address1 = card.cardAdd1;
        let address2 = card.cardAdd2;

        this.listCard.push({
          'row': row,
          'card_number': cardNumber, 'card_type_code': cardTypeCode,
          'card_type_name': cardTypeName,
          'place': place, 'start_date': startDate,
          'expired_date': expiredDate, 'address1': address1,
          'address2': address2
        })
      }
    }
  }

  ngOnInit() {
    this.cols = [
      {field: 'card_type_name', header: 'ประเภทบัตร'},
      {field: 'card_number', header: 'เลขบัตร'},
      {field: 'start_date', header: 'วันที่ออกบัตร'},
      {field: 'expired_date', header: 'วันหมดอายุบัตร'}
    ];
    this.entityService.cardType.subscribe(
      (data: EntityMaster[]) => {
        this.cardType = data;
      }
    );
  }

  addNewCard() {
    if (!this.validateForm()) {
      this.errorMsg.emit(this.ERROR_MSG);
      return;
    }
    let row = 1;
    if (this.listCard.length > 0) {
      row = this.listCard[this.listCard.length - 1].row + 1;
    }
    let numcard = this.inputCardNumber.nativeElement.value;
    let cardType = this.inputCardType.nativeElement.value;
    let cardTypeCode = "";
    let cardTypeName = "";
    if (cardType != null && cardType != "") {
      let cardTypeArr = cardType.split(",");
      cardTypeCode = cardTypeArr[0];
      cardTypeName = cardTypeArr[1];
    }
    let place = this.inputPlace.nativeElement.value;
    let startDate = this.inputStartDate.inputFieldValue;
    let expiredDate = this.inputExpiredDate.inputFieldValue;
    let address1 = this.inputAddress1.nativeElement.value;
    let address2 = this.inputAddress2.nativeElement.value;

    this.listCard.push({
      'row': row,
      'card_number': numcard, 'card_type_code': cardTypeCode,
      'card_type_name': cardTypeName,
      'place': place, 'start_date': startDate,
      'expired_date': expiredDate, 'address1': address1,
      'address2': address2
    });
    console.log(this.listCard);
    this.listCardSelected = null
    this.resetForm();
  }

  resetForm() {
    this.inputCardNumber.nativeElement.value = "";
    this.inputCardType.nativeElement.value = "";
    this.inputPlace.nativeElement.value = "";
    this.inputStartDate.inputFieldValue = null;
    this.inputExpiredDate.inputFieldValue = null;
    this.inputAddress1.nativeElement.value = "";
    this.inputAddress2.nativeElement.value = "";
  }

  deleteRow() {
    this.listCard = this.listCard.filter(
      obj => obj !== this.listCardSelected);

    this.listCardSelected = null;
  }

  saveRow() {
    if (!this.validateForm()) {
      this.errorMsg.emit(this.ERROR_MSG);
      return;
    }
    let index = this.listCard.findIndex(
      (obj) => obj.row == this.listCardSelected.row
    )

    let row = this.listCardSelected.row;
    let numcard = this.inputCardNumber.nativeElement.value;
    let cardType = this.inputCardType.nativeElement.value;
    let cardTypeCode = "";
    let cardTypeName = "";
    if (cardType != null && cardType != "") {
      let cardTypeArr = cardType.split(",");
      cardTypeCode = cardTypeArr[0];
      cardTypeName = cardTypeArr[1];
    }
    let place = this.inputPlace.nativeElement.value;
    let startDate = this.inputStartDate.inputFieldValue;
    let expiredDate = this.inputExpiredDate.inputFieldValue;
    let address1 = this.inputAddress1.nativeElement.value;
    let address2 = this.inputAddress2.nativeElement.value;

    this.listCard[index] = {
      'row': row,
      'card_number': numcard, 'card_type_code': cardTypeCode,
      'card_type_name': cardTypeName,
      'place': place, 'start_date': startDate,
      'expired_date': expiredDate, 'address1': address1,
      'address2': address2
    };
    this.listCardSelected = null
    this.resetForm();
  }

  validateForm(): boolean {
    let numcard = this.inputCardNumber.nativeElement.value;
    let cardType = this.inputCardType.nativeElement.value;
    let startDate = this.inputStartDate.inputFieldValue;
    let expiredDate = this.inputExpiredDate.inputFieldValue;

    if (numcard && cardType && startDate && expiredDate) {
      return true;
    }

    return false;
  }

  generateRequest(entityRequest: EntityModel): EntityModel {
    let listCardRequest: Card[] = [];
    for (let i = 0; i < this.listCard.length; i++) {
      let card_type_code = this.listCard[i].card_type_code;
      let card_type_name = this.listCard[i].card_type_name;
      let card_number = this.listCard[i].card_number;
      let start_date:any = this.listCard[i].start_date;
      if (start_date instanceof Date) {
        start_date = this.dateUtils.dateToString(start_date, 'dd/MM/yyyy')
      }
      start_date = start_date ? start_date : '';
      let expired_date:any = this.listCard[i].expired_date;
      if (expired_date instanceof Date) {
        expired_date = this.dateUtils.dateToString(expired_date, 'dd/MM/yyyy')
      }
      expired_date = expired_date ? expired_date : '';
      let address1 = this.listCard[i].address1;
      let address2 = this.listCard[i].address2;
      let place = this.listCard[i].place;

      let card: Card = new Card('', '', card_type_code,
        card_number, start_date, expired_date, address1,
        address2, place, card_type_name);

      listCardRequest.push(card);
    }
    entityRequest.listCard = listCardRequest;

    return entityRequest;
  }
}
