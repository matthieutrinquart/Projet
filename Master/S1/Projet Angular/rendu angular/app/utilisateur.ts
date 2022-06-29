export class utilisateur {
  nom : string;
  prenom: string;
  email : string;
  pseudo : string;


  constructor(nom: string, prenom: string, email: string, pseudo: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.pseudo = pseudo;
  }
}
