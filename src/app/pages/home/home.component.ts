import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PublicRoutes } from 'src/app/core/routes/public-private-routes';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';
import { UsuarioProfile } from 'src/app/shared/models/Usuario';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly LOGIN = PublicRoutes.LOGIN;
  userProfile: UsuarioProfile | null = null;
  logeado: boolean = false;
  mySubscriptions!: Subscription;
  constructor(private globalStateService: GlobalStateService) {}

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

  ngOnDestroy(): void {
    this.mySubscriptions.unsubscribe();
  }
}
