
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsService]
})
export class ProductListComponent implements AfterViewInit{

 selectedProduct : Product | undefined;
 products: Product[] = [
  {
  name: 'Webcam',
  price: 100
  },
  {
    name:
    'Microphone',
    price: 200
    },
    {
    name: 'Wireless keyboard',
    price: 85
    }
    ];
 @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
 ngAfterViewInit(): void {
  if (this.productDetail) {
  console.log(this.productDetail.product);
  }
  }
  onBuy() {
  window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }
    trackByProducts(index: number, name: string): string {
      return name;
      }

}
