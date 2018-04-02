import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {EntityComponent} from "./entity.component";
import {EntityFormComponent} from "./entity-form/entity-form.component";
import {EntityListComponent} from "./entity-list/entity-list.component";

const routes: Route[] = [

  {
    path: '', component: EntityComponent, children: [
    {path: '', component: EntityListComponent},
    {path: 'edit/:entCode', component: EntityFormComponent},
    {path: 'new', component: EntityFormComponent}
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRoutingModule {
}
