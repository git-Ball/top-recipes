import { RouterModule, Routes } from "@angular/router";
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
    {
        path:'create',
        component:CreatePageComponent,
    },
 
]
export const RecipesRoutingModule = RouterModule.forChild(routes)