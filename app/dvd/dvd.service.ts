import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dvd } from '../dvd/dvd.model';
import { Ingredient } from '../shared/ingredient.model';
import { OrderListService } from '../order-list/order-list.service';
@Injectable(

)
export class DvdService {
  dvdsChanged = new Subject<Dvd[]>();
  
  private dvds:Dvd[]=[
    new Dvd(
      'Avenger Infinity War','Genre : Action',
      '../src/app/img/war.jpg',
  [
    new Ingredient('Rating',7.9),
  ]),
  new Dvd(
    'The Black Panther','Genre : Action',
    '../src/app//img/panter.jpg',
[
  new Ingredient('Rating',7),
]),  
];

  getDvds(){
    return this.dvds.slice();
  }
  addIngredientsOrderList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  addDvd(dvd: Dvd) {
    this.dvds.push(dvd);
    this.dvdsChanged.next(this.dvds.slice());
  }
  updateDvd(index: number, newDvd: Dvd) {
    this.dvds[index] = newDvd;
    this.dvdsChanged.next(this.dvds.slice());
  }
  deleteDvd(index: number) {
    this.dvds.splice(index, 1);
    this.dvdsChanged.next(this.dvds.slice());
  }
  getDvd(index:number){
    return this.dvds [index] ;
  }
constructor(private slsService: OrderListService) {}

setDvds(dvds: Dvd[]) {
  this.dvds = dvds;
  this.dvdsChanged.next(this.dvds.slice());
}

}