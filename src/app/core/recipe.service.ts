import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IRecipe, IUser } from './interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { ICreateRecipe } from './interfaces/createRecipe';
import { IUpdateRecipe } from './interfaces/updateRecipe';
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  currentSearch: Array<IRecipe> = [];
  hasSearch:boolean=false;

  constructor(private http: HttpClient) { }

  loadRecipesFromBack4App(): Observable<IRecipe[]> {

    const headers = {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': '0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw',
      'X-Parse-REST-API-Key': 'zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR'
    }
    return this.http.get<IRecipe[]>(`${apiUrl}/classes/recipes`, { headers });

  }
  searchRecipesFromBack4App$(): Observable<IRecipe[]> {

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

createRecipe$(recipe:ICreateRecipe):Observable<ICreateRecipe>{
  const headers = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': '0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw',
    'X-Parse-REST-API-Key': 'zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR'
  }
  return this.http.post<ICreateRecipe>(`${apiUrl}/classes/recipes`,recipe,{headers})
}
deleteRecipe$(id: string):Observable<any>{
  const headers = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': '0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw',
    'X-Parse-REST-API-Key': 'zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR'
  }
  return this.http.delete<any>(`${apiUrl}/classes/recipes/${id}`,{headers})
}
updateRecipe$(recipe:IUpdateRecipe,id:string):Observable<IUpdateRecipe>{
  const headers = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': '0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw',
    'X-Parse-REST-API-Key': 'zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR'
  }
  return this.http.put<IUpdateRecipe>(`${apiUrl}/classes/recipes/${id}`,recipe,{headers})
}
likeRecipe$(recipe:IUpdateRecipe,id:string):Observable<IUpdateRecipe>{
  const headers = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': '0EVXYNppxGut8Cu7AcspZgM7VbEJiVQGj3aANItw',
    'X-Parse-REST-API-Key': 'zrgbHE3WQom9AF1ocIugdG1WGFaooWQFukuS4BuR'
  }
  return this.http.put<IUpdateRecipe>(`${apiUrl}/classes/recipes/${id}`,recipe,{headers})
}

}