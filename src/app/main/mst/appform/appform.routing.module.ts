import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {AppFormComponent} from "./appform.component";
import {AppFormInQuiryComponent} from "./appform-inquiry/appform-inquiry.component";
import {AppformReassignComponent} from "./appform-reassign/appform-reassign.component";

const routes: Route[] = [

  {path: '', component: AppFormComponent
    /*, canDeactivate:[HomeGuard]*/},
  {path: 'inquiry', component: AppFormInQuiryComponent},
  {path: 'reassign', component: AppformReassignComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]/*,
  providers: [HomeGuard]*/
})
export class AppFormRoutingModule {
}
