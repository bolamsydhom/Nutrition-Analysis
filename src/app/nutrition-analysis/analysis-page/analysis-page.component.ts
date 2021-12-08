import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { IngredientsAnlysisService } from 'src/app/_services/ingredients-anlysis.service';

@Component({
  selector: 'app-analysis-page',
  templateUrl: './analysis-page.component.html',
  styleUrls: ['./analysis-page.component.scss'],
})
export class AnalysisPageComponent implements OnInit {
  ingredientsArray!: string[];
  ingredientAnalysisData$!: Observable<string[]>;
  fullRecipeAnalysis$!: Observable<any>;
  math = Math;
  constructor(private _ingredientsService: IngredientsAnlysisService, private router: Router) {}

  ngOnInit(): void {
    this.ingredientsArray = this._ingredientsService.ingredientsArray;
    if(this.ingredientsArray?.length > 0){
    this.onAnalysisAllRecipe();
    }else{
      this.router.navigate(['/']);
    }
  }

  getNutData(e: boolean, i: number) {
    if (event) {
      this.ingredientAnalysisData$ =
        this._ingredientsService.getIngredientData(i);
    }
  }

  onAnalysisAllRecipe() {
    this.fullRecipeAnalysis$ = this._ingredientsService.getFullRecipeAnalysis().pipe(
      shareReplay()
    );
  }
}
