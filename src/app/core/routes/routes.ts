import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('../../pages/home/home.component'),
  },
  {
    path: 'crearusuario',
    loadComponent: () =>
      import('../../pages/crear-usuario/crear-usuario.component'),
  },
  {
    path: 'administrarusuario',
    loadComponent: () =>
      import('../../pages/administrar-usuario/administrar-usuario.component'),
  },
];
