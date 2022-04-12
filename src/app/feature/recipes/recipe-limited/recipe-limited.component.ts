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
     
      // this.recipeListLimited = recipe['results'].slice(0, 3) //.limit(3);
      this.recipeListLimited = recipe['results']
      console.log(this.recipeListLimited.length);

      if(this.recipeListLimited.length>=3){
       console.log('vytre1');

      this.recipeListLimited = recipe['results'].slice(-3).reverse();
      // let counter=0;
      // let el = this.recipeListLimited.shift();
      // this.recipeListLimited.push(el)
      // el = this.recipeListLimited.shift();
      // this.recipeListLimited.push(el)
      //  el = this.recipeListLimited.shift();
      // this.recipeListLimited.push(el)
      // for (let index = 1; 3 <= index; index++) {
      //   console.log('vytre3',index);
        
      //  let el = this.recipeListLimited.shift();
      //  console.log(el)
      //  this.recipeListLimited.push(el)
        
      // }
         
     console.log('vytre2',this.recipeListLimited)
     
      }
      else{
        this.recipeListLimited.reverse()
      }
     
  });

  }
}
