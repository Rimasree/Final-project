import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Product } from '../Classes/product';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
api_url: string="http://localhost:3000/foods";

  constructor(private http:HttpClient) { }


  addRecipe(data:any):Observable<Product[]>{
    return this.http.post<Product[]>(this.api_url,data)
  }

  getRecipe():Observable<Product[]>{
    return this.http.get<Product[]>(this.api_url)
  }
    //delete employee
    deleteRecipe(id:number):Observable<Product[]>{
      return this.http.delete<Product[]>(`${this.api_url}/${id}`)
    }
    //fetchData
    fetchRecipe(id:number):Observable<Product[]>{
      return this.http.get<Product[]>(`${this.api_url}/${id}`)
    }
    updateRecipe(id:number,RecipeForm: any):Observable<Product[]>{
      return this.http.put<Product[]>(`${this.api_url}/${id}`,RecipeForm)
    }
}
