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
 ownerId:string = this.userService.currentUser.objectId;
 errorMessage:string='';
 editMode:boolean =false;
 currentUser:any=this.userService.currentUser;

@ViewChild('createForm') createForm!:NgForm;
@ViewChild('recipeName') recipeName!:NgModel;
@ViewChild('ingredients') ingredients!:NgModel;
@ViewChild('preparation') preparation!:NgModel;

// @Input() data:IRecipe
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private userService:UserService,
    private router:Router,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const recipeId = params['recipeId'] // ?
      console.log('ID ---->',recipeId)
      this.recipeService.loadRecipeById(recipeId).subscribe(recipe => {
        // console.log('b4 Results-->',recipe)
        this.recipe = recipe;
        console.log('after-->',this.recipe)
console.log('ID ---->',this.ownerId)
        // this.recipe = recipe['results']
        // console.log('after Results-->',this.recipe)
      })
    });
  }
//   onDelete():void{
//     this.activatedRoute.params.subscribe(params => {
//       const recipeId = params['recipeId'] // ?
//       console.log('ID ---->',recipeId)

// //       this.recipeService.deleteRecipe$(recipeId).subscribe({
// //         next:(recipe)=>{
// //           console.log('next >',recipe)
// //           this.router.navigate(['/recipes'])
// //           console.log('after next -->')
      
// //         },
// //         error:(error)=>{
// //           this.errorMessage == error.error.error;
// //           this.router.navigate([`/recipes/${recipeId}`])}
// // });
//       }
//   }
onDelete(){
this.activatedRoute.params.subscribe(params => {
          const recipeId = params['recipeId'] // ?
    //       console.log('ID ---->',recipeId)
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
      img:this.recipe.img && this.recipe.img!= 'no-image.jpg'? '':this.recipe.img,
      ingredients:this.recipe.ingredients,
      preparation:this.recipe.preparation,
      
    })
  })
}
onSubmit(createForm:NgForm):void{
  this.activatedRoute.params.subscribe(params => {
    const recipeId = params['recipeId']
  console.log(createForm.value);
  // let userId = this.userService.currentUser   //.userId;
  // console.log('All for owner ->>>>>>>>',userId)
  // createForm.value.owner = userId;
  // createForm.value.owner = this.userService.currentUser.userId;
  this.recipeService.updateRecipe$(createForm.value,recipeId).subscribe({
    next:(recipe)=>{
 console.log('>',recipe)
    },
   complete:()=>{
    this.ngOnInit()
   },
    error:(error)=>{
      this.router.navigate([`/login`])}
      
      
    });

  })
  this.editMode = false;

  }
}

  // this.activatedRoute.params.subscribe(params => {
  //   const recipeId = params['recipeId'] // ?
  //   console.log('ID ---->',recipeId)

    // this.recipeService.deleteRecipe$(recipeId).subscribe({
    //   next:(recipe)=>{
    //     console.log('next >',recipe)
    //     this.router.navigate(['/recipes'])
    //     console.log('after next -->')
    
    //   },
    //   error:(error)=>{
    //     this.errorMessage == error.error.error;
    //     this.router.navigate([`/recipes/${recipeId}`])

        
    //   });
    // };
    // }


        // this.recipe = recipe['results']
        // console.log('after Results-->',this.recipe)


  


          // this.router.navigate([`/recipes/${recipeId}`]);
      // this.router.routeReuseStrategy.shouldReuseRoute=() => false;
      // this.router.onSameUrlNavigation = 'reload';
      // this.router.navigate(['/']),
      // {relativeTo: this.route }