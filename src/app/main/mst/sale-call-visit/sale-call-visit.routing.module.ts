import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {SaleCallVisitComponent} from "./sale-call-visit.component";

const routes: Route[] = [

  {path: '', component: SaleCallVisitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleCallVisitRoutingModule {
}
