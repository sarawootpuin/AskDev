/**
 * Created by piradee.bu on 15/08/2560.
 */
import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {VerificationDetailComponent} from "./verification-detail/verification-detail.component";
import {MainGuard} from "../main.guard";
import {mainTabVerificationDetailComponent} from "./verification-detail/mainTab-verification-detail/mainTab-verification-detail.component";
import {TodoVerifierComponent} from "./verification-detail/todo-verifier/todo-verifier.component";
import {QuestiontabsVerificationDetailComponent} from "./verification-detail/questiontabs-verification-detail/questiontabs-verification-detail.component";
import {ScoringEnquiryComponent} from "./verification-detail/scoring-enquiry/scoring-enquiry.component";
import {ScrRetryToReverifyComponent} from "./scr-retry-to-reverify/scr-retry-to-reverify.component";
import {ScrChangeMktNameComponent} from "./scr-change-mkt-name/scr-change-mkt-name.component";
import {ScrChangeDepartmentComponent} from "./scr-change-department/scr-change-department.component";


const routes: Route[] = [

  {
    path: '', component: VerificationDetailComponent, children: [
    {path: '', redirectTo: 'verify-detail', pathMatch: 'full'},
    {path: 'verify-detail', component: mainTabVerificationDetailComponent},
    {path: 'question', component: QuestiontabsVerificationDetailComponent}
  ]
  },
  {path: 'todo', component: TodoVerifierComponent},
  {path: 'enquiry', component: ScoringEnquiryComponent},
  {path: 'reverify', component: ScrRetryToReverifyComponent},
  {path: 'change-mkt-name', component: ScrChangeMktNameComponent},
  {path: 'change-department', component: ScrChangeDepartmentComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoringRoutingModule {
}
