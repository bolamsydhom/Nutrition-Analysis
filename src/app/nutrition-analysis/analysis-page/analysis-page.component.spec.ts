import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientsAnlysisService } from 'src/app/_services/ingredients-anlysis.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AnalysisPageComponent } from './analysis-page.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AnalysisPageComponent', () => {
  let component: AnalysisPageComponent;
  let fixture: ComponentFixture<AnalysisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisPageComponent ],
      imports: [
        HttpClientTestingModule,
        AccordionModule.forRoot(),
        BrowserAnimationsModule
      ],
      providers: [IngredientsAnlysisService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display accordions accordingly to the ingredients ', () => {
    component.ingredientsArray = ['100gr chicken', '200gr Meat'];
    fixture.detectChanges();
    const accordionList = fixture.debugElement.queryAll(By.css('.panel.acc'));
    expect(accordionList.length).toBe(2);
  });
  
});
