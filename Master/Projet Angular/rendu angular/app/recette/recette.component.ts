import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Recette} from "../recette";
import {Ingredient} from "../Ingredient";
import {AffichageRecette} from "../affichageRecette";
import {RecetteServiceService} from "../recette-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";
import {utilisateur} from "../utilisateur";
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})


export class RecetteComponent implements OnInit {
  @ViewChild('commentaire') nameInput: ElementRef | undefined;
  re: Recette[] = new Array();
  aff : AffichageRecette[]= new Array();
  ingr : Ingredient[] = new Array();
  u : utilisateur = new utilisateur("","","","")
  // @ts-ignore
  public user: utilisateur;


  hero = 'Windstorm';
  constructor(private recette: RecetteServiceService,private authentification : AuthentificationService,
              private route: ActivatedRoute,
              private router: Router){
    this.user = authentification.getUser();
  }

  ngOnInit(): void {

    this.recette.getRecetteIngrG().subscribe(recette => {
      // @ts-ignore
      console.log("TYPE : " + recette[0].nom)
        this.aff = recette;
        });
    console.log(this.user)

  }

  recherche(nom : string) : void{
    this.recette.putlike(this.user.email.toString(),nom.toString());
    window.location.reload();
  }


  newcommentaire(rec : string) {
    // @ts-ignore
this.recette.putcommenataire(this.user.pseudo,rec,document.getElementById(rec)["value"])
    window.location.reload();
  }
}

