import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './feature/pages/page-not-found/page-not-found.component';
import { RecipesDetailsPageComponent } from './feature/recipes/recipes-details-page/recipes-details-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
},
{path:'home',component:HomePageComponent},
{path:'home/:recipeId',
        component:RecipesDetailsPageComponent},
{path:'**',component:PageNotFoundComponent}
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const AppRoutingModule = RouterModule.forRoot(routes);