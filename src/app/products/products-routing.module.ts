import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductCreateComponent} from "./product-create/product-create.component";

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'create', component: ProductCreateComponent },
  {path: ':id', component: ProductDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
