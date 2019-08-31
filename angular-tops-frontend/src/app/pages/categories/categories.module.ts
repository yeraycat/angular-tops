import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';


import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducer';
import { CategoriesFacade } from './categories-facade';

@NgModule({
  declarations: [CategoriesPageComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatGridListModule,
    StoreModule.forFeature('categories', reducer),
  ],
  providers: [CategoriesFacade]
})
export class CategoriesModule { }
