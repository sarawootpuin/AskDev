import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {EntityService} from "../../entity.service";
import {EntityMaster} from "../../model/entity-master";
import {DataTable} from "primeng/primeng";
import {EntityModel} from "../../model/entity-model";
import {Bank} from "../../model/bank";

@Component({
  selector: 'app-entity-bank',
  templateUrl: './entity-bank.component.html',
  styleUrls: ['./entity-bank.component.css']
})
export class EntityBankComponent implements OnInit, OnChanges {
  @Input("entity") entityModel: EntityModel;
  bank: EntityMaster[] = [];
  @ViewChild('dt') dt: DataTable;
  @ViewChild('inputAccName') inputAccName: ElementRef;
  @ViewChild('inputDirectDebitFlag') inputDirectDebitFlag: ElementRef;
  @ViewChild('inputAccNo') inputAccNo: ElementRef;
  @ViewChild('inputTypeSaving') inputTypeSaving: ElementRef;
  @ViewChild('inputTypeCurrent') inputTypeCurrent: ElementRef;
  @ViewChild('inputBank') inputBank: ElementRef;
  @ViewChild('inputBranch') inputBranch: ElementRef;
  @Output("errorMsg") errorMsg: EventEmitter<string> = new EventEmitter();
  ERROR_MSG: string = 'Please fill in required fields.';
  listBank: {
    'row': number,
    'accName': string, 'accNo': string,
    'directDebitFlag': string,
    'type_account': string,
    'bankCode': string, 'bankName': string,
    'branch': string
  }[] = [];
  listBankSelected: {
    'row': number,
    'accName': string, 'accNo': string,
    'directDebitFlag': string,
    'type_account': string,
    'bankCode': string, 'bankName': string,
    'branch': string
  };

  constructor(private entityService: EntityService) {
  }

  ngOnChanges() {
    this.listBank = [];
    this.listBankSelected = null;
    if (this.entityModel) {
      for (let i = 0; i < this.entityModel.listBank.length; i++) {
        let bank: Bank = this.entityModel.listBank[i];
        let row = i + 1;
        let accName = bank.accName;
        let accNo = bank.accNo;
        let directDebitFlag = bank.directDebitFlag;
        let accountType = bank.accountType;
        let bankCode = bank.bank;
        let bankName = bank.bankDesc;
        let bankBranch = bank.bankBranch;

        this.listBank.push({
          'row': row,
          'accName': accName, 'accNo': accNo,
          'directDebitFlag': directDebitFlag,
          'type_account': accountType,
          'bankCode': bankCode, 'bankName': bankName,
          'branch': bankBranch
        })
      }
    }
  }

  ngOnInit() {
    this.entityService.bank.subscribe(
      (data: EntityMaster[]) => {
        this.bank = data;
      }
    );
  }

  addNewBank() {
    if (!this.validateForm()) {
      this.errorMsg.emit(this.ERROR_MSG);
      return;
    }
    let row = 1;
    if (this.listBank.length > 0) {
      row = this.listBank[this.listBank.length - 1].row + 1;
    }
    let accName = this.inputAccName.nativeElement.value;
    let directDebitFlag = this.inputDirectDebitFlag.nativeElement.checked ? 'Y' : 'N';
    let accNo = this.inputAccNo.nativeElement.value;

    let typeAccount = "";
    let isTypeSaving = this.inputTypeSaving.nativeElement.checked;
    let isTypeCurrent = this.inputTypeCurrent.nativeElement.checked;

    if (isTypeSaving) {
      typeAccount = this.inputTypeSaving.nativeElement.value;
    } else if (isTypeCurrent) {
      typeAccount = this.inputTypeCurrent.nativeElement.value;
    }

    let inputBank = this.inputBank.nativeElement.value;
    let bankCode = "";
    let bankName = "";
    if (inputBank != null && inputBank != "") {
      let inputBankArr = inputBank.split(",");
      bankCode = inputBankArr[0];
      bankName = inputBankArr[1];
    }

    let branch = this.inputBranch.nativeElement.value;

    this.listBank.push({
      'row': row,
      'accName': accName, 'accNo': accNo,
      'directDebitFlag': directDebitFlag,
      'type_account': typeAccount,
      'bankCode': bankCode, 'bankName': bankName,
      'branch': branch
    });
    console.log(this.listBank);
    this.listBankSelected = null
    this.resetForm();
  }

  saveRow() {
    if (!this.validateForm()) {
      this.errorMsg.emit(this.ERROR_MSG);
      return;
    }

    let index = this.listBank.findIndex(
      (obj) => obj.row == this.listBankSelected.row
    )

    let row = this.listBankSelected.row;
    let accName = this.inputAccName.nativeElement.value;
    let directDebitFlag = this.inputDirectDebitFlag.nativeElement.checked ? 'Y' : 'N';
    let accNo = this.inputAccNo.nativeElement.value;

    let typeAccount = "";
    let isTypeSaving = this.inputTypeSaving.nativeElement.checked;
    let isTypeCurrent = this.inputTypeCurrent.nativeElement.checked;

    if (isTypeSaving) {
      typeAccount = this.inputTypeSaving.nativeElement.value;
    } else if (isTypeCurrent) {
      typeAccount = this.inputTypeCurrent.nativeElement.value;
    }

    let inputBank = this.inputBank.nativeElement.value;
    let bankCode = "";
    let bankName = "";
    if (inputBank != null && inputBank != "") {
      let inputBankArr = inputBank.split(",");
      bankCode = inputBankArr[0];
      bankName = inputBankArr[1];
    }
    let branch = this.inputBranch.nativeElement.value;

    this.listBank[index] = {
      'row': row,
      'accName': accName, 'accNo': accNo,
      'directDebitFlag': directDebitFlag,
      'type_account': typeAccount,
      'bankCode': bankCode, 'bankName': bankName,
      'branch': branch
    };
    this.listBankSelected = null
    this.resetForm();
  }

  resetForm() {
    this.inputAccName.nativeElement.value = "";
    this.inputAccNo.nativeElement.value = "";
    this.inputDirectDebitFlag.nativeElement.checked = false;
    this.inputTypeSaving.nativeElement.checked = false;
    this.inputTypeCurrent.nativeElement.checked = false;
    this.inputBank.nativeElement.value = "";
    this.inputBranch.nativeElement.value = "";
  }

  deleteRow() {
    this.listBank = this.listBank.filter(
      obj => obj !== this.listBankSelected);

    this.listBankSelected = null;
  }

  validateForm(): boolean {
    let inputAccName = this.inputAccName.nativeElement.value;
    let inputAccNo = this.inputAccNo.nativeElement.value;

    if (inputAccName && inputAccNo) {
      return true;
    }
    return false;
  }

  generateRequest(entityRequest: EntityModel): EntityModel {
    let listBankRequest: Bank[] = [];
    for (let i = 0; i < this.listBank.length; i++) {
      let accNo = this.listBank[i].accNo;
      let bankCode = this.listBank[i].bankCode;
      let bankName = this.listBank[i].bankName;
      let bankBranch = this.listBank[i].branch;
      let accType = this.listBank[i].type_account;
      let directDebitFlag = this.listBank[i].directDebitFlag;
      let accName =  this.listBank[i].accName;

      let bankObj: Bank = new Bank('', '', accNo,
        bankCode, bankBranch, accType, directDebitFlag,
        '', '', '','',accName,'',bankName);

      listBankRequest.push(bankObj);
    }
    entityRequest.listBank = listBankRequest;

    return entityRequest;
  }
}
