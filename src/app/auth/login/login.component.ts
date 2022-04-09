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
  loginHandler():void{
// this.userService.login();
// this.router.navigate(['/home']);
console.log('form is submitted',this.loginFormGroup);

  }
  handleLogin():void{
    this.errorMessage =''
    const body:RegisterModel={
      username:this.loginFormGroup.value.username,  
      password:this.loginFormGroup.value.password,  
      }
      // const userData:Object={};
      // console.log(body)
      // return body;

      //raboteshto
      // this.userService.login$(body).subscribe(()=>{
      //   this.userService.login()
      //   this.userService.currentUser = body.username;
      //   // console.log('Current User --- >', this.userService.getUser)
      //   console.log('Current User2 --- >', this.userService.currentUser)
      //   this.router.navigate(['/home']);
        
      // })
      // ()=>{
      //   this.userService.login()
      //   this.userService.currentUser = body.username;
      //   // console.log('Current User --- >', this.userService.getUser)
      //   console.log('Current User2 --- >', this.userService.currentUser)
      //   this.router.navigate(['/home']);
        
      // }
      this.userService.login$(body).subscribe({
        next:()=>{
             this.userService.login()
        this.userService.currentUser = body.username;
        // console.log('Current User --- >', this.userService.getUser)
        console.log('Current User --- >', this.userService.currentUser)
        this.router.navigate(['/home']);
        },
        error:(err) =>{
          this.errorMessage = err.error.error;
      
        }
      })

      // Simple geolocation API check provides values to publish
  // if ('geolocation' in navigator) {
  //   watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
  //     observer.next(position);
  //   }, (error: GeolocationPositionError) => {
  //     observer.error(error);
  //   });
  // } else {
  //   observer.error('Geolocation not available');
  // }

  }
  onSubmit():void{
    // const body:RegisterModel={
    //   username:this.loginFormGroup.value.username,  
    //   password:this.loginFormGroup.value.password,  
    //   }
    //   // const userData:Object={};
    //   // console.log(body)
    //   // return body;
    //   this.userService.login$(body).subscribe(()=>{
    //     this.userService.login()
    //     this.userService.currentUser = body.username;
    //     console.log('Current User --- >', this.userService.getUser)
    //     console.log('Current User2 --- >', this.userService.currentUser)
    //     this.router.navigate(['/home']);
        
    //   })
  }
}
