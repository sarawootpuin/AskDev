import {Component, OnInit} from "@angular/core";
import {ExposureService} from "./exposure.service";
import {ListExposure} from "../model/getDataExposure";
import {AppFormService} from "../appform.service";

@Component({
  selector: 'app-exposure',
  templateUrl: './exposure.component.html'
})
export class ExposureComponent implements OnInit {
  data: ListExposure[] = [];

  constructor(private exposureService: ExposureService,
              private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.appFormService.eventTabExposure.subscribe(
      (data: any) => {
        this.exposureService.getExposure("web",
                                         this.appFormService.getAppFormData().com_code ,
                                         this.appFormService.getAppFormData().ca_no,
                                         this.appFormService.getAppFormData().new_card_no).subscribe(
          (data: any) => {
            console.log(data);
            this.data = ListExposure.parse(data.LIST_DATA);
          }
        );
      }
    );
  }

}
