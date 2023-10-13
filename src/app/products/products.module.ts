import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ProductViewComponent } from '../product-view/product-view.component';

import { SortPipe } from '../sort.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    FavoritesComponent,
    SortPipe,
    ProductViewComponent



  ],
  imports: [
    CommonModule,
  ],
  exports: [ProductListComponent]

})
export class ProductsModule { }
