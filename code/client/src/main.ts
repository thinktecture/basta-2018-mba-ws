import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const startApp = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
};
if (window['cordova']) {
  document.addEventListener(
    'deviceready',
    () => {
      startApp();
    },
    false
  );
} else {
  startApp();
}
