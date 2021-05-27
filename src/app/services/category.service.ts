import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpService: HttpClient) { }

  //load all the categories
  public getAllCategories(){
    return this.httpService.get(`${baseUrl}/category/`)
  }

  //add new category
  public addCategory(category){
    return this.httpService.post(`${baseUrl}/category/`, category);
  }
}
