import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Dvd } from '../../dvd.model';
import { DvdService } from '../../dvd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrls: ['./dvd-list.component.css']
})
export class DvdListComponent implements OnInit, OnDestroy{
  dvds:Dvd[];
  subscription: Subscription;

  constructor(private dvdService:DvdService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
   this.subscription = this.dvdService.dvdsChanged
    .subscribe(
      (dvds: Dvd[]) => {
        this.dvds = dvds;
      }
    );
    this.dvds=this.dvdService.getDvds();
  }

  //onRecipeSelected(dvd:Dvd){
  //this.recipeWasSelected.emit(dvd);
  //}
  onNewDvd(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}