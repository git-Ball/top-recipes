import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  testa:boolean = false;
// get isLoggedIn(): boolean{
//   return true;
//   // return this.userService.isLogged;
// }
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    // console.log(this.userService.isLogged)
    console.log('Check',this.testa)
  }
loginHandler():void {
this.userService.login()
}
logoutHandler():void {
this.userService.logout()
  
}
}
