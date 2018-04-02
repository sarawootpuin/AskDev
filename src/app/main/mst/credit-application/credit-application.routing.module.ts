import {CreditApplicationComponent} from "./credit-application.component";
import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
const routes: Route[] = [
  {
    path: '', component: CreditApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditApplicationRoutingModule {
}
