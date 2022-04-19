import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { tap } from 'rxjs';
import { IRecipe } from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-recipes-details-page',
  templateUrl: './recipes-details-page.component.html',
  styleUrls: ['./recipes-details-page.component.scss']
})
export class RecipesDetailsPageComponent implements OnInit {
  recipe:any;
  likes:any={likes:[]}
 ownerId:string = this.userService.currentUser.objectId;
//  recipeOwner:string =''
//  recipeOwnerUsername:string=''
 hasLogged:boolean = this.userService.hasLogged;
 editMode:boolean =false;
 currentUser:any=this.userService.currentUser;
 loadAllRecipes:boolean=false;
//  userAllRecipes:Array<IRecipe>;
hasOwner:boolean=false;
hasLiked:boolean=false;
letsRoll:boolean =false;
@ViewChild('createForm') createForm!:NgForm;
@ViewChild('recipeName') recipeName!:NgModel;
@ViewChild('ingredients') ingredients!:NgModel;
@ViewChild('preparation') preparation!:NgModel;


  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private userService:UserService,
    private router:Router,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const recipeId = params['recipeId']
      this.recipeService.loadRecipeById(recipeId).subscribe(recipe => {
        this.recipe = recipe;

        this.userService.recipeOwner = this.recipe.owner.objectId;
        this.userService.recipeOwnerUsername= this.recipe.ownerUsername;
        
        if(this.recipe.owner.objectId == this.ownerId){
          this.hasOwner = true;
        }
        this.hasLiked = false;
  if(this.hasLogged){
   if(this.recipe.likes.includes(this.ownerId)){
    
    this.hasLiked = true;
   }
  }

 
      })
    });
    
  }

onDelete(){
this.activatedRoute.params.subscribe(params => {
          const recipeId = params['recipeId']
this.recipeService.deleteRecipe$(recipeId).subscribe({
next:()=>{
       console.log('Recipe deleted!')
       this.router.navigate([`/home`])
},
 error:(error)=>{
this.router.navigate([`/login`])}

 });
})
}
onEditMode():void{
  if(this.recipe.owner.objectId != this.ownerId){
    this.router.navigate(['/recipes'])
  }
  this.editMode = true;

  setTimeout(()=>{
    this.createForm.setValue({
      recipeName:this.recipe.recipeName,
      img:this.recipe.img,
      ingredients:this.recipe.ingredients,
      preparation:this.recipe.preparation,
      
      
    })
  })
}
onSubmit(createForm:NgForm):void{
  this.activatedRoute.params.subscribe(params => {
    const recipeId = params['recipeId']

// this.letsRoll =true;
  this.recipeService.updateRecipe$(createForm.value,recipeId).subscribe({
    next:(recipe)=>{
     
     
      this.ngOnInit()
    },
   complete:()=>{
 console.log('>>>>','Done')

    
   },
    error:(error)=>{
      this.router.navigate([`/login`])}
      
      
    });

  })
  this.editMode = false;

  }
  likeIt():void{
    this.activatedRoute.params.subscribe(params => {
      const recipeId = params['recipeId']
  
    
  
    this.likes.likes = this.recipe.likes;
    this.likes.likes.push(this.ownerId)
    
    this.recipeService.likeRecipe$(this.likes,recipeId).subscribe({
      next:(recipe)=>{
       this.hasLiked = true;
        this.ngOnInit()
      },
     complete:()=>{
      
     },
      error:(error)=>{
        console.log(error)
        this.router.navigate([`/login`])}
        
        
      });
  
    })

}


}
