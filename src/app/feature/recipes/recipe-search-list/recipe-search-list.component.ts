import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { IRecipe } from 'src/app/core/interfaces';

import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-recipe-search-list',
  templateUrl: './recipe-search-list.component.html',
  styleUrls: ['./recipe-search-list.component.scss']
})

export class RecipeSearchListComponent implements OnInit, OnDestroy {
 
  getHasSearch: boolean = this.recipeService.hasSearch;
  getSearch: Array<IRecipe> =
    this.recipeService.currentSearch;

  constructor(
    private recipeService: RecipeService

  ) { }

  ngOnInit(): void {


  }
  onReset(): void {
    this.recipeService.hasSearch = false;


  }
  ngOnDestroy(): void {
    this.recipeService.hasSearch = false;
   
  }
}
