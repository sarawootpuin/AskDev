import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntityComponent} from "./entity.component";
import {EntityService} from "./entity.service";
import {EntityDialogComponent} from './entity-dialog/entity-dialog.component';
import {HttpClientModule} from "@angular/common/http";
import {CalendarModule, DataTableModule, PanelModule, SharedModule, TabViewModule} from 'primeng/primeng';
import {FormsModule} from "@angular/forms";
import {EntityRoutingModule} from "./entity.routing.module";
import {EntityFormComponent} from './entity-form/entity-form.component';
import {EntityListComponent} from "./entity-list/entity-list.component";
import {CenterModule} from "../../../shared/center/center.module";
import {EntityHeadComponent} from "./entity-form/entity-head/entity-head.component";
import {EntityGeneralDetailComponent} from "./entity-form/entity-general-detail/entity-general-detail.component";
import {EntityCareerSpouseComponent} from "./entity-form/entity-career-spouse/entity-career-spouse.component";
import {EntityAddressThComponent} from "./entity-form/entity-address-th/entity-address-th.component";
import {EntityAddressEnComponent} from "./entity-form/entity-address-en/entity-address-en.component";
import {EntityCardComponent} from "./entity-form/entity-card/entity-card.component";
import {EntityIndustryComponent} from "./entity-form/entity-industry/entity-industry.component";
import {EntityBankComponent} from "./entity-form/entity-bank/entity-bank.component";
import {EntityAddressDialogComponent} from "./entity-address-dialog/entity-address-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
    SharedModule,
    EntityRoutingModule,
    CenterModule,
    PanelModule,
    CalendarModule,
    TabViewModule
  ],
  declarations: [EntityComponent,
    EntityDialogComponent,
    EntityFormComponent,
    EntityListComponent,
    EntityHeadComponent,
    EntityGeneralDetailComponent,
    EntityCareerSpouseComponent,
    EntityAddressThComponent,
    EntityAddressEnComponent,
    EntityCardComponent,
    EntityBankComponent,
    EntityIndustryComponent,
    EntityAddressDialogComponent
  ],
  providers: [EntityService],
  exports: [EntityDialogComponent]
})
export class EntityModule {
}
