import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: "/", component: AppComponent},{path: "/MainWindow", component: MainWindowComponent},{path: "/HomeScreen", component: HomeScreenComponent},{path: "/AnotherScreen", component: AnotherScreenComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
