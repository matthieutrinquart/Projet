import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: "/", component: AppComponent},{path: "/ResetGameWindow", component: ResetGameWindowComponent},{path: "/BoardPage", component: BoardPageComponent},{path: "/SettingsPage", component: SettingsPageComponent},{path: "/MainWindow", component: MainWindowComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
