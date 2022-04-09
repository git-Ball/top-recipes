import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IRecipe, IUser } from './interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { ICreateRecipe } from './interfaces/createRecipe';
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  //  headers:Object = {
  //   'Content-Type': 'application/json',
  //   'X-Parse-Application-Id':'0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw',
  //   'X-Parse-REST-API-Key':'zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR'
  // }
  // httpOptions = {headers: this.headers }
  constructor(private http: HttpClient) { }

  loadRecipesFromBack4App(): Observable<IRecipe[]> {

    const headers = {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': '0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw',
      'X-Parse-REST-API-Key': 'zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR'
    }
    return this.http.get<IRecipe[]>(`${apiUrl}/classes/recipes`, { headers });

  }
  loadRecipeById(id: string): Observable<IRecipe[]> {

    const headers = {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': '0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw',
      'X-Parse-REST-API-Key': 'zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR'
    }
    return this.http.get<IRecipe[]>(`${apiUrl}/classes/recipes/${id}`, { headers });

  }
// createRecipe(recipe:ICreateRecipe):Observable<ICreateRecipe>{
//   const headers = {
//     'Content-Type': 'application/json',
//     'X-Parse-Application-Id': '0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw',
//     'X-Parse-REST-API-Key': 'zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR'
//   }
//   return this.http.post(`${apiUrl}/classes/recipes`,recipe,{headers})
// }
}
