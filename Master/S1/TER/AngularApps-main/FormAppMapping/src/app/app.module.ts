import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Window1Component } from './window1/window1.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';

@NgModule({
  declarations: [
    AppComponent,
    Window1Component,
    MainwindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
