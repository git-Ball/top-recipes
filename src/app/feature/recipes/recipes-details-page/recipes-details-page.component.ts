import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-recipes-details-page',
  templateUrl: './recipes-details-page.component.html',
  styleUrls: ['./recipes-details-page.component.scss']
})
export class RecipesDetailsPageComponent implements OnInit {
  recipe: IRecipe[];
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const recipeId = params['recipeId'] // ?
      console.log('ID ---->',recipeId)
      this.recipeService.loadRecipeById(recipeId).subscribe(recipe => {
        // console.log('b4 Results-->',recipe)
        this.recipe = recipe;
        console.log('after-->',this.recipe)

        // this.recipe = recipe['results']
        // console.log('after Results-->',this.recipe)
      })
    });
  }
}