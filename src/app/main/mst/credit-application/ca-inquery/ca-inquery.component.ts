import { Component, OnInit } from '@angular/core';
import {creditApplicationService} from "../credit-application.service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Router} from "@angular/router";
import {CaTodoBgpl} from "../../../home/todo/todo-list/list-ca-bgpl/ca-todo-bgpl";

@Component({
  selector: 'app-ca-inquery',
  templateUrl: './ca-inquery.component.html'
})
export class CaInqueryComponent implements OnInit {

  isLoading: boolean = false;
  cols: any[];

  listCaInquery : CaTodoBgpl[];
  constructor(private userStorage: UserStorage,
              private creditApplicationService: creditApplicationService,
              private router: Router) { }

  ngOnInit() {

    this.creditApplicationService.listCaInquery().subscribe(
      (json: any) => {
        console.log(json);
        this.listCaInquery = CaTodoBgpl.parse(json.LIST_DATA);
      }
    );
  }

  rowSelectList(caTodoBgpl: CaTodoBgpl) {
    this.router.navigate(['/ca'], {
      queryParams: {
        ca_no: caTodoBgpl.caNo
        //  task : this.task.taskCode
      }
    });

  }

}
