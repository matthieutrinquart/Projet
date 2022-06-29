import { Component, OnInit } from '@angular/core';
import {RecetteServiceService} from "../recette-service.service";
import {ActivatedRoute} from "@angular/router";
import {AffichageRecette} from "../affichageRecette";
import { ViewChild, ElementRef } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {utilisateur} from "../utilisateur";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef | undefined;
  aff : AffichageRecette[]= new Array();
  // @ts-ignore
  public user: utilisateur;
  constructor(private recette: RecetteServiceService,private authentification : AuthentificationService,
              private route: ActivatedRoute) {
    value1:[];
    this.user = authentification.getUser()

  }

  ngOnInit(): void {
  }
  recherche() : void{
    this.recette.getRecetteIngr(this.nameInput?.nativeElement.value).subscribe(recette => {
      this.aff = recette;
    });


  }

  Like(nom : string) : void{
    this.recette.putlike(this.user.email.toString(),nom.toString());
    window.location.reload();
  }

  newcommentaire(s: string) {
    // @ts-ignore
    this.recette.putcommenataire(this.user.pseudo,s,document.getElementById(s)["value"])

  }
}
