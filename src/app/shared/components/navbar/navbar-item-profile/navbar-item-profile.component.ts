import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownNavItemProfileComponent } from '../../ui/dropdown/dropdown-nav-item-profile/dropdown-nav-item-profile.component';
import { ClickOutsideDirective } from 'src/app/shared/directives/click-outside.directive';
import { UsuarioProfile } from 'src/app/shared/models/Usuario';

@Component({
  selector: 'app-navbar-item-profile',
  standalone: true,
  imports: [CommonModule, DropdownNavItemProfileComponent, ClickOutsideDirective],
  templateUrl: './navbar-item-profile.component.html',
  styles: [],
})
export class NavbarItemProfileComponent {
  showDropdwon = false;
  @Input() userProfile!: UsuarioProfile | null;
  clickButton() {
    this.showDropdwon = !this.showDropdwon;
  }
  clickedOutside(): void {
    this.showDropdwon = false;
  }

  constructor() {}
}
