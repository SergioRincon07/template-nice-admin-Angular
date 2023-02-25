import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from 'src/app/shared/models/Proveedor';
import { setHttpContextOptions } from 'src/app/core/interceptor/token-intercepto-fn';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getProveedores() {
    return this.http.get<Proveedor[]>('/api/Administracion/0?name=0&state=0', {
      context: setHttpContextOptions({ setToken: true, setWebApiProveedor: true }),
    });
  }
}
