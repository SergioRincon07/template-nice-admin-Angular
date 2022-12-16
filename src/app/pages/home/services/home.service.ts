import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CreateProduct } from '../../../shared/models/products';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  private urlProduct: string = 'https://young-sands-07814.herokuapp.com/api/products';

  getAllProducts() {
    return this.http.get<Product[]>(this.urlProduct);
  }

  getProducts(idProduct: string) {
    return this.http.get<Product>(`${this.urlProduct}/ ${idProduct}`);
  }

  createProduct(newProduct: CreateProduct) {
    return this.http.post<Product>(this.urlProduct, newProduct);
  }
}
