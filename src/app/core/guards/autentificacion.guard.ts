import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, switchMap, tap, of, defaultIfEmpty, filter, map } from 'rxjs';
import { UsuarioProfile } from 'src/app/shared/models/Usuario';
import { PermisosAppClean } from 'src/app/shared/models/Permisos';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';
import { PublicRoutes } from '../routes/public-private-routes';

@Injectable({
  providedIn: 'root',
})
export class AutentificacionGuard implements CanActivate {
  userProfile: UsuarioProfile | null = null;
  userPermisosApp: PermisosAppClean[] | null = null;
  appLoadData: boolean = false;
  constructor(private globalStateService: GlobalStateService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const moduloIngreso = route.data['moduloIngreso'];
    return this.globalStateService.appLoadData.pipe(
      filter(obAppLoadData => obAppLoadData === true),
      switchMap(() => this.globalStateService.userProfile$),
      tap(obUserProfile => (this.userProfile = obUserProfile)),
      switchMap(() => this.globalStateService.userPermisosApp$),
      tap(obUserPermisos => (this.userPermisosApp = obUserPermisos)),
      switchMap(() => {
        if (this.userProfile !== null && this.userPermisosApp !== null) {
          if (this.userPermisosApp.some(x => x.Link === moduloIngreso)) {
            return of(true);
          } else {
            this.router.navigate([`/${PublicRoutes.NOT_FOUND}`]);
            return of(false);
          }
        } else {
          this.router.navigate([`/${PublicRoutes.NOT_FOUND}`]);
          return of(false);
        }
      })
    );
  }
}
