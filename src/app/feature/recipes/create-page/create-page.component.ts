import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/core/recipe.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit,AfterViewInit {
@ViewChild('createForm') createForm!:NgForm;
@ViewChild('recipeName') recipeName!:NgModel;
@ViewChild('ingredients') ingredients!:NgModel;
@ViewChild('preparation') preparation!:NgModel;

errorMessage:string='';
  constructor(
    private router:Router,
    private recipeService:RecipeService,
    private userService:UserService
    ) { }

  ngOnInit(): void {
  }
ngAfterViewInit(): void {
  // console.log(this.createForm.value)
  // console.log(this.recipeName)
}
onSubmit(createForm:NgForm):void{
console.log(createForm.value);
let userId = this.userService.currentUser   //.userId;
console.log('All for owner ->>>>>>>>',userId)
createForm.value.owner = userId;
// createForm.value.owner = this.userService.currentUser.userId;
this.recipeService.createRecipe$(createForm.value).subscribe({
  next:(recipe)=>{
    console.log('next >',recipe)
    this.router.navigate(['/recipes'])
    console.log('after next -->')

  },
  error:(error)=>{
    this.errorMessage == error.error.error;
    
  }
})
}
navigateToHome(){
  this.router.navigate(['/home'])
}

  // if(this.recipeName.errors){
  //   // this.recipeName.invalid;
  //   console.log('recipeName')

  // }
  // if(this.ingredients.errors){
  //   // this.ingredients.invalid;

  //   console.log('ingredients')

  // }
  // if(this.preparation.errors){
  //   // this.preparation.invalid;
  //   // this.preparation.touched;

  //   console.log('preparation')

  // }

}
