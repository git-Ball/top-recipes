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
  return this.userService.isLogged;
}
get getUser():IUserInfo{
  return this.userService.currentUser;
  return this.userService.currentUser;
}
get userInfo():any{
  return localStorage;
}
  constructor(
    private userService:UserService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    // console.log(this.userService.isLogged)
    // console.log('Check',this.testa)
  }
loginHandler():void {
this.userService.login()
}
logoutHandler():void {
this.userService.logout()
this.router.navigate(['/home']);
  
}
}
