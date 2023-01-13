import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './services/home.service';
import { Product, CreateProduct } from 'src/app/shared/models/products';
import { NgOptimizedImage } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalProductComponent } from './components/modal-product/modal-product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export default class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private homeService: HomeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.homeService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log('sub Products');
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    idProduct: number
  ): void {
    const dialogRef = this.dialog.open(ModalProductComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    this.homeService.getProducts(String(idProduct)).subscribe(product => {
      dialogRef.componentInstance.product = product;
    });
  }

  creteNewProduct() {
    const newProduct: CreateProduct = {
      title: 'New Product',
      description: 'hola',
      categoryId: 1,
      images: ['https://placeimg.com/640/480/any?random=${Math.random()}'],
      price: 1000,
    };
    this.homeService.createProduct(newProduct).subscribe(newProduct => {
      this.products.unshift(newProduct);
      console.log(newProduct);
    });
  }
}
