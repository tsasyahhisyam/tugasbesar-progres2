import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { DvdService } from '../../../../../dvd.service';

@Component({
  selector: 'app-dvd-edit',
  templateUrl: './dvd-edit.component.html',
  styleUrls: ['./dvd-edit.component.css']
})
export class DvdEditComponent implements OnInit {
  id:number;
  editMode=false;
  dvdForm: FormGroup;

  constructor(private route:ActivatedRoute,
              private dvdService: DvdService,
              private router: Router) { 
   }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();

        console.log(this.editMode);
      }
    )
  }
  onSubmit() {
    //const newRecipe = new Recipe(
    //  this.dvdForm.value['name'],
    //  this.dvdForm.value['description'],
    //  this.dvdForm.value['imagePath'],
    //  this.dvdForm.value['ingredients']);
    if (this.editMode) {
      this.dvdService.updateDvd(this.id, this.dvdForm.value);
    }else{
      this.dvdService.addDvd(this.dvdForm.value);
    }
    this.onCancel();
  }
  onAddIngredient() {
    (<FormArray>this.dvdForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }
  onDeleteIngredient(index:number) {
    (<FormArray>this.dvdForm.get('ingredients')).removeAt(index);
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm() {
    let dvdName = '';
    let dvdImagePath = '';
    let dvdDescription = '';
    let dvdIngredients = new FormArray([]);

    if (this.editMode) {
      const dvd = this.dvdService.getDvd(this.id);
      dvdName = dvd.name;
      dvdImagePath = dvd.imagePath;
      dvdDescription = dvd.description;
      if (dvd['ingredients']){
        for (let ingredient of dvd.ingredients)
        dvdIngredients.push(
          new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount,[
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        );
      }
    }
    this.dvdForm = new FormGroup({
      'name' : new FormControl(dvdName, Validators.required),
      'imagePath' : new FormControl(dvdImagePath, Validators.required),
      'description' : new FormControl(dvdDescription, Validators.required),
      'ingredients' : dvdIngredients
    });
  }
}