import { Component, Input, Output, EventEmitter ,ViewEncapsulation,ChangeDetectionStrategy,OnInit,OnChanges,
  SimpleChanges, } from '@angular/core';

  import { Product } from '../product'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnChanges{

    @Input() product: Product | undefined;
  @Output() bought = new EventEmitter();




  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
    const oldValue = product.previousValue.name;
    const newValue = product.currentValue.name;
    console.log('Product changed from ${oldValue} to ${newValue}');
    }
  }
  buy() {
    this.bought.emit();
    }

}
