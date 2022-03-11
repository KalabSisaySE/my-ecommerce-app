import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: "products/edit/:id",
    component: EditProductComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "customers",
    component: CustomersComponent
  },
  {
    path: 'customers/edit/:id',
    component: EditCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
