import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { RecipesModule } from '../recipes/recipes.module';



@NgModule({
  declarations: [
    HomePageComponent,
    PageNotFoundComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    RecipesModule
  ],
  exports:[HomePageComponent,
  PageNotFoundComponent]
})
export class PagesModule { }
