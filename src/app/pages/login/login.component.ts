import { Component } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../../shared/components/ui/logo/logo.component';
import { LoginService } from './services/login.service';
import { DataUserAuth, Token } from 'src/app/shared/models/Login';
import { UsuarioProfile } from 'src/app/shared/models/Usuario';
import { ModalInfoComponent } from '../../shared/components/ui/modal/modal-info/modal-info.component';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PublicRoutes } from 'src/app/core/routes/public-private-routes';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LogoComponent,
    MatDialogModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent {
  readonly HOME = PublicRoutes.HOME;
  readonly LOGIN = PublicRoutes.LOGIN;
  apiLoading = false;
  dataUserAuth!: DataUserAuth;
  token!: Token;
  usuarioProfile!: UsuarioProfile;
  formLogin;
  showPassword: boolean = false;

  constructor(
    private loginServices: LoginService,
    private globalStateService: GlobalStateService,
    public dialog: MatDialog,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formLogin = this.formBuilder.group({
      ntUser: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Evitar Callback Hell in Angular
  // https://pawan-kumawat.medium.com/avoid-callback-hell-in-angular-code-3537890034b
  login(): void {
    if (this.formLogin.valid) {
      const { ntUser, password } = this.formLogin.value;
      this.apiLoading = true;
      this.loginServices
        .setLogin(String(ntUser), String(password))
        .pipe(
          tap((responseLogin: DataUserAuth) => (this.dataUserAuth = responseLogin)),
          switchMap(() => this.loginServices.setToken()),
          tap((responseToken: Token) => {
            this.token = responseToken;
            if (this.dataUserAuth.Habilitado === false) {
              this.openDialog('Su usuario no tiene acceso en esta aplicacion');
              throw new Error();
            }
          }),
          switchMap(() => this.loginServices.getProfile(String(ntUser))),
          tap(
            (responseGetProfile: UsuarioProfile[]) => (this.usuarioProfile = responseGetProfile[0])
          ),
          switchMap(() => this.loginServices.getPermisosApp(String(ntUser)))
        )
        .subscribe({
          next: () => {
            this.apiLoading = false;
            this.globalStateService.setAppLoadData();
            this.router.navigate([`/${this.HOME}`]);
          },
          error: (err: HttpErrorResponse) => {
            this.apiLoading = false;
            this.openDialog(`Error al consultar ${err.error.Message}`);
            // err.error.Message, err.error.MessageDetail
            // err.message
          },
        });
    }
  }

  openDialog(message: string) {
    const dialogRef = this.dialog.open(ModalInfoComponent, { width: '400px' });
    dialogRef.componentInstance.message = message;
    dialogRef.afterClosed().subscribe(() => {
      //window.location.reload();
    });
  }
}
