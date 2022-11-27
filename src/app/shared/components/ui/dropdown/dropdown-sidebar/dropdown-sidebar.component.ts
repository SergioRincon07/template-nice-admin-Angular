import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarManuItem } from '../../../../models/sidebar-models';
import { DropdownSidebarItemComponent } from '../dropdown-sidebar-item/dropdown-sidebar-item.component';

@Component({
  selector: 'app-dropdown-sidebar',
  standalone: true,
  imports: [CommonModule, DropdownSidebarItemComponent],
  templateUrl: './dropdown-sidebar.component.html',
  styles: [],
})
export class DropdownSidebarComponent {
  @Input() SideBarManuItem!: SideBarManuItem[];
  constructor() {}
}
