import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesModule } from '../feature/recipes/recipes.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    MyRecipesComponent,
    ProfileComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // RouterModule
    ReactiveFormsModule,
    RecipesModule,
    MatProgressSpinnerModule
   
  ],
  exports:[
  
  ]
})
export class AuthModule { }
