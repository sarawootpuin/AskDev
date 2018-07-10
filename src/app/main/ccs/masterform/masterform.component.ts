import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges,
  OnDestroy,
  OnInit, ViewChild
} from '@angular/core';
import {MasterFormService} from "./masterform.service";

@Component({
  selector: 'app-masterform',
  templateUrl: './masterform.component.html',
  styleUrls: ['./masterform.component.css']
})
export class MasterformComponent implements OnInit,DoCheck{
  loadedFeature: String;

  constructor(private masterformService: MasterFormService) {
  }

  ngOnInit() {
    this.loadedFeature = this.masterformService.loadedFeature;
  }

  ngDoCheck() {
    this.loadedFeature = this.masterformService.loadedFeature;
  }


}
