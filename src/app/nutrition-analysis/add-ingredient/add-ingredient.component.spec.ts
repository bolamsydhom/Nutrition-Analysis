import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { Observable, of } from 'rxjs';
import { IngredientsAnlysisService } from 'src/app/_services/ingredients-anlysis.service';

import { AddIngredientComponent } from './add-ingredient.component';

describe('AddIngredientComponent', () => {
  let component: AddIngredientComponent;
  let fixture: ComponentFixture<AddIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddIngredientComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        TypeaheadModule.forRoot(),
      ],
      providers: [IngredientsAnlysisService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new ingredient', async () => {
    component.ingredient = '100gr chicken';
    component.onAddNewIngredient();

    component.ingredientsArray$ = of([component.ingredient]);
    fixture.detectChanges();
    component.ingredientsArray$.subscribe((res) => {
      expect(res.length).toEqual(1);
    });
    const liList = fixture.debugElement.queryAll(By.css('li'));
    expect(liList.length).toEqual(1);

    const button = fixture.debugElement.queryAll(By.css('button'));
    expect(button.length).toEqual(1);
  });

  it('should delete ingredient', async () => {
    component.onDeleteIngredient(component.ingredient);
    component.ingredientsArray$ = of([]);
    fixture.detectChanges();

    component.ingredientsArray$.subscribe((res) => {
      expect(res.length).toEqual(0);
    });

    const liList = fixture.debugElement.queryAll(By.css('li'));
    expect(liList.length).toEqual(0);

    const button = fixture.debugElement.queryAll(By.css('button'));
    expect(button.length).toEqual(0);
  });
});
