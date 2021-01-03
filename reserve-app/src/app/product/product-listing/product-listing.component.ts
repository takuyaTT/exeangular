import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products = products;
  
  constructor() { }

  ngOnInit(): void {
  }

}
