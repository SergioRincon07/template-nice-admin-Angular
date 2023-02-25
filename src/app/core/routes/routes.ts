import { Routes } from '@angular/router';
import { PublicRoutes, PrivateRoutes } from './public-private-routes';
import { AutentificacionGuard } from '../guards/autentificacion.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: `/${PublicRoutes.HOME}`,
    pathMatch: 'full',
  },
  {
    path: PublicRoutes.HOME,
    loadComponent: () => import('../../pages/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: PublicRoutes.LOGIN,
    loadComponent: () => import('../../pages/login/login.component').then(c => c.LoginComponent),
  },
  // MODULO_PROVEEDORES ------------------------------------------------------------------------
  {
    path: PrivateRoutes.ADMINISTRAR_PROVEEDORES,
    loadComponent: () =>
      import('../../pages/administrar-proveedores/administrar-proveedores.component').then(
        c => c.AdministrarProveedoresComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.ADMINISTRAR_PROVEEDORES },
  },
  {
    path: PrivateRoutes.AGREGAR_DOCUMENTOS,
    loadComponent: () =>
      import('../../pages/agregar-documentos/agregar-documentos.component').then(
        c => c.AgregarDocumentosComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.REPORTE_GENERAL },
  },
  {
    path: `${PrivateRoutes.EDITAR_PROVEEDOR}/:idProveedor`,
    loadComponent: () =>
      import('../../pages/editar-proveedor/editar-proveedor.component').then(
        c => c.EditarProveedorComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.EDITAR_PROVEEDOR },
  },
  {
    path: PrivateRoutes.HISTORICO_CALIFICACIONES,
    loadComponent: () =>
      import('../../pages/historico-calificaciones/historico-calificaciones.component').then(
        c => c.HistoricoCalificacionesComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.HISTORICO_CALIFICACIONES },
  },
  {
    path: PrivateRoutes.REVISAR_PROVEEDOR,
    loadComponent: () =>
      import('../../pages/revisar-proveedor/revisar-proveedor.component').then(
        c => c.RevisarProveedorComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.REVISAR_PROVEEDOR },
  },
  {
    path: PrivateRoutes.CREAR_PROVEEDOR,
    loadComponent: () =>
      import('../../pages/crear-proveedor/crear-proveedor.component').then(
        c => c.CrearProveedorComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.CREAR_PROVEEDOR },
  },
  // MODULO_EVALUACION -----------------------------------------------------------------------
  {
    path: `${PrivateRoutes.CALIFICACION_PROVEEDORE}/:idAsignacionEvaluacion`,
    loadComponent: () =>
      import('../../pages/calificacion-proveedor/calificacion-proveedor.component').then(
        c => c.CalificacionProveedorComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.CALIFICACION_PROVEEDORE },
  },
  {
    path: PrivateRoutes.ASIGNACION_PROVEEDORES,
    loadComponent: () =>
      import('../../pages/asignacion-proveedores/asignacion-proveedores.component').then(
        c => c.AsignacionProveedoresComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.ASIGNACION_PROVEEDORES },
  },
  {
    path: PrivateRoutes.EVALUACIONES_ASIGNADAS,
    loadComponent: () =>
      import('../../pages/evaluaciones-asignadas/evaluaciones-asignadas.component').then(
        c => c.EvaluacionesAsignadasComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.EVALUACIONES_ASIGNADAS },
  },
  {
    path: PrivateRoutes.EVALUACIONES_ENVIADAS,
    loadComponent: () =>
      import('../../pages/evaluaciones-enviadas/evaluaciones-enviadas.component').then(
        c => c.EvaluacionesEnviadasComponent
      ),
    // canActivate: [AutentificacionGuard],
    // data: { moduloIngreso: PrivateRoutes.EVALUACIONES_ASIGNADAS },
  },
  // MODULO_REPORTES ---------------------------------------------------------------------------
  {
    path: PrivateRoutes.REPORTE_BASICO,
    loadComponent: () =>
      import('../../pages/reporte-basico/reporte-basico.component').then(
        c => c.ReporteBasicoComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.REPORTE_BASICO },
  },
  {
    path: PrivateRoutes.REPORTE_GENERAL,
    loadComponent: () =>
      import('../../pages/reporte-general/reporte-general.component').then(
        c => c.ReporteGeneralComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.REPORTE_GENERAL },
  },
  {
    path: PrivateRoutes.REPORTE_ESTADISTICAS,
    loadComponent: () =>
      import('../../pages/reporte-estadisticas/reporte-estadisticas.component').then(
        c => c.ReporteEstadisticasComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.REPORTE_ESTADISTICAS },
  },
  // MODULO_USUARIOS --------------------------------------------------------------------
  {
    path: PrivateRoutes.CREAR_USUARIO,
    loadComponent: () =>
      import('../../pages/crear-usuario/crear-usuario.component').then(
        c => c.CrearUsuarioComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.CREAR_USUARIO },
  },
  {
    path: PrivateRoutes.ADMINISTRAR_USUARIO,
    loadComponent: () =>
      import('../../pages/administrar-usuario/administrar-usuario.component').then(
        c => c.AdministrarUsuarioComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.ADMINISTRAR_USUARIO },
  },
  {
    path: PrivateRoutes.PERFIL_USUARIO,
    loadComponent: () =>
      import('../../pages/perfil-usuario/perfil-usuario.component').then(
        c => c.PerfilUsuarioComponent
      ),
    canActivate: [AutentificacionGuard],
    data: { moduloIngreso: PrivateRoutes.PERFIL_USUARIO },
  },
  // ########## --Esta Seccion debe ir de Ultimas SIEMPRE-- ##########
  { path: '**', redirectTo: `/${PublicRoutes.NOT_FOUND}`, pathMatch: 'full' },
  {
    path: PublicRoutes.NOT_FOUND,
    loadComponent: () =>
      import('../../pages/not-found/not-found.component').then(c => c.NotFoundComponent),
  },
  // ########## ########## ########## ########## ########## ##########
];
