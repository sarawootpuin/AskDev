import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {path: '',loadChildren:'./main/main.module#MainModule'},
  {path: 'authen',loadChildren:'./authen/authen.module#AuthenModule' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
