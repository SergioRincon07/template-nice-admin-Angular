import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSidebarComponent } from '../../ui/dropdown/dropdown-sidebar/dropdown-sidebar.component';
import { SideBarManu } from '../sidebar-models';
import { ClickOutsideDirective } from 'src/app/shared/directives/click-outside.directive';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule, DropdownSidebarComponent, ClickOutsideDirective],
  templateUrl: './sidebar-item.component.html',
  styles: [],
})
export class SidebarItemComponent {
  @Input() SideBarManu!: SideBarManu;
  constructor() {}

  showDropdwon = false;
  clickButton() {
    this.showDropdwon = !this.showDropdwon;
  }
  clickedOutside(): void {
    this.showDropdwon = false;
  }
}
