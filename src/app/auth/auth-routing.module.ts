import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { AuthenticatedGuard } from "../core/guards/authenticated.guard";
import { RecipesDetailsPageComponent } from "../feature/recipes/recipes-details-page/recipes-details-page.component";
import { LoginComponent } from "./login/login.component";
import { MyRecipesComponent } from "./my-recipes/my-recipes.component";
import { ProfileComponent } from "./profile/profile.component";

import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'register',
        canActivate:[AuthenticatedGuard],
        component: RegisterComponent,
    },
    {
        path: 'login',
        canActivate:[AuthenticatedGuard],

        component: LoginComponent,
    },
    {
        path: 'my-recipes',
        canActivate:[AuthGuard],
        component: MyRecipesComponent,
        
    },
    {
        path: 'profile',
        // canActivate:[AuthGuard],
        component: ProfileComponent,
        
    },
    {path:'my-recipes/:recipeId',
        component:RecipesDetailsPageComponent},
]
export const AuthRoutingModule = RouterModule.forChild(routes);