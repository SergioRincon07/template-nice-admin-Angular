import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-item-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-item-profile.component.html',
  styles: [
  ]
})
export class NavbarItemProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
