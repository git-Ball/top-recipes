import { Component, OnInit, Output } from '@angular/core';
import { IRecipe } from 'src/app/core/interfaces';
// import { IRecipe } from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-recipe-search-list',
  templateUrl: './recipe-search-list.component.html',
  styleUrls: ['./recipe-search-list.component.scss']
})

export class RecipeSearchListComponent implements OnInit {
  // recipeList: ;
// @Output() data 
getSearch: Array<IRecipe> =
this.recipeService.currentSearch;

  constructor(
    private recipeService:RecipeService

  ) { }

  ngOnInit(): void {
    // // this.recipeService.loadRecipes().subscribe(themeList=>{
    // //   this.themeList = themeList;
    // //   console.log('testvame  .>>>',this.themeList)
    // // })
    // this.recipeService.loadRecipesFromBack4App().subscribe(recipe =>{
    //   // console.log(recipe.results)
    //   //TODO limit(3)>?
    //   // this.recipeListLimited = recipe['results'].slice(0, 3) //.limit(3);
    //   this.recipeList = recipe['results']
    //   // console.log('limit >',this.recipeListLimited)
    // console.log('no limit  >  >>>>',this.recipeList)
    
    
    
    // })
    // this.recipeService.loadRecipesFromBack4App().subscribe(recipe =>{
    //   // console.log(recipe.results)
    //   //TODO limit(3)>?
    //   this.recipeList = recipe['results']
    // console.log('no limit >',this.recipeList)
     
    
    // })
    
      }

}
