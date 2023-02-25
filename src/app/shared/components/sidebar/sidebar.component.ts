import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { SidebarItemAloneComponent } from './sidebar-item-alone/sidebar-item-alone.component';
import { SideBarManu } from '../../models/Sidebar';
import { PrivateRoutes, PublicRoutes } from '../../../core/routes/public-private-routes';
import { RouterLink } from '@angular/router';
import { GlobalStateService } from '../../services/global-state.service';
import { switchMap, tap } from 'rxjs';
import { PermisosAppClean } from '../../models/Permisos';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarItemComponent, SidebarItemAloneComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: [],
})
export class SidebarComponent implements OnInit {
  constructor(private globalStateService: GlobalStateService) {}

  readonly HOME = PublicRoutes.HOME;
  readonly LOGIN = PublicRoutes.LOGIN;
  readonly NOT_FOUND = PublicRoutes.NOT_FOUND;

  userPermisosApp: PermisosAppClean[] | null = null;
  logeado: boolean = false;
  SideBarMenuProveedor: SideBarManu = { title: '', icon: '', items: [] };
  SideBarMenuEvaluacion: SideBarManu = { title: '', icon: '', items: [] };
  SideBarMenuReportes: SideBarManu = { title: '', icon: '', items: [] };
  SideBarMenuUsuarios: SideBarManu = { title: '', icon: '', items: [] };

  ngOnInit(): void {
    this.globalStateService.userProfile$
      .pipe(
        tap(obUserProfile => {
          if (obUserProfile !== null) {
            this.logeado = true;
          }
        }),
        switchMap(() => this.globalStateService.userPermisosApp$),
        tap(obUserPermisos => {
          this.userPermisosApp = obUserPermisos;
          if (this.userPermisosApp !== null) {
            this.SideBarMenuProveedor = {
              title: 'Proveedores',
              icon: 'bi bi-file-earmark-text',
              permiso: this.userPermisosApp.some(x => x.Link === PrivateRoutes.MODULO_PROVEEDORES),
              items: [
                {
                  title: 'Administrar Proveedores',
                  icon: 'bi bi-list-columns',
                  permiso: this.userPermisosApp.some(
                    x => x.Link === PrivateRoutes.ADMINISTRAR_PROVEEDORES
                  ),
                  link: PrivateRoutes.ADMINISTRAR_PROVEEDORES,
                },
                {
                  title: 'Crear Proveedor',
                  icon: 'bi bi-person-plus-fill',
                  permiso: this.userPermisosApp.some(x => x.Link === PrivateRoutes.CREAR_PROVEEDOR),
                  link: PrivateRoutes.CREAR_PROVEEDOR,
                },
              ],
            };

            this.SideBarMenuEvaluacion = {
              title: 'Evaluación',
              icon: 'bi bi-clipboard-check-fill',
              permiso: this.userPermisosApp.some(x => x.Link === PrivateRoutes.MODULO_EVALUACION),
              items: [
                {
                  title: 'Asignación Proveedores',
                  icon: 'bi bi-list-check',
                  permiso: this.userPermisosApp.some(
                    x => x.Link === PrivateRoutes.ASIGNACION_PROVEEDORES
                  ),
                  link: PrivateRoutes.ASIGNACION_PROVEEDORES,
                },
                {
                  title: 'Evaluaciónes Asignadas',
                  icon: 'bi bi-clipboard2-check-fill',
                  permiso: this.userPermisosApp.some(
                    x => x.Link === PrivateRoutes.EVALUACIONES_ASIGNADAS
                  ),
                  link: PrivateRoutes.EVALUACIONES_ASIGNADAS,
                },
                {
                  title: 'Evaluaciónes Enviadas',
                  icon: 'bi bi-clipboard2-check-fill',
                  // permiso: this.userPermisosApp.some(
                  //   x => x.Link === PrivateRoutes.EVALUACIONES_ENVIADAS
                  // ),
                  permiso: true,
                  link: PrivateRoutes.EVALUACIONES_ENVIADAS,
                },
              ],
            };

            this.SideBarMenuReportes = {
              title: 'Reportes',
              icon: 'bi bi-file-earmark-ruled',
              permiso: this.userPermisosApp.some(x => x.Link === PrivateRoutes.MODULO_REPORTES),
              items: [
                {
                  title: 'Basico',
                  icon: 'bi bi-file-earmark-bar-graph',
                  permiso: this.userPermisosApp.some(x => x.Link === PrivateRoutes.REPORTE_BASICO),
                  link: PrivateRoutes.REPORTE_BASICO,
                },
                {
                  title: 'General',
                  icon: 'bi bi-file-earmark-bar-graph',
                  permiso: this.userPermisosApp.some(x => x.Link === PrivateRoutes.REPORTE_GENERAL),
                  link: PrivateRoutes.REPORTE_GENERAL,
                },
                {
                  title: 'Estadisticas',
                  icon: 'bi bi-file-earmark-bar-graph',
                  permiso: this.userPermisosApp.some(
                    x => x.Link === PrivateRoutes.REPORTE_ESTADISTICAS
                  ),
                  link: PrivateRoutes.REPORTE_ESTADISTICAS,
                },
              ],
            };

            this.SideBarMenuUsuarios = {
              title: 'Usuarios',
              icon: 'bi bi-person-lines-fill',
              permiso: this.userPermisosApp.some(x => x.Link === PrivateRoutes.MODULO_USUARIOS),
              items: [
                {
                  title: 'Administrar Usuario',
                  icon: 'bi bi-person-x-fill',
                  permiso: this.userPermisosApp.some(
                    x => x.Link === PrivateRoutes.ADMINISTRAR_USUARIO
                  ),
                  link: PrivateRoutes.ADMINISTRAR_USUARIO,
                },
                {
                  title: 'Crear Usuario',
                  icon: 'bi bi-person-plus-fill',
                  permiso: this.userPermisosApp.some(x => x.Link === PrivateRoutes.CREAR_USUARIO),
                  link: PrivateRoutes.CREAR_USUARIO,
                },
              ],
            };
          }
        })
      )
      .subscribe();
  }
}
