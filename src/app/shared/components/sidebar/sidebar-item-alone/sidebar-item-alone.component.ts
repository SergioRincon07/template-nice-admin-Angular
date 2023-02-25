import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-item-alone',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar-item-alone.component.html',
  styles: [],
})
export class SidebarItemAloneComponent {
  @Input() TitelItemAlone!: string;
  @Input() IconItemAlone!: string;
  @Input() SidebarLinkAlone!: string;
  constructor() {}
}
