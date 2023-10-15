
import { AfterViewInit, Component, ViewChild, OnInit,ChangeDetectorRef, OnDestroy, } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Subscription,Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit,AfterViewInit{
  private productsSub: Subscription | undefined;
  products$: Observable<Product[]> | undefined;
  private getProducts() {
    this.products$ = this.productService.getProducts();
    }



  constructor() {
    this.productService = new ProductsService();
    }


  ngOnInit(): void {
    this.getProducts();
  }

 selectedProduct : Product | undefined;



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

      ngOnDestroy(): void {
        this.productsSub?.unsubscribe();
        }

}
