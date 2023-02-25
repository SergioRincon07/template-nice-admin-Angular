import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { GlobalStateService } from './shared/services/global-state.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { forkJoin, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent],
})
export class AppComponent implements OnInit {
  showNavSideBar: boolean = false;
  currentRoute: string = '';

  constructor(
    private router: Router,
    private globalStateService: GlobalStateService,
    private localStorageService: LocalStorageService
  ) {
    // https://www.angularjswiki.com/angular/how-to-detect-route-change-in-angular-with-examples/
    router.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        if (event['urlAfterRedirects'] == '/404' || event['urlAfterRedirects'] == '/login') {
          this.showNavSideBar = false;
        } else {
          this.showNavSideBar = true;
        }
      }
    });
  }

  ngOnInit(): void {
    let userProfile: any | null = null;
    const ntUserLS = this.localStorageService.getNtUser();
    const accessTocken = this.localStorageService.getToken();
    if (ntUserLS !== null && accessTocken !== null) {
      forkJoin([
        this.globalStateService.getProfile$(ntUserLS),
        this.globalStateService.getPermisosApp(ntUserLS),
      ]).subscribe(() => {
        this.globalStateService.setAppLoadData();
      });
    } else {
      this.globalStateService.setAppLoadData();
    }
  }
}
