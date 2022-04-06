import { Component, OnInit } from '@angular/core';
import { IRecipe} from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-recipe-limited',
  templateUrl: './recipe-limited.component.html',
  styleUrls: ['./recipe-limited.component.scss']
})
export class RecipeLimitedComponent implements OnInit {
  recipeListLimited: Array<IRecipe>;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.loadRecipesFromBack4App().subscribe(recipe =>{
     
      this.recipeListLimited = recipe['results'].slice(0, 3) //.limit(3);
     
  });

  }
}
