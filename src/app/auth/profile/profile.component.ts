import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  accountCreatedAt: string =
   this.userService.accountCreatedAt;
   getUser: string =
   this.userService.currentUser.ownerUsername;
   getUserId: string =
   localStorage['objectId']
   recipeList: Array<IRecipe>;
   ownerList:Array<IRecipe>;
   totalLikes:number=0;
  constructor(
private userService:UserService,
private recipeService:RecipeService

  ) { }

  ngOnInit(): void {

    this.recipeService.loadRecipesFromBack4App().subscribe(recipe =>{
      this.ownerList = recipe['results'].filter(recipe=>recipe.owner.objectId == this.getUserId)
      .forEach(recipe => {
        this.totalLikes +=recipe.likes.length;
      });
      
   

    
      this.recipeList = recipe['results'].filter(recipe=>recipe.likes.includes(this.getUserId) )
       
  
  })
  }

}
