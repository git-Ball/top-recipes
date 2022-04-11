import { RouterModule, Routes } from "@angular/router";
import { RecipesDetailsPageComponent } from "../feature/recipes/recipes-details-page/recipes-details-page.component";
import { LoginComponent } from "./login/login.component";
import { MyRecipesComponent } from "./my-recipes/my-recipes.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'profile',
        // canActivate: [AuthGuard],
        component: MyRecipesComponent,
        
    },
    {path:'profile/:recipeId',
        component:RecipesDetailsPageComponent},
]
export const AuthRoutingModule = RouterModule.forChild(routes);