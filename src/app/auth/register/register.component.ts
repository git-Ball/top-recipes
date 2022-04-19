import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';
import { passwordMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  get passwordsGroup():FormGroup{
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  passwordControl =new FormControl('', [Validators.required, Validators.minLength(5)]);
  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
  
      'repass': new FormControl(null,[passwordMatch(this.passwordControl)]),
    }),


  })
errorMessage:string='';

  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService,
    private router:Router,
    ) { }

  ngOnInit(): void {
  }
  handleRegister():void{
    this.errorMessage =''
 
    const body:RegisterModel = {
    username:this.registerFormGroup.value.username,  
    password:this.registerFormGroup.value.passwords.password,  
    }

    this.userService.register$(body).subscribe({
      next:()=>{
        this.userService.register$(body)
        .pipe().subscribe(res => {
           
            for (const prop in res) {
              if (prop == 'objectId') {
                this.userService.currentUser.objectId = res[prop];
              }
           
            }
            this.userService.currentUser.ownerUsername = body.username;
            
          
          
          
          })

       
        
      },
      complete:() =>{
        this.userService.login()
    
        this.router.navigate(['/home']);
      },
      error:(err)=>{
        this.errorMessage = err.error.error;
console.log(this.errorMessage)
      }
    
      
    })
  }
}

