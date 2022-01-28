import {APP_INITIALIZER, NgModule, RendererFactory2} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

function initializeAppFactory() {
  return () => {};
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [RendererFactory2],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
