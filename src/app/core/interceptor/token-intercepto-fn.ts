import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpContext,
  HttpContextToken,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { of, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { PublicRoutes } from '../routes/public-private-routes';

// CHECK_TOKEN_URL -> Parámetro para validar si enviar el token de autentificación en la solicitud
const CHECK_TOKEN_URL = new HttpContextToken<boolean>(() => false);
// CHECK_WEB_API_PROVEDOR_URL -> Parámetro para validar si va a enviar una solicitud a WebApiProveedores
const CHECK_WEB_API_PROVEDOR_URL = new HttpContextToken<boolean>(() => false);

// setHttpContextOptions -> Funcion para cambiar los contextos segun se requiera
export function setHttpContextOptions(options: { setToken: boolean; setWebApiProveedor: boolean }) {
  const context = new HttpContext();
  if (options.setToken) {
    context.set(CHECK_TOKEN_URL, true);
  }
  if (options.setWebApiProveedor) {
    context.set(CHECK_WEB_API_PROVEDOR_URL, true);
  }
  return context;
}

export const TokenTnterceptoFn: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  if (request.context.get(CHECK_WEB_API_PROVEDOR_URL)) {
    // Se tienen 3 ambientes Dev, QA y Prod, como el servidor del Front esta alojado en la misma
    // ubicacion que el Back es posible optener la urlOrigin con window.location.origin
    const urlOrigin = environment.production
      ? window.location.origin + environment.urlWebApiProveedores
      : environment.urlWebApiProveedores;

    if (request.context.get(CHECK_TOKEN_URL)) {
      const localStorageService = new LocalStorageService();
      const token = localStorageService.getToken();
      const router = inject(Router);
      if (token) {
        const modifieRequest = request.clone({
          url: urlOrigin + request.url,
          headers: request.headers.set('Authorization', `Bearer ${token}`),
        });
        return next(modifieRequest).pipe(
          catchError((error: HttpResponse<unknown>) => {
            // Si el Token expiro se borra el localStorage y se Redirije al Home
            if (error.status === 401) {
              localStorageService.crearLocalStorage();
              router.navigate([`/${PublicRoutes.HOME}`]).then(() => {
                window.location.reload();
              });
            }
            return of(error);
          })
        );
      }
      return next(request);
    } else {
      const modifieRequest = request.clone({
        url: urlOrigin + request.url,
      });
      return next(modifieRequest);
    }
  }
  return next(request);
};
