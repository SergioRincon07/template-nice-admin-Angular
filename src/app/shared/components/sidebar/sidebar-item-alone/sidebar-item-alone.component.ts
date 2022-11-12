import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-item-alone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-item-alone.component.html',
  styles: [],
})
export class SidebarItemAloneComponent {
  @Input() TitelItemAlone = '';
  @Input() IconItemAlone = '';
  constructor() {}
}
