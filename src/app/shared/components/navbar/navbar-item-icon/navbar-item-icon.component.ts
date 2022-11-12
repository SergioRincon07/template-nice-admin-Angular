import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownNavItemIconComponent } from '../../ui/dropdown/dropdown-nav-item-icon/dropdown-nav-item-icon.component';
import { ClickOutsideDirective } from 'src/app/shared/directives/click-outside.directive';

@Component({
  selector: 'app-navbar-item-icon',
  standalone: true,
  imports: [CommonModule, DropdownNavItemIconComponent, ClickOutsideDirective],
  templateUrl: './navbar-item-icon.component.html',
  styles: [],
})
export class NavbarItemIconComponent {
  @Input() BoostrapIcon: string = '';
  showDropdwon = false;
  clickButton() {
    this.showDropdwon = !this.showDropdwon;
  }
  clickedOutside(): void {
    this.showDropdwon = false;
  }

  constructor() {}
}
