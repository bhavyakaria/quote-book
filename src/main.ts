import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Import the standalone bootstrap from app.module.ts
import './app/app.module';
