import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PublicRoutes } from 'src/app/core/routes/public-private-routes';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styles: [],
})
export class NotFoundComponent {
  constructor() {}
  readonly HOME = PublicRoutes.HOME;
}
