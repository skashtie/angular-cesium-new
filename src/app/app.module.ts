import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularCesiumModule } from 'angular-cesium';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RectangleDrawerService } from 'angular-cesium/src/angular-cesium/services/drawers/rectangle-dawer/rectangle-drawer.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot(),
    HttpClientModule
  ],
  providers: [RectangleDrawerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
