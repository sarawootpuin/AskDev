import {Component, OnDestroy, OnInit} from '@angular/core';
import {LazyLoadEvent} from "primeng/primeng";
import {ReassignService} from "../reassign.service";
import {ReassignList} from "../reassign-model/ReassignList";
import {ActivatedRoute, Router} from "@angular/router";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-search-reassign',
  templateUrl: './search-reassign.component.html'
})
export class SearchReassignComponent implements OnInit ,OnDestroy {

  selectList :ReassignList ;
  ListReassign:ReassignList[];
  totalRecords: number;
  subscription : Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private userStorage: UserStorage,
              private Reassignservice :ReassignService ) { }

  ngOnInit() {

    this.subscription = this.Reassignservice.getListReassign("web", this.userStorage.getUserName(),this.userStorage.getCode() ).subscribe(
      (data : any) =>{

        this.ListReassign = ReassignList.parse(data.LIST_DATA);
        this.totalRecords = this.ListReassign.length;

    }
    )

  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

  onRowSelect(event) {
    this.router.navigate(['./ListWork']
      , {
        relativeTo: this.route,
        queryParams: {comcode: this.selectList.com_code ,code: this.selectList.code   }
      });

  }

}
