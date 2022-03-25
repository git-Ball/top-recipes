import { RouterModule, Routes } from "@angular/router";
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
    }
]
export const AuthRoutingModule = RouterModule.forChild(routes);