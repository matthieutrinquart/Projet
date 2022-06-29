import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWindowComponent } from './main-window/main-window.component'
import {AppComponent} from "./app.component";
import { Window1Component } from './window1/window1.component';

const routes: Routes = [
  {path: "", component: MainWindowComponent},
  {path: "window1", component: Window1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
