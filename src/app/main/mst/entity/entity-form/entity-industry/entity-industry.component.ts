import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {EntityService} from "../../entity.service";
import {EntityMaster} from "../../model/entity-master";
import {DataTable} from "primeng/primeng";
import {EntityModel} from "../../model/entity-model";
import {Industry} from "../../model/industry";

@Component({
  selector: 'app-entity-industry',
  templateUrl: './entity-industry.component.html',
  styleUrls: ['./entity-industry.component.css']
})
export class EntityIndustryComponent implements OnInit, OnChanges {
  @Input("entity") entityModel: EntityModel;
  industry: EntityMaster[] = [];
  industryEng: EntityMaster[] = [];
  @ViewChild('dt') dt: DataTable;
  @ViewChild('inputOldIndustry') inputOldIndustry: ElementRef;
  @ViewChild('inputNewIndustry') inputNewIndustry: ElementRef;
  @ViewChild('inputPercent') inputPercent: ElementRef;
  @ViewChild('inputRemark') inputRemark: ElementRef;
  @Output("errorMsg") errorMsg: EventEmitter<string> = new EventEmitter();
  ERROR_MSG: string = 'Please fill in required fields.';
  cols: any[];
  listIndustry: {
    'row': number,
    'industryOldCode': string, 'industryOldName': string,
    'industryNewCode': string, 'industryNewName': string,
    'percent': string, 'remark': string
  }[] = [];
  listIndustrySelected: {
    'row': number,
    'industryOldCode': string, 'industryOldName': string,
    'industryNewCode': string, 'industryNewName': string,
    'percent': string, 'remark': string
  };

  constructor(private entityService: EntityService) {
  }

  ngOnChanges() {
    this.listIndustry = [];
    this.listIndustrySelected = null;
    if (this.entityModel) {
      for (let i = 0; i < this.entityModel.listIndustry.length; i++) {
        let industry: Industry = this.entityModel.listIndustry[i];
        let row = i + 1;
        let industryOldCode = industry.oldIndCode;
        let industryOldName = industry.oldIndDecs;
        let industryNewCode = industry.newIndCode;
        let industryNewName = industry.newIndDecs;
        let percent = industry.indPcnt;
        let remark = industry.remark;

        this.listIndustry.push({
          'row': row,
          'industryOldCode': industryOldCode, 'industryOldName': industryOldName,
          'industryNewCode': industryNewCode, 'industryNewName': industryNewName,
          'percent': percent, 'remark': remark
        })
      }
    }

  }

  ngOnInit() {
    this.cols = [
      {field: 'industryOldName', header: 'Old Industry'},
      {field: 'industryNewName', header: 'New Industry'},
      {field: 'percent', header: 'Percent(%)'},
      {field: 'remark', header: 'Remark'}
    ];
    this.entityService.industry.subscribe(
      (data: EntityMaster[]) => {
        this.industry = data;
      }
    );
    this.entityService.industryEng.subscribe(
      (data: EntityMaster[]) => {
        this.industryEng = data;
      }
    );
  }

  addNewIndustry() {
    let row = 1;
    if (this.listIndustry.length > 0) {
      row = this.listIndustry[this.listIndustry.length - 1].row + 1;
    }
    let oldIndustry = this.inputOldIndustry.nativeElement.value;
    let oldIndustryCode = "";
    let oldIndustryName = "";
    if (oldIndustry != null && oldIndustry != "") {
      let oldIndustryArr = oldIndustry.split(",");
      oldIndustryCode = oldIndustryArr[0];
      oldIndustryName = oldIndustryArr[1];
    }
    let newIndustry = this.inputNewIndustry.nativeElement.value;
    let newIndustryCode = "";
    let newIndustryName = "";
    if (newIndustry != null && newIndustry != "") {
      let newIndustryArr = newIndustry.split(",");
      newIndustryCode = newIndustryArr[0];
      newIndustryName = newIndustryArr[1];
    }
    let percent = this.inputPercent.nativeElement.value;
    let remark = this.inputRemark.nativeElement.value;

    this.listIndustry.push({
      'row': row,
      'industryOldCode': oldIndustryCode, 'industryOldName': oldIndustryName,
      'industryNewCode': newIndustryCode, 'industryNewName': newIndustryName,
      'percent': percent, 'remark': remark
    });

    this.listIndustrySelected = null
    this.resetForm();
  }

  saveRow() {
    let index = this.listIndustry.findIndex(
      (obj) => obj.row == this.listIndustrySelected.row
    )
    let row = this.listIndustrySelected.row;
    let oldIndustry = this.inputOldIndustry.nativeElement.value;
    let oldIndustryCode = "";
    let oldIndustryName = "";
    if (oldIndustry != null && oldIndustry != "") {
      let oldIndustryArr = oldIndustry.split(",");
      oldIndustryCode = oldIndustryArr[0];
      oldIndustryName = oldIndustryArr[1];
    }
    let newIndustry = this.inputNewIndustry.nativeElement.value;
    let newIndustryCode = "";
    let newIndustryName = "";
    if (newIndustry != null && newIndustry != "") {
      let newIndustryArr = newIndustry.split(",");
      newIndustryCode = newIndustryArr[0];
      newIndustryName = newIndustryArr[1];
    }
    let percent = this.inputPercent.nativeElement.value;
    let remark = this.inputRemark.nativeElement.value;

    this.listIndustry[index] = {
      'row': row,
      'industryOldCode': oldIndustryCode, 'industryOldName': oldIndustryName,
      'industryNewCode': newIndustryCode, 'industryNewName': newIndustryName,
      'percent': percent, 'remark': remark
    };
    this.listIndustrySelected = null
    this.resetForm();
  }

  resetForm() {
    this.inputOldIndustry.nativeElement.value = "";
    this.inputNewIndustry.nativeElement.value = "";
    this.inputPercent.nativeElement.value = "";
    this.inputRemark.nativeElement.value = "";
  }

  deleteRow() {
    this.listIndustry = this.listIndustry.filter(
      obj => obj !== this.listIndustrySelected);

    this.listIndustrySelected = null;
  }

  generateRequest(entityRequest: EntityModel): EntityModel {
    let listIndustryRequest: Industry[] = [];
    for (let i = 0; i < this.listIndustry.length; i++) {
      let indPcnt = this.listIndustry[i].percent;
      let newIndCode = this.listIndustry[i].industryNewCode;
      let newIndDecs = this.listIndustry[i].industryNewName;
      let oldIndCode = this.listIndustry[i].industryOldCode;
      let oldIndDecs = this.listIndustry[i].industryOldName;
      let remark = this.listIndustry[i].remark;

      let industryObj: Industry = new Industry('', '', indPcnt,
        newIndCode, newIndDecs, oldIndCode, oldIndDecs,'',remark);

      listIndustryRequest.push(industryObj);
    }
    entityRequest.listIndustry = listIndustryRequest;

    return entityRequest;
  }
}
