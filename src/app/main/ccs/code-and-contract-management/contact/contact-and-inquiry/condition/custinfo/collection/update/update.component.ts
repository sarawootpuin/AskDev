import {Component, OnInit, ViewChild} from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {CustinfoModel} from "../../model/custinfo";
import {DatePipe} from "@angular/common";
import {UpdateService} from "./update.service";
import {AlertDialogComponent} from "../../../../../../../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {

  date1 : Date;
  @ViewChild("alertSendInterface") alertSendInterface : AlertDialogComponent;

  constructor(private custService: CustinfoService,
              private updService: UpdateService) { }

  ngOnInit() {
  }

  sendInterface() {
    console.log(JSON.stringify(this.custService.srviceCustModel));
    this.updService.InterfaceUpdate(this.custService.srviceCustModel).subscribe(
      (data : any) => {
        console.log(data);
        this.alertSendInterface.open();
    }
    );
  }

}
