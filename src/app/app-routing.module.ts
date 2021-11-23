import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientComponent } from './nutrition-analysis/add-ingredient/add-ingredient.component';
import { AnalysisPageComponent } from './nutrition-analysis/analysis-page/analysis-page.component';

const routes: Routes = [
  {path:'', component: AddIngredientComponent},
  {path:'nutrition-analysis', component: AnalysisPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
