import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IngredientsAnlysisService } from 'src/app/_services/ingredients-anlysis.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit ,AfterViewInit{
  states$!: Observable<[]>;
  ingredient: string = '';
  ingredientsArray$!: Observable<string[]>;
  @ViewChild('footerCanvas') footerCanvas!: ElementRef<any>;
  ctx: any;
  constructor(
    private _ingredientsService: IngredientsAnlysisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.states$ = this._ingredientsService.geIngredientsExamples();
    this.ingredientsArray$ =
      of(this._ingredientsService.ingredientsArray) ||
      this._ingredientsService.ingredientsArrayChanged;

 
  }

  ngAfterViewInit(): void {
    this.ctx = this.footerCanvas.nativeElement.getContext('2d');
    this.footerCanvas.nativeElement.width = window.outerWidth;
  }

  onAddNewIngredient() {
    if (this.ingredient.length > 5 && this.ingredient.match(/^\d/)) {
      this._ingredientsService.addIngredient(this.ingredient);
      this.ingredient = '';
      
      
      this.ctx.beginPath();
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      this.ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
      // ctx.arc(0, 0, this.footerCanvas.nativeElement.width, this.footerCanvas.nativeElement.height);
      this.ctx.arc(Math.floor(Math.random() * 1900),Math.floor(Math.random() * 200), Math.floor(Math.random() * 100), 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();

    } else {
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
