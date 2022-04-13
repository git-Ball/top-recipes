import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser, RegisterModel } from './interfaces';
import { IUserInfo } from './interfaces/userInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged: boolean = false;

  // className:string;
  // objectId: string;
  // __type: "Pointer"
  // ownerUsername: string;
  currentUser: IUserInfo = {
    className:'_User',
  objectId: '',
  __type: "Pointer",
  ownerUsername: ''
    // username: '',
    // userId: ''
  };
  getUsername: string =
   this.currentUser.ownerUsername;
  
getUserId: string =
   this.currentUser.objectId;
  

  // const body:RegisterModel={
  //   username:this.loginFormGroup.value.username,  
  //   password:this.loginFormGroup.value.password,  
  //   }
  constructor(
    private http: HttpClient,
    private router:Router

  ) { }


  login(): void {
    this.isLogged = true;
    console.log(localStorage)
  }
  logout(): void {
    this.isLogged = false;
    localStorage.clear();
    console.log(localStorage)

  }
  headers = {
    "X-Parse-Application-Id": "0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw",
    "X-Parse-REST-API-Key": "zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR",
    "X-Parse-Revocable-Session": "1",
    "Content-Type": "application/json"
  }
  httpOptions = {
    headers: this.headers,
    // observe:'response',
    // responseType:'json',
    // withCredentials: true,
  }
  login$(user: RegisterModel): Observable<RegisterModel> {


    const newUser$ = this.http.post<RegisterModel>(`${environment.apiUrl}/login`, user, this.httpOptions)
    newUser$.pipe().subscribe(res => {
      console.log('v pipe-a ',user)
      // console.log(res.objectId)
      for (const prop in res) {
        console.log(prop)
        if (prop == 'objectId') {
          this.currentUser.objectId = res[prop];
          console.log('sessionToken ->>>',localStorage.setItem('objectId',res[prop]))

        }
        if(prop=='sessionToken'){
          console.log('sessionToken ->>>',localStorage.setItem('sessionToken',res[prop]))
        }
        if (prop == 'username') {
          // this.currentUser.ownerUsername = res[prop];
          console.log('sessionToken ->>>',localStorage.setItem('username',res[prop]))

        }

      }
      console.log('po dolu',user)
      console.log('USER DATA',localStorage)
      console.log('USER sessionToken',localStorage.getItem('sessionToken'))
      console.log('USER objectId',localStorage.getItem('objectId'))
      console.log('USER username',localStorage.getItem('username'))
      // console.log(this.currentUser.userId = res.objectId)
    this.currentUser.ownerUsername = user.username;

    })
    return newUser$;
    // .pipe(tap(HttpResponse)
    //    .pipe(
    //   tap(response=>console.log(response)),
    //   map(response=>response.body),
    //   tap(user => this.currentUser=user),
    // )
  }

  //  headers = new HttpHeaders({
  //   "X-Parse-Application-Id": "R0WtNmFwokwdGtOT4CFUCoQvwUGi4oYwOZApCJEx",
  //   "X-Parse-REST-API-Key": "0FeOARd9BQA3wKP7maLZPGQBN15R6UYz5v2E9vpu",
  //   "X-Parse-Revocable-Session": "1",
  //   "Content-Type": "application/json"
  // })

  // url = "https://parseapi.back4app.com/users";
  // httpOptions = {headers: this.headers }

  // constructor(private user: RegisterModel,private http: HttpClient) { }

  // addUser(user: RegisterModel): Observable<RegisterModel>{
  //   return this.http.post<RegisterModel>(this.url, user, this.httpOptions)
  // }



  // register$(username:string,password:string):Observable<IUser>{
  register$(user: RegisterModel): Observable<RegisterModel> {
     
return this.http.post<RegisterModel>(`${environment.apiUrl}/users`, user, this.httpOptions)
.pipe(tap(response =>{
    for (const prop in response) {
      if (prop == 'objectId') {
        console.log(response[prop])
        this.currentUser.objectId = response[prop];
      }
    
    if(prop=='sessionToken'){
      console.log('sessionToken ->>>',localStorage.setItem('sessionToken',response[prop]))
    }
    if (prop == 'username') {
      // this.currentUser.ownerUsername = res[prop];
      console.log('sessionToken ->>>',)

    }
      // if (prop == 'username') {
      //   this.currentUser.ownerUsername = res[prop];
      // }
    this.currentUser.ownerUsername = user.username;
    localStorage.setItem('username',user.username)

    console.log('po dolu',user)
    console.log('USER DATA',localStorage)
    console.log('USER sessionToken',localStorage.getItem('sessionToken'))
    console.log('USER objectId',localStorage.getItem('objectId'))
    console.log('USER username',localStorage.getItem('username'))

    }
    
   
    console.log(this.currentUser.ownerUsername)
    console.log(this.currentUser)
    // console.log(this.currentUser.userId = res.objectId)
}
  ))
     
  // const newUser$ = this.http.post<RegisterModel>(`${environment.apiUrl}/users`, user, this.httpOptions)
  // this.router.navigate(['/home'])
  // newUser$.pipe().subscribe(res => {
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
  //   return newUser$;
  }
  // TODO change registerModel if add more props for register!!!!
  // login$(user :RegisterModel):Observable<RegisterModel>{
  //   return this.http.post<RegisterModel>(`${environment.apiUrl}/login`,user,this.httpOptions)
  //   .pipe(tap(objectId=>this.currentUser=objectId))
  //   }
  // login$(user :RegisterModel):Observable<RegisterModel>{
  //   return this.http.post<RegisterModel>(`${environment.apiUrl}/login`,user,this.httpOptions)
  //   .pipe(
  //     tap(response=>console.log(response)),
  //     map(response=>response.body),
  //     tap(user => this.currentUser=user),
  //   )
  //   }


}





// export class UserService {

  // headers = new HttpHeaders({
  //   "X-Parse-Application-Id": "R0WtNmFwokwdGtOT4CFUCoQvwUGi4oYwOZApCJEx",
  //   "X-Parse-REST-API-Key": "0FeOARd9BQA3wKP7maLZPGQBN15R6UYz5v2E9vpu",
  //   "X-Parse-Revocable-Session": "1",
  //   "Content-Type": "application/json"
  // })

  // url = "https://parseapi.back4app.com/users";
  // httpOptions = {headers: this.headers }

  // constructor(private user: RegisterModel,private http: HttpClient) { }

  // addUser(user: RegisterModel): Observable<RegisterModel>{
  //   return this.http.post<RegisterModel>(this.url, user, this.httpOptions)
  // }
// }

// register$(userData: {username:string,password:string}):Observable<IUser>{

// }
