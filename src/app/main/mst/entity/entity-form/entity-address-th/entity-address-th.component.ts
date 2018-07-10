import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {EntityService} from "../../entity.service";
import {EntityMaster} from "../../model/entity-master";
import {EntityAddressDialogComponent} from "../../entity-address-dialog/entity-address-dialog.component";
import {EntityModel} from "../../model/entity-model";

@Component({
  selector: 'app-entity-address-th',
  templateUrl: './entity-address-th.component.html',
  styleUrls: ['./entity-address-th.component.css']
})
export class EntityAddressThComponent implements OnInit, OnChanges {
  @Input("entity") entityModel: EntityModel;
  address: EntityMaster[] = [];
  @ViewChild("entity_address_dialog") entity_address_dialog: EntityAddressDialogComponent;
  @ViewChild("inputAddress") inputAddress: ElementRef;
  @ViewChild("inputNear") inputNear: ElementRef;
  @ViewChild("inputTel") inputTel: ElementRef;
  @ViewChild("inputFaxCurrent") inputFaxCurrent: ElementRef;
  @ViewChild("inputAddressC") inputAddressC: ElementRef;
  @ViewChild("inputTelCard") inputTelCard: ElementRef;
  @ViewChild("inputAddressO") inputAddressO: ElementRef;
  @ViewChild("inputNearO") inputNearO: ElementRef;
  @ViewChild("inputTelO") inputTelO: ElementRef;
  @ViewChild("inputFaxOffice") inputFaxOffice: ElementRef;
  @ViewChild("inputMobile1") inputMobile1: ElementRef;
  @ViewChild("inputMobile2") inputMobile2: ElementRef;
  @ViewChild("inputMobile3") inputMobile3: ElementRef;
  @ViewChild("inputAddressM") inputAddressM: ElementRef;
  TAG_ADDRESS: string = "address";
  TAG_ADDRESS_20: string = "address_20";
  TAG_ADDRESS_OFFICE: string = "address_office";
  TAG_ADDRESS_MAIL: string = "address_mail";
  c_address = "";
  c_address_20 = "";
  c_address_office = "";
  c_address_mail = "";
  cd_address = "";
  cd_address_20 = "";
  cd_address_office = "";
  cd_address_mail = "";
  zip_cd_address = "";
  zip_cd_address_20 = "";
  zip_cd_address_office = "";
  zip_cd_address_mail = "";

  constructor(private entityService: EntityService) {
  }

  ngOnChanges() {
    if (this.entityModel) {
      this.c_address = this.entityModel.zipDesc;
      this.cd_address = this.entityModel.zip;
      this.zip_cd_address = this.entityModel.postCd;

      this.c_address_20 = this.entityModel.zipCDesc;
      this.cd_address_20 = this.entityModel.zipC;
      this.zip_cd_address_20 = this.entityModel.postCdC;

      this.c_address_office = this.entityModel.zipODesc;
      this.cd_address_office = this.entityModel.zipO;
      this.zip_cd_address_office = this.entityModel.postCdO;

      this.c_address_mail = this.entityModel.zipMDesc;
      this.cd_address_mail = this.entityModel.zipM;
      this.zip_cd_address_mail = this.entityModel.postCdM;
    } else {
      this.c_address = "";
      this.cd_address = "";
      this.zip_cd_address = "";

      this.c_address_20 = "";
      this.cd_address_20 = "";
      this.zip_cd_address_20 = "";

      this.c_address_office = "";
      this.cd_address_office = "";
      this.zip_cd_address_office = "";

      this.c_address_mail = "";
      this.cd_address_mail = "";
      this.zip_cd_address_mail = "";
    }
  }

  ngOnInit() {
    this.entityService.address.subscribe(
      (data: EntityMaster[]) => {
        this.address = data;

      }
    );
  }

  openAddressDialog(tag: string) {
    this.entity_address_dialog.showDialog(tag);
  }

  onSelectedAddress($event) {
    if ($event.tag === this.TAG_ADDRESS) {
      this.c_address = $event.address.display;
      this.cd_address = $event.address.id;
      this.zip_cd_address = $event.address.key1;
    } else if ($event.tag === this.TAG_ADDRESS_20) {
      this.c_address_20 = $event.address.display;
      this.cd_address_20 = $event.address.id;
      this.zip_cd_address_20 = $event.address.key1;
    } else if ($event.tag === this.TAG_ADDRESS_OFFICE) {
      this.c_address_office = $event.address.display;
      this.cd_address_office = $event.address.id;
      this.zip_cd_address_office = $event.address.key1;
    } else if ($event.tag === this.TAG_ADDRESS_MAIL) {
      this.c_address_mail = $event.address.display;
      this.cd_address_mail = $event.address.id;
      this.zip_cd_address_mail = $event.address.key1;
    }
  }

  generateRequest(entityRequest: EntityModel): EntityModel {
    entityRequest.address = this.inputAddress.nativeElement.value;
    entityRequest.zip = this.cd_address;
    entityRequest.postCd = this.zip_cd_address;
    entityRequest.near = this.inputNear.nativeElement.value;
    entityRequest.tel = this.inputTel.nativeElement.value;
    entityRequest.faxCurrent = this.inputFaxCurrent.nativeElement.value;
    entityRequest.addC = this.inputAddressC.nativeElement.value;
    entityRequest.zipC = this.cd_address_20;
    entityRequest.postCdC = this.zip_cd_address_20;
    entityRequest.telCard = this.inputTelCard.nativeElement.value;
    entityRequest.addO = this.inputAddressO.nativeElement.value;
    entityRequest.zipO = this.cd_address_office;
    entityRequest.postCdO = this.zip_cd_address_office;
    entityRequest.nearO = this.inputNearO.nativeElement.value;
    entityRequest.telO = this.inputTelO.nativeElement.value;
    entityRequest.faxOffice = this.inputFaxOffice.nativeElement.value;
    entityRequest.mobilePhone = this.inputMobile1.nativeElement.value;
    entityRequest.mobilePhone2 = this.inputMobile2.nativeElement.value;
    entityRequest.mobilePhone3 = this.inputMobile3.nativeElement.value;
    entityRequest.addM = this.inputAddressM.nativeElement.value;
    entityRequest.zipM = this.cd_address_mail;
    entityRequest.postCdM = this.zip_cd_address_mail;
    return entityRequest;
  }

  copyOwnr(panel : string){
    if (panel == 'VAT'){
      //console.log(this.c_address);
      //console.log(this.zip_cd_address);
      //console.log(this.cd_address);
      this.inputAddressC.nativeElement.value = this.inputAddress.nativeElement.value;
      this.c_address_20 = this.c_address;
      this.cd_address_20 = this.cd_address;
      this.zip_cd_address_20 = this.zip_cd_address;

    }else if (panel == 'OFFICE'){

      this.inputAddressO.nativeElement.value = this.inputAddress.nativeElement.value;
      this.c_address_office = this.c_address;
      this.cd_address_office = this.cd_address;
      this.zip_cd_address_office = this.zip_cd_address;

    }else if (panel == 'MAIL'){

      this.inputAddressM.nativeElement.value = this.inputAddress.nativeElement.value;
      this.c_address_mail = this.c_address;
      this.zip_cd_address_mail = this.zip_cd_address;
      this.cd_address_mail = this.cd_address;

    }
  }
}
