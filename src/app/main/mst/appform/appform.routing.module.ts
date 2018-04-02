import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {AppFormComponent} from "./appform.component";
import {MainGuard} from "../../main.guard";
import {ListComponent} from "./leasing/list/list.component";
import {DetailComponent} from "./leasing/detail/detail.component";

const routes: Route[] = [

  {path:'',component:AppFormComponent, canActivate: [MainGuard], canActivateChild: [MainGuard],
    children :[
      //{path : 'pricing',component: PricingComponent, canActivate: [MainGuard], canActivateChild: [MainGuard]}
    ]
  },
  {path:'list',component:ListComponent},
  {path:'detail',component:DetailComponent},
  /*path: '', canActivate: [MainGuard], canActivateChild: [MainGuard],
    canDeactivate: [MainGuard],
    component: AppFormComponent, children: [
    {path: 'appform', component: AppFormComponent},*/


    /*path: '', canActivate: [MainGuard], canActivateChild: [MainGuard],
    {path: 'appform', component: AppFormComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard]},
    children : [
      {path: 'loans', component: LoansComponent, canActivate: [AuthGuard], canActivateChild:[AuthGuard]},
      {path: 'pricing', component: PricingComponent, canActivate: [AuthGuard], canActivateChild:[AuthGuard]},
      {path: 'buyer', component: BuyerComponent, canActivate: [AuthGuard], canActivateChild:[AuthGuard]},
      {path: 'collateral', component: CollateralComponent, canActivate: [AuthGuard], canActivateChild:[AuthGuard]},
      {path: 'leasing', component: LeasingComponent, canActivate: [AuthGuard], canActivateChild:[AuthGuard],
        children: [
          {path: 'fix', component: FixComponent, canActivate: [AuthGuard], canActivateChild:[AuthGuard]},
          {path: 'float', component: FloatComponent, canActivate: [AuthGuard], canActivateChild:[AuthGuard]}
        ]}
    ]},
  ]*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppformRoutingModule {
}
