import { Component, OnInit, Input } from '@angular/core';
import { RegHistService } from "./reg-hist.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { RegSummary } from "./model/reg-summary";
import { RegSumbal } from "./model/reg-sumbal";
import { RegAdv } from "./model/reg-adv";
import { RegCh5 } from "./model/reg-ch5";
import { RegAdvSub1 } from "./model/reg-adv-sub1";
import { RegAdvSub2 } from "./model/reg-adv-sub2";
import { RegCh5Sub1 } from "./model/reg-ch5-sub1";
import { RegSumTot } from "./model/reg-sum-tot";
import { UserStorage } from "../../../../../../../../../shared/user/user.storage.service";
import { CustinfoService } from "../../custinfo.service";

@Component({
  selector: 'app-clr-regis-hist',
  templateUrl: './reg-hist.component.html'
})
export class RegHistComponent implements OnInit {
  subParams: Subscription;
  subscription: Subscription;

  vComCode: string = "";
  vAgrCode: string = "";
  vRefCode: string = "";
  abcdefg: string;

  //SumTotal
  listSumTot: RegSumTot[] = [];
  sumttl_dsreg: number = 0;
  sumbal_dsreg: number = 0;
  sumttl_dsborrow: number = 0;
  sumbal_dsborrow: number = 0;

  //Tab1
  listSummary: RegSummary[] = [];

  //Tab2
  listSumbal: RegSumbal[] = [];

  //Tab3 advance
  listAdv: RegAdv[] = [];
  listAdvSub1: RegAdvSub1[] = [];
  listAdvSub2: RegAdvSub2[] = [];
  vSelected_AdvRow: RegAdv;
  vSelected_AdvRowSub1: RegAdvSub1;

  //Tab4 ch5
  listCh5: RegCh5[] = [];
  listCh5Sub1: RegCh5Sub1[] = [];
  vSelected_Ch5Row: RegCh5;


  list_array3: any[];
  hidelistAdvSub1: boolean;
  hidelistAdvSub2: boolean;
  hidelistCh5Sub1 : boolean;

  constructor(private regHistService: RegHistService,
    private custService: CustinfoService) {
  }

  ngOnInit() {
    this.hidelistAdvSub1 = false;
    this.hidelistAdvSub2 = false;
    this.hidelistCh5Sub1 = false;

    this.subscription = this.custService.emitMainJSON.subscribe(
      (data) => {
        this.vComCode = data.agr_com_code;
        this.vAgrCode = data.agr_code;
        this.vRefCode = data.ref_code;

        if (this.vRefCode == null) {
          this.vRefCode = this.vAgrCode;
        }
        //Fix for test
        // this.vComCode = 'ASKH';
        // this.vAgrCode = '10-6000055';
        // this.vRefCode = '10-6000055';
        this.getRegHistData();

      }
    );
  }

  getRegHistData() {


    this.listAdvSub1 = [];
    this.listAdvSub2 = [];
    this.listCh5Sub1 = [];

    this.regHistService.getRegHistData(this.vComCode, this.vAgrCode, this.vRefCode).subscribe(
      (json: any) => {
        // console.log('json', json);

        if (json.MSG == 'Complete') { //มีข้อมูลใน json


          if (json.DATA.listSumTot) {
            this.listSumTot = RegSumTot.parse(json.DATA.listSumTot);
            this.sumttl_dsreg = this.listSumTot[0].sumttl_dsreg;
            this.sumbal_dsreg = this.listSumTot[0].sumbal_dsreg;
            this.sumttl_dsborrow = this.listSumTot[0].sumttl_dsborrow;
            this.sumbal_dsborrow = this.listSumTot[0].sumbal_dsborrow;

            this.list_array3=[
              {
                "category" : "ทั้งหมด",
                "dsreg" : this.sumttl_dsreg,
                "dsborrow" : this.sumttl_dsborrow
              },
              {
                "category" : "คงเหลือ",
                "dsreg" : this.sumbal_dsreg,
                "dsborrow" : this.sumbal_dsborrow
              }
            ];
            // console.log(this.listSumTot);
          }

          //สรุปรายการคงเหลือรับฝาก / รายได้ เกี่ยวกับทะเบียน ---------------------------------------------------------------------------------
          if (json.DATA.listSummary) {
            this.listSummary = RegSummary.parse(json.DATA.listSummary);
            this.regHistService.setlistRegSummary(this.listSummary);
          }

          //สรุปรายการรับฝาก / รายได้ เกี่ยวกับทะเบียน ------------------------------------------------------------------------------------
          if (json.DATA.listSumbal) {
            this.listSumbal = RegSumbal.parse(json.DATA.listSumbal);
          }

          //รายการเบิกเงินทดรอง / เบิกเงินชดเชยเงินสดย่อย -----------------------------------------------------------------------------------
          if (json.DATA.listAdv) {
            this.listAdv = RegAdv.parse(json.DATA.listAdv);

            if (this.listAdv.length > 0) {
              this.vSelected_AdvRow = this.listAdv[0] //json.DATA.listAdv[0];
              this.onSelectRegAdv(this.vSelected_AdvRow, 0);
            }

          }

          //รายการโอนเงิน / ตัดรับฝาก / คืนเงิน (CH.5) --------------------------------------------------------------------------------
          if (json.DATA.listCh5) {
            this.listCh5 = RegCh5.parse(json.DATA.listCh5);

            if (this.listCh5.length > 0) {
              this.vSelected_Ch5Row = this.listCh5[0]; //json.DATA.listCh5[0];
              this.onSelectRegCh5(this.vSelected_Ch5Row, 0);
            }

          }
        }
        else {
          //
        }

        //console.log('this.listSummary',this.listSummary);
        //console.log('this.listSumbal',this.listSumbal);
        //console.log('this.listAdv',this.listAdv);
        //console.log('this.listCh5',this.listCh5);
      }
    );
  }

  // onClickSearch() {
  //   this.getRegHistData();
  // }

  onSelectRegAdv(pRegAdv: RegAdv, idx: number) {
    if (pRegAdv.listAdvSub1) {
      this.listAdvSub1 = pRegAdv.listAdvSub1;

      if (this.listAdvSub1.length > 0) {
        this.listAdvSub2 = this.listAdvSub1[0].listAdvSub2;
      }
    }
  }

  onSelectRegAdvSub1(pRegAdvSub1: RegAdvSub1, idx: number) {
    this.listAdvSub2 = pRegAdvSub1.listAdvSub2;
  }

  onSelectRegCh5(pRegCh5: RegCh5, idx: number) {
    this.listCh5Sub1 = pRegCh5.listCh5Sub1;
    //console.log('this.listCh5Sub1',this.listCh5Sub1);
  }

  showTable() {
    if (this.hidelistAdvSub1) {
      this.hidelistAdvSub1 = false;
      this.hidelistAdvSub2 = false;
    }
    else
      this.hidelistAdvSub1 = true;
  }

  showTable1() {
    if (this.hidelistAdvSub2) {
      this.hidelistAdvSub2 = false;
    }
    else
      this.hidelistAdvSub2 = true;
  }

  showListCh5Sub1(){
    if (this.hidelistCh5Sub1) {
      this.hidelistCh5Sub1 = false;
    }
    else
      this.hidelistCh5Sub1 = true;
  }

}
