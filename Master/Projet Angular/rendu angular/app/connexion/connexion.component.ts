import { Component, OnInit } from '@angular/core';
import {Recette} from "../recette";
import {Ingredient} from "../Ingredient";
import {AffichageRecette} from "../affichageRecette";
import {Observable, Subject} from "rxjs";
import {RecetteServiceService} from "../recette-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";
import {utilisateur} from "../utilisateur";
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public utilisateur = {"email":"", "password":""};
  private message: string = "";
  constructor(private authService: AuthentificationService,
              private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.utilisateur)
    this.authService.verificationConnexion(this.utilisateur).subscribe(reponse => {
      this.message = reponse['message'];
      console.log(this.message)
      if (reponse['resultat']) {
        this.authService.connect(new utilisateur(reponse['nom'],reponse['prenom'],reponse['email'],reponse['pseudo']));
        this.router.navigate(['/recette']);
      }
    });
    setTimeout( () => {     window.location.reload() }, 100 );

  }
}
