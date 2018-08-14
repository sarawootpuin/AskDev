import {Component, ElementRef, Input, OnInit, Renderer, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {CCMService} from "../../../../ccm.service";
import {CustinfoService} from "./custinfo.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UserStorage} from "../../../../../../../shared/user/user.storage.service";
import {Location} from "@angular/common"
import {createViewChild} from "@angular/compiler/src/core";
import {getAngularEmitterTransformFactory} from "@angular/compiler-cli/src/transformers/node_emitter_transform";
import {AlertDialogComponent} from "../../../../../../../shared/center/alert-dialog/alert-dialog.component";
import {ActionDialogComponent} from "../../../../../../../shared/center/action-dialog/action-dialog.component";
import {CustinfoModel} from "./model/custinfo";
import {TransferComponent} from "./collection/transfer/transfer.component";
import {UpdateService} from "./collection/update/update.service";
import {AssetModel} from "./contract-detail/ccs-movement-master/ccs-asset";
import {SideTabLevelComponent} from "../../../../../../../shared/center/side-tab/side-tab-level/side-tab-level.component";

@Component({
  selector: 'app-custinfo',
  templateUrl: './custinfo.component.html',
  styleUrls: ['./custinfo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustinfoComponent implements OnInit {
  TITLE: string = 'Customer Information (Hire Purchase)';

  custModel: CustinfoModel;
  asset: AssetModel;
  guar_name1: string;
  cnt_cheque: number;
  cnt_guarantee: number;
  @ViewChild('blink') vBlink: ElementRef;
  @ViewChild('blinkStp') vBlinkStp: ElementRef;

  display: Boolean = false;

  private checkLoading:boolean;

  @ViewChild('alertNew') alertNew : AlertDialogComponent;
  @ViewChild('actionSave') actionSave: ActionDialogComponent;
  @ViewChild('transf') transfComp : TransferComponent;

  sideTab: SideTabLevelComponent;

  constructor(private custService: CustinfoService,
              private locatn: Location,
              private route: ActivatedRoute) {
    this.checkLoading = true;
    this.asset = new AssetModel();
    this.guar_name1 = '';
    this.sideTab = new SideTabLevelComponent();
    this.cnt_cheque = 0;
    this.cnt_guarantee = 0;
  }

  ngOnInit() {
    // this.custService.vAgr_Code = window.localStorage['data'];

    this.route.queryParams.subscribe(
      (param: Params) => {
        let agr_code = param['agrCode'];
        let com_code = param['comCode'];

        this.custService.getShowAll("web", this.custService.userCode, agr_code, com_code).subscribe(
          (data: any) => {
            // console.log(data.DATA);
            this.custModel = CustinfoModel.parse(data.DATA);
            this.custService.setCustModel(this.custModel);
            this.custService.emitMainJSON.emit(this.custService.srviceCustModel);

            if (this.custService.srviceCustModel.list_Asset.length > 0) {
              this.asset = this.custService.srviceCustModel.list_Asset[0];
            }

            if (this.custService.srviceCustModel.list_qryGuarantor.length > 0) {
              this.guar_name1 = this.custService.srviceCustModel.list_qryGuarantor[0].guar_name;
            }

            if (this.custService.srviceCustModel.list_Cheque.length > 0) {
              this.cnt_cheque = this.custService.srviceCustModel.list_Cheque.length;
            }

            if (this.custService.srviceCustModel.list_ChqGuarantee.length > 0) {
              this.cnt_guarantee = this.custService.srviceCustModel.list_ChqGuarantee.length;
            }

            this.checkLoading = false;
             // console.log(this.custService.srviceCustModel);
          }

        );
      }
    );


    // set Blink Text
    // setInterval(() => {
    //   let style = "white";
    //   if (this.vBlink.nativeElement.style.color && this.vBlink.nativeElement.style.color == "white") {
    //     style = "#ffcc65";
    //   }
    //   this.renderer.setStyle(this.vBlink.nativeElement, 'color', style);
    // }, 500);
    //
    // // set Blink Step
    // setInterval(() => {
    //   let style = "white";
    //   if(this.vBlinkStp.nativeElement.style.color && this.vBlinkStp.nativeElement.style.color == "white") {
    //     style = "#ff8e3d";
    //   }
    //   this.renderer.setStyle(this.vBlinkStp.nativeElement, 'color', style);
    // }, 500);

    // Default Address Page
    // this.vSelectedMenu = 'address';
    // this.vMenu_Address = true;

  }

  getSelectedMenu(nameMenu) {
    this.custService.vSelectedMenu = nameMenu;
    // this.router.navigate(['../' + path], {relativeTo: this.route});
  }

  openCustGuarTest() {
    this.transfComp.openCustGuar();
  }

  onBackPage() {
    this.custService.BackPage(this.locatn);
  }

  private installment_i_vat() {
    return parseFloat(this.custService.srviceCustModel.installment_e_vat) + parseFloat(this.custService.srviceCustModel.vat);
  }

  private openMenu(nameMenu) {
    nameMenu = this.sideTab.convertToAscii(nameMenu);
    this.sideTab.openContent('',nameMenu);
  }

  // onOpenMenu(menu:String) {
  //   this.vLoadedMenu = menu;
  //
  //   this.vMenu_Update = false;
  //   this.vMenu_Address = false;
  //
  //   switch (menu) {
  //     case 'update' : {this.vMenu_Update = true; break;}
  //     case 'address' : {this.vMenu_Address = true; break;}
  //   }
  // }

}
