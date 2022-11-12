import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSidebarItemComponent } from '../../ui/dropdown/dropdown-sidebar-item/dropdown-sidebar-item.component';
import { SideBarManu } from '../sidebar-models';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule, DropdownSidebarItemComponent],
  templateUrl: './sidebar-item.component.html',
  styles: [],
})
export class SidebarItemComponent {
  @Input() SideBarManu!: SideBarManu;
  constructor() {}
}
