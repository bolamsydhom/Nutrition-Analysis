import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsAnlysisService {

  ingredientsArrayChanged = new EventEmitter<string[]>();
  ingredientsArray: string[] = [];

  constructor(private http: HttpClient) { }

  geIngredientsExamples(): Observable<[]>{
    return this.http.get<[]>('/assets/ingredients-examples.json');
  }


  addIngredient(ingredient:string){
    this.ingredientsArray.push(ingredient);
    this.ingredientsArrayChanged.emit(this.ingredientsArray);
  }

  deleteIngredient(ingredient: string): void {
    this.ingredientsArray = this.ingredientsArray.filter((i) => i !== ingredient);
    this.ingredientsArrayChanged.emit(this.ingredientsArray);
  }

}
