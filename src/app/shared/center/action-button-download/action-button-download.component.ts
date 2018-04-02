import {Component, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs/Subscription";
import * as fileSaver from "file-saver";
import {AlertDialogComponent} from "../alert-dialog/alert-dialog.component";
import {DISABLED} from "@angular/forms/src/model";
import {UserStorage} from "../../user/user.storage.service";
import 'rxjs'


@Component({
  selector: 'app-action-button-download',
  templateUrl: './action-button-download.component.html',
  styleUrls: ['./action-button-download.component.css']
})
export class ActionButtonDownloadComponent implements OnInit {

  subscription: Subscription;
  complete: Boolean;
  url:string="";
  @Input() linkWebService: string = "";
  @Input() buttonName: string = "";
  @Input() fileName: string = "";
  @Input() disabled : Boolean = false;
  @Input() modelExcel : any;
  @Input() method : string ="";
  @ViewChild('alertDialogComponent') alertDialogComponent: AlertDialogComponent;

  constructor(private http: HttpClient,
              private tmphttp: HttpClient,
              private userStorage:UserStorage
               ) {
  }

  ngOnInit() {
    this.complete = true;
  }

  ConnectWebService(linkWebService?: string) {
    this.url = '';
    if(this.method == 'get') {
      this.url = linkWebService+'&userlogin='+this.userStorage.getUserName();
      return this.http.get(this.url, {responseType: 'blob'});
    }
    else {
      this.url = linkWebService;
      return this.http.post(this.url, JSON.stringify(this.modelExcel),{responseType: 'blob'});
    }
  }

  cancelDownload()
  {
    this.subscription.unsubscribe();
    this.http = null;
    this.http = this.tmphttp;
    this.complete = true;
  }

  SaveFile() {
    this.complete = false;
    this.subscription = this.ConnectWebService(this.linkWebService).subscribe(
      (response: any) => {

          var blob = new Blob([response], {type: 'application/octet-stream'});
          var filename = this.fileName;
          fileSaver.saveAs(blob, filename);
       
        this.alertDialogComponent.msg ='Download File '+this.fileName+' Success!!';
        this.alertDialogComponent.open();
          this.complete = true;
      },
      (err) =>
      {
        this.complete = true;
        this.alertDialogComponent.msg ='Download File '+this.fileName+' Failed!!';
        this.alertDialogComponent.open();

      }
  );
  }


}
