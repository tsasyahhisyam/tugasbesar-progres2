import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Dvd } from '../../../../dvd/dvd.model';
import { DvdService } from '../../../dvd.service';

@Component({
  selector: 'app-dvd-item',
  templateUrl: './dvd-item.component.html',
  styleUrls: ['./dvd-item.component.css']
})
export class DvdItemComponent implements OnInit {

  @Input() dvd:Dvd;
  @Input() index:number;
  // @Output() recipeSelected=new EventEmitter<void>();
  
  //constructor(private recipeService:DvdService) { }

  ngOnInit() {
  }

  //onSelected(){
    // this.recipeSelected.emit();
    //this.recipeService.recipeSelected.emit(this.dvd);
  //}

}
