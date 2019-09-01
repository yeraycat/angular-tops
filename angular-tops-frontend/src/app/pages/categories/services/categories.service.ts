import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../types/category.interface';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CategoriesService {

    private categoriesUrl = 'api/categories';

    constructor(private http: HttpClient) {

    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.categoriesUrl);
        return of([
            {id: 1, name: 'Browser MMORPGs'},
            {id: 2, name: 'WOW Private Servers'},
            {id: 3, name: 'Runescape Private Servers'},
            {id: 4, name: 'Ragnarok Online Private Servers'},
            {id: 5, name: 'MU Online Private Servers'},
            {id: 6, name: 'Lineage 2 Private Servers'},
        ]);
    }
}
