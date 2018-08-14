import {Component, OnDestroy, OnInit} from '@angular/core';
import {creditApplicationService} from "../credit-application.service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Router} from "@angular/router";
import {CaTodoBgpl} from "../../../home/todo/todo-list/list-ca-bgpl/ca-todo-bgpl";
import {Subscription} from "rxjs/Subscription";
declare var $ : any
@Component({
  selector: 'app-ca-inquery',
  templateUrl: './ca-inquery.component.html'
})
export class CaInqueryComponent implements OnInit , OnDestroy {

  isLoading: boolean = false;
  cols: any[];
  comcode : string = '';
  cano : string = '';
  subscription : Subscription;
  listCaInquery : CaTodoBgpl[];
  constructor(private userStorage: UserStorage,
              private creditApplicationService: creditApplicationService,
              private router: Router) { }


  ngOnInit() {
    // this.isLoading = true
    // this.subscription = this.creditApplicationService.listCaInquery().subscribe(
    //   (json: any) => {
    //     console.log(json);
    //     this.isLoading = false
    //     this.listCaInquery = CaTodoBgpl.parse(json.LIST_DATA);
    //   }
    // );
    this.onEnter('');
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

  rowSelectList(caTodoBgpl: CaTodoBgpl) {
    this.comcode = caTodoBgpl.comCode;
    this.cano    = caTodoBgpl.caNo;
    this.router.navigate(['/ca'], {
      queryParams: {
      com_code : this.comcode,
        ca_no  : this.cano
      }
    });
  }

  onEnter(condition : string){
    console.log(condition)
    this.isLoading = true
    this.subscription = this.creditApplicationService.listCaInquery().subscribe(
      (json: any) => {
        console.log(json);
        this.isLoading = false
        this.listCaInquery = CaTodoBgpl.parse(json.LIST_DATA);
      }
    );
  }

}
