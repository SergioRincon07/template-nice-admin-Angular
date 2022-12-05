import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { SidebarItemAloneComponent } from './sidebar-item-alone/sidebar-item-alone.component';
import { SideBarManu } from '../../models/sidebar';
import {
  PrivateRoutes,
  PublicRoutes,
} from '../../../core/routes/public-private-routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    SidebarItemComponent,
    SidebarItemAloneComponent,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: [],
})
export class SidebarComponent {
  constructor() {}
  readonly HOME = PublicRoutes.HOME;
  SideBarMenuProveedor: SideBarManu = {
    title: 'Usuario',
    icon: 'bi bi-journal-text',
    items: [
      {
        title: 'Crear Usuario',
        icon: 'bi bi-person-plus-fill',
        link: PrivateRoutes.CREAR_USUARIO,
      },
      {
        title: 'Administrar Usuario',
        icon: 'bi bi-person-x-fill',
        link: PrivateRoutes.ADMINISTRAR_USUARIO,
      },
    ],
  };

  SideBarMenuEvaluacion: SideBarManu = {
    title: 'Evaluacion',
    icon: 'bi bi-clipboard2-check',
    items: [
      { title: 'Calificar', icon: 'bi bi-card-checklist', link: '#1' },
      { title: 'Valorazion', icon: 'bi bi-clipboard-data', link: '#2' },
    ],
  };

  SideBarMenuReportes: SideBarManu = {
    title: 'Reportes',
    icon: 'bi bi-file-earmark-text',
    items: [
      { title: 'Basico', icon: 'bi bi-file-earmark-bar-graph', link: '#1' },
      { title: 'General', icon: 'bi bi-file-earmark-bar-graph', link: '#2' },
      {
        title: 'Estadisticas',
        icon: 'bi bi-file-earmark-bar-graph',
        link: '#3',
      },
    ],
  };

  SideBarMenuAdministracion: SideBarManu = {
    title: 'Administracion',
    icon: 'bi bi-file-earmark-text',
    items: [{ title: 'Usuarios', icon: 'bi bi-person-video2', link: '#1' }],
  };
}
