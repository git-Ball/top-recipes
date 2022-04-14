import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {
  getUsername: string =
  this.userService.currentUser.ownerUsername;
  getUserId: string =
 localStorage['objectId']
  recipeList: Array<IRecipe>;
  constructor(
private userService:UserService,
private recipeService:RecipeService,

  ) { }

  ngOnInit(): void {
    console.log(this.getUsername)

    this.recipeService.loadRecipesFromBack4App().subscribe(recipe =>{
      // console.log(recipe.results)
      //TODO limit(3)>?
//       const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);
      // this.recipeList = recipe['results'].filter(recipe=>recipe.owner.objectId == this.getUserId) //.limit(3);
      this.recipeList = recipe['results'].filter(recipe=>recipe.owner.objectId == this.getUserId)
        // let currentRec = recipe.owner;
        // if(currentRec.objectId == this.getUserId){
        //   console.log('meow')
        // }
         //console.log(recipe.owner.objectId))
       
      // this.recipeList = recipe['results']
      // console.log('limit >',this.recipeListLimited)
    console.log('all > >',this.recipeList)
  })
  }
}
