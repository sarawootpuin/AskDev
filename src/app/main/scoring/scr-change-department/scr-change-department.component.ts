import {Component, OnInit, ViewChild} from '@angular/core';
import {ScrChangeDepartmentModel} from "../model/change-department.model";
import {ChangeDepartmentService} from "./scr-change-department.service";
import {Subscription} from "rxjs/Subscription";
import {ScrSubmitChangeDepartmentModel} from "../model/submit-change-department.model";
import {AlertDialogComponent} from "../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-scr-change-department',
  templateUrl: './scr-change-department.component.html',
  styleUrls: ['./scr-change-department.component.css']
})
export class ScrChangeDepartmentComponent implements OnInit {
  listScrChangeDepartModel :ScrChangeDepartmentModel[];
  listScrChangeDepartModelSelected :ScrChangeDepartmentModel[];
  submitChangeDepartment: ScrSubmitChangeDepartmentModel = new ScrSubmitChangeDepartmentModel();
  subscription: Subscription;
  sortF : string = 'code';
  @ViewChild('dialogChangeDepartment') dialogChangeDepartment : AlertDialogComponent;
  @ViewChild('dialogConfirm') dialogConfirm: AlertDialogComponent;
  constructor(private changeDepartmentService: ChangeDepartmentService) { }

  ngOnInit() {
    this.subscription = this.changeDepartmentService.getListChangeDepartment().subscribe(
      (data: any) => {
        console.log(data);
        this.listScrChangeDepartModel = ScrChangeDepartmentModel.parse(data.LIST_DATA);
        this.listScrChangeDepartModelSelected = ScrChangeDepartmentModel.parse(data.LIST_DATA);
        this.listScrChangeDepartModelSelected = this.listScrChangeDepartModelSelected.filter(ListA => ListA.chk == "Y");

      },
      (error: any) => {
        console.log(error);

      }
    );
  }
  onDeleteDataSelected(event){
       let index = this.listScrChangeDepartModelSelected.indexOf(event.data);
       console.log(index);
       if (index !== -1) {
         this.listScrChangeDepartModelSelected.splice(index, 1);
         console.log(this.listScrChangeDepartModelSelected);
       }
  }
  onConfirmSubmit() {
    this.dialogConfirm.setAction("SUBMIT");
    this.dialogConfirm.open();
  }
  onSubmitClick(){
    this.submitChangeDepartment.device = "web";
    this.submitChangeDepartment.userName = this.changeDepartmentService.userName;
    this.submitChangeDepartment.listChangeDepartment = JSON.parse(JSON.stringify(this.listScrChangeDepartModelSelected));
    this.subscription = this.changeDepartmentService.submitChangeDepartment(this.submitChangeDepartment).subscribe(
      (data: any) => {
        if (data.MSG == "Complete") {
          this.dialogChangeDepartment.setAction("INFORMATION")
          this.dialogChangeDepartment.setMessage("การทำรายการเสร็จเรียบร้อย");
          this.dialogChangeDepartment.open();
        }
        else{
          this.dialogChangeDepartment.setTitle("ERROR");
          this.dialogChangeDepartment.setMessage("การทำรายการมีปัญหา ขณะกดปุ่ม  ");
          this.dialogChangeDepartment.open();
        }
      },
      (error: any) => {
        this.dialogChangeDepartment.setTitle("ERROR");
        this.dialogChangeDepartment.setMessage("การทำรายการมีปัญหา ขณะกดปุ่ม  ");
        this.dialogChangeDepartment.open();
      }
    );
    this.submitChangeDepartment = new ScrSubmitChangeDepartmentModel();

  }
  changeSort(event) {
      if (!event.order) {
        this.sortF = 'code';
      } else {
        this.sortF = event.field;
      }
  }
  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }
}
