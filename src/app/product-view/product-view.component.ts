import { Component,Input, OnInit, OnDestroy, } from '@angular/core';
import { ProductViewService } from '../product-view.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  providers: [ProductViewService]
})


export class ProductViewComponent implements OnInit{
  private productSub = new Subject<void>();

  constructor(private productviewService: ProductViewService) { }

  // private getProduct() {
  //   this.productviewService.getProduct(this.id).subscribe(product => {
  //   if (product) {
  //   this.name = product.name;
  //   }
  //   });
  //   }


    private getProduct() {
      this.productviewService.getProduct(this.id).pipe(
      takeUntil(this.productSub)
      ).subscribe(product => {
        if (product) {
        this.name = product.name;
        }
        });
        }

  name = '';
  ngOnInit(): void {
    this.getProduct();
  }
  @Input() id = -1;


  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
    }

  }
