
import { AfterViewInit, Component, ViewChild, OnInit,ChangeDetectorRef } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit,AfterViewInit{
  constructor() {
    this.productService = new ProductsService();
    }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
 selectedProduct : Product | undefined;
 products: Product[] = [ ];
 @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
 private productService: ProductsService;
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
