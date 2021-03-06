
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {HomeService} from "./home.service";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CenterModule} from "../../shared/center/center.module";
import {TodoTaskComponent} from './todo/todo-task/todo-task.component';
import {TodoTaskItemComponent} from './todo/todo-task/todo-task-item/todo-task-item.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserProfileService} from "./user-profile/user-profile.service";
import {TodoListComponent} from './todo/todo-list/todo-list.component';
import {TodoComponent} from './todo/todo.component';
import {TodoService} from "./todo/todo.service";
import {ListSaleCallComponent} from './todo/todo-list/list-sale-call/list-sale-call.component';
import {DataTableModule, ScrollPanelModule, SharedModule} from 'primeng/primeng';
import {HomeRoutingModule} from "./home.routing.module";
import {ListAppFormComponent} from "./todo/todo-list/list-app-form/list-app-form.component";
import {ListVerifiedComponent} from "./todo/todo-list/list-verified/normal/list-verified.component";
import {ListVerifiedGroupComponent} from "./todo/todo-list/list-verified/group/list-verified-group.component";
import {ListCaBgplComponent} from "./todo/todo-list/list-ca-bgpl/list-ca-bgpl.component";
// import {ListRegComponent} from "./todo/todo-list/list-reg/list-reg.component";
// import {ListInsComponent} from "./todo/todo-list/list-ins/list-ins.component";
// import {ListIns38Component} from "./todo/todo-list/list-ins/list-ins38/list-ins38.component";
// import {ListIns062Component} from "./todo/todo-list/list-ins/list-ins06-2/list-ins06-2.component";
// import {ListAdminBgplComponent} from "./todo/todo-list/list-admin-bgpl/list-admin-bgpl.component";
// import {ListAdminBasicComponent} from "./todo/todo-list/list-admin-bgpl/list-admin-basic/list-admin-basic.component";
// import {ListAdminInvoiceComponent} from "./todo/todo-list/list-admin-bgpl/list-admin-invoice/list-admin-invoice.component";
// import {ListAdminWhtComponent} from "./todo/todo-list/list-admin-bgpl/list-admin-wht/list-admin-wht.component";
// import {ListAdminWithdrawChqComponent} from "./todo/todo-list/list-admin-bgpl/list-admin-withdraw-chq/list-admin-withdraw-chq.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CenterModule,
    DataTableModule,
    SharedModule,
    HomeRoutingModule,
    ScrollPanelModule
  ],
  declarations: [
    HomeComponent,
    TodoTaskComponent,
    TodoTaskItemComponent,
    UserProfileComponent,
    TodoListComponent,
    TodoComponent,
    ListSaleCallComponent,
    ListAppFormComponent,
    ListVerifiedComponent,
    ListVerifiedGroupComponent,
    ListCaBgplComponent
    // ListRegComponent,
    // ListInsComponent,
    // ListIns062Component,
    // ListIns38Component,
    // ListAdminBgplComponent,
    // ListAdminBasicComponent,
    // ListAdminInvoiceComponent,
    // ListAdminWhtComponent,
    // ListAdminWithdrawChqComponent
  ],
  providers: [HomeService, TodoService, UserProfileService],
  exports:[HomeComponent,TodoComponent]
})
export class HomeModule {
}
