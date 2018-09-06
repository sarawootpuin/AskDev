import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class CustomButtonComponent implements OnInit, OnChanges {
  @Input('option') option;
  @Input('disabled') disabled : boolean = false;
  @Input() title:string;
  @Output() onBtnClick: EventEmitter<any> = new EventEmitter();
  btnNew = {'name': 'NEW', 'icon': 'fa-plus', 'style': 'btn-nav-newisa'};
  btnEdit = {'name': 'EDIT', 'icon': 'fa-edit', 'style': 'btn-nav-editisa'};
  btnCancel = {'name': 'CANCEL', 'icon': 'fa-close', 'style': 'btn-nav-cancelisa'};
  btnSave = {'name': 'SAVE', 'icon': 'fa-save', 'style': 'btn-nav-saveisa'};
  btnSearch = {'name': 'SEARCH', 'icon': 'fa-search', 'style': 'btn-nav-searchisa'};
  btnPrint = {'name': 'PRINT', 'icon': 'fa-print', 'style': 'btn-nav-printisa'};
  btnDelete = {'name': 'DELETE', 'icon': 'fa-trash', 'style': 'btn-nav-deleteisa'};
  btnProcess = {'name': 'PROCESS', 'icon': 'fa-clock-o', 'style': 'btn-nav-processisa'};
  btnCalculate = {'name': 'CALCULATE', 'icon': 'fa-calculator', 'style': 'btn-nav-calculateisa'};
  btnSubmit = {'name': 'SUBMIT', 'icon': 'fa-thumbs-up', 'style': 'btn-nav-submitisa'};
  btnReject = {'name': 'REJECT', 'icon': 'fa-thumbs-down', 'style': 'btn-nav-rejectisa'};
  btnExcel = {'name': 'EXCEL', 'icon': 'fa-file-excel-o', 'style': 'btn-nav-excelisa'};
  btnSelect = { 'name': '','style': '','icon': ''};

  constructor() {
  }

  ngOnInit() {
    //this.disabled = false;
  }

  ngOnChanges() {
    if (this.option == 'new') {
      this.btnSelect = this.btnNew;
    } else if (this.option == 'edit') {
      this.btnSelect = this.btnEdit;
    } else if (this.option == 'cancel') {
      this.btnSelect = this.btnCancel;
    } else if (this.option == 'save') {
      this.btnSelect = this.btnSave;
    } else if (this.option == 'search') {
      this.btnSelect = this.btnSearch;
    } else if (this.option == 'print') {
      this.btnSelect = this.btnPrint;
    } else if (this.option == 'delete') {
      this.btnSelect = this.btnDelete;
    } else if (this.option == 'process') {
      this.btnSelect = this.btnProcess;
    } else if (this.option == 'calculate') {
      this.btnSelect = this.btnCalculate;
    } else if (this.option == 'submit') {
      this.btnSelect = this.btnSubmit;
    } else if (this.option == 'reject') {
      this.btnSelect = this.btnReject;
    } else if (this.option == 'excel') {
      this.btnSelect = this.btnExcel;
    }

    if(this.title)
    {
      this.btnNew.name = this.title;
      this.btnEdit.name = this.title;
      this.btnCancel.name = this.title;
      this.btnSave.name = this.title;
      this.btnSearch.name = this.title;
      this.btnPrint.name = this.title;
      this.btnDelete.name = this.title;
      this.btnProcess.name = this.title;
      this.btnCalculate.name = this.title;
      this.btnSubmit.name = this.title;
      this.btnReject.name = this.title;
      this.btnExcel.name = this.title;
    }
  }

  clickBtn() {
    this.onBtnClick.emit();
  }
}
