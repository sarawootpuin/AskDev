import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ReassignComponent} from "./reassign.component";
import {AppReassignComponent} from "./app-reassign/app-reassign.component";
import {SearchReassignComponent} from "./app-search-reassign/search-reassign.component";
/**
 * Created by pongsatorn.an on 29/09/2560.
 */


const routes: Route[] = [

  {path: '', component: ReassignComponent
            ,children:[
                { path : '' , component : SearchReassignComponent },
                { path: 'ListWork',component: AppReassignComponent }
             ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReassignRoutingModule {

}
