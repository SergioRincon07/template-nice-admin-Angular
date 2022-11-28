import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { SidebarItemAloneComponent } from './sidebar-item-alone/sidebar-item-alone.component';
import { SideBarManu } from '../../models/sidebar-models';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarItemComponent, SidebarItemAloneComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: [],
})
export class SidebarComponent {
  constructor() {}
  SideBarMenuProveedor: SideBarManu = {
    title: 'Proveedor',
    icon: 'bi bi-journal-text',
    items: [
      { title: 'Crear Proveedor', icon: 'bi bi-person-plus-fill' },
      { title: 'Eliminar Proveedor', icon: 'bi bi-person-x-fill' },
    ],
  };

  SideBarMenuEvaluacion: SideBarManu = {
    title: 'Evaluacion',
    icon: 'bi bi-clipboard2-check',
    items: [
      { title: 'Calificar', icon: 'bi bi-card-checklist' },
      { title: 'Valorazion', icon: 'bi bi-clipboard-data' },
    ],
  };

  SideBarMenuReportes: SideBarManu = {
    title: 'Reportes',
    icon: 'bi bi-file-earmark-text',
    items: [
      { title: 'Basico', icon: 'bi bi-file-earmark-bar-graph' },
      { title: 'General', icon: 'bi bi-file-earmark-bar-graph' },
      { title: 'Estadisticas', icon: 'bi bi-file-earmark-bar-graph' },
    ],
  };

  SideBarMenuAdministracion: SideBarManu = {
    title: 'Administracion',
    icon: 'bi bi-file-earmark-text',
    items: [{ title: 'Usuarios', icon: 'bi bi-person-video2' }],
  };
}
