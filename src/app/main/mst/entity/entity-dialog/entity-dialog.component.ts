import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {EntityService} from "../entity.service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";
import {EntitySearch} from "../model/entity-search";
import {EntityModel} from "../model/entity-model";
import {LazyLoadEvent} from "primeng/primeng";
import {ServiceEndpoint} from "../../../../shared/config/service-endpoint";
declare var $: any;

@Component({
  selector: 'app-entity-dialog',
  templateUrl: './entity-dialog.component.html',
  styleUrls: ['./entity-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EntityDialogComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private subscriptionOpen: Subscription;

  private subscriptionCuscode: Subscription;

  @Input("title") title: string;
  @Input("btnnew") btnnew: boolean ;
  @Input("allComCode") allComCode: boolean;
  @Output("onEntitySelect") onSelect: EventEmitter<EntityModel> = new EventEmitter();
  @ViewChild('entity_dialog') entity_dialog: ElementRef;
  entitySearch: EntitySearch[] = [];
  dsEntitySearch: EntitySearch[] = [];
  entitySelected: EntitySearch;
  cols: any[];
  search_input: string = '';
  userCode: string = '';
  comCode: string = '';

  totalRecords: number;
  searchClicked: boolean;
  searchNotFoundText: string;
  loading: boolean;

  constructor(private entityService: EntityService,
              private ServiceEndpoint: ServiceEndpoint,
              private userStorage: UserStorage
  ) {
    this.title = 'Entity';
    this.btnnew = false;
    this.allComCode = false;
  }

  ngOnInit() {
    this.userCode = this.userStorage.getCode();
    this.comCode = this.userStorage.getComCodePort();

    if (this.allComCode === true) {
      this.comCode = 'ALL';
    }

    this.totalRecords = 0;
    this.searchClicked = false;
    this.cols = [
      {field: 'entCode', header: 'ENT CODE'},
      {field: 'fNameT', header: 'First Name Th'},
      {field: 'lNameT', header: 'Last Name Th'},
      {field: 'fNameE', header: 'First Name En'},
      {field: 'lNameE', header: 'Last Name En'},
      {field: 'newCardNo', header: 'Card No'}
    ];


    this.subscriptionCuscode = this.entityService.saveCusCode.subscribe(
      (cusCode : string  ) =>{
          console.log(cusCode);
          this.search_input = cusCode ;
        //  this.searchCustomer();
      }
    );

    this.userStorage.removeStorageNewEntType();
  }

  showDialog() {
    $(this.entity_dialog.nativeElement).modal(
      {backdrop: "static", show: true}
    );
    this.resetValue();
  }

  closeDialog() {
    $(this.entity_dialog.nativeElement).modal('hide');
  }

  resetValue() {
    this.entitySearch = [];
    this.entitySelected = null;
    this.search_input = '';
    this.totalRecords = 0;
    this.searchClicked = false;
    this.searchNotFoundText = '';
    this.loading = false;
  }

  searchCustomer() {
    this.loading = true;
    this.subscription = this.entityService.searchCustomer(
      "web", this.userCode, this.comCode, this.search_input)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.entitySearch = EntitySearch.parse(data.LIST_DATA);
          this.dsEntitySearch = this.entitySearch;
          this.totalRecords = this.dsEntitySearch.length;
          // this.entitySearch = this.dsEntitySearch.slice(0,10);
          this.searchClicked = true;
          this.entitySelected = null;
          this.loading = false;
        }
      );
    this.searchNotFoundText = this.search_input;
    this.search_input = '';
  }

  newCustomer() {
    this.loading = false;
     let strURL = this.ServiceEndpoint.url + this.ServiceEndpoint.app_name + "/#/newEntity/new?from=New";
    //let strURL = 'http://localhost:4200' + "/#/newEntity/new?from=New";
    location.hash.search('appForm') > 0 ? this.userStorage.setTypeNewEntCode('NEW','G') : this.userStorage.setTypeNewEntCode('NEW','')
    window.open(strURL);

    this.userStorage.removeStorageNewEntType();
  }

  loadEntityLazy(event: LazyLoadEvent) {
    setTimeout(() => {
      if(this.dsEntitySearch) {
        this.entitySearch = this.dsEntitySearch.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

  pressEnter(event,length) {
    if (event.keyCode === 13) {
      this.searchCustomer();
    }
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionOpen != null) {
      this.subscriptionOpen.unsubscribe();
    }
  }

  selectEntity() {
    this.subscriptionOpen = this.entityService.openEntity('web', this.userCode,
      this.entitySelected.comCode, this.entitySelected.entCode).subscribe(
      (data: any) => {
        let entityModel: EntityModel = EntityModel.parse(data.DATA);
        this.onSelect.emit(entityModel);
        this.closeDialog();
        console.log(data.DATA);
      }
    );
  }
}
