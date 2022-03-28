import { RouterModule, Routes } from "@angular/router";
import { AllRecipesComponent } from "./all-recipes/all-recipes.component";
import { CreatePageComponent } from "./create-page/create-page.component";

// 
const routes:Routes =[
    {
        path:'recipes',
        component:AllRecipesComponent,
    },
    {
        path:'create',
        component:CreatePageComponent,
    },
    // {
    //     path:'recipes/:recipesId',
    //     component:,
    // }
]
export const RecipesRoutingModule = RouterModule.forChild(routes)