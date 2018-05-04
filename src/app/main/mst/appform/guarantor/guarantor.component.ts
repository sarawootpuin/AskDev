import {Component, Input, OnInit} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ListGuarantor} from "../model/getDataGuarantor";

@Component({
  selector: 'app-guarantor',
  templateUrl: './guarantor.component.html'
})
export class GuarantorComponent implements OnInit {

  data: ListGuarantor[];
  dataSelect: ListGuarantor = null;
  disabled: string = 'N';
  @Input() inquiry: boolean;

  constructor(private appFormService: AppFormService) {

  }

  ngOnInit() {
    this.appFormService.eventTabGuarantor.subscribe(
      (data) => {
        this.data = data;
        console.log(this.appFormService.getAppFormData())
        if (this.appFormService.getAppFormData()) {
          this.disabled = this.appFormService.getAppFormData().disabled;
        }
      }
    )
  }

  setDataSelect(data: ListGuarantor) {
    this.dataSelect = data;
  }

}
