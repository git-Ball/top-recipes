import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private userService:UserService,
    private router:Router
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
  onDelete(){
    // this.activatedRoute.params.subscribe(params => {
    //   const recipeId = params['recipeId'] // ?
    //   console.log('ID ---->',recipeId)
    //    this.recipeService.deleteRecipe$(recipeId).subscribe({
    //     next:(recipe)=>{
    //       console.log('next >',recipe)
    //       this.router.navigate(['/recipes'])
    //       console.log('after next -->')
      
    //     },
    //     error:(error)=>{
    //       this.errorMessage == error.error.error;
    //       this.router.navigate([`/recipes/${recipeId}`])

          
    //     };
    //   });
    //   }
    };
  }

    


        // this.recipe = recipe['results']
        // console.log('after Results-->',this.recipe)

   

  
