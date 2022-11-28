import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../ui/logo/logo.component';
import { NavbarItemIconComponent } from './navbar-item-icon/navbar-item-icon.component';
import { NavbarItemProfileComponent } from './navbar-item-profile/navbar-item-profile.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    NavbarItemIconComponent,
    NavbarItemProfileComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: [],
})
export class NavbarComponent {
  constructor() {}
}
