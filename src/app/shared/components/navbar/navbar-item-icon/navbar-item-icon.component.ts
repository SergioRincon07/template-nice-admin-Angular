import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownNavItemIconComponent } from '../../ui/dropdown/dropdown-nav-item-icon/dropdown-nav-item-icon.component';

@Component({
  selector: 'app-navbar-item-icon',
  standalone: true,
  imports: [CommonModule, DropdownNavItemIconComponent],
  templateUrl: './navbar-item-icon.component.html',
  styles: [],
})
export class NavbarItemIconComponent {
  @Input() BoostrapIcon: string = '';
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
