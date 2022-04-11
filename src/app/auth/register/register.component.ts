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
      //TODO pass == repass
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
    // console.log(this.registerFormGroup.value)
    const body:RegisterModel = {
    username:this.registerFormGroup.value.username,  
    password:this.registerFormGroup.value.passwords.password,  
    }
    // const userData:Object={};
    // console.log(body)
    // return body;
    this.userService.register$(body).subscribe({
      next:()=>{
        this.userService.register$(body)
        .pipe().subscribe(res => {
            console.log(res)
            // console.log(res.objectId)
            for (const prop in res) {
              console.log(res[prop])
              if (prop == 'objectId') {
                this.userService.currentUser.objectId = res[prop];
              }
              // if (prop == 'username') {
              //   this.currentUser.ownerUsername = res[prop];
              // }
            }
            this.userService.currentUser.ownerUsername = body.username;
            
          
            // console.log(this.currentUser.ownerUsername)
            console.log(this.userService.currentUser)
            // console.log(this.currentUser.userId = res.objectId)
          
          })

       
        
      },
      complete:() =>{
        this.userService.login()
        // this.userService.currentUser = body.username;
        console.log('Current User ---  sled register>', this.userService.currentUser)
        this.router.navigate(['/home']);
        console.log('vechte trqbva navigate')
      },
      error:(err)=>{
        this.errorMessage = err.error.error;
console.log(this.errorMessage)
      }
    
      
    })
  }
}

// .pipe().subscribe(res => {
//   console.log(res)
//   // console.log(res.objectId)
//   for (const prop in res) {
//     if (prop == 'objectId') {
//       this.currentUser.objectId = res[prop];
//     }
//     // if (prop == 'username') {
//     //   this.currentUser.ownerUsername = res[prop];
//     // }
//   }
//   this.currentUser.ownerUsername = user.username;
  

//   console.log(this.currentUser.ownerUsername)
//   console.log(this.currentUser)
//   // console.log(this.currentUser.userId = res.objectId)

// })