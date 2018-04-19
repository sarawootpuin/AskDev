import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {creditApplicationService} from "../credit-application.service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";
import {CaTodoBgpl} from "../../../home/todo/todo-list/list-ca-bgpl/ca-todo-bgpl";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-ca-use-creditline',
  templateUrl: './ca-use-creditline.component.html'
})
export class CaUseCreditlineComponent implements OnInit {
  isLoading: boolean = false;
  subscripMaster: Subscription;
  comcode : string = '';
  cano : string = '';
  cols: any[];

  listCaUseCreditLine : CaTodoBgpl[];
  @ViewChild('dialogalertHtml') dialogalertTs: AlertDialogComponent;

  constructor(private userStorage: UserStorage,
              private creditApplicationService: creditApplicationService,
              private router: Router) {

  }

  ngOnInit() {
    this.isLoading =  false ;
    this.subscripMaster = this.creditApplicationService.listUseCreditLine().subscribe(
      (json: any) => {
         console.log(json);
         this.listCaUseCreditLine = CaTodoBgpl.parse(json.LIST_DATA);
      }
    );


  }

  rowSelectList(caTodoBgpl: CaTodoBgpl) {
    this.comcode = caTodoBgpl.comCode;
    this.cano    = caTodoBgpl.caNo;

    this.dialogalertTs.setAction('QUESTION');
    this.dialogalertTs.setMessage('Do you want to use credit line?');
    this.dialogalertTs.open();

  }

  genUseCreditLine() {
    this.creditApplicationService.UsedCreditLine("web"
      ,this.userStorage.getUserName()
      , this.comcode
      , this.cano).subscribe(
        (json: any) => {
          console.log(json);
          if (json.CODE = 200) {
            this.router.navigate(['/ca'], {
              queryParams: {
                ca_no: json.MSG,
                task: 'CA-01'
              }
            });
          }
        });
  }

}
