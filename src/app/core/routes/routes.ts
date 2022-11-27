import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../../pages/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'crearusuario',
    loadComponent: () =>
      import('../../pages/crear-usuario/crear-usuario.component').then(
        c => c.CrearUsuarioComponent
      ),
  },
  {
    path: 'administrarusuario',
    loadComponent: () =>
      import(
        '../../pages/administrar-usuario/administrar-usuario.component'
      ).then(c => c.AdministrarUsuarioComponent),
  },
];
