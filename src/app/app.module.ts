import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './feature/pages/page-not-found/page-not-found.component';
import { RecipesPageComponent } from './recipes/recipes-page/recipes-page.component';
import { RecipesHomeComponent } from './recipes/recipes-home/recipes-home.component';

@NgModule({
  declarations: [
    AppComponent,
 
    HomePageComponent,
    PageNotFoundComponent,
    RecipesPageComponent,
    RecipesHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  HeaderComponent,
FooterComponent]
})
export class AppModule { }
