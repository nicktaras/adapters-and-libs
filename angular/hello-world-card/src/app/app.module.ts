import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldCardComponent } from './hello-world-card/hello-world-card.component';

// CUSTOM_ELEMENTS_SCHEMA is required to permit Angular to 
// use Web-Components. Webster may have some config to do his side
// even if we use smarts to write the component wrapper to their project.

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldCardComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
