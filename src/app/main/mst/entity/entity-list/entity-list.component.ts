import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EntitySearch} from "../model/entity-search";
import {Subscription} from "rxjs/Subscription";
import {DataTable} from "primeng/primeng";
import {EntityService} from "../entity.service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  private subscriptionFragment: Subscription;
  @ViewChild('dt') dt: DataTable;
  @ViewChild('alertDialog') alertDialog: AlertDialogComponent;
  entitySearch: EntitySearch[] = [];
  cols: any[];
  search_input: string = '';
  userCode: string = '';
  comCode: string = '';
  totalRecords: number;
  searchClicked: boolean;
  searchNotFoundText: string;
  loading: boolean;

  constructor(private entityService: EntityService,
              private userStorage: UserStorage,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userCode = this.userStorage.getCode();
    this.comCode = this.userStorage.getComCodePort();
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
    this.subscriptionFragment = this.route.fragment.subscribe((fragment: string) => {
      if (fragment == 'success') {
        this.alertDialog.reset();
        this.alertDialog.setMessage('Complete');
        this.alertDialog.open();
      }
    });
  }

  pressEnter(event) {
    if (event.keyCode === 13) {
      this.searchCustomer();
    }
  }

  searchCustomer() {
    this.loading = true;
    this.dt.reset()
    this.subscription = this.entityService.searchCustomer(
      "web", this.userCode, this.comCode, this.search_input)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.entitySearch = EntitySearch.parse(data.LIST_DATA);
          this.totalRecords = this.entitySearch.length;
          this.searchClicked = true;
          this.loading = false;
        }
      );
    this.searchNotFoundText = this.search_input;
    this.search_input = '';
  }

  newEntity() {
    this.router.navigate(['new'], {
      relativeTo: this.route
    });
  }

  editEntity(entity: EntitySearch) {
    this.router.navigate(['edit', entity.entCode], {
      relativeTo: this.route
    });
  }

  ngOnDestroy(){
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionFragment != null) {
      this.subscriptionFragment.unsubscribe();
    }
  }
}
