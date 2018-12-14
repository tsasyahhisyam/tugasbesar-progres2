import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class OrderListService{
    IngredientChange = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients:Ingredient[]=[
        new Ingredient('Dika (Avenger Invinity War)',2),
        new Ingredient('Dono (The Black Panther)',3),
      ];

constructor() { }

getIngredients(){
    return this.ingredients.slice();
}
getIngredient(index:number){
    return this.ingredients[index];
}
addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.IngredientChange.next(this.ingredients.slice());
}
addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.IngredientChange.next(this.ingredients.slice());
    }
updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.IngredientChange.next(this.ingredients.slice());
    }
deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.IngredientChange.next(this.ingredients.slice());
    }
}