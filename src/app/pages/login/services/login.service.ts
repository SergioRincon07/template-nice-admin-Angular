import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataUserAuth, Token } from 'src/app/shared/models/Login';
import { UsuarioProfile } from 'src/app/shared/models/Usuario';
import { PermisosApp, PermisosAppClean } from 'src/app/shared/models/Permisos';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';
import { tap } from 'rxjs';
import { setHttpContextOptions } from 'src/app/core/interceptor/token-intercepto-fn';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private globalStateService: GlobalStateService
  ) {}

  private urlLoginMegaApp: string = 'https://megaapp001:2404';

  setLogin(ntUser: string, password: string) {
    let url = window.location.href;
    let urlNew = url.split('A');
    return this.http.post<DataUserAuth>(
      `${this.urlLoginMegaApp}/api/IniciarSesion`,
      {
        IdAaplicaion: 49,
        NtUser: `BANCODEBOGOTA\\${ntUser}`,
        Password: password,
        Ip: '',
        Url: urlNew[0],
      },
      { context: setHttpContextOptions({ setToken: false, setWebApiProveedor: false }) }
    );
  }

  setToken() {
    let header = { 'Content-Type': 'x-www-form-urlencoded' };
    let bodyParams = {
      grant_type: 'password',
      username: 'Admin Generico',
      password: '00000000',
    };
    let body = new HttpParams({ fromObject: bodyParams });

    return this.http
      .post<Token>('/token', body, {
        headers: header,
        context: setHttpContextOptions({ setToken: false, setWebApiProveedor: true }),
      })
      .pipe(tap(responseToken => this.localStorageService.saveToken(responseToken.access_token)));
  }

  getProfile(ntUser: string) {
    return this.http
      .get<UsuarioProfile[]>(`/api/Usuario?NtUser=${ntUser}&IdArea=0&Nombre=0&Activo={0}`, {
        context: setHttpContextOptions({ setToken: true, setWebApiProveedor: true }),
      })
      .pipe(
        tap(responseProfile => {
          this.localStorageService.saveNtUser(responseProfile[0].NTuser);
          this.globalStateService.setProfile$(responseProfile[0]);
        })
      );
  }

  getPermisosApp(ntUser: string) {
    return this.http
      .get<PermisosApp[]>(
        `${this.urlLoginMegaApp}/Api/GetCleanMenu?IdAplicacion=49&NtUser=bancodebogota\\${ntUser}`,
        {
          context: setHttpContextOptions({ setToken: false, setWebApiProveedor: false }),
        }
      )
      .pipe(
        tap(responsePermisosApp => {
          this.globalStateService.setPermisosApp(convertToArrayClean(responsePermisosApp));
        })
      );
  }
}

function convertToArrayClean(arrayPermisosApp: PermisosApp[]) {
  let arrayPermisosCleanApp: PermisosAppClean[] = [];
  arrayPermisosApp.forEach(item => {
    arrayPermisosCleanApp.push({ Titulo: item.Titulo, Link: item.Link });
    if (item.Submenus.length > 0) {
      arrayPermisosCleanApp = arrayPermisosCleanApp.concat(convertToArrayClean(item.Submenus));
    }
  });
  return arrayPermisosCleanApp;
}
