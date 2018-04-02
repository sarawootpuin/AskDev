import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {AuthenComponent} from "./authen.component";
import {SigninComponent} from "./signin/signin.component";
import {PwdExpiredComponent} from "./pwd-expired/pwd-expired.component";

const routes: Route[] = [
  {path: '', component: AuthenComponent,children:[
    {path:'',redirectTo:'signin',pathMatch:'full'},
    {path: 'signin', component: SigninComponent},
    {path: 'pwd-expired', component: PwdExpiredComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenRoutingModule {
}
