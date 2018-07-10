/**
 * Created by tanapon.sa on 28/11/2560.
 */
import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {CustinfoComponent} from "./custinfo.component";
import {UpdateComponent} from "./collection/update/update.component";
import {AddressComponent} from "./other/address/address.component";
import {CloseAccountComponent} from "./collection/close-account/close-account.component";
import {TransferComponent} from "./collection/transfer/transfer.component";
import {TransferCustomerGuarantorComponent} from "./collection/transfer/transfer-customer-guarantor/transfer-customer-guarantor.component";

const routes: Route[] = [
  {path: '' , component: CustinfoComponent, children: [
    // {path: 'update', component: UpdateComponent},
    // {path: 'closeAccount', component: CloseAccountComponent},
    // {path: 'address', component: AddressComponent}
    // {path: 'CustomerGuarantor', component: TransferCustomerGuarantorComponent}
  ] }
  // {path: 'update', component: UpdateComponent},
  // {path: 'closeAccount', component: CloseAccountComponent},
  // {path: 'address', component: AddressComponent},
  // {path: 'transfer', component: TransferComponent, children: [
  //   {path: 'CustomerGuarantor', component: TransferCustomerGuarantorComponent}
  // ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustinfoRoutingModule {
}
