import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Location } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-window1',
  templateUrl: './window1.component.html',
  styleUrls: ['./window1.component.css']
})
export class Window1Component implements OnInit {
  private Nom : String | undefined
  private Prenom : String| undefined
  private Age : Number | undefined
  private NumeroTel : Number | undefined
  private Adresse : String | undefined
  private Société : String | undefined
  private finit : Boolean| undefined
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  public Valider() : void {
    // @ts-ignore
    this.Nom = document.getElementById('nom').value
    // @ts-ignore
    this.Prenom = document.getElementById('prenom').value
    // @ts-ignore
    this.Age = document.getElementById('age').value
    // @ts-ignore
    this.NumeroTel = document.getElementById('num').value
    // @ts-ignore
    this.Adresse = document.getElementById('adresse').value
    // @ts-ignore
    this.Société = document.getElementById('soc').value
    this.router.navigate([''], { state: { Nom: this.getNom(),Prenom: this.getPrenom(),Age: this.getAge(),NumeroTel: this.getNumeroTel(),Adresse: this.getAdresse(),Société : this.getsoc() } });


  }
  public getNom() : String
  {
    return <String>this.Nom;
  }
  public getPrenom(): String
  {
    return <String>this.Prenom;
  }
  public getAge() : Number
  {
    return <Number>this.Age;
  }
  public  getNumeroTel(): Number
  {
    return <Number>this.NumeroTel;
  }
  public getAdresse(): String
  {
    return <String>this.Adresse;
  }
  public getsoc(): String
  {
    return <String>this.Société;
  }
  public getfinit(): Boolean
  {
    return <Boolean>this.finit;
  }

}
