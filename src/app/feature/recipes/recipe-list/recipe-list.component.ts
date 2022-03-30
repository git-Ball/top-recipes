import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ITheme } from 'src/app/core/interfaces';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, AfterViewInit {
//TODO somo za testa. themeService >>
  constructor(private recipeService:RecipeService) { }
  
  themeList: ITheme[];
  ngOnInit(): void {
this.recipeService.loadRecipes().subscribe(themeList=>{
  this.themeList = themeList;
  console.log('testvame  .>>>',this.themeList)
})

  }
ngAfterViewInit(): void {
  console.log('View was initialized');
}

}
