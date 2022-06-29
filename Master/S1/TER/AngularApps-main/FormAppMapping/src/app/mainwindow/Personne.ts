export class Personne {

  private _Nom : string;
  private _Prenom : string;
  private _Age : Number;
  private _NumeroTel : Number;
  private _Adresse : String;
  private _Société : String;


  constructor(Nom: string, Prenom: string, Age: Number, NumeroTel: Number, Adresse: String, Société: String) {
    this._Nom = Nom;
    this._Prenom = Prenom;
    this._Age = Age;
    this._NumeroTel = NumeroTel;
    this._Adresse = Adresse;
    this._Société = Société;
  }


  get Nom(): string {
    return this._Nom;
  }

  get Prenom(): string {
    return this._Prenom;
  }

  get Age(): Number {
    return this._Age;
  }

  get NumeroTel(): Number {
    return this._NumeroTel;
  }

  get Adresse(): String {
    return this._Adresse;
  }

  get Société(): String {
    return this._Société;
  }
}
