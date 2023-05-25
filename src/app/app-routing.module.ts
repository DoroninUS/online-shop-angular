import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseComponent} from "./components/base/base.component";
import {ProductComponent} from "./components/product/product.component";
import {ProductAllListComponent} from "./components/product-all-list/product-all-list.component";
import {BasketComponent} from "./components/basket/basket.component";

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'products', component: ProductComponent},
  {path: 'product/:id', component: ProductAllListComponent},
  {path: 'basket', component: BasketComponent},

  {path: '**', redirectTo: '', component: BaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
