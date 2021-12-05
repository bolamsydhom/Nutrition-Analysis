import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiKeys, baseUrl } from 'src/environments/environment';

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


  getFullRecipeAnalysis():  Observable<any> {
    const body = {
      ingr: this.ingredientsArray
    }
    return this.http.post(baseUrl + '/nutrition-details', body) ;
  }

  getIngredientData(i: number): Observable<any>{
    const params = {ingr: this.ingredientsArray[i]};
    return this.http.get(baseUrl+'/nutrition-data', { params: params });
  }
}
