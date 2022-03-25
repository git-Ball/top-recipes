import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';



@NgModule({
  declarations: [
    RecipesPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[RecipesPageComponent]
})
export class RecipesModule { }
