import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RouterModule } from '@angular/router';
import { RecipesRoutingModule } from './recipes-routing-module';



@NgModule({
  declarations: [
    RecipesPageComponent,
    AllRecipesComponent
  ],
  imports: [
    CommonModule,
    // RouterModule
    RecipesRoutingModule
  ],
  exports:[
    RecipesPageComponent,
    AllRecipesComponent
  ]
})
export class RecipesModule { }
