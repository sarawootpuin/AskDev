import {
  AfterContentChecked, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit,
  Output,
} from '@angular/core';
import {ScrCorp} from "../../model/scrcorp.model";
import {VerificationDetailService} from "../verification-detail.service";
import {MainTabModel} from "../../model/mainTab.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-scr-alert-jrst-fin',
  templateUrl: './scr-alert-jrst-fin.component.html',
  styleUrls: ['./scr-alert-jrst-fin.component.css']
})
export class ScrAlertJrstFinComponent implements OnInit {
  listScrCorp: ScrCorp[] = [];
  listScrCorpCalculate: ScrCorp[] = [];
  subscription: Subscription;
  alertDialogScrJrstFin: boolean = false;
  checkReadOnly :Boolean;
  @Input("displayDialogScrJrstFin") displayDialogScrJrstFin: boolean = false;
  @Output("onClose") onClose: EventEmitter<any> = new EventEmitter();
  num_test:string  = '0';

  constructor(private verficationDetailService: VerificationDetailService) {
  }

  ngOnInit() {
    this.checkReadOnly = this.verficationDetailService.checkReadOnly;
    for (let i = 0; i < 9; i++) {
      this.listScrCorp.push(new ScrCorp())

    }

    let j = 17
    for (let i = 0; i < 6; i++) {
      this.listScrCorpCalculate.push(new ScrCorp(
        "B0" + j, '0.00', '0.00', '0.00', '0.00'
      ));
      j = j + 4;
    }

    this.listScrCorp = JSON.parse(JSON.stringify(this.verficationDetailService.tabMain.list_scr_corp));

    this.subscription = this.verficationDetailService.eventTabMain.subscribe(
      (obj: MainTabModel) => {
        this.listScrCorp = JSON.parse(JSON.stringify(obj.list_scr_corp));

      }
    );

    this.verficationDetailService.eventTabMain.subscribe(
      (obj: MainTabModel) => {
      }
    );

  }

  calCulateScrCorp() {
    //ปั ค.ศ.
    this.listScrCorpCalculate[0].field_1 = this.listScrCorp[0].field_1;
    this.listScrCorpCalculate[0].field_2 = this.listScrCorp[0].field_2;
    this.listScrCorpCalculate[0].field_3 = this.listScrCorp[0].field_3;

    //การเติบโตรายได้(ปีที่n) = (รายได้(ปีที่n)-รายได้(ปีที่n+1))/รายได้(ปีที่n+1)*100
    this.listScrCorpCalculate[1].field_1 = String(Number((Number(this.listScrCorp[1].field_1) - Number(this.listScrCorp[1].field_2)) / Number(this.listScrCorp[1].field_2) * 100).toFixed(2));
    this.listScrCorpCalculate[1].field_2 = String(Number((Number(this.listScrCorp[1].field_2) - Number(this.listScrCorp[1].field_3)) / Number(this.listScrCorp[1].field_3) * 100).toFixed(2));
    this.listScrCorpCalculate[1].field_3 = String(Number((Number(this.listScrCorp[1].field_3) - Number(this.listScrCorp[1].field_4)) / Number(this.listScrCorp[1].field_4) * 100).toFixed(2));

    //สภาพคล่องทางการเงิน(ปีที่n) = สินทรัพย์(ปีที่n)/หนี้สิน(ปีที่n)
    this.listScrCorpCalculate[2].field_1 = String(Number(Number(this.listScrCorp[3].field_1) / Number(this.listScrCorp[4].field_1)).toFixed(2));
    this.listScrCorpCalculate[2].field_2 = String(Number(Number(this.listScrCorp[3].field_2) / Number(this.listScrCorp[4].field_2)).toFixed(2));
    this.listScrCorpCalculate[2].field_3 = String(Number(Number(this.listScrCorp[3].field_3) / Number(this.listScrCorp[4].field_3)).toFixed(2));

    //ประสิทธิภาพการใช้ทรัย์สิน(ปีที่n)=  รายได้(ปีที่n)/((สินทรัพย์รวม(ปีที่n)+สินทรัพย์รวม(ปีที่n+1))/2)
    this.listScrCorpCalculate[3].field_1 = String(Number(Number(this.listScrCorp[1].field_1) / (((Number(this.listScrCorp[5].field_1)) + (Number(this.listScrCorp[5].field_2))) / 2)).toFixed(2));
    this.listScrCorpCalculate[3].field_2 = String(Number(Number(this.listScrCorp[1].field_2) / (((Number(this.listScrCorp[5].field_2)) + (Number(this.listScrCorp[5].field_3))) / 2)).toFixed(2));
    this.listScrCorpCalculate[3].field_3 = String(Number(Number(this.listScrCorp[1].field_3) / (((Number(this.listScrCorp[5].field_3)) + (Number(this.listScrCorp[5].field_4))) / 2)).toFixed(2));

    //ความสามารถในการก่อหนี้(ปีที่n)= หนี้สินรวม(ปีที่n)/สินทรัพย์รวม(ปีที่n)
    this.listScrCorpCalculate[4].field_1 = String(Number(Number(this.listScrCorp[6].field_1) / Number(this.listScrCorp[5].field_1)).toFixed(2));
    this.listScrCorpCalculate[4].field_2 = String(Number(Number(this.listScrCorp[6].field_2) / Number(this.listScrCorp[5].field_2)).toFixed(2));
    this.listScrCorpCalculate[4].field_3 = String(Number(Number(this.listScrCorp[6].field_3) / Number(this.listScrCorp[5].field_3)).toFixed(2));

    //กำไรขั้นต้น= รายได้(ปีที่n)-ต้นทุนขาย(ปีที่n)
    this.listScrCorp[7].field_1 = String(Number(Number(this.listScrCorp[1].field_1) - Number(this.listScrCorp[2].field_1)).toFixed(2));
    this.listScrCorp[7].field_2 = String(Number(Number(this.listScrCorp[1].field_2) - Number(this.listScrCorp[2].field_2)).toFixed(2));
    this.listScrCorp[7].field_3 = String(Number(Number(this.listScrCorp[1].field_3) - Number(this.listScrCorp[2].field_3)).toFixed(2));

    //ความสามารถในการทำกำไร(ปีที่n)=กำไรขั้นต้น(ปีที่n)/รายได้(ปีที่n)*100
    this.listScrCorpCalculate[5].field_1 = String(Number(Number(this.listScrCorp[7].field_1) / Number(this.listScrCorp[1].field_1) * 100).toFixed(2));
    this.listScrCorpCalculate[5].field_2 = String(Number(Number(this.listScrCorp[7].field_2) / Number(this.listScrCorp[1].field_2) * 100).toFixed(2));
    this.listScrCorpCalculate[5].field_3 = String(Number(Number(this.listScrCorp[7].field_3) / Number(this.listScrCorp[1].field_3) * 100).toFixed(2));
  }

  transferScrCorp() {
    this.verficationDetailService.tranferDataScrCorp(this.listScrCorp, this.listScrCorpCalculate);
    this.verficationDetailService.copyQuestionTab();
    this.hideDialog();
  }

  open() {
    this.alertDialogScrJrstFin = true;
  }

  hideDialog() {
    this.onClose.emit();
  }

}
