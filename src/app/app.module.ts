import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIngredientComponent } from './nutrition-analysis/add-ingredient/add-ingredient.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AnalysisPageComponent } from './nutrition-analysis/analysis-page/analysis-page.component';
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
    NgxSpinnerModule
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
