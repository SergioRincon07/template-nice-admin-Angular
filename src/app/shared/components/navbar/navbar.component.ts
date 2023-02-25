import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../ui/logo/logo.component';
import { NavbarItemIconComponent } from './navbar-item-icon/navbar-item-icon.component';
import { NavbarItemProfileComponent } from './navbar-item-profile/navbar-item-profile.component';
import { RouterLink } from '@angular/router';
import { PublicRoutes } from 'src/app/core/routes/public-private-routes';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';
import { UsuarioProfile } from 'src/app/shared/models/Usuario';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    NavbarItemIconComponent,
    NavbarItemProfileComponent,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: [],
})
export class NavbarComponent implements OnInit, OnDestroy {
  readonly LOGIN = PublicRoutes.LOGIN;
  userProfile: UsuarioProfile | null = null;
  logeado: boolean = false;
  showSidebar: boolean = false;
  mySubscriptions!: Subscription;
  constructor(private globalStateService: GlobalStateService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.mySubscriptions = this.globalStateService.userProfile$
      .pipe(
        tap(obUserProfile => {
          this.userProfile = obUserProfile;
          if (this.userProfile !== null) {
            this.logeado = true;
          }
        })
      )
      .subscribe();
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    if (this.showSidebar === true) {
      this.renderer.addClass(document.body, 'toggle-sidebar');
    } else {
      this.renderer.removeClass(document.body, 'toggle-sidebar');
    }
  }

  ngOnDestroy(): void {
    this.mySubscriptions.unsubscribe();
  }
}
