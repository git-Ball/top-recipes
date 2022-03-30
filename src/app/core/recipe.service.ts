import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { IRecipe,ITheme,IUser } from './interfaces';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }
  //TODO Cr8 Service 2:30
  loadRecipes():Observable<ITheme[]>{
    return this.http.get<ITheme[]>(`${apiUrl}/themes`);
  
  }
}
