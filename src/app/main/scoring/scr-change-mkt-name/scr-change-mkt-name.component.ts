import {Component, OnInit, ViewChild} from '@angular/core';
import {ChangeMktNameService} from "./scr-change-mkt-name.service";
import {ScrChangeMktNameModel} from "../model/change-mkt-name.model";
import {ScrDropDownMktNameModel} from "../model/dropdown-mkt-name";
import {Subscription} from "rxjs/Subscription";
import {ScrSaveChangeMktNameModel} from "../model/save-change-mkt-name.model";
import {AlertDialogComponent} from "../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-scr-change-mkt-name',
  templateUrl: './scr-change-mkt-name.component.html',
  styleUrls: ['./scr-change-mkt-name.component.css']
})
export class ScrChangeMktNameComponent implements OnInit {
  listScrChangeMktNameModel: ScrChangeMktNameModel[];
  listScrChangeMktNameModelSelected: ScrChangeMktNameModel[];
  listScrDropDownMktNameModel: ScrDropDownMktNameModel[];
  saveChangeMktName: ScrSaveChangeMktNameModel = new ScrSaveChangeMktNameModel();
  subscription: Subscription;
  subscriptionSave: Subscription;
  refNo: string;
  @ViewChild('dialogChangeMktName') dialogChangeMktName: AlertDialogComponent;
  @ViewChild('dialogConfirm') dialogConfirm: AlertDialogComponent;

  constructor(private changeMktNameService: ChangeMktNameService) {
  }

  ngOnInit() {
  }

  getListChangeMktName() {
    this.subscription = this.changeMktNameService.getListChangeMktName(this.refNo).subscribe(
      (data: any) => {
        console.log(data);
        this.listScrChangeMktNameModel = ScrChangeMktNameModel.parse(data.LIST_DATA);
        this.listScrDropDownMktNameModel = ScrDropDownMktNameModel.parse(data.DATA.LIST_MKT_EMP_NAME);
        console.log(this.listScrChangeMktNameModel);
        console.log(this.listScrDropDownMktNameModel);

      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onClickSearch() {
    this.getListChangeMktName();
    this.listScrChangeMktNameModelSelected = [];
  }

  onClickClear() {
    this.refNo = '';
    this.getListChangeMktName();
    this.listScrChangeMktNameModelSelected = [];
  }

  onConfirmSave() {
    this.dialogConfirm.setAction("SAVE");
    this.dialogConfirm.open();
  }

  onClickSave() {
    this.saveChangeMktName.device = "web";
    this.saveChangeMktName.userName = this.changeMktNameService.userName;
    this.saveChangeMktName.listChangeMktName = JSON.parse(JSON.stringify(this.listScrChangeMktNameModelSelected));
    this.subscription = this.changeMktNameService.saveChangeMktName(this.saveChangeMktName).subscribe(
      (data: any) => {
        console.log(data);
        if (data.MSG == "Complete") {
          this.dialogChangeMktName.setAction("INFORMATION");
          this.dialogChangeMktName.setMessage("บันทึกเรียบร้อยแล้ว");
          this.dialogChangeMktName.open();
        }
        else {
          this.dialogChangeMktName.setAction("ERROR");
          this.dialogChangeMktName.setMessage("การทำรายการมีปัญหา ขณะกดปุ่ม  ");
          this.dialogChangeMktName.open();
        }
      },
      (error: any) => {
        console.log(error);
        this.dialogChangeMktName.setAction("ERROR");
        this.dialogChangeMktName.setMessage("การทำรายการมีปัญหา ขณะกดปุ่ม  ");
        this.dialogChangeMktName.open();
      }
    );
    this.saveChangeMktName = new ScrSaveChangeMktNameModel();
  }


  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionSave != null) {
      this.subscriptionSave.unsubscribe();
    }

  }


}
