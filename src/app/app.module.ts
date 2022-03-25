import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './feature/pages/page-not-found/page-not-found.component';
import { RecipesHomeComponent } from './feature/recipes/recipes-home/recipes-home.component';
import { RecipesPageComponent } from './feature/recipes/recipes-page/recipes-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MyRecipesComponent } from './auth/my-recipes/my-recipes.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { RecipesModule } from './feature/recipes/recipes.module';
import { PagesModule } from './feature/pages/pages.module';
import { UserService } from './core/user.service';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CoreModule } from './core/core.module';
// import { StorageService } from './core/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    // HomePageComponent,
    // PageNotFoundComponent,
    // RecipesPageComponent,
    // RecipesHomeComponent,
    // LoginComponent,
    // RegisterComponent,
    // MyRecipesComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    AuthModule,
    RecipesModule,
    PagesModule,
    AuthRoutingModule,
    CoreModule
  ],
  providers: [
    UserService,
    // StorageService
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
