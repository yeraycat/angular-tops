import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatGridListModule } from '@angular/material/grid-list';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { reducer } from './state/categories.reducer';
import { CategoriesFacade } from './categories-facade';
import { CategoriesEffects } from './state/categories.effects';
import { CategoriesService } from './services/categories.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CategoriesPageComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatGridListModule,
    StoreModule.forFeature('categories', reducer),
    EffectsModule.forFeature([CategoriesEffects])
  ],
  providers: [CategoriesFacade, CategoriesService]
})
export class CategoriesModule { }
