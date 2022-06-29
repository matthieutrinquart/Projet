import { Component } from '@angular/core';
import {RecetteComponent} from "./recette/recette.component";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {AuthentificationService} from "./authentification.service";
import {utilisateur} from "./utilisateur";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: utilisateur;

  constructor(private authService: AuthentificationService) {
    this.user = this.authService.getUser();
    console.log(this.user)
  }
  title = 'test';


  deconnexion() {
    this.authService.disconnect()
  }
}
