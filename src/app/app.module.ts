import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { MaterialModule } from './material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent, HeaderComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MaterialModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
