import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-action-lock-screen',
  templateUrl: './action-lock-screen.component.html',
  styleUrls: ['./action-lock-screen.component.css']
})
export class ActionLockScreenComponent implements OnInit {

  constructor() { }

  @Input() spinner:Boolean=false;
  @Input() progressbar:Boolean=false;
  @Input() showCancel:Boolean=true;
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
          if(this.progressbar == true && this.spinner==true)
          {
            this.spinner= false;
          }
  }

  onCancelClick() {
    this.onCancel.emit();
  }

}
