import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicRoutes } from 'src/app/core/routes/public-private-routes';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found.component.html',
  styles: [],
})
export default class NotFoundComponent {
  constructor() {}
  readonly HOME = PublicRoutes.HOME;
}
