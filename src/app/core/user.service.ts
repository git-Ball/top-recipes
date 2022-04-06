import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
isLogged:boolean = false;
  constructor() { }
  
  login():void{
    this.isLogged = true;
  }
  logout():void {
    this.isLogged = false;
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