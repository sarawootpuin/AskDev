import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {EntityService} from "../entity.service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";
import {EntitySearch} from "../model/entity-search";
import {EntityModel} from "../model/entity-model";
import {DataTable, LazyLoadEvent} from "primeng/primeng";
import {EntityMaster} from "../model/entity-master";
declare var $: any;

@Component({
  selector: 'app-entity-address-dialog',
  templateUrl: './entity-address-dialog.component.html',
  styleUrls: ['./entity-address-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EntityAddressDialogComponent implements OnInit {
  @Input("title") title: string;
  @Input("address") address: EntityMaster[];
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('dt') dt: DataTable;
  @ViewChild('entity_address_dialog') entity_address_dialog: ElementRef;
  @Output("onSelected") onSelected: EventEmitter<{ address: EntityMaster, tag: string }> = new EventEmitter()
  addressSelected: EntityMaster;
  cols: any[];
  TAG: string = "";

  constructor() {
    this.title = 'Address'
    this.address = [];
  }

  ngOnInit() {
    this.cols = [
      {field: 'key1', header: 'Zip Code'},
      {field: 'display', header: 'Address'}
    ];
  }

  showDialog(tag: string) {
    this.TAG = tag;
    $(this.entity_address_dialog.nativeElement).modal(
      {backdrop: "static", show: true}
    );
    this.resetValue();
  }

  closeDialog() {
    $(this.entity_address_dialog.nativeElement).modal('hide');
  }

  resetValue() {
    if (this.searchInput != null) {
      this.searchInput.nativeElement.value = '';
    }
    this.dt.reset();
    this.addressSelected = null;
  }

  selectAddress() {
    this.onSelected.emit({'address': this.addressSelected, 'tag': this.TAG});
    this.closeDialog();
  }
}
