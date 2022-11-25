import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from 'src/app/shared/directives/click-outside.directive';

@Component({
  selector: 'app-dropdown-sidebar-item',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './dropdown-sidebar-item.component.html',
  styles: [],
})
export class DropdownSidebarItemComponent {
  @Input() SidebarTitle!: string;
  constructor() {}

  selected = false;
  clickButton() {
    this.selected = !this.selected;
    console.log(this.selected);
  }
  clickedOutside(): void {
    this.selected = false;
  }
}
