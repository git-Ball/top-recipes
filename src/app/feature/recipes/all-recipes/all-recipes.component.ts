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
@ViewChild('form') form!:NgForm;
// @ViewChild('search') search!:NgModel;
resetButton:boolean=false;
  recipeList: Array<IRecipe>;
  searchRecipeList: Array<IRecipe>;
recipeSearchList:Array<IRecipe> = [];
// @Input() data= this.recipeSearchList;
  constructor(
    private recipeService:RecipeService,
    

  ) { }
  // hasSearch:boolean=false;
  get searched(){
    return this.recipeService.hasSearch;
  }
//   checkMe():void{
//     console.log('----------------------------->',this.search.viewModel)
//     if(this.search.viewModel.length>0){
// this.resetButton = true;
// console.log(this.resetButton)
//     }
// this.resetButton = false;
// console.log(this.resetButton)

//   }
searchResult(search){
  this.recipeService.hasSearch = true;
console.log(search)
console.log(search.search =='')
console.log(this.recipeService.currentSearch.length)
  if(search.search == null){


    search.search =''
    console.log(search.search =='')


    
   }
 console.log(search.search) 
 this.recipeService.currentSearch.length = 0

  this.form.reset()

 console.log(search.search) 
//  this.recipeService.searchRecipesFromBack4App$().subscribe(recipe =>{
//   // console.log(recipe.results)
//   //TODO limit(3)>?
//   // this.recipeListLimited = recipe['results'].slice(0, 3) //.limit(3);
//   this.searchRecipeList = recipe['results']
//   // console.log('limit >',this.recipeListLimited)
// console.log('v all searcha fnc  >  >>>>',this.searchRecipeList)



// })
for (let index = 0; index < this.recipeList.length; index++) {
let currentRecipe = this.recipeList[index]
 console.log(currentRecipe.recipeName,index)

//  console.log(currentRecipe.recipeName.includes(search))
  if(currentRecipe.recipeName.toLocaleLowerCase().includes(search.search.toLocaleLowerCase())){
    console.log('match',currentRecipe.recipeName)
    console.log('in Search after match',this.recipeSearchList)
this.recipeSearchList.push(currentRecipe);
this.recipeService.currentSearch = this.recipeSearchList;

console.log('MATCH')
  }

}
// if(this.recipeService.currentSearch.length == 0){
//   this.recipeService.hasSearch = false;

// }
console.log('_______________________________')

console.log('after search----->',this.recipeSearchList)
console.log(this.recipeService.currentSearch)
console.log(this.recipeService.currentSearch.length)
console.log(this.recipeService.hasSearch)
console.log('_______________________________')
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
