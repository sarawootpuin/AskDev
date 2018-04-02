import {Component, OnInit, ViewChild} from '@angular/core';
import {ScrRetryToReVerify} from "../model/retry-to-reverify.model";
import {Subscription} from "rxjs/Subscription";
import {RetryToReVerifyService} from "./scr-retry-to-reverify.service";
import {AlertDialogComponent} from "../../../shared/center/alert-dialog/alert-dialog.component";


@Component({
  selector: 'app-scr-retry-to-reverify',
  templateUrl: './scr-retry-to-reverify.component.html',
  styleUrls: ['./scr-retry-to-reverify.component.css']
})
export class ScrRetryToReverifyComponent implements OnInit {
  listScrRetryToReVerify :ScrRetryToReVerify[];
  listScrRetryToReVerifySelected :ScrRetryToReVerify;
  subscription: Subscription;
  subscriptionSubmit: Subscription;
  refNo:string='';
  @ViewChild('dialogWarning') dialogWarning : AlertDialogComponent;
  @ViewChild('dialogConfirm') dialogConfirm: AlertDialogComponent;

  constructor(private retryToReverifyService: RetryToReVerifyService) { }

  ngOnInit() {
  }

  getListRetryToReVerify(){
    this.subscription = this.retryToReverifyService.getListRetryToReVerify(this.refNo).subscribe(
      (data: any) => {
        console.log(data);
        this.listScrRetryToReVerify = ScrRetryToReVerify.parse(data.LIST_DATA);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onClickSearch(){
   this.getListRetryToReVerify();
  }
  onClickClear(){
    this.refNo = '';
    this.getListRetryToReVerify();
  }

  onSubmit(){
    console.log(this.listScrRetryToReVerifySelected);
    if (this.listScrRetryToReVerifySelected ){
       console.log('have data');
      // 'ยืนยันทำรายการ เอางานกลับ '+ strEntTyp
      if (this.listScrRetryToReVerifySelected.can_retry == "YES"){
        this.subscriptionSubmit = this.retryToReverifyService.submitRetryToReVerify(this.listScrRetryToReVerifySelected.run_no,this.listScrRetryToReVerifySelected.com_code
          ,this.listScrRetryToReVerifySelected.ref_no,this.listScrRetryToReVerifySelected.ent_typ,this.listScrRetryToReVerifySelected.ent_cd).subscribe(
          (data: any) => {
            if (data.MSG == "Complete") {
              this.dialogWarning.setTitle("Information");
              this.dialogWarning.setMessage(
                "To-do "+ this.listScrRetryToReVerifySelected.ent_typ+ " รายนี้ไปอยู่ที่ Step Retry to Re-Verify"
                +" คุณ "+ data.DATA.VER_NAME +
                " เรียบร้อยแล้ว");
              this.dialogWarning.open();
            }
            else{
              this.dialogWarning.setTitle("Information");
              this.dialogWarning.setMessage("การทำรายการมีปัญหา ขณะกดปุ่ม  "+data.MSG);
              this.dialogWarning.open();
            }
          },
          (error: any) => {
            this.dialogWarning.setTitle("Submit Information");
            this.dialogWarning.setMessage("การทำรายการมีปัญหา ขณะกดปุ่ม  ");
            this.dialogWarning.open();
          }
        );
      }
      else {
        this.dialogWarning.setTitle("Warning Information");
        this.dialogWarning.setMessage("รายการนี้ไม่สามารถนำ To-do กลับมาได้ เนื่องจากรายการนี้ยังทำไม่เสร็จสิ้น");
        this.dialogWarning.open();
      }
    }
    else{
      this.dialogWarning.setTitle("Warning Information");
      this.dialogWarning.setMessage("กรุณาเลือกรายการที่ต้องการ Submit");
      this.dialogWarning.open();
    }


  }

  onClickCloseConfirmDialog(){
    this.dialogConfirm.close();
  }
  onConfirmDialog(){
    this.dialogConfirm.setAction('SUBMIT');
    this.dialogConfirm.open();
  }
  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionSubmit != null) {
      this.subscriptionSubmit.unsubscribe();
    }

  }

}
