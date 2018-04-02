import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppReassignComponent } from './app-reassign/app-reassign.component';
import { SearchReassignComponent } from './app-search-reassign/search-reassign.component';
import {ReassignRoutingModule} from "./reassign.routing.module";
import {ReassignComponent} from "./reassign.component";
import {
  AccordionModule, ButtonModule, CalendarModule, CodeHighlighterModule, DataTableModule, GrowlModule, InputTextModule,
  SharedModule,
  TabViewModule
} from "primeng/primeng";
import {ReassignService} from "./reassign.service";
import {CenterModule} from "../../../shared/center/center.module";


@NgModule({
  imports: [
    CommonModule,
    ReassignRoutingModule,
    AccordionModule,
    SharedModule,
    ButtonModule,
    TabViewModule,
    GrowlModule,
    CodeHighlighterModule,
    DataTableModule,
    InputTextModule,
    CalendarModule,
    CenterModule
  ],
  declarations: [
    ReassignComponent,
    AppReassignComponent,
    SearchReassignComponent,
    ],
  providers : [ReassignService]
})
export class ReassignModule { }
