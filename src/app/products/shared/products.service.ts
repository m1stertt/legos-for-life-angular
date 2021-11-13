import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDto} from './product.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) {}

  getAll(): Observable<ProductDto[]> {
    return this._http.get<ProductDto[]>('https://localhost:5001/api/Product');
  }

  getProduct(id: number): Observable<ProductDto> {
    return this._http.get<ProductDto>('https://localhost:5001/api/Product/' + id);
  }

  delete(id: number) {
    return this._http.delete('https://localhost:5001/api/Product/' + id);
  }

  updateProduct(product: ProductDto) {
    return this._http.put('https://localhost:5001/api/Product/' + product.id, product)
  }
}
