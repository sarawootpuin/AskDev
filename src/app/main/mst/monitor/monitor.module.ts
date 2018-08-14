import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {MonitorComponent} from "./monitor.component";
import {MonitorService} from "./monitor.service";
import {MonitorRoutingModule} from "./monitor.routing.module";
import {SearchMonitorComponent} from "./app-search-monitor/search-monitor.component";
import {
  AccordionModule, ButtonModule, CalendarModule, CodeHighlighterModule, DataTableModule, InputTextModule,
  SharedModule,
  TabViewModule
} from "primeng/primeng";

import {CenterModule} from "../../../shared/center/center.module";
import {FormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MonitorRoutingModule,
    AccordionModule,
    SharedModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    DataTableModule,
    InputTextModule,
    CenterModule,
    CalendarModule,
    PanelModule

  ],
  declarations: [MonitorComponent,SearchMonitorComponent],
  providers : [MonitorService,DatePipe]
})
export class MonitorModule { }
