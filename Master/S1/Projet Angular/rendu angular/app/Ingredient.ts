export class Ingredient {
  nom: String;
  prix : number;
  nombre : number;
  uniter : String;


  constructor(nom: String, prix: number, nombre : number,uniter: String) {
    this.nom = nom;
    this.prix = prix;
    this.nombre = nombre
    this.uniter = uniter;
  }
}
