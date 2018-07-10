import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ArPlComponent} from "./ar-pl.component";


const routes: Route[] = [
  {path: '' , component: ArPlComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArPlRoutingModule {
}
