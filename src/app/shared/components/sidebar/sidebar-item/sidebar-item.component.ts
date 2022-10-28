import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-item.component.html',
  styles: [
  ]
})
export class SidebarItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
