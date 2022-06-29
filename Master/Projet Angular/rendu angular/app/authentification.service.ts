import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject, Subscription} from "rxjs";
import {utilisateur} from "./utilisateur"
import {Like} from "./Like";
import {Ingredient} from "./Ingredient";
import {Commentaire} from "./Commentaire";

const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST",
    "Access-Control-Allow-Headers": "Content-type",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};


@Injectable({
  providedIn: 'root'
})


export class AuthentificationService {

  public user:utilisateur = new utilisateur("","","","");
  public baseURL: string = "http://localhost:8888/";

  constructor(private http: HttpClient) {

  }

  getUser() {
    console.log(String(localStorage['user'] ))
    if(localStorage['user'] === undefined){
      console.log("JE SUIS LA1")
       this.user = JSON.parse(String(null));
    }else{
      console.log("JE SUIS LA2")
      this.user = JSON.parse(String(localStorage['user'] ));
    }
    return this.user;
  }
  connect(data: utilisateur) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  disconnect() {
    localStorage.removeItem('user');
  }

  verificationConnexion(identifiants:any): Observable<any> {
    return this.http.post(this.baseURL+'user/connexion', JSON.stringify(identifiants), httpOptions);
  }
}
