import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { ProductHostDirective } from './product-host.directive';
import { KeyLoggerComponent } from './key-logger/key-logger.component';



@NgModule({
  declarations: [
    AppComponent,
    CopyrightDirective,
    NumericDirective,
    ProductHostDirective,
    KeyLoggerComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
