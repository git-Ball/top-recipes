import { Component, Input, OnInit, Output } from '@angular/core';
import { IRecipe } from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';


@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {
  recipeList: Array<IRecipe>;
  searchRecipeList: Array<IRecipe>;
recipeSearchList:Array<IRecipe> = [];
// @Input() data= this.recipeSearchList;
  constructor(
    private recipeService:RecipeService,
    

  ) { }
  hasSearch:boolean=false;
  get searched(){
    return this.hasSearch;
  }
 
search(search){
  this.recipeService.currentSearch.length = 0
  this.hasSearch = true;
 console.log(search) 
//  this.recipeService.searchRecipesFromBack4App$().subscribe(recipe =>{
//   // console.log(recipe.results)
//   //TODO limit(3)>?
//   // this.recipeListLimited = recipe['results'].slice(0, 3) //.limit(3);
//   this.searchRecipeList = recipe['results']
//   // console.log('limit >',this.recipeListLimited)
// console.log('v all searcha fnc  >  >>>>',this.searchRecipeList)



// })
for (let index = 0; index < this.recipeList.length; index++) {
let currentRecipe =this.recipeList[index]
 console.log(currentRecipe.recipeName,index)
//  console.log(currentRecipe.recipeName.includes(search))
  if(currentRecipe.recipeName.toLocaleLowerCase().includes(search.search.toLocaleLowerCase())){
    console.log('match',currentRecipe.recipeName)
    console.log('in Search after match',this.recipeSearchList)
this.recipeSearchList.push(currentRecipe);
this.recipeService.currentSearch = this.recipeSearchList;
// setTimeout(()=>{
//   this.recipeService.currentSearch.length = 0;
//   console.log('done!!!!!!!!!!!!!')},5000)
  }
}
console.log('after search----->',this.recipeSearchList)
}
ngOnInit(): void {
  // this.recipeService.loadRecipes().subscribe(themeList=>{
  //   this.themeList = themeList;
  //   console.log('testvame  .>>>',this.themeList)
  // })
  this.recipeService.loadRecipesFromBack4App().subscribe(recipe =>{
    // console.log(recipe.results)
    //TODO limit(3)>?
    // this.recipeListLimited = recipe['results'].slice(0, 3) //.limit(3);
    this.recipeList = recipe['results']
    // console.log('limit >',this.recipeListLimited)
  console.log('v all comp  >  >>>>',this.recipeList)
  
  
  
  })
  // this.recipeService.loadRecipesFromBack4App().subscribe(recipe =>{
  //   // console.log(recipe.results)
  //   //TODO limit(3)>?
  //   this.recipeList = recipe['results']
  // console.log('no limit >',this.recipeList)
   
  
  // })
  
    }

}
