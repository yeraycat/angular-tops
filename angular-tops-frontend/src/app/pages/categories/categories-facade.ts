import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoriesFacade {

    allCategories$: Observable<{id: number, name: string}[]>;

    constructor(private store: Store<any>) {
        this.allCategories$ = this.store.pipe(select('categories'), map(c => c ? c.categoriesList : null));
    }

    getCategories() {
        this.store.dispatch({type: '[Categories] Load categories'});
    }
}
