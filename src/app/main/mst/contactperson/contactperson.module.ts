import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CenterModule} from "../../../shared/center/center.module";
import {FormsModule} from "@angular/forms";
import {DataTableModule, PanelModule, TabViewModule} from "primeng/primeng";
import {ContactpersonComponent} from "./contactperson.component";
import {ContactAddComponent} from "./contact-add/contact-add.component";
import {ContactSearchComponent} from "./contact-search/contact-search.component";
import {ContactService} from "./contactperson.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CenterModule,TabViewModule,DataTableModule,PanelModule
  ],
  declarations: [ContactpersonComponent,ContactSearchComponent,ContactAddComponent],
  providers: [],
  exports: [ContactpersonComponent]
})
export class ContactpersonModule { }
