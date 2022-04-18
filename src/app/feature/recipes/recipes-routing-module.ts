import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { AllRecipesComponent } from "./all-recipes/all-recipes.component";
import { CreatePageComponent } from "./create-page/create-page.component";
import { RecipesDetailsPageComponent } from "./recipes-details-page/recipes-details-page.component";

// 
const routes:Routes =[
    {
        path:'recipes',
        component:AllRecipesComponent,
    },
    {
        path:'recipes/:recipeId',
        component:RecipesDetailsPageComponent,
    },
    // {
    //     path:'recipes/:recipeId/:recipeId',
    //     component:RecipesDetailsPageComponent,
    // },
    {
        path:'create',
        canActivate:[AuthGuard],
        component:CreatePageComponent,
    },
    // {path: '', component: defaultniq, pathMatch : 'full' }
]
export const RecipesRoutingModule = RouterModule.forChild(routes)