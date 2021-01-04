import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: '', component: ProductListingComponent  },
  { path: ':productId', component: ProductDetailComponent  },
];

@NgModule({
  declarations: [
    // コンポーネント宣言
    ProductListingComponent,
    ProductDetailComponent,
    ProductComponent
  ],
  imports: [
    // *ngForなど利用するため
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
