import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientsAnlysisService } from 'src/app/_services/ingredients-anlysis.service';

@Component({
  selector: 'app-analysis-page',
  templateUrl: './analysis-page.component.html',
  styleUrls: ['./analysis-page.component.scss']
})
export class AnalysisPageComponent implements OnInit {
  ingredientsArray!:string[];
  ingredientAnalysisData$!: Observable<string[]>; 
  fullRecipeAnalysis$!: Observable<any>;
  constructor(private _ingredientsService: IngredientsAnlysisService) { }

  ngOnInit(): void {
    this.ingredientsArray = this._ingredientsService.ingredientsArray;
  }

  getNutData(e: boolean, i: number){
    if (event) {
      this.ingredientAnalysisData$ = this._ingredientsService.getIngredientData(i);
    }
  }

  onAnalysisAllRecipe(){
   this.fullRecipeAnalysis$ =  this._ingredientsService.getFullRecipeAnalysis();
  }

}
