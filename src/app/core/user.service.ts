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

  hasLogged: boolean = false;


  currentUser: IUserInfo = {
    className:'_User',
  objectId: '',
  __type: "Pointer",
  ownerUsername: ''

  };
  getUsername: string =
   this.currentUser.ownerUsername;
  
getUserId: string =
   this.currentUser.objectId;
  


  constructor(
    private http: HttpClient,
    private router:Router

  ) { }


  login(): void {
    this.hasLogged = true;
    console.log(localStorage)
  }
  logout(): void {
    this.hasLogged = false;
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

  }
  login$(user: RegisterModel): Observable<RegisterModel> {


    const newUser$ = this.http.post<RegisterModel>(`${environment.apiUrl}/login`, user, this.httpOptions)
    newUser$.pipe().subscribe(res => {
     
    
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
      // console.log('po dolu',user)
      // console.log('USER DATA',localStorage)
      // console.log('USER sessionToken',localStorage.getItem('sessionToken'))
      // console.log('USER objectId',localStorage.getItem('objectId'))
      // console.log('USER username',localStorage.getItem('username'))
      // console.log(this.currentUser.userId = res.objectId)
    this.currentUser.ownerUsername = user.username;

    })
    return newUser$;

  }

  
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

    // console.log('po dolu',user)
    // console.log('USER DATA',localStorage)
    // console.log('USER sessionToken',localStorage.getItem('sessionToken'))
    // console.log('USER objectId',localStorage.getItem('objectId'))
    // console.log('USER username',localStorage.getItem('username'))

    }
    
   
    
}
  ))
     
  
  }
 
 


}





