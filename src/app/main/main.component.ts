import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ComponentCanDeactivate} from "./main.guard";
import {Observable} from "rxjs/Observable";
import {AlertDialogComponent} from "../shared/center/alert-dialog/alert-dialog.component";

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, ComponentCanDeactivate {
  @ViewChild('dialog_confirm') dialog_confirm: ElementRef;
  @ViewChild('btn_submit_dialog') btn_submit_dialog: ElementRef;
  @ViewChild('btn_cancel_dialog') btn_cancel_dialog: ElementRef;
  @ViewChild('btn_close_dialog') btn_close_dialog: ElementRef;
  eventSubmit: any;
  eventCancel: any;
  eventClose: any;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    $(this.dialog_confirm.nativeElement).modal({backdrop: "static", show: true});

    return new Promise((resolve) => {
      if (this.eventSubmit != null)
        this.eventSubmit();
      if (this.eventCancel != null)
        this.eventCancel();
      if (this.eventClose != null)
        this.eventClose();

      this.eventSubmit = this.renderer.listen(this.btn_submit_dialog.nativeElement, 'click', () => {
        resolve(true);
      });

      this.eventCancel = this.renderer.listen(this.btn_cancel_dialog.nativeElement, 'click', () => {
        resolve(false);
      });

      this.eventClose = this.renderer.listen(this.btn_close_dialog.nativeElement, 'click', () => {
        resolve(false);
      });

    })
  }
}

/*

 canDeactivate(): Promise<boolean> {

 let $modal = jQuery('#deactModal').modal();
 return new Promise<boolean>((resolve, reject) => {
 document.getElementById("btnAccept").onclick = ((e: any) => {
 jQuery('#deactModal').modal('hide');
 resolve(true);
 });

 document.getElementById("btnCancel").onclick = ((e: any) => {
 jQuery('#deactModal').modal('hide');
 resolve(false);
 });

 $modal.modal("show");

 });
 }

 */
