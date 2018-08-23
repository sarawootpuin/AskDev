import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubordinateRoutingModule } from './subordinate.routing.module';
import {SubordinateComponent} from "./subordinate.component";
import {
  AccordionModule, CalendarModule, DataGridModule, DataTableModule, OrganizationChartModule, ScrollPanelModule,
  TabViewModule
} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {CenterModule} from "../../shared/center/center.module";
import {SharedModule} from "primeng/shared";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {CardModule} from "primeng/card";
import {SubordinateService} from "./subordinate.service";
import {TreeModule} from "primeng/tree";
import {HomeModule} from "../home/home.module";



@NgModule({
  imports: [
    CommonModule,
    OrganizationChartModule,
    SubordinateRoutingModule,
    FormsModule,
    TabViewModule,
    PanelModule,
    AccordionModule,
    CenterModule,
    DataTableModule,
    SharedModule,
    DataGridModule,
    CurrencyMaskModule,
    CalendarModule,
    ScrollPanelModule,
    CardModule,
    TreeModule,
    HomeModule

  ],
  declarations: [
    SubordinateComponent

  ],
  providers : [SubordinateService]
})
export class SubordinateModule { }
