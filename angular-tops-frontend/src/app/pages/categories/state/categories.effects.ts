import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../types/category.interface';
import * as categoriesActions from './categories.actions';


@Injectable()
export class CategoriesEffects {

    constructor(
        private actions$: Actions,
        private categoriesService: CategoriesService
    ) {}

    @Effect()
    loadCategories$ = this.actions$.pipe(
        ofType(categoriesActions.CategoriesActionTypes.Load),
        mergeMap((action: categoriesActions.Load) => this.categoriesService.getCategories().pipe(
            map((categories: Category[]) => (new categoriesActions.LoadSuccess(categories)))
        ))
    );
}
