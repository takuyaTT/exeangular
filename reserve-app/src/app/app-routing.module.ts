import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProductModule } from './product/product.module';

const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // ルーティングモジュール読み込み
    ProductRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
