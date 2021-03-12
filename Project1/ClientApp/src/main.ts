import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

setTimeout(() => {
  const loadingElement = document.querySelector('.app-loading');

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(() => loadingElement.classList.add('loaded'))
    .then(() => setTimeout(() => loadingElement.remove(), 1000));
}, 2000);
