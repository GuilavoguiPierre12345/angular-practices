import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { dashboardRoutes} from './pages/dashboard/dashboard.route'
import { provideAnimations } from '@angular/platform-browser/animations';
import { fr_FR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(fr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideRouter(dashboardRoutes),
    provideAnimations(), provideNzI18n(fr_FR), importProvidersFrom(FormsModule), importProvidersFrom(HttpClientModule),
    provideAnimations()
]
};
