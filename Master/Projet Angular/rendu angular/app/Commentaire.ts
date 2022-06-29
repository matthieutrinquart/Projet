export class Commentaire {
  peudo : String;
  nomrecette: String;
  commentaire : String;
  date : String;


  constructor(peudo: String, nomrecette: String, commentaire: String, date: String) {
    this.peudo = peudo;
    this.nomrecette = nomrecette;
    this.commentaire = commentaire;
    this.date = date;
  }
}
