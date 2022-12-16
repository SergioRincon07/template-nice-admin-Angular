import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import HomeComponent from '../../home.component';
import { Product } from '../../../../shared/models/products';

@Component({
  selector: 'app-modal-product',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css'],
})
export class ModalProductComponent {
  @Input() product!: Product;
  constructor(public dialogRef: MatDialogRef<HomeComponent>) {}
}
