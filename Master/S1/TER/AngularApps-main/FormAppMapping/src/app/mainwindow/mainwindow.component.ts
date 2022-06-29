import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Personne} from "./Personne";
@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.css']
})
export class MainwindowComponent implements OnInit {
  public inputname : String = new String
  public items : Personne[]= new Array()
   public static items1 : Personne[]= new Array()
  constructor( private router: Router,private location: Location
 ) {
    // @ts-ignore
    if(this.location.getState().Nom != undefined) {
      // @ts-ignore
      MainwindowComponent.items1.push(new Personne(this.location.getState().Nom, this.location.getState().Prenom, this.location.getState().Age, this.location.getState().NumeroTel, this.location.getState().Adresse, this.location.getState().Société))
    }

    this.items = MainwindowComponent.items1;
  }


  ngOnInit(): void {
    // @ts-ignore
   // console.log(this.location.getState().Nom);
    // @ts-ignore
   // document.getElementById('TEXTBLOCK1').value = this.location.getState().Nom
   // var completelist= document.getElementById("1vUsers");

/*
    // @ts-ignore
    completelist.innerHTML += "<li><p class = \"col s2\" #TEXTBLOCK1  style=\"font-weight:bold\">"+
      // @ts-ignore
      this.location.getState().Nom +
      "</p> <p class = \"col s2\" #TEXTBLOCK2 style=\"font-weight:bold\"> &nbsp; <!--avoir un espace tout seul--> </p>" +
      // @ts-ignore
      "<p #TEXTBLOCK3 class = \"col s2\"  style=\"font-weight:bold\">" +  this.location.getState().Prenom + "</p>"+
      "<p #TEXTBLOCK4 style=\"font-weight:bold\">  &nbsp; <!--avoir un espace tout seul--> </p>" +
      // @ts-ignore
      "<p #TEXTBLOCK5 class = \"col s2\" style=\"font-weight:bold\">" +  this.location.getState().Age + "</p>"+
      "<p #TEXTBLOCK6  style=\"font-weight:bold\"> &nbsp;ans </p></li>";

 */




  }

  public ajouter(sender : HTMLElement) : void {
    this.router.navigate(['/window1'])

  }

  public supprimer(sender : HTMLElement) : void {
  }

  public listView_Click(event: MouseEvent) : void {
    // @ts-ignore
    console.log(event.target.innerHTML)
  }
}
