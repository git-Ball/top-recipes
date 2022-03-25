import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    MyRecipesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // RouterModule
   
  ],
  exports:[
  
  ]
})
export class AuthModule { }
