import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../shared/models/products';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(
      'https://young-sands-07814.herokuapp.com/api/products'
    );
  }
}
