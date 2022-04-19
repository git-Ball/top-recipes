import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IRecipe} from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, AfterViewInit {

  constructor(private recipeService:RecipeService) { }
  
 
  // recipeListLimited: Array<IRecipe>;
  recipeList: Array<IRecipe>;
  
  ngOnInit(): void {


this.recipeService.loadRecipesFromBack4App().subscribe(recipe =>{
 
  // this.recipeListLimited = recipe['results'].slice(0, 3) //.limit(3);
  this.recipeList = recipe['results'].reverse()
 




})


  }
ngAfterViewInit(): void {
  console.log('View was initialized');
}

}
