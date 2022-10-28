import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-item-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-item-icon.component.html',
  styles: [],
})
export class NavbarItemIconComponent {
  @Input() BoostrapIcon: string = '';

  constructor() {}
}
