import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RechercheComponent } from './recherche/recherche.component';

import { RecetteComponent } from './recette/recette.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserRecetteComponent } from './user-recette/user-recette.component';
import { NewRecetteComponent } from './new-recette/new-recette.component';
import { AjouterIngredientComponent } from './ajouter-ingredient/ajouter-ingredient.component';
@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    RecetteComponent,
    ConnexionComponent,
    RechercheComponent,
    UserRecetteComponent,
    NewRecetteComponent,
    AjouterIngredientComponent,

  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
