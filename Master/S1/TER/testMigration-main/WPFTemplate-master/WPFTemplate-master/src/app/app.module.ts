import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AnotherScreenComponent } from './another-screen/another-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    HomeScreenComponent,
    AnotherScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
