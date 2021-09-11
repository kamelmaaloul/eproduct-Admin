import { ProductbycategoryComponent } from './productbycategory/productbycategory.component';
import { SigninformComponent } from './signinform/signinform.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BodyComponent } from './body/body.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { AddadminComponent } from './addadmin/addadmin.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products',component: BodyComponent },
  {path:'signin',component: SigninformComponent},
  {path:'admins',component: AdminsComponent},
  {path:'admins/addadmin',component: AddadminComponent},
  { path: 'products/:id',component: ProductdetailsComponent},
  { path: 'product/:category',component: ProductbycategoryComponent},

  {path:"cart",component:CartComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
