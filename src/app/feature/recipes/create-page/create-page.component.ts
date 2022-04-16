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

}
onSubmit(createForm:NgForm):void{

let userId = this.userService.currentUser;

createForm.value.owner = userId;
createForm.value.ownerUsername =this.userService.currentUser.ownerUsername;
createForm.value.likes = [];

this.recipeService.createRecipe$(createForm.value).subscribe({
  next:(recipe)=>{
   
    this.router.navigate(['/profile'])
   

  },
  error:(error)=>{
    this.errorMessage == error.error.error;
    
  }
})
}
navigateToHome(){
  this.router.navigate(['/home'])
}

 

}
