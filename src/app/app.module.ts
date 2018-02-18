import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; // TODO: move to HTTPClient

import { AppComponent } from './app.component';
import { TimezoneComponent } from './timezone/timezone.component';

@NgModule({
  declarations: [
    AppComponent,
    TimezoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
