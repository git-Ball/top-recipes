import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser, RegisterModel } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
isLogged:boolean = false;
  constructor(
    private http:HttpClient
  ) { }
  
  login():void{
    this.isLogged = true;
  }
  logout():void {
    this.isLogged = false;
  }
 headers = {
    "X-Parse-Application-Id": "0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw",
    "X-Parse-REST-API-Key": "zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR",
    "X-Parse-Revocable-Session": "1",
    "Content-Type": "application/json"
  }
  httpOptions = {headers: this.headers }

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
     register$(user :RegisterModel):Observable<RegisterModel>{
  return this.http.post<RegisterModel>(`${environment.apiUrl}/users`,user,this.httpOptions)
  }
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
