import { Component, OnInit } from '@angular/core';
import {LazyLoadEvent} from "primeng/primeng";
import {ReassignService} from "../reassign.service";
import {ReassignList} from "../reassign-model/ReassignList";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-reassign',
  templateUrl: './search-reassign.component.html'
})
export class SearchReassignComponent implements OnInit {

  selectList :ReassignList ;
  ListReassign:ReassignList[];
  totalRecords: number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private Reassignservice :ReassignService ) { }

  ngOnInit() {

    this.Reassignservice.getListReassign("web","sira.ch","0000000357").subscribe(
      (data : any) =>{

        this.ListReassign = ReassignList.parse(data.LIST_DATA);
        this.totalRecords = this.ListReassign.length;

    }
    )

  }

  // loadMktLazy(event: LazyLoadEvent) {
  //   //in a real application, make a remote request to load data using state metadata from event
  //   //event.first = First row offset
  //   //event.rows = Number of rows per page
  //   //event.sortField = Field name to sort with
  //   //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
  //   //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
  //
  //   //imitate db connection over a network
  //
  //   setTimeout(() => {
  //     if(this.ListReassign) {
  //       this.this10Row = this.ListReassign.slice(event.first, (event.first + event.rows));
  //     }
  //   }, 250);
  // }

  onRowSelect(event) {

    // console.log(event.data.fullname );
    // console.log(this.selectList );

    this.router.navigate(['./ListWork']
      , {
        relativeTo: this.route,
        queryParams: {comcode: this.selectList.com_code ,code: this.selectList.code   }
      });

  }

}
