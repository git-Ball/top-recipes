import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesModule } from '../feature/recipes/recipes.module';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    MyRecipesComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // RouterModule
    ReactiveFormsModule,
    RecipesModule

   
  ],
  exports:[
  
  ]
})
export class AuthModule { }
