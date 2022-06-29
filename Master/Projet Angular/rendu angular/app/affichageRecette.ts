import {Recette} from "./recette";
import {Ingredient} from "./Ingredient";
import {Observable} from "rxjs";
import {Commentaire} from "./Commentaire";

export interface AffichageRecette {
   recette : Recette;
   ingr: Ingredient[];
   prix : Number;
   commentaire : Commentaire[];


}
