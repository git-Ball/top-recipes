import { Component, Input, OnInit } from '@angular/core';
import { ITheme } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss']
})
export class RecipeListItemComponent implements OnInit {
isLoggedIn:boolean = this.userService.isLogged; //not needed

//check s tema useless
@Input() theme:ITheme;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
