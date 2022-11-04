import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownNavItemProfileComponent } from '../../ui/dropdown/dropdown-nav-item-profile/dropdown-nav-item-profile.component';

@Component({
  selector: 'app-navbar-item-profile',
  standalone: true,
  imports: [CommonModule, DropdownNavItemProfileComponent],
  templateUrl: './navbar-item-profile.component.html',
  styles: [],
})
export class NavbarItemProfileComponent {
  wasInside = false;
  showDropdwon = false;
  clickButton() {
    this.wasInside = true;
    this.showDropdwon = !this.showDropdwon;
    console.log('inside');
  }

  @HostListener('click')
  clickInside() {
    if (this.showDropdwon == true) {
      this.showDropdwon = true;
    }
    this.wasInside = true;
    console.log('hijo inside');
  }

  @HostListener('document:click')
  clickOut() {
    if (!this.wasInside) {
      this.showDropdwon = false;
      console.log('Outside');
    }
    this.wasInside = false;
  }

  constructor() {}
}
