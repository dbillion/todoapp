import { Component,Input, OnInit } from '@angular/core';
import { ProductViewService } from '../product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  providers: [ProductViewService]
})


export class ProductViewComponent implements OnInit{
  constructor(private productviewService: ProductViewService) { }
  name = '';
  ngOnInit(): void {
    const product = this.productviewService.getProduct(this.id);
    if (product) {
    this.name = product.name;
    }
  }
  @Input() id = -1;
}
