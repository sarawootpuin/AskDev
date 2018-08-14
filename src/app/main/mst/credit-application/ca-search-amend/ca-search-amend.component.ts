import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {creditApplicationService} from "../credit-application.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {CaTodoBgpl} from "../../../home/todo/todo-list/list-ca-bgpl/ca-todo-bgpl";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-ca-search-amend',
  templateUrl: './ca-search-amend.component.html'
})
export class CaSearchAmendComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionAmend: Subscription;
  listCaTodo: CaTodoBgpl[];
  title: string;
  isLoading: boolean = false;
  msg: string;
  caNo: string;
  comCode: string;
  task: string;
  isAmend: boolean = false;
  isEditCa: boolean = false
  @ViewChild('alertDialog') alertDialog: AlertDialogComponent;

  constructor(private creditApplicationService: creditApplicationService,
              private router: Router,
              private user: UserStorage) {
  }

  ngOnInit() {
    this.msg = '';
    this.isLoading = true;
    this.isAmend = this.router.url.includes("amend");
    this.isEditCa = this.router.url.includes("edit")
    if(this.isAmend) {
      this.task = 'AM-00' 
    } else if (this.isEditCa) {
      this.task = 'CA-00-1'
    } else { 
      this.task = 'RV-00'
    }
    this.subscription = this.creditApplicationService.listSearch(this.task).subscribe(
      (json: any) => {
        if (json.CODE == '200') {
          if(this.isAmend) {
            this.title = 'Search CA For Amend'
          } else if (this.isEditCa) {
            this.title = 'Search CA For Edit CA'
          } else { 
            this.title = 'Search CA For Revise AttachSheet'
          }
          this.listCaTodo = CaTodoBgpl.parse(json.LIST_DATA);
        }
        else {
          console.log(json);
          this.title = 'Error Service';
        }
        this.isLoading = false;
      }
    )
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionAmend != null) {
      this.subscription.unsubscribe();
    }
  }

  selectedRow(value: CaTodoBgpl) {
    this.comCode = value.comCode;
    this.caNo = value.caNo;
    this.isAmend ? this.msg = 'Do you want to Amend CA : ' + this.caNo + ' ?' :
      this.msg = 'Do you want to Revise AttachSheet : ' + this.caNo + ' ?';
    if (this.isEditCa){
      this.confirm()
    } else {
      this.alertDialog.setAction('SUBMIT');
      this.alertDialog.setMessage(this.msg);
      this.alertDialog.open();
    }
  }

  confirm() {
    if (this.isAmend) {
      this.subscriptionAmend = this.creditApplicationService.amendCa("web", this.user.getUserName(), this.comCode, this.caNo).subscribe(
        (json: any) => {
          if (json.CODE == '200') {
            this.router.navigate(['/ca'], {
              queryParams: {
                com_code: this.comCode,
                ca_no: this.caNo,
                task: 'AM-01'
              }
            });
          }
        }
      );
    } else if (this.isEditCa) {
      this.router.navigate(['/ca'], {
        queryParams : {
          com_code: this.comCode,
          ca_no: this.caNo,
          task : 'CA-00-1'
        }
      })
    } else {
      this.subscriptionAmend = this.creditApplicationService.reviseCa("web", this.user.getUserName(), this.comCode, this.caNo).subscribe(
        (json: any) => {
          if (json.CODE == '200') {
            this.router.navigate(['/ca'], {
              queryParams: {
                com_code: this.comCode,
                ca_no: this.caNo,
                task: 'RV-01'
              }
            });
          }
        }
      );
    }
  }
}
