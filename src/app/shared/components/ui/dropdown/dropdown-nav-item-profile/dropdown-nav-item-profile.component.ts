import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioProfile } from 'src/app/shared/models/Usuario';
import { Router } from '@angular/router';
import { PublicRoutes, PrivateRoutes } from 'src/app/core/routes/public-private-routes';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-dropdown-nav-item-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-nav-item-profile.component.html',
  styles: [],
})
export class DropdownNavItemProfileComponent {
  readonly HOME = PublicRoutes.HOME;
  readonly PERFIL_USUARIO = PrivateRoutes.PERFIL_USUARIO;
  @Input() userProfile!: UsuarioProfile | null;
  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  cerrarSesion() {
    this.localStorageService.crearLocalStorage();
    this.router.navigate([`/${this.HOME}`]).then(() => {
      window.location.reload();
    });
  }

  viewProfile() {
    this.router.navigate([`/${this.PERFIL_USUARIO}`]);
  }
}
