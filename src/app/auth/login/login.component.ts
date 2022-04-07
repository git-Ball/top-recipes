import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginFormGroup:FormGroup = this.formBuilder.group({
'username':new FormControl('',[Validators.required,Validators.minLength(5)]),
'password':new FormControl('',[Validators.required,Validators.minLength(5)]),
});
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  loginHandler():void{
// this.userService.login();
// this.router.navigate(['/home']);
console.log('form is submitted',this.loginFormGroup);

  }
  handleLogin():void{
console.log('form must be submitted');

  }
  onSubmit():void{
    // if(this.recipeName.errors){
    //   // this.recipeName.invalid;
    //   console.log('recipeName')
  
    // }
    // if(this.ingredients.errors){
    //   // this.ingredients.invalid;
  
    //   console.log('ingredients')
  
    // }
    // if(this.preparation.errors){
    //   // this.preparation.invalid;
    //   // this.preparation.touched;
  
    //   console.log('preparation')
  
    // }
  }
}
