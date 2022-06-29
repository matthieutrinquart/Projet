import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResetGameWindowComponent } from './reset-game-window/reset-game-window.component';
import { BoardPageComponent } from './board-page/board-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { MainWindowComponent } from './main-window/main-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ResetGameWindowComponent,
    BoardPageComponent,
    SettingsPageComponent,
    MainWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
