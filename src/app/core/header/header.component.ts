import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
get getUser():string{
  return this.userService.currentUser;
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
