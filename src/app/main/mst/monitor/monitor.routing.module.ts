import {Route, RouterModule} from "@angular/router";
import {MonitorComponent} from "./monitor.component";
import {NgModule} from "@angular/core";
/**
 * Created by pongsatorn.an on 16/10/2560.
 */

const routes: Route[] = [

  { path: '', component: MonitorComponent  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule {

}
