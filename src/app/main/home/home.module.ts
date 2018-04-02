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
  ],
  providers: [HomeService, TodoService, UserProfileService]
})
export class HomeModule {
}
