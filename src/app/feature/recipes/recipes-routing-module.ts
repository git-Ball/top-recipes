import { RouterModule, Routes } from "@angular/router";
import { AllRecipesComponent } from "./all-recipes/all-recipes.component";
// 
const routes:Routes =[
    {
        path:'recipes',
        component:AllRecipesComponent,
    },
    // {
    //     path:'recipes/new',
    //     component:,
    // },
    // {
    //     path:'recipes/:recipesId',
    //     component:,
    // }
]
export const RecipesRoutingModule = RouterModule.forChild(routes)