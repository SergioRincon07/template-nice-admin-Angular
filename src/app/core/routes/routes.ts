import { Routes } from '@angular/router';
import { PublicRoutes, PrivateRoutes } from './public-private-routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: `/${PublicRoutes.HOME}`,
    pathMatch: 'full',
  },
  {
    path: PublicRoutes.HOME,
    loadComponent: () => import('../../pages/home/home.component'),
  },
  {
    path: PrivateRoutes.CREAR_USUARIO,
    loadComponent: () =>
      import('../../pages/crear-usuario/crear-usuario.component'),
  },
  {
    path: PrivateRoutes.ADMINISTRAR_USUARIO,
    loadComponent: () =>
      import('../../pages/administrar-usuario/administrar-usuario.component'),
  },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
  {
    path: '404',
    loadComponent: () => import('../../pages/not-found/not-found.component'),
  },
];
