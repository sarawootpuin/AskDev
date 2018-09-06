import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-custom-botton-icon',
  templateUrl: './custom-botton-icon.component.html',
  styleUrls: ['./custom-botton-icon.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CustomBottonIconComponent implements OnInit, OnChanges {
  @Input('option') option;
  @Input('disabled') disabled;
  @Output() onBtnClick: EventEmitter<any> = new EventEmitter();
  btnNew = { 'icon': 'fa-plus', 'style': 'btn-nav-newisa'};
  btnEdit = { 'icon': 'fa-edit', 'style': 'btn-nav-editisa'};
  btnCancel = { 'icon': 'fa-close', 'style': 'btn-nav-cancelisa'};
  btnSave = { 'icon': 'fa-save', 'style': 'btn-nav-saveisa'};
  btnSearch = { 'icon': 'fa-search', 'style': 'btn-nav-searchisa'};
  btnPrint = { 'icon': 'fa-print', 'style': 'btn-nav-printisa'};
  btnDelete = { 'icon': 'fa-trash', 'style': 'btn-nav-deleteisa'};
  btnProcess = { 'icon': 'fa-clock-o', 'style': 'btn-nav-processisa'};
  btnCopy = { 'icon': 'fa-copy', 'style': 'btn-nav-copyisa'};
  btnExcel = { 'icon': 'fa-file-excel-o', 'style': 'btn-nav-excelisa'};
  btnSelect = {'icon':'','style': ''};
  constructor() { }

  ngOnInit() {
    this.disabled = false;
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
    } else if (this.option == 'excel') {
      this.btnSelect = this.btnExcel;
    } else if (this.option == 'copy') {
      this.btnSelect = this.btnCopy;
    }
  }

  clickBtn() {
    this.onBtnClick.emit();
  }

}
