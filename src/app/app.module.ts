import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddIngredientComponent } from './nutrition-analysis/add-ingredient/add-ingredient.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnalysisPageComponent } from './nutrition-analysis/analysis-page/analysis-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddIngredientComponent,
    AnalysisPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TypeaheadModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
