import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientComponent } from './nutrition-analysis/add-ingredient/add-ingredient.component';

const routes: Routes = [
  {path:'', component: AddIngredientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
