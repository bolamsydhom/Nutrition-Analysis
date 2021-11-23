import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddIngredientComponent } from './nutrition-analysis/add-ingredient/add-ingredient.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AnalysisPageComponent } from './nutrition-analysis/analysis-page/analysis-page.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { InterceptorService } from './_services/interceptor.service';

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
    AccordionModule.forRoot(),
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
