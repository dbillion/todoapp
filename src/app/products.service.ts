import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of ,switchMap} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private products = [
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


    getProducts(): Observable<Product[]> {
      return of(this.products);
      }

  

}
