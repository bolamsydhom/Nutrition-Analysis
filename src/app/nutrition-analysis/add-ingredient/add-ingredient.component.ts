import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IngredientsAnlysisService } from 'src/app/_services/ingredients-anlysis.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit {
  states$!: Observable<[]>;
  ingredient: string = '';
  ingredientsArray$!: Observable<string[]>;
  constructor(private _ingredientsService: IngredientsAnlysisService, private router: Router) {}

  ngOnInit(): void {
    this.states$ = this._ingredientsService.geIngredientsExamples();
    this.ingredientsArray$ = this._ingredientsService.ingredientsArrayChanged;
  }

  onAddNewIngredient() {
    if (
      this.ingredient.length > 5 &&
      this.ingredient.match(/^\d/) &&
      (this.ingredient.includes('gr') || this.ingredient.includes('kg'))
    ) {
      this._ingredientsService.addIngredient(this.ingredient);
      this.ingredient = '';
    }else{
      alert('Please enter valid ingredient ex: 100 gr chicken, 1 kg meat');
    }
  }

  onDeleteIngredient(ingredient: string) {
    this._ingredientsService.deleteIngredient(ingredient);
  }

  onStartAnalysis() {
    this.router.navigate(['/nutrition-analysis']);
  }
}
