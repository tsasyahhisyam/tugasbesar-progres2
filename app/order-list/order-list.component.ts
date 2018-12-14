import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[];
  private subscription: Subscription;

  constructor(private slsService:OrderListService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredients();
    this.subscription = this.slsService.IngredientChange
    .subscribe(
      (Ingredient:Ingredient[])=>{
      this.ingredients=Ingredient;
      }
    );
  }
  onEditItem(index : number){
    this.slsService.startedEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}