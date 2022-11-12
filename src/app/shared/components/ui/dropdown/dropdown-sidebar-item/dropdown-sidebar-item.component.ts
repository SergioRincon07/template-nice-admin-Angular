import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarManuItem } from '../dropdown-model';

@Component({
  selector: 'app-dropdown-sidebar-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-sidebar-item.component.html',
  styles: [],
})
export class DropdownSidebarItemComponent {
  @Input() SideBarManuItem!: SideBarManuItem[];
  constructor() {}
}
