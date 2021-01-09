import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products :any
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();    

    const productObservable = this.productService.getProducts();

    productObservable.subscribe(
      (data)=>{
        this.products = data;
      },
      (err)=>{
        console.log("ERROR")
      }
      // completeは不要
      //()=>{
        //console.log("COMP")
      //}
    );
  }
    /*
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

      console.log('just before subscribe');
      observable.subscribe({
        next(x) { console.log('got value ' + x); },
        error(err) { console.error('something wrong occurred: ' + err); },
        complete() { console.log('done'); }
      });
      console.log('just after subscribe');
  }
  */

}
