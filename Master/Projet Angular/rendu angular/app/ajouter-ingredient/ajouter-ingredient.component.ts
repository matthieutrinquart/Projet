import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RecetteServiceService} from "../recette-service.service";
import {RecetteGet} from "../RecetteGet";
import {Ingredient} from "../Ingredient";
import {Router} from "@angular/router";
import {IngredientGet} from "../IngredientGet";

@Component({
  selector: 'app-ajouter-ingredient',
  templateUrl: './ajouter-ingredient.component.html',
  styleUrls: ['./ajouter-ingredient.component.css']
})
export class AjouterIngredientComponent implements OnInit {
  @ViewChild('Nomingre') Nomingre: ElementRef | undefined;
  @ViewChild('Prix') Prix: ElementRef | undefined;
  @ViewChild('Uniter') Uniter: ElementRef | undefined;
  constructor(private recette: RecetteServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    var res = new IngredientGet(this.Nomingre?.nativeElement.value,this.Prix?.nativeElement.value,this.Uniter?.nativeElement.value)
    this.recette.PutIngredient(res)

    this.router.navigate(['/newrecette']);


  }

}
