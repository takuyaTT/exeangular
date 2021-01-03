import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListingComponent } from './product-listing/product-listing.component';



@NgModule({
  declarations: [
    // コンポーネント宣言
    ProductListingComponent,
    ProductDetailComponent
  ],
  imports: [
    // *ngForなど利用するため
    CommonModule
  ]
})
export class ProductModule { }
