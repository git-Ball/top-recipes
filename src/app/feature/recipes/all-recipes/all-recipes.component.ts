import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { IRecipe } from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';


@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  resetButton: boolean = false;
  recipeList: Array<IRecipe>;
  searchRecipeList: Array<IRecipe>;
  recipeSearchList: Array<IRecipe> = [];

  constructor(
    private recipeService: RecipeService,


  ) { }

  get searched() {
    return this.recipeService.hasSearch;
  }

  searchResult(search) {
    this.recipeService.hasSearch = true;

    if (search.search == null) {
search.search = ''
    }
//Reset
    this.recipeService.currentSearch.length = 0

    this.form.reset();






    //Search matching
    for (let index = 0; index < this.recipeList.length; index++) {
      let currentRecipe = this.recipeList[index]
      if (currentRecipe.recipeName.toLocaleLowerCase().includes(search.search.toLocaleLowerCase())) {
        //Has match
        this.recipeSearchList.push(currentRecipe);
        this.recipeService.currentSearch = this.recipeSearchList;


      }

    }


  }
  ngOnInit(): void {
 
    this.recipeService.loadRecipesFromBack4App().subscribe(recipe => {

      this.recipeList = recipe['results']
      
  
 
   



    })
 

  }

}
