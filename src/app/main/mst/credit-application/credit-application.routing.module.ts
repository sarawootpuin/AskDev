import {CreditApplicationComponent} from "./credit-application.component";
import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CaInqueryComponent} from "./ca-inquery/ca-inquery.component";
import {CaUseCreditlineComponent} from "./ca-use-creditline/ca-use-creditline.component";
import {CaSearchAmendComponent} from "./ca-search-amend/ca-search-amend.component";
const routes: Route[] = [
  {
    path: '', component: CreditApplicationComponent
  },
  {
    path: 'inQuery', component: CaInqueryComponent
  },
  {
    path: 'useCreditline', component: CaUseCreditlineComponent
  },
  {
    path: 'amend', component: CaSearchAmendComponent
  },
  { path: 'reviseAttachSheet', component: CaSearchAmendComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditApplicationRoutingModule {
}
