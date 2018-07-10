import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {AppformReassignHead} from "../model/AppformReassignHead";
import {AppformReassignDetail} from "../model/AppformReassignDetail";
import {AppformReassignOfficer} from "../model/AppformReassignOfficer";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";
import {ActivatedRoute} from "@angular/router";
import {AppFormService} from "../appform.service";
import {Subscription} from "rxjs/Subscription";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-appform-reassign',
  templateUrl: './appform-reassign.component.html'
})
export class AppformReassignComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionRe: Subscription;
  @ViewChild('questionDialog') questionDialog: AlertDialogComponent;

  constructor(private appformService: AppFormService,
              private Route: ActivatedRoute) {
    this.taskCode = this.Route.snapshot.queryParams['task_code'];
  }

  reassignHead: AppformReassignHead[] = [];
  selectedHead: AppformReassignHead = null;

  reassignDetail: AppformReassignDetail[] = [];
  selectedDetail: AppformReassignDetail[] = [];

  reassignOfficer: AppformReassignOfficer[] = [];
  selectedOfficer: AppformReassignOfficer = null;

  taskCode: string;

  @ViewChild('dialogReassign') dialogReassign: ActionDialogComponent;

  ngOnInit() {
    this.subscription = this.appformService.CallReassign().subscribe(
      (data: any) => {
        //console.log(data);
        this.reassignHead = AppformReassignHead.parse(data.LIST_DATA);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription != null)
      this.subscription.unsubscribe();

    if (this.subscriptionRe != null)
      this.subscriptionRe.unsubscribe();
  }

  onRowSelect(selected) {
    this.reassignDetail = this.selectedHead.listReassignDetail;
    this.selectedDetail = [];

    this.reassignOfficer = this.selectedHead.listReassignOfficer;
    this.selectedOfficer = null;
  }

  callReassignDialog() {
    if (this.selectedHead !== null) {
      this.dialogReassign.open();
    }
  }

  updateReassign() {
    if (this.selectedOfficer !== null) {
      this.subscriptionRe = this.appformService.UpdateReassign(this.selectedDetail, this.selectedOfficer, this.taskCode).subscribe(
        (obj) => {
          console.log(obj);
        }
      );
    }
  }

  askForSave() {
    this.questionDialog.reset();
    this.questionDialog.setAction('SAVE');
    this.questionDialog.open();
  }

  save() {
    window.location.reload()
  }
}
