import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './services/home.service';
import { Product } from 'src/app/shared/models/products';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export default class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private homeService: HomeService) {
    console.log(this.products);
  }

  ngOnInit(): void {
    this.homeService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }
}
