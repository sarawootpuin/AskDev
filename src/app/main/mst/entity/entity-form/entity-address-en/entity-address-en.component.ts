import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {EntityModel} from "../../model/entity-model";

@Component({
  selector: 'app-entity-address-en',
  templateUrl: './entity-address-en.component.html',
  styleUrls: ['./entity-address-en.component.css']
})
export class EntityAddressEnComponent implements OnInit, OnChanges {
  @Input("entity") entityModel: EntityModel;
  @ViewChild("inputAddressEng") inputAddressEng: ElementRef;
  @ViewChild("inputAddressEng2") inputAddressEng2: ElementRef;
  @ViewChild("inputNearEng") inputNearEng: ElementRef;
  @ViewChild("inputTel") inputTel: ElementRef;
  @ViewChild("inputFaxCurrent") inputFaxCurrent: ElementRef;
  @ViewChild("inputAddressCEng") inputAddressCEng: ElementRef;
  @ViewChild("inputAddressCEng2") inputAddressCEng2: ElementRef;
  @ViewChild("inputTelCard") inputTelCard: ElementRef;
  @ViewChild("inputAddressOEng") inputAddressOEng: ElementRef;
  @ViewChild("inputAddressOEng2") inputAddressOEng2: ElementRef;
  @ViewChild("inputNearOEng") inputNearOEng: ElementRef;
  @ViewChild("inputTelO") inputTelO: ElementRef;
  @ViewChild("inputFaxOffice") inputFaxOffice: ElementRef;
  @ViewChild("inputAddressMEng") inputAddressMEng: ElementRef;
  @ViewChild("inputAddressMEng2") inputAddressMEng2: ElementRef;

  constructor() {
  }

  ngOnChanges() {
  }

  ngOnInit() {
  }

  generateRequest(entityRequest: EntityModel): EntityModel {
    entityRequest.addressEng = this.inputAddressEng.nativeElement.value;
    entityRequest.addressEng2 = this.inputAddressEng2.nativeElement.value;
    entityRequest.nearEng = this.inputNearEng.nativeElement.value;
    entityRequest.tel = this.inputTel.nativeElement.value;
    entityRequest.faxCurrent = this.inputFaxCurrent.nativeElement.value;
    entityRequest.addCEng = this.inputAddressCEng.nativeElement.value;
    entityRequest.addCEng2 = this.inputAddressCEng2.nativeElement.value;
    entityRequest.telCard = this.inputTelCard.nativeElement.value;
    entityRequest.addOEng = this.inputAddressOEng.nativeElement.value;
    entityRequest.addOEng2 = this.inputAddressOEng2.nativeElement.value;
    entityRequest.nearOEng = this.inputNearOEng.nativeElement.value;
    entityRequest.telO = this.inputTelO.nativeElement.value;
    entityRequest.faxOffice = this.inputFaxOffice.nativeElement.value;
    entityRequest.addMEng = this.inputAddressMEng.nativeElement.value;
    entityRequest.addMEng2 = this.inputAddressMEng2.nativeElement.value;
    return entityRequest;
  }
}
