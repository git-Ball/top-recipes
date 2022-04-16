import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces';
import { IUserInfo } from '../interfaces/userInfo';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // testa:boolean = false;
get isLoggedIn(): boolean{
  // return false;
  return this.userService.hasLogged;
}
get getUser():IUserInfo{
  return this.userService.currentUser;
  return this.userService.currentUser;
}
get userInfo():string{
 
  return localStorage.getItem('username')
}
  constructor(
    private userService:UserService,
    private router:Router,
    ) { }

  ngOnInit(): void {
   if(!this.isLoggedIn){
    localStorage.clear();
   }
  }
loginHandler():void {
this.userService.login()
}
logoutHandler():void {
this.userService.logout()
this.router.navigate(['/home']);
  
}
}
