import { Component, OnInit } from '@angular/core';
import {AffichageRecette} from "../affichageRecette";
import {RecetteServiceService} from "../recette-service.service";
import {ActivatedRoute} from "@angular/router";
import {AuthentificationService} from "../authentification.service";
import {BehaviorSubject, Subject} from "rxjs";
import {utilisateur} from "../utilisateur";

@Component({
  selector: 'app-user-recette',
  templateUrl: './user-recette.component.html',
  styleUrls: ['./user-recette.component.css']
})
export class UserRecetteComponent implements OnInit {

  aff : AffichageRecette[]= new Array();
  value: string =""
  // @ts-ignore
  public user: utilisateur ;
  constructor(private recette: RecetteServiceService, private authentification : AuthentificationService,
              private route: ActivatedRoute) {
  this.user = authentification.getUser()
  }

  ngOnInit(): void {

    this.value = this.authentification.getUser().pseudo
    this.recette.getRecetteIngr(this.value).subscribe(recette => {
      this.aff = recette;
    });
  }

  recherche(nom : string) : void{
    this.recette.putlike(this.user.email.toString(),nom.toString());
    window.location.reload();

  }

  newcommentaire(s: string) {
    // @ts-ignore
    this.recette.putcommenataire(this.user.pseudo,s,document.getElementById(s)["value"])
    window.location.reload();

  }
}
