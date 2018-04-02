import {Component, OnChanges, OnInit} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ListContext} from "../model/getDataContext";

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html'
})
export class ContextComponent implements OnInit,OnChanges {
  data: ListContext[] = [];

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.appFormService.eventTabContext.subscribe(
      (data: any) => {
        this.data = data;
      }
    );
  }

  ngOnChanges(){
  }
}
