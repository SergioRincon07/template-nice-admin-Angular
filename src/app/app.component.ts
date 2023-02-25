import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, SidebarComponent],
})
export class AppComponent {
  showNavSideBar: boolean = false;
  currentRoute: string = '';
  constructor(private router: Router) {
    // https://www.angularjswiki.com/angular/how-to-detect-route-change-in-angular-with-examples/
    router.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        if (event['urlAfterRedirects'] == '/404') {
          this.showNavSideBar = false;
        } else {
          this.showNavSideBar = true;
        }
      }
    });
  }
}
