import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldCardComponent } from './hello-world-card/hello-world-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
