import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {MainComponent} from "./main.component";
import {MainGuard} from "./main.guard";
import {EntityModule} from "./mst/entity/entity.module";
//import {SubordinateComponent} from "./subordinate/subordinate.component";
//import {BlacklistComponent} from "./blacklist/blacklist.component";

const routes: Route[] = [
  {
    path: '', canActivate: [MainGuard], canActivateChild: [MainGuard],
    //canDeactivate: [MainGuard],
    component: MainComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './home/home.module#HomeModule'},
    {path: 'setup', loadChildren: './home/setup/setup.module#SetupModule'},
    {path: 'SaleCall',loadChildren:'./mst/sale-call-visit/sale-call-visit.module#SaleCallVisitModule'},
    {path: 'appForm', loadChildren:'./mst/appform/appform.module#AppformModule'},
    {path: 'ca',loadChildren:'./mst/credit-application/credit-application.module#CreditApplicationModule'},
    {path: 'blacklist',loadChildren:'./blacklist/blacklist.module#BlacklistModule'},
    {path: 'scoring', loadChildren:'./scoring/scoring.module#ScoringModule'},
    {path: 'entity', loadChildren:'./mst/entity/entity.module#EntityModule'},
    {path: 'reassign',loadChildren:'./mst/reassign/reassign.module#ReassignModule'},
    {path: 'ccs',loadChildren:'./ccs/customerservice.module#CustomerserviceModule'}

    /*{path: 'monitorSMS',loadChildren:'./mst/monitor/monitor.module#MonitorModule'}
    {path: 'subordinate', component: SubordinateComponent},
    {path: 'IncompleteDoc',loadChildren:'./incomplete-doc/incomplete-doc.module#IncompleteDocModule'},
    {path: 'RegisDriectCredit',loadChildren:'./regis-direct-credit/reg-direct-cr.module#RegDirectCrModule'},
    */
  ]
  },
  {path: 'newEntity', loadChildren:'./mst/entity/entity.module#EntityModule'},
  {path: 'editEntity', loadChildren:'./mst/entity/entity.module#EntityModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
