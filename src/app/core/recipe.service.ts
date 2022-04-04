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
  // loadRecipes():Observable<ITheme[]>{
  //   return this.http.get<ITheme[]>(`${apiUrl}/themes`);
  
  // }
  loadRecipesFromBack4App():Observable<IRecipe[]>{
    
const headers = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id':'0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw',
  'X-Parse-REST-API-Key':'zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR'
}
    return this.http.get<IRecipe[]>(`${apiUrl}/classes/recipes`,{headers});
  
  }
  loadRecipeById(id:string):Observable<IRecipe[]>{
    
    const headers = {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id':'0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw',
      'X-Parse-REST-API-Key':'zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR'
    }
        return this.http.get<IRecipe[]>(`${apiUrl}/classes/recipes/${id}`,{headers});
      
      }
}
