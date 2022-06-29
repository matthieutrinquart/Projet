import {Observable} from "rxjs";
import {Ingredient} from "./Ingredient";

export interface Recette {
  id : number;
  nom: String;
  ingredient : Ingredient[];
  modeCuissin : String;
  NombrePersonnes : Number;
  Like : string[];
}
