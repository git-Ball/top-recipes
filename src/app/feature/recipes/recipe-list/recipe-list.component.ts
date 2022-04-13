import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IRecipe} from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, AfterViewInit {
//TODO somo za testa. themeService >>
  constructor(private recipeService:RecipeService) { }
  
  // themeList: ITheme[];
  recipeListLimited: Array<IRecipe>;
  recipeList: Array<IRecipe>;
  // recipeList: IRecipe[];
  // recipeList: any;
  ngOnInit(): void {
// this.recipeService.loadRecipes().subscribe(themeList=>{
//   this.themeList = themeList;
//   console.log('testvame  .>>>',this.themeList)
// })
this.recipeService.loadRecipesFromBack4App().subscribe(recipe =>{
  // console.log(recipe.results)
  //TODO limit(3)>?
  this.recipeListLimited = recipe['results'].slice(0, 3) //.limit(3);
  this.recipeList = recipe['results']
  // console.log('limit >',this.recipeListLimited)
console.log('no limit  >  >>>>',this.recipeList)



})
// this.recipeService.loadRecipesFromBack4App().subscribe(recipe =>{
//   // console.log(recipe.results)
//   //TODO limit(3)>?
//   this.recipeList = recipe['results']
// console.log('no limit >',this.recipeList)
 

// })

  }
ngAfterViewInit(): void {
  console.log('View was initialized');
}

}
