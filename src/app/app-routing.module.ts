import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountResolver } from './resolvers/account.resolver';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders/:acctno', resolve: {account: AccountResolver}, loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
	{ path: 'login', component: LoginComponent },
  { path:'**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[ 
	LoginComponent, 
	PagenotfoundComponent
]
