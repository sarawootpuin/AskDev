import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {SaleCallVisitComponent} from "./sale-call-visit.component";
import {CallVisitInqueryComponent} from "./call-visit-inquery/call-visit-inquery.component";

const routes: Route[] = [

  {path: '', component: SaleCallVisitComponent},
  {path: 'inQuery', component:  CallVisitInqueryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleCallVisitRoutingModule {
}
