import {Recette} from "./recette";
import {Ingredient} from "./Ingredient";
import {Observable} from "rxjs";
import {Commentaire} from "./Commentaire";

export class RecetteGet {
  recette : String;
  ingr
  Modecuisson : String;
  Nbpersonne : Number;
  Autheur : String;
  Like : Array<String>;

  constructor(recette: String, ingr : any, Modecuisson: String, Nbpersonne: Number, Autheur: String, Like: Array<String>) {
    this.recette = recette;
    this.ingr = ingr;
    this.Modecuisson = Modecuisson;
    this.Nbpersonne = Nbpersonne;
    this.Autheur = Autheur;
    this.Like = Like;
  }


}
