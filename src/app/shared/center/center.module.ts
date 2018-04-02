import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyCurrencyDirective} from "./my-currency.directive";
import {MyCurrencyPipe} from "./my-currency.pipe";
import {InputNumberDirective} from "./input-number.directive";
import {AlertDialogComponent} from './alert-dialog/alert-dialog.component';
import {ActionButtonFormComponent} from './action-button-form/action-button-form.component';
import {CustomButtonComponent} from './custom-button/custom-button.component';
import {ActionButtonDownloadComponent} from "./action-button-download/action-button-download.component";
import {SideTabComponent} from "./side-tab/side-tab.component";
import {SideTabLevelComponent} from "./side-tab/side-tab-level/side-tab-level.component";
import {SideTabPanelComponent} from './side-tab/side-tab-panel/side-tab-panel.component';
import {SideTabContentComponent} from "./side-tab/side-tab-content/side-tab-content.component";
import {SideTabMainComponent} from './side-tab/side-tab-main/side-tab-main.component';
import {CustomProgressBarComponent} from "./custom-progress-bar/custom-progress-bar.component";
import {CustomBottonIconComponent} from "./custom-botton-icon/custom-botton-icon.component";
import {ActionDialogComponent} from './action-dialog/action-dialog.component';
import {ActionLockScreenComponent} from './action-lock-screen/action-lock-screen.component';
import {ButtonModule, DataTableModule, DialogModule, SharedModule, TabViewModule} from "primeng/primeng";
import {SearchUnComponent} from "./search-un/search-un.component";
import {ActionReadExcelComponent} from './action-read-excel/action-read-excel.component';
import {DateUtils} from "./utils/date-utils";
import { ActionShowImageGalleryComponent } from './action-show-image-gallery/action-show-image-gallery.component';
import {ImageServices} from "./action-show-image-gallery/action-show-images-gallery.services";
import {ProcessProgressComponent} from "./process-progress/process-progress.component";

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    TabViewModule
  ],
  declarations: [
    MyCurrencyDirective
    , InputNumberDirective,
    MyCurrencyPipe,
    AlertDialogComponent,
    ActionButtonFormComponent,
    CustomButtonComponent,
    ActionButtonDownloadComponent,
    SideTabComponent,
    SideTabLevelComponent,
    SideTabPanelComponent,
    SideTabContentComponent,
    SideTabMainComponent,
    CustomProgressBarComponent,
    CustomBottonIconComponent,
    ActionDialogComponent,
    ActionLockScreenComponent,
    SearchUnComponent,
    ActionReadExcelComponent,
    ActionShowImageGalleryComponent,
    ProcessProgressComponent
  ],
  providers: [MyCurrencyPipe, DateUtils,ImageServices],
  exports: [MyCurrencyDirective, InputNumberDirective,
    MyCurrencyPipe, AlertDialogComponent, ActionButtonFormComponent, ActionButtonDownloadComponent,
    CustomButtonComponent, SideTabComponent, SideTabLevelComponent, SideTabPanelComponent, SideTabContentComponent, SideTabMainComponent,
    CustomProgressBarComponent, CustomBottonIconComponent, ActionDialogComponent, ActionLockScreenComponent, SearchUnComponent,
    ActionReadExcelComponent,ActionShowImageGalleryComponent,ProcessProgressComponent]
})
export class CenterModule {
}
