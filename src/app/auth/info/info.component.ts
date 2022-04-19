import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
recipeOwner:string = this.userService.recipeOwner;
  // getUserId: string =
  //  this.currentUser.objectId;
  recipeOwnerUsername:string=this.userService.recipeOwnerUsername;
  userAllRecipes:Array<IRecipe>=this.userService.userAllRecipes;

  constructor(
  private recipeService:RecipeService,
  private userService:UserService
  
  ) { }

  ngOnInit(): void {
 
 
  this.recipeService.loadRecipesFromBack4App().subscribe(recipe =>{
    
    this.userAllRecipes = recipe['results'].filter(recipe=>recipe.owner.objectId == this.recipeOwner)
     
})

  }

}
