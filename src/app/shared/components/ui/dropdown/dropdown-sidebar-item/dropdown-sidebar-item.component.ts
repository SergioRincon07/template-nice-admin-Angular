import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from 'src/app/shared/directives/click-outside.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dropdown-sidebar-item',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective, RouterModule],
  templateUrl: './dropdown-sidebar-item.component.html',
  styles: [],
})
export class DropdownSidebarItemComponent {
  @Input() SidebarTitle!: string;
  @Input() SidebarLink!: string;
  constructor() {}

  selected = false;
  clickButton() {
    this.selected = !this.selected;
  }
  clickedOutside(): void {
    this.selected = false;
  }
}
