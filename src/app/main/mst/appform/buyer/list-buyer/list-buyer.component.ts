import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from "@angular/core";
import {ListBuyer} from "../../model/getDataBuyer";
import {AppFormService} from "../../appform.service";
import {EntityDialogComponent} from "../../../entity/entity-dialog/entity-dialog.component";
import {EntityModel} from "../../../entity/model/entity-model";
import {AlertDialogComponent} from "../../../../../shared/center/alert-dialog/alert-dialog.component";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-list-buyer',
  templateUrl: './list-buyer.component.html'
})
export class ListBuyerComponent implements OnInit , OnDestroy{
  subscription: Subscription;
  subscriptionBuyer: Subscription;
  @Output("clickList") clickList = new EventEmitter<ListBuyer>();
  @ViewChild("entity_dialog") entity_dialog: EntityDialogComponent;
  @ViewChild('deleteDialog') deleteDialog: AlertDialogComponent;
  data: ListBuyer[];
  selectedData: ListBuyer;

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.data = this.appFormService.listTabBuyer;
    if (this.data) {
      this.selectList(this.data[0]);
    }
    else {
      this.data = [];
    }

    this.subscription = this.appFormService.eventTabBuyer.subscribe(
      (listTab) => {
        this.data = listTab;
        if (this.data.length > 0) {
          this.selectList(this.data[0]);
        }
      }
    );
  }

  ngOnDestroy(){
    if(this.subscription != null){
      this.subscription.unsubscribe();
    }
    if(this.subscriptionBuyer != null){
      this.subscriptionBuyer.unsubscribe();
    }
  }

  selectList(selectedData: any) {
    this.selectedData = selectedData;
    this.clickList.emit(selectedData);
  }

  openEntity() {
    this.entity_dialog.title = 'Buyer';
    this.entity_dialog.showDialog();
  }

  getEntity(entityModel: EntityModel) {
    let newBuyer = new ListBuyer();
    newBuyer.com_code = entityModel.comCode;
    newBuyer.ap_no = this.appFormService.getAppFormData().ap_no;
    newBuyer.seq_no = this.data.length + 1;
    newBuyer.ver_waive = 'N';
    newBuyer.app_type = '2';
    newBuyer.app_type_desc = 'WITH RECOURSE';
    this.subscriptionBuyer = this.appFormService.checkFactoring(entityModel.entCode, entityModel.newCardNo).subscribe(
      (data: any) => {
        if (data.CODE === "200" && data.LIST_DATA.length > 0) {
          newBuyer.buyer_code = data.LIST_DATA[0].entCode;
        }
        else {
          newBuyer.buyer_code = entityModel.entCode;
        }
      }
    );
    newBuyer.buyer_name = entityModel.fNameE + " " + entityModel.lNameE;

    this.data.push(newBuyer);

    this.selectedData = newBuyer;
    this.clickList.emit(newBuyer);
  }

  deleteBuyer() {
    let index = this.selectedData.seq_no - 1;
    this.data.splice(index, 1);
    let seqNo = 1;
    for (let data of this.data) {
      data.seq_no = seqNo;
      seqNo++;
    }
    if (this.data.length > 0) {
      this.selectedData = this.data[0];
      this.clickList.emit(this.data[0]);
    }
    else {
      this.selectedData = new ListBuyer();
      this.clickList.emit(new ListBuyer());
    }
  }

  deleteWarning(){
    this.deleteDialog.setAction("DELETE");
    this.deleteDialog.open();
  }

}
