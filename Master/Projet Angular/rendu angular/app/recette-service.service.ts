import { Injectable } from '@angular/core';
import {catchError, Observable, Subscription} from "rxjs";
import {Recette} from "./recette";
import {Commentaire} from "./Commentaire";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Like} from "./Like";
import {Ingredient} from "./Ingredient";
import {RecetteGet} from "./RecetteGet";
import {IngredientGet} from "./IngredientGet";
const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST",
    "Access-Control-Allow-Headers": "Content-type",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};
@Injectable({
  providedIn: 'root'
})
export class RecetteServiceService {

  private urlBase: string = 'http://localhost:8888/';

  constructor(private http: HttpClient) {
  }

  getProduits(): Observable<any> {
    return this.http.get<Ingredient[]>(this.urlBase + 'produits');
  }

  getGenerals(Table: string, colonne: string, valeur: string): Observable<any> {
    return this.http.get<any>(this.urlBase + Table + '/' + colonne + '/' + valeur);
  }


  getRecetteIngr(recette: string): Observable<any> {
    return this.http.get<any>(this.urlBase + "ingredientRecette" + "/" + recette);
  }

  getRecetteIngrG(): Observable<any> {
    return this.http.get<any>(this.urlBase + "ingredientRecetteG");
  }


  /*
  verificationConnexion(identifiants:any): Observable<any> {
    return this.http.post(this.baseURL+'user/connexion', JSON.stringify(identifiants), httpOptions);
  }

   */


  getRecette(): Observable<Recette[]> {
    return this.http.get<any>(this.urlBase + 'recettes');
  }

  getProduitsParCategorie(categories: string): Observable<any> {
    return this.http.get(this.urlBase + 'produits/' + categories);
  }


  getCategories(): Observable<any> {
    return this.http.get(this.urlBase + 'categories');
  }

  putlike(user: string, rec: string): Subscription {
    console.log(" 1 : " + rec)
    var li = new Like(user, rec);
    console.log(" 2 : " + li.rec)
    return this.http.post(this.urlBase + 'Like', JSON.stringify(li), httpOptions).subscribe(val => {
      console.log(val);
    });
  }

  putcommenataire(pseudo: string, nomrecette: string, commentaire: string): Subscription {
    var ladate = new Date()
    var li = new Commentaire(pseudo, nomrecette, commentaire, String(ladate.getDate() + "/" + (ladate.getMonth() + 1) + "/" + ladate.getFullYear()))
    return this.http.post(this.urlBase + 'Commentaire', JSON.stringify(li), httpOptions).subscribe(val => {

      window.location.reload();
    });

  }

  putRecette(recette: RecetteGet): Subscription {
    console.log(JSON.stringify(recette))
    return this.http.post(this.urlBase + 'PUTRecette', JSON.stringify(recette), httpOptions).subscribe(val => {

    });

  }

  PutIngredient(ingr: IngredientGet): Subscription {
    console.log(JSON.stringify(ingr))
    return this.http.post(this.urlBase + 'PUTIngredient', JSON.stringify(ingr), httpOptions).subscribe(val => {

    });
  }

}
