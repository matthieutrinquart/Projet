export class IngredientGet {
  nom: String;
  prix : number;
  uniter : String;


  constructor(nom: String, prix: number,uniter: String) {
    this.nom = nom;
    this.prix = prix;
    this.uniter = uniter;
  }
}
