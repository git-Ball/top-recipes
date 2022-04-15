import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RouterModule } from '@angular/router';
import { RecipesRoutingModule } from './recipes-routing-module';
import { CreatePageComponent } from './create-page/create-page.component';
import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesDetailsPageComponent } from './recipes-details-page/recipes-details-page.component';
import { RecipeLimitedComponent } from './recipe-limited/recipe-limited.component';
import { FormsModule } from '@angular/forms';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RecipeSearchListComponent } from './recipe-search-list/recipe-search-list.component';

@NgModule({
  declarations: [
    RecipesPageComponent,
    AllRecipesComponent,
    CreatePageComponent,
    RecipeListItemComponent,
    RecipeListComponent,
    RecipesDetailsPageComponent,
    RecipeLimitedComponent,
    RecipeSearchListComponent
  ],
  imports: [
    CommonModule,
    // RouterModule,
    RecipesRoutingModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  exports:[
    RecipesPageComponent,
    AllRecipesComponent,
    CreatePageComponent,

    RecipeListItemComponent,
    RecipeListComponent,
    RecipesDetailsPageComponent,
    RecipeSearchListComponent


    
  ]
})
export class RecipesModule { }
