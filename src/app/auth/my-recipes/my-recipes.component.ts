import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {
  getUsername: string =
  this.userService.currentUser.ownerUsername;
  getUserId: string =
 localStorage['objectId']
  recipeList: Array<IRecipe>;
  constructor(
private userService:UserService,
private recipeService:RecipeService,

  ) { }

  ngOnInit(): void {

    this.recipeService.loadRecipesFromBack4App().subscribe(recipe =>{
    
      this.recipeList = recipe['results'].filter(recipe=>recipe.owner.objectId == this.userService.currentUser.objectId)
       
  })
  }
}
