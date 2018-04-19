import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {AppFormComponent} from "./appform.component";
import {MainGuard} from "../../main.guard";
import {ListComponent} from "./leasing/list/list.component";
import {DetailComponent} from "./leasing/detail/detail.component";

const routes: Route[] = [

  {path:'',component:AppFormComponent, canActivate: [MainGuard], canActivateChild: [MainGuard],
    children :[
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppformRoutingModule {
}
