import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {SubordinateComponent} from "./subordinate.component";


const routes: Route[] = [
  {
    path: '', component: SubordinateComponent,
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubordinateRoutingModule { }
