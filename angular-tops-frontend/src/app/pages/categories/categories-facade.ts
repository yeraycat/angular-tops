import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoriesState } from './types/state.interface';
import * as fromCategories from './state/reducer';

@Injectable()
export class CategoriesFacade {

    allCategories$: Observable<{id: number, name: string}[]>;

    constructor(private store: Store<CategoriesState>) {
        this.allCategories$ = this.store.pipe(select(fromCategories.getAllCategories));
    }

    getCategories() {
        this.store.dispatch({type: '[Categories] Load categories'});
    }
}
