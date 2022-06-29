import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteComponent } from './recette/recette.component';
import {ConnexionComponent} from "./connexion/connexion.component";
import {RechercheComponent} from "./recherche/recherche.component";
import {UserRecetteComponent} from "./user-recette/user-recette.component";
import {NewRecetteComponent} from "./new-recette/new-recette.component";
import {AjouterIngredientComponent} from "./ajouter-ingredient/ajouter-ingredient.component";
const routes: Routes = [
  {path: '', component: RecetteComponent},
  {path: 'recette', component: RecetteComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'recherche', component: RechercheComponent},
  {path: 'userrecette', component: UserRecetteComponent},
  {path: 'newrecette', component: NewRecetteComponent},
  {path: 'newingredient', component: AjouterIngredientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[RecetteComponent,ConnexionComponent,RechercheComponent , UserRecetteComponent]
