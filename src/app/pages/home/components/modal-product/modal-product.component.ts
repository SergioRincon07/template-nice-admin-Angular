import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import HomeComponent from '../../home.component';

@Component({
  selector: 'app-modal-product',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './modal-product.component.html',
  styles: [],
})
export class ModalProductComponent {
  constructor(public dialogRef: MatDialogRef<HomeComponent>) {}
}
