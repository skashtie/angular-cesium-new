import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// window['CESIUM_BASE_URL'] = '/assets/cesium'; // If youre using Cesium version < 1.42.0 add this line
Cesium.buildModuleUrl.setBaseUrl('/assets/cesium/'); // If youre using Cesium version >= 1.42.0 add this line


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
