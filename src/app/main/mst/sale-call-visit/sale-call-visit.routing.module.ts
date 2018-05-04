import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {SaleCallVisitComponent} from "./sale-call-visit.component";
import {CallVisitInqueryComponent} from "./call-visit-inquery/call-visit-inquery.component";
import {CallVisitCrossExpenseComponent} from "./call-visit-cross-expense/call-visit-cross-expense.component";

const routes: Route[] = [

  {path: '', component: SaleCallVisitComponent},
  {path: 'inQuery', component:  CallVisitInqueryComponent},
  {path: 'crossExpense', component:  CallVisitCrossExpenseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleCallVisitRoutingModule {
}
