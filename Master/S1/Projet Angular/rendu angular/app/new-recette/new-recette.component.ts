import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthentificationService} from "../authentification.service";
import {RecetteServiceService} from "../recette-service.service";
import {AffichageRecette} from "../affichageRecette";
import {Ingredient} from "../Ingredient";
import {RecetteGet} from "../RecetteGet";
import {utilisateur} from "../utilisateur";
import {Router} from "@angular/router";
@Component({
  selector: 'app-new-recette',
  templateUrl: './new-recette.component.html',
  styleUrls: ['./new-recette.component.css']
})

export class NewRecetteComponent implements OnInit {
  @ViewChild('Nomrec') Nomrec: ElementRef | undefined;
  @ViewChild('Modecui') Modecui: ElementRef | undefined;
  @ViewChild('nbpers') nbpers: ElementRef | undefined;
  public user: utilisateur | undefined;
  show: boolean = false;
  contactForm: FormGroup;
  ingr: Ingredient[] = new Array();
  countries = new Array();
  private quantiter: any;

  constructor(private fb: FormBuilder, private authentification: AuthentificationService, private recette: RecetteServiceService, private router: Router) {
    this.recette.getProduits().subscribe(ingredient => {
      this.ingr = ingredient;
      var i = 0;
      for (let doc of this.ingr) {
        this.countries.push({id: i, name: doc['nom'].toString()})
        ++i
      }
    });

    this.contactForm = this.fb.group({
      country: [null]
    });


  }

  ngOnInit(): void {

  }
  ajoutingr(){
    this.router.navigate(['/newingredient']);

  }

  submit() {
    var gfg = new Array();
    var myMap = new Map<String, Number>();
    var i :  Number= 0;
    this.ingr.forEach((item) =>{
      var element = <HTMLInputElement> document.getElementById(item.nom.toString());
      var isChecked = element.checked;
      if(isChecked == true){
        var map = new Map<String,Number>();
        var input = <HTMLInputElement> document.getElementById("input"+item.nom.toString());
   //     map.set(item.nom.toString(),Number(input.value))
        var g = new Array<any>()
        g.push(item.nom.toString())
        g.push(Number(input.value))
        gfg.push(g)
      //  console.log(JSON.stringify(map))
      }

    });
    /*
    let jsonObject = {};
    myMap.forEach((value, key) => {
      // @ts-ignore
      jsonObject[key] = value
    });

     */
    this.user = this.authentification.getUser();
    var res = new RecetteGet(this.Nomrec?.nativeElement.value,gfg,this.Modecui?.nativeElement.value,this.nbpers?.nativeElement.value,this.user.pseudo,[])
    this.recette.putRecette(res)

    }

}
