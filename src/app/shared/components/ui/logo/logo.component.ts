import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PublicRoutes } from 'src/app/core/routes/public-private-routes';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './logo.component.html',
  styles: [],
})
export class LogoComponent {
  readonly HOME = PublicRoutes.HOME;
  constructor() {}
}
