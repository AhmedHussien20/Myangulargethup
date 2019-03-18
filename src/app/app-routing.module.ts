import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { MyorderComponent } from './myorder/myorder.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';

const routes: Routes = 
[
  {path:'products',component:ProductComponent},
  {path:'myorder',component:MyorderComponent},
  {path:'admin/orders',component:AdminOrdersComponent},
  {path:'admin/product',component:AdminProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
