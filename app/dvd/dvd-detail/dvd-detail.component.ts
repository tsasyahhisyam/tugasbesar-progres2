import { Component, OnInit, Input } from '@angular/core';
import { Dvd } from '../dvd.model';
import { DvdService } from '../dvd.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {
  dvd:Dvd;
  id:number;

  constructor(private dvdService:DvdService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.dvd=this.dvdService.getDvd(this.id);
      }
    )
  }

  onAddOrderList(){
    this.dvdService.addIngredientsOrderList(this.dvd.ingredients);
  }

  onEditDvd(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDeleteDvd() {
    this.dvdService.deleteDvd(this.id);
    this.router.navigate(['/dvds']);
  }

}
