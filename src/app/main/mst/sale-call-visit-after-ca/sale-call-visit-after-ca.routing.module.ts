import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {SaleCallVisitAfterCaComponent} from "./sale-call-visit-after-ca.component";

const routes: Route[] = [

  {path: '', component:SaleCallVisitAfterCaComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleCallVisitAfterCaRoutingModule {
}
