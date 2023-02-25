import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app/core/routes/routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenTnterceptoFn } from 'src/app/core/interceptor/token-intercepto-fn';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([TokenTnterceptoFn])),
    importProvidersFrom(BrowserAnimationsModule, BrowserAnimationsModule),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
}).catch(err => console.error(err));
