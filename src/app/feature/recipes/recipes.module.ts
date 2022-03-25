import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RecipesPageComponent,
    AllRecipesComponent
  ],
  imports: [
    CommonModule,
    // RouterModule
  ],
  exports:[
    RecipesPageComponent,
    AllRecipesComponent
  ]
})
export class RecipesModule { }
