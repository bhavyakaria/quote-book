import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LocalStorageService } from './utils/local-storage.service';
import { DataService } from './data.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { routes } from './app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    LocalStorageService,
    DataService,
    NgxUiLoaderService
  ]
});
