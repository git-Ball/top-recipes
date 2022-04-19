import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/core/interfaces';
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
errorMessage:string='';
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  handleLogin():void{
    this.errorMessage =''
    const body:RegisterModel={
      username:this.loginFormGroup.value.username,  
      password:this.loginFormGroup.value.password,  
      }
   this.userService.login$(body).subscribe({
        next:()=>{
             this.userService.login()
        
        this.router.navigate(['/home']);
       
        },
        error:(err) =>{
          this.errorMessage = err.error.error;
      
        }
      })

      

  }

}
