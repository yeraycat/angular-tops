import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';


import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesPageComponent } from './categories-page/categories-page.component';

@NgModule({
  declarations: [CategoriesPageComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatGridListModule
  ]
})
export class CategoriesModule { }
