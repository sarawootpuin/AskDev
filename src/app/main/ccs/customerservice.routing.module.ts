import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomerserviceComponent} from "./customerservice.component";
import {CodeAndContractManagementComponent} from "./code-and-contract-management/code-and-contract-management.component";
import {MasterformComponent} from "./masterform/masterform.component";
import {SetFlowComponent} from "./masterform/set-flow/set-flow.component";
import {SetStageOfFlowComponent} from "./masterform/set-stage-of-flow/set-stage-of-flow.component";
import {ContactComponent} from "./code-and-contract-management/contact/contact.component";
import {ContactAndInquiryComponent} from "./code-and-contract-management/contact/contact-and-inquiry/contact-and-inquiry.component";
import {RequestchargeComponent} from "./code-and-contract-management/contact/requestcharge/requestcharge.component";
import {CustinfoComponent} from "./code-and-contract-management/contact/contact-and-inquiry/condition/custinfo/custinfo.component";
import {LegalInfoComponent} from "./code-and-contract-management/contact/contact-and-inquiry/condition/legal-info/legal-info.component";
import {ArPlComponent} from "./code-and-contract-management/contact/contact-and-inquiry/condition/ar-pl/ar-pl.component";
import {LegalPlComponent} from "./code-and-contract-management/contact/contact-and-inquiry/condition/legal-pl/legal-pl.component";
import {UpdateComponent} from "./code-and-contract-management/contact/contact-and-inquiry/condition/custinfo/collection/update/update.component";
import {ConditionComponent} from "./code-and-contract-management/contact/contact-and-inquiry/condition/condition.component";


const routes: Route[] = [
  // {path: '', redirectTo: 'ccs', pathMatch: 'full'},
  {
    path: '', component: CustomerserviceComponent, children: [
    {
      path: 'masterform', component: MasterformComponent, children: [
      {path: 'setflow', component: SetFlowComponent},
      {path: 'setstage', component: SetStageOfFlowComponent}
    ]
    },
    {path: 'condition', component: ConditionComponent},
    { path: 'custinfo', loadChildren: './code-and-contract-management/' +
    'contact/contact-and-inquiry/condition/custinfo/custinfo.module#CustinfoModule' },
    { path: 'arpl', loadChildren: './code-and-contract-management/' +
    'contact/contact-and-inquiry/condition/ar-pl/ar-pl.module#ArPlModule' }
  ]
  }

  // {path: '', component: CustomerserviceComponent, pathMatch: 'full'},
  // {
  //   path: '', component: CustomerserviceComponent, children: [
  //   {path: 'masterform', component: MasterformComponent, children:[
  //     {path: 'setflow', component: SetFlowComponent},
  //     {path: 'setstage', component: SetStageOfFlowComponent}
  //   ]},
  //   {path: 'ccm', component: CodeAndContractManagementComponent, children:[
  //     {path: 'contact', component: ContactComponent, children:[
  //       {path: 'contactandinquiry', component: ContactAndInquiryComponent, children:[
  //         {path:'', component: ConditionComponent},
  //         {path: 'custinfo', loadChildren:'./code-and-contract-management/' +
  //         'contact/contact-and-inquiry/condition/custinfo/custinfo.module#CustinfoModule'},
  //         {path: 'arpl', loadChildren:'./code-and-contract-management/' +
  //         'contact/contact-and-inquiry/condition/ar-pl/ar-pl.module#ArPlModule'}
  //       ]},
  //       // {path: 'custinfo', loadChildren:'./code-and-contract-management/' +
  //       // 'contact/contact-and-inquiry/condition/custinfo/custinfo.module#CustinfoModule'},
  //       {path: 'requestcharge', component: RequestchargeComponent}
  //     ]}
  //   ]}
  // ]
  // }


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerserviceRouting {
}
