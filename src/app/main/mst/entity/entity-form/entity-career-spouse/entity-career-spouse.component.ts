import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {EntityService} from "../../entity.service";
import {EntityMaster} from "../../model/entity-master";
import {EntityModel} from "../../model/entity-model";

@Component({
  selector: 'app-entity-career-spouse',
  templateUrl: './entity-career-spouse.component.html',
  styleUrls: ['./entity-career-spouse.component.css']
})
export class EntityCareerSpouseComponent implements OnInit, OnChanges {
  @Input("entity") entityModel: EntityModel;
  @ViewChild("inputOccupa") inputOccupa: ElementRef;
  @ViewChild("inputPosition") inputPosition: ElementRef;
  @ViewChild("inputIndustry") inputIndustry: ElementRef;
  @ViewChild("inputOfficeName") inputOfficeName: ElementRef;
  @ViewChild("inputOfficeDept") inputOfficeDept: ElementRef;
  @ViewChild("inputSalaryPerYear") inputSalaryPerYear: ElementRef;
  @ViewChild("inputOtherIncome") inputOtherIncome: ElementRef;
  @ViewChild("inputMName") inputMName: ElementRef;
  @ViewChild("inputSpousAges") inputSpousAges: ElementRef;
  @ViewChild("inputSpousTel") inputSpousTel: ElementRef;
  @ViewChild("inputSpousOccupa") inputSpousOccupa: ElementRef;
  @ViewChild("inputSpousPosi") inputSpousPosi: ElementRef;
  @ViewChild("inputSpousOfficeName") inputSpousOfficeName: ElementRef;
  @ViewChild("inputSpousOfficeDept") inputSpousOfficeDept: ElementRef;
  @ViewChild("inputSpousSalary") inputSpousSalary: ElementRef;
  @ViewChild("inputSpousOtherIncome") inputSpousOtherIncome: ElementRef;
  occupation: EntityMaster[] = [];
  positionBg: EntityMaster[] = [];

  constructor(private entityService: EntityService) {
  }

  ngOnChanges() {

  }

  ngOnInit() {
    this.entityService.occupation.subscribe(
      (data: EntityMaster[]) => {
        this.occupation = data;
      }
    );
    this.entityService.positionBg.subscribe(
      (data: EntityMaster[]) => {
        this.positionBg = data;
      }
    );
  }

  generateRequest(entityRequest: EntityModel): EntityModel {
    entityRequest.occupa = this.inputOccupa.nativeElement.value;
    entityRequest.posi = this.inputPosition.nativeElement.value;
    entityRequest.indTy = this.inputIndustry.nativeElement.value;
    entityRequest.officeName = this.inputOfficeName.nativeElement.value;
    entityRequest.officeDepartment = this.inputOfficeDept.nativeElement.value;
    entityRequest.salaryPerYear = this.inputSalaryPerYear.nativeElement.value;
    entityRequest.otherIncome = this.inputOtherIncome.nativeElement.value;
    entityRequest.mName = this.inputMName.nativeElement.value;
    entityRequest.spousAges = this.inputSpousAges.nativeElement.value;
    entityRequest.spousTel = this.inputSpousTel.nativeElement.value;
    entityRequest.spousOccup = this.inputSpousOccupa.nativeElement.value;
    entityRequest.spousPosi = this.inputSpousPosi.nativeElement.value;
    entityRequest.spousOfficeName = this.inputSpousOfficeName.nativeElement.value;
    entityRequest.spousOfficeDepartment = this.inputSpousOfficeDept.nativeElement.value;
    entityRequest.spousSalary = this.inputSpousSalary.nativeElement.value;
    entityRequest.spousOtherIncome = this.inputSpousOtherIncome.nativeElement.value;
    return entityRequest;
  }
}
