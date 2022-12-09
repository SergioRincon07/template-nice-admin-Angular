import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './services/home.service';
import { Product } from 'src/app/shared/models/products';
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
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalProductComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
